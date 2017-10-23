var data = new Date();
var godzina = data.getHours();
var minuta = data.getMinutes();
var sekunda = data.getSeconds();



var looperHour;
var degreesHour = (godzina + (minuta / 60)) / 12 * 360;
function rotateAnimationHour(hour,speedHour){
	var elemHour = document.getElementById('hour');
	elemHour.style.transform = "rotate("+degreesHour+"deg)";
	looperHour = setTimeout('rotateAnimationHour(\''+hour+'\','+speedHour+')',speedHour);
	degreesHour++;
	if(degrees > 359){
		degrees = 1;
	}
	document.getElementById("tarcza").innerHTML = "rotate("+degreesHour+"deg)";
}

var looperMinute;
var degreesMinute = minuta / 60 * 360;
function rotateAnimationMinute(minute,speedMinute){
	var elemMinute = document.getElementById('minute');
	elemMinute.style.transform = "rotate("+degreesMinute+"deg)";
	looperMinute = setTimeout('rotateAnimationMinute(\''+minute+'\','+speedMinute+')',speedMinute);
	degreesMinute++;
	if(degrees > 359){
		degrees = 1;
	}
	document.getElementById("tarcza").innerHTML = "rotate("+degreesMinute+"deg)";
}


var looperSecond;
var degreesSecond = sekunda / 60 * 360;
function rotateAnimationSecond(second,speedSecond){
	var elemSecond = document.getElementById('second');
	elemSecond.style.transform = "rotate("+degreesSecond+"deg)";
	looperSecond = setTimeout('rotateAnimationSecond(\''+second+'\','+speedSecond+')',speedSecond);
	degreesSecond++;
	if(degrees > 359){
		degrees = 1;
	}
	document.getElementById("tarcza").innerHTML = "rotate("+degreesSecond+"deg)";
}
