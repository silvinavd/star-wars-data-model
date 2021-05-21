import {
    Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn,
    BaseEntity, JoinTable
} from 'typeorm';

import { User } from "./User"
import {Character} from "./Character";
import {Planet} from "./Planet";


@Entity()
export class Favourite extends BaseEntity {
    @PrimaryGeneratedColumn()
    favouriteId: number;

    @Column()
    userId: string;

    @ManyToOne(() => User, user => user.favourite)
    user: User;

    @OneToOne(() => Planet)
    @JoinColumn()
    planet: Planet;

    @OneToOne(() => Character)
    @JoinColumn()
    character: Character;
}
