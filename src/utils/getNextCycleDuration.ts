const getNextCycleDuration = (cycleType: string): number => {
  if (cycleType === "longBreakTime") return 15;
  if (cycleType === "shortBreakTime") return 5;
  return 25;
};

export default getNextCycleDuration;
