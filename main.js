function updateContent(contentType) {
  let h1Element = document.getElementById('content')

  switch (contentType) {
    case 'story':
      h1Element.textContent = 'we begin our journey 12 years ago ...'
      break
    case 'mission':
      h1Element.textContent = 'our mission is to make your journey better ...'
      break
    case 'vision':
      h1Element.textContent = 'we want to make your experiences better ...'
      break
    default:
      h1Element.textContent = 'Default Content'
      break
  }
}
updateContent('story')


function validateForm() {
  let phoneError = document.getElementById('phoneError')
  let phoneInput = document.getElementsByName('phoneNumber')[0]

  let subjectInput = document.getElementById('subject')
  let subjectError = document.getElementById('subjectError')

  let emailInput = document.getElementById('email')
  let emailError = document.getElementById('emailError')

  let namelInput = document.getElementById('name')
  let nameError = document.getElementById('nameError')

  let arealInput = document.getElementById('textarea')
  let areaError = document.getElementById('areaError')

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (namelInput.value < 1) {
    nameError.innerHTML = 'Input name'
    namelInput.style.border = '1px solid red'
  } else {
    nameError.innerHTML = ''
    namelInput.style.border = '1px solid #909DE2'
  }

  if (arealInput.value < 1) {
    areaError.innerHTML = 'Input something'
    arealInput.style.border = '1px solid red'
  } else {
    areaError.innerHTML = ''
    arealInput.style.border = '1px solid #909DE2'
  }

  if (!phoneInput.checkValidity()) {
    phoneError.innerHTML = 'Enter a valid number (+995 and 9 digits).'
    phoneInput.style.border = '1px solid red'
  } else {
    phoneError.innerHTML = ''
    phoneInput.style.border = '1px solid #909DE2'
  }

  if (subjectInput.value.length < 5) {
    subjectError.innerHTML = 'Must be at least 5 characters!'
    subjectInput.style.border = '1px solid red'
  } else {
    subjectError.innerHTML = ''
    subjectInput.style.border = '1px solid #909DE2'
  }

  if (!emailRegex.test(emailInput.value)) {
    emailError.innerHTML = 'Enter a valid email address.'
    emailInput.style.border = '1px solid red'
  } else {
    emailError.innerHTML = ''
    emailInput.style.border = '1px solid #909DE2'
  }
}
