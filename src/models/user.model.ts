import BaseModel from "./base.model";

export default class UserModel extends BaseModel {
  image!: { type: string; required: true };
  nickname!: { type: string; required: true };
  name!: { type: string; required: true };
  sureName!: { type: string; required: true };
  mail!: { type: string; required: true };
  birthDay!: { type: Date; required: true };
  telePhone!: { type: string; required: true };
  state!: { type: boolean; required: true };

  constructor(Obj: UserModel) {
    super(Obj);
    this.image = Obj.image;
    this.nickname = Obj.nickname;
    this.name = Obj.name;
    this.sureName = Obj.sureName;
    this.mail = Obj.mail;
    this.birthDay = Obj.birthDay;
    this.telePhone = Obj.telePhone;
    this.state = Obj.state;
  }
}
