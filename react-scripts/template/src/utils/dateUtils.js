// @flow

export function getDifferenceInDay(date1: Date, date2: Date) {
  return Math.floor(Math.abs((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24)));
}

export function getDifferenceInWeek(dt2: Date, dt1: Date) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7;
  return Math.abs(Math.round(diff));
}

export function getDifferenceInMonth(date1: Date, date2: Date) {
  return (date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth()) + 1;
}

export function getWeekNumber(date: Date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

export function getDateOfWeek(weekNumber: number, year: number) {
  var simple = new Date(year, 0, 1 + (weekNumber - 1) * 7);
  var dow = simple.getDay();
  var ISOweekStart = simple;
  if (dow <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  return ISOweekStart;
}

export function formatDateSince(date: Date) {
  const timeSpent = (new Date().getTime() - date.getTime()) / 1000;

  if (timeSpent < 60) {
    return `Il y a ${timeSpent} secondes`;
  } else if (timeSpent < 60 * 60) {
    return `Il y a ${Math.floor(timeSpent / 60)} minutes`;
  } else if (timeSpent < 60 * 60 * 24) {
    return `Il y a ${Math.floor(timeSpent / (60 * 60))} heures`;
  } else if (timeSpent < 60 * 60 * 24 * 7) return `Il y a ${Math.floor(timeSpent / (60 * 60 * 24))} jours`;
  else return `Il y a ${Math.floor(timeSpent / (60 * 60 * 24 * 7))} semaines`;
}
