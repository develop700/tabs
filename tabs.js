// Add listener for users window if a DOM content loaded (without images and fonts).
// Включаем обработчик событий для всего окна (проверит, что всё ДОМ-дерево загружено, не дожидаясь загрузки картинок и шрифтов).
window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    
// Для вкладки создаем переменную tab, а для всего блока вкладок - info. Для отображаемого на текущей вкладке контента - tabContent.
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

// Функция, которая скрывает все tabContent, начиная с параметра 'a'
    function hideTabContent (a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);// покажет только первый tabContent

// Функция. Если текущая вкладка - 'b', отобразит контент с индексом 'b':
    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

// Добавим обработчик событий на клик пользователя ВНУТРИ БЛОКА info по текущей вкладке tab[i]
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);// скроет все tabContent
                    showTabContent(i);// покажет текущий (i-й) tabContent
                    break;
                }
            }
        }

    });
    
});
