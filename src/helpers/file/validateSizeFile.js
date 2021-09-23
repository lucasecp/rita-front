const validateSizeFile = (file) => {
  const fileSizeInMb = file.size / (1024 * 1024).toFixed(2)

  return !!(fileSizeInMb < 10)
}

export default validateSizeFile
