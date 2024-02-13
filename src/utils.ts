export function formatNumberWithCommas(number: number | string): string {
  try {
    const numericValue = typeof number === "string" ? parseFloat(number) : number;
    
    if (isNaN(numericValue)) {
      throw new Error("Input is not a valid number");
    }

    return new Intl.NumberFormat(undefined, {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericValue);
  } catch (error) {
    console.error(error);
    return number.toString();
  }
}

export function formatDateWithoutYear(dateString: string): string {
  const date = new Date(dateString);

  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${month}/${day}`;
}