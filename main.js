const myForm  = document.querySelector('#my-form');
const nameInput  = document.querySelector('#name');
const emailInput  = document.querySelector('#email');
const msg  = document.querySelector('.msg');
const userList  = document.querySelector('#users');


myForm.addEventListener('submit',onsubmit);

function onsubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all the values'
        setTimeout(() => msg.remove(), 5000);
        nameInput.value ='';
        emailInput.value= '';
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //clear fields
        nameInput.value ='';
        emailInput.value= '';
    }

    //console.log(nameInput.value);
}