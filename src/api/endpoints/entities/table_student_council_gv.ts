import { SCHOOL_ID } from "@/constants";

export const table_student_council_gv = {
  all: `/entities/table_student_council_gv/public/school/${SCHOOL_ID}`,
  one: (id: string) =>
    `/entities/table_student_council_gv/public/school/${SCHOOL_ID}/${id}`,
};
