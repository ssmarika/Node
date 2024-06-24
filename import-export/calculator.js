const doSum = (x, y) => {
  return x + y;
};

const sayHello = (name = "User") => {
  console.log(`Hello ${name}`);
};

console.log("Hello World");
export { doSum, sayHello };
