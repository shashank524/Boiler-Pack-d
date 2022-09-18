import mysql.connector as mc
mydb = mc.connect(host="friends-list.cewtthpb1o4v.us-east-2.rds.amazonaws.com", port="3306", user="admin", password="fedzud-gocgy5-pijNoj", database="friends-list")
mycursor = mydb.cursor()
mycursor.execute("CREATE TABLE user_data(email varchar(100), name varchar(100), pwd varchar(100));") 
