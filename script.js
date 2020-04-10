/*<><><><><><><><><><><><><><><><><><><><><><><><><><>
Jacopo Ottoboni
otto@insiberia.net
collage di instagram ma anche di codice

mi sto avvicinando a javascript e tutto questo ambiente
in questo ultimo periodo,  questo codice non sarei capace
di scriverlo di mio pugno infatti è esso stesso un collage
di vario codice fornito dal prof e trovato on-line,
infatti ci sono cose che non mi tornanp .
se qualcuno volesse aiutarmi a capire cosa sto facendo mi
scriva alla mia mail.

questo script prende da instagram le foto sotto il tag "quarantine"
e le sovrappone casualmente con una opcaità del 50%
<><><><><><><><><><><><><><><><><><><><><><><><><><><> */
//prende le immagin dal tag assegnati
alert("This website temporarily shows the latest pictures posted on Instagram under the hashtag #quarantine \n \n for more info: otto@insiberia.it");
$.get('https://www.instagram.com/explore/tags/quarantine/?__a=1')
  .then(datarest => {
    console.log(datarest)
//direi che inserisce le immagini in una lista
    var list = datarest.graphql.hashtag.edge_hashtag_to_media.edges
// finchp ci sono dati nella lista
    list.forEach(d => {
      // scrive sul file html la visualizzazione dll'immagine
      $('body').append('<img width="100" src="' + d.node.display_url + '" />')
      // scrive la posizione random delle immagini sul foglio di stile?
      var img = document.createElement('img');
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", d.node.display_url);
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    })
// da un effetto di animazion
    gsap.from('img', { scale: 0, rotation: 180, stagger: 0.5 })
  })
// funzione che crea poszioni random
  function getRandomPosition(element) {
  	var x = document.body.offsetHeight-element.clientHeight;
  	var y = document.body.offsetWidth-element.clientWidth;
  	var randomX = Math.floor(Math.random()*x);
  	var randomY = Math.floor(Math.random()*y);
  	return [randomX,randomY];
}
