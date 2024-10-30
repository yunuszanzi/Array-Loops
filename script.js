let num = [12, 23, 12, 2, 4, 6, 435, 654];

//conventional for loop
for (i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//forEach loop
num.forEach((element) => {
  console.log(
    "prints square of each element: ",
    element,
    "*",
    element,
    ": ",
    element * element
  );
});

obj = [
  { name: "Yunus", age: 28, company: "Mind's Collide Pvt Ltd" },
  { name: "Taha", age: 32, company: "Al Jamea tus saifiyah" },
  { name: "Yusuf", age: 35, company: "BSIT Solutions" },
];
array1 = [1, 5, 3, 2, 3, 7, 9];

//Array.from(num): this creates an array from a string or an HTML collection
string1 = "yunus mustafa";
stringOfArr = Array.from(string1);
console.log("Array.from(string1): ", stringOfArr);

//for...of: this helps to return the key of the object or an array

for (let num of array1) {
  console.log(num);
}

names = "yunus";
for (letter of names) {
  console.log(letter);
}

for (let item of obj) {
  console.log("name of items: ", item.name);
}

//for...in: this helps to iterate over the values of the array or string
for (let num in array1) {
  console.log("key of value: ", num);
}

console.log("for...in loop to traverse over an array of object");

for (let index in obj) {
  console.log("The name is:", obj[index].name);
  console.log("The age is:", obj[index].age);
  console.log("The company is:", obj[index].company);
}
