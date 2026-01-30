# QA Automation Challenge

Este proyecto corresponde a un challenge técnico de automatización QA, brindado por Juan Lusardi y Sebastian Santillan, cuyo objetivo es evaluar mi capacidad para automatizar una prueba funcional de una aplicación web, utilizando alguna de las herramientas sugeridas: Playwright, Cypress, Selenium.

El challenge solicita validar distintos escenarios del formulario de registro:
- Casos exitosos
- Validaciones de datos
- Edge cases

Dado que no se provee una aplicación funcional, como tampoco es imperativo crearla, este repositorio demuestra como documenté limitaciones reales del entorno, evitando suposiciones incorrectas, es decir, inventar datos/suponer creando falsos positivos.

---

## Tecnologías Utilizadas
- Node.js
- Playwright
- JavaScript

## Requisitos Previos
Antes de ejecutar el proyecto, asegurarse de tener instalado:
- Node.js
- npm

## Instalación
```
npm install
npx playwright install
```

## Ejecución de Pruebas
Ejecutar todos los tests:
```
npx playwright test
```

Abrir el reporte HTML:
```
npx playwright show-report
```

## Estructura del Proyecto
```
qa-automation-challenge/
│
├── pages/
│   └── RegistrationPage.js
│
├── tests/
│   └── registration/
│       ├── registration.success.spec.js
│       ├── registration.validation.spec.js
│       └── registration.edge-cases.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## Objetivos

## Estrategia de Testing
Se cubren tres categorías principales:

### Casos de Éxito
- Registro exitoso con datos válidos.

### Validaciones
- Registro exitoso con datos válidos.

### Edge Cases
- Envío de formulario vacío
- Edad negativa

Cada test utiliza datos semánticos y representativos del escenario, manteniendo independencia, y sin compartir estado.

## Page Object Model (POM)
Es el archivo `RegistrationPage.js`:
- Encapsula la UI
- No contiene lógica de negocio
- Expone acciones y consultas semánticas

Ejemplo:
- fillForm() → interacción
- isErrorVisible() → consulta

Esto mantiene a los tests legibles, mantenibles y escalables en caso de ser necesario.

---

## Resultados

## Reporte de resultados
Playwright generó automáticamente un HTML Report.

### Estado actual de los tests
Todos los tests fallan por razones esperadas y documentadas:

- `page.goto('/')`
  - No existe una baseURL ni aplicación real, por ende no puede resolver la parte de código `page.goto('/')` y falla masivamente.

- Timeouts
  - No hay UI real que renderice inputs o botones. Submit nunca se ejecuta.
  - Playwright espera correctamente hasta el timeout (30 seg.), luego devuelve falla.

Esto no indica errores de diseño, sino un entorno incompleto.

## Evidencia Técnica
Capturas de pantalla de los errores fueron tomadas como evidencia técnica.

