function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const container = document.getElementById('menu-content-middle-hidden');
    const btn = document.getElementById('toggle-btn');
    
    container.classList.toggle('menu-visible');
    container.classList.toggle('menu-hidden');

    if (container.classList.contains('menu-visible')) {
        btn.innerText = '↑'; 
    } else {
        btn.innerText = 'Explore Our Menu';
    }
}

function toggleBlog() {
    const container2 = document.getElementById('blog-cards-hidden');
    const btn2 = document.getElementById('blockView_btn');
    
    container2.classList.toggle('block-visible');
    container2.classList.toggle('block-hidden');

    if (container2.classList.contains('block-visible')) {
        btn2.innerText = '↑'; 
    } else {
        btn2.innerText = 'View All';
    }
}

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



let currentIndex = 0;
const cards = document.querySelectorAll('.testimonial-item');
const wrapper = document.getElementById('cardsWrapper');
const thumb = document.getElementById('sliderThumb');

function updateCarousel() {
  // Сдвиг карточек
    const offset = -currentIndex * (330);
    wrapper.style.transform = `translateX(${offset}px)`;

  // Сдвиг ползунка (процентное соотношение)
    const progress = (currentIndex / (cards.length )) * 100;
    thumb.style.marginLeft = `${progress}%`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
    }
    
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
    }
});


document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement.parentElement;
        const answer = item.querySelector('.faq-answer');
    
      // Переключение видимости текста
        answer.classList.toggle('show');
    
      // Смена знака
        button.textContent = answer.classList.contains('show') ? '-' : '+';
    });
});


const form = document.getElementById('contact-form');
const inputs = form.querySelectorAll('.required');
const checkbox = document.getElementById('termsCheck');
const button = document.getElementById('submitBtn');

function validateForm() {
    // Проверяем, что все поля заполнены
    const allInputsFilled = Array.from(inputs).every(input => input.value.trim() !== '');
    
    // Проверяем, что галочка стоит
    const isChecked = checkbox.checked;

    // Кнопка активна только если оба условия верны
    button.disabled = !(allInputsFilled && isChecked);
}

// Добавляем слушатели событий на все поля и чекбокс
inputs.forEach(input => input.addEventListener('input', validateForm));
checkbox.addEventListener('change', validateForm);