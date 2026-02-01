Task List (Frontend)

Frontend project built with HTML, CSS, and vanilla JavaScript, connected to a Java Spring Boot REST API.
api for the proyect: https://github.com/Angel0zzx/task-manager-api-java 
an api where i participate

It allows users to create, list, search, select, update, and delete tasks through a simple web interface.

🚀 Features

📋 List all tasks

➕ Add new tasks

🔍 Search tasks by keyword

📅 Search tasks by date

👆 Select a specific task

✏️ Update task status

🗑️ Delete tasks

🧠 Main Flow

User loads all tasks

User searches tasks by keyword

Multiple matching tasks are shown

User must select one task

The selected task can then be:

Updated

Deleted

The selected task is stored in memory using selectedTask

🛠️ Technologies Used

HTML5

CSS3

JavaScript (Vanilla)

Fetch API

Spring Boot REST API (Backend)

🔌 API Endpoints Used
GET    /api/tasks
POST   /api/tasks
GET    /api/tasks/search?keyword=
GET    /api/tasks/search/date?date=
PUT    /api/tasks/{id}/status
DELETE /api/tasks/{id}/delete

⚙️ Requirements

Backend running at:

http://localhost:8080


Modern web browser

CORS enabled on the backend

📂 Project Structure
/index.html
/Style.css
/Js.js

📌 Notes

No frameworks used

All logic handled with vanilla JavaScript

Great project to practice:

DOM manipulation

Fetch API

Global state (selectedTask)

Full CRUD operations
