# Front-end

## 1. React

React es ideal para el frontend de Cooler, por su capacidad para crear interfaces dinámicas y componentes reutilizables, esenciales en funcionalidades como carritos de compras y filtros. Su virtual DOM mejora el rendimiento, ofreciendo una experiencia fluida, mientras que su robusto ecosistema facilita la integración de herramientas clave como Redux, Next.js, React Query, etc. Además, su amplia comunidad garantiza soporte y escalabilidad a largo plazo.

### 1.1 Configuración del proyecto React con Vite

1.1.1 (_)Crear la rama de feature:(_)
Crea una rama de feature para esta historia de usuario:
git checkout -b feature/codigo-base-react

1.1.2 (_)Inicializar el proyecto en React usando Vite:(_)
Ejecuta el siguiente comando en la terminal para crear un proyecto de React con Vite:

npm create vite@latest cooler-store -- --template react

1.1.3 (_)Sigue las instrucciones que aparecen en la terminal y, una vez creado, navega a la carpeta del proyecto:(_)
cd ./cooler-store/

1.1.4 (_)Instalar dependencias:(_)
Instala las dependencias del proyecto:

npm install

1.1.5 (_)Configurar la estructura de carpetas:(_)
Dentro de la carpeta "src", crea una estructura para organizar los componentes:

mkdir src/components src/services src/utils

La carpeta "components" almacenará los componentes de la interfaz, "services" contendrá funciones y lógica de negocio, y "utils" se usará para funciones auxiliares o utilidades del proyecto.

1.1.6 (_)Configurar el repositorio:(_)
Haz un commit de la estructura inicial:

git add .
git commit -m "chore: Configuración inicial del proyecto React con Vite"

1.1.7 (_)Subir la rama de feature al repositorio:(_)
Sube la rama "feature/codigo-base-react" al repositorio en GitHub:

git push origin feature/codigo-base-react

1.1.8 (_)Crear un Pull Request:(_)
Ve a GitHub y abre un (_)Pull Request(_) desde "feature/codigo-base-react" hacia la rama "develop".

## 1.2 Desarrollo
