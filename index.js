#!/usr/bin/env node

var program = require("commander");
var _ = require("underscore")

program
  .version("v1.0.0")
  .usage("[options]")
  .option("-p, --prefix <string>")
  .option("-s, --suffix <string>")
  .option("-j, --joins <string>", "set string joins each environments. defaults to \" \"", " ")
  .option("-f, --filepath <string>", "set env path. defaults to .env", ".env")
  .parse(process.argv);

var dotenv = require("dotenv").config({path: program.filepath, returns: "Object"})
var wrap_string = function(str){ return ((str)?(str):("")); };
console.log(_.map(dotenv, function(value, key) { return wrap_string(program.prefix) + key + "=" + value + wrap_string(program.suffix) }).join( program.joins ));
