function handleSubmit () {
	const firstname = document.getElementById('firstname').value;
	const lastname = document.getElementById('lastname').value;
	const contactnumber = document.getElementById('contactnumber').value;
	const email = document.getElementById('email').value;

	sessionStorage.setItem("FIRSTNAME", firstname);
	sessionStorage.setItem("CONTACTNUMBER", contactnumber);
	sessionStorage.setItem("EMAIL", email);


	return;

}