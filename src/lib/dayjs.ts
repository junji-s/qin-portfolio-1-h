import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export const dayjsConversion = (day: string, format?: string) => {
  return dayjs
    .utc(day)
    .tz("Asia/Tokyo")
    .format(format ? format : "YYYY-MM-DD");
};
