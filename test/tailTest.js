const assertEqual = require('../assertEqual');
const tail = require('../tail');


//assertEqual(result.length, 2); // ensure we get back two elements
//assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
//assertEqual(result[1], "Labs");
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse", "Labs");