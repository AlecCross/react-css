import React from 'react'
import BackToMain from '../components/BackToMain'
import styles from '../css-modules/page5.module.css'

const Page5 = () => {
    return <>
        <BackToMain />
        <div>
            <h2>Ссылка на методичку по background:</h2>
            <a href="https://fls.guru/cssbackground.html"
                target="_blank"
                rel="noopener noreferrer">
                <h3>CSS свойство background. Фон для сайта // «Фрилансер по жизни»
                </h3>
            </a>
        </div>
        {/* 
        <p> background:</p>
        Универсальное свойство background позволяет установить одновременно несколько характеристик фона а именно:

        <ul class="list">
            <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eius ab sint velit eligendi iure eum nam maiores facere laboriosam recusandae placeat mollitia, dolorem animi eveniet ad repellat reiciendis accusantium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eius ab sint velit eligendi iure eum nam maiores facere laboriosam recusandae placeat mollitia, dolorem animi eveniet ad repellat reiciendis accusantium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eius ab sint velit eligendi iure eum nam maiores facere laboriosam recusandae placeat mollitia, dolorem animi eveniet ad repellat reiciendis accusantium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eius ab sint velit eligendi iure eum nam maiores facere laboriosam recusandae placeat mollitia, dolorem animi eveniet ad repellat reiciendis accusantium!
            </li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
        </ul>

        <div class="block">

        </div> */}

        {/* li{dfsgsdfgds}            
        <li>dfsgsdfgds</li>
        <li>dfsgsdfgds</li>
        <li>dfsgsdfgds</li>
        <li>dfsgsdfgds</li>
        <li>dfsgsdfgds</li> */}

=======================================================
background-color - Определяет цвет фона элемента.
=======================================================
background-image - Устанавливает фоновое изображение для элемента.

Так же значением свойства можно указать градиент:
линейный:
background:linear-gradient(to top, #fefcea, #f1da36);
радиальный:
background:radial-gradient(ellipse at center, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%);

Подробнее о градиентах:
http://htmlbook.ru/css3-na-primerakh/lineinyi-gradient

Инструмент создания готового кода:
https://www.colorzilla.com/gradient-editor/
=======================================================
background-position - Задает начальное положение фонового изображения, установленного с помощью свойства background-image.
=======================================================
background-repeat - Определяет, как будет повторяться фоновое изображение, установленное с помощью свойства background-image.
no-repeat -  Устанавливает одно фоновое изображение в элементе без его повторений, положение которого определяется свойством background-position (по умолчанию в левом верхнем углу). Аналогично no-repeat no-repeat.
repeat - Фоновое изображение повторяется по горизонтали и вертикали. Аналогично repeat repeat.
repeat-x - Фоновый рисунок повторяется только по горизонтали. Аналогично repeat no-repeat.
repeat-y - Фоновый рисунок повторяется только по вертикали. Аналогично no-repeat repeat.
inherit -Наследует значение родителя.
space - Изображение повторяется столько раз, чтобы полностью заполнить область; если это не удаётся, между картинками добавляется пустое пространство.
round - Изображение повторяется так, чтобы в области поместилось целое число рисунков; если это не удаётся сделать, то фоновые рисунки масштабируются.
=======================================================
background-attachment - Устанавливает, будет ли прокручиваться фоновое изображение вместе с содержимым элемента.
fixed - Делает фоновое изображение элемента неподвижным.
scroll - Позволяет перемещаться фону вместе с содержимым.
inherit - Наследует значение родителя.
local - Фон фиксируется с учётом поведения элемента. Если элемент имеет прокрутку, то фон будет прокручиваться вместе с содержимым, но фон выходящий за рамки элемента остаётся на месте.
=======================================================
background-size  - Масштабирует фоновое изображение согласно заданным размерам.
значение - Задает размер в любых доступных для CSS единицах.
проценты - Задает размер фоновой картинки в процентах от ширины или высоты элемента.
auto - Если задано одновременно для ширины и высоты (auto auto), размеры фона остаются исходными; если только для одной стороны картинки (100px auto), то размер вычисляется автоматически исходя из пропорций картинки.
cover - Масштабирует изображение с сохранением пропорций так, чтобы его ширина или высота равнялась ширине или высоте блока.
contain - Масштабирует изображение с сохранением пропорций таким образом, чтобы картинка целиком поместилась внутрь блока.
Если установлено одно значение, оно задает ширину фона, второе значение принимается за auto. Пропорции картинки при этом сохраняются. Использование двух значений через пробел задает ширину и высоту фоновой картинки.
=======================================================
Свойство background позволяет задать несколько изображений через запятую,
причем со своими настройками позиционарования маштабирования и прокрутки
=======================================================
    </>
}

export default Page5
