var correctCount = 0;
var wrongCount = 0;



  function exit()
  {
     throw new Error('This is not an error. This is just to abort javascript');
  }

var question1 = {
    question: "What color shirt does the protagonist of the original Far Cry(2004) wear?",
    answer1: "Blue",
    answer2: "Red",
    answer3: "Yellow",
    answer4: "Green",
    increment : function(){
        correctCount++;
        console.log(correctCount);
      }
};

var question2 = {
    question: "What illness can kill you if kept unchecked in Far Cry 2(2008)?",
    answer1: "HIV",
    answer2: "Cold",
    answer3: "Milaria",
    answer4: "The Shits",
    increment : function(){
        correctCount++;
        console.log(correctCount);
      }
};

var question3 = {
    question: "Who is the main antagonist in Far Cry 3(2012)?",
    answer1: "Hoyt Volker",
    answer2: "Vaas Montenegro",
    answer3: "Buck Hughes",
    answer4: "Citra",
    increment : function(){
        correctCount++;
        console.log(correctCount);
      }
};

var question4 = {
    question: "Far Cry 3: Blood Dragon(2013) Takes place after what war?",
    answer1: "World War II",
    answer2: "Vietnam",
    answer3: "Vietnam War II",
    answer4: "Apocalypse",
    increment : function(){
        correctCount++;
        console.log(correctCount);
      }
};

var question5 = {
    question: "Were is the fictional country of Kyrat placed in Far Cry 4(2014)?",
    answer1: "Himalayas",
    answer2: "Americas",
    answer3: "England",
    answer4: "Moon",
    increment : function(){
        correctCount++;
        console.log(correctCount);
      }
};

var question6 = {
    question: "What game's map did Ubisoft use as a starting point to create Far Cry Primal(2016)?",
    answer1: "Far Cry(2004)",
    answer2: "Far Cry 2(2008)",
    answer3: "Far Cry 3(2012)",
    answer4: "Far Cry 4(2014)",
    increment : function(){
        correctCount++;
        console.log(correctCount);
      }
};

var question7 = {
    question: "Where does Far Cry 5(2018) take place?",
    answer1: "Hope County, Montana",
    answer2: "Dallas, Texas",
    answer3: "New York, New York",
    answer4: "Canada",
    increment : function(){
        correctCount++;
        console.log(correctCount);
      }
};

var question8 = {
    question: "Which is the best Far Cry?",
    answer1: "All",
    answer2: "All",
    answer3: "All",
    answer4: "All",
    increment : function(){
        correctCount++;
        console.log(correctCount);
      }
};


