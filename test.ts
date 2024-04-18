
// Array with push function. Note that the string is from type string
const names: string[] = [];
names.push("Nora", "Ronja");
// console.log(names);


// Readonly prevent arrays from being changed
const names_only: readonly string[] = ["Nora", "Ronja", "Thilo"];
// names_only.push("Mailo") <-- this cause an error!
// console.log(names_only)

// Typed Arrays: Tuple
let our_tuple: [number, boolean, string]; // readonly could be used
our_tuple = [5, false, "Coding God was here"]; // remember: keep the order! Otherwise a error will throw
our_tuple.push(5) // this is a problem, because the following values are not defined types. Probably use readonly
// console.log(our_tuple);

// Destructuring tuples
let kids: [string, string, string, string, string];
kids = ["Nora", "Ronja", "Thilo", "Clara", "Mailo"];
let [my_kid_1, , my_kid_3] = kids;
// console.log(my_kid_1);

// Destructuring Example:
function calculate( a: number, b: number ){
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7)

// Destructuring object: here without types
const kidis: { kind_1: string, kind_2: string, kind_3: string, kind_4: string, kind_5: string } = {
  kind_1: "Nora",
  kind_2: "Ronja",
  kind_3: "Thilo",
  kind_4: "Mailo",
  kind_5: "Clara"
}
// object
// ...
