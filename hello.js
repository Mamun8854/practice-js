let friend1 = { name: "shafin", friend: "mamun" };
let friend2 = 22;
function isBestFriend(friend1, friend2) {
  if (typeof friend1 == "object" && typeof friend2 == "object") {
    if (friend1.name == friend2.friend && friend1.friend == friend2.name) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Error : Input data should be object type data";
  }
}
const bestFriend = isBestFriend(friend1, friend2);
console.log(bestFriend);
