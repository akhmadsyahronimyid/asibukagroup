import csv, requests, argparse
from pathlib import Path
from html import escape
from datetime import datetime

# Function to convert TRUE/FALSE to lowercase
def normalize_boolean_values(value):
    if value.strip().lower() == "true":
        return "true"
    elif value.strip().lower() == "false":
        return "false"
    return value

# Argument parsing
parser = argparse.ArgumentParser()
parser.add_argument("--csv_urls", nargs="+", required=True, help="List of CSV URLs (first is for front matter)")
parser.add_argument("--table_titles", nargs="*", help="Optional titles for each table (excluding front matter)")
parser.add_argument("--output_dir", default="_asibuka-logistics", help="Output directory for the generated files")
args = parser.parse_args()

OUTPUT_DIR = Path(args.output_dir)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)  # Make sure the output directory exists

# === FRONT MATTER ===
front_matter_csv = args.csv_urls[0]
response = requests.get(front_matter_csv)
reader = csv.reader(response.text.splitlines())
front_rows = list(reader)

if len(front_rows) < 2:
    raise ValueError("Front matter CSV needs at least 2 rows")

keys = front_rows[0]
values = [normalize_boolean_values(value) for value in front_rows[1]]  # Normalize TRUE/FALSE values
front_matter_dict = dict(zip(keys, values))

# === PERMALINK ===
title = front_matter_dict.get("title", "untitled").strip()
slug = title.lower().replace(" ", "-")

# Extracting description for the <p> tag
description = front_matter_dict.get("description", "")

# === BUILD FRONT MATTER ===
front_matter = "---\n"
for key, value in front_matter_dict.items():
    front_matter += f"{key}: {value}\n"
front_matter += "---\n\n"

# === RENDER TABLES ===
html_tables = []

def render_cell(cell):
    return cell if "<" in cell and ">" in cell else escape(cell)

# Iterate over CSV URLs, starting from the second URL
for idx, csv_url in enumerate(args.csv_urls[1:]):
    response = requests.get(csv_url)
    reader = csv.reader(response.text.splitlines())
    rows = list(reader)

    if not rows:
        continue

    # Normalize all boolean values in the table rows
    rows = [[normalize_boolean_values(cell) for cell in row] for row in rows]

    # Get table heading (from input arguments or default)
    heading = args.table_titles[idx] if args.table_titles and idx < len(args.table_titles) else f"Table {idx + 1}"
    
    # Build HTML table
    table_html = f"<h2 class='main-heading'>{escape(heading)}</h2>\n<div class='table-container hide-on-print'><table>\n<thead>\n<tr>"
    table_html += "".join(f"<th>{escape(col)}</th>" for col in rows[0])
    table_html += "</tr>\n</thead>\n<tbody>\n"

    for row in rows[1:]:
        if not any(cell.strip() for cell in row):
            continue
        table_html += "<tr>" + "".join(f"<td>{render_cell(cell)}</td>" for cell in row) + "</tr>\n"

    table_html += "</tbody>\n</table></div>\n\n"
    html_tables.append(table_html)

# === WRITE OUTPUT ===
markdown = front_matter + "".join(html_tables)

# Write markdown directly into the output directory without creating subdirectories
filename = f"{slug}.md"
(OUTPUT_DIR / filename).write_text(markdown)