
function readTextFile(file)
{
	var arr;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                var allText = rawFile.responseText;
                 arr = allText.split('*');
            }
        }
    };
    rawFile.send(null);
    return arr;
}


window.onload = function () {
	//var date = new Date(now.getFullYear(), now.getMonth(), now.getDay(), hour,min);
	//var date = new Date(2017,6,13,16,16);
	//var alarm = new tizen.AlarmAbsolute(date, tizen.alarm.PERIOD_DAY);
//////	//var alarm = new tizen.AlarmRelative(1 * tizen.alarm.PERIOD_MINUTE);
	//tizen.alarm.add(alarm, "R2AdxZDghk.practice");
	//tizen.alarm.add(alarm, 'R2AdxZDghk.practice');
	//tizen.alarm.removeAll();
	//var alarms = tizen.alarm.getAll();
	//alert(alarms.length + " alarms present in the storage.");
	
	var Filename;
	var db;
	
			db = openDatabase("MyFirstDatabase", "1.0", "첫번째 테스트 데이터베이스", "2*1024*1024");
			db.transaction(function (tx) { //SQL 을 실행하고 Control 합니다.
			tx.executeSql('CREATE TABLE worklist(subject, memo)');
			//tx.executeSql('INSERT INTO worklist(subject, memo) VALUES ("English.txt", "Langauge")');

	        
		});
		
	
		db.transaction(function(tx){
			tx.executeSql('SELECT * FROM worklist',[],function(tx,result){
				Filename= result.rows.item(0).subject;
				var arr = readTextFile(Filename);
				
				var textbox = document.querySelector('#contents');
				var max = 106;
				var rand1 = Math.floor(Math.random() * max); // 0 ~ (max - 1) 까지의 정수 값을 생성
				document.querySelector('#textbox').innerHTML = arr[rand1];
			    textbox.addEventListener("click", function(){
			    	var box = document.querySelector('#textbox');
			    	var rand2 = Math.floor(Math.random() * max); // 0 ~ (max - 1) 까지의 정수 값을 생성
			    	box.innerHTML = arr[rand2];
			    });
		});
	});

   // var arr = readTextFile(Filename);
//	var max = 106;
//	var rand1 = Math.floor(Math.random() * max); // 0 ~ (max - 1) 까지의 정수 값을 생성
    // TODO::
    // Sample code

//    var textbox = document.querySelector('#contents');
//    document.querySelector('#textbox').innerHTML = arr[rand1];
//    textbox.addEventListener("click", function(){
//    	var box = document.querySelector('#textbox');
//    	var rand2 = Math.floor(Math.random() * max); // 0 ~ (max - 1) 까지의 정수 값을 생성
//    	box.innerHTML = arr[rand2];
//    });
    
    var footer = document.querySelector('#footer');
    footer.addEventListener("click", function(){
    	//window.open('Setting.html');
    	window.location.href='Setting.html';
    });

};



