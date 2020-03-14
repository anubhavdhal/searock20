const bands = [
      {
      no: "1",
      name: "Corner Cafe Chronicles"
      },
      {
      no: "2",
      name: "Five Legged Funk Machine"
      },
      {
      no: "3",
      name: "Highway 69"
      },
      {
      no: "4",
      name: "Ryan Viktor Project"
      },
      {
      no: "5",
      name: "Within Ceres"
      },
      {
      no: "6",
      name: "Zygnema"
      },
      {
      no: "7",
      name: "The Family Cheese"
      },
      {
      no: "8",
      name: "The Iyer Project"
      },
      {
      no: "9",
      name: "Knightshades"
      },
      {
      no: "10",
      name: "Inner Sanctum"
      }];


function list(band){return `
      <div><img src="./win/${band.no}.jpg"/><br>
      <h1>${band.name}</h1></div>
      `
    }
document.getElementById('history').innerHTML = `${bands.map(list).join('')}`


$(document).ready(function(){
      $('.history').slick({
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
      });
});
