//Bài 1
const findOppositeNumber = (n, inputNumber) => {
  return (inputNumber + n / 2) % n;
};
findOppositeNumber(9, 6);

//Bài 2
// Cách1
const merge2String = (str1, str2) => {
  let newString = "";

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    newString += str1.charAt(i);
    newString += str2.charAt(i);
  }
  return newString;
};
//	Cách2
const merge2String = (str1, str2) => {
  var a = str1.split("");

  var b = str2.split("");

  var count = 0;

  var merged_string = "";

  a.length < b.length ? (count = a.length) : (count = b.length);

  for (var i = 0; i < count; i++) {
    merged_string += a[i] + b[i];
  }
  count < str1.length
    ? (merged_string += str1.substr(count, str1.length))
    : (merged_string += str2.substr(count, str2.length));

  return merged_string;
};
//
merge2String("abcd", "123456");
