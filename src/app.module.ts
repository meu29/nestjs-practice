import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { MemoModule } from "./memo/memo.module";

@Module({
    imports: [UserModule, MemoModule],
})

export default class AppModule {}