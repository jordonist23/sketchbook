

$( window).on( "load", function() {
  // Handler for `load` called.

  var container = document.getElementById("container-0");
  var letter = "a"
  var num = 1;
  for (var j = 1; j < 21; j++) {
    for (var i = 0; i < 6; i++) {
      console.log(num);
      var div = document.createElement("div");
      div.className = `background-${i}`
      div.style.gridArea = `${letter}${num}`;
      container.appendChild(div);
      num+=1;
    }

  }

    
} );