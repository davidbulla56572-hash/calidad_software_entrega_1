const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

let window;

beforeAll(() => {
  const rutaHtml = path.resolve(__dirname, "../app/index.html");
  const html = fs.readFileSync(rutaHtml, "utf8");

  const dom = new JSDOM(html, {
    runScripts: "dangerously",
  });

  window = dom.window;
});

describe("Calculadora de Presupuesto para Viajes", () => {
  // ============================================================
  // CÁLCULO DE HOSPEDAJE
  // ============================================================

  test("UT-01 - calcularHospedaje calcula correctamente 3 noches a $100000", () => {
    const resultado = window.calcularHospedaje(3, 100000);

    expect(resultado).toBe(300000);
  });

  test("UT-02 - calcularHospedaje acepta 1 noche como valor mínimo válido", () => {
    const resultado = window.calcularHospedaje(1, 80000);

    expect(resultado).toBe(80000);
  });

  // ============================================================
  // CÁLCULO DEL SUBTOTAL
  // ============================================================

  test("UT-03 - calcularSubtotal suma correctamente todos los gastos", () => {
    const resultado = window.calcularSubtotal(
      100000, // Hospedaje
      50000,  // Transporte
      30000,  // Alimentación
      20000,  // Actividades
      10000   // Otros gastos
    );

    expect(resultado).toBe(210000);
  });

  // ============================================================
  // IMPREVISTOS
  // ============================================================

  test("UT-04 - calcularImprevistos calcula el 5% de $100000", () => {
    const resultado = window.calcularImprevistos(100000);

    expect(resultado).toBe(5000);
  });

  test("UT-05 - calcularImprevistos calcula el 5% de $200000", () => {
    const resultado = window.calcularImprevistos(200000);

    expect(resultado).toBe(10000);
  });

  // ============================================================
  // DESCUENTOS
  // ============================================================

  test("UT-06 - aplicarDescuento resta correctamente el cupón después de los imprevistos", () => {
    const resultado = window.aplicarDescuento(
      100000, // Subtotal
      5000,   // Imprevistos
      20000   // Descuento
    );

    expect(resultado).toBe(85000);
  });

  // ============================================================
  // TOTAL FINAL
  // ============================================================

  test("UT-07 - calcularTotalFinal conserva un total positivo", () => {
    const resultado = window.calcularTotalFinal(85000);

    expect(resultado).toBe(85000);
  });

  test("UT-08 - calcularTotalFinal devuelve 0 cuando el total es negativo", () => {
    const resultado = window.calcularTotalFinal(-50000);

    expect(resultado).toBe(0);
  });

  // ============================================================
  // VALIDACIONES
  // ============================================================

  test("UT-09 - validarDatos acepta 1 noche con datos válidos", () => {
    const datos = crearDatosValidos({
      numeroNoches: 1,
    });

    const resultado = window.validarDatos(datos);

    expect(resultado.esValido).toBe(true);
  });

  test("UT-10 - validarDatos rechaza 0 noches", () => {
    const datos = crearDatosValidos({
      numeroNoches: 0,
    });

    const resultado = window.validarDatos(datos);

    expect(resultado.esValido).toBe(false);
  });

  test("UT-11 - validarDatos rechaza un número negativo de noches", () => {
    const datos = crearDatosValidos({
      numeroNoches: -1,
    });

    const resultado = window.validarDatos(datos);

    expect(resultado.esValido).toBe(false);
  });

  test("UT-12 - validarDatos rechaza un costo de transporte negativo", () => {
    const datos = crearDatosValidos({
      transporte: -10000,
    });

    const resultado = window.validarDatos(datos);

    expect(resultado.esValido).toBe(false);
  });

  test("UT-13 - validarDatos rechaza un costo de actividades negativo", () => {
    const datos = crearDatosValidos({
      actividades: -20000,
    });

    const resultado = window.validarDatos(datos);

    expect(resultado.esValido).toBe(false);
  });

  // ============================================================
  // FORMATEO DE DINERO
  // ============================================================

  test("UT-14 - formatearDinero conserva los valores decimales", () => {
    const resultado = window.formatearDinero(1234.56);

    expect(resultado).toBe("$1234.56");
  });
});

/**
 * Genera un conjunto de datos válidos para reutilizar
 * en los casos de prueba de validación.
 */
function crearDatosValidos(cambios = {}) {
  return {
    destino: "Cartagena",
    numeroNoches: 3,
    costoNoche: 100000,
    transporte: 50000,
    alimentacion: 80000,
    actividades: 30000,
    otrosGastos: 20000,
    descuento: 10000,
    ...cambios,
  };
}