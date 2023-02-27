// age - age of driver
// licence - number of full years person holds driving licence
// clazz - class of the car from 1 (smallest) to 5 (largest) that person wishes to rent
// acc - has s/he caused any accidents within last year
// acc2 - has s/he participated (but not caused) in any accidents within last year
// season - if it is high season or not
// function price(age, licence, clazz, acc, acc2, season) {

//     if (age < 18)
//     {
//       return "Driver too young - cannot quote the price";
//     }
//     if (age <= 21 && clazz > 2)
//     {
//         return "Drivers 21 y/o or less can only rent Class 1 vehicles";
//     }
//     var rentalprice = age;
//     if (clazz >= 4 && age <= 25 && season !== false)
//     {
//       rentalprice = rentalprice * 2;
//     }
//     if (licence < 1)
//     {
//         return "Driver must hold driving licence at least for one year. Can not rent a car!";
//     }
//     if (licence < 3)
//     {
//       rentalprice = rentalprice * 1.3;
//     }
//     if (acc == true && age < 30)
//     {
//       rentalprice = rentalprice + 15;
//     }
//     if (rentalprice > 1000)
//     {
//       return 1000.0;
//     }
//     return rentalprice;
// }
// exports.price = price;

function priceByClass(clazz){
  if (clazz == 1) {
    varPrice = 20.0;
  } else if (clazz == 2) {
    varPrice = 30.0;
  } else if (clazz == 3) {
    varPrice = 40.0;
  } else if (clazz == 4) {
    varPrice = 50.0;
  } else if (clazz == 5) {
    varPrice = 60.0;
  } else {
    varPrice = 0.0;
  }
  console.log("Returned price" + varPrice + clazz);
  return varPrice;
}

function isAdult(age) {
  if (age < 18) {
    console.log("Age is less than 18" + age)
    return "Driver too young - cannot quote the price";
  }
  return "Driver is adult";
}

function isYoungerThan21(age, clazz) {
  if (age <= 21 && clazz > 1) {
    console.log("Age is less than 21 or 21" + age + clazz)
    return "Drivers 21 y/o or less can only rent Class 1 vehicles";
  }
  console.log("Age is older than 21" + age + clazz)
  return "Driver is older than 21";
}

function class4or5(varPrice, clazz, age, season){
  if (clazz >= 4 && age <= 25 && season !== false){
    varPrice = varPrice * 1.5;
    console.log("Class 4 or 5" + varPrice)
    return varPrice;
  }
  console.log("Class 1, 2 or 3" + varPrice)
  return varPrice;
}

function licenseHeldYears(varPrice, licenceHeld) {
  if (licenceHeld < 1) {
    console.log("Licence held less than 1 year" + licenceHeld)
    return "Driver must hold driving licence at least for one year. Can not rent a car!";
  }
  if (licenceHeld < 3) {
    varPrice = varPrice * 1.3;
    console.log("Licence held less than 3 years" + licenceHeld + varPrice)
    return varPrice;
  }
  console.log("Licence held more than 3 years" + licenceHeld + varPrice)
  return rentalPrice;
}

function causedAccidents(varPrice, accidentCaused, age) {
  if (accidentCaused == true && age < 30) {
    varPrice = varPrice + 15;
    console.log("Accident caused" + varPrice + accidentCaused + age)
    return varPrice;
  }
  console.log("Accident not caused" + varPrice + accidentCaused + age)
  return varPrice;
}

function isPriceOverMaximum(varPrice) {
  var maximumPrice = 1000.0;
  console.log("Maximum price" + maximumPrice + varPrice)
  if (varPrice > maximumPrice) {
    varPrice = maximumPrice;
    console.log("Price is over maximum" + maximumPrice + varPrice)
    return varPrice;
  }
  console.log("Price is under maximum" + maximumPrice + varPrice)
  return varPrice;
}

// function isPriceUnderMinimum(varPrice, age) {
//   console.log("Minimum price" + age + varPrice)
//   if (varPrice < age) {
//     varPrice = age
//     console.log("Price is under minimum" + age + varPrice)
//     return varPrice;
//   }
//   console.log("Price is over minimum" + age + varPrice)
//   return varPrice;
// }

function price(varPrice, age, licenceHeld, clazz, accidentCaused, season) {
  priceByClass(clazz);
  console.log("Price by class" + varPrice)
  isAdult(age);
  console.log("Is adult" + varPrice)
  isYoungerThan21(age, clazz);
  console.log("Is younger than 21" + varPrice)
  class4or5(varPrice, clazz, age, season);
  console.log("Class 4 or 5" + varPrice)
  licenseHeldYears(varPrice, licenceHeld);
  console.log("Licence held years" + varPrice)
  causedAccidents(varPrice, accidentCaused, age);
  console.log("Caused accidents" + varPrice)
  isPriceOverMaximum(varPrice);
  console.log("Final price max" + varPrice)
  // isPriceUnderMinimum(varPrice, age);
  // console.log("Final price min" + varPrice + age)
  return varPrice;
}

exports.price = price;








