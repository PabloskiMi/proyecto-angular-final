

function validateform() {
    var name = document.myform.name.value;
    var apellido = document.myform.apellido.value;
    var telefono = document.myform.telefono.value;
    var correo = document.myform.correo.value;
    var comentarios = document.myform.comentarios.value;
  
    if (name == null || name == "") {
      alert("Escriba su nombre.");
      return false;
    } else if (apellido == null || apellido == "") {
      alert("Escriba su apellido.");
      return false;
    } else if (telefono<10) {
      alert("Escriba su teléfono completo.");
      return false;
    } else if (correo == null || correo == "") {
      alert("Escriba su correo completo.");
      return false;
    } else if (comentarios == null || comentarios == "") {
      alert("Escriba sus comentarios.");
      return false;
    } else{
      alert("Correo Enviado")
    }
  
  }

  






