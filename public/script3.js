// let backToMain = setTimeout(()=>{
// 	console.log('trying to redirect')
// 	window.location.href = "http://localhost:3000/login"
// }, 2000);

var signUpForm = ()=>{
	let signUp = document.querySelectorAll('.signUp');
	console.log(signUp.length);
	console.log('hi')
	signUp.forEach((item)=>{
		item.addEventListener("click", openForm)
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
	document.getElementById("myForm").style.display = "none";
};
 
var showAlert = ()=>{
 let success = document.querySelector('#success');
 success.addEventListener('click',confirmSignup )
}
var confirmSignup =()=> {
	alert(" Done");
	
}
console.log('testing')
signUpForm();
cancelForm();
