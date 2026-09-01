const getNextCycle = (prevCycle: number) => {
  if (prevCycle === 8 || prevCycle === 0) return 1;

  return prevCycle + 1;
};

export default getNextCycle;
