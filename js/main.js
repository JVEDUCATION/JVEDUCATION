const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function validate()
{
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
if(email=="123@gmail.com"&& password=="123")


	window.open("https://jveduc");
	return false;

}
else
{
	alert("Login Failed");
} 



}
