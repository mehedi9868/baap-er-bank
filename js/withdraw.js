document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawField = document.getElementById('withdraw-field');
    const withdrawTextElement = document.getElementById('withdraw-total');
    const newWidthdraw = parseFloat(newWithdrawField.value);
    newWithdrawField.value = '';
    const previousWithdraw = parseFloat(withdrawTextElement.innerText);
    const totalWidthraw = newWidthdraw + previousWithdraw;
    withdrawTextElement.innerText = totalWidthraw;
    // update
    const balanceElement = document.getElementById('Balance-total');
    const totalBalance = parseFloat(balanceElement.innerText);
    balanceElement.innerText = totalBalance - newWidthdraw;
})