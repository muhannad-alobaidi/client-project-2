import {smokeMachine} from './js/smoke.js'
import {submitText} from './js/supabase_db.js'

console.log(smokeMachine)
const TWO_PI = Math.PI * 2;

var canvsheight, canvswidth;

var image;

var container = document.getElementById('container');


window.onload=function(){
     
     var screenWidth = window.innerWidth
     console.log(screenWidth)

     
    TweenMax.set(container, {perspective:500});
    $("#show_img_btn").on("click", function () {

    // the input text 
    var inputText = $("#lname").val(); 
    submitText(inputText)

// remove the submit button 
      $("#show_img_btn").remove();
      
// set the fire animation
      setTimeout(() => {
        var fire = document.getElementById("fire")
        fire.classList.add("spriteBox")
      }, 500);
      
// hide the page elemnts    
      hideElements()
// remove the textarea
      setTimeout(() => {
        $("#lname").remove();
      }, 600);
      
//----------------------------------------------------------------------------smoke code>>>
      setTimeout(() => {
        
         var canvas = document.getElementById('canvs')
         var ctx = canvas.getContext('2d')
         canvas.width = 1500
         canvas.height = 3000
         
     
         var party = smokeMachine(ctx, [88 ,133,142])
     
         party.start() // start animating
     
         //party.addSmoke(500,500,10) // wow we made smoke
     
         setTimeout(function(){
     
             party.stop() // stop animating
     
             party.addSmoke(850,750,20)
             party.addSmoke(750,850,60)
             party.addSmoke(650,850,20)
             party.addSmoke(950,850,20)
             party.addSmoke(550,850,20)
     
             for(var i=0;i<10;i++){
                 party.step(10) // pretend 10 ms pass and rerender
             }
     
             setTimeout(function(){
                 party.start()
             })
     
         })
       
      }, 2000);

//----------------------------------------------------------------------------smoke code end >>>>
var wrapperOrignalHight = $('#wraper').height() - 60
function resizeWindow(){
    var openiontxtHeight = $('#openiontxt').height()
            var warperHeight = $('#wraper').height() 
            console.log(`'warperHeight' + ${warperHeight}`)
            console.log(`${openiontxtHeight}px`)
 if (( openiontxtHeight > warperHeight) && (openiontxtHeight > wrapperOrignalHight)){
    document.getElementById("wraper").style.height  = `${openiontxtHeight}px` 
 }else  if ((warperHeight > openiontxtHeight) && (openiontxtHeight < wrapperOrignalHight) ){
    document.getElementById("wraper").style.height  = `auto`
 }else  if ((warperHeight > openiontxtHeight) ){
    document.getElementById("wraper").style.height  = `${openiontxtHeight}px`
 }
}


// remove the fire sprite

    setTimeout(() => {
        //remove the fire animation element
        $("#fire").remove();
        // scroll to top 
        // document.body.scrollTop = 0
        // document.documentElement.scrollTop = 0
        scrollTop()
       
      }, 2900);
      


// add the comments and randomize them
        var commentsTxt = ' Pitäisi olla paremmassa kunnossa. Aina on kiire jonnekin. Loputon etätyö. Miten minun kuuluisi syödä? Kun ei jaksa olla täydellinen vanhempi. Ulkonäköpaineet. Pitäisi aikuistua. En jaksa olla trendikäs. Dieetit ja paastot. Oma mitättömyys maailman suurten haasteiden edessä. Maanantai stressaa. Lapsi ei vieläkään ole päässyt luistelemaan. Ikuinen paine siitä oonko tarpeeksi hyvä duunissa. Tykkääköhän deittailemani tyttö minusta? Verkkopankkitunnukset on koko ajan kateissa. Ilmastonmuutos. Se, että koko ajan pitäisi olla jossain äpissä läsnä että tietäisi mitä tapahtuu. Laihdutuskulttuuri. Ahdistaa että menestyäkseen pitäisi koko ajan tuoda itseään tykö. Lapsettomuus. Nykyinen keskustelukulttuuri varsinkin somessa. Kun ei tiedä, milloin korona loppuu. Pimeä vuodenaika AHDISTAA!! oikohan talvilomalla tehdä yhtään mitään? Kaikki voi kuitenkin muuttua koronan vuoksi. Välillä uuvuttaa iso työmäärä. Kaikenlaiset terveyshuolet. Miksi aina elämästä pitäisi osata ottaa kaikki hyöty ja ilo irti? Yksinäisyys. Kauneusihanteet. Tiukat aikataulut ja ylitäysi kalenteri. Asuntomarkkinat kuumottaa. Se, ettei ole ok olla vain ihan tavallinen. Että koti pitäisi olla siisti kun tulee vieraita. Ainainen lasten harrastuksista hakeminen. Se kun joka päivä pitää tehdä eri lounas. Pitäisi löytää oma unelma-ammatti ennen kuin täytän pyöreitä. Kaikilla kavereilla on hieno asunto, mutta itse asun vuokralla. Pitäis löytää harrastus. Pitäisi liikkua enemmän että pysyy kunnossa. MIKÄÄN määrä seuraajia somessa ei riitä. Miten ihmiset voisi nähdä minut vakuuttavampana? Aina pitäisi kehittää itseään. Aktiiviranneke näyttää, et stressitasot on korkealla. Kun pääsen kotiin niin pitäisi saada to do -listalta ruksattua vielä ainakin viisi asiaa tänään. Se kun ei pääse terapiaan. Kärsiikö perhe-elämä jos keskitynkin työhöni? Oonko mä jo liian vanha äidiksi? Tuntuu et hukkaan elämästä liian ison osan työmatkoihin. Haluanko mä välttämättä sellasta kuvastoperhettä tai perhettä lainkaan? Kaikki aika menee vaan näyttöä tuijottaessa. Vähän kaikki kotona repsottaa. Mä aina yliajattelen. HUIJARISYNDROOMA! Kaikki pienet arjen tekemättömät asiat kuten optikolla käynti. Tarttisin isomman asunnon. Median esiin nostamat menestystarinat joihin en pysty samaistumaan. Pitäis varmaan päivittää tietokone tai en tiedä miksi se on niin hidas. Joka päivä pitäis postata someen jotain. Lapset ei suostu syömään ku leipää. Hävettää välillä kun lapset ei osaa käyttäytyä ja muiden lapset tuntuu täydellisesti kasvatetuilta, mikä meillä on mennyt pieleen? En oo oikeastaan koskaan menestynyt missään. Kaikki sijoittaa omaisuuttaan mut mulla ei ole rahaa edes viikon ruokaostoksiin. En vaan koe näyttäväni hyvältä. Mitä pitäis opiskella? En koe pärjääväni töissä. Oon aina myöhässä ja sit siitä huomautellaan. Fitness-buumi. Unohdan AINA avaimet kotiin ja tuntuu lapselliselta kaivaa niitä pihakiven alta. Ainakin kaksi lasta pitäisi olla. Mulla ei oo yhtään omaa aikaa. Kotona on ihan hirveesti hoitamattomia asioita mutta kun ei vaan jaksa. CV:n päivitys. Haluaisin vaihtaa työpaikkaa. Tuntuu etten tee tarpeeksi ilmaston eteen. Tiedän että pitäisi kierrättää roskat paremmin mutta se tuntuu arjessa tosi hankalalta. Haluaisin ostaa kaiken käytettynä kirppikseltä mut en koskaan silti tee sitä. Keittiö pitäis remontoida. En uskalla hakea pankista asuntolainaa kun mitä jos en kuitenkaan saa sitä? Haluaisin elää terveellisemmin mut tykkään ihan liikaa pullasta. En osaa meikata tarpeeksi hyvin Tiedän olevani liian huono esimies En koskaan ehdi hoitaa taloyhtiön talkkarivuoroa vaikka pitäisi Miksi oon niin hajamielinen? En tiedä mitä haluisin tehdä isona ja oon 23. Välillä vaa ahdistaa olla suomalainen ku ollaan vaa jotenkin niin juntti kansa. En oo oikeestaan hyvä missään. Haluaisin olla parempi pianon soitossa, mutta en jaksa treenata. Mie en tiedä tarpeeksi tietotekniikasta. Oon aina myöhässä. Tuntuu etten tee tarpeeksi ilmaston eteen. Tiedän että pitäisi kierrättää roskat paremmin mutta se tuntuu arjessa tosi hankalalta. Haluaisin ostaa kaiken käytettynä kirppikseltä mut en koskaan silti tee sitä. Keittiö pitäis remontoida. En uskalla hakea pankista asuntolainaa kun mitä jos en kuitenkaan saa sitä? Haluaisin elää terveellisemmin mut tykkään ihan liikaa pullasta. En osaa meikata tarpeeksi hyvin Tiedän olevani liian huono esimies En koskaan ehdi hoitaa taloyhtiön talkkarivuoroa vaikka pitäisi Miksi oon niin hajamielinen? En tiedä mitä haluisin tehdä isona ja oon 23. Välillä vaa ahdistaa olla suomalainen ku ollaan vaa jotenkin niin juntti kansa. En oo oikeestaan hyvä missään. Haluaisin olla parempi pianon soitossa, mutta en jaksa treenata. Mie en tiedä tarpeeksi tietotekniikasta. Oon aina myöhässä.'
        var textarray = commentsTxt.split(".")
         shuffle(textarray)
         if (inputText[inputText.length-1] === "."){
            inputText = inputText.slice(0,-1)
         }
         var userInputToArray = inputText.split()
         textarray.unshift(userInputToArray)
         


        var randomComents = textarray.join(".")
        // console.log(randomComents)

        
// loading the kiitos elements
    setTimeout(() => {
        //  var img = document.getElementById("img1")
        //  img.style.left = 0;
        //  var imgcontainer1 = document.getElementById("imgcontainer1")
        //  imgcontainer1.style.textAlign = 'end'

        //  var img2 = document.getElementById("img2")
        //  img2.style.right = 0;
         
        //  var imgcontainer2 = document.getElementById("imgcontainer2")
        //  imgcontainer2.style.textAlign = 'start'

        //  var img = document.getElementById("img3")
        //  img.style.left = 0;
        //  var imgcontainer1 = document.getElementById("imgcontainer3")
        //  imgcontainer1.style.textAlign = 'end'



        //  document.getElementById('txt1a').innerHTML = "KATSO VIDEO"
        //  document.getElementById('txt1p').innerHTML = "Katso, kuinka Pipsa Hurmerinnan diettipaineet tuhoutuvat"
        //  document.getElementById('txt1p').style.paddingBottom = "22px"
        //  var txt1 = document.getElementById('txt1')
        //  txt1.style.left = "unset"
        //  txt1.style.height = "236px"
        //  txt1.classList.add("txt1mobile")
        //  txt1.style.right = "466px" 
        //  document.getElementById('txt3').classList.add("txt3mobile")
        //  document.getElementById('txt3').style.right = "unset"
        //  document.getElementById('txt3').style.left = "466px"
        //  document.getElementById('txt5').classList.add("txt5mobile")
        //  document.getElementById('txt5').style.left = "unset"
        //  document.getElementById('txt5').style.right = "466px"
         document.getElementById("htxt").innerHTML = "Eikö tuntunutkin hyvältä? Et ole yksin. <br>Alta voit lukea, mistä kaikesta muut ovat päästäneet irti."
         document.getElementById('openiontxt').style.width = 'inherit'
         document.getElementById('openiontxt').style.position = 'absolute'
       

         var opText= document.getElementById("openions")
         if (screenWidth <= 660) {
            opText.innerHTML = `${randomComents}`
         } else if((screenWidth <= 870) && (screenWidth > 660) ) {
            opText.innerHTML = `${randomComents} + ${randomComents}`
         }else {
            opText.innerHTML = `${randomComents} + ${randomComents} + ${randomComents}`
         }
         
         opText.style.textAlign = "justify"
        //  container.innerHTML = `<button class="btn2"><a href="./index.html"  rel="noopener noreferrer" >ALOITA ALUSTA <svg id="btn2SVG" width="10" height="11" viewBox="0 0 6 7" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
        //    <path d="M0.5 1.21077L2.92828 3.50095L0.5 5.78923L1.78485 7L5.5 3.50095L1.78485 0L0.5 1.21077Z" fill="#15256B"/>
        //    </svg></a></button>`
         $("#section2").height("110px");
         document.getElementById('section3').style.paddingTop = "100px"
         resizeWindow()
       
        }, 2900);
        setTimeout(() => {
          
            $("#canv").remove();
           

       
        }, 5000);
      
    });
    
  };


