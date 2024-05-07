import { z } from "zod";

const userSchema = z.object({
  email: z.string().email({
    invalid_type_error: "Dirección de correo electrónico no válida",
    required_error: "El email es obligatorio",
  }),
  fullName: z.string({
    invalid_type_error: "Debe ser una cadena de caracteres",
    required_error: "El campo nombre completo es obligatorio",
  }),
  age: z.number().int().min(0).optional(),
  documentTypeId: z.number().int({
    required_error: "El campo es obligatorio",
  }),
  documentNumber: z.string({
    invalid_type_error: "Debe ser una cadena de caracteres",
    required_error: "El campo es obligatorio",
  }),
  avatarUrl: z.string().optional(),
});

export function validateUser(object) {
  return userSchema.safeParse(object);
}

export function validatePartialUser(object) {
  return userSchema.partial().safeParse(object);
}
