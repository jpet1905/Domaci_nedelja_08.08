let N = 9;  //za dijamant uvek mora neparan broj redova
for (let i = 1; i < N; i += 2) {//1., 2., 3. i 4.red
    console.log(" ".repeat((N - i) / 2) + "*".repeat(i) + " ".repeat((N - i) / 2));
}
console.log("*".repeat(N)); //to je sredisnji red
for (let i = N - 2; i > 0; i -= 2) {//6., 7., 8. i 9.red
    console.log(" ".repeat((N - i) / 2) + "*".repeat(i) + " ".repeat((N - i) / 2));
}