//function to hide the element on the moment of the explosion and show them again after it ends 
  function hideElements(){
    var tl1 = new TimelineMax();


    tl1.to('#htxt', .3,{
        alpha:0,
        ease:Cubic.easeInOut

    });
    

    tl1.to('#openiontxt', .3,{
        alpha:0,
        ease:Cubic.easeInOut

    });
    
   

    tl1.to('#section3', .3,{
        alpha:0,
        ease:Cubic.easeInOut

    });


    tl1.to('#section4', .3,{
        alpha:0,
        ease:Cubic.easeInOut

    });
    tl1.to('#section5', .3,{
        alpha:0,
        ease:Cubic.easeInOut

    });

    tl1.to('#footer', .3,{
        alpha:0,
        ease:Cubic.easeInOut

    });
    tl1.to('#headlinetxt', .3,{
        alpha:0,
        ease:Cubic.easeInOut

    },2.7);
    
    

    tl1.to('#htxt', .9,{
        alpha:1,
        ease:Cubic.easeInOut
    }, 3);
    tl1.to('#openiontxt', .9,{
        alpha:1,
        ease:Cubic.easeInOut
    }, 3);
    
    tl1.to('#headlinetxt', .9,{
        alpha:1,
        innerHTML: 'Kiitos.',
        ease:Cubic.easeInOut
    }, 3);
    tl1.to('#container', .9,{
        alpha:1,
        ease:Cubic.easeInOut
    }, 3);
    tl1.to('#container', 0,{
        ease:Cubic.easeInOut
    }, 3);
     
    tl1.to('#btn2', .9,{
        display: "flex",
        alpha: 1,
        ease:Cubic.easeInOut
    }, 3);

    tl1.to('#section3', .9,{
        alpha:1,
        ease:Cubic.easeInOut
    }, 3);

    tl1.to('#section4', .9,{
        alpha:1,
        ease:Cubic.easeInOut
    }), 3;
    tl1.to('#section5', .9,{
        alpha:1,
        ease:Cubic.easeInOut
    }), 3;

    tl1.to('#footer', .9,{
        alpha:1,
        ease:Cubic.easeInOut
    }, 3);





    
    
}

// scroll to top of the screen after the explosion

function scrollTop(){

    gsap.to(window, {duration: .5, 

        scrollTo:{y:"#sec1" },
        

    });

}

// shuffle the text array to make it random 
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  













