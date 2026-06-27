const menuBtn = document.getElementById('burger_btn');
const menu = document.getElementById('dropdown-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Закрытие меню при клике вне его области 
window.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add('hidden');
    }
    
});

