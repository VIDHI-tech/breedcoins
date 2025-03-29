import { SCHOOL_ID } from "@/constants";

export const tableExamTimetable = {
  all: `/entities/table_exam_timetable/public/school/${SCHOOL_ID}`,
  one: (id: string) =>
    `/entities/table_exam_timetable/public/school/${SCHOOL_ID}/${id}`,
};
