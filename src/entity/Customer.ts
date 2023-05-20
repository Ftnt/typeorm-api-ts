import { Entity, ObjectIdColumn, ObjectId, Column, Index } from "typeorm"

@Entity("customers")
export class Customer {

    @ObjectIdColumn()
    id: ObjectId

    @Column({nullable: false })
    email: string

    @Column()
    name: string

    @Column({nullable: false })
    phone: number

}