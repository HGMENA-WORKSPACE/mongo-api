import express from "express";
import cors from "cors";
//
import router from "../routes/router";
import { environments } from "../../environment";
import dataBaseConfig from "./dataBase.connection";

export default function InitConnection() {
  return ServerConnection.serverInstance;
}

class ServerConnection {
  private static _instance: ServerConnection;
  private app: express.Application;
  private server_port: number = environments.SERVER_PORT;

  /**
   * Devuelve la instacia de this
   */
  public static get serverInstance() {
    return this._instance || (this._instance = new this());
  }

  private constructor() {
    this.app = express();
    this.appConfig();
    dataBaseConfig();
  }

  /**
   * App Configuration
   */
  private appConfig() {
    const { CORS }: any = environments;
    // parse application/x-www-form-urlencoded
    this.app.use(express.urlencoded({ extended: true }));
    // parse application/json
    this.app.use(express.json());
    this.app.use(cors(CORS));
    // listen la app
    this.app.listen(this.server_port, () => {
      console.log("Server running in port:", this.server_port);
    });
    // Cabeceras
    this.headersConfig();
    // Prefijo de ruta
    this.app.use(environments.PREFIX, router);
  }

  /**
   * Headers Config
   */
  private headersConfig() {
    const { HEADERS }: any = environments;
    this.app.use((req, res, next) => {
      for (const key in HEADERS) {
        const element = HEADERS[key];
        if (Object.prototype.hasOwnProperty.call(HEADERS, key)) {
          res.header(key, element);
        }
      }
      next();
    });
  }
}
