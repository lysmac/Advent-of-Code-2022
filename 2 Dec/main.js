fetch("http://127.0.0.1:8080/2%20Dec/data.txt")
  .then((response) => response.text())
  .then(callbackWhenPromiseResolves);

function callbackWhenPromiseResolves(contents) {
  const strategyGuide = contents.split("\n");
  let points = [];

  for (const round of strategyGuide) {
    const myMove = round.slice(-1);
    const elfMove = round.slice(0, 1);

    switch (elfMove) {
      case "A":
        switch (myMove) {
          case "X":
            points.push(1 + 3);
            break;
          case "Y":
            points.push(2 + 6);
            break;
          case "Z":
            points.push(3 + 0);
            break;
        }
        break;
      case "B":
        switch (myMove) {
          case "X":
            points.push(1 + 0);
            break;
          case "Y":
            points.push(2 + 3);
            break;
          case "Z":
            points.push(3 + 6);
            break;
        }
        break;
      case "C":
        switch (myMove) {
          case "X":
            points.push(1 + 6);
            break;
          case "Y":
            points.push(2 + 0);
            break;
          case "Z":
            points.push(3 + 3);
            break;
        }
        break;
      default:
    }
  }
  let totalPoints = points.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });

  console.log(totalPoints);
}
