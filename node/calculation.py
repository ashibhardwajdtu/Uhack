import numpy as np
import os
import pandas as pd

# Importing the dataset
dataset = pd.read_csv('kc2.csv')
X = dataset.iloc[:,:-1].values
y = dataset.iloc[:, 21].values

# Encoding the Dependent Variable
from sklearn.preprocessing import LabelEncoder
labelencoder_y = LabelEncoder()
y = labelencoder_y.fit_transform(y)

# Splitting the dataset into the Training set and Test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.0, random_state = 0)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
# X_test = sc.transform(X_test)

import keras
from keras.models import Sequential
from keras.layers import Dense

classifier = Sequential()

classifier.add(Dense(output_dim = 6, init = 'uniform', activation = 'relu', input_dim = 21))

classifier.add(Dense(output_dim = 6, init = 'uniform', activation = 'relu'))

# Adding the output layer
classifier.add(Dense(output_dim = 1, init = 'uniform', activation = 'sigmoid'))

classifier.compile(optimizer = 'adam', loss = 'binary_crossentropy', metrics = ['accuracy'])

classifier.fit(X_train, y_train, batch_size = 10, nb_epoch = 100)

# y_pred = classifier.predict(X_test)
# y_pred = (y_pred > 0.5)

# from sklearn.metrics import confusion_matrix
# cm = confusion_matrix(y_test, y_pred)
some_nonsense_variable = 1
while True:
    try:
        inp = pd.read_csv('input.csv')
        # print("HELLO")
        print(inp)
        input1 = inp.iloc[:,:].values
        y_pred = classifier.predict(input1)
        y_pred = (y_pred > 0.5)
        os.remove('input.csv')
        f = open('output.txt','w')
        # print(y_pred)
        f.write(y_pred)
    except: 
        some_nonsense_variable = (some_nonsense_variable^1)