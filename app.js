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
async function checkTransactionStatus(txHash) {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const receipt = await provider.getTransactionReceipt(txHash);

        if (receipt && receipt.status === 1) {
            alert("Transaction Successful!");
        } else {
            alert("Transaction Failed!");
        }
    } catch (error) {
        alert("Error fetching transaction status!");
    }
}
async function processPayment() {
    if (!window.ethereum) {
        alert("MetaMask not detected!");
        return;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const sender = accounts[0];

    const transaction = {
        from: sender,
        to: "0xYourCryptoWalletAddressHere", // Apna wallet address
        value: ethers.utils.parseEther("0.01").toHexString()
    };

    try {
        const txHash = await ethereum.request({ method: "eth_sendTransaction", params: [transaction] });
        alert("Transaction Sent! TX Hash: " + txHash);

        setTimeout(() => checkTransactionStatus(txHash), 5000); // 5 sec baad check karega
    } catch (error) {
        alert("Transaction Failed!");
    }
}
function processCardPayment() {
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    if (!cardNumber || !expiryDate || !cvv) {
        alert("Please fill all card details.");
        return;
    }

    // Dummy validation (Original system me Stripe ya PayPal ka integration hoga)
    if (cardNumber.length === 16 && expiryDate.length === 5 && cvv.length === 3) {
        alert("Card details accepted. Processing payment...");
        
        // Crypto transaction start karo
        processPayment();
    } else {
        alert("Invalid card details. Please check again.");
    }
}
