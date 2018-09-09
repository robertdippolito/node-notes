var square = x => x * x;

console.log(square(3));

var user = {
  name: 'Robert',
  sayHi: () => {
    //global arguments
    console.log(arguments);
    console.log(`Hello! I am ${this.name}`);
  },
  sayHiAlt () {
    //local arguments
    console.log(arguments);
    console.log(`Hello! I am ${this.name}`);
  }
};

user.sayHi(1,2,3);
