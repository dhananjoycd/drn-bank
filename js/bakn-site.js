//user theke deposite or withdraw amount nebar jonno
function inputAmount(takeAmount){
    const inputAmountBox = document.getElementById(takeAmount);
    const amount = parseFloat(inputAmountBox.value);
   
    inputAmountBox.value = '';
    console.log(amount);
    if(amount >= 0){
        return amount;
    }
    return 0;
}

//total balance update for deposite and withdraw 
function totalPreviousBalance(preTotal, currentInput, isIt){

    const totalbalanceText = document.getElementById(preTotal);
    const totalBalance = parseFloat(totalbalanceText.innerText);
    
    if(isIt == true){
        totalbalanceText.innerText = currentInput + totalBalance ;
    }
    else if(isIt == false && currentInput <= totalBalance) {
        totalbalanceText.innerText = totalBalance - currentInput ;
    }
}

//deposite and withdraw amount update

function totalDepositeWithdraw (previousTrans , preTotal ,isDepo, currentTrans){

    const totalbalanceText = document.getElementById(preTotal);
    const totalBalance = parseFloat(totalbalanceText.innerText);

    const totalBalanceText = document.getElementById(previousTrans);

    const totalDepoBalance = parseFloat(totalBalanceText.innerText);

    if (isDepo == true)
    {
    totalBalanceText.innerText= currentTrans + totalDepoBalance;
    }

   else if(currentTrans<=totalBalance && isDepo == false)
    {
    totalBalanceText.innerText= currentTrans + totalDepoBalance;
    }
 
}


//dposite calculation --
document.getElementById('deposit-button').addEventListener('click', function(){

  const depoAmount=inputAmount('deposit-input');

  totalDepositeWithdraw('total-deposite','total-balance',true, depoAmount);

  totalPreviousBalance('total-balance', depoAmount, true);

});



    //withdraw Calculation --
    document.getElementById('withdraw-button').addEventListener('click', function(){

        const withdrawAmount = inputAmount ('withdraw-input');

        totalDepositeWithdraw('total-withdraw','total-balance', false, withdrawAmount);

        totalPreviousBalance('total-balance', withdrawAmount, false);

        });