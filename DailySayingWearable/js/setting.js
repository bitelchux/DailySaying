
window.addEventListener('tizenhwkey', function(ev) {
    if (ev.keyName === 'back') {
    	
    	window.history.back();
    	//Getlanguage();
    	//window.history.back();
        /* Call window.history.back() to go to previous browser window */
        /* Call tizen.application.getCurrentApplication().exit() to exit application */
        /* Add script to add another behavior */
    	//var language = document.querySelector(selectors);
    	
    }
});


window.onload = function() {
	var footer = document.querySelector('#li-has-thumb-left');
    footer.addEventListener("click", function(){
    	//window.open('Setting.html');
    	window.location.href='index.html';
    });
    
//    var footer2 = document.querySelector('#footer2');
//    footer.addEventListener("click", function(){
//    	//window.open('Setting.html');
//    	window.location.href='index.html';
//    });
	
	var db;
//	if (!window.openDatabase) {
//		alert("이 Browser 는 Web SQL Database 를 지원하지 않습니다.");
//		return false;
//	} else {
////			var lang;
//			db = openDatabase("MyFirstDatabase", "1.0", "첫번째 테스트 데이터베이스", "2*1024*1024");
//			db.transaction(function (tx) { //SQL 을 실행하고 Control 합니다.
//				tx.executeSql('DROP TABLE worklist');
//	        });
//			
//	}
	
	

	var footer2 = document.querySelector('#footer2');
	footer2.addEventListener("click", function(){
		db = openDatabase("MyFirstDatabase", "1.0", "첫번째 테스트 데이터베이스", "2*1024*1024");
		
		
		var lang;
		db.transaction(function () { //SQL 을 실행하고 Control 합니다.
			
			var language = document.getElementsByName("language");
			for (var int = 0; int < language.length; int++) {
				if(language[int].checked  === true){
					lang =language[int].value;
				}
			}
			if(lang){
				db.transaction(function (tx) { //SQL 을 실행하고 Control 합니다.
					tx.executeSql('DROP TABLE worklist');
					tx.executeSql('CREATE TABLE worklist(subject, memo)');
					tx.executeSql('INSERT INTO worklist(subject, memo) VALUES ("'+lang+ '", "language")');
		        });
				setTimeout(function(){
					location.href='index.html';
				}, 100);
			}else{
				alert('please select language');
				location.href="#display";
			}
		});
		
	});
};
