import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { IsEmail, Max, IsNotEmpty, Min } from "class-validator";
import { Match } from "../types/Match";

interface RegisterFormInputs {
  email: string;
  password: string;
  confirmationPassword: string;
  name: string;
  phone: string;
}

const GenericRequired = (s: string) =>
  IsNotEmpty({ message: `Por favor introduce tu ${s}` });

class RegisterFormValidations implements RegisterFormInputs {
  @IsEmail({}, { message: "Por favor introduce un correo válido" })
  @Max(50, { message: "Tu correo no puede tener más de 50 caractéres" })
  @GenericRequired("email")
  @Min(10, { message: "Tu correo debe contener al menos 10 caractéres" })
  email: string;

  @GenericRequired("password")
  @Max(100, { message: "Tu contraseña no puede tener más de 100 caractéres" })
  @Min(6, { message: "Tu contraseña debe contener al menos 6 caractéres" })
  password: string;

  @Match("password", { message: "Las contraseñas no coinciden" })
  confirmationPassword: string;

  @GenericRequired("nombre")
  name: string;

  @GenericRequired("telefono")
  phone: string;
}
