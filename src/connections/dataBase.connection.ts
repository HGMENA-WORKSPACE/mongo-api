import mongoose from "mongoose";
import { parse } from 'dotenv';
import * as fs from 'fs';
//
import { environments } from "../../environment";

/**
 * DataBase Configuration
 */
export default function dataBaseConfig() {
  let envConfig;
  const isDevelopmentEnv = process.env.NODE_ENV !== "producction";
  if (isDevelopmentEnv) {
    const envFilePath = __dirname + '/../../.env'; // Ruta del archivo de configuracion
    const existPath = fs.existsSync(envFilePath); // Booleano si existe el envFilePath
    if (!existPath) {
      console.log('.env file does not exist');
      process.exit(0);
    }
    envConfig = parse(fs.readFileSync(envFilePath));
    environments.DATABASE.NAME = envConfig.DATABASE_NAME;
    environments.DATABASE.LOCAL = envConfig.DATABASE_LOCAL;
    environments.DATABASE.URI = envConfig.DATABASE_URI;
  }
  const { DATABASE } = environments;
  const { LOCAL, URI, NAME } = DATABASE;
  const protocol = `${LOCAL}/${NAME}`;

  if (URI) {
    mongoose
      .connect(URI, {
        useUnifiedTopology: true, // Correcion Server Discovery and Monitoring
        useNewUrlParser: true, // Correccion de parseo de string URL
      })
      .then((db) => console.info("DB connect:", protocol))
      .catch((err) => console.warn(err));
  }
}
