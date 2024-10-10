# InStock-Inventory-App
## Overview
![instock-responsive mockup](https://github.com/hwrdyen/InStock-Inventory-App/assets/54991780/8fac0491-ddd1-4dda-b638-74d8cc9a16c0)

InStock is a full-stack inventory management application designed to optimize warehouse and product management. It provides users with an easy-to-navigate platform to oversee stock levels, locations, and product details across multiple warehouses. The app demonstrates proficiency in building robust data handling systems and user-friendly interfaces for managing large-scale inventory operations.

## Getting Started

### Prerequisites
This is an example of  how to install the prerequisite softwares.
* npm
  ```sh
  npm install npm@latest -g
  ```
  
### Installation
_Below is an example of how you can install and set up the InStock application._
- To start the front-end
1. Change to "client" folder
   ```sh
   cd client
   ```
2. Run the front-end
   ```sh
   npm run dev
   ```
- To start the back-end (MongoDB database)
1. Change to "server" folder
   ```sh
   cd server
   ```
2. Run the back-end (MongoDB database)
   ```sh
   npm run start
   ```

## Introduction
Key tech stack and tools that are utilized in this project:
- React.js: Developed a responsive and interactive front-end for a seamless user experience.
- Node.js & Express.js: Implemented backend server functionalities to handle API requests and manage inventory data.
- MongoDB Atlas: Used as the primary database solution for storing and managing inventory data, providing scalability and high performance.
- Mongoose: Simplified interactions with MongoDB through schema-based modeling and validation.
- Sass: Enhanced the styling of the app to ensure a consistent and modern design.
- React Router Dom: Enabled smooth navigation across different pages and sections of the app.

## Description
The InStock Inventory Management App is built to help businesses monitor and manage their stock levels and warehouse data effectively. The app offers a comprehensive dashboard to view detailed product information and streamline operations. Key features include:

Inventory Dashboard: Users can view, search, and filter products based on availability, category, and warehouse location. Each product entry is linked to its corresponding warehouse.
- Warehouse Management: Users can add and manage multiple warehouse locations, with the data stored and retrieved from MongoDB.
- CRUD Functionality: Users can create, read, update, and delete inventory items and warehouses, with all data operations performed on the MongoDB database.
- Product Details Page: Each product has a dedicated page displaying its stock level, status (in-stock/out-of-stock), SKU number, and other essential details.
- Real-Time Updates: The app supports real-time updates when products are edited or deleted, providing an accurate reflection of the current inventory status.
- Responsive Design: The app is optimized for different devices, offering a consistent experience whether accessed from a desktop or mobile device.

This project showcases expertise in full-stack development using the MERN (MongoDB, Express, React, Node.js) stack and efficient database management with MongoDB. It also highlights a strong ability to build applications that handle complex data operations while maintaining a user-friendly interface.
