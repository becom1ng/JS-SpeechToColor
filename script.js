const start = document.getElementById('start');
const stop = document.getElementById('stop');

const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {
	for (let i = e.resultIndex; i < e.results.length; i++) {
		const script = e.results[i][0].transcript.toLowerCase().trim();

		if (isValidColor(script)) {
			document.body.style.backgroundColor = script;
		} else {
			alert('Try again! Please say a color.');
		}
	}
};

function isValidColor(strColor) {
	var s = new Option().style;
	s.color = strColor;

	// return 'false' if color wasn't assigned
	return s.color == strColor;
}

start.addEventListener('click', () => {
	start.classList.add('large');
	stop.classList.add('small');
	rec.start();
});
stop.addEventListener('click', () => {
	start.classList.remove('large');
	stop.classList.remove('small');
	stop.classList.add('stopclick');
	setTimeout(() => {
		stop.classList.remove('stopclick');
	}, 100);
	rec.abort();
});
