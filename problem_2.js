/* 1.	একটি ফাংশন লেখো count_one() → যেটা string এ কয়টা "1" আছে তা return করবে।
 */
function count_one(string) {
  let count = 0;
  for (let counts of string) {
    if (counts === "1") {
      count++;
    }
  }
  return count;
}
const binarynumber = "1000100100100010101";
const result = count_one(binarynumber);
console.log(result);
