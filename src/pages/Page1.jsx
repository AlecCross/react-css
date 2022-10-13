import React from 'react'
import BackToMain from '../components/BackToMain'
import styles from '../css-modules/page1.module.css'

const Page1 = () => {
    return <>
        <BackToMain/>
        <br />
        <h1>CSS. Часть №1 (Синтаксис + Обнуление)</h1>
        <div>
            <p>Lorem <span>ipsum dolor sit amet</span>, consectetur adipisicing elit. Quae magni sapiente enim soluta! Numquam natus fuga accusantium, delectus necessitatibus fugit totam iure rerum mollitia aliquam quae! Dolores, harum, quae? Expedita.</p>
            <p class={styles.bigred}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae at optio, esse neque officia id voluptatum voluptatem eligendi dolores ratione sunt itaque necessitatibus cum, aut voluptate sapiente earum repellendus molestias! Illum dolores ducimus animi unde rem amet velit sed quasi earum quo perferendis porro atque saepe vero alias ipsa repudiandae facilis praesentium natus accusantium quisquam nemo iusto, deserunt est. Natus dolore quisquam quas magnam, voluptas quos repellendus sequi commodi harum perspiciatis, blanditiis eaque et dolorum in sint. Facilis, non quidem voluptatum natus ipsa laboriosam vel rem ullam beatae qui sint eveniet suscipit. Accusantium rem sit eligendi enim adipisci, mollitia dolores.</p>
        </div>
        <hr />
    </>
}

export default Page1
