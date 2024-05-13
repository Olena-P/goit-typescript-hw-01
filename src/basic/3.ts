let mixed: (string | number)[] = ["two", 5];

function mergeObjects<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
