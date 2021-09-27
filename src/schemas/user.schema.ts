import BaseSchema from "./base.schema";

export default class UserSchema extends BaseSchema {
  image!: { type: string; required: true };
  nickname!: { type: string; required: true };
  name!: { type: string; required: true };
  sureName!: { type: string; required: true };
  mail!: { type: string; required: true };
  birthDay!: { type: Date; required: true };
  telePhone!: { type: string; required: true };
  pass!: { type: string; required: true };
}
