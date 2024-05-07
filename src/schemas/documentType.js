import { z } from "zod";

const documentTypeSchema = z.object({
  typeName: z.string({
    invalid_type_error: "Debe ser una cadena de caracteres",
    required_error: "El campo es obligatorio",
  }),
  abbreviation: z.string({
    invalid_type_error: "Debe ser una cadena de caracteres",
    required_error: "El campo es obligatorio",
  }),
});

export function validateDocumetType(object) {
  return documentTypeSchema.safeParse(object);
}
