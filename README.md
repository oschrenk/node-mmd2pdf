# README #

	git clone git://github.com/fletcher/peg-multimarkdown.git
	cd peg-multimarkdown
	./update_submodules.sh
	brew install pkg-config glib gettext
	make
	make test
	make mmdtest
	make latextest
	
## API ##

	var mmd = require(./multimarkdown);
	var htmlstring = mmd.html(string); 
	var latextstring = mmm.latex(string);

## How ##

Spawn child processes

	// http://nodejs.org/api.html#_child_processes
	var sys = require('sys')
	var exec = require('child_process').exec;
	var child;

	// executes `pwd`
	child = exec("pwd", function (error, stdout, stderr) {
	  sys.print('stdout: ' + stdout);
	  sys.print('stderr: ' + stderr);
	  if (error !== null) {
	    console.log('exec error: ' + error);
	  }
	});

[Child Processes](http://nodejs.org/docs/v0.4.4/api/child_processes.html)