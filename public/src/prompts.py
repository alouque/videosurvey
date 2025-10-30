import csv

with open("C:\\Users\\Austin\\Desktop\\proj\\videosurvey\\public\\src\\prompts.csv", newline='', encoding='utf-8') as f:
    reader = csv.reader(f)
    next(reader)  # skip header row if you have one
    prompts = {rows[0].strip(): rows[1].strip() for rows in reader}

# Write to a JS file
with open("prompts.js", "w", encoding="utf-8") as f:
    f.write("export const prompts = {\n")
    for k, v in prompts.items():
        safe_v = v.replace('"', '\\"')  # escape quotes
        f.write(f'  {k}: "{safe_v}",\n')
    f.write("};\n")

print("✅ prompts.js created successfully!")
