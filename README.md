# Cooler: tienda de zapatos virtual

## Resumen

Se busca desarrollar Cooler, una plataforma para la comercialización de tenis, donde se podrá ver el catálogo disponible, según el filtro aplicado. Los usuarios podrán registrarse, buscando mantener su historial de compra relacionado con el inicio de sesión, así como el seguimiento de pedidos. Adicionalmente, se podrán realizar las compras por este medio, contando con aliados a nivel local y nacional. Así mismo, se contará con la posibilidad de entablar contacto a través de un chat virtual, por medio de un chatbot automatizado.

Este proyecto está estructurado y desarrollado utilizando el modelo de ramas de Gitflow, lo que facilita la colaboración y el manejo de diferentes etapas de desarrollo, asegurando que el código en producción sea estable y seguro.

## Objetivo general

• Desarrollar una plataforma que permita la visualización y comercialización de calzado original.

## Objetivos específicos

• Automatizar por medio de un chatbot, respuestas a consultas frecuentes.
• Potenciar y formalizar las ventas del emprendimiento, por medio del comercio electrónico para generar flujo de caja y rotación de inventario.
• Recopilar y analizar información en torno al comportamiento de consumo, por medio de la persistencia de información en pedidos y la interacción con la plataforma. Con el fin de estructurar la oferta de valor, en torno a las tendencias y productos más apetecidos. Encontrando así, la escalabilidad del negocio después de los primeros 6 meses.

## Módulos a desarrollar

1. Inicio
   o Pantalla de inicio de la página, la cual tendrá contenido sugestivo, relacionado a la oferta de tenis y que buscará motivar el impulso de compra. Tendrá la barra de navegación fija en el flujo de la ventana, con la caja de búsqueda, inicio de sesión, carrito de compras, productos favoritos y las categorías sugeridas. Así mismo, un pie de página que resaltará por medio de datos, el uso de los productos vendidos. Junto a los botones de redes sociales y la información de la empresa.

2. Barra de navegación
   o La barra de búsqueda dará lugar al contenido que coincida con el criterio ingresado, teniendo la opción de filtrar y ordenar, según tallas, género, color, talla y precio. Los productos encontrados tendrán su respectiva imagen, precio y nombre.

3. Inicio de sesión y registro
   o Formulario que permitirá el ingreso y/o registro, por medio de correo electrónico, Google, Apple y Facebook. Si el usuario está previamente registrado, deberá ingresar la contraseña. En caso de no estarlo y haberse identificado por medio del correo electrónico, deberá crear una contraseña y aceptar los términos y condiciones de uso de datos.

4. Historial de compras
   o Para el usuario que se haya identificado por medio del inicio de sesión, tendrá desplegadas las compras recientes, las cuales tendrán fecha de compra, precio, número de orden e imágenes alusivas al pedido.
   o Para el usuario que no se haya identificado, deberá ingresar el número de orden y el correo electrónico, para que despliegue la información.

5. Información de pedido
   o El pedido seleccionado, tendrá el estado del pedido, la fecha de realización, el número de rastreo, la descripción del producto con talla, precio e imagen. Así mismo, los datos de entrega, pago y el total de la orden.
6. Producto
   o Al seleccionar un producto mediante el motor de búsqueda, se mostrarán imágenes alusivas al producto desde diferentes ángulos, su nombre, precio, tallas disponibles, descripción, opción para agregarse a la lista de favoritos, botón para añadir al carrito de compras, opiniones del producto, descripción del artículo y productos similares o recientemente vistos, al final de la página.

7. Lista de favoritos
   o Una lista organizada de manera visual por orden de agregado, donde se mostrarán al principio, las opciones más antiguas y se presentará el producto con imagen, precio y nombre.

8. Carrito de compras
   o Despliega la lista de artículos agregados al carrito de compras, presentándolos con su imagen, nombre, precio, talla y cantidad. Se muestra el total de la compra, teniendo en cuenta envío e impuestos (de llegar a haberlos). Adicional, el formulario de dirección de envío y contacto, junto a los botones de pago por medio de PSE y/o tarjeta de débito, crédito. Al completarse los pagos, se activa el botón de envío de orden.
9. Chat
   o Por medio de un botón fijo en el flujo de la página, se abrirá la opción de chat. El cliente podrá interactuar con un menú de opciones que buscarán satisfacer su petición. En caso de que no se logre resolver, tendrá el link directo para el chat de whatsapp.

10. Envíos y rastreo
    o Al momento de entrar la orden, se cargará en la lista de pedidos y despachará en orden de llegada, según las horas de operación. Si es en Bogotá, se utilizará al aliado en trasporte de mercancía Andrés Rodríguez para envío contra entrega y al ser fuera de Bogotá, se utilizará la transportadora que mejor convenga para el destino de la mercancía, según el semáforo de ciudades para remesas. En el primer caso, el rastreo será en tiempo real con el domiciliario y para el segundo, será la página del aliado escogido para el servicio. Esta característica estará presente en el historial de compras de las cuentas registradas.
