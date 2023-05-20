import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm"
import { IsEmail } from "class-validator"

@Entity("users")
export class User {

    @ObjectIdColumn()
    id: ObjectId

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    @IsEmail()
    email: number

}
