import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RecipeStep {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    step: string;
}

export default RecipeStep;