# e-commerce-API

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