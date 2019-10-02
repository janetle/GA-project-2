

var signUpForm = ()=>{
	let signUp = document.querySelectorAll('.signUp');
	signUp.forEach((item)=>{
		item.addEventListener("click", openForm)
	})
}

var login = ()=>{
	let admin = document.querySelector('.login');
	admin.addEventListener('click',()=>{
		document.getElementById('myLoginForm').style.display = "block";
	});
}
 

 var cancelLogin= ()=>{
 	document.querySelector('.cancel').addEventListener('click',()=>{
 		document.getElementById('myLoginForm').style.display = "none";
 	})
 };
var cancelLoginAgain = () => {
	document.querySelector('.cancel-login').addEventListener('click', () =>{
		document.getElementById('myLoginForm').style.display = "none";
	})

}

var cancelForm = ()=>{
	let cancel = document.querySelector('.cancel');
	cancel.addEventListener('click', closeForm)
}


var openForm = ()=> {
	console.log("still testing")
	document.getElementById("myForm").style.display = "block";
};

var closeForm = ()=> {
	console.log("HI")
	document.getElementById("myForm").style.display = "none";
};
 

	
console.log('testing')
signUpForm();
cancelForm();
login();
cancelLogin();
cancelLoginAgain();
