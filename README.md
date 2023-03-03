# e-commerce-API

step 1: using command Git Clone, and clone the github repo in new folder.
step 2: using npm init command for creating package.json and package-lock.json files.
step 3: using npm i ,installing express,nodemon,mysql,fs packages.
step 4: Inside the Src folder create Controller, Routes,Index.js files.
step 5: use npm start command in terminal to run server on PORT 3000.

Write an e-commerce API with tables: Product, vendor, product category, vendor category, cart, and wishlist.
You have to create api endpoints for GET, POST, DELETE and PUT functions.

Details:
- Product table should contain the following columns:
  - Name
  - Price
  - Vendor (ForeignKey relationship)
  - creation date
  - updation date
  - variations
  - attributes
  - category (ForeignKey relationship)

- Product Category table should contain the following columns:
  - Name
  - creation date

- Vendor table should contain the following columns:
  - Name
  - Phone
  - Address
  - City
  - State
  - Zip
  - Country
  - Type ( Individual, Company)
  - Category (ForeignKey relationship)
  - GST number (Not required for individual type vendor)

- Vendor Category table should contain the following columns:
  - Name
  - creation date

- Cart table should contain the following columns:
  - Product (ForeignKey relationship)
  - quantity
  - product variation ( if selected any)
  - Discount applied
  - Grand total
  - Sub-total
  - Tax Total
  - creation date
  - Cart type ( guest or registered user)

- Wishlist table should contain the following columns:
  - Product (ForeignKey relationship)
  - creation date