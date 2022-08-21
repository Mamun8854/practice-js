// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।

let strTypeVariable = "hey bro";
let booleanTypeVariable = true;
let numberTypeVariable = 8854;
// console.log(booleanTypeVariable, numberTypeVariable, strTypeVariable);

// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।

let variableOne = "hey javaScript";
variableOne = "hey user , here i am";
// console.log(variableOne);
const variableTwo = "Whats up user";

// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।

let number1 = 45;
let number2 = 845;
let sum = number1 + number2;
let minus = number1 - number2;
let division = number1 / number2;
let divisionReault = division.toFixed(2);
let divisionReault2 = parseFloat(divisionReault);
let multiply = number1 * number2;
let vagsesh = number1 % number2;
// console.log(sum, Math.abs(minus), divisionReault2, multiply, vagsesh);

// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।

let num1 = 10;
let num2 = 11;
if (num1 < num2) {
  //   console.log("good");
} else if (num1 > num2) {
  //   console.log("better");
} else if (num1 >= num2) {
  //   console.log("num1 num2 er theke boro / soman");
} else if (num1 <= num2) {
  //   console.log("num1 num2 er theke choto / soman");
} else if (num1 == num2) {
  //   console.log("num1 and num2 soman");
} else if (num1 != num2) {
  //   console.log("num1 and num2 soman na");
} else {
  //   console.log("Aro practice korte hobe mamun");
}

// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।

let variable1 = 30;
let variable2 = 20;
if (variable1 !== variable2 && variable1 < variable2) {
  //   console.log("tumi paro vai , kintu aro practice koro");
} else if (variable1 !== variable2 || variable1 === variable2) {
  //   console.log("besi besi practice kor , inshallah valo korbi");
} else {
  //   console.log(
  //     "regular practice kor, allah kauke thokai na . allah exam nei, tui try kor"
  //   );
}

// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো

let mamun = 20;
let mamun2 = 100;
if (mamun < mamun2) {
  //   console.log("First output");
} else {
  //   console.log("last output");
}

//৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।
let number = 0;
while (number < 20) {
  if (number % 2 !== 0) {
    // console.log(number);
  }
  number++;
}

// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

// let array = [12, 45, 32, 65, 48, 78, 21, 54, 59];
// for (let i = 0; i < array.length; i++) {
//   let element = array[i];
//   array[4] = 22;
//   array.splice(4, 1, 333, 444);
//   array.pop();
//   console.log(array);
//   return array;
// }

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

// let array1 = [12, 45, 32, 65, 48, 78, 21, 54, 59];
// for (let i = 0; i < array1.length; i++) {
//   let element = array1[i];
//   console.log(element);
// }

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

// let array2 = [12, 45, 35, 48, 82, 98, 78, 325, 46];
// for (let i = 0; i < array2.length; i++) {
//   let element = array2[i];
//   if (element > 80) {
//     console.log(element);
//   }
// }

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।

function multiplyPractice(num1, num2, num3) {
  const multiplyPracticeResult = num1 * num2 * num3;
  // console.log(multiplyPracticeResult);
  return multiplyPracticeResult;
}

multiplyPractice(2, 4, 6);

// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।

let friends = [
  { name: "shafin", age: 20, color: "white" },
  { name: "Nahid", age: 19, color: "white" },
  { name: "Mahim", age: 32, color: "white" },
  { name: "Ridoy", age: 21, color: "white" },
];

for (let i = 0; i < friends.length; i++) {
  let element = friends[i];
  element.age = 33;
  // console.log(element);
}

// let hello = 1.021245421;
// let helloResult = hello.toFixed(2);
// console.log(helloResult);

// function bestFriends(friends) {
//   let stringLength = friends[0].length;
//   var bestFriend = friends[0];
//   for (let i = 0; i < friends.length; i++) {
//     let nameLength = friends[i].length;
//     if (nameLength > stringLength) {
//       bestFriend = friends[i];
//       stringLength = nameLength;
//     }
//   }
//   return bestFriend;
// }
// const myFriends = [
//   "Peter",
//   "John",
//   "Jane",
//   "Parker",
//   "Muller",
//   "Jonanthan Swift",
//   "Harry potter",
//   "Jacks Darrida",
//   "Jane Jones",
// ];
// const bestFriendIs = bestFriends(myFriends);
// console.log(bestFriendIs);
