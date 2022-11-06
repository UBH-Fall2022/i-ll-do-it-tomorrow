// //TODO

//     ----
// INITIAL STEPS-
//     Get skill data from user and parse it into a dictionary.
//     Add skill data to master dataset
//     Mathematically implement a way to get the number of days ahead that the user needs to start working
//     Find a way to read syllabi and get deadlines
//     Account for multiple subjects
//     Create a dict of dates, and assign subjects to each day!
//     ----
// CODE FUNCTIONS-
//     1) Implement a function csv_read(csv)-
//         Take data from a csv file and assign them to GLOBAL variables
//         Use that data in newer functions
//     2) Implement a function datamaker to add csvread to the dataset
//     2) Implement a function hours_calc(a,b,c)
//         Formulate a mathematical avg number of hours 
//     3) Implement a function days_calc(hours_calc,f1,f2)
//         Formulate a mathematical number of days using random values to differentiate data

//     ----

//GLOBAL VARIABLES

master_dict={}
instructed_hrs=0
known_hrs=0
known_hrs=instructed_hrs//change this later once the dataset is known
assumed_skill=0
credit_hrs=0
js_skill=0;
return_dict={}
syll_dict={}
numberOfClasses=0


//Implement csv_read

function csv_read(csv){
    survey_dict=$.csv.toObjects(csv);
}

//for the AI training model
function datamaker(survey_dict){
    survey_dict_name=survey_dict["UBIT Name"]
    master_dict[survey_dict_name]=survey_dict
    return survey_dict_name
}


function numberOfClassesMaker(numberOfClasses){
    if(survey_dict["Classes"]>=6 && csurvey_dict["Classes"]<14 ){
        numberOfClasses+=2;
    }
    else if(csurvey_dict["Classes"]>=14 ){
        numberOfClasses+=2;
    }
    else{
        numberOfClasses+=1;
    }
    return numberOfClasses;
}

//find algorithmic quotient of ability
function c_make(survey_dict, ai_determined_quotient){
    const customPrediction = linRegressions.predict(tempInCelsius);
    return customPrediction;
}

//ALGORITHIM- account for avg hours, ability quotient, later acc for laziness quotient
function hours_calc(a,b,c){
    hours=(a+b)/2
    rconst=Math.random(1,3)+2^(Math.random(1,28)%3)+9/(2*Math.random(8,12))
    rconst+=Math.random((1,4))%2-1
    hours+=rconst*survey_dict["Proficiency[Python]"]
    hours=((hours+c)/2)
    return hours
}

function daySplit(){
    reqDays=hours_calc(syll_dict["reqhrs"],master_dict[survey_dict],c_make)
    daySplit1=(reqDays/4)+Math.random(2,2);
    return daySplit
}

function monthDatasetMaker(daysDict){
    dueDate=syll_dict["Due Date"]
    startDate=dueDate-daySplit()
   for (m of Range(0,daySplit)){
        daysDict[m]="CODE TODAY!!!!!!!!!!!!!!!!!!!"
   }

}




