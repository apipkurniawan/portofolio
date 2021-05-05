const scriptURL = 'https://script.google.com/macros/s/AKfycbzfw2rUhTvE2LgkOPsWYfnQuBWNBL62V23Z2tCwnTFXo8sB5gY2nnlV8IdRrwYJ8Jk/exec'
const form = document.forms['submit-to-google-sheet'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    btnKirim.classList.toggle('d-none');
    btnLoading.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            btnKirim.classList.toggle('d-none');
            btnLoading.classList.toggle('d-none');
            myAlert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})