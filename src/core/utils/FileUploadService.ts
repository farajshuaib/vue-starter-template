import Compressor from "compressorjs";
import { compressFile } from "../utils/compressFile";

class FileUploadService {
  private file: File;

  constructor(file: File) {
    this.file = file;
  }

  public get getFile() {
    return this.file;
  }

  public set setFile(file: File) {
    this.file = file;
  }

  public get name() {
    return this.file.name;
  }

  public get size() {
    return this.file.size;
  }

  public get type() {
    return this.file.type;
  }

  public get path() {
    return URL.createObjectURL(this.file);
  }

  public async handleFileCompress(): Promise<File> {
    try {
      const response = await compressFile(this.file);
      this.setFile = response;
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
