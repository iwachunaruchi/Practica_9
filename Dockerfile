# Utiliza una imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación a /app
COPY . .

# Construye la aplicación NestJS
RUN npm run build

# Expone el puerto en el que la aplicación estará escuchando
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["npm", "run", "test:e2e"]
