import { Controller, Get, Post, Delete, Query, Body, Param} from "@nestjs/common";
import { MemoService } from "./memo.service";

@Controller("api/memo")
export class MemoController {

    private readonly MemoService: MemoService;

    constructor(MemoService: MemoService) {
        this.MemoService = MemoService;
    }

    @Get()
    findMemos(@Query() query: {userId: string}) {
        return this.MemoService.findMemos(parseInt(query.userId));
    }

    @Post()
    addMemo(@Body() memoData: {userId; number, title: string, content: string, date: Date}) {
        return this.MemoService.addMemo(memoData.userId, memoData.title, memoData.content, memoData.date);
    }

    @Delete()
    deleteMemo(@Param("memoId") memoId: string) {
        return this.MemoService.deleteMemo(memoId);
    }

    @Delete("all")
    deleteAllMemo(@Param("userId") userId: number) {
        return this.MemoService.deleteAllMemo(userId);
    }

}