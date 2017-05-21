'use strict'

var array1 = [
   null,
   "Marvel",
   "2.0.17",
   {
       name: "Hulk",
       color: "green",
       age: 31,
       abilities: ["crash", "smash"]
   },
   {
       name: "Iron Man",
       age: 35,
       stillAlive: true
   },
   ["Captain America", "Thor", "Captain Marvel"]
];

var array2 = [
   null,
   "Marvel",
   "2.0.17",
   {
       name: "Hulk",
       color: "green",
       age: 31,
       abilities: ["crash", "smash"]
   },
   {
       name: "Iron Man",
       age: 35,
       stillAlive: true
   },
   ["Captain America", "Thor", "Captain Marvel"]
];


let Module2 = (function () {

function compareObject(object1, object2) {
    if(Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    } 
    console.log('Entering in Object with: ' + Object.keys(object1).length + ' items.');

    for (let element in object1) {
     if(typeof object1.element == 'object') {
                if(!((element.length) ? compareArray(object1[element], object1[element]) : compareObject(object1[element], object1[element]))) {
                    return false; 
                };
            }
            else {
              if(object1[element] !== object1[element]) {
                  return false;
              }
              else {
                console.log('Object element in: "' + element + '" : "' + object1[element] + '" is equal to "' + object1[element] + '"');
              }

            }
    };

    return true;
};

function compareArray(array1, array2) {
    if(array1.length !== array2.length) {
        return false; 
    }
    console.log ('Entering in Array with: ' + array1.length + ' elements');

    for(let element = 0; element < array1.length; element++) {
            if(array1[element] instanceof Object) {
                if(!((array1[element] instanceof Array) ? 
                    compareArray(array1[element], array2[element]) : compareObject(array1[element], array2[element]))) {
                        return false;
                    };
            }
            else {
              if(array1[element] !== array2[element]) {
                  console.log('Array element: ' + element + ' : "' + array1[element] + '" is NOT equal to "' + array2[element] + '"');
                  return false;
              }
              else {
                console.log('Array element: ' + element + ' : "' + array1[element] + '" is equal to "' + array2[element] + '"');
              }

            }
    };
    return true;
}
        
    return {
        deepEquals: function (arrayToCompare1, arrayToCompare2) {
            return compareArray(arrayToCompare1, arrayToCompare2);
        }
    };

}());

Module2.deepEquals(array1, array2) ? console.log('Is Equal') : console.log('Is Different');

// Реализуйте deepEquals метод
// Который принимает два параметра
// * @param array1 {Array}
// * @param array2 {Array}
// И возвращает булевое значение обозначающее равны ли массивы array1 и array2 между собой. 
// При этом содержимое массива может быть разных типов, а сам массив быть зубчатым (в качестве элемента 
// может быть другой массив либо объект). При проверке равенства объектов и массивов необходимо проверять 
// значения, а не делать проверку по ссылке.
// Пример массива:
