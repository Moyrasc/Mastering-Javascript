function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let billTotal= preTaxAndTipAmount * 0.15 +preTaxAndTipAmount *0.095+preTaxAndTipAmount;
    return billTotal
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9