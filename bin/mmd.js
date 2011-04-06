#!/usr/bin/env node

var sys = require("sys");
var cli = require('cli');
var path = require('path');

require.paths.unshift(path.join(__dirname, '..', 'lib'));

var mmd = require('MultiMarkdown');

var arguments = cli.args;
new MultiMarkdown(arguments).pdf();