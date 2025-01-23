module.exports = {
  apps: [{
    name: "dvops-app",
    script: "./index.js",    // Changed from app.js to index.js since that's your main file
    env: {
      NODE_ENV: "development",
      PORT: 5050             // Changed to match your service targetPort
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 5050
    }
  }]
}