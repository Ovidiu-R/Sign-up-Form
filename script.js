document.addEventListener('DOMContentLoaded',() => {
    const checkMatch = document.getElementById('checkMatch');
    const pass = document.getElementById('password');
    const passConfirm = document.getElementById('passConfirm');
    const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{8,}$/;
    const regex = new RegExp (pattern);
    document.getElementById('submit').addEventListener('click', () => {
        if (pass.value === passConfirm.value && regex.test(pass.value)){
            document.getElementById('details').submit();
        } else if (pass.value === passConfirm.value && !regex.test(pass.value)){
            checkMatch.textContent = "✘ Password not valid";
            inputColor('red');
        } else if (pass.value !== passConfirm.value && regex.test(pass.value)){
            checkMatch.textContent = "✘ Passwords do not match";
            inputColor('red');
        }
    });
    passConfirm.addEventListener('input', (e) => {
        if (e.target.value === pass.value){
            inputColor('green');
        } else {
            inputColor('white');
        }
    });


function inputColor(color) {
    pass.style.backgroundColor = color;
    passConfirm.style.backgroundColor = color;
}

});