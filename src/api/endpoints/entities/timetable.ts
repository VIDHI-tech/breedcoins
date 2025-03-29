import { SCHOOL_ID } from "@/constants";

export const row = {
  getAllRows: (timetableId: string) =>
    `/entities/timetable/public/school/${SCHOOL_ID}/${timetableId}/row`,
  getRowById: ({
    timetableId,
    rowId,
  }: {
    timetableId: string;
    rowId: string;
  }) =>
    `/entities/timetable/public/school/${SCHOOL_ID}/${timetableId}/row/${rowId}`,
};

export const timetable = {
  row,
  getAllSubTimetables: `/entities/timetable/public/school/${SCHOOL_ID}`,
  getTimetableById: (id: string) =>
    `/entities/timetable/public/school/${SCHOOL_ID}/${id}`,
};
