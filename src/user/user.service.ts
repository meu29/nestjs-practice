import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { User } from "@prisma/client";

@Injectable()
export class UserService {

    private prismaService: PrismaService;

    constructor(prismaService: PrismaService) {
        this.prismaService = prismaService;
    }

    async login(email:string, password: string): Promise<User> {
        return this.prismaService.user.findFirst({where: {email: email, password: password}});
    }

    async signup(name: string, email: string, password: string): Promise<User> {
        const user = await this.prismaService.user.create({data: {name: name, email: email, password: password}});
        return user;
    }

}