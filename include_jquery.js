Document.createElement('script'); jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'); document.head.appendChild(jQueryScript);
// JQUERY

//MAKE BLINK WORK (since webkit doesn't RESPECT it. N.B. You'll still have to add actual <blink> tags yourself
    setInterval(function(){
      $('blink').each(function() {
        $(this).toggle();
      });
    }, 250);

// change background to panda
$("body").attr("background", "https://c402277.ssl.cf1.rackcdn.com/photos/11551/images/hero_full/Bernard_de_wetter_wwf_canon_113974.jpg")
