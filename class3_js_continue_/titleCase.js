let input = "I'm a little Tea pot.";
console.log(input);
function convert(a) {
    // let ar = input.split(" ");
    // console.log(ar);
    // ar=ar.map((e)=>e.toLowerCase().replace(e.charAt(0).toLowerCase(),e.charAt(0).toUpperCase()));
    // console.log(ar);
    // console.log(ar.join(" "));
    console.log(a.split(" ").map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()));
}
convert(input);