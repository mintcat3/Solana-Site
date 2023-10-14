
//import web3 from '/node_modules/@solana/web3.js'
// const web3 = require("@solana/web3.js");

// connect your phantom wallet and make a transaction button, then display the transaction shit of ur account


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
    const receiverAddress = "3AAiGng32r5SZVr8RLi6GxusY8xgXKqedPY74dRkixEA" // my devnet key

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
        copnsole.log("blockhash", hash);
        transaction.recentBlockhash = hash.blockhash;
        return transaction;
    }

    async function signAndSendTransaction(wallet, transaction, connection) {
        const { signature } = await window.solana.signAndSendTransaction(transaction);
        await connection.confirmTransaction(signature);
        return signature;
    }
}

