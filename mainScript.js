
 let url = "https://us-central1-mercdev-academy.cloudfunctions.net/login" 



async function get(){
 //user@example.com 
 //mercdev
  let log = document.getElementById('log');
  let title = document.getElementById('title');
  let auth = document.getElementById('auth');
  var user = {
  email: document.getElementById('log').value,
  password: document.getElementById('password').value
  };
  sessionStorage.setItem('email', user.email);
  sessionStorage.setItem('password', user.password);
  let response = await fetch( url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  console.log(response.status);
  result = await response.json();
  
  if(response.status == 200){
  
     console.log(result);
     sessionStorage.setItem('res', result.name);
    document.location.href = "userPage.html";
    log.style.border="1px rgba(151, 151, 151, 0.25)";

    if(window.innerWidth > 625){
    auth.style.height = "409px";
    }else{
    auth.style.height = "344px"  
    }

    title.style.display ="none";
 
  }else{
    
    log.style.border="solid 1px #ed4159";
    log.style.color ="#ed4159";
    if(window.innerWidth > 625){
    auth.style.height = "481px";

    }else{
    auth.style.height = "408px"; 
    }

    title.style.display ="block";
  }
}
var result;

document.getElementById('get').addEventListener('click', get);

log.onfocus = function() {
  this.style.color = "black";
  
}  

