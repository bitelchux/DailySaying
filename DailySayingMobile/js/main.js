
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
    
    var Saying = Parse.Object.extend("Saying");
    var saying = new Saying();

    saying.set("saying", "너 자신을 알라");
    saying.set("writter", "소크라테스");

    saying.save(null, {
      success: function(saying) {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + saying.id);
      },
      error: function(saying, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
};
