import React from 'react'
import BackToMain from '../components/BackToMain'
import styles from '../css-modules/page2.module.css'

const Page2 = () => {
    return <div class={styles.body}>
        <BackToMain/>
        <br />
        <h1 class={styles.h1}>Фрилансер по жизни</h1>
        <br />
        <p class={styles.text}>
            Поставь лайк всем видосам фрилансера и получи +1000 очков кармы. Поставь лайк всем видосам фрилансера и получи +1000 очков кармы.
            Поставь лайк всем видосам фрилансера и получи +1000 очков кармы. Поставь лайк всем видосам фрилансера и получи +1000 очков кармы.
        </p>
        <br />
        <h2 class={styles.h2}>CSS Часть №2. Свойства шрифта и текста</h2>
        <br />
        <p class={styles.bold}>
            Этот текст жирный. Очень жирный текст.
        </p>
        <br />
        <p class={styles.red}>
            Этот текст красный. Очень красный текст.
        </p>
        <br />
        <br />
        <h2 class={styles.h2}>Заметки CSS. (Свойства текста и шрифта)</h2>
        <div>
            <p>font-family: "Имя шрифта", "Имя шрифта", тип шрифта</p>
            <p>Устанавливает семейство шрифта</p>
            <p>Типы шрифта:</p>
            <p>serif — шрифты с засечками (антиквенные), типа Times;</p>
            <p>sans-serif — рубленные шрифты (шрифты без засечек или гротески), типичный представитель — Arial;</p>
            <p>cursive — курсивные шрифты;</p>
            <p>fantasy — декоративные шрифты;</p>
            <p>monospace — моноширинные шрифты, ширина каждого символа в таком семействе одинакова (шрифт Courier).</p>
            <br />
            <p>font-size</p>
            <p>Определяет размер шрифта элемента.</p>
            <br />
            <p>font-style:</p>
            <p>Определяет начертание шрифта — обычное, курсивное или наклонное.</p>
            <p>normal - Обычное начертание текста.</p>
            <p>italic - Курсивное начертание. </p>
            <p>oblique - Наклонное начертание. Курсив и наклонный шрифт при всей их похожести не одно и то же. Курсив это специальный шрифт имитирующий рукописный, наклонный же образуется путем наклона обычных знаков вправо. </p>
            <br />
            <p>font-weight:</p>
            <p>Устанавливает насыщенность шрифта.</p>
            <p>100 - thin</p>
            <p>300 - lite</p>
            <p>400 - normal</p>
            <p>500 - medium</p>
            <p>600 - semibold</p>
            <p>700 - bold</p>
            <p>900 - black</p>
            <br />
            <br />
            <p>Свойства текста</p>

            <p>color</p>
            <p>Определяет цвет текста. Для задания цветов обычно используются числа в шестнадцатеричном коде, </p>
            <p>либо с помощью RGB.</p>
            <br />
            <p>text-align</p>
            <p>Определяет горизонтальное выравнивание текста в пределах элемента. </p>
            <p>center - Выравнивание текста по центру.</p>
            <p>justify - Выравнивание по ширине, что означает одновременное выравнивание по левому и правому краю. Чтобы произвести это действие браузер в этом случае добавляет пробелы между словами.</p>
            <p>left - Выравнивание текста по левому краю. </p>
            <p>right - Выравнивание текста по правому краю.</p>
            <br />
            <p>text-decoration</p>
            <p>Добавляет оформление текста в виде его подчеркивания, перечеркивания, линии над текстом и мигания. </p>
            <p>Одновременно можно применить более одного стиля, перечисляя значения через пробел. Это свойство наследуется и может принимать значения:</p>
            <p>line-through - Создает перечеркнутый текст.</p>
            <p>overline - Линия проходит над текстом.</p>
            <p>underline - Устанавливает подчеркнутый текст. </p>
            <p>none - Отменяет все эффекты, в том числе и подчеркивания у ссылок, которое задано по умолчанию.</p>
            <br />
            <p>text-shadow: горизонтальное_смещение вертикальное_смещение размер цвет;</p>
            <p>Добавляет тень к тексту.</p>
            <p>Прмер text-shadow: 1px 1px 1px #000;</p>
            <br />
            <p>text-transform</p>
            <p>Управляет преобразованием текста в заглавные или прописные символы.</p>
            <p>capitalize  - Первый символ каждого слова в предложении будет заглавным. Остальные символы свой вид не меняют.</p>
            <p>lowercase - Все символы текста становятся строчными (нижний регистр). </p>
            <p>uppercase - Все символы текста становятся прописными (верхний регистр).</p>
            <p>none - Не меняет регистр символов.</p>
            <br />
            <p>text-indent</p>
            <p>Устанавливает величину отступа первой строки блока текста. При меняется, если нам нужно создать что-то типа красной строки.</p>
            <br />
            <p>letter-spacing</p>
            <p>Определяет интервал между символами (буквами). Используется когда нужно разрядить текст.</p>
            <br />
            <p>line-height</p>
            <p>Устанавливает межстрочный интервал текста. Широко применяется при верстке текста.</p>
            <br />
            <p>white-space</p>
            <p>Управляет свойствами пробелов между словами. Пименяется в основном со значением </p>
            <p>nowrap которое запрещает перенос строки. Таким образом весь текст отображается в одну строку и не ломается. Значение normal вернет все как было.</p>
            <br />
            <p>word-spacing</p>
            <p>Устанавливает интервал между словами.</p>
            <br />
        </div>
        <hr />
    </div>
}

export default Page2
