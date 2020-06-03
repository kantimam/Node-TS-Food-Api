import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    description: string

    @Column('varchar', {
        nullable: true
    })
    prep_time: string

    @Column('varchar', {
        nullable: true
    })
    cook_time: string

    @Column('tinyint', {
        nullable: true
    })
    difficulty: number

}

export default Recipe;