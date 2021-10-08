const convertImageFromApiToBase64 = (responseApi) => {
  return `data:${responseApi.headers['content-type']};base64,${Buffer.from(
    responseApi.data,
    'binary'
  ).toString('base64')}`
}

export default convertImageFromApiToBase64
