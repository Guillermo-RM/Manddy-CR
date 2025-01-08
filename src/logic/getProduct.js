 
export const sendMessage = (product) => {
    const number = '60166940';
    const message = `Hola, me interesa personalizar el siguiente producto:  
  - Nombre: ${product.name}  
  - Precio: ₡${product.price}  
  - Descripción: ${product.description}  

  Me gustaría los siguientes detalles:  
  - Primer color:  
  - Segundo color:`

  const urlWhatsApp = `https://wa.me/506${number}?text=${encodeURIComponent(message)}`;
  window.open(urlWhatsApp, "_blank");
}
