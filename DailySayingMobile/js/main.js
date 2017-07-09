export('node_modules/parse');

window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var mainPage = document.querySelector('#main');

    mainPage.addEventListener("click", function() {
        var contentText = document.querySelector('#content-text');

        contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
    });

    var Parse = require('parse');
    Parse.initialize("a814j91hsofa83hi01");
    Parse.serverURL = 'http://dailysaying.herokuapp.com/parse';
 // Simple syntax to create a new subclass of Parse.Object.
    var GameScore = Parse.Object.extend("GameScore");

    // Create a new instance of that class.
    var gameScore = new GameScore();
};

