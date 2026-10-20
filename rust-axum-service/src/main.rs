use axum::{routing::get, Json, Router};
use std::net::SocketAddr;

async fn status() -> Json<serde_json::Value> {
    Json(serde_json::json!({ "status": "ok", "service": "rust-axum-service" }))
}

#[tokio::main]
async fn main() {
    let app = Router::new().nest(
        "/rust-axum-service",
        Router::new().route("/", get(status)).route("/health", get(status)),
    );
    let port = std::env::var("PORT").unwrap_or_else(|_| "3001".to_string());
    let address: SocketAddr = format!("0.0.0.0:{port}").parse().expect("valid listen address");
    let listener = tokio::net::TcpListener::bind(address).await.expect("bind listener");
    println!("rust-axum-service listening on {address}");
    axum::serve(listener, app).await.expect("serve app");
}