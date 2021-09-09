export default function toMask(text, mask, extra = [], ignore = []) {
  let newText = ''
  text = clearString(text + '', extra, ignore)

  let j = 0
  for (let i = 0; i < text.length; i++) {
    if (i <= mask.length - 1) {
      if (mask[j] !== '#') {
        newText += mask[j]
        j++
        newText += text[i]
      } else {
        newText += text[i]
      }
      j++
    }
  }

  return newText.slice(0, mask.length)
}

function clearString(text, extra = [], ignore = []) {
  let newText = ''
  const clearStringFromThese = [
    ' ',
    '.',
    ',',
    '/',
    '\\',
    '|',
    '-',
    '_',
    '(',
    ')',
    ...extra,
  ]

  for (let i = 0; i < text.length; i++)
    if (!clearStringFromThese.includes(text[i]) || ignore.includes(text[i]))
      newText += text[i]

  return newText
}
