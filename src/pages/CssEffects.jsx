import React from 'react'
import BackToMain from '../components/BackToMain'
import Effects from '../css-modules/CssEffects.module.css'

export default function CssEffects() {
    return <>
        <BackToMain />
        <h1>Css Effects</h1>
        <p>most popular websites have numerous animation effects. You might be so used to effects that you fail to notice them while using the web. Think of sliding galleries, <b>hover over</b> or <b>cursor effects</b>, applying effects to web pages is an essential skill for any front end developer. In this video, you will learn what effects are and briefly explore common effects being used currently. So what exactly is an effect? The formal definition of the word effect is a change that is a result or consequence of an action or other cause animations are a type of effect that has brought life like quality to web pages and today they are an all pervasive part of web development. In other words, animations are graphics in motion, transitioning over time. The idea of animation had been around for many years before technology was good enough to integrate it into online experiences. The graphics interchange form or gifts can arguably be labeled as the first attempt to bring effects to web pages. The first gift ever created was of a moving airplane by Steve Wilhite. In 1987, gifts were followed by flash animations. Flash made it possible to add audio and video components as well as create dynamic websites. But flash needed a special browser plug into work and that was a major limitation. When CSS came into use, it provided a simple, easy to learn solution that also made it possible to manipulate formats such as scalable vector graphics or SVG s. There are plenty of programs and libraries that front end developers can use to add animation to websites today libraries such as J. Query and Pop Motion add fantastic visuals to sites. The downside is that they are hard to learn and can increase the development time of websites considerably. C S s, on the other hand, is still popular for adding effects to websites because it is easy to learn and simplifies web development when it comes to basic animations and effects in general, CSS still offers more value in relation to time and resources. With some practice, CSS can produce surprisingly good effects. The possibilities for creating effects with CSS are endless. Yet some effects are more popular than others. You will now discover a few that you can effectively create with CSS. The <b>hover effect</b> which you learned about in the previous lesson is possibly one of the most frequently used effects on web pages. Today developers use it to show that an element is matched by highlighting it in some way when the mouse hovers over it. Examples include the lightening or darkening of an element or even other effects that highlight the placement of the cursor. Another popular effect is changing the appearance of the cursor instead of the conventional arrows. You can add animated effects that change the color or gradient and so on. You are surely familiar with <b>sliding galleries</b> and <b>slide shows</b>. They are commonly used to display collections of images or text boxes and then you get <b>video backgrounds</b> which are commonly added to the top of the screen to illustrate movement, an effect that gained popularity since its introduction is the <b>parallax</b> effect. It gives users the perception of depth and dimension with foreground elements moving faster than the background elements. It is likely that you are familiar with the <b>back to the top effect</b>. It is a simple element like a button that enables quickly scrolling all the way to the top of the page. From the current button placement, developers commonly used <b>element and color transitions</b> to emphasize focus on objects. As users scroll through web pages. <b>Full screen snapping</b> is a quick transition from one page to another that occurs automatically while users are scrolling. Now that you are familiar with some popular effects, let's briefly visit the pros and cons of adding effects on web pages. The primary driving factor of web pages these days is to attract the attention of users web pages that use animation and effects optimally keep the attention of users without overwhelming them. Effects help highlight the special features on a given page. CSS styling and effects improve the creativity and aesthetics of websites. But too much of it can also lead to distraction and drive users away from the page. Besides more animations, increase the size of your CSS files which can cause your web page to load slowly in areas with low bandwidth. Nonetheless, effects improve online experiences in general and are especially used to create intuitive navigation. You should now understand what effects and animations are. You also got a quick overview of the history of effects and the most popular effects used on the Web. Today, lastly, you explore the benefits and disadvantages of adding effects to websites. Websites. Without effects are not only dull, but users also have a hard time finding their way around such sites, mastering CSS effects will enable you to create Web pages that users love to use.</p>
        <br />
        <h2>Text effects</h2>
        <p>Have you ever opened a website with a lot of texts and thought, wow, there are two very different reasons you might have that reaction. Texts or words can make a website engaging and interesting, but they can also make you look dull and cause users to lose attention. With the help of CSS, you can make the most of texts by adding interesting effects. First, I will explain how to use the text-overflow property that determines how overflowing content is displayed on your website. The first example sets the text-overflow property with the value ellipsis. Let's take note of two CSS properties for the texts class, white-space and text-overflow. The white-space CSS property controls how white-space inside an element is handled. The white-space property in this code has a value of no wrap. The text-overflow property specifies what to do with the content if it overflows its container. It has several possible values such as hidden to hide the content, or scroll to add a scroll bar. It is important to note that the text-overflow property here is set to ellipsis. An ellipsis is three dots that represent the texts that is clipped.</p>
        <p>If I hover over the overflowing text which is present inside, the hidden text is displayed. As soon as I move the cursor away from the block, the text is again substituted by the ellipsis. This is very similar to the second example, which sets the value of text-overflow to clip.</p>
        <div style={{ border: "solid black 1px", padding: 5 }}>
            <h3>Ellipses property</h3>
            <p>In this example, the additional content is truncated to fit within the limits of the box.</p>
            <p>{`.textEllipsis {
            border: 2px solid brown;
            width: 300px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }`}</p>
            <p>{`.textEllipsis:hover {
            overflow: visible;
        }`}</p>
            <p className={Effects.textEllipsis}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, rerum. Dignissimos minima, in quam deleniti, nostrum aut odio totam illum quia ab cupiditate iure quae, veniam dolorum atque corrupti reiciendis.</p>
        </div>
        <div style={{ border: "solid black 1px", padding: 5 }}>
            <h3>Clip property</h3>
            <p>If I hover over with the cursor, the clipped text is displayed.</p>
            <p>{`.textClip {
                    border: 2px solid brown;
                    width: 300px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: clip;
                }`}</p>
            <p>{`.textClip:hover {
                    overflow: visible;
                }`}</p>
            <p className={Effects.textClip}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, rerum. Dignissimos minima, in quam deleniti, nostrum aut odio totam illum quia ab cupiditate iure quae, veniam dolorum atque corrupti reiciendis.</p>
            <br />
        </div>
        <div style={{ border: "solid black 1px", padding: 5 }}>
            <h3>Vertical Text</h3>
            <p>In the third example, I demonstrate how to create vertical text. In the output, the words 12-15 items are placed vertically within the otherwise horizontal texts. I do this by putting those words inside a separate p tag with class named vert. Then in the CSS code, I set the writing mode property to be vertical-rl.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eum, saepe vitae omnis, praesentium qui inventore voluptatibus deserunt totam consequatur? Ipsum consequatur molestiae facere neque! Molestiae officia quaerat possimus!</p>
            <p className={Effects.vert}>12-15 items</p>
            <p>that they rotate seasonally</p>
            <br />
        </div>
        <div style={{ border: "solid black 1px", padding: 5 }}>
            <h3>Word wrap</h3>
            <p>The next example demonstrates the word wrap property. Word wrap determines how the words in a paragraph break up and wrap onto the next slide. This property has different values such as break word, normal, initial, and a few others. In this example, I use the value break word. As a result, the words illustration and property are both broken up across multiple lines.</p>
            <p>{`.wrap {
                width: 50px;
                overflow: hidden;
                border: 2px solid brown;
                word-wrap: break-word;
            }`}</p>
            <p className={Effects.wrap}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div style={{ border: "solid black 1px", padding: 5 }}>
            <h3>Text shadow</h3>
            <p>In the next two examples, I will add text effects using simple CSS code.</p>
            <ul>
                <li>{`1 - > X-coordinate`}</li>
                <li>{`2 - > Y-coodrinate`}</li>
                <li>{`3 - > Blut radius`}</li>
                <li>{`4 - > Shadow color`}</li>
            </ul>
            <p>{`text-shadow: 0 0 30px green, 0 0 5px white`}</p>
            <div style={{ backgroundColor: "black", fontFamily: 'Papyrus', padding: 10 }}>
                <h3 style={{ textShadow: "0 0 30px green, 0 0 5px white" }}>Text shadow example</h3>
            </div>
            <div style={{ backgroundColor: "black", fontFamily: 'Papyrus', padding: 10, textAlign: "center", fontSize: 25 }}>
                <h3 className={Effects.glow}>Text glow shadow example</h3>
            </div>
            <p>Glow css:</p>
            <p>{`.glow {
                color: rgb(237, 237, 151);
            text-shadow:
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 31px #fff,
            0 0 55px rgb(255, 226, 4),
            0 0 91px rgb(255, 226, 4),
            0 0 100px rgb(255, 226, 4),
            0 0 122px rgb(255, 226, 4),
            0 0 140px rgb(255, 226, 4);
            }`}</p>
        </div>
        <p>In this example, I use a property called text shadow, which has a shorthand with four values. The first value is the x-coordinate, which represents the horizontal shadow. The second is the y-coordinate, which represents the vertical shadow. The third is the blur radius, and the fourth is the shadow color.</p>
        <p>This next example explores an extension of the same idea. My HTML code has two heading tags, each with the class name glow. In the corresponding CSS code I've added the text shadow effects for that class. I can use the output to determine whether I need to adjust the color effects until I'm happy with it.</p>
        <p>That's all my examples. In this video, you learned how to add effects to your text using a few simple rules in CSS.</p>


    </>
}
