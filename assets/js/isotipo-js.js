function Mostrar () {
    document.getElementById("isotipo").style.display = "none";
  }
  function Ocultar () {
    document.getElementById("isotipo").style.opacity = "block";
  }
  function Ocultar_f ()
  {
    var isotipo = document.getElementById("isotipo");
    if (isotipo.style.display == "none"){
      Mostrar ();
    }
    else{
      Ocultar ();
    }
  }