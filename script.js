const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = false;

rec.onresult = function (e) {
	console.log(e.results);
};

rec.start();
