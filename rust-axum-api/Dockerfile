FROM rust:1.88-alpine AS builder
RUN apk add --no-cache musl-dev
WORKDIR /app
COPY Cargo.toml ./
COPY src ./src
RUN cargo build --release

FROM alpine:3.21
RUN apk add --no-cache ca-certificates
COPY --from=builder /app/target/release/rust-axum-api /usr/local/bin/rust-axum-api
ENV PORT=3000
EXPOSE 3000
CMD ["rust-axum-api"]