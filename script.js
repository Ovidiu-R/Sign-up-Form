document.addEventListener('DOMContentLoaded',() => {
    const checkMatch = document.getElementById('checkMatch');
    const pass = document.getElementById('password');
    const passConfirm = document.getElementById('passConfirm');
    document.getElementById('submit').addEventListener('click', () => {
        if (pass.value === passConfirm.value && pass.validity.valid){
            document.getElementById('details').submit();
        } else {
            checkMatch.textContent = "✘";
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