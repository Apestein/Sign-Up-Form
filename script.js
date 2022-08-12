const form = document.querySelector('#sign-up')
form.onsubmit = () => {
    const pass1 = document.querySelector('#password')
    const pass2 = document.querySelector('#confirm-pass')
    if (pass1 !== pass2) {
        pass1.classList.add('error')
        pass2.classList.add('error')
        console.log('pass')
    }
    else {
        pass1.classList.remove('error')
        pass2.classList.remove('error')
    }
}