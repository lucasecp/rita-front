export const verifyTypedFields = (fields: any[]): any[] => {
  return fields.filter((field) => field.value || field.value === false)
}
