import { model, Schema } from "mongoose";
//
import BaseController from "./base.controller";
import UserSchema from "../schemas/user.schema";
import RepositoryService from "../services/repository.service";

export default class UserController extends BaseController<UserSchema> {
  constructor() {
    super(
      new RepositoryService<UserSchema>(
        model(`User`, new Schema<UserSchema>(UserSchema, { timestamps: true }))
      )
    );
  }
}
