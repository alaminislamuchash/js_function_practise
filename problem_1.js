/* // count_zero() নামে একটি ফাংশন বানাও।
// •	ইনপুট: একটি binary string (মানে শুধু "0" আর "1" থাকবে)।
// •	কাজ: ওই string এ কয়টা "0" আছে তা গণনা করা।
// •	আউটপুট: সংখ্যাটি return করা। */
function count_zero(string) {
  let count = 0;
  for (let i of string) {
    if (i === "0") {
      count++;
    }
  }
  return count;
}
const binary = "10001010101010101010001010110101010";
const result = count_zero(binary);
console.log(result);
