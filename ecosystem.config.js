module.exports = {
  apps: [
    {
      name: "server",
      script: "dist/index.js",
      cwd: "./server",
      watch: false,
      instances: 1,
      autorestart: true
    },
    {
      name: "client",
      script: "npm",
      args: "run start",
      cwd: "./client",
      watch: false,
      instances: 1,
      autorestart: true,
    }

  ]
}
