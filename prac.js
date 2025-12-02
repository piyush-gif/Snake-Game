// const age = 25;
// age = 26;
// // const variable cannot be changed

// let name;
// const email = "piyush@gmail.com";
// isActive;

// // let-> lets to change the value of the variable whereas const doesn't const-> is always constant. cannot be changed.

// // function greet = () => {
// //   return "Hello " + name;
// // }

// const func1 = (x) => {
//   x * 2;
// };
// const func2 = (x) => x * 2;
// // idk the difference

// const randomnum = () => {
//   num = randomnum();
//   return num;
// };

// const numbers = [1, 2, 3, 4, 5];

// const doubled = [];

// numbers.map((num) => doubled.push(num));
// console.log(doubled);

// async & await

const getUserInfo = async () => {
  try {
    const response = await fetch("http://");
    const user = await response.json();
    console.log("user's name is" + username);
  } catch (error) {
    console.error("error".error);
  }
};

const getdata = async () => {
  try {
    const pokemon = fetch(`${url}`);
    const pokedex = fetch(`${url}`);

    const [pokeData, dexData] = await Promise.all([pokemon, pokedex]);

    const poData = await pokeData.json();
    const deData = await dexData.json();

    console.log(poData, deData);
  } catch (error) {
    console.error(`there's an error ${error}`);
  }
};
