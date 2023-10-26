const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

class SistemaDeCoto {
  constructor() {
    this.reglasRompidas = false;
    this.accesoRevocado = false;
    this.baneadoDeOtrosCotos = false;
    this.reglaClaraRompida = false;
  }

  romperReglas() {
    this.reglasRompidas = true;
  }

  revocarAcceso() {
    if (this.reglasRompidas || this.baneadoDeOtrosCotos) {
      this.accesoRevocado = true;
    }
  }

  romperReglaClara() {
    this.reglaClaraRompida = true;
  }
}

const sistema = new SistemaDeCoto();

Given('un visitante tiene acceso al coto', function () {
});

When('el visitante rompe las reglas del coto', function () {
  sistema.romperReglas();
});

Then('su acceso es revocado y no se le permite obtener más pases', function () {
  sistema.revocarAcceso();
  assert.strictEqual(sistema.accesoRevocado, true);
});

Given('un visitante que ha sido baneado de otros cotos', function () {
  sistema.baneadoDeOtrosCotos = true;
});

Then('su acceso es denegado', function () {
  sistema.revocarAcceso();
  assert.strictEqual(sistema.accesoRevocado, true);
});

Given('un visitante que conoce el reglamento del coto', function () {
});

When('el visitante rompe un reglamento claro', function () {
  sistema.romperReglaClara();
});

Then('sabe lo que ha hecho incorrectamente', function () {
  assert.strictEqual(sistema.reglaClaraRompida, true);
});
