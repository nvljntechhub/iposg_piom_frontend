# IPOSG - Integrated Product & Order Management

## 🚀 Project Overview

The **IPOSG (Integrated Product & Order Management System Gateway)** is a mid-scale React/Next.js application. It functions as a robust dashboard for managing product inventory and associated customer orders.

This application is built using **Next.js** for server-side rendering/static generation benefits, and leverages **Material UI (MUI)** for a professional, component-driven user interface. **Redux Toolkit** is used for scalable and predictable state management.

### GIT

- **Public Repository:** https://github.com/nvljntechhub/iposg_piom_frontend

### Demo

- **Screen Recording:** https://www.loom.com/share/83d806017a864cee9e96ecc61f751baf

---

## 📋 Core Functional Requirements Implementation

### 1. Product List Page (`/products`)

| Feature                | Implementation Details                                                                                                                                    |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Data Display**       | Material UI `DataGrid` component for a performant, enterprise-grade display.                                                                              |
| **Search Filter**      | Text input to search by **Product Name**. Handled via **API call** (Server-side).                                                                         |
| **Category Filter**    | MUI `Select` dropdown for filtering by `category`. Handled via **API call** (Server-side).                                                                |
| **Price Range Filter** | MUI `Slider` component for filtering price range.(Client-side).                                                                                           |
| **Pagination**         | **Server-side Pagination**. Parameters (`page`, `pageSize`, `filters`) are managed in Redux (`productSlice`) and passed as query strings in the API call. |

### 2. Product Details Page (`/products/[id]`)

| Feature                 | Implementation Details                                                                                                                                              |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Data Display**        | Displays **Image, Price, Description, Stock,** and **Ratings** (Read-only data).                                                                                    |
| **Stock Update**        | Form field allowing input/update of the `stockQuantity`. Handled by the **`updateProductStock`** thunk.                                                             |
| **Availability Toggle** | MUI `Switch` component to toggle the product **Active/Inactive status** (Toggles `availabilityStatus`). Handled by the **`updateProductAvailabilityStatus`** thunk. |
| **API Call**            | **`createAsyncThunk`** is used for all updates, dispatching a **`PATCH`** request to the product resource to update stock or status attributes.                     |

### 3. Order List Page (`/orders`)

| Feature              | Implementation Details                                                                                                    |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| **Data Fetching**    | Fetches related orders from a separate endpoint using the **`fetchOrders`** `createAsyncThunk`.                           |
| **Data Display**     | Standard MUI `Table` component with sorting and filtering.                                                                |
| **Status Badges**    | Implemented using the **`OrderStatusBadge`** reusable component for statuses (Pending / Shipped / Delivered / Cancelled). |
| **State Management** | Dedicated **`orderSlice`** handles fetching and local (client-side) sorting/filtering logic.                              |

---

## 🛠️ Technical Stack & Dependencies

- **Framework:** Next.js **(v16)**
- **Language:** TypeScript
- **UI Library:** Material UI (MUI v7)
- **State Management:** Redux Toolkit (RTK)
- **Form Management:** React Hook Form
- **Toast Notifications:** MUI `Snackbar`
- **Required Node.js Version:** **20.9.x**

---

## 💻 Setup and Installation

### Prerequisites

- Node.js (**v20.9.x**)
- npm

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/nvljntechhub/iposg_piom_frontend.git
    cd iposg
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Author

- Navalojanan Navaretnarajah
