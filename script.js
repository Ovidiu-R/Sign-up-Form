document.addEventListener('DOMContentLoaded',() => {
    const checkMatch = document.getElementById('checkMatch');
    const pass = document.getElementById('password');
    const passConfirm = document.getElementById('passConfirm');
    document.getElementById('submit').addEventListener('click', () => {
        if (document.getElementById('password').value === document.getElementById('passConfirm').value){
            document.getElementById('details').submit();
        } else {
            checkMatch.textContent = "✘";
            pass.style.backgroundColor = 'red';
            passConfirm.style.backgroundColor = 'red';
        }
    });
});