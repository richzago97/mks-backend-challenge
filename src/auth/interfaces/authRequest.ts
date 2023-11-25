import { Request } from "express";
import { UserModel } from "src/user/entities/user.entity";

export interface AuthRequest extends Request {
    user: UserModel
}
