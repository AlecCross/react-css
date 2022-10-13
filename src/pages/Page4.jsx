import React from 'react'
import BackToMain from '../components/BackToMain'
import styles from '../css-modules/page4.module.css'

const Page4 = () => {
    return <div>
        <BackToMain />

=========================================
<br />
border
Универсальное свойство border позволяет одновременно установить толщину,
стиль и цвет границы вокруг элемента.
border: 1px solid #000; (размер стиль цвет)

Основные стили -solid dotted dashed

        <div class={styles.exampleBlock}>
            <a href="">text</a>
            Блочный тег <br />
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Alias quidem consequatur suscipit.
            Soluta deleniti dolorem maiores aperiam
            possimus temporibus voluptatum sunt et saepe,
            veniam, debitis obcaecati. Sequi,
            eius tenetur beatae?
        </div>
        <span class={styles.exampleString}>
            Строчный тег <br />
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Alias quidem consequatur suscipit.
            Soluta deleniti dolorem maiores aperiam
            possimus temporibus voluptatum sunt et saepe,
            veniam, debitis obcaecati. Sequi,
            eius tenetur beatae?
        </span>
        <p>
            <img class={styles.exampleImage} src='/Placeholder.jpg' alt="" />
        </p>
        <div class={styles.exampleBlockTopSide}>
            <a href="">text</a>
            Блочный тег <br />
            border-top: 5px dashed #000; <br />
            <br />
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Alias quidem consequatur suscipit.
            Soluta deleniti dolorem maiores aperiam
            possimus temporibus voluptatum sunt et saepe,
            veniam, debitis obcaecati. Sequi,
            eius tenetur beatae?
        </div>
        <div class={styles.exampleBlockWithOutTopSide}>
            <a href="">text</a>
            Блочный тег <br />
            border: 5px dashed #000;
	        border-top: 0px; /* или none */ <br />
            <br />
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Alias quidem consequatur suscipit.
            Soluta deleniti dolorem maiores aperiam
            possimus temporibus voluptatum sunt et saepe,
            veniam, debitis obcaecati. Sequi,
            eius tenetur beatae?
        </div>
=========================================
<br />
border-radius
Устанавливает радиус скругления уголков блока.
border-radius:50%; - кргуг

Можно использовать вместе с overflow: hidden;
<br />

<div class={styles.exampleBlockBorderRadius}>
            <a href="">text</a>
            Блочный тег <br />
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Alias quidem consequatur suscipit.
            Soluta deleniti dolorem maiores aperiam
            possimus temporibus voluptatum sunt et saepe,
            veniam, debitis obcaecati. Sequi,
            eius tenetur beatae?
        </div>
        <p>
            <img class={styles.examplePartialBorderRadius} src='/Placeholder.jpg' alt="" />
        </p>
        <p>border-radius может работать и без границы border</p>
        <p>
            <img class={styles.examplePartialBorderRadiusWithoutBorder} src='/logo192.png' alt="" />
        </p>
=========================================
<br />
<h3>outline</h3>
<p>Универсальное свойство, одновременно устанавливающее цвет,
стиль и толщину внешней границы на всех четырех сторонах элемента.
В отличие от линии, задаваемой через border, свойство outline
не влияет на положение блока и его ширину.
Также нельзя задать параметры линии на отдельных сторонах элемента,
</p>
<p>outline применяется сразу ко всем четырём сторонам.</p>
<p>Раньше не действовало св-во border-radius (Сейчас действует 2021й год)</p><br />
<div class={styles.exampleBlockOutLine}>
            <a href="">text</a>
            Блочный тег <br />
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Alias quidem consequatur suscipit.
            Soluta deleniti dolorem maiores aperiam
            possimus temporibus voluptatum sunt et saepe,
            veniam, debitis obcaecati. Sequi,
            eius tenetur beatae?
        </div>
        <br />
        <br />
        <span class={styles.exampleBlockOutLine}>
            Строчный тег <br />
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Alias quidem consequatur suscipit.
            Soluta deleniti dolorem maiores aperiam
            possimus temporibus voluptatum sunt et saepe,
            veniam, debitis obcaecati. Sequi,
            eius tenetur beatae?
        </span>
        <br />
        <br />
        <br />
=========================================
<br />
<h3>box-shadow Добавляет тень к элементу.</h3>
<p>box-shadow: 5px 15px 10px 15px #000</p>
<p>box-shadow: сдвиг_по_гориз сдвиг_по_верт радиус расстояние</p>

<p>Еще можно добавить тень внутрь блока</p>
<p>box-shadow: 5px 15px 10px 15px #000</p>

Можно добавить много теней. На тень влияет свойство border-radius.<br />

<div class={styles.exampleBlockBoxShadow}>
            <a href="">text</a>
            Блочный тег <br />
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            consectetur adipisicing elit.
        </div>
        <div class={styles.exampleBlockBoxShadowInset}>
            <a href="">text</a>
            Блочный тег <br />
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            consectetur adipisicing elit.
        </div>
=========================================
<br />
opacity
Определяет уровень прозрачности элемента.

Отличие opacity:0; от display:none; в том что блок не убирается из верстки а только становиться прозрачным, то есть занимаемое им место остается. Так же, с прозрачными элементами все еще можно взаимодействовать, например кликать по ссылкам.<br />
<div class={styles.exampleBlockOpacity}>
            <a href="">text</a>
            
            Блочный тег <br />
            opacity: 50%;<br />
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            consectetur adipisicing elit.
        </div>
=========================================
<br />
visibility
Предназначен для отображения или скрытия элемента.
Отличие visibility: hidden; от display:none; в том что блок не убирается из верстки а только скрывается, то есть занимаемое им место остается.

Отличие visibility: hidden; от opacity:0; в том что блок скрывается и взаимодействовать с ним нельзя.<br />
=========================================
    </div>
}

export default Page4
