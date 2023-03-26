import { Dispatch, FormEvent } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';

import { Nullable } from 'shared/lib';

export type FileInputEventType = FormEvent<HTMLInputElement>;
export type UploadFileType = Nullable<FormData>;
export type SetUploadFileType = Dispatch<UploadFileType>;
export type UploadErrorType = Nullable<string>;
export type SetUploadErrorType = Dispatch<UploadErrorType>;

type UploadFileFormatType = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: Nullable<string>;
  width: number;
  height: number;
  size: number;
  url: string;
};
export type UploadedFilesType = [
  {
    id: number;
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: {
      thumbnail: UploadFileFormatType;
      large: UploadFileFormatType;
      medium: UploadFileFormatType;
      small: UploadFileFormatType;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: Nullable<string>;
    provider: string;
    provider_metadata: Nullable<string>;
    createdAt: string;
    updatedAt: string;
  }
];

export type UploadAvatarResponseType = {
  data: UploadedFilesType;
};

export type UploadAvatarActionType = PayloadAction<FormData>;
