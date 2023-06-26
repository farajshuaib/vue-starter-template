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

