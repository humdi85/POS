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
function processPreAuth() {
    const preAuthCode = document.getElementById("preAuthCode").value;

    if (preAuthCode.length === 4 || preAuthCode.length === 6) {
        alert("Pre-auth Code Accepted. Processing Payment...");
        
        // Crypto transaction start karo
        processPayment();
    } else {
        alert("Invalid Code! Please enter a 4 or 6 digit code.");
    }
}
function startApplePay() {
    if (!window.ApplePaySession) {
        alert("Apple Pay is not supported on this device.");
        return;
    }

    const request = {
        countryCode: "US", 
        currencyCode: "USD",
        supportedNetworks: ["visa", "mastercard", "amex"],
        merchantCapabilities: ["supports3DS"],
        total: { label: "Crypto POS", amount: "10.00" } 
    };

    const session = new ApplePaySession(3, request);

    session.onvalidatemerchant = (event) => {
        session.completeMerchantValidation({}); 
    };

    session.onpaymentauthorized = (event) => {
        alert("Apple Pay Payment Successful!");
        processPayment(); 
        session.completePayment(ApplePaySession.STATUS_SUCCESS);
    };

    session.begin();
}
let userWallet = null;

// ✅ Wallet Connect Function
async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            userWallet = accounts[0];
            document.getElementById("walletAddress").innerText = `Connected: ${userWallet}`;
            document.getElementById("payCrypto").disabled = false;
        } catch (error) {
            alert("Wallet connection failed!");
        }
    } else {
        alert("MetaMask or Web3 Wallet not detected!");
    }
}

// ✅ Crypto Payment Function
async function payWithCrypto() {
    if (!userWallet) {
        alert("Please connect your wallet first!");
        return;
    }

    const transactionParameters = {
        to: "YOUR_WALLET_ADDRESS", // Apni receiving wallet ka address yahan dalna!
        from: userWallet,
        value: "0x2386F26FC10000", // 0.01 ETH (Hex format me)
    };

    try {
        await ethereum.request({ method: "eth_sendTransaction", params: [transactionParameters] });
        alert("Crypto Payment Sent Successfully!");
    } catch (error) {
        alert("Transaction Failed!");
    }
}
async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            alert("Wallet Connected: " + accounts[0]);
            document.getElementById("wallet-status").innerText = "Connected: " + accounts[0];
        } catch (error) {
            console.error("User denied wallet connection", error);
            alert("Wallet connection failed!");
        }
    } else {
        alert("MetaMask not detected. Please install MetaMask.");
    }
}
if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask detected!");
    document.getElementById("status").innerText = "MetaMask Detected";
} else {
    console.log("MetaMask not detected!");
    document.getElementById("status").innerText = "MetaMask Not Installed";
}
