$(document).ready(function(){
      $('.history').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1
      });
});
const bands = [
      {
      class:"timeline-inverted",
      color:"night",
      daticon:"1-3",
      title:"Quark",
      date:"1-3<sup>rd</sup> Feb",
      text:"Uniwars<br>Planetarium"
      },
      {
      class:"timeline-inverted",
      color:"sky",
      daticon:"6/7",
      title:"Eta Aquarids Shower",
      date:"6/7<sup>th</sup> March",
      text:"Better than average, 60 meteors/hr."
      }];


function list(band){
      return `
      <li class="${body.class}">
         TEXT
       </li>
      `
  
  }

document.getElementById("history").innerHTML = `
    ${bands.map(list).join('')}
`