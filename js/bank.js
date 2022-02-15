//login form activation

document.getElementById('login-submit').addEventListener('click', function(){
  const userEmail =  document.getElementById('user-email').value;

  const userPassword= document.getElementById('user-password').value;
 
  if (userEmail == 'support@drnbank.com' && userPassword == 'drnBank'){
     window.location.href = "bank-site.html";
  }
  else {
    window.location.href = "wrong.html";
  }

})



    

