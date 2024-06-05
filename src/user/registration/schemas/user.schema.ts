import { Schema } from 'mongoose';

export const UserDocument = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roleId: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
  photo: String,
});

// export interface User extends mongoose.Document {
//   email: string;
//   password: string;
//   role: number;
//   photo?: string;
// }
