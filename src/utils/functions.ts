import { format, parseISO } from "date-fns";

const dateFormat = 'hh:mm dd-MM-yyyy';

export const getNowDate = (_mode?: "formated", _format?: string) =>
  _mode === "formated"
    ? !_format
      ? format(parseISO(new Date(Date.now()).toISOString()), dateFormat) // general format
      : format(parseISO(new Date(Date.now()).toISOString()), _format)
    : Date.now();

export const getFormatedDate = (_date: number, _format: string = dateFormat) =>
  format(parseISO(new Date(_date).toISOString()), _format);
