"use server";

import contactMeSchema, { ContactMeSchemaType } from "@/lib/validationSchema";

export async function emailme(formData: ContactMeSchemaType) {
  const result = contactMeSchema.safeParse(formData);
  console.log("result 121211 ", result);
  if (result.success) {
    console.log("result", result);
  }
}
