# README #

You need a working copy of peq-multimarkdown in your `PATH`

	git clone git://github.com/fletcher/peg-multimarkdown.git
	cd peg-multimarkdown
	./update_submodules.sh
	brew install pkg-config glib gettext
	make
	make test
	make mmdtest
	make latextest
	cp multimarkdown /usr/bin

You also need a working Tex distribution. On my local machine I use the [MacTex](http://www.tug.org/mactex/) disribution. Please check the appropiate installation manuals.

You also need the `peg-multimarkdown-latex-support` support files

	git clone git://github.com/fletcher/peg-multimarkdown-latex-support.git

You have to check where to put the local `texmf` files. For my local installation I had to crate a directory

	mkdir -p ~/Library/texmf/tex/latex/mmd/
	cp peg-multimarkdown-latex-support/* ~/Library/texmf/tex/latex/mmd/

Finally you need a working installation of [node.js](http://nodejs.org/) and [npm](http://npmjs.org/) and the following modules:

	npm install temp