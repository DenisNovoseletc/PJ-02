const entities = [
  {
      text: {
          text1: 'Rostov-on-Don<br>LCD admiral',
          text2: '81 m2',
          text3: '3.5 months',
          text4: 'Upon request',
      },
      img: 'img/image1.png' 
  },
  {
      text: {
          text1: 'Sochi<br>Thieves',
          text2: '105 m2',
          text3: '4 months',
          text4: 'Upon request',
      },
      img: 'img/image2.png'
  },
  {
      text: {
          text1: 'Rostov-on-Don<br>Patriotic',
          text2: '93 m2',
          text3: '3 months',
          text4: 'Upon request',
      },
      img: 'img/image3.png'
  }
];
  const img = document.querySelector('.content');
  const dots = document.querySelectorAll('.dot'); 
  const links = document.querySelectorAll('.slider__link'); // Получаем все ссылки
  const prev = document.querySelector('.left-arrow');
  const next = document.querySelector('.right-arrow');
  const textElements = [
    document.querySelector('.sidebar__text-p1'),
    document.querySelector('.sidebar__text-p2'),
    document.querySelector('.sidebar__text-p3'),
    document.querySelector('.sidebar__text-p4')
];   
  let currentIndex = 0;
  
  
  const setEntity = (index) => {   
      const entity = entities[index]; // Получаем текущий объект из массива
      // Обновляем тексты с помощью цикла
      Object.values(entity.text).forEach((text, i) => {
          textElements[i].innerHTML = text; // Устанавливаем текст для каждого элемента
      });
    img.style.backgroundImage = `url(${entities[index].img})`;
    
    // Сбрасываем активные состояния для точек и ссылок
    dots.forEach(dot => dot.classList.remove('active'));
    links.forEach(link => link.classList.remove('active'));
  
    // Устанавливаем активный класс для текущего элемента
    dots[index]?.classList.add('active');
    links[index]?.classList.add('active');
  };
  
  // Инициализация слайдера
  setEntity(currentIndex);
  
  prev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : entities.length - 1; // Циклический переход
    setEntity(currentIndex);
  });
  
  next.addEventListener('click', () => {
    currentIndex = (currentIndex < entities.length - 1) ? currentIndex + 1 : 0; // Циклический переход
    setEntity(currentIndex);
  });
  
  // Добавление обработчиков событий для точек и ссылок
  const addClickListener = (element, index) => {
    element.addEventListener('click', (event) => {
      event.preventDefault(); // Предотвращаем переход по ссылке
      currentIndex = index; // Устанавливаем текущий индекс на индекс точки или ссылки
      setEntity(currentIndex); // Обновляем слайдер
    });
  };
  
  dots.forEach((dot, index) => addClickListener(dot, index));
  links.forEach((link, index) => addClickListener(link, index));
  