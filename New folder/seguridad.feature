# archivo: acceso_seguro_reportes.feature

Característica: Acceso Seguro a los Reportes de Seguridad
  Como administrador o representante de inquilinos
  Quiero acceder a los reportes de seguridad de manera segura
  Para gestionar y revisar la seguridad de la comunidad de manera efectiva

  # Regla 1: La autenticación debe ser segura y robusta
  Escenario: Autenticación exitosa con credenciales válidas
    Dado que soy un usuario con credenciales válidas
    Cuando intento iniciar sesión
    Entonces debería ser autenticado exitosamente en el sistema

  Escenario: Falla en la autenticación con credenciales inválidas
    Dado que soy un usuario con credenciales inválidas
    Cuando intento iniciar sesión
    Entonces no debería poder acceder al sistema

  # Regla 2: Los usuarios deben ser autorizados según su rol
  Escenario: Acceso permitido a un usuario con rol autorizado
    Dado que soy un usuario con rol de administrador
    Cuando solicito acceso a un reporte de seguridad
    Entonces debería tener acceso al reporte

  Escenario: Acceso denegado a un usuario sin rol autorizado
    Dado que soy un usuario sin un rol de administrador
    Cuando solicito acceso a un reporte de seguridad
    Entonces no debería tener acceso al reporte

  # Regla 3: Los usuarios deben poder ver y descargar los reportes
  Escenario: Visualización de un reporte de seguridad
    Dado que soy un usuario autorizado
    Cuando solicito ver un reporte de seguridad específico
    Entonces debería poder visualizar el reporte

  Escenario: Descarga de un reporte de seguridad
    Dado que soy un usuario autorizado
    Cuando solicito descargar un reporte de seguridad
    Entonces el reporte debería descargarse en mi dispositivo

  # Regla 4: Protección y encriptación de datos para los reportes almacenados
  Escenario: Verificación de la encriptación de los reportes almacenados
    Dado que existen reportes de seguridad almacenados
    Cuando reviso el método de almacenamiento
    Entonces cada reporte debería estar almacenado de forma encriptada
