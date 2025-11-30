// script.js — Практична робота №6 To-Do List (100% працює)

function addTask() {
    // 1. Отримуємо текст із поля вводу
    const input = document.getElementById('taskInput');
    const text = input.value.trim();

    // 2. Перевіряємо, чи не порожнє поле
    if (text === '') {
        alert('Введіть завдання!');
        return;
    }

    // 3. Створюємо новий елемент списку <li>
    const li = document.createElement('li');

    // 4. Додаємо текст завдання
    li.innerHTML = `
        <span>${text}</span>
        <div class="buttons">
            <button class="complete-btn">Complete</button>
            <button class="remove-btn">Remove</button>
        </div>
    `;

    // 5. Кнопка Complete — перекреслює завдання
    li.querySelector('.complete-btn').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // 6. Кнопка Remove — видаляє завдання
    li.querySelector('.remove-btn').addEventListener('click', function() {
        li.remove();
    });

    // 7. Додаємо завдання в список
    document.getElementById('taskList').appendChild(li);

    // 8. Очищаємо поле вводу
    input.value = '';
}

// Дозволяємо додавати завдання по Enter
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});