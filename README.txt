
# Ticket Management System

This project is a **Ticket Management System** built using **Spring Boot** for the backend and **React.js** for the frontend. It simulates a ticketing system with functionalities for configuring ticket pools, managing vendors and customers, viewing system status, and processing tickets concurrently.

---

## Features

### Backend:
- **System Configuration**: Configure the total tickets, release rate, retrieval rate, and maximum capacity.
- **Vendor Operations**: Vendors add tickets to the ticket pool at a configurable rate.
- **Customer Operations**: Customers buy tickets from the pool at a configurable rate.
- **Concurrency**: Vendors and customers run concurrently using threads.
- **System Controls**: Start and stop the system dynamically.
- **Status Monitoring**: View the current status of the ticket pool, including tickets sold and tickets remaining.

### Frontend:
- User-friendly UI for configuring the system, starting/stopping operations, and monitoring ticket status.
- Dynamic display of system operations and feedback for user actions.

---

## Technologies Used

### Backend:
- **Spring Boot** (v3.4.0)
- **Java 17+**
- **Threading** for vendor and customer operations
- **REST API** for frontend-backend communication

### Frontend:
- **React.js**
- **Axios** for API calls
- **HTML/CSS** for UI design

---

## Installation

### Prerequisites
- Java JDK 17 or higher
- Node.js and npm
- Spring Boot (embedded in the project)
- An IDE (like IntelliJ IDEA, Eclipse, or VS Code) for development

### Steps to Install

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/
   cd ticket-management-system
