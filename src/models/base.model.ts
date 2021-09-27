export default class BaseModel {
  id!: { type: string; required: false };
  createdBy!: { type: string; required: false };
  createdAt!: { type: Date; required: false };
  updatedBy!: { type: string; required: false };
  updatedAt!: { type: Date; required: false };

  constructor(Obj: any) {
    this.id = Obj._id;
    this.createdBy = Obj.createdBy;
    this.createdAt = Obj.createdAt;
    this.updatedBy = Obj.updatedBy;
    this.updatedAt = Obj.updatedAt;
  }
}
