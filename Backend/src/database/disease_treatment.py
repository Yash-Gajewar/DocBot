import csv

description_dict = {}
# replace 'path/to/file.csv' with the actual path to your CSV file
with open('./src/database/dataset/symptom_precaution.csv') as csvfile:
    reader = csv.reader(csvfile)
    # skip the header row
    next(reader)
    # create a dictionary from the remaining rows in the CSV file
    description_dict = {rows[0]: [rows[1], rows[2], rows[3], rows[4]] for rows in reader}

def treatment_prediction(disease : str):
    for key,value in description_dict.items():
        if(disease == key):
            return value
        
    
