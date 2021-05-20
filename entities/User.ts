import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne,
    BaseEntity, JoinTable
  } from 'typeorm';
  
   import {Favourite} from "./Favourite"
  @Entity()
  export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    Id: number;
  
    @Column()
    first_name: string;
  
    @Column()
    last_name: string;
  
    @Column({unique: true})
    email: string;
  
    @Column({unique: true})
    password: string;
  
    //  @ManyToMany(() => Planet)
    //  @JoinTable()
    //  planets: Planet[];

    @OneToOne(() => Favourite, favourite => favourite.user) // specify inverse side as a second parameter
    favourite: Favourite;
    
  }