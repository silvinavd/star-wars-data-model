import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable
  } from 'typeorm';

  import {Favourite} from "./Favourite";
  import {User} from "./User";


  
  // import {Planet} from "./Planet"
  @Entity()
  export class Planet extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;    
    
    @Column()
    climate: string;
  
    @Column()
    diameter: number;
  
    @Column()
    rotation_period: number;
  
    @Column()
    orbital_period: number;

    @Column()
    gravity: string;

    
  }