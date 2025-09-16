// utils/sortExperiences.js
const monthMap = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

export function sortExperiencesByStartDate(experiences) {
  return experiences.sort((a, b) => {
    const [startA] = a.year.split(' - ');
    const [startB] = b.year.split(' - ');

    const [monthA, yearA] = startA.split(' ');
    const [monthB, yearB] = startB.split(' ');

    const dateA = new Date(parseInt(yearA), monthMap[monthA]);
    const dateB = new Date(parseInt(yearB), monthMap[monthB]);

    // newest first
    return dateB - dateA;
  });
}
