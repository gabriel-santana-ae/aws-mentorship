import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  text: string;

  @Column()
  author: string;
}
