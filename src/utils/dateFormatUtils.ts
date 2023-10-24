const TimeMap = (() => {
  const min = 60;
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = week * 4;
  const year = month * 12;
  return { min, hour, day, week, month, year };
})();

const TimeTextMap = {
  [TimeMap.min]: 'minute',
  [TimeMap.hour]: 'hour',
  [TimeMap.day]: 'day',
  [TimeMap.week]: 'week',
  [TimeMap.month]: 'month',
  [TimeMap.year]: 'year',
};

const createTimeText = (time: number, standard: number, suffix: string) => {
  const duration = Math.floor(time / standard);
  return (`${duration} ${duration === 1 ? suffix : suffix + 's'} ago`) 
}

const translateTimeZone = (updated_at: string) => {
  return (
    +new Date(
      parseInt(updated_at.slice(0, 4)), 
      parseInt(updated_at.slice(5, 7)) - 1, 
      parseInt(updated_at.slice(8, 10)),
      parseInt(updated_at.slice(11, 13)) + 9,
      parseInt(updated_at.slice(14, 16))
    )
  )
}


export const fetchRelatedTime = (updated_at: string) => {
  const seconds = (+new Date() - translateTimeZone(updated_at)) / 1000;
  return (
    Object.entries(TimeMap).reduce((text, [time, value]) => {
      if (seconds >= value)
        return (createTimeText(seconds, value, TimeTextMap[value]));
      return (text);
      }, "Just before")
  )
}

export function daysBetweenDates(rawDate1: string, rawDate2: string) {
  const date1 = new Date(rawDate1);
  const date2 = new Date(rawDate2);

  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const durationWeeks = Math.floor(diffDays / 7) + 1;
  let weekOrWeeks = '';
  if (durationWeeks == 1) {
    weekOrWeeks = 'week';
  } else if (durationWeeks > 1) {
    weekOrWeeks = 'weeks';
  }

  return `${durationWeeks} ${weekOrWeeks}`;
}

export function convertIsoDateToReadable(str: string) {
  const date = new Date(str);

  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();

  let suffix = 'th';
  if (day % 10 === 1 && day !== 11) {
    suffix = 'st';
  } else if (day % 10 === 2 && day !== 12) {
    suffix = 'nd';
  } else if (day % 10 === 3 && day !== 13) {
    suffix = 'rd';
  }

  return `${month} ${day}${suffix}`;
}

