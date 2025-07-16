# 👩‍💼 Employee Management SPA

A modern SPA built with **React**, **Vite**, **TailwindCSS**, **React Hook Form**, and **Yup** for managing employees through a dynamic and user-friendly interface.

## 🚀 Project Goal

This project aims to implement a responsive and accessible form interface that collects and validates employee data, based on specific business rules. The app focuses on managing CRUD operations for employees and prepares the data for integration with a backend API.

---

<!-- ## 📋 Employee Data Requirements

The form captures the following **mandatory** employee fields:

| Field                | Type     | Input       | Characters Max | Example                    |
|---------------------|----------|-------------|----------------|----------------------------|
| Name                | String   | Manual      | 50             | María                      |
| Last Name           | String   | Manual      | 50             | García                     |
| Middle Name         | String   | Manual      | 50             | López                      |
| Employee Number     | Integer  | Auto        | 5              | `E0010`                    |
| Company             | String   | Manual      | 50             | Walmart                    |
| Gender              | String   | Manual      | 16             | Femenino                   |
| Birthdate           | Date     | Manual      | 100            | 15 de marzo de 1985        |
| Country             | String   | Manual      | 150            | México                     |
| State               | String   | Manual      | 150            | Puebla                     |
| CURP                | String   | Manual      | 18             | XEXX010101HNEXXXA4         |
| RFC                 | String   | Manual      | 13             | XAXX010101000              |
 -->
---

<!-- ### 🔁 Employee Number Auto-generation Rules

The employee number is generated automatically and must:

- Begin with the letter `E`
- Be followed by a 4-digit consecutive number
- Increment by 10 for each new entry
- Always have 5 total characters

✅ Example: `E0010`

--- -->

## 🧰 Technologies Used

- ⚛️ [React](https://reactjs.org/)
- 🧩 [Vite](https://vitejs.dev/)
- 💅 [TailwindCSS](https://tailwindcss.com/)
- 📋 [React Hook Form](https://react-hook-form.com/)
- ✅ [Yup](https://github.com/jquense/yup) for schema-based form validation

---

## 📦 Installation

To run this project locally:

```bash
# Clone the repo
git clone https://github.com/Jcdelega/Employees_Management_SPA.git
cd Employees_Management_SPA

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## ✅ Validation with Yup

Every input is validated using `Yup` to enforce business rules such as max lengths and required fields. Error messages appear dynamically on form submission or interaction.

---

## 🎨 UI

The interface uses **TailwindCSS** for mobile-first responsive design and utility-based styling to ensure a clean and consistent user experience.

---

## 📄 License

MIT License – feel free to use and improve the project.

