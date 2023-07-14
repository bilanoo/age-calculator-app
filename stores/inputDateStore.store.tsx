import { create } from "zustand";

interface InputDateStore {
  day: string;
  setDay: (providedDay: string) => void;
  month: string;
  setMonth: (providedMonth: string) => void;
  year: string;
  setYear: (providedYear: string) => void;
  ageCalculatedFlag: boolean;
  setAgeCalculatedFlag: (value: boolean) => void;
}

const useInputDateStore = create<InputDateStore>((set) => ({
  day: "",
  setDay: (providedDay: string) => set(() => ({ day: providedDay })),
  month: "",
  setMonth: (providedMonth: string) => set(() => ({ month: providedMonth })),
  year: "",
  setYear: (providedYear: string) => set(() => ({ year: providedYear })),
  ageCalculatedFlag: false,
  setAgeCalculatedFlag: (value: boolean) =>
    set(() => ({ ageCalculatedFlag: value })),
}));

export default useInputDateStore;
