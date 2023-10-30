const scriptURL = 'https://script.google.com/macros/s/AKfycbwcWKYn_YgIVX2c9jt4Y80LNgHTTUJcPsmM3wr0mSqLmOWpTNRYGKzVyUWfgWV0ojw7lw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', (e)=> {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      Swal.fire({
  title: 'Message Sent Succesfully',
  timer: 2000
})
  })