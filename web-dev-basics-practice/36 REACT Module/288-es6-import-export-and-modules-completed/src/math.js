const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;         // when importing it in another file you can give default obj any name;
export { doublePi, triplePi };
