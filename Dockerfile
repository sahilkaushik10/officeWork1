FROM node:latest

# RUN apt-get update

# RUN apt install nodejs -y

# RUN apt install npm -y

RUN apt-get update

RUN npm install -g @angular/cli

WORKDIR /My-ang-app

COPY . .

EXPOSE 4200

CMD ng serve --host 0.0.0.0 


