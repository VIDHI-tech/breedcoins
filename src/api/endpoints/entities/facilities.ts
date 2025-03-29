import { SCHOOL_ID } from "@/constants";

export const facilities = {
  all: `/entities/facilities/public/school/${SCHOOL_ID}`,
  one: (folderId: string) =>
    `/entities/facilities/public/school/${SCHOOL_ID}/${folderId}`,
};
