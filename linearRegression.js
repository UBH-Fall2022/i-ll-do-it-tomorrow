function linRegressions(w,b) {
    this.w=w;
    this.b=b;
    this.predict = (x) => {
      return x*this.w+this.b;
    }
}
function predictionCost(y, prediction) {
    return (y - prediction) ** 2 / 2; // i.e. -> 235.6
}
const xTrain=[20,10,15,8,8,19,7,6];
const yTrain=[15,7,10,5,7,15,8,4];
const xTest=[20,10,15,8,8,19,7,6];
const yTest=[17,9,12,4,6,13,5,2];

function forwardPropagation(model, xTrain, yTrain) {
const m = xTrain.length;
const predictions = [];
let cost = 0;
for (let i = 0; i < m; i += 1) {
    const prediction = linRegressions.predict(xTrain[i]);
    cost+=predictionCost(yTrain[i],prediction);
    predictions.push(prediction);
}
cost/=m;
return [predictions, cost];
}


function backwardPropagation(predictions, xTrain, yTrain) {
    const m=xTrain.length;
    let dW=0;
    let dB=0;
    for (let i = 0; i < m; i += 1) {
        dW += (yTrain[i] - predictions[i]) * xTrain[i];
        dB += yTrain[i] - predictions[i];
    }
    dW=dW/m;
    dB=dB/m;
    return [dW, dB];
}

function trainModel({model, epochs, alpha, xTrain, yTrain}) {
    const costHistory = [];
    for (let epoch = 0; epoch < epochs; epoch += 1) {
        const [predictions, cost] = forwardPropagation(model, xTrain, yTrain);
        costHistory.push(cost);
        const [dW, dB] = backwardPropagation(predictions, xTrain, yTrain);
        nanoNeuron.w += alpha * dW;
        nanoNeuron.b += alpha * dB;
    }
    return costHistory;
}

function setTraining(){
    newlinearregression = new linRegressions(Math.random(),Math.random());
    const epochs = 70000;
    const alpha = 0.0003;
    const trainingCostHistory = trainModel({newlinearregression, epochs, alpha, xTrain, yTrain});
}