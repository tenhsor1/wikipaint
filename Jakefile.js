"use strict";

task("default", ["lint"]);

desc("Lint everything");
task("lint", [], function(){
  var lint = require("./build/util/lint_runner.js");
  lint.validateFile("Jakefile.js", {}, {});
});