import { Controller, Get, Post, Body } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";

@Controller("api/user")
export class UserController {

    private readonly userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }
    
    @Post("login")
    login(@Body() loginData: {email: string, password: string}) {
        return this.userService.login(loginData.email, loginData.password);
    }

    @Post("signup")
    signup(@Body() signupData: {name: string, email: string, password: string}) {
        return this.userService.signup(signupData.name, signupData.email, signupData.password);
    }

}