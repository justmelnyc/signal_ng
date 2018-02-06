import { FileUpload } from './file-upload';

export interface ISpot {
  uid: string;
  name: string;
  order: number;
  videos: Array<FileUpload>;
}
