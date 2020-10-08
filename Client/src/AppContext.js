import { createContext } from "react";

export const defaultObject = {
  wordsWithLessons: [],
};

export const AppContext = createContext(defaultObject);
