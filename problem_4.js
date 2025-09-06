/* 3.	count_zero() ফাংশন এমনভাবে পরিবর্তন করো যেন যদি input এ "0" আর "1" ছাড়া অন্য character থাকে তাহলে "Invalid Binary String" মেসেজ রিটার্ন করে।
 */
function count_zero(input) {
  let zero = 0;
  let one = 0;

  for (let char of input) {
    if (char !== "0" && char !== "1") {
      return "Invalid Binary String";
    }
    if (char === "0") {
      zero++;
    } else {
      one++;
    }
  }

  return { Zeros: zero, Ones: one };
}
console.log(count_zero("loka loka loka")); // Example call
