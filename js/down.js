//assign global variables
var currentMode = 0;
var currentWord;

$(document).ready(function() {
    $('.collapse').click(function() {
        //Check if the text contains (-) or (+), to assign true or false
        //Line 11 - get the last string of the split
        if ($(this).text().split(" ")[$(this).text().split(" ").length - 1] === "(-)") {
            currentMode = 0;
        } else if ($(this).text().split(" ")[$(this).text().split(" ").length - 1] === "(+)") {
            currentMode = 1;
        } else {
            //any variable that is not 0 or 1
            currentMode = 3;
        }
        //Use this to split the string, then to insert the first word
        currentWord = $(this).text().split(" ")[0];
        //if true, slideup, if not collapse
        switch (currentMode) {
            case (0):
                $(this).text(currentWord + " (+)");
                $(this).siblings().slideUp('fast');
                break;
            case (1):
                $(this).text(currentWord + " (-)");
                $(this).siblings().slideDown();
                break;
            default:
            break;
        }
    });
});