import { SCHOOL_ID } from "@/constants";

export const yearFolder = {
  all: (folderId: string) =>
    `/entities/gallery/public/school/${SCHOOL_ID}/${folderId}/year`,
  one: ({
    folderId,
    yearFolderId,
  }: {
    folderId: string;
    yearFolderId: string;
  }) =>
    `/entities/gallery/public/school/${SCHOOL_ID}/${folderId}/year/${yearFolderId}`,
};

export const gallery = {
  yearFolder,
  all: `/entities/gallery/public/school/${SCHOOL_ID}`,
  one: (folderId: string) =>
    `/entities/gallery/public/school/${SCHOOL_ID}/${folderId}`,
};
