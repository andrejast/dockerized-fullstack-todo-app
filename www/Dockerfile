# Create this file as Dockerfile in the /home/andreja/Test/tailwindTodo/www directory
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]