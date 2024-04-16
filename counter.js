import babel from "@babel/standalone";

export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    console.log(babel.transform(`let count = ${count}`, {}).code);
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
