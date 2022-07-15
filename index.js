const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyy/MM/dd\tHH:mm:ss aa"));
console.log(format(new Date(), "dd/MM/yyy\tHH:mm:ss"));

console.log(uuid());
console.log();
