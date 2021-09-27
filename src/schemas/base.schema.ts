import { Schema } from "mongoose";

export default class BaseSchema extends Schema {
  id!: { type: string; required: false };
  createdBy!: { type: string; required: false };
  createdAt!: { type: Date; required: false; timestamps: true };
  updatedBy!: { type: string; required: false };
  updatedAt!: { type: Date; required: false; timestamps: true };
}
