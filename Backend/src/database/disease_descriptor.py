import csv

description_dict = {}
# replace 'path/to/file.csv' with the actual path to your CSV file
with open('./src/database/dataset/symptom_Description.csv') as csvfile:
    reader = csv.reader(csvfile)
    # skip the header row
    next(reader)
    # create a dictionary from the remaining rows in the CSV file
    description_dict = {rows[0]: rows[1] for rows in reader}

def disease_descriptor(disease : str):
    for key,value in description_dict.items():
        if(disease == key):
            return value
        
    
