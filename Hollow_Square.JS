let str = "";
let n = 5;

for (let i = 0; i <= n; i++) {// outr loop
    for (let j = 0; j <= n; j++) { // inner loop
        if (i === 0 || i === n) { // print first and last row
            str = str + "*"
        } else {
            if (j === 0 || j === n) {// print firat and last column
                str = str + "*"
            } else {
                str += " "
            }

        }
    }
    str += "\n"
}
console.log(str)