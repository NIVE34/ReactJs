Simplified ERP System with React
This guide provides detailed instructions on how to set up and interact with the front-end application. The application consists of a dashboard, products management, and orders management components.

Technologies Used
React.js
React Router
CSS
Prerequisites
Node.js installed on your machine
Git
Installation Steps
Clone the repository to your local machine using the following command:
git clone <repository_url>
Alternatively, you can download the ZIP file and extract it to a directory.

Navigate to the project directory: cd <project_directory> 2.Install dependencies: npm install
Running the Application
After the installation, start the development server by running: npm start This command will start the development server and open the application in your default web browser.
If the browser doesn't open automatically, you can access the application by visiting http://localhost:3000 in your web browser.
Dashboard
Upon accessing the application, you will be directed to the dashboard displaying key metrics. From the dashboard, you can navigate to the Products Management and Orders Management sections using the provided links.

Products Management
Click on the "Products Management" link from the navigation menu to access the Products Management section. Here, you can view a list of products including their ID, name, category, price, and stock quantity. You can add a new product by clicking the "Add Product" button and providing the necessary details. To edit an existing product, click the "Edit" button next to the product, make the desired changes, and save them. To delete a product, click the "Delete" button next to the product.

Orders Management
Click on the "Orders Management" link from the navigation menu to access the Orders Management section. This section displays a list of orders including their ID, customer name, order date, and status.It also ncludes a calendar view component to visualize orders by date.You can delete an order by clicking the "Delete" button next to the respective order.

Styling
The application features a clean and intuitive user interface designed for easy navigation and interaction. The CSS styles are organized and provide a visually appealing layout.

Additional Notes
Ensure that the backend server, if required, is running and accessible to fetch or update data as expected. This guide assumes basic familiarity with React.js and web development concepts. By following these instructions, you should be able to set up and effectively use the front-end application. If you encounter any issues, refer to the troubleshooting section or reach out for assistance.
