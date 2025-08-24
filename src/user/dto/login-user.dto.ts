import { IsNotEmpty, MinLength } from "class-validator";

export class LoginUserDto{
    @IsNotEmpty({message:"Email must not emty"})
    email: string;
    @IsNotEmpty({message:"Password must not emty"})
    @MinLength(6,{message:"Password length must greater than 6"})
    password: string;
}