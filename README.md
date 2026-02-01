<div align="center">

# 📝 Task Manager Frontend

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**A modern, responsive task management application built with Vanilla JavaScript**

This project is a frontend interface that consumes a Spring Boot REST API for complete task management functionality.

[![GitHub Backend API](https://img.shields.io/badge/GitHub-Backend%20API-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Angel0zzx/task-manager-api-java)


[Features](#-features--operations) • [Demo](#-demo) • [Installation](#️-getting-started) • [API Documentation](#-api-endpoints) • [Contributing](#-contributing)

</div>

---

## 🎯 Project Overview

This Task Manager is a **lightweight, vanilla JavaScript** web application that demonstrates modern frontend development practices. It showcases:

- ✨ Clean, professional UI with CSS3 animations
- 🔄 Real-time data synchronization with backend
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚀 Zero framework dependencies
- ⚡ Fast and efficient DOM manipulation

### 🎨 Design Highlights

- Modern gradient backgrounds
- Smooth transitions and hover effects
- Intuitive color-coded actions
- Professional card-based layout
- Accessible and user-friendly interface

---

## ✨ Features & Operations

This project provides complete CRUD functionality through a RESTful API integration:

### 📋 Core Operations

| Feature | Description | Method | Endpoint |
|---------|-------------|--------|----------|
| **📥 Load Tasks** | Fetch and display all tasks | `GET` | `/api/tasks` |
| **➕ Create Task** | Add new task with title | `POST` | `/api/tasks` |
| **🔄 Update Status** | Toggle task completion | `PUT` | `/api/tasks/{id}/status` |
| **🗑️ Delete Task** | Remove task permanently | `DELETE` | `/api/tasks/{id}/delete` |
| **🔍 Search by Title** | Find tasks by keyword | `GET` | `/api/tasks/search?keyword={value}` |
| **📅 Search by Date** | Filter by specific date | `GET` | `/api/tasks/search/date?date=yyyy-MM-dd` |

### 🎨 Frontend Capabilities

- ⚡ **Dynamic UI**: No page reloads required
- 🔀 **Section Switching**: Seamless transitions between views
- ✅ **Real-time Updates**: Instant feedback after operations
- 🎯 **Task Selection**: Interactive search and selection
- 📊 **Visual Indicators**: Clear status representation (✔️/❌)
- 🛡️ **Input Validation**: Form validation and error handling
- 🌐 **Responsive Design**: Works on all screen sizes

---

## 🚀 Getting Started

### 📋 Prerequisites

Before running this project, ensure you have:

- ✅ **Modern Web Browser** (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- ✅ **Backend API Running** on `http://localhost:8080/api/tasks`
  - [Backend Repository](https://github.com/Angel0zzx/task-manager-api-java)
- ✅ (Optional) **VS Code** with Live Server extension

### 📥 Installation

1. **Clone the repository**
```bash
   git clone https://github.com/torgohd-sketch/Task-Manager-Front-Preview.git
   cd Task-Manager-Front-Preview
```

2. **Project Structure**
```
   Task-Manager-Front-Preview/
   │
   ├── index.html          # Main HTML file
   ├── Style.css           # Professional styling
   ├── Js.js              # Application logic
   ├── README.md          # Documentation
```

3. **Launch the Application**

   **Option 1: Direct Browser Opening**
```bash
   # Simply open index.html in your browser
   open index.html  # macOS
   start index.html # Windows
```

   **Option 2: VS Code Live Server** ⭐ Recommended
   - Install "Live Server" extension in VS Code
   - Right-click `index.html` → "Open with Live Server"
   - Automatic reload on file changes
   

5. **Start Using the App!** 🎉

---

## 📚 Usage Guide

### 📥 Loading Tasks
1. Click the **"Cargar Tareas"** button (blue)
2. All tasks will display in the table

### ➕ Adding a Task
1. Click **"Agregar Tarea"** (green)
2. Enter task title
3. Click **"Agregar Tarea"** to save
4. Automatically returns to task list

### ✏️ Editing a Task
1. Click **"Editar Tarea"** (orange)
2. Search for task by title
3. Click **"Buscar"**
4. Select task from results
5. Click **"Actualizar Tarea"** to change status

### 🗑️ Deleting a Task
1. Search and select the task
2. Click **"Eliminar Tarea"** (red)
3. Confirm deletion

### 🔍 Searching by Date
1. Enter date in the field
2. Click **"Buscar"**
3. View filtered results

---

## 🔗 API Endpoints

Complete API documentation for backend integration:

| Method | Endpoint | Request Body | Response | Description |
|--------|----------|--------------|----------|-------------|
| `GET` | `/api/tasks` | - | `Task[]` | Get all tasks |
| `POST` | `/api/tasks` | `{title: string}` | `Task` | Create new task |
| `PUT` | `/api/tasks/{id}/status` | - | `Task` | Toggle task status |
| `DELETE` | `/api/tasks/{id}/delete` | - | `204` | Delete task |
| `GET` | `/api/tasks/search?keyword={keyword}` | - | `Task[]` | Search by title |
| `GET` | `/api/tasks/search/date?date={date}` | - | `Task[]` | Search by date |

### Task Object Schema
```json
{
  "id": 1,
  "title": "Complete project documentation",
  "date": "2026-02-01",
  "completed": false
}
```

---

## 🛠️ Technologies Used

<div align="center">

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Backend
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring&logoColor=white)

### Tools
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

</div>

**Key Technologies:**
- **Fetch API** - Asynchronous HTTP requests
- **ES6+ JavaScript** - Modern syntax (async/await, arrow functions, template literals)
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Variables** - Maintainable theming
- **CSS Animations** - Smooth transitions

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary-color: #4a90e2      /* Blue - Primary actions */
--primary-dark: #357abd       /* Dark Blue - Hover states */

/* Semantic Colors */
--secondary-color: #50c878    /* Green - Success/Create */
--danger-color: #e74c3c       /* Red - Delete/Danger */
--warning-color: #f39c12      /* Orange - Edit/Warning */

/* Neutral Colors */
--background: #f5f7fa         /* Light background */
--surface: #ffffff            /* Card surfaces */
--text-primary: #2c3e50       /* Main text */
--text-secondary: #7f8c8d     /* Secondary text */
--border-color: #dfe6e9       /* Borders */
```

### Typography
- **Font Family:** 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings:** Bold, letter-spacing optimized
- **Body Text:** 1rem base size, 1.5 line height



---

## 🎓 What I Learned

### 💻 Frontend Development
- ✅ **API Consumption**: Using Fetch API for HTTP requests
- ✅ **Async Programming**: Mastering async/await patterns
- ✅ **DOM Manipulation**: Dynamic content updates without reloads
- ✅ **State Management**: Managing UI state in vanilla JavaScript
- ✅ **Event Handling**: User interactions and form validation
- ✅ **Error Handling**: Client-side validation and error messages

### 🎨 UI/UX Design
- ✅ **CSS Architecture**: Organizing styles with variables and naming conventions
- ✅ **Responsive Design**: Mobile-first approach and media queries
- ✅ **Animations**: Creating smooth transitions and hover effects
- ✅ **Accessibility**: Semantic HTML and user-friendly interfaces

### 🔗 Full-Stack Integration
- ✅ **REST API**: Understanding HTTP methods (GET, POST, PUT, DELETE)
- ✅ **JSON Handling**: Request/response body formatting
- ✅ **Client-Server Communication**: Connecting frontend to Spring Boot backend
- ✅ **CORS**: Cross-Origin Resource Sharing configuration

### 🧠 Software Engineering
- ✅ **Separation of Concerns**: Frontend/backend architecture
- ✅ **Code Organization**: Modular, maintainable code structure
- ✅ **Version Control**: Git workflow and best practices
- ✅ **Documentation**: Writing clear, comprehensive READMEs

### 🚀 Best Practices
- ✅ **Clean Code**: Readable, well-commented JavaScript
- ✅ **DRY Principle**: Avoiding code repetition
- ✅ **Debugging**: Browser DevTools and console debugging
- ✅ **Performance**: Optimizing DOM operations

---

## 🔮 Future Enhancements

### Planned Features
- [ ] 🌙 Dark mode toggle
- [ ] 🔐 User authentication
- [ ] 🏷️ Task categories/tags
- [ ] 📊 Task statistics dashboard
- [ ] 📤 Export tasks (Pdf)
- [ ] 🎯 Priority levels (High, Medium, Low)
- [ ] 📝 Task descriptions/notes

### Technical Improvements
- [ ] ⚡ Implement debouncing for search
- [ ] 💾 LocalStorage for offline support
- [ ] 🧪 Unit tests with Jest
- [ ] 📦 Build process with Webpack
- [ ] 🎨 CSS preprocessing with SASS
- [ ] ♿ Enhanced accessibility (ARIA labels)

---

## 👨‍💻 Author

<div align="center">

### **torgohd-sketch**

[![GitHub](https://img.shields.io/badge/GitHub-torgohd--sketch-181717?style=for-the-badge&logo=github)](https://github.com/torgohd-sketch)


</div>

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/torgohd-sketch/Task-Manager-Front-Preview?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/torgohd-sketch/Task-Manager-Front-Preview?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/torgohd-sketch/Task-Manager-Front-Preview?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/torgohd-sketch/Task-Manager-Front-Preview?style=flat-square)

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

**Made with ❤️ and JavaScript**

[⬆ Back to Top](#-task-manager-frontend)

</div>