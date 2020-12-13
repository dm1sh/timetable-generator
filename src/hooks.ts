import { useState } from "react";
import {
  TimetableT,
  UseTimetableHookFT,
  CreateCardFT,
  CreateSubjectFT,
} from "./types/timetable";

export const useTimetable: UseTimetableHookFT = () => {
  const [state, setState] = useState<TimetableT>({
    cards: [],
    days: [],
    subjects: [],
  });

  const createSubject: CreateSubjectFT = () => {
    console.log();
  };

  const createCard: CreateCardFT = () => {
    console.log();
  };

  return { state, createCard, createSubject };
};
