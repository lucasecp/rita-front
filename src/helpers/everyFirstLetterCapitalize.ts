export const everyFirstLetterCapitalize = (text: string): string => {
  if (!text) {
    return ''
  }

  const loweredText = text.toLowerCase()
  const words = loweredText.trim().split(' ')

  for (let index = 0; index < words.length; index++) {
    const word = words[index]

    const firstLetter = word[0]

    const newWord = firstLetter.toUpperCase() + word.slice(1)

    words[index] = newWord
  }

  return words.join(' ')
}
