const request = new XMLHttpRequest();
request.open("GET", "/api", true);

request.onload = () => {
	if (request.status >= 200 && request.status < 400) {

		document.getElementById("hostURL").innerText = request.responseText;

	} else {
		console.log("Server returned error!");
	}
};

request.onerror = () => {
	console.log("Request error!");
};

request.send();
