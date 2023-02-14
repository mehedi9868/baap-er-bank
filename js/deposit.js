document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositField = document.getElementById('deposit-field');
    const depositTextElement = document.getElementById('deposit-total');
    const newDeposit = parseFloat(newDepositField.value);
    newDepositField.value = '';
    const previousDeposit = parseFloat(depositTextElement.innerText);
    const totalDeposit = newDeposit + previousDeposit;
    depositTextElement.innerText = totalDeposit;
    // update
    const balanceElement = document.getElementById('Balance-total');
    const totalBalance = parseFloat(balanceElement.innerText);
    balanceElement.innerText = totalBalance + newDeposit;
})