// regex para validar imagem em base64

export function isBase64Image(base64String: string): boolean {
    if (!base64String || base64String.length % 4 !== 0) {
      return false;
    }
    const base64Pattern = /^data:image\/(png|jpeg|jpg|gif);base64,[A-Za-z0-9+/]+={0,2}$/;
    return base64Pattern.test(base64String);
  }

  // Valida se o codigo do consumudor é valido

  export function isValidCustomerCode(customerCode: string): boolean {
    const customerCodeRegex = /^[A-Z0-9]{6,10}$/;
    return customerCodeRegex.test(customerCode);
  }
  
  // Valida de o tipo da medida é gás ou água
  export function isValidMeasureType(measureType: string): boolean {
    const validTypes = ['WATER', 'GAS'];
    return validTypes.includes(measureType.toUpperCase());
  }
  
  // Valida a data
  export function isValidDate(dateString: string): boolean {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }