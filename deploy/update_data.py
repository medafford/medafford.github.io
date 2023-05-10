import csv
import os

import gspread

SPREADSHEET_ID = "1vPGOyMzZiHXaZnIIo5q8-f0Afz_XAsN25e-n82D2NFk"


def get_service():
    SCOPES = ["https://www.googleapis.com/auth/drive",
              "https://www.googleapis.com/auth/drive.file",
              "https://www.googleapis.com/auth/spreadsheets"]

    secret_file = os.path.join("deploy", "service-account.json")
    return gspread.service_account(secret_file, scopes=SCOPES)


def main():
    service = get_service()

    sheet = service.open_by_key(SPREADSHEET_ID)

    asthma_meds = sheet.get_worksheet(0).get_all_records()
    diabetes_meds = sheet.get_worksheet(1).get_all_records()
    data = asthma_meds + diabetes_meds

    with open("data.csv", "w") as f:
        writer = csv.DictWriter(f, fieldnames=data[0].keys())
        writer.writeheader()
        for row in data:
            writer.writerow(row)


if __name__ == "__main__":
    main()
