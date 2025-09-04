window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const player = GetPlayer();
var text = player.GetVar("TextEntry");


var statement = {
    actor: {
        mbox: "mailto:student@example.com", // Replace with learner’s identifier
        name: "John Doe"
    },
    verb: {
        id: "http://adlnet.gov/expapi/verbs/completed",
        display: {"en-US": "completed"}
    },
    object: {
        id: "https://aagam995.github.io/gitXAPI/",
        objectType: "Activity",
        objectName: "Quiz 1"
    },
    result: {
        "success": true,
        "response": text
    }
};

ADL.XAPIWrapper.sendStatement(statement, function(response) {
    console.log("xAPI Statement Sent: ", response);
});

}

window.Script2 = function()
{
  const player = GetPlayer();
var text = player.GetVar("TextEntry");


var statement = {
    actor: {
        mbox: "mailto:student@example.com", // Replace with learner’s identifier
        name: "John Doe"
    },
    verb: {
        id: "http://adlnet.gov/expapi/verbs/completed",
        display: {"en-US": "completed"}
    },
    object: {
        id: "https://aagam995.github.io/gitXAPI/",
        objectType: "Activity",
        objectName: "Quiz 1"
    },
    result: {
        "success": true,
        "response": "text"
    }
};

ADL.XAPIWrapper.sendStatement(statement, function(response) {
    console.log("xAPI Statement Sent: ", response);
});

}

};
