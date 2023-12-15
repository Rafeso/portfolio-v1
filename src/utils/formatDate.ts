export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });
}
