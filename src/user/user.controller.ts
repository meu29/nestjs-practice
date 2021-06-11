import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {

    private readonly userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    @Get()
    findUsers() {
        return this.userService.findUsers();
    }

}