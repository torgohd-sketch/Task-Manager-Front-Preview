
let selectedTask = null;

async function init() {
    try {
        const response = await fetch('http://localhost:8080/api/tasks');
        const tasks = await response.json();

        const tbody = document.getElementById('task-table-body');
        tbody.innerHTML = "";

        tasks.forEach(task => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${task.title}</td>
                <td>${task.date}</td>
                <td>${task.completed ? "✔️" : "❌"}</td>
            `;
            tbody.appendChild(row);
        });

    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}


document.getElementById('load-tasks-btn').addEventListener('click', () => {
    const tabla = document.getElementById('task-table-container');
    const agregarTarea = document.getElementById('agregar-tarea');
    const editarTarea = document.getElementById('Editar-tarea');
    
    if (getComputedStyle(tabla).display === 'none') {
            tabla.style.display = 'block';
             agregarTarea.style.display = 'none';
             editarTarea.style.display = 'none';
            }
    init();    
});

document.getElementById('add-task-btn').addEventListener('click', () => {
    const tabla = document.getElementById('task-table-container');
    const agregarTarea = document.getElementById('agregar-tarea');
    const editarTarea = document.getElementById('Editar-tarea');
    editarTarea.style.display = 'none';
    tabla.style.display = 'none';
    agregarTarea.style.display = 'block';
});

document.getElementById('submit-task-btn').addEventListener('click', async (e) => {
    e.preventDefault();
    const Title = document.getElementById('title').value;
    const optionsSpan = document.getElementById('task-options'); 
    const tabla = document.getElementById('task-table-container');
    const agregarTarea = document.getElementById('agregar-tarea');
    const editarTarea = document.getElementById('Editar-tarea');

    if (!Title) {
        alert("Asigne una tarea.");
        return;
    }

    try {
        const response = await fetch('http://localhost:8080/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: Title
            })
        });


        if (response.ok) {
            alert("Tarea agregada.");
            optionsSpan.innerText = "Tarea agregada.";
            document.getElementById('title').value = ''; 

            if (getComputedStyle(tabla).display === 'none') {
            tabla.style.display = 'block';
             agregarTarea.style.display = 'none';
             editarTarea.style.display = 'none';
            }
            init();
        } else {
            const errorText = await response.text(); 
            console.error('Error response:', errorText);
            alert("Error al agregar tarea.");
        }
    } catch (error) {
        console.error('Error adding task:', error);
        alert("Error de conexión al agregar tarea.");
    }
});

document.getElementById('search-task-btn').addEventListener('click', async () => {
    const keyword = document.getElementById('keyword').value.trim();
    const optionsSpan = document.getElementById('task-options');
    const selectedSpan = document.getElementById('task-selected');

    selectedTask = null;
    selectedSpan.innerText = '—';

    if (!keyword) {
        optionsSpan.innerText = "Escribe algo";
        return;
    }

    try {
        const response = await fetch(
            `http://localhost:8080/api/tasks/search?keyword=${encodeURIComponent(keyword)}`
        );

        const tasks = await response.json();

        if (tasks.length === 0) {
            optionsSpan.innerText = "No se encontraron tareas";
            return;
        }

        optionsSpan.innerHTML = tasks.map((task, index) => `
            <div class="task-option" data-index="${index}">
                ${task.title}
            </div>
        `).join("");

        document.querySelectorAll('.task-option').forEach(div => {
            div.addEventListener('click', () => {
                selectedTask = tasks[div.dataset.index];

                selectedSpan.innerHTML = `
                    <strong>Título:</strong> ${selectedTask.title}<br>
                    <strong>Fecha:</strong> ${selectedTask.date ?? '—'}<br>
                    <strong>Estado:</strong> ${selectedTask.completed ? 'Completada' : 'Pendiente'}
                `;
            });
        });

    } catch (error) {
        console.error(error);
        optionsSpan.innerText = "Error al buscar";
    }
});
document.getElementById('update-task-btn').addEventListener('click', async () => {
    const selectedSpan = document.getElementById('task-selected');
    const optionsSpan = document.getElementById('task-options');
    const tabla = document.getElementById('task-table-container');
    const agregarTarea = document.getElementById('agregar-tarea');
    const editarTarea = document.getElementById('Editar-tarea');


    if (!selectedTask) {
        alert("Selecciona una tarea primero.");
        return;
    }

    try {
        const response = await fetch(
            `http://localhost:8080/api/tasks/${selectedTask.id}/status`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

     
     
        if (response.ok || response.status === 204) {
            alert("Tarea actualizada.");

            if (optionsSpan) optionsSpan.innerText = "";
            if (selectedSpan) selectedSpan.innerHTML = "";
            selectedTask = null;
            if (getComputedStyle(tabla).display === 'none') {
            tabla.style.display = 'block';
             agregarTarea.style.display = 'none';
             editarTarea.style.display = 'none';
            }
            init();
        } else {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            alert("Error al actualizar.");
        }

    } catch (error) {
       
        alert("Error de conexión al actualizar.");
    }
});

document.getElementById('delete-task-btn').addEventListener('click', async () => {
    const selectedSpan = document.getElementById('task-selected');
    const optionsSpan = document.getElementById('task-options');
    const tabla = document.getElementById('task-table-container');
    const agregarTarea = document.getElementById('agregar-tarea');
    const editarTarea = document.getElementById('Editar-tarea');


    if (!selectedTask) {
        alert("Selecciona una tarea primero.");
        return;
    }

    try {
        const response = await fetch(
            `http://localhost:8080/api/tasks/${selectedTask.id}/delete`,
            {
                method: 'DELETE'
            }
        );


        if (response.ok || response.status === 204) {
            alert("Tarea eliminada.");
            
            if (optionsSpan) optionsSpan.innerText = "";
            if (selectedSpan) selectedSpan.innerHTML = "";
            
            selectedTask = null;
             if (getComputedStyle(tabla).display === 'none') {
            tabla.style.display = 'block';
             agregarTarea.style.display = 'none';
             editarTarea.style.display = 'none';
            }
            init();
        } else {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            alert("Error al eliminar.");
        }

    } catch (error) {
        alert("Error de conexión al eliminar.");
    }
});



document.getElementById('search-task-by-date-btn').addEventListener('click', async () => {
    const keyword_date = document.getElementById('keyword-date').value.trim();
    const optionsSpan_date = document.getElementById('task-options-date');


    if (!keyword_date) {
        optionsSpan_date.innerText = "Escribe algo";
        return;
    }

    try {
        const response = await fetch(
            `http://localhost:8080/api/tasks/search/date?date=${encodeURIComponent(keyword_date)}`
        );

        const tasks = await response.json();

        if (tasks.length === 0) {
            optionsSpan_date.innerText = "No se encontraron tareas";
            return;
        }

        optionsSpan_date.innerHTML = tasks.map((task, index) => `
            <div class="task-option" data-index="${index}">
                ${task.title}
            </div>
        `).join("");


    } catch (error) {
        console.error(error);
        optionsSpan.innerText = "Error al buscar";
    }
});


document.getElementById('edit-task-btn').addEventListener('click', () => {
    const tabla = document.getElementById('task-table-container');
    const editarTarea = document.getElementById('Editar-tarea');
    const agregarTarea = document.getElementById('agregar-tarea');
    tabla.style.display = 'none';
    editarTarea.style.display = 'block';
    agregarTarea.style.display = 'none';

});

document.getElementById("clear-date-filter-btn").addEventListener('click', () => {
    const optionsSpan_date = document.getElementById('task-options-date');
    optionsSpan_date.innerText = "";
    document.getElementById('keyword-date').value = '';
});