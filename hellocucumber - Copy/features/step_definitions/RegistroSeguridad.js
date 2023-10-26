const { Dado, Cuando, Entonces } = require('cucumber');

let sistemaConfigurado = true;
let identificacionPresentada = true;

Dado('que Seguridad Fuerte está configurada con la información del coto', function () {
    sistemaConfigurado = true;
});

Dado('que un residente o visitante desea registrarse en Seguridad Fuerte', function () {
});

Cuando('él proporciona una identificación válida y fotográfica', function () {
    identificacionPresentada = true;
});

Cuando('no presenta ninguna identificación', function () {
    identificacionPresentada = false;
});

Entonces('su entrada o salida es registrada correctamente', function () {
    if(sistemaConfigurado && identificacionPresentada) {
        return 'Registro exitoso';
    } else {
        throw new Error('No se pudo registrar');
    }
});

Entonces('se le niega el acceso', function () {
    if(!identificacionPresentada) {
        return 'Acceso denegado';
    } else {
        throw new Error('Acceso permitido inesperadamente');
    }
});

Entonces('el sistema no funciona', function () {
    if(!sistemaConfigurado) {
        return 'Sistema fuera de servicio';
    } else {
        throw new Error('Sistema funciona inesperadamente');
    }
});

