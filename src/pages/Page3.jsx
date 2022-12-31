import React from 'react'
import BackToMain from '../components/BackToMain'
import styles from '../css-modules/page3.module.css'

const Page3 = () => {
    return <div>
        <BackToMain />
        <br />
        <h1>CSS. Часть №3 (Свойства блоков - отступы, размеры, характеристики)</h1>
        <br />
        <div>
            <h3>Padding - внутренний отступ блочных тегов</h3>
            <p>У Padding не может быть отрицательного значения и работает только с блочными тегами</p>
            <br />
            <div>
                <div>
                    <h4>4 записи padding: 1 сверху 2 справа 3 снизу 4 слева</h4>
                    <div class={styles.examplePaddingBlockFourValues}>
                        Блочный тег. <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                    </div>
                </div>
                <div>
                    <h4>3 записи padding: 1 сверху 2 (справа слева) 3 снизу</h4>
                    <div class={styles.examplePaddingBlockThreeValues}>
                        Блочный тег. <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                    </div>
                </div>
                <div>
                    <h4>2 записи padding: 1 (сверху снизу) 2 (справа слева) </h4>
                    <div class={styles.examplePaddingBlockTwoValues}>
                        Блочный тег. <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                    </div>
                </div>
                <div>
                    <h4> запись padding: 1 (сверху снизу справа слева) </h4>
                    <div class={styles.examplePaddingBlockOneValue}>
                        Блочный тег. <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                    </div>
                </div>
                <div>
                    <h4>Строчный тег и Padding не работают корректно</h4>
                    <span class={styles.examplePaddingString}>
                        Строчный тег. <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                    </span>
                </div>
                <br />
                <h3>Margin - внешний отступ блочных тегов</h3>
                <p>У Margin может быть отрицательного значения и работает только с блочными тегами адекватно</p>
                <br />
                <div>
                    <h4>записи margin: Работают так же как и у padding</h4>
                    <div class={styles.exampleMaringBlock}>
                        Блочный тег. <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                    </div>
                    <h4>записи margin с отрицательным значением: Заехал за границы родителя справа и слева</h4>
                    <div class={styles.exampleMaringBlockNegativeTwoValue}>
                        Блочный тег. <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                    </div>
                    <span class={styles.exampleMaringString}>
                        Строчный тег. <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                    </span>
                </div>
            </div>
            <br />
            <div>
                <h3>Width - указывает Ширину блочным и некоторым строчным тегам например img</h3>
                <p>Width - не работет со строчным тегом span и др.</p>
                <br />
                <div class={styles.widthBlockStringImg}>
                    Блочный тег. <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                </div>
                <br />
                <span class={styles.widthBlockStringImg}>
                    Строчный тег. <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                </span>
                <br />
                <br />
                <p>Тег img</p>
                <img class={styles.widthBlockStringImg} src='/Placeholder.jpg' alt='image1' />
            </div>
            <div>
                <h3>MaxWidth</h3>
                <p>В отличии от просто Width укзывает максимальную ширину
                    При которой блок не будет зависить от родителя даже если ширина родителя выше максимальной ширины блока, до максимальной ширины
                    блок будет адаптироваться под ширину родителся
                </p>
                <div class={styles.maxWidthBlockStringImg}>
                    Блочный тег. <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                </div>
            </div>
            <br />
            <div>
                <h4>MinWidth</h4>
                <p>Работает ровно наоборот MaxWidth</p>
                <p>Указывает минимальное значение блока после которого блок перестанет адаптироваться под родителся</p>
                <div class={styles.minWidthBlockStringImg}>
                    Блочный тег. <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                </div>
            </div>
            <br />
            <div>
                <h4>Картинка Width 100%, с ограничениями по minWidth и maxWidth</h4>
                <img
                    class={styles.imageWidth}
                    src='/Placeholder.jpg' alt='image2'
                />
            </div>
            <br />
            <div>
                <h3>св-во heigth</h3>
                <p>Работает подобно width только по вертикали и так же не работает со строчными тегами кроме некоторых</p>
                <div class={styles.heightBlockImg}>
                    Блочный тег. <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                </div>
                <img
                    class={styles.heightBlockImg}
                    src='/Placeholder.jpg' alt='image3'
                />
            </div>
            <div>
                <h3>св-во maxHeigth</h3>
                <p>Работает подобно maxWidth только по вертикали и так же не работает со строчными тегами кроме некоторых</p>
                <p>Так как блок ограничен в пикселях, то если будет много текста, он может выйти за рамки блока</p>
                <div class={styles.maxHeightBlockImg}>
                    Блочный тег. <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                </div>
                <img
                    class={styles.maxHeightBlockImg}
                    src='/Placeholder.jpg' alt='image4'
                />
                <h3>св-во minHeigth</h3>
                <p>Работает подобно minWidth только по вертикали и так же не работает со строчными тегами кроме некоторых</p>
                <div class={styles.minHeightBlock}>
                    Блочный тег. <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores praesentium at eos assumenda recusandae expedita, unde nisi, enim itaque nihil temporibus animi magni repellendus, molestiae, ipsum reprehenderit! Tenetur, minus, earum!
                </div>
            </div>
            <br />
            <br />
            <div>
                <h2>Важно</h2>
                <p>В нашем обнуляющем стиле указано св-во box-sizing коорое применяется для изменения алкоритма расчёта ширины и высоты элемента</p>
                <p>св-во box-sizing наследуется и указано для всех элементов страницы</p>
                <p>Присвоенное значение св-ва box-sizing, а именно border-box меняет стандартный расчёт ширины и высоты элемента на более удобный</p>
                <p>По умолчанию width и heigth задают штрину и высоту контента не включая в себя значения отступов полей и границ</p>
                <p>Со значением border-box включает в себя значения полей padding и границ border, но не внешних отступов margin</p>
                <p>ПРИМЕР</p>
                <div className={styles.exampleBoxSizing}>
                    Ширина блока включает в себя внутринние отступы padding и границы border, но не включает внешние границы margin (Если используется обнуляющие настройки box-sizing и border-box)
                </div>
            </div>
            <div>
                <h4>Overflow</h4>
                <p>Управляет отображением содержания блочного элемента</p>
                <p>Наприме если максимальная высота блока меньше чем текста в нём, при котором текст как бы вылазит за границы ограниченного блока</p>
                <p>Но св-во Overflow c параметром hidden или avto позволит скрыть текст не умещающийся в ограниченный блок</p>
                <p>При этом чтобы была возмодность просмотреть скрытый тест можно создать область прокрутки содержимого за это отвечают параметры Scroll или Auto</p>
                <br />
                <div class={styles.exampleOverflowVisible}>
                    <p>Параметр Visible</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam aliquid, veritatis quasi ex illo officiis eum reiciendis quia, quam fuga ut sunt at obcaecati voluptas! Tempora porro sequi dolorum!
                </div>
                <br />
                <br />
                <div class={styles.exampleOverflowHidden}>
                    <p>Параметр Hidden</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam aliquid, veritatis quasi ex illo officiis eum reiciendis quia, quam fuga ut sunt at obcaecati voluptas! Tempora porro sequi dolorum!
                </div>
                <br />
                <div class={styles.exampleOverflowScroll}>
                    <p>Параметр Scroll</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam aliquid, veritatis quasi ex illo officiis eum reiciendis quia, quam fuga ut sunt at obcaecati voluptas! Tempora porro sequi dolorum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam aliquid, veritatis quasi ex illo officiis eum reiciendis quia, quam fuga ut sunt at obcaecati voluptas! Tempora porro sequi dolorum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam aliquid, veritatis quasi ex illo officiis eum reiciendis quia, quam fuga ut sunt at obcaecati voluptas! Tempora porro sequi dolorum!
                </div>
                <br />
                <div class={styles.exampleOverflowAuto}>
                    <p>Параметр Auto (Подключает полосы прокрутки, только тогда, когда они нужны)</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam aliquid, veritatis quasi ex illo officiis eum reiciendis quia, quam fuga ut sunt at obcaecati voluptas! Tempora porro sequi dolorum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam aliquid, veritatis quasi ex illo officiis eum reiciendis quia, quam fuga ut sunt at obcaecati voluptas! Tempora porro sequi dolorum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam aliquid, veritatis quasi ex illo officiis eum reiciendis quia, quam fuga ut sunt at obcaecati voluptas! Tempora porro sequi dolorum!
                </div>
                <br />
            </div>
            <div>
                <h2>Св-во Display</h2>
                <p>Данное своёство имеет массу значений (Такие как flex и grid будут рассмотрены в позже)</p>
                <div>
                    <p>db - display: block заставляет элемент становиться блочным, наприммер тег span</p>
                    <p>Он занимает всю ширину окна, на него действуют вышеописанны св-ва width heigth padding margin</p>
                    <span className={styles.exampleDisplayBlock}>
                        Это строчный блок со свойством display: block.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero eos blanditiis eveniet error fuga saepe, impedit, nobis soluta veritatis ratione, mollitia debitis hic dignissimos distinctio recusandae ipsam totam possimus!
                    </span>
                </div>
                <div>
                    <p>db - display: inline заставляет элемент становиться строчным, наприммер тег div</p>
                    <p>Блок не занимает всю ширину, выстаривается в строку, на него перестают действовать вышеописанны св-ва width heigth padding margin</p>
                    <div className={styles.exampleDisplayInline}>
                        Это блок со свойством display: inline.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero eos blanditiis eveniet error fuga saepe, impedit, nobis soluta veritatis ratione, mollitia debitis hic dignissimos distinctio recusandae ipsam totam possimus!
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <p>db - display: inline-block; заставляет элемент становиться строчным, наприммер тег div</p>
                    <p>Блок не занимает всю ширину, выстаривается в строку, на него начинают действовать вышеописанны св-ва width heigth padding margin</p>
                    <span className={styles.exampleDisplayInlineBlock}>
                        Это  блок со свойством display: inline-block
                    </span>
                </div>
                <br />
                <div>
                    display-none временно убирает элементн, место под него не резервируется и выглядит это так как буд-то элемента и не было
                </div>
            </div>
        </div>
    </div>
}

export default Page3
