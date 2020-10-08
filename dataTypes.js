'use strict'
//console.log("test")

var myBoolean = true;
var myEmptyString = "";
var myString1 = "some text1"
var myString2 = 'some text2'
var myString3 = `some text3
many lines

`
var myNumber = 3;

//console.log(myString2)

//arrays

var myArray = [];
var myGradesArray = [8, 5, 6, 7, true, 8, 10];

//console.log("myArray", myArray);
//console.log("myGradesArray", myGradesArray);
//console.log("the last from myGradesArray", myGradesArray[myGradesArray.length-1])

//objects

var emptyObject = {};

//console.log("the empty object is:", emptyObject);

var myObject = {
    headline:"Horrible thing happened!!",
    image:"http://www.pictures.com/puppy.jpg",
    hasBeenRead: false,
    likes: 0,
    comment: {
        title: "something",
    }
}
myObject.author = "Smári"



console.log("myObject is:", myObject);
//console.log("headline from myObject: "+ myObject.headline );

//console.log("the title from myObjects comment is", myObject.comment.title)

//Array of objects:

const news = [
    {
        headline:"Horrible thing happened!!",
        image:"http://www.pictures.com/puppy.jpg",
        hasBeenRead: false,
        likes: 0,
        comment: {
            title: "something",
        }
    },
    {
        headline:"A wonderful thing happened!!",
        image:"http://www.pictures.com/car.jpg",
        hasBeenRead: true,
        likes: 3,
        comment: {
            title: "nothing",
        }
    },
    {
        headline:"A neutral thing happened!!",
        image:"http://www.pictures.com/person.jpg",
        hasBeenRead: false,
        likes: 33,
        comment: {
            title: "whatever",
        }
    }
]
//console.log("the image from a wonderful thing happened", news[1].image)
//console.log("the title from a neutral thing happened: ", news[2].comment.title)
var firstItem = news[0];
firstItem.likes = firstItem.likes + 1;
firstItem.likes = firstItem.likes + 1;
firstItem.likes = firstItem.likes + 1;
firstItem.likes = firstItem.likes + 1;
firstItem.likes = firstItem.likes + 1;
//console.log("likes after incease of first item in news: ", news[0].likes);
// var myString4 = `
// my number is: ${myNumber} hahaha

// `

// console.log("funny string", myString4)

