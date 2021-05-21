import {
    Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne,
    BaseEntity, JoinTable
  } from 'typeorm';
  
   import {Favourite} from "./Favourite"
  @Entity()
  export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    first_name: string;
  
    @Column()
    last_name: string;
  
    @Column({unique: true})
    email: string;
  
    @Column({unique: true})
    password: string;
  
   @OneToMany(() => Favourite, favourite => favourite.userId)
    favourite: Favourite[];
    
  }