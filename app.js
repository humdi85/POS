function processPayment() {
    alert("Payment process will start here.");
}
async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            document.getElementById("status").innerText = "Wallet Connected!";
        } catch (error) {
            document.getElementById("status").innerText = "Connection Failed!";
        }
    } else {
        alert("Please install MetaMask!");
    }
}

function processPayment() {
    alert("Payment process will start here.");
}
async function processPayment() {
    if (!window.ethereum) {
        alert("MetaMask not detected!");
        return;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const sender = accounts[0];  // Sender ka wallet address

    const transaction = {
        from: sender,
        to: "0xYourCryptoWalletAddressHere",  // Apna crypto wallet address yahan daalna
        value: ethers.utils.parseEther("0.01").toHexString() // 0.01 ETH send karega
    };

    try {
        const txHash = await ethereum.request({ method: "eth_sendTransaction", params: [transaction] });
        alert("Transaction Sent! TX Hash: " + txHash);
    } catch (error) {
        alert("Transaction Failed!");
    }
}
