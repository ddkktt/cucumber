Feature: Capacidad de desactivar o eliminar cuentas de usuarios

  Scenario: Un visitante rompe las reglas del coto
    Given un visitante tiene acceso al coto
    When el visitante rompe las reglas del coto
    Then su acceso es revocado y no se le permite obtener más pases

  Scenario: Un visitante es baneado por otros cotos
    Given un visitante que ha sido baneado de otros cotos
    When intenta ingresar al sistema
    Then su acceso es denegado

  Scenario: Un visitante rompe un reglamento claro
    Given un visitante que conoce el reglamento del coto
    When el visitante rompe un reglamento claro
    Then sabe lo que ha hecho incorrectamente
