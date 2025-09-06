/* 2.	এমন একটি ফাংশন বানাও যেটা একসাথে 0 আর 1 এর সংখ্যা দুইটাই return করবে।
👉 উদাহরণ: "1010010" → {zeros: 4, ones: 3}
 */
function count_zero_one(string) {
  let zero = 0;
  let one = 0;

  for (let number of string) {
    if (number === "0") {
      zero++;
    } else if (number === "1") {
      one++;
    }
  }
  return { Zeros: zero, Ones: one };
}
const binarynumber = "10100100101111";
const result = count_zero_one(binarynumber);
console.log(result);
