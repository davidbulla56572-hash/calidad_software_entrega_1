Actúa como un Desarrollador de Software Junior.

Estoy desarrollando un proyecto académico para la asignatura
"Calidad y Pruebas de Software".

Tu tarea en esta etapa consiste ÚNICAMENTE en generar la versión inicial
de una aplicación web funcional que posteriormente será sometida a
listas de chequeo, revisión manual de código, análisis estático y
pruebas unitarias.

No debes realizar todavía esas actividades de calidad.

============================================================
1. RESTRICCIONES TÉCNICAS DE ESTA ETAPA
============================================================

Crea una aplicación web sencilla en un único archivo llamado:

index.html

El archivo debe contener:

- HTML.
- CSS básico.
- JavaScript nativo.

La aplicación debe poder ejecutarse localmente simplemente abriendo
el archivo index.html directamente en un navegador.

No debe requerir:

- servidor web;
- backend;
- base de datos;
- Node.js para ejecutar la aplicación;
- frameworks;
- librerías externas;
- instalación de dependencias.

No utilices React, Angular, Vue, Bootstrap ni frameworks similares.

Puedes utilizar localStorage únicamente si realmente resulta necesario,
pero no es obligatorio.

============================================================
2. IDEA DE NEGOCIO ASIGNADA POR EL DOCENTE
============================================================

Grupo 3.

Idea de negocio:

"Calculadora de Presupuesto para Viajes"

La aplicación debe permitir a un usuario estimar el presupuesto necesario
para realizar un viaje a partir de diferentes gastos asociados al mismo.

============================================================
3. REGLAS DE NEGOCIO ASIGNADAS POR EL DOCENTE
============================================================

Las siguientes reglas son obligatorias y constituyen los requisitos
principales del negocio:

RN-01.
El número de noches de hospedaje debe ser como mínimo 1.

RN-02.
El costo total no puede ser negativo, aun aplicando cupones de descuento.

RN-03.
Se debe sumar obligatoriamente un 5% de imprevistos sobre el subtotal
calculado.

Estas tres reglas provienen directamente de la definición del proyecto
y deben formar parte del comportamiento esperado de la aplicación.

============================================================
4. DECISIONES FUNCIONALES DEL EQUIPO
============================================================

Las siguientes características no forman parte explícitamente de las
reglas asignadas por el docente, sino que se adoptan como decisiones
funcionales del equipo para poder implementar la idea de negocio.

La aplicación tendrá un formulario que permita ingresar:

- Destino del viaje.
- Número de noches de hospedaje.
- Costo del hospedaje por noche.
- Costo de transporte.
- Costo estimado de alimentación.
- Costo de actividades.
- Otros gastos.
- Valor de un cupón de descuento.

Los campos relacionados con dinero deben permitir valores numéricos y,
cuando corresponda, valores decimales.

============================================================
5. DEFINICIÓN DEL CÁLCULO
============================================================

Para evitar ambigüedades, utiliza las siguientes reglas de cálculo como
decisión funcional del equipo.

A. Costo del hospedaje:

costoHospedaje =
    numeroNoches * costoHospedajePorNoche

B. Subtotal:

subtotal =
    costoHospedaje
    + transporte
    + alimentacion
    + actividades
    + otrosGastos

C. Imprevistos:

imprevistos = subtotal * 0.05

El 5% debe calcularse sobre el subtotal antes de aplicar el cupón de
descuento.

D. Total antes de validar el mínimo:

totalCalculado =
    subtotal
    + imprevistos
    - descuento

E. Total final:

Si totalCalculado es menor que 0:

totalFinal = 0

En cualquier otro caso:

totalFinal = totalCalculado

Por lo tanto, un cupón cuyo valor sea superior al costo del viaje nunca
debe producir un total final negativo.

============================================================
6. FUNCIONALIDADES DE LA INTERFAZ
============================================================

La aplicación debe permitir como mínimo:

1. Ingresar los datos necesarios para calcular el viaje.

2. Presionar un botón llamado:

   "Calcular presupuesto"

3. Mostrar al usuario:

   - costo total del hospedaje;
   - subtotal;
   - valor del 5% de imprevistos;
   - descuento aplicado;
   - presupuesto total final.

