function validar() {
	var nombre, apellido, correo, usuario, clave, telefono, expresion;
	nombre = document.getElementById("nombre").value;
	apellido = document.getElementById("apellido").value;
	correo = document.getElementById("correo").value;
	usuario = document.getElementById("usuario").value;
	clave = document.getElementById("clave").value;
	telefono = document.getElementById("telefono").value;
}
if(nombre ==="" || apellido ==="" || correo ==="" || usuario ===""|| clave ===""|| telefono=""){
	alert("Olvido colocar Nombre")
	return false;
}
