import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Customer } from "./entity/Customer"

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Customer, User],
    migrations: [],
    subscribers: [],
})
