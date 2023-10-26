const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

class SistemaDePases {
  constructor() {
    this.pasesDisponibles = {
      '1 día': true,
      '1 mes': false
    };
    this.codigoExpirado = true;
    this.depositoRealizado = false;
  }

  seleccionaPase(tipoDePase) {
    if (this.pasesDisponibles[tipoDePase]) {
      return 'otorgado';
    } else {
      return 'no disponible';
    }
  }

  intentaEntrarConCodigo() {
    return this.codigoExpirado ? 'denegado' : 'permitido';
  }

  realizaDeposito() {
    this.depositoRealizado = true;
    return 'registrado';
  }
}

const sistema = new SistemaDePases();

Given('un usuario listo para seleccionar un pase', function () {
});

When('el usuario selecciona un pase de {string}', function (tipoDePase) {
  this.resultado = sistema.seleccionaPase(tipoDePase);
});

Then('el sistema otorga el pase de {string}', function (tipoDePase) {
  assert.strictEqual(this.resultado, 'otorgado');
});

Then('el sistema informa que no hay pases de {string} disponibles', function (tipoDePase) {
  assert.strictEqual(this.resultado, 'no disponible');
});

Given('un visitante con un código previamente otorgado', function () {
});

When('el visitante intenta entrar y el código ha expirado', function () {
  this.acceso = sistema.intentaEntrarConCodigo();
});

Then('el sistema no permite el acceso', function () {
  assert.strictEqual(this.acceso, 'denegado');
});

Given('un visitante que desea proporcionar un depósito de seguridad', function () {
});

When('el visitante realiza el depósito', function () {
  this.deposito = sistema.realizaDeposito();
});

Then('el sistema registra el depósito de seguridad', function () {
  assert.strictEqual(this.deposito, 'registrado');
});
