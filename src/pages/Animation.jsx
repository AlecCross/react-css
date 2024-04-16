import React from 'react'
import BackToMain from '../components/BackToMain'
import animation from '../css-modules/animation.module.css'

export default function Animation() {
    return <>
        <BackToMain />
        <h1>Animation</h1>
        <p>
            By now you should know the basics of CSS animation. It's time to explore some more advanced properties and rules. In this video, you will learn how to use the animation property in combination with the <b>@keyframe rule</b> to create advanced animations. When developers want to create complex animations, they use the animation property. But to control the execution of the steps of the animation, they use the <b>@keyframe rule</b>. Next, let's explore the syntax of the <b>@keyframe rule</b>, and the animation property. The <b>@keyframe rule</b> specifies the name of the animation, and the individual keyframes for the animation. You define each keyframe with a keyframe selector and CSS styles for that keyframe. The <b>@keyframe rule</b> can also use the optional keywords, from and to, to show transitions. The animation name links the animation to a specific keyframe rule. The animation property has a number of subproperties like animation name, animation delay, and so on. You can use a shorthand CSS syntax to set all the subproperties of the animation property. But say you want one or more of them to have the default settings, you simply leave them out. However, each of the subproperties can be listed individually as well. To understand animation cues, let's explore a simple animation of a clock with hour and minute hands. The HTML code for the clock will consist of only three basic elements, which are the div class called clock, and inside it, a div class called minutes, and another div class called hours. Take note how both hours and minutes have an additional common class called hand. In order to let the clock work, you need this additional hand class with its own CSS rules. But since the focus of this lesson is to understand the animation part of the CSS, the basic styling properties of the clock are not covered now. All that you need to know is that you create two classes, clock and hand, and insert style rules that specify the basic layout and appearance of the clock and hands. So far, the output of the CSS is a static blue clock face and red hands with white borders. Now, you can configure the animation for both the hour and minutes classes. The only difference between the two will be the speed at which they change positions. For the minutes class, you add the animation property with the value of six seconds, infinite linear. For the hours class, you add the animation property with the value of cycle 60 seconds infinite linear. These two rules set the animation name cycle to complete iterations for respective timings over an infinite time duration and linear timing function. Since the other animation properties are not mentioned, they are set to the default values. Finally, you can add the <b>@keyframe rule</b>. Type @keyframes cycle, and then the two special keywords, namely from and to. For the from keyword, add the transform property with the value of rotate zero degrees. For the to keyword, add the transform property with the value of rotate 360 degrees. Since keyframes is a type of rule in CSS, we will be adding these details inside curly braces. There will be a follow-up reading about keyframes after this video. What exactly does this CSS animation do? Well, it uses the transform property to rotate the cycle associated with both the hours and minute classes from the value of 0-360 degrees. The combination of properties and rules will give a seamless appearance of a clock in continuous motion. In this video, you've learned how to use the animation property and the <b>@keyframe rule</b> together to get a specific effect. CSS offers endless creativity when it comes to animation. The properties and rules you covered can be configured in many more ways. For instance, you can combine them with other elements like images to achieve amazing animations using purely CSS.
        </p>
        <h2>Animation property</h2>
        <h3>Syntax</h3>
        <p>{`animation: div { animation: myanimation 3s infinite }`}</p>
        <p>{`animation: name duration timing-function`}</p>
        <h2><b>@keyframe rule</b></h2>
        <h3>Syntax</h3>
        <p>{`@keyframes animationname { keyframes-selector { css-styles; }}`}</p>
        <p>{`@keyframes animationname { from{ color: blue;} to { color:red; }}`}</p>
        <h3>Example</h3>
        <p><b>css code:</b></p>
        <p>
            {`.clock {
                color: blue;
            width: 150px;
            margin-top: 50px;
            height: 150px;
            border-radius: 50%;
            border: solid blue 1px;
            }
        `}</p>
        <p>{`
            .minutes {
                animation: cycle 6s infinite linear;
            position: relative;
            top: 65px
            }
        `}</p>
        <p>{`.hours {
                color: red;
            animation: cycle 60s infinite linear;
            position: relative;
            top: 50px
            }
            `}</p>
        <p>{`
            @keyframes cycle {
                from {transform: rotate(0deg); }
            to {transform: rotate(360deg); }
            }`}
        </p>
        <p><b>html code:</b></p>
        <p>
            <p>{`<div className={animation.clock}>`}</p>
            <p>{`<div className={animation.minutes}>--------------</div>`}</p>
            <p>{`<div className={animation.hours}>------------</div>`}</p>
            <p>{`</div>`}</p>
        </p>
        <div className={animation.clock}>
            <div className={animation.minutes}>--------------</div>
            <div className={animation.hours}>------------</div>
        </div>
        <h2>CSS keyframes</h2>
        <p>In this reading, you will become acquainted with the @keyframes rule and you’ll learn how to use it with the animation property in CSS. The rules covered so far are for alignment and styling of web pages using CSS. Keyframes are a type of at-rule which are represented by the '@' suffix. At-rules are statements inside CSS that describe how to behave or perform certain actions. In line with that, keyframes are defined as '@keyframes' in the CSS code. @keyframes are part of the animation sequence and help in defining the steps inside it. Imagine an object on your web page moving from point A to point B. You can use the transition and transform properties to do that, but animation sequences are used to accomplish more complex behaviors in an easier way. </p>
        <h3>{`from{ } and to{ } keywords and using percentages(%) syntax`}</h3>
        <p>{`@keyframes animation-name {
                from {
                property - a: value-a; 
            }
            to {
                property - a: value-b; 
            } 
            }`}</p>
        <p>The 'from' and 'to' keywords are used inside the @keyframes rule to mark the transition of one or more properties and can be seen as the start and end points of that transition. As can be seen from the syntax, the values of ‘property-a’ changes from ‘value-a’ to ‘value-b’. To expand on the use of ‘from’ and ‘to’, the @keyframes allows you to add more steps to your animation by using a percentage that represents the completion of the animation. </p>
        <p>{`@keyframes identifier {
            0 % { transform: rotate(100deg); } 
            30% {opacity: 1;}
            50% {opacity: 0.50;}
            70% {opacity: 1;}
            100% {transform: rotate(50deg);}`}
        </p>
        <p>The different percentages used in the example demonstrate the progression of the animation. Note that it doesn’t have to be the same property that you modify in these steps. That's not possible using the transition property, but you can do it with @keyframes. This flexibility is what makes @keyframes so powerful. Another advantage is how these animations can also loop infinitely, run forwards, reverse and alternate.</p>
        <p>@keyframes are tied in with the animation-name to which they are going to be applied. To give an overview of the animation property, it consists of other sub-properties. Of these, animation-name and animation-duration must be defined while others such as timing-function, delay, direction, fill-more, iteration-count and so on can be added. </p>
        <p>Animation property shorthand:</p>
        <p>The shorthand for the animation property consists of the following properties with their default values:</p>
        <ul>
            <li>animation-name: none</li>
            <li>animation-duration: 0s</li>
            <li>animation-timing-function: ease</li>
            <li>animation-delay: 0s</li>
            <li>animation-iteration-count: 1</li>
            <li>animation-direction: normal</li>
            <li>animation-fill-mode: none</li>
            <li>animation-play-state: running</li>
            <li>animation-timeline: auto</li>
        </ul>
        <p>If the values of any of these are not defined, you should assume that they are the default. Of these, the first property of the animation-name is what's used to tie it to the @keyframes rule.</p>
        <p>Let’s now examine an example of how you can use @keyframes and the animation property. </p>
        <h3>Animation example</h3>
        <div>
            <p>HTML code:</p>
            <p>{`
                    <body> 
                    <div class="box"></div> 
                    </body> 
                    </html>
                `}</p>
            <p>CSS code:</p>
            <p>
                {`body{
                    padding: 30px;}
                    .box {
                        background-color: lightcoral;
                        width: 50px;
                        height: 50px;
                        animation: myanimation 3s infinite ease-in;
                    }
                    
                    @keyframes myanimation {
                        from {
                            width: 50px;
                        }
                    
                        to {
                            width: 100px;
                        }
                    }`}
            </p>
            <div className={animation.box}></div>
            <br />
            <p>In the example, the width of the object changes from 50 pixels to 100 pixels over a span of 3 seconds and loops infinitely afterward.</p>
            <p>This is a very simple example of how you can use the animation property with the help of @keyframes rule to create your desired animation.</p>
            <p>If you modify this code and change the animation rules to percentages, it will have the same output.</p>
            <p>
                {`@keyframes myanimation{
                    0 % {
                        width: 50px;
                    }
                    100%{width: 100px;
                }`}
            </p>
            <p>Now, let’s add an intermediary step at 50%. </p>
            <p>
                {`@keyframes myanimation{
                    0%{width: 50px;
                    }

                    50%{background-color: aquamarine;
                        height: 20px;
                    }

                    100%{width: 100px;
                    }
                `}
            </p>
            <div className={animation.box2}></div>
            <p>The output is drastically different now after adding just two lines of code. Just like this, you can keep adding steps inside your @keyframes rule to make it even more dynamic and add the desired animation effects. Animation property and @keyframes rule can be used in very creative ways to enhance a web page. </p>
        </div>
        <h2>Animation examples</h2>
        <div id={animation.ball}></div>
        <p>0 By now you should know that CSS offers many possibilities for creating interesting animations. But to make your animations more complex and exciting, you need to have good control over the timing. That's why you need to know how to work with keyframes. In this video, you will learn how to do a basic keyframe animation in CSS. Previously, you learned how to animate a bouncing ball using the HTML canvas element and JavaScript. This time, you'll learn how to create the same animation using CSS. I opened Visual Studio Code and created my basic HTML structure in a file named index.html. In the head element, I added a link element to reference a CSS file named styles.css. First, I'll add the HTML element that will be animated. In this case, the element will represent the bouncing ball. I add a div element to the body element and set its ID attribute to ball.</p>
        <p>0:57 Now I open styles.css. First, I add the keyframes definition. I'll name this animation bounce. Next, I add the from keyword with open and closed curly brackets to define the starting state of the animation. The starting position should be the default position of the element, so I add the transform property and set its value to translate 3D with the coordinates 000. These two values are the coordinates along the x, y, and z axes in 3D space. Next, I add the two keyword with open and closed curly brackets to define the ending state of the animation. The ending position should be 640 pixels right of the starting position. To do this, I add the transform property and set its value to transform 3D with the coordinates 640 pixels 00. This means that the element is translated by 640 pixels on the x-axis and zero pixels on the y and z-axis. Finally, I add a CSS rule for the ball. I use the ID selector to select the ball element. First, I need to add a set of properties to make the element render as a ball. To do this, I set the width and height properties to 80 pixels.</p>
        <p>2:21        Then I set the border radius to 50 percent. This will round the corners of the elements so much that it will appear like a circle. Finally, I set the background color property to #62687F to fill in the color of the circle. I save the file and open index.html in live preview.</p>
        <p>2:44        Great, the ball is rendering correctly. Now to connect the animation to the element, I open styles.css again. In the CSS rule for the ball element, I add the animation property and set its value to bounce 2s. This will play the bounce animation over a two second duration. I then add the animation direction property and set its value to alternate. This will play the animation in reverse when it completes. Then finally, I add the animation iteration count property and set its value to infinite. This will play the animation loop infinitely. I save the file and open index.html again in live preview.</p>
        <p>3:35        The animation plays, but the speed of the movement is not consistent. The ball moves slowly at the start, then speeds up in the middle and slows down again at the end of the animation. This is because the default timing function is the ease function that animates with this behavior. There are many timing functions available such as ease, linear, ease in, and ease out. You can read more about this in the additional resources. To match the animation that I built in HTML and JavaScript, I set the animation timing function to linear. I open styles.css again. In the CSS rule for the ball element, I update the animation property and set its value to bounce 2s linear. This will play the bounce animation over a two second duration using the linear function. I save the file and open index.html again in live preview. Now my animation plays exactly as I intended it to do.</p>
        <p>4:31        In this video, you learned how to create a simple keyframe animation with CSS. But CSS animations and keyframes are quite powerful. Try challenging yourself and see what animations you can build.</p>
        <br />
        <h3>Animation and effects cheat sheet</h3>
        <h4>Transform property</h4>
        <h5>Syntax</h5>
        <p>transform: transform function-values</p>
        <h5>Example</h5>
        <p>{`.sample-class { transform: rotate(60deg); }`}</p>
        <h5>Keyword-value type: none</h5>
        <p>{`.sample-class { transform: none; }`}</p>
        <h5>Function-value type: matrix()</h5>
        <p>Variations: matrix(), matrix3d()</p>
        <p>{`.sample-class { transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0); }`}</p>
        <h5>Function-value type: rotate(deg)</h5>
        <p>Variations: rotate(), rotate3d(), rotateX(), rotate(), rotateZ()</p>
        <p>{`.sample-class {transform: rotate3d(3,2,1, 100deg);}`}</p>
        <p>Note: In rotate3d(), the respective values represent x, y, z co-ordinate and degree of rotations</p>
        <h5>Function-value type: translate(x,y)</h5>
        <p>Variations: translate(), translate3d(), translateX(), translateY(), translateZ()</p>
        <p>{`.sample-class {transform: translate3d(10px, 20px, 30px);}`}</p>
        <p>Note: In translate3d(), the respective values represent translation along the x, y, z co-ordinates</p>
        <h5>Function-value type: scale(factor)</h5>
        <p>Variations: scale(), scale3d(), scaleX(), scaleY(), scaleZ()</p>
        <p>{`.sample-class {    transform: scale3d(2, 1, 0.3);}`}</p>
        <p>Note: In scale3d(), the respective values represent scaling times along the x, y, z co-ordinates</p>
        <h5>Function-value type: skew(deg, deg)</h5>
        <p>Variations: skew(), skewX(), skewY()</p>
        <p>{`.sample-class {    transform: skew(100deg);}`}</p>
        <h5>Global value types:</h5>
        <p>{`.sample-class {transform: inherit}`}</p>
        <p>{`.sample-class {transform: initial}`}</p>
        <p>{`.sample-class {transform: revert}`}</p>
        <p>{`.sample-class {transform: revert-layer}`}</p>
        <p>{`.sample-class {transform: unset}`}</p>
        <h3>Multiple transform over the same element</h3>
        <h4>Syntax</h4>
        <p>Transform can be applied for rotate(), scale() and translate() that can be listed together. Each of these properties can have their own values and the actions will give a combined effect. </p>
        <h5>Example</h5>
        <p>{`.sample-class {transform: rotate(45deg) scale(1.5) translate(45px);}`}</p>
        <p>Additional property under transform:transform-origin</p>
        <p>Determines the anchor point for the centering of transform.</p>
        <h5>Example</h5>
        <p>{`.sample-class {transform-origin: 10px 10px;}`}</p>
        <p>{`.sample-class {transform-origin: right bottom;}`}</p>
        <h3>Transition property</h3>
        <h4>Transition shorthand</h4>
        <p>Transition shorthand has four following sub-properties, each of which can also be individually defined.</p>
        <ul>
            <li>transition-property</li>
            <li>transition-duration</li>
            <li>transition-timing-function</li>
            <li>transition-delay</li>
        </ul>
        <p>You have to list the values without naming them individually. Values skipped will be assigned their default values.</p>
        <h5>Syntax</h5>
        <p>transition: property duration timing-function delay;</p>
        <h5>Example</h5>
        <p>transition: margin-left2s ease-in-out 0.5s;</p>
        <h3>Animations and @keyframes</h3>
        <h5>animation property:</h5>
        <h5>Syntax</h5>
        <p>animation: name duration timing-function delay iteration-count direction fill-mode play-state;</p>
        <h5>Example</h5>
        <p>{`.sample-class {animation: none 2 ease 0.5 4 normal none running;}`}</p>
        <p>The animation property is a shorthand for the sub-properties below:</p>
        <ol>
            <li>animation-name</li>
            <li>animation-duration</li>
            <li>animation-timing-function</li>
            <li>animation-delay</li>
            <li>animation-iteration-count</li>
            <li>animation-direction</li>
            <li>animation-fill-mode</li>
            <li>animation-play-state</li>
        </ol>
        <p>The values not mentioned are given default values.</p>
        <p>Animation-name property is used to tie-in the @keyframes rule.</p>
        <h3>@keyframes</h3>
        <h5>Syntax</h5>
        <p>{`@keyframes mymove {from {property: value}  to { property: value }}`}</p>
        <h5>Example</h5>
        <p>{`@keyframes animation-name {from {bottom: 0px;}   to {bottom: 100px;}}`}</p>
        <p>Percentage denotes the timing of the animation.</p>
        <h4>Alternative syntax</h4>
        <p>{`@keyframes animation-name {/* declare actions here */}`}</p>
        <h5>Example</h5>
        <p>{`@keyframes animation-name {
                0%,100%{
                    background-color: blue;
                }
                50% {
                    background-color: green;
                }
            }`}</p>
        <h3>Multiple animations</h3>
        <p>Works the same as regular animation, multiple rules can be set. </p>
        <p>{`#some-class{animation: animation-a 2s linear infinite alternate,         animation-b 3s ease infinite alternate;}  `}</p>
    </>
}
