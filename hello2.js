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
const finalResult = isJavaScriptFile(123);
console.log(finalResult);
