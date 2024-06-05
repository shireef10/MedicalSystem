import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../registration/userReg.service';
import * as jwt from 'jsonwebtoken';
import { User } from '../registration/interfaces/user.interface';

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}

@Injectable()
export class JwtAuthMiddleware implements NestMiddleware {
    constructor(private readonly userService: UserService) { }

    async use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new UnauthorizedException('Authorization header missing');
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new UnauthorizedException('Token missing');
        }

        try {
            const decoded = jwt.verify(token, '123') as { email: string; sub: string };
            const user = await this.userService.findByEmail(decoded.email);
            if (!user) {
                throw new UnauthorizedException('User not found');
            }
            req.user = user;
            next();
        } catch (err) {
            throw new UnauthorizedException('Invalid token');
        }
    }
}
