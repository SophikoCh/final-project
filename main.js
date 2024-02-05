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
  