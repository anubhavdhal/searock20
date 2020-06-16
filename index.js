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
      } ];


function list ( band ) {
      return `
      <div><img src="./win/${band.no }.jpg"/><br>
      <h1>${band.name }</h1></div>
      `
}
document.getElementById( 'history' ).innerHTML = `${ bands.map( list ).join( '' ) }`


$( document ).ready( function () {
      $( '.history' ).slick( {
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
      } );
} );


ScrollReveal().reveal( '.headline' );

var a = 0;
$( window ).scroll( function () {

      var oTop = $( '#counter' ).offset().top - window.innerHeight;
      if ( a == 0 && $( window ).scrollTop() > oTop ) {
            $( '.counter-value' ).each( function () {
                  var $this = $( this ),
                        countTo = $this.attr( 'data-count' );
                  $( {
                        countNum: $this.text()
                  } ).animate( {
                        countNum: countTo
                  },

                        {

                              duration: 2000,
                              easing: 'swing',
                              step: function () {
                                    $this.text( Math.floor( this.countNum ) );
                              },
                              complete: function () {
                                    $this.text( this.countNum );
                                    //alert('finished');
                              }

                        } );
            } );
            a = 1;
      }

} );