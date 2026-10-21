/** "Rs. 5,600" -> "5600" (the first number in the string, without commas). */
export function priceToNumber(price: string): string {
  const match = price.match(/\d[\d,]*(?:\.\d+)?/);
  return match ? match[0].replace(/,/g, "") : "";
}

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

/** "September 20, 2026" -> "2026-09-20" (ISO 8601). Returns the input if it can't be parsed. */
export function toIsoDate(text: string): string {
  const m = text.trim().match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/);
  if (!m) return text;
  const month = MONTHS.indexOf(m[1].toLowerCase());
  if (month === -1) return text;
  const mm = String(month + 1).padStart(2, "0");
  const dd = m[2].padStart(2, "0");
  return `${m[3]}-${mm}-${dd}`;
}
