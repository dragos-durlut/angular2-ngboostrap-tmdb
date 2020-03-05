FROM node:12 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install
#RUN npm install angular-common --save
#RUN npm install angular-core --save
#RUN npm install angular-forms --save
#RUN npm install --save @ng-bootstrap/ng-bootstrap
#RUN npm run build

#FROM nginx:alpine

COPY . .

EXPOSE 4200
CMD ["npm", "start"]
#COPY --from=builder /app/dist/* /usr/share/nginx/html/
