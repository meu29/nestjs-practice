import { Injectable } from "@nestjs/common";
import { PrismaService } from "./../prisma.service";
import { User, Prisma } from "@prisma/client";

@Injectable()
export class UserService {

    private prismaService: PrismaService;

    constructor(prismaService: PrismaService) {
        this.prismaService = prismaService;
    }

    async findUsers(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

}