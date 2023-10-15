
// import solanaWeb3 from '/node_modules/@solana/web3.js/lib/index.iife.js' //module
// const solanaWeb3 = require("@solana/web3.js");

// connect your phantom wallet and make a transaction button, then display the transaction stuff of ur account


var wallet;
const lamports_per_sol = solanaWeb3.LAMPORTS_PER_SOL;

function connectWallet() {
    (async () => {
        try {
            wallet = await window.solana.connect();
            console.log(wallet.publicKey.toString());
        } catch (err) {
            console.log(err);
        }

    })();
    window.solana.on("connect", () => document.getElementById("connect_button").innerText = "Connected");
    console.log(window)
}

async function sendButtonClick(){
    const receiverAddress = "8FLkPhLqfaawJh8CfG2Kf2HLVHEyqnfmkXbDxis3Wemg" // my devnet key

    const quantity = document.getElementById("quantity").value
    if (quantity != null && quantity != 0) {
        document.getElementById("status_p").text = "Status";
        document.getElementById("status_p").innerText = "Sending " + quantity + " SOL to " + ellipsizeAddress(receiverAddress) + " account address";
        await signInTransactionAndSendMoney(receiverAddress, quantity)
    } else {
        document.getElementById("status_p").text = "Status";
        document.getElementById("status_p").innerText = "Amount must be more than 0."
    }
}

function ellipsizeAddress(str) {
    if (str.length > 35) {
        return str.substr(0, 8) + '...' + str.substr(str.length - 8, str.length);
    }
    return str;
}

function signInTransactionAndSendMoney(destPubkeyStr, quantity) {
    (async () => {
        const connection = new solanaWeb3.Connection("https://api.devnet.solana.com");
        const transaction = new solanaWeb3.Transaction();

        try {
            lamports = quantity * lamports_per_sol;

            console.log("starting sendMoney");
            const destPubkey = new solanaWeb3.PublicKey(destPubkeyStr);
            const walletAccountInfo = await connection.getAccountInfo(wallet.publicKey);
            console.log("wallet data size", walletAccountInfo?.data.length);
            
            const recieverAccountInfo = await connection.getAccountInfo(destPubkey);
            console.log("reciever data size", recieverAccountInfo?.data.length);

            const instruction = solanaWeb3.SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: destPubkey,
                lamports, // abt half a SOL
            });
            let trans = await setWalletTransaction(instruction, connection);

            let signature = await signAndSendTransaction(
                wallet,
                trans,
                connection
            );
        } catch (e) {
            console.warn("Failed", e);
        }
    })();

    async function setWalletTransaction(instruction, connection) {
        const transaction = new solanaWeb3.Transaction();
        transaction.add(instruction);
        transaction.feePayer = wallet.publicKey;
        let hash = await connection.getRecentBlockhash();
        console.log("blockhash", hash);
        transaction.recentBlockhash = hash.blockhash;
        return transaction;
    }

    // async function signAndSendTransaction(wallet, transaction, connection) {
    //     const { signature } = await window.solana.signAndSendTransaction(transaction);
    //     await connection.confirmTransaction(signature);
    //     return signature;
    // }

    async function signAndSendTransaction(wallet, transaction, connection) {
        const { signature } = await window.solana.signAndSendTransaction(transaction);
        console.log('Transaction signature:', signature);
    
        // Wait for full confirmation
        let confirmedTransaction = null;
        while (confirmedTransaction === null) {
            confirmedTransaction = await connection.getConfirmedTransaction(signature);
            if (confirmedTransaction === null) {
                console.log('Waiting for full confirmation...');
                await new Promise(resolve => setTimeout(resolve, 1000));  // Wait for 1 second
            }
        }
    
        console.log('Transaction fully confirmed');
        // Extract relevant information
        const blockTime = new Date(confirmedTransaction.blockTime * 1000).toLocaleString();
        const feePayer = confirmedTransaction.transaction.feePayer;
        const status = confirmedTransaction.meta.status;
        const receiverWalletID = transaction.instructions[0].keys[1].pubkey.toString();
        const amount = document.getElementById("quantity").value

        // Format transaction details
        const transactionDetails =
            `Block Time: ${blockTime}\n` +
            `Sender/Fee Payer: ${feePayer}\n` +
            `Receiver: ${receiverWalletID}\n` + 
            `Amount sent: ${amount} SOL\n` + 
            `Status: Success`;

        // Update webpage with transaction details
        document.getElementById("status_p").innerText = "Transaction Details:\n" + transactionDetails;
        return signature;
    }
}



