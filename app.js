const express = require("express");
const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const app = express();
const port = process.env.PORT || 3000;

const credential = new DefaultAzureCredential();
const keyVaultUrl = process.env.KEY_VAULT_URL;

app.get("/", (req, res) => {
  res.json({
    message: "Azure Web App is Running!",
    environment: process.env.ENVIRONMENT || "local",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    version: "1.0.0"
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});