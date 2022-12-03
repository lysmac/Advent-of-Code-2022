fetch("http://127.0.0.1:8080/2%20Dec/data.txt")
  .then((response) => response.text())
  .then(callbackWhenPromiseResolves);

function callbackWhenPromiseResolves(contents) {
  const strategyGuide = contents.split("\n");
  let points = [];

  for (const round of strategyGuide) {
    const myMove = round.slice(-1);
    const elfMove = round.slice(0, 1);

    switch (myMove) {
      case "X": // Förlora
        switch (elfMove) {
          case "A":
            points.push(3 + 0);
            break;
          case "B":
            points.push(1 + 0);
            break;
          case "C":
            points.push(2 + 0);
            break;
        }
        break;
      case "Y": // Oavgjort
        switch (elfMove) {
          case "A":
            points.push(1 + 3);
            break;
          case "B":
            points.push(2 + 3);
            break;
          case "C":
            points.push(3 + 3);
            break;
        }
        break;
      case "Z": // Vinst
        switch (elfMove) {
          case "A":
            points.push(2 + 6);
            break;
          case "B":
            points.push(3 + 6);
            break;
          case "C":
            points.push(1 + 6);
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
