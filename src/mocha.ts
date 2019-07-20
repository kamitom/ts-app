const helloTest = (myName: string): string => {
  return `hello ${myName}`;
  // return 1;
};

// console.log(helloTest("tom"));

// console.log("type: ", typeof helloTest("tomjr"));

const helloAddNumber = (n1: number, n2: number): number => {
  return n1 + n2;
}

export { helloTest, helloAddNumber };
