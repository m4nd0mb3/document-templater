require('dotenv').config()

const serverConfig = new (class ServerConfig{
    port = process.env.PORT || 3000;
    baseUrl = process.env.BASE_URL || "/api/v1/";
});

module.exports = serverConfig;