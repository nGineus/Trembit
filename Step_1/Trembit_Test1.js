'use strict'

var arrayLength = 20,
    arrayToWork = new Array (arrayLength),
    minValueToFill = -10000,
    maxValueToFill = 10000,
    valueToCheck = 555;

var Module1 = (function () {
    
    return {

        fillAray: function (arrayToFill, minValue, maxValue) {
            for (var i=0; i < arrayToFill.length; i++) {
                arrayToFill[i] = Math.floor((Math.random()*(maxValue-minValue)) + minValue);
            }
        },

        closestElement: function (arrayToLook, valueToCheck) {
            var Value = arrayToLook[0], 
                Distance = Math.abs(Value - valueToCheck), 
                NewDistance;

            return arrayToLook.reduce(function(Value, CurentValue) {
                NewDistance = Math.abs(CurentValue - valueToCheck);
                Value = (NewDistance < Distance) ? CurentValue : Value;
                Distance = (NewDistance < Distance) ? NewDistance : Distance;
                return Value;
            });
        }

    };
}());

Module1.fillAray(arrayToWork, minValueToFill, maxValueToFill); 
console.log(arrayToWork);
console.log('Nearest for ' + valueToCheck + ' is ' + Module1.closestElement(arrayToWork, valueToCheck));

// Реализуйте метод closestElement
// Который принимает два параметра
// * @param arrayToLook {Array.Number} не пустой массив целых чисел от -10000 до 10000
// * @param valueToCheck {Number} число 
// И возвращает ближайшее значение из массива arrayToLook к valueToCheck.