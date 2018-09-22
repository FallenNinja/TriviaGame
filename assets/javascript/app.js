var correctCount = 0;
var wrongCount = 0;

var question1 = {
    question: "What color shirt does the protagonist of the original Far Cry(2004) wear?",
    answer1: "Blue",
    answer2: "Red",
    answer3: "Yellow",
    answer4: "Green",
};

var question2 = {
    question: "What illness can kill you if kept unchecked in Far Cry 2(2008)?",
    answer1: "HIV",
    answer2: "Cold",
    answer3: "Milaria",
    answer4: "The Shits",
};

var question3 = {
    question: "Who is the main antagonist in Far Cry 3(2012)?",
    answer1: "Hoyt Volker",
    answer2: "Vaas Montenegro",
    answer3: "Buck Hughes",
    answer4: "Citra",
};

var question4 = {
    question: "Far Cry 3: Blood Dragon(2013) Takes place after what war?",
    answer1: "World War II",
    answer2: "Vietnam",
    answer3: "Vietnam War II",
    answer4: "Apocalypse",
};

var question5 = {
    question: "Were is the fictional country of Kyrat placed in Far Cry 4(2014)?",
    answer1: "Himalayas",
    answer2: "Americas",
    answer3: "England",
    answer4: "Moon",
};

var question6 = {
    question: "What game's map did Ubisoft use as a starting point to create Far Cry Primal(2016)?",
    answer1: "Far Cry(2004)",
    answer2: "Far Cry 2(2008)",
    answer3: "Far Cry 3(2012)",
    answer4: "Far Cry 4(2014)",
};

var question7 = {
    question: "Where does Far Cry 5(2018) take place?",
    answer1: "Hope County, Montana",
    answer2: "Dallas, Texas",
    answer3: "New York, New York",
    answer4: "Canada",
};

var question8 = {
    question: "Which is the best Far Cry?",
    answer1: "All",
    answer2: "All",
    answer3: "All",
    answer4: "All",
};


$(document).ready(function() {

$("#reset").hide();
$("#questionCard").hide();
$("#timer").hide();

$("#start").on("click", function() {
    
    $("#questionCard").show();
    $("#reset").show();
    $("#start").hide();
    $("#intro").hide();
    $("#timer").show();

    $("#question").text(question1.question);
    $("#answer1").text(question1.answer1);
    $("#answer2").text(question1.answer2);
    $("#answer3").text(question1.answer3);
    $("#answer4").text(question1.answer4);

    // if ($("#checkbox1").on("click", function() {
    //     toQuestion2;
    // }));

    if ($("#checkbox1").on("click", function() {
        $("#answer1").text(question2.answer2);
    }));

    

})
});