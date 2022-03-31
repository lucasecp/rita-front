FROM ECR_NODE_BASE:14 as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
ENV REACT_APP_PATIENT_API_HOST https://patient-qa.cloudsabin.com
ENV REACT_APP_USER_API_HOST https://user-qa.cloudsabin.com
ENV REACT_APP_ADMIN_API_HOST https://rita-admin-server-qa.cloudsabin.com
ENV REACT_APP_WALLET_API_URL https://rita-wallet-server-qa.cloudsabin.com/v1

ENV REACT_APP_CEP_HOST https://integrahomol.sabin.com.br/
ENV REACT_APP_CEP_ID QygsxY9kUeKOgrcNnoZqJYhxKTUaQ5OuIzE1-nMC_oQ
ENV REACT_APP_CEP_SECRET mO-LhP9TMPQ8PwH-NVn4zp-EqEmJiKpGfBshC7HTQGEY7DOz6UVNciRpExS6XFPSdVKtWeW7RhudlTbetMmTxw
ENV REACT_APP_CEP_OAUTH2_HOST https://oauthteste.sabin.com.br/

COPY . ./
RUN npm run build
FROM ECR_NGINX_BASE:latest
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]