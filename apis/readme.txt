EJERCICIO DE AUTOMATIZACIÓN DE APIS - DEMOBLAZE

1. Requisitos previos:
   - Tener instalado Java 23 o superior.
   - Tener Maven 3.9 o superior.
   - IDE recomendado: IntelliJ IDEA o VS Code.
   - Conexión a internet para ejecutar llamadas a la API.

2. Estructura del proyecto:
   - src/test/java/tests/RunAllTests.java     --> Runner de los tests.
   - src/test/resources/features/            --> Carpeta con los feature files (.feature)
       - login.feature
       - signup.feature
   - karate-config.js                         --> Configuración global (URL base y credenciales)
   - target/karate-reports/                  --> Carpeta donde se generan los reportes.

3. Cómo ejecutar los tests:
   1. Abrir la terminal en la raíz del proyecto.
   2. Ejecutar el comando:
      mvn clean test
   3. Maven descargará dependencias, compilará los tests y ejecutará los features de Karate.
   4. Una vez finalizada la ejecución, los reportes se generarán en:
      target/karate-reports/karate-summary.html

4. Abrir el reporte en navegador:
   - Manual: Abrir con cualquier navegador el archivo:
       target/karate-reports/karate-summary.html
   - Automático: Si tu sistema lo permite, el Runner tiene la función `@AfterAll` en RunAllTests.java para abrir automáticamente el reporte al finalizar los tests.

5. Features cubiertas:
   - Signup:
     * Crear un nuevo usuario.
     * Intentar crear un usuario ya existente.
   - Login:
     * Usuario y contraseña correctos.
     * Usuario y contraseña incorrectos.

6. Observaciones:
   - Las credenciales se parametrizan desde karate-config.js.
   - El reporte muestra el detalle de cada escenario, los tiempos de ejecución y los resultados esperados frente a los obtenidos.
   - Se recomienda revisar los mensajes de error de la API ya que pueden variar según la implementación del backend.

7. Uso del repositorio:
   - Este proyecto está listo para ser subido a un repositorio público en GitHub.
   - Incluye todo lo necesario: features, configuración, runner, reportes y documentación.
