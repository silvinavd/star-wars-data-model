import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne, JoinColumn,
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
    planetId: string;

    @Column()
    characterId: string;
;
    @OneToOne(() => User, user => user.favourite)
    @JoinColumn()
    user: User;

     @ManyToMany(() => Planet, planet => planet.planetId)
         @JoinTable()

    planet: Planet[];

}
