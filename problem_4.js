/* 3.	count_zero() ফাংশন এমনভাবে পরিবর্তন করো যেন যদি input এ "0" আর "1" ছাড়া অন্য character থাকে তাহলে "Invalid Binary String" মেসেজ রিটার্ন করে।
 */
function count_zero(counts) {
  let count = 0;
  for (let number of counts) {
    if (number === !"0" && number === !"1") {
      const string = "Invaslid Binery string";
    }
  }
  return count;
}
const binerynumber = "0110";
const result = count_zero(binerynumber);
