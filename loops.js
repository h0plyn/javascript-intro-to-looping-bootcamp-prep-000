function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    i === 1 ? arr.push("I am 1 strange loop.") : arr.push(`I am ${i} strange loops.`);
  };
  return arr;
};