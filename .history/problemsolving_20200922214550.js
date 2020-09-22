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

  for (let i = 0; i < count; i++) {
    merged_string += a[i] + b[i];
  }
  (count < str1.length)
    ? (merged_string += str1.substr(count, str1.length))
    : (merged_string += str2.substr(count, str2.length));

  return merged_string;
};
//Cách 3
const merge2String = (str1, str2) => {
    let i, temp = '';
    for( i = 0; i < l; i++) {
        temp += str1[i] + str2[i];
    }
    return temp + str1.slice(i) + str2.slice(i);
}
merge2String("abcd", "123456");
