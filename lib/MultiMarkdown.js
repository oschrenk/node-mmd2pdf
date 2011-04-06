var sys = require("sys");
var path = require('path');
var exec = require('child_process').exec;

/*
 MultiMarkdown class
*/

MultiMarkdown = function(arguments) {
    // bad style? added to global namespace?
    paths = [];
    if (arguments) {
        this.processArguments(arguments);
    }
};

MultiMarkdown.prototype.processArguments = function(arguments) {
    arguments.forEach(function(arg) {
        // feels awkaward to add files synchronously
        if (path.existsSync(arg)) {
            paths.push(path.resolve(path.normalize(arg)));
            sys.puts(arg + " added to list of files.");
        } else {
            sys.puts(arg + " doesn't exist, will be ignored.");

        }
    });
};

MultiMarkdown.prototype.process = function() {
    if (paths && paths.length > 0) {
        paths.forEach(function(p) {
			child = exec("/usr/bin/multimarkdown " + p, {env : process.env}, function (error, stdout, stderr) {
			  sys.print('stdout: ' + stdout);
			  sys.print('stderr: ' + stderr);
			  if (error !== null) {
			    console.log('exec error: ' + error);
			  }
			});

			sys.puts(p);
		});
    }
};

