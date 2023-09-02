import pandas as pd
import difflib


DATA_PATH = "./src/database/dataset/Training.csv"
data = pd.read_csv(DATA_PATH).dropna(axis = 1)

symptoms = data.head(0)
symptoms_list = []

for i in symptoms:
    symptoms_list.append(i)

def listToString(lst):
 
    # initialize an empty string
    str1 = ""

    # traverse in the string
    for ele in lst:
        str1 += ele
 
    # return string
    return str1

def filterUserSymptom(user_symptoms : list):
    final_result = []
    for i in user_symptoms:
        find_close_match = difflib.get_close_matches(i, symptoms_list)
        result = find_close_match[0]
        
        if result:
            result = result + ","
            final_result.append(result)
            
    last_ele = final_result[-1]
    last_ele = last_ele[:-1]
    final_result.pop()
    final_result.append(last_ele)

    input_string = listToString(final_result)

    output_list = [word.replace("_", " ").title() for word in input_string.split(",")]

    output_string = ",".join(output_list)

    print(output_string)

    return output_string   


    


