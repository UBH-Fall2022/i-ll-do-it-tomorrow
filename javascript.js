function network(master_dict){
    // create the network
    const { Tree, Network } = window.synaptic;
    var inputLayer = new Tree(Object.length(survey_dict));
    var hiddenLayer = new Tree(3);
    var outputLayer = new Tree(1);
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);
    var myNetwork = new Network({input: inputLayer,hidden: [hiddenLayer],output: outputLayer});
    // train the network - learn Score Val
    var learningRate = .3;
    for (var i = 0; i < 2000; i++){
        myNetwork.activate(return_dict["Time Taken"],syll_dict["Time Taken"]);
        myNetwork.propagate(learningRate, [0]);
    
        myNetwork.activate(return_dict["Time Taken"],syll_dict["Time Taken"]-10);
        myNetwork.propagate(learningRate, [-8]);
    
        myNetwork.activate(return_dict["Time Taken"],syll_dict["Time Taken"]-20);
        myNetwork.propagate(learningRate, [-14]);
    
        myNetwork.activate(return_dict["Time Taken"]+10,syll_dict["Time Taken"]);
        myNetwork.propagate(learningRate, [12]);
    
        myNetwork.activate(return_dict["Time Taken"]+20,syll_dict["Time Taken"]);
        myNetwork.propagate(learningRate, [30]);
    }
    
    // test the network
    console.log(myNetwork.activate([return_dict["Time Taken"],syll_dict["Time Taken"]])); // [0.015020775950893527]
    // console.log(myNetwork.activate([0,1])); // [0.9815816381088985]
    // console.log(myNetwork.activate([1,0])); // [0.9871822457132193]
    // console.log(myNetwork.activate([1,1])); // [0.012950087641929467]
    }