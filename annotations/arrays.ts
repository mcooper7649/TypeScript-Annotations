const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

//Help with inference
const vehicle = carMakers[0];

const myCar = carMakers.pop();

//prevent incompatible values

carMakers.push(100);

//help with 'map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
//incorrect example below
importantDates.push(100);
