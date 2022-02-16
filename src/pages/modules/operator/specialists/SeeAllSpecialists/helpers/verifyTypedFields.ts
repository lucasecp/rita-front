export const verifyTypedFields = (fields: any[]) => {
  return fields.filter((field) => field.value)
}
