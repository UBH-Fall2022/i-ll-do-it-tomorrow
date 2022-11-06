if(onCertainWebsitesNeedNotificationAppearTrue) {
    // send message to background script
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {

});
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        //alert("good");
        if (request.greeting == "hello")
        createNotification();
    });
function createNotification(){
     var opt = {type: "basic",title: "Your Title",message: "Your  message",iconUrl: "128.png"}
     chrome.notifications.create("notificationName",opt,function(){});

//include this line if you want to clear the notification after 5 seconds
     setTimeout(function(){chrome.notifications.clear("notificationName",function(){});},10000);
}