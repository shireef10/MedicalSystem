// src/users/interfaces/user.interface.ts
import { Document, Types } from 'mongoose';

export interface User extends Omit<Document, 'id'> {
    email: string;
    password: string;
    roleId: Types.ObjectId;
    photo?: string;
}
