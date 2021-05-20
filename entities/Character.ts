import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany,
    BaseEntity, JoinTable
} from 'typeorm';

import {Favourite} from "./Favourite";
import {User} from "./User";


@Entity()
export class Character extends BaseEntity {
    @PrimaryGeneratedColumn()
    characterId: number;

    @Column()
    name: string;

    @Column()
    birth_year: string;

    @Column()
    gender: string;

    @Column()
    height: number;

    @Column()
    skin_color: string;


    @Column()
    eye_color: string;
    // @ManyToMany(() => Planet)
    // @JoinTable()
    // characters: Character[];


}