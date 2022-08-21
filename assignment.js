// Assignment Question - 01

function radianToDegree(radius) {
  if (typeof radius == "number") {
    const degree = radius * 57.2958;
    const degreeValue = degree.toFixed(2);
    return parseFloat(Math.abs(degreeValue));
  } else {
    return "Please enter number type data";
  }
}
const inputValue = "-21";
const result = radianToDegree(inputValue);
// console.log(result);

// Assignment Question -02
function isJavaScriptFile(fileName) {
  const fileName1 = fileName.split(".").pop();
  if (fileName1 == "js") {
    return true;
  } else if (fileName1 != "js") {
    if (fileName.includes(".")) {
      return false;
    } else {
      return "Error : Please enter valid type data with file name extention";
    }
  }
}
const file = "he12";
const finalResult = isJavaScriptFile(file);
console.log(finalResult);

// Assignment Question - 03

function oilPrice(diselQuantity, petrolQuantity, octaneQuantity) {
  const diselPrice = 114;
  const petrolPrice = 130;
  const octanePrice = 135;
  console.log(diselPrice, petrolPrice, octanePrice);

  if (
    typeof diselQuantity === "number" &&
    typeof petrolQuantity === "number" &&
    typeof octaneQuantity === "number"
  ) {
    const totalDiselPrice = diselPrice * diselQuantity;
    const totalPetrolPrice = petrolPrice * petrolQuantity;
    const totalOctanePrice = octanePrice * octaneQuantity;

    return totalDiselPrice + totalPetrolPrice + totalOctanePrice;
  } else {
    return "Error : Quantity should be number type";
  }
}
const oilPriceResult = oilPrice("Mamun", 2, 3);
console.log(oilPriceResult);

// Assignment Question - 04

function publicBusFare(totalPublic) {
  let reserveBusSeat = 50,
    reserveMicroBus = 11,
    journeyByPublicBus = 0,
    busQuantity = 0,
    reserveMicroBusQuantity = 0,
    publicBusCost = 250;

  if (totalPublic >= reserveBusSeat) {
    busQuantity = Math.floor(totalPublic / reserveBusSeat);
    journeyByPublicBus = totalPublic % reserveBusSeat;

    if (journeyByPublicBus >= reserveMicroBus) {
      micro(journeyByPublicBus);
    }
  } else {
    micro(totalPublic);
  }

  function micro(journeyByPublicBusPeoples) {
    reserveMicroBusQuantity = Math.floor(
      journeyByPublicBusPeoples / reserveMicroBus
    );
    journeyByPublicBus = journeyByPublicBusPeoples % reserveMicroBus;
  }

  return journeyByPublicBus * publicBusCost;
}
const totalCostForPublicBus = publicBusFare(65);
console.log(totalCostForPublicBus);

// Assignment Question - 05

let friend1 = { name: "shafin", friend: 22 };
let friend2 = { name: "11", friend: "shafin" };
function isBestFriend(friend1, friend2) {
  if (
    friend1.name == friend2.friend &&
    friend1.friend == friend2.name &&
    typeof friend1 === "object" &&
    typeof friend2 === "object"
  ) {
    return true;
  } else {
    if (friend1.name !== friend2.friend && friend1.friend !== friend2.name) {
      return false;
    } else {
      return "Error : Input data should be object";
    }
  }
}
const bestFriend = isBestFriend(friend1, friend2);
console.log(bestFriend);
