import { SCHOOL_ID } from "@/constants";

export const table_management = {
  all: `/entities/table-management/public/school/${SCHOOL_ID}`,
  one: (id: string) =>
    `/entities/table-management/public/school/${SCHOOL_ID}/${id}`,
};
