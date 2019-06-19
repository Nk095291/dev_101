function binaryToDecimal(x) {
	var count = 0;
	var ans = 0;
	while (x > 0) {
		ans += (x % 2) * Math.pow(10, count);
		count++;
		x = Math.floor(x / 2);
	}
	console.log(ans);
}
binaryToDecimal(13);
console.log(process.argv);