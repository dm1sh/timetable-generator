export type TimetableT = {
  days: DayT[];
  cards: CardT[];
  subjects: SubjectT[];
};

export type DayT = {
  events: EventT[];
  date: number; // epoch time
};

type EventT = {
  lessons: number[][]; // IDs
};

export type CardT = {
  subject: number; // ID
  room: number; // Number
  teacher: number; // ID in subject
};

export type SubjectT = {
  title: string;
  teachers: string[]; // teachers allowed for this subject
};

export type CreateSubjectFT = (title: string, teachers: string[]) => void;

export type CreateCardFT = (
  subject: number,
  teacher: number,
  room: number
) => void;

export type CreateDayFT = (date: number) => void;

export type AddEventFT = (dayId: number) => void;

export type AddLessonFT = (
  dayId: number,
  eventId: number,
  groupId: number,
  isPair: boolean,
  lessonId: number,
  lessonNumber?: number
) => void;

export type UseTimetableHookFT = () => {
  createSubject: CreateSubjectFT;
  createCard: CreateCardFT;
  createDay: CreateCardFT;
  state: TimetableT;
};
