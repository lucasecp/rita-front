export const isValidTypeFile = (file, { onlyImage = false }) => {
  const fileType = file.type.split('/')[1]

  const typesFile = ['jpg', 'jpeg', 'png']

  if (!onlyImage) {
    typesFile.push('pdf')
  }

  const isValid =
    typesFile.includes(fileType) && file.name.split('.')[1] !== 'jfif'
  console.log(isValid)

  return isValid
}
