//TODO
/*
    ----
INITIAL STEPS-
    Get skill data from user and parse it into a dictionary.
    Add skill data to master dataset
    Mathematically implement a way to get the number of days ahead that the user needs to start working
    Find a way to read syllabi and get deadlines
    ----
CODE FUNCTIONS-
    1) Implement a function csv_read(csv)-
        Take data from a csv file and assign them to GLOBAL variables
        Use that data in newer functions
    2) Implement a function datamaker to add csvread to the dataset
    2) Implement a function hours_calc(a,b,c)
        Formulate a mathematical avg number of hours 
    3) Implement a function days_calc(hours_calc,f1,f2)
        Formulate a mathematical number of days using random values to differentiate data

    ----
    */

//GLOBAL VARIABLES
master_dict={}
instructed_hrs=0
known_hrs=0
known_hrs=instructed_hrs//change this later once the dataset is known
assumed_skill=0
credit_hrs=0
js_skill=0;



//Implement csv_read

function csv_read(csv){
    survey_dict=$.csv.toObjects(csv);
}
//for the AI training model
function datamaker(survey_dict){
    survey_dict_name=survey_dict["UBIT Name"]
    master_dict[survey_dict_name]=survey_dict
}

//find algorithmic quotient of ability
function c_make(survey_dict, ai_determined_quotient){
    // for
}

//ALGORITHM- account for avg hours, ability quotient, later acc for laziness quotient
function hours_calc(a,b,c){
    hours=(a+b)/2
    rconst=Math.random(1,3)+2^(Math.random(1,28)%3)+9/(2*Math.random(8,12))
    rconst+=Math.random((1,4))%2-1
    hours+=rconst
    hours=(hours+c/2)
}





