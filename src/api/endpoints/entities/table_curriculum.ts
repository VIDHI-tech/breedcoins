import { SCHOOL_ID } from "@/constants";

export const tableCurriculum = {
  all: `/entities/table_curriculum/public/school/${SCHOOL_ID}`,
  one: (id: string) =>
    `/entities/table_curriculum/public/school/${SCHOOL_ID}/${id}`,
};
