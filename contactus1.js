function ValidateEmail(){
    var first_name = document.getElementById("firstname").value;
    var last_name = document.getElementById("lastname").value;  
    var email = document.getElementById("email").value;
    var select1 = document.getElementById("select").value;				
    var message = document.getElementById("message").value;    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(select1);
    if(first_name == ""){
        alert("First Name field cannot be Empty!");
    }

    //else if(email.value.trim(mailformat)){
        //alert("invalid email address!!");
        //event.preventDefault();
    //}

    else if(last_name == ""){
        alert("Last Name Field cannot be Empty")
    }

    else if (email == ""){
        alert("Email field cannot be Empty");
    }

    else if (message == ""){
        alert("Message Box cannot be Empty");
    }

    else {
        document.getElementById("form").classList.add("hide");
        document.getElementById("query").classList.remove("hide");
        document.getElementById('display').innerHTML = "First Name:"+ first_name;
        document.getElementById('display1').innerHTML = "Last Name:"+ last_name;			
        document.getElementById('display2').innerHTML = "Email:"+ email;	
        document.getElementById('display3').innerHTML = "subject:" + select1;
        document.getElementById('display4').innerHTML = "Message:"+ message; 
        document.getElementById("query").classList.add("hide");
        document.getElementById("form").classList.add("hide");  
        
    }
}

