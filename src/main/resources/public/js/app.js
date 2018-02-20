var messages = [];
messageIndex = 0;

$(document).ready(function () {
    init();
});

function init() {
    $.ajax({
        type: "GET",
        url: "/popcorn",
        success: function (data) {
            messages = data.message;
            // console.log(data);
            appendmessages();
        }

    });
enable();
}

function enable() {
    $("#prevBtn").on("click", function(){
        // console.log("Prev");
        --messageIndex < 0 && (messageIndex = messages.length -1);
        appendmessages();
        });
    $("#nextBtn").on("click", function() {
        // console.log("Next");
        ++messageIndex >= messages.length && (messageIndex = 0);
        appendmessages();
    });
}

function appendmessages() {
    for ( var i=1; i<11; i++)
    $("#"+i).removeClass("highlight");
    $("#"+(messageIndex +1)).addClass("highlight");
    $("#textName").text(messages[messageIndex].name);
    $("#textFeedback").text(messages[messageIndex].city);

}