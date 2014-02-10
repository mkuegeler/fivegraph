var exec = require('child_process').exec;


function start() {
	console.log('Request handler start was called');
	
//	function sleep(milliseconds) {
//		var startTime = new Date().getTime();
		
//		while(new Date().getTime() < startTime + milliseconds);
		
		
//	}
	
//	sleep(10000);

var content = "Empty";

exec("ls -lah", function(error, stdout, sterr) {
 content = stdout;
});

return content;
	
//	return 'Hello Start';
}

function upload() {
	console.log('Request handler upload was called');
	return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