4. Permitir limpiar o reiniciar el formulario para realizar un nuevo
   cálculo.

5. Mostrar mensajes al usuario cuando una operación no pueda realizarse
   correctamente.

La interfaz debe ser sencilla, clara y suficientemente usable para
recorrer el flujo principal de la aplicación.

No es necesario crear una interfaz visual compleja.

============================================================
7. ORGANIZACIÓN DEL JAVASCRIPT
============================================================

Aunque todo el proyecto debe permanecer dentro del mismo archivo
index.html, organiza la lógica JavaScript mediante funciones.

Evita colocar todo el comportamiento en un único evento o función.

La lógica debería estar conceptualmente dividida en operaciones como:

- obtener los datos del formulario;
- validar datos;
- calcular hospedaje;
- calcular subtotal;
- calcular imprevistos;
- aplicar descuento;
- calcular total final;
- mostrar resultados;
- limpiar formulario.

Utiliza nombres de funciones y variables comprensibles.

Las funciones que realicen cálculos deben estar suficientemente
separadas para que posteriormente puedan ser estudiadas mediante
pruebas unitarias.

No generes todavía las pruebas.

============================================================
8. INSTRUCCIÓN CLAVE PARA LA ACTIVIDAD DE CALIDAD
============================================================

Esta aplicación será utilizada posteriormente para una actividad
académica de Calidad y Pruebas de Software.

Introduce deliberadamente entre 5 y 10 problemas de calidad de software
dentro de la implementación.

Los defectos deben ser realistas y deben poder ser descubiertos
posteriormente mediante técnicas como:

- listas de chequeo de requerimientos;
- pruebas de escritorio;
- revisión manual de código;
- pruebas con valores límite;
- análisis estático con SonarQube;
- pruebas unitarias.

Los problemas pueden involucrar diferentes aspectos de calidad, como por
ejemplo:

- validaciones;
- valores límite;
- lógica;
- operaciones matemáticas;
- tratamiento de entradas;
- tipos de datos;
- manejo de errores;
- calidad o mantenibilidad del código;
- seguridad básica;
- caracteres especiales;
- comportamiento del DOM;
- persistencia, solamente si decides utilizarla.

IMPORTANTE:

NO indiques qué defectos introdujiste.

NO indiques cuántos defectos exactos introdujiste.

NO indiques en qué líneas están.

NO expliques cómo encontrarlos.

NO agregues comentarios como:

- BUG
- ERROR
- DEFECTO
- ERROR INTENCIONAL
- BUG INTENCIONAL
- TODO
- FIX ME

ni ninguna otra pista que permita encontrarlos fácilmente.

NO agregues una sección explicando los problemas existentes.

NO generes una versión corregida.

NO corrijas automáticamente los defectos antes de entregar el código.

Los defectos deben estar integrados naturalmente dentro de la
implementación.

============================================================
9. CONDICIÓN IMPORTANTE SOBRE LOS DEFECTOS
============================================================

La aplicación debe continuar siendo funcional a nivel general.

No introduzcas errores de sintaxis que impidan abrir el archivo.

No provoques que toda la aplicación deje de funcionar.

El usuario debe poder recorrer el flujo principal, ingresar información,
presionar el botón de cálculo y obtener resultados.

Los problemas deben manifestarse solamente cuando se analice o pruebe
adecuadamente el software.

El objetivo es que posteriormente los estudiantes puedan descubrir los
problemas mediante actividades de calidad de software.

============================================================
10. NO DESARROLLAR TODAVÍA
============================================================

En esta etapa NO debes crear:

- pruebas unitarias;
- archivos de pruebas;
- Jest;
- configuración de SonarQube;
- sonar-project.properties;
- Dockerfile;
- docker-compose.yml;
- documentación de defectos;
- soluciones a los defectos;
- análisis de calidad;
- checklists.

Todo eso será realizado posteriormente por los estudiantes.

============================================================
11. FORMATO DE ENTREGA
============================================================

Entrega únicamente el código completo correspondiente a:

index.html

Debe estar listo para copiarse y guardarse directamente como
index.html.

No agregues explicaciones después del código.

No agregues una lista de errores.

No agregues recomendaciones para corregir el código.

No reveles ninguna información acerca de los defectos deliberadamente
introducidos.