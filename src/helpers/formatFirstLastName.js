export default function (value) {
  if (!value?.trim()) {
    return 'Sem Nome'
  }

  const separateWord = value.toLowerCase().split(' ')

  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1)
  }

  return `${separateWord[0]} ${separateWord[separateWord.length - 1]}`
}