$(document).ready(function() {



$("#reset").hide();
$("#questionCard").hide();
$("#timer").hide();

function toQuestion2() {
    $("#question").text(question2.question);
    $("#answer1").text(question2.answer1);
    $("#answer2").text(question2.answer2);
    $("#answer3").text(question2.answer3);
    $("#answer4").text(question2.answer4);

     if ($("#checkbox1").on("click", function() {
        $( "#checkbox1" ).prop( "checked", false );
        toQuestion3();
    }));

     if ($("#checkbox2").on("click", function() {
        $( "#checkbox2" ).prop( "checked", false );
        toQuestion3();
    }));

     if ($("#checkbox3").on("click", function() {
        $( "#checkbox3" ).prop( "checked", false );
        toQuestion3();
    }));

     if ($("#checkbox4").on("click", function() {
        $( "#checkbox4" ).prop( "checked", false );
        toQuestion3();
    }));
    };

    function toQuestion3() {
        $("#question").text(question3.question);
        $("#answer1").text(question3.answer1);
        $("#answer2").text(question3.answer2);
        $("#answer3").text(question3.answer3);
        $("#answer4").text(question3.answer4);
    
         if ($("#checkbox1").on("click", function() {
            $( "#checkbox1" ).prop( "checked", false );
            toQuestion4();
        }));
    
         if ($("#checkbox2").on("click", function() {
            $( "#checkbox2" ).prop( "checked", false );
            toQuestion4();
        }));
    
         if ($("#checkbox3").on("click", function() {
            $( "#checkbox3" ).prop( "checked", false );
            toQuestion4();
        }));
    
         if ($("#checkbox4").on("click", function() {
            $( "#checkbox4" ).prop( "checked", false );
            toQuestion4();
        }));
        };
        function toQuestion4() {
            $("#question").text(question4.question);
            $("#answer1").text(question4.answer1);
            $("#answer2").text(question4.answer2);
            $("#answer3").text(question4.answer3);
            $("#answer4").text(question4.answer4);
        
             if ($("#checkbox1").on("click", function() {
                $( "#checkbox1" ).prop( "checked", false );
                toQuestion5();
            }));
        
             if ($("#checkbox2").on("click", function() {
                $( "#checkbox2" ).prop( "checked", false );
                toQuestion5();
            }));
        
             if ($("#checkbox3").on("click", function() {
                $( "#checkbox3" ).prop( "checked", false );
                toQuestion5();
            }));
        
             if ($("#checkbox4").on("click", function() {
                $( "#checkbox4" ).prop( "checked", false );
                toQuestion5();
            }));
            };

            function toQuestion5() {
                $("#question").text(question5.question);
                $("#answer1").text(question5.answer1);
                $("#answer2").text(question5.answer2);
                $("#answer3").text(question5.answer3);
                $("#answer4").text(question5.answer4);
            
                 if ($("#checkbox1").on("click", function() {
                    $( "#checkbox1" ).prop( "checked", false );
                    toQuestion6();
                }));
            
                 if ($("#checkbox2").on("click", function() {
                    $( "#checkbox2" ).prop( "checked", false );
                    toQuestion6();
                }));
            
                 if ($("#checkbox3").on("click", function() {
                    $( "#checkbox3" ).prop( "checked", false );
                    toQuestion6();
                }));
            
                 if ($("#checkbox4").on("click", function() {
                    $( "#checkbox4" ).prop( "checked", false );
                    toQuestion6();
                }));
                };

                function toQuestion6() {
                    $("#question").text(question6.question);
                    $("#answer1").text(question6.answer1);
                    $("#answer2").text(question6.answer2);
                    $("#answer3").text(question6.answer3);
                    $("#answer4").text(question6.answer4);
                
                     if ($("#checkbox1").on("click", function() {
                        $( "#checkbox1" ).prop( "checked", false );
                        toQuestion7();
                    }));
                
                     if ($("#checkbox2").on("click", function() {
                        $( "#checkbox2" ).prop( "checked", false );
                        toQuestion7();
                    }));
                
                     if ($("#checkbox3").on("click", function() {
                        $( "#checkbox3" ).prop( "checked", false );
                        toQuestion7();
                    }));
                
                     if ($("#checkbox4").on("click", function() {
                        $( "#checkbox4" ).prop( "checked", false );
                        toQuestion7();
                    }));
                    };

                    function toQuestion7() {
                        $("#question").text(question7.question);
                        $("#answer1").text(question7.answer1);
                        $("#answer2").text(question7.answer2);
                        $("#answer3").text(question7.answer3);
                        $("#answer4").text(question7.answer4);
                    
                         if ($("#checkbox1").on("click", function() {
                            $( "#checkbox1" ).prop( "checked", false );
                            toQuestion8();
                        }));
                    
                         if ($("#checkbox2").on("click", function() {
                            $( "#checkbox2" ).prop( "checked", false );
                            toQuestion8();
                        }));
                    
                         if ($("#checkbox3").on("click", function() {
                            $( "#checkbox3" ).prop( "checked", false );
                            toQuestion8();
                        }));
                    
                         if ($("#checkbox4").on("click", function() {
                            $( "#checkbox4" ).prop( "checked", false );
                            toQuestion8();
                        }));
                        };

                        function toQuestion8() {
                            $("#question").text(question8.question);
                            $("#answer1").text(question8.answer1);
                            $("#answer2").text(question8.answer2);
                            $("#answer3").text(question8.answer3);
                            $("#answer4").text(question8.answer4);
                        
                             if ($("#checkbox1").on("click", function() {
                                $( "#checkbox1" ).prop( "checked", false );
                                toOutro();
                            }));
                        
                             if ($("#checkbox2").on("click", function() {
                                $( "#checkbox2" ).prop( "checked", false );
                                toOutro();
                            }));
                        
                             if ($("#checkbox3").on("click", function() {
                                $( "#checkbox3" ).prop( "checked", false );
                                toOutro();
                            }));
                        
                             if ($("#checkbox4").on("click", function() {
                                $( "#checkbox4" ).prop( "checked", false );
                                toOutro();
                            }));
                            };

                            function toOutro() {
                                $("#outro").html("Congrats you have finished the quiz, here is your score:" + " " + correctCount.toString());
                                $("#questionCard").hide();
                                $("#timer").hide();
                            }

    

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

     if ($("#checkbox1").on("click", function() {
        $( "#checkbox1" ).prop( "checked", false );
        toQuestion2();
    }));

     if ($("#checkbox2").on("click", function() {
        $( "#checkbox2" ).prop( "checked", false );
        question1.increment();
        toQuestion2();
    }));

     if ($("#checkbox3").on("click", function() {
        $( "#checkbox3" ).prop( "checked", false );
        toQuestion2();
    }));

     if ($("#checkbox4").on("click", function() {
        $( "#checkbox4" ).prop( "checked", false );
        toQuestion2();
    }));

    stop();

    

})
});