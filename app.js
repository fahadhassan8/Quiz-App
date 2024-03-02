let javaScriptBtn = () =>{
    var javaScriptBtn = document.getElementById('card-button');
    var firstPage = document.querySelector('.first-page');
    var secondPage = document.querySelector('.second-page');
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';
}
// let continueBtn = () =>{
//     let themeBtn = document.querySelector('.theme-btn');
//     let quizSection = document.querySelector('.main-div');
//     var secondPage = document.querySelector('.second-page');
//     secondPage.style.display = 'none';
//     quizSection.style.display = 'block';
// }

var quizques = [
    {
        ques: "Q1: What is the full form of HTML?",
        a: "Hello to My Land",
        b: "Hyper Text Makeup Language",
        c: "Hey Text Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        ques: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheet",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheet",
        d: "Camel Stainless Steel",
        ans: "ans1"
    },
    {
        ques: "Q3: What is the full form HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        ques: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JavaScale",
        d: "JavaSnake",
        ans: "ans1"
    },
    {
        ques: "Q5: What is the full form of TS?",
        a: "TypeScript",
        b: "TypeSuper",
        c: "TypeScale",
        d: "TypeSnake",
        ans: "ans1"
    },
    {
        ques: "Q6: var = 'Fahad' What is the typeof this variable?",
        a: "Number",
        b: "Boolean",
        c: "String",
        d: "Object",
        ans: "ans3"
    },
    {
        ques: "Q7: Which of the following method remove first element of an array?",
        a: "push()",
        b: "unshift()",
        c: "shift()",
        d: "pop()",
        ans: "ans4"
    },
    {
        ques: "Q8: The external JavaScript file must contain the <script> tag.",
        a: "True",
        b: "False",
        c: "Both of the above",
        d: "None of the above",
        ans: "ans1"
    },
    {
        ques: "Q9: Which of the following function of Array object sorts the elements of an array?",
        a: "toSource()",
        b: "sort()",
        c: "toString()",
        d: "unshift()",
        ans: "ans2"
    },
    {
        ques: "Q10: What is a JavaScript constructor function used for?",
        a: "Defining CSS styles for elements.",
        b: "Creating and initializing objects.",
        c: "Managing database connections.",
        d: "Controlling user interface animations.",
        ans: "ans2",
    },
    {
        ques: "Q11: What is the purpose of the 'prototype' property in a constructor function?",
        a: "To define the constructor's name.",
        b: "To store private data for the object.",
        c: "To add methods and properties to all instances of the object.",
        d: "To prevent the object from being modified.",
        ans: "ans3",
    },
    {
        ques: "Q12: Which of the following function of Number object returns a string value version of the current number?",
        a: "toString()",
        b: "toFixed()",
        c: "toLocaleString()",
        d: "toPrecision()",
        ans: "ans1"
    },
    {
        ques: "Q13: How do you access a property of an object created with a constructor function?",
        a: "Using the 'dot' notation (e.g., obj.property).",
        b: "By calling a separate function with the property name.",
        c: "With the 'for...in' loop to iterate through properties.",
        d: "By using the 'prototype' property of the constructor.",
        ans: "ans1",
    },
    {
        ques: "Q14.: Which of the following function of String object causes a string to be displayed as a superscript, as if it were in a <sup> tag?",
        a: "sup()",
        b: "small()",
        c: "strike()",
        d: "sub()",
        ans: "ans1"
    },
    {
        ques: "Q15.Which of the following function of String object creates an HTML anchor that is used as a hypertext target?",
        a: "anchor()",
        b: "link()",
        c: "blink()",
        d: "big()",
        ans: "ans2"
    },
    {
        ques: "Q16: Which keyword is used to create a new instance of an object in JavaScript?",
        a: "this",
        b: "new",
        c: "create",
        d: "instance",
        ans: "ans2",
    },
];
var question = document.querySelector(".question");
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var submit = document.querySelector('#Submit');
var currentQues = 0;
index = 0;
// console.log(quizques[index])   
var loadQuestion = function () {
    question.innerHTML = quizques[currentQues].ques;
    option1.innerHTML = quizques[currentQues].a;
    option2.innerHTML = quizques[currentQues].b;
    option3.innerHTML = quizques[currentQues].c;
    option4.innerHTML = quizques[currentQues].d;

    var radioBtn = document.querySelectorAll('input[type="radio"]');
    for (i = 0; i < radioBtn.length; i++) {
        // radioBtn[i].checked = false;
        console.log(radioBtn[i].checked);
    }
};
loadQuestion();




submit.addEventListener("click", function () {
    currentQues++;
    if (currentQues < quizques.length) {
        loadQuestion();
    }
    else {
        alert('you have finished')
    }
});
function radioUnchkd() {
    var radioBtn = document.querySelectorAll('input[type="radio"]');
    var checked = true;
    for (var i = 0; i < radioBtn.length; i++) {
        if (!radioBtn[i].checked) {
            checked = false;
            break; // No need to continue loop if one radio button is unchecked
        }
    }    
}
submit.addEventListener('click', radioUnchkd);
