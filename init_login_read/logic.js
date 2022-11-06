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
return_dict={}
syll_dict={}



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

// function network(master_dict){
// // create the network
// const { Tree, Network } = window.synaptic;
// var inputLayer = new Tree(Object.length(survey_dict));
// var hiddenLayer = new Tree(3);
// var outputLayer = new Tree(1);
// inputLayer.project(hiddenLayer);
// hiddenLayer.project(outputLayer);
// var myNetwork = new Network({input: inputLayer,hidden: [hiddenLayer],output: outputLayer});
// // train the network - learn Score Val
// var learningRate = .3;
// for (var i = 0; i < 20000; i++){
// 	myNetwork.activate(return_dict["Time Taken"],syll_dict["Time Taken"]);
// 	myNetwork.propagate(learningRate, [0]);

// 	myNetwork.activate(return_dict["Time Taken"],syll_dict["Time Taken"]-10);
// 	myNetwork.propagate(learningRate, [-8]);

//     myNetwork.activate(return_dict["Time Taken"],syll_dict["Time Taken"]-20);
// 	myNetwork.propagate(learningRate, [-14]);

// 	myNetwork.activate(return_dict["Time Taken"]+10,syll_dict["Time Taken"]);
// 	myNetwork.propagate(learningRate, [12]);

// 	myNetwork.activate(return_dict["Time Taken"]+20,syll_dict["Time Taken"]);
// 	myNetwork.propagate(learningRate, [30]);
// }

// test the network
// console.log(myNetwork.activate([return_dict["Time Taken"],syll_dict["Time Taken"]])); // [0.015020775950893527]
// // console.log(myNetwork.activate([0,1])); // [0.9815816381088985]
// // console.log(myNetwork.activate([1,0])); // [0.9871822457132193]
// // console.log(myNetwork.activate([1,1])); // [0.012950087641929467]
// }


//find algorithmic quotient of ability
function c_make(survey_dict, ai_determined_quotient){
    user_id=Object.apply("UBIT Name",null)
    // for(let m of Object.keys(survey_dict[survey_dict_name])){

    // }
}

//ALGORITHIM- account for avg hours, ability quotient, later acc for laziness quotient
function hours_calc(a,b,c){
    hours=(a+b)/2
    rconst=Math.random(1,3)+2^(Math.random(1,28)%3)+9/(2*Math.random(8,12))
    rconst+=Math.random((1,4))%2-1
    hours+=rconst
    hours=(hours+c/2)
}





