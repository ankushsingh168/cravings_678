const ExcelJS = require('exceljs');
const path = require('path');

async function convertMarkdownToExcel() {
  const workbook = new ExcelJS.Workbook();

  // Define header style
  const headerStyle = {
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4472C4' } },
    font: { bold: true, color: { argb: 'FFFFFFFF' } },
    alignment: { horizontal: 'center', vertical: 'center', wrapText: true }
  };

  const cellStyle = {
    alignment: { horizontal: 'left', vertical: 'top', wrapText: true },
    border: {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    }
  };

  // ===== OVERVIEW SHEET =====
  let sheet = workbook.addWorksheet('Overview');
  sheet.columns = [
    { header: 'Section', key: 'section', width: 20 },
    { header: 'Description', key: 'description', width: 50 },
    { header: 'Base URL', key: 'baseUrl', width: 30 }
  ];
  
  sheet.getRow(1).style = headerStyle;
  sheet.addRows([
    { section: 'Base URL', description: 'All API endpoints', baseUrl: 'http://localhost:4500' },
    { section: 'Authentication', description: 'Cookie-based JWT', baseUrl: 'Oreo (auth) / kitkat (OTP)' },
    { section: 'Content-Type', description: 'Request/Response format', baseUrl: 'application/json' }
  ]);
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) row.style = cellStyle;
  });

  // ===== AUTH APIs =====
  sheet = workbook.addWorksheet('Auth APIs');
  sheet.columns = [
    { header: 'Component', key: 'component', width: 15 },
    { header: 'Endpoint', key: 'endpoint', width: 25 },
    { header: 'Method', key: 'method', width: 10 },
    { header: 'Description', key: 'description', width: 30 },
    { header: 'Request Body', key: 'request', width: 40 },
    { header: 'Success Message', key: 'success', width: 30 },
    { header: 'Error Messages', key: 'error', width: 40 }
  ];
  sheet.getRow(1).style = headerStyle;
  sheet.addRows([
    { component: 'Register', endpoint: '/auth/register', method: 'POST', description: 'Register new user', request: '{ fullName, email, password, phone, gender, dob, userType }', success: 'User Created Successfully', error: '400: All fields Required | 409: Email already registered' },
    { component: 'Login', endpoint: '/auth/login', method: 'POST', description: 'Login existing user', request: '{ email, password }', success: 'Welcome Back', error: '400: All fields Required | 404: Email not registered | 401: Incorrect Password' },
    { component: 'Logout', endpoint: '/auth/logout', method: 'GET', description: 'Logout user', request: 'None', success: 'Logout Successfully', error: '500: Internal Server Error' },
    { component: 'Send OTP', endpoint: '/auth/send-otp', method: 'POST', description: 'Send OTP to email', request: '{ email }', success: 'OTP sent on <email>', error: '400: Email required | 404: Email not registered' },
    { component: 'Verify OTP', endpoint: '/auth/verify-otp', method: 'POST', description: 'Verify OTP', request: '{ email, otp }', success: 'OTP verified. Create New Password', error: '400: Email required | 401: OTP Expired | 404: Email not registered' },
    { component: 'Reset Password', endpoint: '/auth/reset-password', method: 'POST', description: 'Reset password (requires kitkat cookie)', request: '{ newPassword }', success: 'Password Changed', error: '401: Session Expired | 500: Internal Server Error' }
  ]);
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) row.style = cellStyle;
  });

  // ===== COMMON APIs =====
  sheet = workbook.addWorksheet('Common APIs');
  sheet.columns = [
    { header: 'Component', key: 'component', width: 15 },
    { header: 'Endpoint', key: 'endpoint', width: 28 },
    { header: 'Method', key: 'method', width: 10 },
    { header: 'Description', key: 'description', width: 30 },
    { header: 'Request Body', key: 'request', width: 40 },
    { header: 'Success Message', key: 'success', width: 30 },
    { header: 'Error Messages', key: 'error', width: 40 }
  ];
  sheet.getRow(1).style = headerStyle;
  sheet.addRows([
    { component: 'Edit Profile', endpoint: '/user/edit-profile', method: 'PUT', description: 'Update user profile', request: '{ fullName, email, phone, displayPic }', success: 'User Updated Successfully', error: '400: All fields Required | 404: Email not registered | 401: Session Expired' },
    { component: 'Change Password', endpoint: '/user/change-password', method: 'PATCH', description: 'Change password', request: '{ oldPassword, newPassword }', success: 'Password updated successfully', error: '400: All fields Required | 400: Old password incorrect | 401: Session Expired' }
  ]);
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) row.style = cellStyle;
  });

  // ===== PUBLIC APIs - Implemented =====
  sheet = workbook.addWorksheet('Public APIs');
  sheet.columns = [
    { header: 'Component', key: 'component', width: 15 },
    { header: 'Endpoint', key: 'endpoint', width: 30 },
    { header: 'Method', key: 'method', width: 10 },
    { header: 'Status', key: 'status', width: 12 },
    { header: 'Description', key: 'description', width: 35 },
    { header: 'Request Body', key: 'request', width: 35 },
    { header: 'Success Message', key: 'success', width: 30 }
  ];
  sheet.getRow(1).style = headerStyle;
  sheet.addRows([
    { component: 'Contact Us', endpoint: '/public/contact-us', method: 'POST', status: 'Implemented', description: 'Submit contact form', request: '{ fullName, email, phone, subject, message }', success: 'Thanks for Contacting us!' },
    { component: 'Get All Restaurants', endpoint: '/public/restaurants', method: 'GET', status: 'Planned', description: 'Get list of all restaurants', request: 'None', success: 'Restaurants fetched successfully' },
    { component: 'Get Restaurant By ID', endpoint: '/public/restaurant/:id', method: 'GET', status: 'Planned', description: 'Get restaurant details', request: 'URL Param: id', success: 'Restaurant fetched successfully' },
    { component: 'Get Restaurant Menu', endpoint: '/public/restaurant/:id/menu', method: 'GET', status: 'Planned', description: 'Get restaurant menu', request: 'URL Param: id', success: 'Menu fetched successfully' },
    { component: 'Search Restaurants', endpoint: '/public/search?q=query', method: 'GET', status: 'Planned', description: 'Search restaurants', request: 'Query Param: q', success: 'Search results fetched' }
  ]);
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) row.style = cellStyle;
  });

  // ===== RESTAURANT APIs =====
  sheet = workbook.addWorksheet('Restaurant APIs');
  sheet.columns = [
    { header: 'Component', key: 'component', width: 15 },
    { header: 'Endpoint', key: 'endpoint', width: 35 },
    { header: 'Method', key: 'method', width: 10 },
    { header: 'Status', key: 'status', width: 12 },
    { header: 'Description', key: 'description', width: 30 }
  ];
  sheet.getRow(1).style = headerStyle;
  sheet.addRows([
    { component: 'Get Restaurant Data', endpoint: '/restaurant/get-restaurant-data?id=managerId', method: 'GET', status: 'Implemented', description: 'Fetch restaurant profile by manager ID' },
    { component: 'Update Restaurant Profile', endpoint: '/restaurant/update-profile', method: 'PUT', status: 'Implemented', description: 'Create/update restaurant profile' },
    { component: 'Add Menu Item', endpoint: '/restaurant/menu/add-item', method: 'POST', status: 'Planned', description: 'Add new menu item' },
    { component: 'Update Menu Item', endpoint: '/restaurant/menu/update-item/:itemId', method: 'PUT', status: 'Planned', description: 'Update menu item' },
    { component: 'Delete Menu Item', endpoint: '/restaurant/menu/delete-item/:itemId', method: 'DELETE', status: 'Planned', description: 'Delete menu item' },
    { component: 'Get All Menu Items', endpoint: '/restaurant/menu/get-all', method: 'GET', status: 'Planned', description: 'Get all menu items' },
    { component: 'Get Restaurant Orders', endpoint: '/restaurant/orders', method: 'GET', status: 'Planned', description: 'Get all restaurant orders' },
    { component: 'Update Order Status', endpoint: '/restaurant/orders/:orderId/status', method: 'PATCH', status: 'Planned', description: 'Update order status' },
    { component: 'Toggle Restaurant Status', endpoint: '/restaurant/toggle-status', method: 'PATCH', status: 'Planned', description: 'Toggle restaurant open/close' },
    { component: 'Get Dashboard Stats', endpoint: '/restaurant/dashboard', method: 'GET', status: 'Planned', description: 'Get dashboard analytics' }
  ]);
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) row.style = cellStyle;
  });

  // ===== CUSTOMER APIs =====
  sheet = workbook.addWorksheet('Customer APIs');
  sheet.columns = [
    { header: 'Component', key: 'component', width: 15 },
    { header: 'Endpoint', key: 'endpoint', width: 35 },
    { header: 'Method', key: 'method', width: 10 },
    { header: 'Description', key: 'description', width: 35 }
  ];
  sheet.getRow(1).style = headerStyle;
  sheet.addRows([
    { component: 'Add Address', endpoint: '/customer/address/add', method: 'POST', description: 'Add delivery address' },
    { component: 'Update Address', endpoint: '/customer/address/update/:addressId', method: 'PUT', description: 'Update delivery address' },
    { component: 'Delete Address', endpoint: '/customer/address/delete/:addressId', method: 'DELETE', description: 'Delete address' },
    { component: 'Get All Addresses', endpoint: '/customer/address/get-all', method: 'GET', description: 'Get all saved addresses' },
    { component: 'Set Default Address', endpoint: '/customer/address/set-default/:addressId', method: 'PATCH', description: 'Set default address' },
    { component: 'Place Order', endpoint: '/customer/order/place', method: 'POST', description: 'Place food order' },
    { component: 'Get My Orders', endpoint: '/customer/orders', method: 'GET', description: 'Get customer orders' },
    { component: 'Get Order Details', endpoint: '/customer/order/:orderId', method: 'GET', description: 'Get order details' },
    { component: 'Cancel Order', endpoint: '/customer/order/:orderId/cancel', method: 'PATCH', description: 'Cancel pending order' },
    { component: 'Rate Order', endpoint: '/customer/order/:orderId/rate', method: 'POST', description: 'Rate delivered order' },
    { component: 'Track Order', endpoint: '/customer/order/:orderId/track', method: 'GET', description: 'Track active order' }
  ]);
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) row.style = cellStyle;
  });

  // ===== ADMIN APIs =====
  sheet = workbook.addWorksheet('Admin APIs');
  sheet.columns = [
    { header: 'Component', key: 'component', width: 15 },
    { header: 'Endpoint', key: 'endpoint', width: 35 },
    { header: 'Method', key: 'method', width: 10 },
    { header: 'Description', key: 'description', width: 35 }
  ];
  sheet.getRow(1).style = headerStyle;
  sheet.addRows([
    { component: 'Get All Users', endpoint: '/admin/users', method: 'GET', description: 'Get all registered users' },
    { component: 'Get User By ID', endpoint: '/admin/users/:userId', method: 'GET', description: 'Get user details' },
    { component: 'Block/Unblock User', endpoint: '/admin/users/:userId/block', method: 'PATCH', description: 'Block or unblock user' },
    { component: 'Get All Restaurants', endpoint: '/admin/restaurants', method: 'GET', description: 'Get all restaurants' },
    { component: 'Approve/Reject Restaurant', endpoint: '/admin/restaurants/:restaurantId/status', method: 'PATCH', description: 'Change restaurant status' },
    { component: 'Get All Riders', endpoint: '/admin/riders', method: 'GET', description: 'Get all riders' },
    { component: 'Approve/Reject Rider', endpoint: '/admin/riders/:riderId/status', method: 'PATCH', description: 'Change rider status' },
    { component: 'Get All Orders', endpoint: '/admin/orders', method: 'GET', description: 'Get all platform orders' },
    { component: 'Get Dashboard Stats', endpoint: '/admin/dashboard', method: 'GET', description: 'Get platform analytics' },
    { component: 'Get All Contacts', endpoint: '/admin/contacts', method: 'GET', description: 'Get contact submissions' },
    { component: 'Delete Contact', endpoint: '/admin/contacts/:contactId', method: 'DELETE', description: 'Delete contact message' }
  ]);
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) row.style = cellStyle;
  });

  // ===== RIDER APIs =====
  sheet = workbook.addWorksheet('Rider APIs');
  sheet.columns = [
    { header: 'Component', key: 'component', width: 20 },
    { header: 'Endpoint', key: 'endpoint', width: 38 },
    { header: 'Method', key: 'method', width: 10 },
    { header: 'Description', key: 'description', width: 35 }
  ];
  sheet.getRow(1).style = headerStyle;
  sheet.addRows([
    { component: 'Update Rider Profile', endpoint: '/rider/update-profile', method: 'PUT', description: 'Create/update rider profile' },
    { component: 'Get Rider Profile', endpoint: '/rider/profile', method: 'GET', description: 'Get rider profile data' },
    { component: 'Toggle Availability', endpoint: '/rider/toggle-availability', method: 'PATCH', description: 'Toggle online/offline status' },
    { component: 'Update Location', endpoint: '/rider/update-location', method: 'PATCH', description: 'Update GPS location' },
    { component: 'Get Available Orders', endpoint: '/rider/orders/available', method: 'GET', description: 'Get available orders nearby' },
    { component: 'Accept Order', endpoint: '/rider/orders/:orderId/accept', method: 'PATCH', description: 'Accept order for delivery' },
    { component: 'Update Delivery Status', endpoint: '/rider/orders/:orderId/status', method: 'PATCH', description: 'Update delivery status' },
    { component: 'Get My Deliveries', endpoint: '/rider/deliveries', method: 'GET', description: 'Get all past deliveries' },
    { component: 'Get Dashboard Stats', endpoint: '/rider/dashboard', method: 'GET', description: 'Get earnings and stats' }
  ]);
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) row.style = cellStyle;
  });

  // ===== DATA MODELS =====
  sheet = workbook.addWorksheet('Data Models');
  sheet.columns = [
    { header: 'Model Name', key: 'model', width: 15 },
    { header: 'Fields', key: 'fields', width: 60 }
  ];
  sheet.getRow(1).style = headerStyle;
  sheet.addRows([
    { model: 'User', fields: '_id, fullName, email, phone, dob, gender, password (hashed), photo, userType, createdAt, updatedAt' },
    { model: 'Restaurant', fields: '_id, managerId, restaurantName, address, city, state, pinCode, country, geoLocation, documents, financialDetails, contactDetails, servingHours, isOpen, status, averageRating, cuisineTypes, restaurantImage, coverImage, description, restaurantType, socialMediaLinks' },
    { model: 'Customer', fields: '_id, customerId, addressBook[], isActive, status' },
    { model: 'Rider', fields: '_id, riderId, vehicleDetails, documents, currentAddress, status, averageRating, isAvailable, financialDetails, currentLocation' },
    { model: 'Order', fields: '_id, restaurantId, customerId, riderId, orderItems[], orderStatus, rating, billDetails, deliveryAddress, paymentDetails' },
    { model: 'Menu', fields: '_id, restaurantId, menuItems[] (itemName, description, price, category, image, isAvailable, isTopRated, isRecommended, isNew)' },
    { model: 'Contact', fields: '_id, fullName, email, phone, subject, message, createdAt, updatedAt' },
    { model: 'OTP', fields: '_id, email (unique), otp (hashed), expiresAt (5 min)' }
  ]);
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) row.style = cellStyle;
  });

  // ===== MIDDLEWARE =====
  sheet = workbook.addWorksheet('Middleware');
  sheet.columns = [
    { header: 'Middleware Name', key: 'middleware', width: 20 },
    { header: 'Cookie Used', key: 'cookie', width: 15 },
    { header: 'Description', key: 'description', width: 50 }
  ];
  sheet.getRow(1).style = headerStyle;
  sheet.addRows([
    { middleware: 'AuthProtect', cookie: 'Oreo', description: 'Verifies JWT token from Oreo cookie. Attaches req.user with full user object. Used by Common, Customer, Admin, and Rider routes.' },
    { middleware: 'OTPAuthProtect', cookie: 'kitkat', description: 'Verifies JWT token from kitkat cookie (set after OTP verification). Used only for reset-password route.' },
    { middleware: 'RestaurantAuthProtect', cookie: 'Oreo', description: 'Verifies JWT token + checks userType === "restaurant". Returns 403 if not a restaurant user. Used by Restaurant routes.' }
  ]);
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) row.style = cellStyle;
  });

  // ===== ERROR CODES =====
  sheet = workbook.addWorksheet('Error Codes');
  sheet.columns = [
    { header: 'Status Code', key: 'code', width: 15 },
    { header: 'Error Type', key: 'type', width: 20 },
    { header: 'Description', key: 'description', width: 50 }
  ];
  sheet.getRow(1).style = headerStyle;
  sheet.addRows([
    { code: '400', type: 'Bad Request', description: 'Missing or invalid fields in request' },
    { code: '401', type: 'Unauthorized', description: 'Session expired / invalid token' },
    { code: '403', type: 'Forbidden', description: 'User role not authorized' },
    { code: '404', type: 'Not Found', description: 'Resource does not exist' },
    { code: '409', type: 'Conflict', description: 'Duplicate resource (e.g., email already registered)' },
    { code: '500', type: 'Internal Server Error', description: 'Server-side error' }
  ]);
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) row.style = cellStyle;
  });

  // Set column widths for all sheets
  workbook.eachSheet(ws => {
    ws.columns.forEach(col => {
      if (!col.width) col.width = 20;
    });
  });

  // Save the file
  const outputPath = path.join('d:\\cravings_678', 'Cravings_API_Documentation.xlsx');
  await workbook.xlsx.writeFile(outputPath);
  console.log(`✅ Excel file created successfully: ${outputPath}`);
}

convertMarkdownToExcel().catch(err => console.error('Error:', err));
