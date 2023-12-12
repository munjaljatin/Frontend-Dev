function timeConsumingByLoop() {
  console.log("Loop starts");
  for (let i = 0; i < 10000000000; i++) {}
  console.log("Loop ends");
}

function timeConsumingByRuntimeFeature() {
  console.log("Starting the timer");
  setTimeout(function execute() {
    console.log("Completed the timer");
  }, 5000);
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();

console.log("By!");
