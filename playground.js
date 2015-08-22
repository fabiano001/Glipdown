//var regex = /(([a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\%\_\`\{\|\}\~\.]+@)?)(((ftp|https?):\/\/)?[-\w]+\.([-\w]+\.)*(com|edu|biz|gov|in(?:t|fo)|mil|net|org|name|coop|aero|museum|asia|army|arpa|domains|email|host|wtf|codes|adult|actor|android|audio|beer|bio|uno|business)(:\d+)?(((\/([A-Za-z0-9-\._~:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=])*)+)\??([A-Za-z0-9-\._~:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\%])*)?)([^A-Za-z]|$)/gi; 

//var regex = new RegExp('https?:\\/\\/\\d{1,3}\\.d{1,3}\\.d{1,3}\\.d{1,3}:\\d*', "i");
var regex = new RegExp('https?:\\/\\/\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}:\\d+', "i");

function testLink(link) {
	if(!regex.test(link)) {
		console.warn("link does not match regex: " + link);
	}
	else {
		console.warn("link matches regex: " + link);
	}
}

//testLink("https://10.0.1.11:12345");
testLink("http://10.0.1.11:1");


//var validIPLinkRegEx = new RegExp('https?:\\/\\/\\d{1,3}\\.d{1,3}\\.d{1,3}\\.d{1,3}:\\d*', "i");
