import { ErrorRequestHandler, Response, Request } from "express";
import mongoose, { Model, Schema } from "mongoose";

export default class RepositoryService<T extends Schema> {
  private dao: Model<T>;
  private _dataBase: any = mongoose.models;

  constructor(dao: any) {
    this.dao = dao;
  }

  /**
   * Realiza una busqueda a una colección a partir de una query
   * @param req
   * @returns
   */
  async where(
    req: Request
  ): Promise<Response | ErrorRequestHandler | undefined> {
    const { body, query } = req;
    const { schemaName } = body;
    const modelName = schemaName || this.dao.modelName;
    let hasQuery: boolean = false;
    for (const key in query) {
      if (Object.prototype.hasOwnProperty.call(query, key)) {
        hasQuery = true;
      }
    }
    if (!hasQuery) {
      return undefined;
    }
    return await this._dataBase[modelName]
      .find(query)
      .then((res: Response | any) => {
        return res;
      })
      .catch((err: ErrorRequestHandler) => {
        return err;
      });
  }

  /**
   * Obtiene todos los elementos de una colección
   * @param req
   * @returns
   */
  async getElements(
    req: Request
  ): Promise<Response | ErrorRequestHandler | undefined> {
    const { body, query } = req;
    const { schemaName } = body;
    const modelName = schemaName || this.dao.modelName;
    return await this._dataBase[modelName]
      .find(query)
      .then((res: Response | any) => {
        return res;
      })
      .catch((err: ErrorRequestHandler) => {
        return err;
      });
  }

  /**
   * Obtinen un Elemento por su id
   * @param req
   * @returns
   */
  async getElement(
    req: Request
  ): Promise<Response | ErrorRequestHandler | undefined> {
    return await this.dao
      .findById(req.params.id)
      .then((res: Response | any) => {
        return res;
      })
      .catch((err: ErrorRequestHandler) => {
        return err;
      });
  }

  /**
   * Crea un elemento nuevo a una coleccón
   * @param req
   * @returns
   */
  async createElement(
    req: Request
  ): Promise<Response | ErrorRequestHandler | null> {
    const body: T = Object.assign(req.body);
    return await this.dao
      .insertMany(body)
      .then((res: Response | any) => {
        req.params.id = res[0].id;
        return this.updateElement(req);
      })
      .catch((err: ErrorRequestHandler) => {
        return err;
      });
  }

  /**
   * Actualiza un elemento de una coleccón
   * @param req
   * @returns
   */
  async updateElement(
    req: Request
  ): Promise<Response | ErrorRequestHandler | null> {
    const body = Object.assign(req.body);
    return await this.dao
      .findByIdAndUpdate(req.params.id, [{ $set: body }], { new: true })
      .then((res: Response | any) => {
        return res;
      })
      .catch((err: ErrorRequestHandler) => {
        return err;
      });
  }

  /**
   * Elimina un elemento de una colección
   * @param req
   * @returns
   */
  async deleteElement(
    req: Request
  ): Promise<Response | ErrorRequestHandler | null> {
    const { params } = req;
    return await this.dao
      .findByIdAndRemove(params.id)
      .then((res: Response | any) => {
        return res;
      })
      .catch((err: ErrorRequestHandler) => {
        return err;
      });
  }
}
