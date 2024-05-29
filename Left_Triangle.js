let str = "";
let n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
        str = str + "*";
    }
    for (let k = 0; k < i; k++) {
        str = str + " ";

    }
    str += "\n";
}

console.log(str);