function validate()
{
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
if(email=="123@gmail.com"&& password=="123")
{

	window.open("file:///C:/Users/Administrator/Desktop/Janith/outline%20card/outline.html");
	return false;


}
else
{
	alert("Login Failed");
}



}