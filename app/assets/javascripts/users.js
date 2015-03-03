//java script required field validetor
function myFunction() {
 	var valid = true;
 	var msg="";
 	var date = new Date();
 	var cDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
 	document.getElementById('error').innerHTML = "";
 	msg="* Incomplete form <br>"; 
 	 	
 	var firstName = document.getElementById("first_name").value;
 	
 	
 	   if (firstName == null || firstName == "") {
         msg+="* First name must be filled out <br>";
         valid = false;
     }
 	   
    var lastName = document.getElementById("last_name").value;
 	
 	
 	   if (lastName == null || lastName == "") {
         msg+="* last name must be filled out <br>";
         valid = false;
     }
     
     // var today = new date();
     var bth_date = document.getElementById("datepicker").value;
     var bDate = new Date(bth_date);
     var ncDate = new Date(cDate);
     
      if (bth_date == null || bth_date == "") {
         msg+="* Birth Date must be filled out <br>";
         valid = false;
        }
        
    
              else if( bDate > ncDate) {
        		
        	    msg+="* Not a valid date<br>";
        	    valid = false;
        }
     	
       
    
    var x = document.getElementById("age").value;
 	
 	
 	   if (x == null || x == "") {
         msg+="* Age must be filled out <br>";
         valid = false;
     }
     
     var cont = document.getElementById("contact_no").value;
 	
 	
 	   if (cont == null || cont == "") {
         msg+="* Contact Number must be filled out <br>";
         valid = false;
     }
     
      var selectChoose = document.getElementById('science_list').value;
   					   alert("hi");
              var maxOptions = 2;
              var optionCount = 0;
              for (var i = 0; i < selectChoose.length; i++) {
                  if (selectChoose[i].selected) {
                      optionCount++;
                      if (optionCount > maxOptions) {
                          msg+= "* validation failed, not submitting<br>";
                         valid= false;
                      }
                  }
              }
           
       
 	 
 	    var ans = document.getElementById("answer").value;
 	 	
 	   if (ans == null || ans == "") {
         msg+="* Answer must be filled out <br>";
         valid = false;
     }
     
      var eid = document.getElementById("email_id").value;
 	
 	
 	   if (eid == null || eid == "") {
         msg+=" * Email Id must be filled out <br>";
         valid = false;
     }
 	 
    var pwd = document.getElementById("password").value;
 	
 	
 	   if (pwd == null || pwd == "") {
         msg+=" *Password must be filled out <br>";
         valid = false;
     }
    
     var re_age = document.getElementById("age").value;
  // alert(re_age);
  if(re_age <= 3 || re_age > 30 )
  {
  	 
  	msg+=" * pzl fill correct age <br>";
  	valid= false;
  	
  }
  
    // alert("hi");
  // else{
  	// alert("correct age");
  	// return true;
  // }
  //java script validation for Email_id
 	 var sEmail=document.getElementById("email_id").value;
 	 var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    // alert(sEmail);
 	if(!(sEmail.match(reEmail))) {
 		msg+=" * Invalid email address <br>";
    valid = false;
   }
   //return true;
   
//java script validation for password match

        var password = document.getElementById("password").value;
        var confirm_password = document.getElementById("confirm_password").value;
        // alert(password);
        // alert(confirm_password);
        if (password != confirm_password) {
            msg+="Passwords Do not match <br>";
            document.getElementById("password").style.borderColor = "#E34234";
            document.getElementById("confirm_password").style.borderColor = "#E34234";
            valid = false;
        }
        // else {
            // alert("Passwords Match!!!");
            // return true;
        // }
         if (valid==false){ 
   var div =document.getElementById('error');
   div.innerHTML = div.innerHTML + msg; 
        //alert(msg);
 $('#error').show(); 
 $("#error").delay(7000).fadeOut();

         return valid;
		}

   }

$(document).ready(function(){
	$( "#datepicker" ).datepicker({
		maxDate: new Date()
	
});
   
   


   
   
     
     $("#reg").click(function(){
   
     $('#myModal').modal('show');
     });

	$ .popover ;

 
	$("#science").change(function(){
		
		$("#science_list").show();
		$("#commerce_list").hide();
		$("#arts_list").hide();
		$("#dilpoma_list").hide();
	});
	$("#commerce").change(function(){
		
		$("#science_list").hide();
		$("#commerce_list").show();
		$("#arts_list").hide();
		$("#diploma_list").hide();
	});
	$("#arts").change(function(){
		
		$("#science_list").hide();
		$("#commerce_list").hide();
		$("#arts_list").show();
		$("#dilpoma_list").hide();
	});
	$("#diploma").change(function(){
		
		$("#science_list").hide();
		$("#commerce_list").hide();
		$("#arts_list").hide();
		$("#diploma_list").show();
	});
	









// $.noConflict();
   // $(document).ready(function(){ 
 // $("science").change(function () {
      // if($("select option:selected").length > 2) {
          // alert("plz select only two subject");
          // return false;
      // }
  // });  
  // }
//   

	//progress bar
	
	
$(".user_table input").keyup(function() {

var numValid = 0;
$(".user_table input[required]").each(function() {

    if (this.validity.valid) {
        numValid++;
     }
});

var progress = $("#progress"),
    progressMessage = $("#progress-message");

  if (numValid == 0) {
            progress.attr("value", "0");
             progressMessage.text("The form, it wants you.");
    }
    
  if (numValid == 1) {
           progress.attr("value", "5");
           progressMessage.text("There you go, great start!");
     }
     
  if (numValid == 2) {
            progress.attr("value", "20");
            progressMessage.text("Nothing can stop you now.");
     }
     
   if (numValid == 3) {
           progress.attr("value", "40");
           progressMessage.text("You're basically a hero, right?");
        }

	if (numValid == 4) {
              progress.attr("value", "50");
              progressMessage.text("They are going to write songs about you.");
		}
		
		if (numValid == 5) {
          progress.attr("value", "60");
          progressMessage.text("SO CLOSE. PRESS THE THING.");
       }
       
       if (numValid == 6) {
    progress.attr("value", "70");
    progressMessage.text("SO CLOSE. PRESS THE THING.");
    
}

if (numValid == 7) {
    progress.attr("value", "80");
    progressMessage.text("SO CLOSE. PRESS THE THING.");
}

if (numValid == 8) {
    progress.attr("value", "90");
    progressMessage.text("SO CLOSE. PRESS THE THING.");
}
if (numValid == 9) {
    progress.attr("value", "100");
    progressMessage.text("SO CLOSE. PRESS THE THING.");
}


  
});


});
//polar chart

var polarData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];

			window.onload = function(){
				var ctx = document.getElementById("chart-area").getContext("2d");
				window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
					responsive:true
				
				});
				


			};


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '628839367262478',
      xfbml      : true,
      version    : 'v2.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'))
   
   
   function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}



FB.login(function(response) {
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
  }
});

FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    console.log(response.authResponse.accessToken);
  }
});

FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
});

 FB.logout(function(response) {
        // Person is now logged out
    });

 // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));





