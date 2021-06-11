import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Memo } from "@prisma/client";

@Injectable()
export class MemoService {

    private prismaService: PrismaService;

    constructor(prismaService: PrismaService) {
        this.prismaService = prismaService;
    }
    
    async findMemos(userId: number): Promise<Memo[]> {
        return this.prismaService.memo.findMany({where: {user_id: userId}});
    }

    async addMemo(userId: number, title: string, content: string, date: Date): Promise<Memo> {
        const memo = await this.prismaService.memo.create({data: {memo_id: Math.random().toString(32).substring(2), user_id: userId, title: title, content: content, date: date}});
        return memo;
    }

    async deleteMemo(memoId: string): Promise<Memo> {
        const memo = await this.prismaService.memo.delete({where: {memo_id: memoId}});
        return memo;
    }

    async deleteAllMemo(userId: number): Promise<Memo[]> {
        const memos = await this.prismaService.memo.deleteMany({where: {user_id: userId}});
        return memos;
    }

}