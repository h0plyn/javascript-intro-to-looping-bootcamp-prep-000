function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    i === 1 ? arr.push("I am 1 strange loop.") : arr.push(`I am ${i} strange loops.`);
  };
  return arr;
};

function whileLoop(num) {
  while(num > 0) {
    console.log(num);
    num -= 1;
  };
  return 'done'
};

function doWhileLoop(int) {
  let i = 0;
  
  function incrementVariable() {
    i += 1;
    return i;
  }
  
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < int);
};