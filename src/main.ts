import { NestFactory } from "@nestjs/core";
import AppModule from "./app.module";

(async () => {
    var app = await NestFactory.create(AppModule);
    await app.listen(8000);
})();