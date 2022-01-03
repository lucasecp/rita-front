FROM ECR_NODE_BASE:14 as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
ENV REACT_APP_PATIENT_API_HOST https://patient-qa.cloudsabin.com
ENV REACT_APP_USER_API_HOST https://user-qa.cloudsabin.com
COPY . ./
RUN npm run build
FROM ECR_NGINX_BASE:latest
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]