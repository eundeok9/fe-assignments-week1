let input = require("fs").readFileSync("dev/stdin").toString().split(" ");

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);
