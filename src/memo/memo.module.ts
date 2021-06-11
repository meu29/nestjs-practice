import { Module } from "@nestjs/common";
import { MemoController } from "./memo.controller";
import { MemoService } from "./memo.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    controllers: [MemoController],
    providers: [MemoService, PrismaService]
})

export class MemoModule {}