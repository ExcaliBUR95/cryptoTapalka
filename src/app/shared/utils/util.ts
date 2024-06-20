export const addSpacesEveryThreeDigits = (input: number): string => {
  const digitsOnly = input.toString();
  const spacedDigits = digitsOnly.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return spacedDigits;
};
