var Item = function(dish, cost)
{
  this.tax = cost * .0825;
  this.cost = cost;
  this.tip = cost * .15;
  this.total = cost + this.tip + this.tax;
  this.name = dish;
};

var pizza = new Item('pizza', 5);
var coke = new Item('coke', 2);
var calzone = new Item('calzone', 6);

//console.log(pizza);
//console.log(pizza.name);
//console.log(pizza.cost);
//console.log(pizza.total);
//console.log(pizza.tip);
//console.log(pizza.tax);

var Bill = function(items){
  this.length = items.length;
  this.grandtotal = this.grandtotal(items);
  this.justtax = this.justtax(items);
  this.justtip = this.justtip(items);
  this.total = this.billtotal(items);
  //this.forwhom = diner;
};


Bill.prototype.grandtotal = function(bills) {
  var ttotal = 0;
  var listo = [];
  var list;
  var totaltip = 0;
  var totaltax = 0;
  var basetotal = 0;
  listo.push("___Item__________cost____tip_____tax_____total");
  for (var i = 0; i < bills.length; i++)
  {
    var z = i + 1;
    ttotal += bills[i].total;
    var list = z + ") " + bills[i].name + "  $" + bills[i].cost + "   $" + (bills[i].tip).toFixed(2) + "   $" + bills[i].tax.toFixed(2) + "   $" + bills[i].total.toFixed(2);
    totaltip += bills[i].tip;
    totaltax += bills[i].tax;
    basetotal += bills[i].cost;
    listo.push(list);
  }
  listo.push("________________________________");
  listo.push(bills.length + " items, base total: $" + basetotal + " tip total: $" + totaltip.toFixed(2) + " tax total: $" + totaltax.toFixed(2) + " final total: $" + ttotal.toFixed(2));
  for (var i = 0; i < listo.length; i++)
  {
      console.log(listo[i]);
  }
  return listo;
  console.log(ttotal.toFixed(2));
};

Bill.prototype.justtax = function(bills) {
    var totaltax = 0;
    for (var i = 0; i < bills.length; i++)
    {
      totaltax += bills[i].tax;
    }
    return totaltax;
};

Bill.prototype.justtip = function(bills) {
    var totaltip = 0;
    for (var i = 0; i < bills.length; i++)
    {
      totaltip += bills[i].tip;
    }
    return totaltip;
};

Bill.prototype.billtotal = function(bills) {
  var billtotal = 0;
  for (var i = 0; i < bills.length; i++)
  {
    billtotal += bills[i].total;
  }
  return billtotal;
}

arri = [];
arri.push(pizza, coke, calzone);
var a = new Bill(arri);
//console.log(a.grandtotal);
//console.log(a.total);
//console.log(a.justtip);
//console.log(a.justtax);
//console.log(a.length);
//console.log(a.grandtotal);
//console.log(a.grandtotal);

var Spaghetti = new Item('Spaghetti', 10);
var wine = new Item('Wine', 8);
var breadsticks = new Item('Breadsticks', 4);
barri = [Spaghetti, wine, breadsticks];
//var b = new Bill(barri);
//b.grandtotal;
var Linguini = new Item('Linguini', 12);
var redwine = new Item('redwine', 15);
var carri = [Linguini, redwine];
//var c = new Bill(carri);
console.log("DUMMY CASES:");
console.log("Three dinners on the same bill:");
var darri = [];
var darri = arri.concat(barri, carri);
//console.log(darri);
//console.log("Number of items; " + darri.length);
//darri.push(arri, barri, carri);
console.log("Grand total of combined three dinners");
var d = new Bill(darri);
console.log("Grand tip total");
console.log(d.justtip);
console.log("Grand tax total");
console.log(d.justtax);
//var d = new Bill(darri);
//d.grandtotal;
//console.log(a);
//console.log(b);
//console.log(c);
