export const soloLetras = (valor: string) => {
  return /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/.test(valor);
};
