function copyContract() {
    const contractAddress = document.getElementById('contract-address');
    navigator.clipboard.writeText(contractAddress.value).then(() => {
        alert("Contract address copied to clipboard!");
    });
}

function selectWallet(walletName) {
    alert(`${walletName} wallet selected!`);
    console.log(`Wallet selected: ${walletName}`);
}
