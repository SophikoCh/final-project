function updateContent(contentType) {
  let h1Element = document.getElementById('content')

  switch (contentType) {
    case 'story':
      h1Element.textContent = 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.Aliqu diam amet diam et eos labore.  Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit'
      break
    case 'mission':
      h1Element.textContent = 'Clita erat ipsum et lorem et sit, Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.Aliqu diam amet diam et eos labore. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.'
      break
    case 'vision':
      h1Element.textContent = 'we want to make your experiences better,Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit '
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

const slides = document.querySelectorAll('.slides img')
let slideIndex = 0
document.addEventListener('DOMContentLoaded', initializeSlider)

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add('displaySlide')
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0
  } else if (index < 0) {
    slideIndex = slides.length - 1
  }
  slides.forEach((slide) => {
    slide.classList.remove('displaySlide')
  })
  slides[slideIndex].classList.add('displaySlide')
}
function prevSlide() {
  slideIndex--
  showSlide(slideIndex)
}
function nextSlide() {
  slideIndex++
  showSlide(slideIndex)
}

function toggleText() {
  let points = document.getElementById('points')
  let showMoreText = document.getElementById('text')
  let showbtn = document.getElementById('show')

  if (points.style.display === 'none') {
    showMoreText.style.display = 'none'
    points.style.display = 'inline'
    showbtn.innerHTML = 'explore more'
  } else {
    showMoreText.style.display = 'inline'
    points.style.display = 'none'
    showbtn.innerHTML = 'show less'
  }
}
