import { months } from "../constants/constants";

export function formatDateAndAge(dateString, deathDay = false) {
  if (!dateString) {
    return false; // Если дата рождения отсутствует, возвращаем false
  }

  const birthDate = new Date(dateString); // Преобразуем строку даты рождения в объект Date
  const birthYear = birthDate.getFullYear();
  const birthMonth = months[birthDate.getMonth()];
  const birthDay = birthDate.getDate();

  const referenceDate = deathDay ? new Date(deathDay) : new Date(); // Дата смерти или сегодняшняя дата
  const deathYear = referenceDate.getFullYear();
  const deathMonth = months[referenceDate.getMonth()];
  const deathDayNumber = referenceDate.getDate();

  let age = deathYear - birthYear;

  // Если человек ещё не отметил день рождения в текущем году (или году смерти), уменьшаем возраст на 1
  if (
    referenceDate.getMonth() < birthDate.getMonth() ||
    (referenceDate.getMonth() === birthDate.getMonth() &&
      referenceDate.getDate() < birthDay)
  ) {
    age--;
  }

  if (deathDay) {
    return `${birthMonth} ${birthDay}, ${birthYear} – ${deathMonth} ${deathDayNumber}, ${deathYear} (${age} years old)`;
  } else {
    return `${birthMonth} ${birthDay}, ${birthYear} (${age} years old)`;
  }
}
