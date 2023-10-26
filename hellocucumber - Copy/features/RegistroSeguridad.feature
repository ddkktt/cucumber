Funcionalidad: Registrar y Mantener un Detallado y Digitalizado Historial de Entradas y Salidas en Seguridad Fuerte

  Contexto:
    Dado que Seguridad Fuerte está configurada con la información del coto

  Escenario: Registro exitoso de un residente o visitante
    Dado que un residente o visitante desea registrarse en Seguridad Fuerte
    Cuando él proporciona una identificación válida y fotográfica
    Entonces su entrada o salida es registrada correctamente

  Escenario: Fallo al no presentar identificación
    Dado que un residente o visitante desea registrarse en Seguridad Fuerte
    Cuando no presenta ninguna identificación
    Entonces se le niega el acceso

  Escenario: Sistema no configurado correctamente
    Dado que Seguridad Fuerte no está configurada correctamente con los datos del coto
    Cuando un residente o visitante desea registrarse
    Entonces el sistema no funciona

