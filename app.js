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
