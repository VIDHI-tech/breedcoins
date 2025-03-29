import { SCHOOL_ID } from "@/constants";

export const tableCircular = {
  all: `/entities/table_circular/public/school/${SCHOOL_ID}`,
  one: (id: string) =>
    `/entities/table_circular/public/school/${SCHOOL_ID}/${id}`,
};
