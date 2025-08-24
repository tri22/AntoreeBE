import { IsEnum } from "class-validator";
import { LevelMap } from "../entities/profile.entity";

export class CreateProfileDto {
    teacherId: number;
    price: number;
    title: string;
    description: string;
    teachTime: string;
    teachDay: string;
    @IsEnum(LevelMap, { each: true })
    levels: (keyof typeof LevelMap)[];
    nationality: string
}


