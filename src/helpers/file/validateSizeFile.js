const validateSizeFile = (file) => {
  const fileSizeInMb = file.size / (1024 * 1024).toFixed(2)

  console.log(fileSizeInMb)

  return !!(fileSizeInMb < 10)
}

export default validateSizeFile
