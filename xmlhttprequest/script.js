const inputUAH = document.querySelector("#uah");
const inputUSD = document.querySelector("#usd");

inputUAH.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "./current.json");
  request.setRequestHeader("Content-type", "application/json");
  request.send();

  // "readystatechange" if request.readystate === 4
  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(
        2
      );
    } else {
      inputUSD.value = `Error ${request.status}`;
    }
  });
});
