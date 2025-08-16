let age=prompt("Enter your age:", 14);
let maxAge =prompt("You will live until the ripe old age of : ", "100");
let numPerDay = prompt("Number of Snacks Daily: ", 2);
let sure = confirm("Sure of your numbers?");
if (sure) {
    let totalRequired = (Number(numPerDay) * 365) * (Number(maxAge) - Number(age));

    document.write("You will need " + totalReqired + "to last you until the ripe old age of " + maxAge + "<br>");
    alert("You will need " + totalRequired + " to last you until the ripe old age of " + maxAge);
    console.log("You will need " + totalRequired + " to last you until the ripe old age of " + maxAge);
}
else {
    alert("Please try again.");
}
