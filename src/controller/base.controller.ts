import { Request, Response } from "express";
import { Schema } from "mongoose";
//
import RepositoryService from "../services/repository.service";

export default class BaseController<T extends Schema> {
  constructor(private _repositoryService: RepositoryService<T>) {}

  get repositoryService() {
    return this._repositoryService;
  }

  async where(req: Request, res: Response) {
    const element = await this.repositoryService.where(req);
    return res.json(element);
  }

  async getElements(req: Request, res: Response) {
    const element = await this.repositoryService.getElements(req);
    return res.json(element);
  }

  async getElement(req: Request, res: Response) {
    const element = await this.repositoryService.getElement(req);
    return res.json(element);
  }

  async postElement(req: Request, res: Response) {
    const element = await this.repositoryService.createElement(req);
    return res.json(element);
  }

  async putElement(req: Request, res: Response) {
    const element = await this.repositoryService.updateElement(req);
    return res.json(element);
  }

  async deleteElement(req: Request, res: Response) {
    const element = await this.repositoryService.deleteElement(req);
    return res.json(element);
  }
}
