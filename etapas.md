# Nomenclatura utilizada

- **RN** = Regla de Negocio
- **RF** = Requerimiento Funcional
- **CA** = Criterio de Aceptación
- **CP** = Caso de Prueba
- **DEF** = Defecto Encontrado
- **UT** = Prueba Unitaria

---

# Etapas del desarrollo para la entrega

## 1. Definición de criterios de prueba

Se establecieron las reglas de negocio y el comportamiento esperado de la aplicación antes de comenzar las actividades de calidad.

### Reglas de negocio

**RN-01:** El número de noches de hospedaje debe ser como mínimo 1.

**RN-02:** El costo total no puede ser negativo, aun aplicando cupones de descuento.

**RN-03:** Se debe sumar obligatoriamente un 5 % de imprevistos sobre el subtotal calculado.

### Requerimientos funcionales

| ID | Requerimiento |
|---|---|
| RF-01 | El usuario debe poder ingresar un destino. |
| RF-02 | El usuario debe poder ingresar el número de noches. |
| RF-03 | El sistema debe validar que exista al menos una noche. |
| RF-04 | El usuario debe poder indicar el costo por noche. |
| RF-05 | El sistema debe calcular el costo de hospedaje. |
| RF-06 | El sistema debe calcular el subtotal de los gastos. |
| RF-07 | El sistema debe calcular el 5 % de imprevistos sobre el subtotal. |
| RF-08 | El sistema debe permitir ingresar un cupón de descuento. |
| RF-09 | El sistema debe aplicar el descuento al presupuesto. |
| RF-10 | El presupuesto final nunca puede ser inferior a cero. |
| RF-11 | El sistema debe mostrar el desglose del cálculo. |
| RF-12 | El usuario debe poder limpiar el formulario. |

---

## 2. Pruebas manuales y estáticas

Se probaron las reglas de negocio y los requerimientos funcionales sobre la aplicación inicial, comparando el comportamiento esperado con el resultado obtenido.

---

## 3. Matriz de casos de prueba y requerimientos

Se diseñó una matriz para registrar los requerimientos, casos evaluados, resultados obtenidos y defectos encontrados.

[Ver matriz de casos de prueba](https://docs.google.com/spreadsheets/d/1z7C82y8j-F3hJV-BcRFn7r0_kHHGlqzUcYd3a8BCSis/edit?usp=sharing)

---

## 4. Checklist de calidad de código

Se realizó una revisión manual del código fuente teniendo en cuenta aspectos como legibilidad, validaciones, mantenibilidad, seguridad y separación de responsabilidades.

[Ver checklist de calidad de código](https://docs.google.com/spreadsheets/d/17IylKpR64NTFXYGlvIDK5wCIam3ghNgAX__c4FTUTtE/edit?usp=sharing)

---

## 5. Configuración de SonarQube

Se configuró un entorno local mediante **Docker Compose** para ejecutar SonarQube y realizar el análisis estático del código fuente.

---

## 6. Análisis con SonarQube

Se ejecutó el análisis estático y se documentaron los resultados obtenidos, incluyendo el estado del Quality Gate y los issues detectados.

[Ver reporte de SonarQube](https://docs.google.com/document/d/1hFFQpg5LhxkU3hP912KK4W25Ovjv_lN5uDkGQclm7j8/edit?usp=sharing)

---

## 7. Matriz de hallazgos de SonarQube

Los hallazgos detectados por SonarQube fueron organizados según su tipo, severidad, descripción y solución sugerida.

[Ver matriz de hallazgos de SonarQube](https://docs.google.com/spreadsheets/d/15HFPi-lVMEQQ2NNFax0p9J15oPMOSFqZiy325UITOvE/edit?usp=sharing)

---

## 8. Matriz de pruebas unitarias

Se definieron los casos de prueba unitarios enfocados en las funciones principales de cálculo y validación de la aplicación.

[Ver matriz de pruebas unitarias](https://docs.google.com/spreadsheets/d/1fMNSXBs3hYAbSBHBE4ru_AhZQC2UJxGtzMwoaocG9Zk/edit?usp=sharing)

---

## 9. Implementación de pruebas unitarias con Jest

Se configuró **Jest** para ejecutar pruebas directamente sobre la lógica JavaScript de la aplicación. Actualmente se está construyendo y ejecutando la suite de pruebas definida en la matriz.

---

## Próximos pasos

1. Completar la suite de pruebas unitarias.
2. Registrar los resultados obtenidos.
3. Corregir los defectos identificados.
4. Ejecutar nuevamente las pruebas para validar las correcciones.
5. Integrar las pruebas unitarias al entorno Docker.
6. Consolidar las evidencias y elaborar el informe final.