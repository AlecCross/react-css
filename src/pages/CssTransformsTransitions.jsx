import React from 'react'
import TransformsTransitions from '../css-modules/CssTransformsTransitions.module.css'
import BackToMain from '../components/BackToMain'

export default function CssTransformsTransitions() {
    return <>
        <BackToMain/>
        <h1>CSS Transforms and transitions</h1>
        <p>So far, you have learned how animation can be used to add interactivity and responsiveness to a web page. Eventually, you'll be able to create amazing animations with CSS. But to get started, this video will introduce you to two properties with which you can create basic animations. In this video, you will learn how to use the transform and transition properties. The Syntax of the transform and transition properties are similar. You simply add transform or transition and the value. But what exactly do these properties do? The transform property modifies the spatial position of an element. For instance, it can change its scale and angle, but these changes are not very effective or user friendly because they are instantaneous to really create the illusion of motion. You need to control the speed of this effect. To do this, developers use the transition property in conjunction with the transformed property. Let's explore how these two properties work together. For example, you can set up your H one elements to rotate zero degrees by default, but by using the hover pseudo class and the transform property, you can let the element rotate to 20 degrees when the mouse hovers over it. Without a transition, the rotation will be instant. But by adding the transition property with the value transform to s the rotation will animate over two seconds. Now that you know the basics about the transform and transition properties, let's explore a practical example. I already set up an html file that contains a div tag with the class container and in it to other div tags. The first div tag contains the letter A with a class called A. The second contains the letter B with a class called B. Let's view the CSS file. It has two class selectors dot A and dot B and each has a margin property. This is just to add a space in between the developments. First I add the transform property to the A class. There are a number of key word and function values inside this property. I choose skew X from the suggestion list that appears this will tilt the letter on its X access. You can also choose to skew it on its Y axis or even on both axes. I add a value of 20 degrees. Next I add a transformed property to the B. Class as well. But this time I use the keyword, rotate and add the value of 20 degrees. This will cause a different effect. Let's inspect the output A display skew almost like an italic letter but towards the other way be on the other hand looks normal but it is turned sideways by 20 degrees. Since these transform effects are instantaneous, you do not notice them as they are applied to change this. You need to add the transition property. I add the transition property to both classes with the value of five seconds. This time you can notice how the letters transform because it happens slower. Let's move on to a more complex example. I open another html file with a class called box. Inside a div tag element. First I will write the rules for the box, then I will add rules using a hover pseudo class and grouping selectors to perform transformations on the box. The initial output will be a green box. Let's go to the CSS file and write the rules for the box. The first property I add for the box is display as grid. Then I set the width and height to 240 pixels and also add a margin of 100 pixels so that the box will display in the center of the output screen. Next I add a background color with an RgB value. Then I specified the border properties. I add the border radius and give it a value of 12 pixels using shorthand notation, I specify the border to be solid and add an RgB value in hex format. Finally, I set the border with 24 pixels. These properties basically define the with style and color of the border so far the output is a light green box with a darker green border. Now let's move back to the CSS to add some effects. I add a class selector for the box and then add the hover pseudo class. This is so that the transform effect that I will add. Next will only happen when I hover over the box. Let's add the transformed property. This time I add, rotate around the Z axis, the Z axis is perpendicular to the screen. So when I hover over the box it will rotate from my point of view. I add rotates at an angle of 60 degrees. Let's inspect the output. When I hover over the box it rotates 60 degrees. Let's add a few more effects. I add a light coral background color to the hover pseudo class. When I hover over the box now it also changes the background color. Let's also change the opacity to 50%. Now when I hover over the box it changes the opacity of the box too. All these effects are fine but they happen too fast. Just like in the first example of the letters, I need to add the transition property. If I want to slow down the transform effect, I add the value of two seconds. When I hover over the box. This time the change happens gradually over a span of two seconds. Well done. You now know how to use the transform and transition properties in this video, You learned how to create a basic animation using the transform and transition properties in conjunction. A number of different effects like these can be performed with the help of the two properties, transform and transition and combining them with pseudo classes such as hover active and others</p>
        <div>
            <h2>
                Transform
            </h2>
            <h3>Syntax</h3>
            {
                `element {
                    transform: value;
                }`
            }
        </div>
        <div>
            <h2>
                Transtion
            </h2>
            <h3>Syntax</h3>
            {
                `element {
                    transtion: value;
                }`
            }
        </div>
        <h2>Control the speed of the effect</h2>
        <h3>Transtion property</h3>
        <h3>Transform property</h3>
        <div>
            <h2>
                Transform
            </h2>
            <h3>Syntax</h3>
            {
                `h1 {
                    transform: rotate(0deg);
                }
                h1:hover {
                    transform: rotate(20deg)
                }`
            }
        </div>
        <div>
            <h2>
                Transtion
            </h2>
            <h3>Syntax</h3>
            {
                `h1 {
                    transition: transform 2s;
                }`
            }
        </div>
        <div>
            <h4>Example</h4>
            <p>css code:</p>
            <p>
                {`.a {
    margin: 30px;
    transform: skewX(20deg);
    transition: 5s;
}`

                }</p>
            <p>
                {`.b {
    margin: 100px;
    transform: rotate(20deg);
    transition: 5s;
}`}
            </p>
            <div>
                <div className={TransformsTransitions.a}>A</div>
                <div className={TransformsTransitions.b}>B</div>
            </div>
        </div>
        <h4>Another Example</h4>
        <p>
            {`.box {
    display: grid;
    width: 240px;
    height: 240px;
    margin: 100px;
    background-color: rgba(55, 255, 5, 0.5);
    border-radius: 12px;
    border: solid #6feb6f 4px;
}`
            }</p>
        <p>
            {`.box:hover 
{
    transform: rotateZ(60deg);
    background-color: lightcoral;
    opacity: 50%;
    transition: 2s;
}`}
        </p>
        <div className={TransformsTransitions.box}></div>
    </>


}
