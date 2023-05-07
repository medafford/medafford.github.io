import Papa from 'papaparse';
import fs from "fs";
import path from "path";

export interface Row {
  key: string
  drug: string
  manufacturer: string
  generic: string
  indication: string
  pap_insurance: string
  pap_no_insurance: string
  goodrx: string
  costplus_drugs: string
  copay_cards: string
  notes: string
}

function normalize(s: string): string {
  return s.replace(" ", "_").replace(/\W/g, '').toLowerCase()
}

function nonEmpty(row: any): boolean {
  const { Drug, ...fields } = row;
  return Object.values(fields).filter(value => value !== '').length > 0;
}

export function parseCSV(filePath: string) {
  const file = fs.readFileSync(filePath, 'utf8');
  const data = Papa.parse<Map<string, string>>(file, {
    delimiter: ',',
    header: true
  }).data.filter(
      (row) => nonEmpty(row)
  );
  const result: Record<string, Row> = {};
  const rows = data.map(row => {
    const newRow: any = {};
    for (const [key, value] of Object.entries(row)) {
      const newKey = normalize(key);
      newRow[newKey] = normalize(value) == "na" ? "" : value;
    }
    newRow.key = normalize(newRow.drug);
    return newRow as Row;
  });
  for (const row of rows) {
    result[row.key] = row;
  }
  return result;
}

let cachedData: null | Record<string, Row> = null;

export function getData() {
  if (cachedData) {
    return cachedData;
  }
  const filePath = path.join(process.cwd(), 'data.csv');
  const data = parseCSV(filePath);

  cachedData = data;
  return data;
}