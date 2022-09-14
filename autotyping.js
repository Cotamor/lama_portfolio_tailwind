console.log('autotyping')
const carouselText = [
  { text: 'Developer' },
  { text: 'Designer' },
  { text: 'Author' },
]

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split('')
  let i = 0
  while (i < letters.length) {
    await waitForMs(delay)
    const typingText = document.querySelector(eleRef)
    typingText.append(letters[i])
    i++
  }
  return
}

async function deleteSentence(eleRef) {
  const sentence = document.querySelector(eleRef).textContent
  const letters = sentence.split('')

  while (letters.length > 0) {
    await waitForMs(100)
    letters.pop()
    const typedText = document.querySelector(eleRef)
    typedText.textContent = letters.join('')
  }
}

async function carousel(carouselList, eleRef) {
  let i = 0
  while (true) {
    await typeSentence(carouselList[i].text, eleRef)
    await waitForMs(1500)
    await deleteSentence(eleRef)
    await waitForMs(500)
    i++
    if (i >= carouselList.length) {
      i = 0
    }
  }
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

carousel(carouselText, '#text')
