const greetUser = () => {
  console.log("Good Morning");
};

const reduceTemp = () => {
  console.log("Start Fan");
};

const x = 2;
// export {greetUser}; // this is normal export

export default greetUser; //Only one item can be exported vai default export

export { reduceTemp, x };
