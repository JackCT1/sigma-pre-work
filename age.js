const getBirthDate = (year, month, day) => {
  return new Date(year, month, day);
};

const calculateAge = (date) => {
  const currentDate = new Date();
  const currentMilliseconds = currentDate.getTime();
  const dateMilliseconds = date.getTime();
  const millisecondsInAYear = 86400 * 365 * 1000;
  const timeDiff =
    (currentMilliseconds - dateMilliseconds) / millisecondsInAYear;
  const age = Math.floor(timeDiff);
  return "You are " + age + " years old.";
};
console.log(calculateAge(getBirthDate(1999, 10, 3)));
