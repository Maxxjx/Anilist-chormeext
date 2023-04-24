
// function airtime () {
//   var airtime = document.getElementById("airing").value;
//   getData(airtime);

// };

// async function getData(day) {
//   const url = `https://show-air-dates.p.rapidapi.com/${day ? day:"today"}`;
//   const options = {
//     method: "GET",
//     headers: {
//       "content-type": "application/octet-stream",
//       "X-RapidAPI-Key": "cf5020d11cmsh5cb0db07a8d40b1p195f8djsnae67d243220d",
//       "X-RapidAPI-Host": "show-air-dates.p.rapidapi.com",
//     },
//   };

//   const response = await fetch(url, options);
//   const result = await response.json();
//   console.log(result);
//   return result;
// }

// async function renderData() {
//   const data = await getData();
//   const tableBody = document.querySelector("#show-table tbody");
//   tableBody.innerHTML = "";
//   data.shows.forEach((show) => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${show.name} (Season ${show.saison})</td>
//       <td>${show.episode}</td>
//     `;
//     tableBody.appendChild(row);
//   });
// }

// function refreshData() {
//   renderData();
// }

// renderData();
