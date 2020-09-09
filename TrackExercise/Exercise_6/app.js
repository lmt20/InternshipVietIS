const http = require('http');
var os = require('os');
const hostname = '127.0.0.1';
const port = 3030;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {

    setInterval(function () {
        const { spawn } = require('child_process');
        const ls = spawn('free');

        ls.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);

        });

        ls.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });


        var os = require("os");
        //Create function to get CPU information
        function cpuAverage() {

            //Initialise sum of idle and time of cores and fetch CPU info
            var totalIdle = 0, totalTick = 0;
            var cpus = os.cpus();

            //Loop through CPU cores
            for (var i = 0, len = cpus.length; i < len; i++) {

                //Select CPU core
                var cpu = cpus[i];

                //Total up the time in the cores tick
                for (type in cpu.times) {
                    totalTick += cpu.times[type];
                }

                //Total up the idle time of the core
                totalIdle += cpu.times.idle;
            }

            //Return the average Idle and Tick times
            return { idle: totalIdle / cpus.length, total: totalTick / cpus.length };
        }

        //Grab first CPU Measure
        var startMeasure = cpuAverage();

        //Set delay for second Measure
        setTimeout(function () {

            //Grab second Measure
            var endMeasure = cpuAverage();

            //Calculate the difference in idle and total time between the measures
            var idleDifference = endMeasure.idle - startMeasure.idle;
            var totalDifference = endMeasure.total - startMeasure.total;

            //Calculate the average percentage CPU usage
            var percentageCPU =  Math.floor((100 -(100 * idleDifference / totalDifference))*100)/100 || 0;

            //Output result to console
            console.log(Math.floor((os.freemem()/os.totalmem()*10000))/100 + "% Memory Usage.");

            console.log(percentageCPU + "% CPU Usage.");

        }, 100);
    }, 1000);

    console.log(`Server running at http://${hostname}:${port}/`);
});