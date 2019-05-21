const { spawn } = require('child_process');

total = 2;
if (process.argv.length <= 3) {
	total = process.argv[2];
	console.log("TOTAL: " + total);
}

for (i = 0; i < total; i++){
	const bat = spawn('ping', ['-b', '10.20.151.255']);
	
	bat.stdout.on('data', (data) => {
	  console.log("["+i+"] " + data.toString());
	});

	bat.stderr.on('data', (data) => {
	  console.log("["+i+"] " + data.toString());
	});

	bat.on('exit', (code) => {
	  console.log("["+i+"] " + `Child exited with code ${code}`);
	});
}
