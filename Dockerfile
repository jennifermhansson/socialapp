# Docker Image är som en CD-skiva för en applikation.
# Det är möjligt att ta en befintlig image, modifiera den och distribuera den som en ny image.

# Person A skapar en image som innehåller Ubuntu installerad, och kallar den för ubuntu-image.
# Person B tar ubuntu-image och lägger till bun och kallar den sedan för bun-image.
# Person C tar bun-image, lägger till sin egna fastify-projekt och kallar den för my-backend-image.

# ahmadardal/socialapp

# Vi använder oven/bun:1.3-alpine som basavbild
FROM oven/bun:latest

# Vi sätter arbetskatalogen till /app
WORKDIR /app

# Vi kopierar package.json och bun.lock till container:n
COPY package.json bun.lock ./

# Vi installerar beroenden
RUN bun install --frozen-lockfile

# Vi kopierar källkoden och TypeScript-konfigurationen till container:n
COPY src/ ./src/
COPY tsconfig.json ./

# Vi exponerar port 3000
EXPOSE 3000

# Vi startar applikationen
CMD ["bun", "start"]