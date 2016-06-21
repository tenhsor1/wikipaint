desc("Example!");
task("default", ["example"], function(){
  console.log("default");
});

task("example", ["dependency"], function(){
  console.log("example task");
});

task("dependency", function(){
  console.log("dependency");
});