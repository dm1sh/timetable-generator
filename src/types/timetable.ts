export type TimetableT = {
  days: DayT[];
  cards: CardT[];
  subjects: SubjectT[];
};

type DayT = {
  events: EventT[];
  date: number; // epoch time
};

type EventT = {
  lessons: number[]; // IDs
};

type CardT = {
  subject: number; // ID
  room: number; // Number
  teacher: number; // ID in subject
};

type SubjectT = {
  title: string;
  teachers: string[]; // teachers allowed for this subject
};

export type CreateSubjectFT = (title: string, teachers: string[]) => void;

export type CreateCardFT = (
  subjectID: number,
  teacherID: number,
  room: number
) => void;

export type UseTimetableHookFT = () => {
  createSubject: CreateSubjectFT;
  createCard: CreateCardFT;
  state: TimetableT;
};
