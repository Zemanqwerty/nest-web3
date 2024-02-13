import { Body, Controller, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller('')
export class OrdersController {
    constructor(private readonly usersService: OrdersService) {};

    @Get('getOrders')
    async getOrders(@Req() request: Request) {
        try {
            return await this.usersService.getOrders();
        } catch (e) {
            return e
        }
    }

    @Get('getMatchingOrders')
    async getMatchingOrders(@Req() request: Request) {
        try {
            return await this.usersService.getMatchingOrders();
        } catch (e) {
            return e
        }
    }
}