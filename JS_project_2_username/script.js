function check(){
  var username=document.getElementsById('user');
  var msg=document.getElementsById('fe');
  if(username.value.length<5){
    msg.textContent=("username must be 5 characters or more");
  }
}
