function validate()
{
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
if(email=="123@gmail.com"&& password=="123")
{

	window.open("https://jveducation.github.io/JVEDUCATION/login.html");
	return false;


}
else
{
	alert("Login Failed");
}



}
