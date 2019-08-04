

var signUpForm = ()=>{
	let signUp = document.querySelectorAll('.signUp');
	console.log(signUp.length);
	console.log('hi')
	signUp.forEach((item)=>{
		item.addEventListener("click", openForm)
	})
}

var login = ()=>{

	let admin = document.querySelector('.login');
	console.log(admin);
	admin.addEventListener('click',openForm);
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
 
// var showAlert = ()=>{
//  let success = document.querySelector('#success');
//  success.addEventListener('click',confirmSignup )
// }
// var confirmSignup =()=> {
// 	alert(" Done");
	
console.log('testing')
signUpForm();
cancelForm();
login();
