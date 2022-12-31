import React from 'react'
import BackToMain from '../components/BackToMain'
import styles from '../css-modules/flex/flexbox.module.css'
import styles1 from '../css-modules/flex/flexbox1.module.css'
import styles2 from '../css-modules/flex/flexbox2.module.css'
import styles3 from '../css-modules/flex/flexbox3.module.css'
import styles4 from '../css-modules/flex/flexbox4.module.css'
import styles5 from '../css-modules/flex/flexbox5.module.css'
import styles6 from '../css-modules/flex/flexbox6.module.css'
import styles7 from '../css-modules/flex/flexbox7.module.css'
import styles8 from '../css-modules/flex/flexbox8.module.css'
import styles9 from '../css-modules/flex/flexbox9.module.css'
import styles10 from '../css-modules/flex/flexbox10.module.css'
import styles11 from '../css-modules/flex/flexbox11.module.css'
import styles12 from '../css-modules/flex/flexbox12.module.css'
import styles13 from '../css-modules/flex/flexbox13.module.css'
import styles14 from '../css-modules/flex/flexbox14.module.css'
import styles15 from '../css-modules/flex/flexbox15.module.css'

const FlexBox = () => {
    return <>
        <BackToMain />
        <p>Note: ‘|’ stands for alternatives or OR.</p>
        <br />
        <h1>Flexbox</h1>
        <br />
        <p>The syntax for creating a flexbox:</p>
        <p>{`selector{
                display: flex | inline-flex
            }`
        }</p>
        <br />
        <p>
            Here the selector can refer to any of the following flex attributes
        </p>
        <br />
        <ul>
            <li>Attribute selector</li>
            <li>Class Selector</li>
            <li>ID Selector</li>
            <li>Type Selectors</li>
            <li>Universal Selectors</li>
        </ul>
        <br />
        <p>The display relates to how you want the selector to be shown. Setting display to flex makes the given selector a flex box. Setting display to inline-flex makes the selector a flex box container while will be inline. </p>
        <br />
        <h2>Properties for flexbox container</h2><br />
        <h3>flex-direction: row | row-reverse | column | column-reverse</h3><br />
        <p>It is possible to specify the direction your elements will follow. Traditionally text goes from left to right which is flex’s default setting however it can be set from right to left or even top to bottom. The four flex-direction are:</p><br />
        <ul>
            <li>row : organized from left to right </li>
            <li>row-reverse: organized from right to left </li>
            <li>column: organized from top to bottom</li>
            <li>column-reverse: organized from bottom to top. </li>
        </ul><br />
        <p><b>flex-wrap: wrap | nowrap</b></p><br />
        <p>The standard layout is to plot the elements from left to right in a straight line. The wrap feature allows you customize this to match the size of the window displaying the page. </p><br />
        <ul>
            <li>wrap: Automatically wrap the items with as the window space gets smaller. </li>

            <li>Nowrap: Default setting, items remain rigid and don’t respond  to adjustments made to the window size.</li>
        </ul>
        <br />
        <p><b>align-items: flex-start | flex-end | center |Stretch</b></p><br />

        <p>
            This determines how the flex items are to be positioned on the page. Items can be aligned in a variety of ways

        </p><br />
        <ul>
            <li>Flex-start: Similar to standard writing, items start at the top left-hand corner and are positioned from left to right </li>
            <li>Flex-end: Position begins in the bottom right hand corner. </li>
            <li>Center: Item is positioned from the center. </li>
            <li>Stretch: item expands to fill the container. </li>
        </ul><br />

        <p><b>justify-content: flex-start | flex-end | center | space-between | space-evenly</b></p><br />

        <p>Justify-content determines the alignment of the flex items.</p> <br />

        <ul>
            <li>Flex-start: goes from right to left along the main axis. </li>
            <li>Flex-end: goes from left to right along the main axis. </li>
            <li>Center: Starting at the middle, alignments expands from there. </li>
            <li>Space-between: first and last item are flush with the left and right wall respectively, every other item is evenly spaced. </li>
            <li>Space-evenly: each item is equidistant from each other and the boundary wall </li>
        </ul><br />

        <h3>Properties for flexbox items (child)</h3><br />
        <p><b>flex-grow: factor of flex’s main size</b></p>  <br />

        <p>This attribute enables the flex container to grow proportionally to the other containers present. </p><br />

        <p><b>flex-shrink: factor of flex’s main size</b></p><br />

        This allows elements to shrink in relation to items around it.

        <p><b>flex-basis: auto | factor of main’s size | measurement unit</b></p><br />

        The sets the initial main size of an item. It can be overridden if other stylized elements are configured.

        <p><b>order:position in flex /* Set ascending by default */</b></p><br />

        The standard positioning of items is by source order, however this feature will enable you to configure where the items appear on the page.

        <p><b>align-self:  start | center | end | stretch</b></p><br />

        <p>This determines where on the page the child items will be positioned. Similar to the main flex attributes, start is to the left and end is to the right.</p><br />

        <p>Без Флекса</p>
        <div className={styles.block}>
            <div className={styles.block__row}>
                <div className={styles.block__column}>
                    <div className={styles.block__item}>
                        1
                    </div>
                </div>
                <div className={styles.block__column}>
                    <div className={styles.block__item}>
                        2
                    </div>
                </div>
                <div className={styles.block__column}>
                    <div className={styles.block__item}>
                        3
                    </div>
                </div>
            </div>
        </div>
        <h2>Регулировка флекм элементов по основной оси</h2>
        <p>display: flex;</p>
        <p>justify-content: flex-start;</p>
        <div className={styles1.block}>
            <div className={styles1.block__row}>
                <div className={styles1.block__column}>
                    <div className={styles1.block__item}>
                        1
                    </div>
                </div>
                <div className={styles1.block__column}>
                    <div className={styles1.block__item}>
                        2
                    </div>
                </div>
                <div className={styles1.block__column}>
                    <div className={styles1.block__item}>
                        3
                    </div>
                </div>
            </div>
        </div>
        <p>display: inline-flex;</p>
        <div className={styles2.block}>
            <div className={styles2.block__row}>
                <div className={styles2.block__column}>
                    <div className={styles2.block__item}>
                        1
                    </div>
                </div>
                <div className={styles2.block__column}>
                    <div className={styles2.block__item}>
                        2
                    </div>
                </div>
                <div className={styles2.block__column}>
                    <div className={styles2.block__item}>
                        3
                    </div>
                </div>
            </div>
        </div>
        <p>display: flex</p>
        <p>justify-content: end</p>
        <div className={styles3.block}>
            <div className={styles3.block__row}>
                <div className={styles3.block__column}>
                    <div className={styles3.block__item}>
                        1
                    </div>
                </div>
                <div className={styles3.block__column}>
                    <div className={styles3.block__item}>
                        2
                    </div>
                </div>
                <div className={styles3.block__column}>
                    <div className={styles3.block__item}>
                        3
                    </div>
                </div>
            </div>
        </div>
        <p>display: flex</p>
        <p>justify-content: center</p>
        <div className={styles4.block}>
            <div className={styles4.block__row}>
                <div className={styles4.block__column}>
                    <div className={styles4.block__item}>
                        1
                    </div>
                </div>
                <div className={styles4.block__column}>
                    <div className={styles4.block__item}>
                        2
                    </div>
                </div>
                <div className={styles4.block__column}>
                    <div className={styles4.block__item}>
                        3
                    </div>
                </div>
            </div>
        </div>
        <p>display: flex</p>
        <p>justify-content: space-between;</p>
        <p>Созжаётся пространство между элементами флекс, но не отступы</p>
        <div className={styles5.block}>
            <div className={styles5.block__row}>
                <div className={styles5.block__column}>
                    <div className={styles5.block__item}>
                        1
                    </div>
                </div>
                <div className={styles5.block__column}>
                    <div className={styles5.block__item}>
                        2
                    </div>
                </div>
                <div className={styles5.block__column}>
                    <div className={styles5.block__item}>
                        3
                    </div>
                </div>
            </div>
        </div>
        <p>display: flex</p>
        <p>justify-content: space-around;</p>
        <p>Пространство добавляется слева и справа элемента флекс</p>
        <div className={styles6.block}>
            <div className={styles6.block__row}>
                <div className={styles6.block__column}>
                    <div className={styles6.block__item}>
                        1
                    </div>
                </div>
                <div className={styles6.block__column}>
                    <div className={styles6.block__item}>
                        2
                    </div>
                </div>
                <div className={styles6.block__column}>
                    <div className={styles6.block__item}>
                        3
                    </div>
                </div>
            </div>
        </div>
        <h2>Регулировка флекм элементов не по основной оси</h2>
        <p>display: flex;</p>
        <p>align-items: stretch;</p>
        <div className={styles7.block}>
            <div className={styles7.block__row}>
                <div className={styles7.block__column}>
                    <div className={styles7.block__item}>
                        1
                    </div>
                </div>
                <div className={styles7.block__column}>
                    <div className={styles7.block__item}>
                        2
                        <p>Более высокий блок</p>
                    </div>
                </div>
                <div className={styles7.block__column}>
                    <div className={styles7.block__item}>
                        3
                    </div>
                </div>
            </div>
        </div>
        <p>display: flex;</p>
        <p>align-items: flex-start;</p>
        <div className={styles8.block}>
            <div className={styles8.block__row}>
                <div className={styles8.block__column}>
                    <div className={styles8.block__item}>
                        1
                    </div>
                </div>
                <div className={styles8.block__column}>
                    <div className={styles8.block__item}>
                        2
                        <p>Более высокий блок</p>
                    </div>
                </div>
                <div className={styles8.block__column}>
                    <div className={styles8.block__item}>
                        3
                    </div>
                </div>
            </div>
        </div>
        <p>display: flex;</p>
        <p>align-items: flex-end;</p>
        <div className={styles9.block}>
            <div className={styles9.block__row}>
                <div className={styles9.block__column}>
                    <div className={styles9.block__item}>
                        1
                    </div>
                </div>
                <div className={styles9.block__column}>
                    <div className={styles9.block__item}>
                        2
                        <p>Более высокий блок</p>
                    </div>
                </div>
                <div className={styles9.block__column}>
                    <div className={styles9.block__item}>
                        3
                    </div>
                </div>
            </div>
        </div>
        <p>display: flex;</p>
        <p>align-items: center;</p>
        <div className={styles10.block}>
            <div className={styles10.block__row}>
                <div className={styles10.block__column}>
                    <div className={styles10.block__item}>
                        1
                    </div>
                </div>
                <div className={styles10.block__column}>
                    <div className={styles10.block__item}>
                        2
                        <p>Более высокий блок</p>
                    </div>
                </div>
                <div className={styles10.block__column}>
                    <div className={styles10.block__item}>
                        3
                    </div>
                </div>
            </div>
        </div>
        <p>display: flex;</p>
        <p>align-items: baseline;</p>
        <p>Подгоняет флекс элементы по строке самого большого элемента</p>
        <div className={styles11.block}>
            <div className={styles11.block__row}>
                <div className={styles11.block__column}>
                    <div className={styles11.block__item}>
                        1
                    </div>
                </div>
                <div className={styles11.block__column}>
                    <div className={styles11.block__item} style={{ fontSize: 80 }}>
                        2
                        <p>Более высокий блок</p>
                    </div>
                </div>
                <div className={styles11.block__column}>
                    <div className={styles11.block__item}>
                        3
                    </div>
                </div>
            </div>
        </div>
        <h2>flex-wrap переносить ли элементы флекс на сл строку при уменьшеении окна браузера</h2>
        <p>display: flex;</p>
        <p>flex-wrap: nowrap;</p>
        <div className={styles12.block}>
            <div className={styles12.block__row}>
                <div className={styles12.block__column}>
                    <div className={styles12.block__item}>
                        1
                    </div>
                </div>
                <div className={styles12.block__column}>
                    <div className={styles12.block__item}>
                        2
                    </div>
                </div>
                <div className={styles12.block__column}>
                    <div className={styles12.block__item}>
                        3
                    </div>
                </div>
                <div className={styles12.block__column}>
                    <div className={styles12.block__item}>
                        4
                    </div>
                </div>
                <div className={styles12.block__column}>
                    <div className={styles12.block__item}>
                        5
                    </div>
                </div>
                <div className={styles12.block__column}>
                    <div className={styles12.block__item}>
                        6
                    </div>
                </div>
            </div>
        </div>
        <p>display: flex;</p>
        <p>flex-wrap: wrap;</p>
        <div className={styles13.block}>
            <div className={styles13.block__row}>
                <div className={styles13.block__column}>
                    <div className={styles13.block__item}>
                        1
                    </div>
                </div>
                <div className={styles13.block__column}>
                    <div className={styles13.block__item}>
                        2
                    </div>
                </div>
                <div className={styles13.block__column}>
                    <div className={styles13.block__item}>
                        3
                    </div>
                </div>
                <div className={styles13.block__column}>
                    <div className={styles13.block__item}>
                        4
                    </div>
                </div>
                <div className={styles13.block__column}>
                    <div className={styles13.block__item}>
                        5
                    </div>
                </div>
                <div className={styles13.block__column}>
                    <div className={styles13.block__item}>
                        6
                    </div>
                </div>
            </div>
        </div>
        <p>display: flex;</p>
        <p>flex-wrap: wrap-revers;</p>
        <div className={styles14.block}>
            <div className={styles14.block__row}>
                <div className={styles14.block__column}>
                    <div className={styles14.block__item}>
                        1
                    </div>
                </div>
                <div className={styles14.block__column}>
                    <div className={styles14.block__item}>
                        2
                    </div>
                </div>
                <div className={styles14.block__column}>
                    <div className={styles14.block__item}>
                        3
                    </div>
                </div>
                <div className={styles14.block__column}>
                    <div className={styles14.block__item}>
                        4
                    </div>
                </div>
                <div className={styles14.block__column}>
                    <div className={styles14.block__item}>
                        5
                    </div>
                </div>
                <div className={styles14.block__column}>
                    <div className={styles14.block__item}>
                        6
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p>
                {`.flex-container{
                            display: flex;
                            justify-content: center;
                            flex-direction: column;
                            flex-wrap: wrap;
                            align-items:flex-end;
                            gap:10px;
                            `}
            </p>
            <p>{`.box{
                    background-color: aquamarine;
                    border-radius: 5px;
                    margin: 2px;
                    padding: 10px;
                }`}</p>
            <p>{`.box3{
                            background-color: blanchedalmond;
                            align-self: center;
                    }`
            }
            </p>
        </div>
        <div className={styles15.flexContainer}>
            <div className={styles15.box}>  One..</div>
            <div className={styles15.box}>  Two..</div>
            <div className={styles15.box3}>  Three..</div>
            <div className={styles15.box}>  Four..</div>
            <div className={styles15.box}>  Five..</div>
            <div className={styles15.box}>  Six..</div>
            <div className={styles15.box}>  Seven..</div>
        </div>
    </>
}

export default FlexBox
