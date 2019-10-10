$(btn1).click(function() { 
    doSomething();
});

$(btn2).bind("click", function() {
    doSomethingElse();
});

$(document).ajaxStart(function() {
    $(log).text("Triggered ajaxStart handler.");
});