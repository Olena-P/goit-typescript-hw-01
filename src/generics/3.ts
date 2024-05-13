function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const obj1 = { a: 1, b: true };
const obj2 = { b: false, c: "test" };

const result = merge(obj1, obj2);
console.log(result);
