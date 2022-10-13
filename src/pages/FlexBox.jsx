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

const FlexBox = () => {
    return <>
        <BackToMain />
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
    </>
}

export default FlexBox
