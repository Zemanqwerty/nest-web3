import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Orders } from "./orders.entity";

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Orders)
        private usersRepository: Repository<Orders>,
    ) {};

    async getOrders() {
        return
    }

    async getMatchingOrders() {
        return
    }
}