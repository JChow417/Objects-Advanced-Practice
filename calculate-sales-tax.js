var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function addArray(array) {
  var sum = 0;
  for (var i in array) {
    sum += array[i];
  }
  return sum;
}

function calculateSalesTax(sales, taxRates) {
  // Implement your code here
  var results = {};
  for(var index in sales){

    sales[index].sales = addArray(sales[index].sales);
    sales[index].taxes = sales[index].sales * taxRates[sales[index].province];

    if(results.hasOwnProperty(sales[index].name)) {
      results[sales[index].name]["totalSales"] += sales[index].sales;
      results[sales[index].name]["totalTaxes"] += sales[index].taxes;

    } else {
      results[sales[index].name] = {};
      results[sales[index].name]["totalSales"] = sales[index].sales;
      results[sales[index].name]["totalTaxes"] = sales[index].taxes;
    }

  }
  return results;
}

var results = calculateSalesTax(companySalesData, taxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/