const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

class SistemaDeSeguridad {
  constructor() {
    this.usuarioAutenticado = false;
    this.usuarioAutorizado = false;
    this.reporteVisible = false;
    this.reporteDescargado = false;
    this.datosEncriptados = true;
  }

  autenticarUsuario(credencialesValidas) {
    this.usuarioAutenticado = credencialesValidas;
  }

  autorizarUsuario(rol) {
    this.usuarioAutorizado = (rol === 'administrador' || rol === 'representante');
  }

  visualizarReporte() {
    if (this.usuarioAutenticado && this.usuarioAutorizado) {
      this.reporteVisible = true;
    }
  }

  descargarReporte() {
    if (this.usuarioAutenticado && this.usuarioAutorizado) {
      this.reporteDescargado = true;
    }
  }

  verificarEncriptacion() {
    return this.datosEncriptados;
  }
}

const sistema = new SistemaDeSeguridad();

Given('un usuario con credenciales válidas', function () {
  sistema.autenticarUsuario(true);
});

Given('un usuario con credenciales inválidas', function () {
  sistema.autenticarUsuario(false);
});

Given('un usuario con rol de {string}', function (rol) {
  sistema.autorizarUsuario(rol);
});

When('el usuario intenta visualizar un reporte de seguridad', function () {
  sistema.visualizarReporte();
});

When('el usuario intenta descargar un reporte de seguridad', function () {
  sistema.descargarReporte();
});

Then('el usuario {string} ver el reporte', function (puede) {
  assert.strictEqual(sistema.reporteVisible, puede === 'puede');
});

Then('el usuario {string} descargar el reporte', function (puede) {
  assert.strictEqual(sistema.reporteDescargado, puede === 'puede');
});

Given('un sistema que almacena reportes de seguridad', function () {
});

Then('los reportes deben estar almacenados de forma encriptada', function () {
  assert.strictEqual(sistema.verificarEncriptacion(), true);
});
