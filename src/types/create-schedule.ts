export type CreateSchedule = {
  subjectId: number;
  classId: number;
  date: Date;
  startTime: string;
  endTime: string;
  dateOfWeek: number;
};
