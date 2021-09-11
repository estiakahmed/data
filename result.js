window.addEventListener('load' , () => {
  const firstname =	sessionStorage.getItem('FIRSTNAME');
  const contactnumber =	sessionStorage.getItem('CONTACTNUMBER');
  const email =	sessionStorage.getItem('EMAIL');

  document.getElementById('resut-name').innerHTML = firstname;
  
  document.getElementById('resut-number').innerHTML = contactnumber;

  document.getElementById('resut-email').innerHTML = email;


})