/* Call validations */
function validate(){
    x = validadeEmail();
    y = validatePWD();
         
    buttonSingnIn(x, y);
                
}
            
function validadeEmail(){
    var pattern= /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var email = document.getElementById('Email').value;
                
    if(email==""){
        document.getElementById('errEmail').style.color='red';
        document.getElementById('errEmail').innerHTML='Please enter Email';
        return -1;
    }
    else if(!pattern.test(email)){
        document.getElementById('errEmail').style.color='red';
        document.getElementById('errEmail').innerHTML='Please enter Email in a correct format';
        return -1;
    }
    else{
        document.getElementById('errEmail').innerHTML=""; //remove an error
    }
    return 0;
}//end of validade email function
            
            
function validatePWD(){
    var pattern= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,50}/;
    var password = document.getElementById('Password').value;
                
    if(password==""){
        document.getElementById('errPWD').style.color='red';
        document.getElementById('errPWD').innerHTML='Please enter password';
        return -1;
    }
    else if(!pattern.test(password)){
        document.getElementById('errPWD').style.color='red';
        document.getElementById('errPWD').innerHTML='Password must have min 8 and max 50 characters';
        return -1;
    }
    else{
        document.getElementById('errPWD').innerHTML=""; //remove an error
    }
    return 0;
}//End of validade password function
            
function buttonSingnIn(x, y){
    if (x + y == 0){
        if((document.getElementById('Password').value == "C@rla001")
            && (document.getElementById('Email').value == "admin@gmail.com")) {
                document.getElementById("myForm").action =  "DashBord.html";
            }
            else {
//              alert("Oops!!");
                document.getElementById('errorLogin').style.color='red';
                document.getElementById('errorLogin').innerHTML='Email or password is not correct';
            }
    }
}//end of create profile function
        