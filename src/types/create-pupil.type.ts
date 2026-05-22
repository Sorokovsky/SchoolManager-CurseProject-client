import type { Pupil } from "./pupil.type";

export type CreatePupil = Pick<Pupil, "extraInformation"> & {
  userId: number;
  classId: number;
  fatherId: number;
  motherId: number;
};
