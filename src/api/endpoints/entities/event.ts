import { SCHOOL_ID } from "@/constants";

export const event = {
  all: `/entities/event/public/school/${SCHOOL_ID}`,
  one: (id: string) => `/entities/event/public/${id}`,
  getEventsByMonth: ({ year, month }: { year: string; month: string }) =>
    `/entities/event/public/school/${SCHOOL_ID}/byMonth?year=${year}&month=${month}`,

  getEventsByDate: ({ date }: { date: string }) =>
    `/entities/event/public/school/${SCHOOL_ID}/byDate?date=${date}`,
  getUpcomingEvents: `/entities/event/public/school/${SCHOOL_ID}/upcoming`,
};
