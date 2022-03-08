import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Entity()
export class Poster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: "DIRECTORY" | "FILE";

  @Column({ nullable: true })
  filePath: string;

  @ManyToOne(() => Poster, (poster) => poster.children)
  parent: Poster;

  @OneToMany(() => Poster, (poster) => poster.parent, { cascade: ["insert"] })
  children: Poster[];
}
