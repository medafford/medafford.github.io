import Papa from 'papaparse';
import fs from "fs";
import path from "path";

export interface Row {
  id: string
  drug: string
  manufacturer: string
  generic: string
  indication: string
  pap_no_insurance: string
  pap_notes: string
  goodrx: string
  costplus_drugs: string
  copay_cards: string
  copay_cards_notes: string
  inside_rx: string
  singlecare: string
}

export interface RowTrimmed {
  id: string
  drug: string
  manufacturer: string
  generic: string
}

export function normalize(s: string): string {
  return s.replace(/ /g, "_").replace(/\W/g, '').toLowerCase()
}

function nonEmpty(row: any): boolean {
  const { Drug, ...fields } = row;
  if (!Drug) {
    return false;
  }
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
    newRow.id = normalize(newRow.drug);
    return newRow as Row;
  });
  for (const row of rows) {
    result[row.id] = row;
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