import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RecipeIngredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;
}

export default RecipeIngredient;