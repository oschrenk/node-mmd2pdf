var util = require('util');
var path = require('path');
var fs = require('fs');
var temp = require('temp');
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
            util.puts(arg + " added to list of files.");
        } else {
            util.puts(arg + " doesn't exist, will be ignored.");
        }
    });
};

MultiMarkdown.prototype.pdf = function() {
    if (paths && paths.length > 0) {
        paths.forEach(function(p) {
			util.puts("Processing " + p);
			var outputPath = process.cwd() + "/" + path.basename(p, path.extname(p)) + ".pdf";	
			exec("multimarkdown -t latex " + p, {env : process.env}, function (error, stdout, stderr) {
				if (error) throw error;
				temp.mkdir('pdfcreator', function(err, dirPath) {
					var inputPath = path.join(dirPath, 'input.tex');
					var pdfPath = path.join(dirPath, 'input.pdf');
					fs.writeFile(inputPath, stdout, function(err) {
						if (err) throw err;
						process.chdir(dirPath);
						exec("pdflatex '" + inputPath + "'", function(err) {
							if (err) throw err;
							
							var is = fs.createReadStream(pdfPath);
							var os = fs.createWriteStream(outputPath);
							
							util.pump(is, os, function() {
							    fs.unlinkSync(inputPath);
							});
						});
					});
				});	  
			});
		});
	}
};

