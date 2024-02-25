document.addEventListener('DOMContentLoaded',() => {
    document.getElementById('submit').addEventListener('click', () => {
        if (document.getElementById('password').textContent === document.getElementById('passConfirm').textContent){
            document.getElementById('details').submit();
        } else {
            
        }
    });
});