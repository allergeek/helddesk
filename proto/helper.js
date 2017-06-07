( function() {
    var wrapper = document.getElementsByClassName("overlay-wrapper")[0];
    var overlay = document.getElementsByClassName("overlay")[0];
    var inner = document.getElementsByClassName("inner")[0];
    var hlight = document.getElementsByClassName("highlight")[0];

    function toggle() {
      hlight.style.display = ((hlight.style.display!='none') ? 'none' : 'block');

      overlay.style.display = ((overlay.style.display!='none') ? 'none' : 'block');
    };

    function go() {
      console.log('abc');
      wrapper.onclick = toggle;
    }

    go();
})()
