Feature: Proporcionar a los visitantes la capacidad de adquirir pases de diferentes categorías

  Scenario: Usuario selecciona un pase de 1 día y hay disponibilidad
    Given un usuario listo para seleccionar un pase
    When el usuario selecciona un pase de 1 día
    Then el sistema verifica la disponibilidad del pase
    And el sistema otorga el pase de 1 día al usuario

  Scenario: Usuario selecciona un pase de 1 mes pero no hay disponibilidad
    Given un usuario listo para seleccionar un pase
    When el usuario selecciona un pase de 1 mes
    Then el sistema verifica la disponibilidad del pase
    And el sistema informa que no hay pases de 1 mes disponibles

  Scenario: Visitante intenta entrar con un código que ha expirado
    Given un visitante con un código previamente otorgado
    When el visitante intenta entrar y el código ha expirado
    Then el sistema no permite el acceso

  Scenario: Visitante ofrece un depósito de seguridad
    Given un visitante que desea proporcionar un depósito de seguridad
    When el visitante realiza el depósito
    Then el sistema registra el depósito de seguridad
