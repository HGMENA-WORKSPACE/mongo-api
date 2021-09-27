export const environments = {
  SERVER_PORT: Number(process.env.PORT) || 5000,
  PREFIX: "/api",
  HEADERS: {
    "Access-Control-Allow-Origin": "*", // Para controlar quien puede consumir mi API
    "Access-Control-Allow-Headers":
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method", // Para configurar los headers que acepta la API
    "Access-Control-Allow-Methods": "GET,POST,HEAD,PATCH,PUT,DELETE", // Para declarar los métodos que acepta el API
    Allow: "GET,POST,HEAD,PATCH,PUT,DELETE",
  },
  ROUTES: {
    user: "user",
  },
  CORS: {
    origin: "*", //servidor que deseas que consuma o (*) en caso que sea acceso libre
    methods: ["GET,POST,HEAD,PATCH,PUT,DELETE"],
    credentials: true,
  },
  DATABASE: {
    NAME: process.env.DATABASE_NAME,
    LOCAL: process.env.DATABASE_LOCAL,
    URI: process.env.DATABASE_URI
  },
};
