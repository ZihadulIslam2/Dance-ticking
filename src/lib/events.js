import { classData } from "../components/class-sections";

export const getEventsById = (section, id) => {
  return classData[section].filter((event) => event.id === parseInt(id))[0];
};
