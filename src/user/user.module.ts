import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
    controllers: [UserController],
    /* UserServiceがPrismaServiceを利用できるようになる */
    providers: [UserService, PrismaService]
})

export class UserModule {}