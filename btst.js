// Best time to buy and sell stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day
// You want to maximize your profit by choosing a ingle day to buy one stock
// and choosing a different day in the future to sell that stock
// return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4];
// Output: 5;

// Input: prices = [7,6,4,3,1];
// Output: 0;

const maxProfit = (prices) => {
    let maxProfit = 0;
    for(let i=0; i<prices.length-1; i++){
        for(let j=i+1; j<prices.length; j++){
            let currentProfit = prices[j] - prices[i];
            if(currentProfit > maxProfit) maxProfit = currentProfit;
        }
    }
    return maxProfit;
}
console.log(maxProfit([7,1,5,3,6,4]));


// optimized
// Greedy Algorithm
const maxProfit2 = (prices)=>{
    let minPrice = prices[0] || 0;
    let profit =0;
    for(let i=1; i<prices.length; i++){
        if(prices[i] < minPrice){
            minPrice= prices[i];
        }
        let currentProfit = prices[i] - minPrice;
        if(profit < currentProfit){
            profit = currentProfit;
        }
    }
    return profit;
}