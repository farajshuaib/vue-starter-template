import Compressor from 'compressorjs'

export const compressFile = async (file: File) => {
  return new Promise<File>((resolve, reject) => {
    new Compressor(file, {
      quality: 0.5,
      success(result) {
        resolve(result as File)
      },
      error(err) {
        reject(err)
      }
    })
  })
}

export const handleFileCompress = async (file: File) => {
  const compressedFile = await compressFile(file)
  const path = URL.createObjectURL(compressedFile)
  const name = compressedFile.name.slice(0, 8)
  const size = compressedFile.size / 1000 + 'KB'
  const type = compressedFile.type.split('/')[1]

  return { path, name, size, type, compressedFile }
}
