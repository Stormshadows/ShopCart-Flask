import sqlite3

#Open database
conn = sqlite3.connect('database.db')

#Create table
conn.execute('''CREATE TABLE Users
		(userId INTEGER PRIMARY KEY, 
		password TEXT,
		email TEXT,
		firstName TEXT,
		lastName TEXT,
		address1 TEXT,
		address2 TEXT,
		zipcode TEXT,
		city TEXT,
		state TEXT,
		country TEXT, 
		phone TEXT
		)''')

conn.execute('''CREATE TABLE Products
		(productId INTEGER PRIMARY KEY,
		name TEXT,
		price REAL,
		description TEXT,
		image TEXT,
		stock INTEGER,
		categoryId INTEGER,
		FOREIGN KEY(categoryId) REFERENCES categories(categoryId)
		)''')

conn.execute('''CREATE TABLE Kart
		(userId INTEGER,
		productId INTEGER,
		FOREIGN KEY(userId) REFERENCES users(userId),
		FOREIGN KEY(productId) REFERENCES products(productId)
		)''')

conn.execute('''CREATE TABLE Categories
		(categoryId INTEGER PRIMARY KEY,
		name TEXT
		)''')

conn.execute('''CREATE TABLE Cart
		(

		)

 ''')


conn.close()

# import sqlite3

# def importdb(db):
#      conn = sqlite3.connect(database.db)
#      c = conn.cursor()
#      c.execute("SELECT name FROM sqlite_master WHERE type='table';")
#      for table in c.fetchall()
#          yield list(c.execute('SELECT * from ?;', (table[0],)))