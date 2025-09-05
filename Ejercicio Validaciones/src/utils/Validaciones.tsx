export const soloLetras = (valor: string) => {
  return /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/.test(valor);
};

export const solopassword = (valor: string) => {
  return /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]*$/.test(valor);
};
