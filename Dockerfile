FROM node:current-bullseye
RUN apt update && apt upgrade -yq
RUN apt install -yq  --no-install-recommends nano
RUN npx playwright install
RUN npx playwright install-deps 
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN rm -rf node_modules playright-report test-results
RUN yarn install
ENTRYPOINT bash -c "node autofill.ts" 
