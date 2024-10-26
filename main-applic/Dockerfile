# ------------------------ ------------------------Stage 1: Update ------------------------ ------------------------
FROM node:22-bookworm-slim AS prebuilder

RUN npm install pnpm -g

RUN apt-get update && apt-get install -y curl openssl

RUN apt-get install -y --no-install-recommends libreoffice-writer libreoffice-gtk3

# ------------------------ ------------------------Stage 2: Build ------------------------ ------------------------

FROM node:22-bookworm-slim AS builder

COPY --from=prebuilder ./ ./

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY ./ ./
# main-applic\.dockerignore **/*.db #  =>> //// sqlite3 .stats

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

RUN pnpm prisma generate

RUN pnpm build
# RUN pnpm prune --production

# ------------------------ ------------------------Stage 3: Application ------------------------ ------------------------

FROM node:22-bookworm-slim AS application

COPY --from=prebuilder ./ ./

COPY --from=builder /app /app

WORKDIR /app

EXPOSE 3007

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

CMD ["pnpm", "start"]
