import React from 'react'
import BackToMain from '../components/BackToMain'
import debuggingStyles from '../css-modules/debugging.module.css'

export default function Debugging() {
    return <>
        <BackToMain  />
        <div>
            <h1>Common errors</h1>
            <p>Have you ever made a mistake while programming?</p>
            <p>Well, you're not alone.</p>
            <p>After all, mistakes are a part of programming.</p>
            <p>If there are never any errors in your code, that means you're either extremely skilled or not writing enough code.</p>
            <div>
                <h2>Errors</h2>
                <p>Can be avoided</p>
                <p>While there will always be errors in your code, some can be avoided. </p>
            </div>
            <p>This ability to avoid errors is especially true for the mistakes that beginner coders typically make.  </p>
            <div>
                <ol>
                    <li><h6>Identify common errors in programming</h6></li>
                    <li><h6>Explain good practices to avoid making errors</h6></li>
                </ol>
                <p>In the next couple of minutes, you will learn about the common errors that are made in programming and about the good practices you can implement to avoid making these errors.</p>
            </div>
            <div>
                <p>The common errors that developers make can broadly be classified as:</p>
                <ul>
                    <li>skill-based,</li>
                    <li>rule-based, </li>
                    <li>knowledge-based.</li>
                </ul>
            </div>
            <div>
                <p>Many skill-based errors can be classified as typos.</p>
                <p>That is to say, they are mistakes made when typing in the code.</p>
                <p>These typos can include omitting delimiters at the end of the syntax, or some quotation marks while defining values and forgetting to close brackets.</p>
                <h4>Typos</h4>
                <ul>
                    <li>Delimiters</li>
                    <li>Quotation marks ""</li>
                    <li>Brackets</li>
                </ul>
                <p>For example, say there's some code where the programmer didn't enter the closing bracket. When the closing bracket is typed, the code becomes functional again.</p>
            </div>
            <p>This can also be extended to syntax errors such as closing the tags in HTML.</p>
            <p>Sometimes, it can be as basic as not having a proper doctype declaration in your html code.</p>
            <p>All of these are simple mistakes and typos that happen while writing your code, but these are also the ones that take the most time to correct.</p>
            <p>While a lot of these syntax errors are flagged with the help of modern ideas such as visual code, clean code is still the responsibility of the developer.  </p>
            <p>For example, there are also some things such as using inline tags and writing tags in <b>the upper case</b>, which won't be flagged or stop the code execution but are still considered <b>bad practice</b>.</p>
            <div>
                <h4>Rule-based errors</h4>
                <p>Next, let's explore <b>rule-based errors</b> in more detail.</p>
                <p>These are code-based mistakes developers make when they do not follow the rules.</p>
                <p>For instance, did you know that <b>you cannot start a class name with a numeric value?</b></p>
                <p>Naming mistakes are typical rule-based errors.</p>
                <p>While this may not be obvious for someone new to CSS, there are many specific rules set for different elements in CSS that you may come across.</p>
            </div>
            <p>There are also so many properties that can be used for a given CSS selector that it can be confusing, this confusion can lead to errors. </p>
            <p>For example, here's a short list of just some of the different properties that can accept color values and be intermixed, <b>color</b>, <b>background color</b>, <b>font color</b> and <b>border color</b>.</p>
            <p>Or there is often more than one way in which the same page can be designed such as flex box, grids, and so, on each with its own set of properties. All these properties may add to the confusion if not dealt with correctly. There are also knowledge-based errors. </p>
            <p>These errors happen when you are a more experienced coder but you still have gaps in your knowledge.</p>
            <div>
                <h4>Complicated code</h4>
                <p>There is a tendency to have more and more complicated code using complex queries, such as <b>using attribute selectors</b> or <b>writing rules from multiple classes.</b></p>
            </div>
            <p>Expanding your coding knowledge will make coding easier but at the same time, it may make things confusing if you make your code too complex.</p>
            <p>For example, when you have to go back to code after not seeing it for a while and you have to figure out what you were doing when you initially wrote it.</p>
            <p>And that's why you should be aware of best practices in CSS when it comes to error prevention and correction.</p></div>
        <h2>Let's examine the best practices you can follow.</h2>
        <div>
            <p>One of the best practices you can apply to avoid common errors is using shorthand. </p>
            <p>A code with four properties can be written using one property instead.</p>
            <div>
                <pre>{`.lemon {`}</pre>
                <pre>margin-legt: 0;</pre>
                <pre>margin-right: 0;</pre>
                <pre>margin-top: 0;</pre>
                <pre>margin-bottom: 0;</pre>
                <pre>{`}`}</pre>
            </div>
            <p>Like in this example, writing it with shorthand makes reading the code easier. </p>
            <div>
                <pre>{`lemon {`}</pre>
                <pre>margin: 0 0 0 0;</pre>
                <pre>{`}`}</pre>
            </div>
            <p>Learning shorthand takes practice but it can save time and effort if you know how to use it.</p>
            <div>
                <p>Another best practice is applying specificity. </p>
                <p>Understanding specificity while writing code can also help you to avoid errors just like you learned in an earlier reading. </p>
                <p>Let's take this example.</p>
                <p>html code:</p>
                <div>
                    <pre>&lt;div class="className"&gt;</pre>
                    <pre>&lt;a&gt; this some content &lt;/a&gt;</pre>
                    <pre>&lt;/div&gt;</pre>
                </div>
                <p>css code:</p>
                <div>
                    <pre>{`div a {`}</pre>
                    <pre>color: #F4CE14</pre>
                    <pre>{`}`}</pre>
                    <pre>{`a {`}</pre>
                    <pre>color: #495E57</pre>
                    <pre>{`}`}</pre>
                </div>
                <p>Both rules are targeting the same anchor tag of html, and the specificity will be calculated by the browser to determine which rule to apply first. </p>
                <p>In this case, it will be the first rule that will be applied. Understanding specificity while writing code can help you to avoid misconfigurations.</p>
                <p>Over specificity can lead to increase loading time for browsers because they need to apply specific rules. </p>
                <p>A good practice in programming is to apply the rules as broadly as possible.</p>
                <p>For example, where possible applied over a container instead of to the content inside it.</p>
                <p>While the errors and practices mentioned are by no means exhaustive, the best way to learn is by designing more web pages and integrating good practices into your code as you go. </p>
            </div>
            <p>You must take care to avoid over specificity.</p>
            <p>For instance, where the inside of the layout has a division tag containing a class with an anchor tag to which you may apply rules, this is over specifying the target element of rule.</p>
            <p>Instead, this should be replaced with a class or ID selector. </p>
            <p>Overspecificity leads to wasting time.</p>
            <p>You waste the browser's time in applying overspecifics in the present. </p>
            <p>But it can also lead to you wasting your time troubleshooting later. </p>
            <p>You should also avoid the redundancy of <b>rules</b>, <b>selectors</b>, and <b>properties</b> to prevent confusion.</p>
            <p>When using different selectors, you can end up applying rules more than once to target the same element. </p>
            <h4>CSS reset</h4>
            <p>Another good practice is performing a CSS reset using a universal selector before you begin writing your code.</p>
            <p>Every browser has different settings that may cause problems with the formatting that you've defined.</p>
            <p>By removing browser specific configurations using the universal or star selector, you can avoid the chances of misconfigured layouts appearing on web pages and save a lot of effort later.</p>
            <p>By continually designing pages, you will develop your skills.</p>
            <p>And as a result, you will progressively make fewer errors.</p>
            <p>You learned about the common errors made in HTML and CSS, as well as, good practices to avoid them. Great work.</p>
            <div>
                <pre>&lt;a class="link"&gt; this a link &lt;/a&gt;</pre>
                <pre>&lt;p&gt; this some content &lt;/p&gt;</pre>
            </div>
            <br />
            <div>
                <h2>Handling errors</h2>
                <div>
                    <p>In this video, you're going to learn about how you can handle errors in CSS.</p>
                    <p>The first thing that you should know is that CSS does not handle errors in the same way that most programming languages do. The code does not break or stop executing.  </p>
                    <p>Instead, it just passes through the code and simply ignores the lines that it does not understand. </p>
                    <p>In fact it can also ignore the next property. After the mistake that is inside the same selector </p>
                    <h4>Handling errors in CSS</h4>
                    <ul>
                        <li>CSS handles errors differently</li>
                        <li>The code not break or stop executing</li>
                        <li>Code with errors is ignored</li>
                    </ul>
                    <p>in V. S code, I opened the html and CSS files that we used to demonstrate the transform and transition properties in an earlier video.</p>
                    <div>
                        <pre>&lt;div class="box"&gt; &lt;/div&gt;</pre>
                    </div>
                    <p>Let me open the output to remind you what the CSS styling does.</p>
                </div>
                <div>
                    <p>Now I'm going to tweak the CSS code to create a mistake.</p>
                    <div>
                        <pre>{`.box {`}</pre>
                        <pre>display: grid;</pre>
                        <pre>width: 240px;</pre>
                        <pre>height: 240px;</pre>
                        <pre>margin: 100px;</pre>
                        <pre>background-color: rgba(55, 255, 5, 0.5);</pre>
                        <pre>border-radius: 12px;</pre>
                        <pre>border: solid #6feb6f 4px;</pre>
                        <pre>{`}`}</pre>
                    </div>
                    <div>
                        <pre>{`.box:hover {`}</pre>
                        <pre>transform: rotateZ(60deg);</pre>
                        <pre>background-color: lightcoral;</pre>
                        <pre>opacity: 50%;</pre>
                        <pre>transition: 2s;</pre>
                        <pre>{`}`}</pre>
                    </div>
                    <div className={debuggingStyles.box}>
                    </div>
                    <p>Let's remove a semi colon after the background color properties of the boxes.</p>
                </div>
                <div>
                    <p>Visual studio code provides some basic information about mistakes to get that information.</p>
                    <p>I click on view and then problems.</p>
                </div>
                <div>
                    <p>An error message displays in the problem panel that says missed semi colon.</p>
                    <p>But this error does not prevent the execution of the rest of the code. When I run the code, the boxes still display, but only their borders are visible and they have square corners. In other words, the CSS before the error is executed, giving the boxes their size and placing them in a grid, still run. </p>
                    <p>Then the background color properties as well as the border radius properties in the line below are skipped. After that, the rest of the styling is still applied, such as the border properties as well as the hover pseudo class properties.</p>
                </div>
                <div>
                    <p>Let's put back the semi colon and create another error when I removed the semi colon after the background.</p>
                    <p>Color properties of the hover class. The hover effect still works but the color does not change to light coral. The opacity properties in the next line are also not executed, but the transition property still works.</p>
                    <div className={debuggingStyles.box2}></div>
                </div>
                <div>
                    <p>Now. I put back the semi colon to correct the code but sometimes you need to validate the code for more than just syntax errors.</p>
                    <p>Such as checking against specific coding conventions and best practices to resolve these kinds of issues. Developers use a tool called a <b><a href="https://en.wikipedia.org/wiki/Lint_(software)">Linter</a></b>.</p>
                    <p>A <b><a href="https://en.wikipedia.org/wiki/Lint_(software)">Linter</a></b> is a tool that applies a set of rules to check the syntax and find any problematic patterns or inefficiencies in the code. There are a number of winter tools and websites available. Alternatively, you can also install a third party tool using the command line or extensions in the S code. You can find more about these online tools and how to install winter extensions in the additional resources at the end of the lesson. Next I will demonstrate how to let your CSS code using a visual studio code extension called style. And there are plenty of Starlink rules that you can use for this demonstration. I'm using the alpha value notation rule and the color no hex rule. The alpha value notation rule requires using a specific notation for alpha values. Whereas the color no hex rule disallows the usage of hex color notation. These are just examples and are not necessarily best practices.</p>
                    <p>You can select your own set of lint rules according to your own best practices.</p>
                </div>
                <div>
                    <p>Now that the style and extension is running. Other errors are showing in the problems panel.</p>
                    <p>The alpha value notation lint rule states that 50% should be written as 0.5. Notice that it also indicates on which line and at which character I can find the issue. In line 14 the value of the opacity property is set to 50%.</p>
                    <p>I change it to 0.5 and now the error notification disappears.</p>
                </div>
                <div>
                    <p>The color No hex lint rule states an unexpected hex color was found on line eight.</p>
                    <p>To update the hex code to a valid notation such as H S L.</p>
                    <p>I can click on the color box in the CSS code, A color panel pops up.</p>
                    <p>I toggle between the different color notations by clicking at the top of the color panel until it is set to H S. L styling is just one example of the many developer tools in visual studio code that you can use to find lint errors.</p>
                    <p>Many browsers also have testing tools such as the inspector compute tools that allow you to modify your CSS code.</p>
                    <p>And verify the changes directly in the browser</p>
                </div>
            </div>
            <div>
                <h2>Debugging the front-end</h2>
                <p>In this reading, you will learn about some of the fundamental tasks used to debug CSS. The scope of what’s covered will match the topics already covered in this course. </p>
                <p>You may have come across websites that have misaligned or overflowing text, broken web links or websites that take too much time to load. While the front-end and back-end both contribute to faulty web pages, visible styling is primarily concerned with the front-end. </p>
                <p>CSS is a styling language, unlike conventional programming languages such as Python and Java, that has controls and follows a logical structure. This can make it difficult to find the exact root of the problem. Additionally, as you know, CSS does not flag errors, and most of the ‘bugs’ that you see in CSS are aesthetic in nature and need human intervention to solve.  The task of debugging the front-end is more about experience than knowledge.   </p>
                <p>The first step in debugging CSS is to find the root of the issue and isolate the elements involved. The majority of CSS issues will be with the layout, such as:  </p>
                <ul>
                    <li>Content overflow from parent to child or container class</li>
                    <li>Misplaced elements in relation to its container class</li>
                    <li>Browser and device-related inconsistencies resulting in variable viewports</li>
                </ul>
                <h4>Isolation by reduced test case</h4>
                <p>One way to deal with a problem is to replicate your code and systematically remove any code unrelated to the HTML and CSS elements that could be the source of the problem. The code should be distilled down to the least amount of code possible, and only then are suitable changes made to get the results you want. Alternatively, you can enable rules one at a time to observe their impact on the displayed elements.</p>
                <h4>Items inside containers</h4>
                <p>Often, isolation will not work, as the problem is the result of the relative mapping of elements. For example, with the misconfigured width of an item inside a flex layout. It’s important to check the use of suitable CSS properties in such cases. For a given item inside a grid, depending on the use case, width, grid-template-column, margin and padding can all be used to give spacing to an element. Additionally, you can also set different units that will all have their own behavior. In most cases, it helps to be familiar with the unit of measurement in relation to the container type to avoid misconfigurations.</p>
                <h4>Relocating items</h4>
                <p>Similar to the isolation of elements, you can move a certain element to observe its behavior. Doing a comparison can often help you to understand the source of the problem.</p>
                <p>The CSS compiler reads the elements from right to left. As an example, for a selector such as div {`.alpha > p`}, the element read first will be p before moving ‘outside’. When you change the position of the p from inside the .alpha class to some other position inside your code, it is easier to debug the source of the problem. This should be done on a case-specific basis.</p>
                <h4>Getting familiar with the box model</h4>
                <p>The box model is a very powerful source of information and can solve many issues with alignment. Using margin, padding and border is useful, but can be tricky and must be well understood.</p>
                <h4>Browser issues</h4>
                <p>Many times, the styling you have renders correctly in the IDE but misbehaves in a browser. That is because browsers have their own default CSS stylesheets called user-agent styles. While modern-day browsers are mostly compatible, you may encounter minor inconsistencies. Overriding the browser's settings can be done with universal selectors, in such cases written at the top of the code, and will include properties such as ‘margin: 0px;’ to reset the margin values set by the browser by default.</p>
                <h4>Dev tools</h4>
                <p>There are lots of user-friendly tools available today that can help debug CSS. However, the best tool you can use is the one provided by the browsers, called the developer tools, or dev tools. You can find these by right-clicking on a web page and selecting ‘Inspect Element’. option Note how every browser has its own expression when it comes to the configuration options, but fundamentally they are similar. Browsers today are very powerful pieces of software. If you spend time exploring the options, you may not need any other additional tools or software for debugging CSS and other front-end languages.</p>

                <p>A couple of the important options you can find inside your browser include:</p>
                <ul>
                    <li>Sources: Lists the filenames such as HTML, and CSS files used by the webpage that can be explored</li>
                    <li>Elements: Scrolls through the code to select a specific element for exploration</li>
                </ul>
                <p>Inside the Elements tab, on the right-hand side, you will find several options such as Computed layouts that will show the box model, Layouts that contain page and grid overlay options, and Font.</p>
                <p>You can select a specific element much more easily with the help of the ‘Element selection’ icon inside the dev tools. It enables the selection of specific elements on your web page. You can also access this option by hovering over a specific element on your page that will display its properties to you.</p>
                <img src="https://aleccross.github.io/react-css/debugging_images/SFB8SHvYQjKQfEh72LIyEw_8c7647f84926403387a78054faa732e1_z1.png" alt="SFB8SHvYQjKQfEh72LIyEw_8c7647f84926403387a78054faa732e1_z1.png" />
                <img src="https://aleccross.github.io/react-css/D8sjp-9lShOLI6fvZXoTkg_ffe4a572712f4fed850d5f8e093eafe1_z2.png" alt="D8sjp-9lShOLI6fvZXoTkg_ffe4a572712f4fed850d5f8e093eafe1_z2.png" />
                <p>On selecting the desired element, one way to use the Elements tab for debugging is by right-clicking on that element, scrolling to ‘Copy’ and then selecting an option from the drop-down list that appears.</p>
                <img src="https://aleccross.github.io/react-css/debugging_images/Ric7O7HkRaSnOzux5EWkzA_5991bcd29ddd4612b61795574e5abce1_z3.png" alt="Ric7O7HkRaSnOzux5EWkzA_5991bcd29ddd4612b61795574e5abce1_z3" />
                <p>This way, you can explore the isolated code to find the problem.</p>
                <p>Additionally, you can add the Breakpoint option that is more useful for interactive pages by selecting the ‘Break on’ option and selecting an option from the dropdown list that appears.</p>
                <img src="https://aleccross.github.io/react-css/debugging_images/wJXsIZsKR8eV7CGbCrfHCA_2453bf819feb4170b805f0b16732b5e1_z4.png" alt="wJXsIZsKR8eV7CGbCrfHCA_2453bf819feb4170b805f0b16732b5e1_z4" />
                <p>Nowadays, some browsers are providing options such as Cumulative Layout Shift (CLS) that helps determine the overall efficiency of a web page.</p>
                <p>You can also bring up the element families by clicking on the horizontal bar:</p>
                <img src="https://aleccross.github.io/react-css/debugging_images/u3tvBnmiQFa7bwZ5ohBWEQ_8594eed5dc0c47f896990292c47524e1_z5.png" alt="u3tvBnmiQFa7bwZ5ohBWEQ_8594eed5dc0c47f896990292c47524e1_z5" />
                <p>One very useful feature is the ability to make changes in your code directly inside the browser. First, use the ‘element selector’ mentioned above to select some elements and then look for the ‘+’ icon inside the dev tools.</p>
                <p>You can directly start adding relevant rules for that particular element which will immediately display changes on your web page. The changes you make can also be tracked from the ‘Changes’ tab. The live interactive nature of this feature greatly improves the experience of debugging.</p>
                <p>‘Console’ is another feature that, although it is not that useful in CSS, will come in handy as you deal with active or dynamic web pages along your developer journey.</p>
                <p>There are also responsive design modes in CSS that allow you to render your webpage to a specific browser or device.</p>
                <p>In addition to these, there are numerous ways in which you can explore and configure settings inside dev tools.</p>
                <p>When it comes to designing and styling CSS, if you don’t understand how it works, all issues will appear to be bugs.</p>
                <p>If you look at the fundamental structure of CSS, it consists of rulesets containing selectors and declaration blocks that contain properties and values. Micro-assessment of formatting and its validity can be done to troubleshoot the source of the problem. Practicing the creation of web pages and exploring the dev tools is the best way to get better at debugging and CSS in general.</p>
                <p>In this reading, you learned about some of the fundamental tasks used to debug CSS.</p>
            </div>
        </div>
        <div>
            <h2>Browser-specific CSS</h2>
            <p>One of the frustrations you're likely to run into will be compatibility issues that occur when rendering your CSS files on different browsers. </p>
            <p>Well, you can use code and specialized websites to sort out these compatibility issues. </p>
            <div>
                <p>In the next couple of minutes, you will learn about <b>the interactivity of CSS with other browsers</b> and <b>how you can add code to your CSS files to ensure compatibility</b> with these browsers. </p>
                <p>You will also learn about <b>the specialized websites available that you can use to check whether your code</b> is valid on multiple browsers. </p>
                <ol>
                    <li>Explain interactivity of CSS with other browsers</li>
                    <li>Explain how you can add code to CSS files to ensure compatibility</li>
                    <li>Identify specialized websites to check the validaty of your code</li>
                </ol>
            </div>
            <div>
                <h4>CSS evolved</h4>
                <h6>Over the years</h6>
                <p>CSS has been around for a long time and has evolved quite significantly since it was first introduced. </p>
            </div>
            <div>
                <h4>New features</h4>
                <h6>To CSS specification</h6>
                <p>As new features are added to the CSS specification,  </p>
                <h4>Compatibility issues</h4>
                <h6>In different browsers</h6>
                <p>compatibility issues can occur while the different browsers decide on the implementation of the new features.</p>
            </div>
            <div>
                <p>While all the major browsers are mostly in alignment on how CSS is implemented, there are still browser-specific differences that occur, which sometimes may disturb the <b>layout</b>, <b>styling</b>, and <b>other responsive components</b> related to CSS. </p>
                <ul>
                    <li>Layout</li>
                    <li>Styling</li>
                    <li>Other responsive components</li>
                </ul>
            </div>
            <div>
                <h4>Default CSS properties</h4>
                <p>Additionally, each browser has its own <b>default CSS properties</b> for different HTML elements. </p>
            </div>
            <p>Most browsers have their own specific engines that are used for rendering HTML and CSS. </p>
            <p>Examples of these include Safaris Engine <b>Webkit</b>, Google <b>Chrome</b>, and  <b>other chromium</b>-based browsers like <b>Edge</b> and <b>Operas Blink</b>. </p>
            <p>As a result, <b>different browsers</b> can have <b>different ways</b> in which the CSS rules get displayed, even if the styling and alignment are defined correctly. </p>
            <div>
                <h4>Subtle changes</h4>
                <h6>Colors and fonts appear different</h6>
                <p>The <b>changes</b> that occur are usually <b>subtle</b>. </p>
                <p>For example, colors and fonts may appear slightly different from the original styling, and this may affect the user's experience. </p>
            </div>
            <div>
                <h4>Noticeable disserence</h4>
                <h6>Layouts and alignment</h6>
                <p>However, sometimes the difference can be more noticeable, like with layouts, specifically involving alignment. </p>
            </div>
            <div>
                <p>Let's explore one such example now involving the use of flex and grid layouts.</p>
                <p>The most common layouts that render differently depending on the browser and use or the flex and grid layouts. </p>
                <p>For example, animated grid sometimes don't animate correctly in certain browsers. </p>
                <p>Flexbox can have trouble handling the correct aspect ratios and alignment. </p>
                <p>To help identify and solve these issues, there are many websites available to you to check browser-specific CSS compatibility. </p>
                <h4>Animated grids</h4>
                <h6>Not animating correctly</h6>
                <h4>Flexbox</h4>
                <h6>Aspect ratios and alignment issues</h6>
            </div>
            <p>For example, developers can use one of these sites to check if the border-radius rule in the CSS rule is compatible with all the different browsers. </p>
            <h4>Virtual environment</h4>
            <h6>Insert code</h6>
            <h6>Live website</h6>
            <p>There are also websites that provide a <b>virtual environment</b> where you can select specific browsers and their versions. </p>
            <p>In these virtual environments, you can insert your code in the browser or run a website that you built that is already live to see how it works. </p>
            <h4>Mobile devices</h4>
            <p>It's also important to check the compatibility and rendering of websites on <b>mobile devices</b> that typically have different configurations than a website on a desktop. </p>
            <p>You now know that browser compatibility issues can occur in CSS. </p>

            <div>
                <p>Let's examine an example of browser-specific settings and how you can ensure that your CSS code is compatible. </p>
                <p>There are browsers specific settings that you can add to ensure that your CSS code is compatible and works properly with that particular browser. </p>
                <p>Let's take the example of the Chrome browser and query it. </p>
                <p>First, I need to ensure that my CSS code is compatible with the browser. </p>
                <p>Queries require the use of media rules. </p>
                <p>These rules are used to apply different styles to different media types or devices. </p>
            </div>
            <div>
                <p>The webkit main device pixel ratio, or webkit device pixel ratio is a media query rule which is used to specify the density of the schemes. </p>
                <h6>CSS code:</h6>
                <pre>{`/* Chrome version 29 and above */`}</pre>
                <pre>@media screen and (-webkit-mi-device-pixel-ratio:0) and (min-resolution:.001dpcm)</pre>
                <pre>{`{ selector{ property:value; }}`}</pre>
                <p>These webkit rules are part of the media query rule used as a non-standard way of setting parameters for aspects such as screen resolution, viewport, height of the browser, and so on. </p>
                <p>I've set the value to be zero for this example, typically the values are 0.75, 1, or 1.5. I can also set the properties for specific rules. </p>
            </div>
            <div>
                <div>
                    <pre>@media (-webkit-device-pixel-ratio: 1)</pre>
                    <pre>   p {`{`}</pre>
                    <pre>     color: red;</pre>
                    <pre>     {`}`}</pre>
                    <pre>   {`{`}</pre>
                </div>
                <p>In this example, I've used the general query and I've applied it to a paragraph. </p>
                <p>If I want to configure some of the settings only for specific browsers, I can do that as well. </p>
            </div>
            <div>
                <div>
                    <pre>@media not all and (mit-resolution:.001dpcm) {`{`} @support (-webkit-apperance:none) and (display: flow-root)</pre>
                    <pre>{`{`} .selector {`{`} property:value; {`}`}{`}`}{`}`}</pre>
                </div>
                <p>In this example, notice that I've set the CSS rules to be compatible only with the Safari browser. </p>
            </div>
            <div>
                <div>
                    <h6>HTML code:</h6>
                    <pre>{`<!--[if IE]>`}</pre>
                    <pre>{`<link rel="stylesheet" type="text/cs" href="only-ie.css">`}</pre>
                    <pre>{`<![endif]-->`}</pre>
                </div>
                <p>Similar to defining rules inside the CSS file, Internet Explorer makes use of conditional comments inside HTML, which makes the code compatible with Internet Explorer. </p>
                <p>The support for conditional comments in the latest versions of Internet Explorer has been deprecated, but they served as an important bridge to ensure compatibility with earlier versions. </p>
                <p>There are a number of media queries and variations for these conditional comments and other browser-specific settings that I can add to the CSS and HTML code. </p>
                <p>Adding such media queries and other CSS code for setting compatibility with browsers is a vast topic all by itself that can be explored beyond the scope of conventional CSS rules. </p>
            </div>
            <h3>CSS libraries</h3>
            <p>Fortunately, there are many CSS libraries available to help ensure that your CSS rules are consistent across browsers, such as <b>modernizer</b>, <b>reset.css</b>, and <b>normalized.css</b>. </p>
            <h3>CSS Reset</h3>
            <p>Previously, when CSS incompatibilities were quite prevalent among different browsers, a simple solution was found in the form of CSS reset. </p>
            <p>A CSS reset file consists of <b>rules</b> that will reset the values for different types of selectors, pseudo-classes, and so on before the actual rules are implemented. </p>
            <p>While browser incompatibilities are greatly reduced, the practice of CSS reset is still followed by designers to ensure cross-browser compatibility. </p>
            <p>In this video, you learned about CSS compatibility and the issues that can occur between different browsers when rendering CSS, you learned how each browser has its own rendering engine and that developers can use specialized websites to check their CSS code is valid on multiple browsers. </p>
            <p>Finally, you explored browser-specific settings that you can add to your CSS code to ensure it's compatible and works properly with particular browsers. Well done.</p>
        </div>
        <div>
            <h2>UI testing</h2>
            <p>As you may have experienced when using different apps in your everyday life, first impressions matter, whether you are using an app to make a photo collage or to order food online. </p>
            <p>If you are using a new app and it doesn't behave the way you expect it to, it makes a bad first impression on you. </p>
            <p>It may very well leave you feeling frustrated and seeking alternatives that can deliver what you need. </p>
            <p>To combat scenarios like this, developers employ rigorous user interface or UI testing strategies to ensure optimal customer satisfaction. </p>
            <p>UI testing is a complex area with many techniques and strategies used by developers. </p>
            <p>The strategies you will use will often be determined by business priority, customer requirements, and project timelines. </p>
            <p>In this video, you will learn about some UI testing strategies in specific cross-device testing. </p>
            <p>You will also discover practical examples of how to do cross-device testing in the browser. </p>
            <p>There are many UI testing strategies and an even wider range of tools available to implement them. </p>
            <p>The most common strategies used during development are; automated user acceptance testing, cross-device testing, and visual regression testing. </p>
            <p>You can learn more about the other types of testing in future courses. </p>
            <p>For now, let's just focus on cross-device testing. </p>
            <p>Cross-device testing involves the manual or automated use of different devices to test the layout and behavior of an application. </p>
            <p>The goal of this testing strategy is to ensure user experience consistency between different devices. </p>
            <p>Think of all the different mobile devices and their screen sizes and internal hardware, there are a lot of possibilities. </p>
            <p>Many companies use the most common devices for testing as less common devices could have a low return on investment versus the cost of maintaining and running the tests on those devices. </p>
            <p>If you have an old phone stashed in a drawer somewhere, chances are that modern apps won't work on the devices as well as they're supposed to. </p>
            <p>Now that you've learned about the different types of UI testing, you are ready to learn how to use Web Developer Tools to manually perform cross-device testing. </p>
            <p>In my web browser, I've opened one of my previously developed webpages for the little lemon restaurant. </p>
            <p>I've opened the browser developer tools by right-clicking the page and selecting Inspect Element. </p>
            <p>An alternative way to open the tools is to press F12. </p>
            <p>To begin cross-device testing the webpage, I can click the toggle device toolbar button. </p>
            <p>On the top of the browser, I can now change the browser view to simulate different devices. </p>
            <p>If I click on the "Edit button", I can select additional devices to add to the toolbar. </p>
            <p>However, it is important to note that this will only simulate the screen size of the device, not the actual hardware. </p>
            <p>Luckily, the browser also as tools available to closely simulate certain network and hardware conditions. </p>
            <p>In the performance tab of the developer tools, I can use the network option to simulate different mobile network speeds. </p>
            <p>Additionally, I can use the CPU option to slow down the web browser as if it was running on a slow or older device. </p>
            <p>This will allow me to view how my webpage performs in different environments. </p>
            <p>Of course, this is all simulated. </p>
            <p>There are many tools available to perform testing on virtual mobile software and also unreal mobile hardware. </p>
            <p>Many businesses have in-house labs with many mobile devices to perform more real-world environment testing. </p>
            <p>If you're interested in learning more, review the links included in the additional reading material. </p>
            <p>You should now be able to identify the main UI testing strategies used to ensure customer satisfaction and what's more. </p>
            <p>You also learned about the web developer tools you can use to perform cross-device testing.</p>
        </div>
        <div>
            <h2>Case study: How Meta performs front-end testing</h2>
            <p>An untested application is a wildcard. You have no idea whether it works or it doesn't work. A tested application gives you confidence that what was originally built is working as intended.</p>
            Hi, I am Benedict Hobart. I am a front-end engineer at Meta. Testing is really important to make sure your app is of high-quality and make sure it doesn't break and being able to test every feature in your app or every part of your product means that you'll be made aware of problems in your app. It's much easier to fix a problem when it happens than six months down the road when someone finds out it's broken and you need to work out what happened. You write a lot of code over time and one small problem in one subsystem can end up leading to a multitude of errors in your app. Like when you're building a messaging app and messaging goes down for an hour, people can't contact their friends and family. They can't contact their loved ones, they're disconnected. It's really important for your users that you build something reliable and doesn't break and testing is the easiest way to do that. When I first learned front-end testing it was actually pretty satisfying to get the tooling working and then to have your own app that you just build, executed automatically or exercised in some continuous integration somewhere. Front-end testing and testing is a whole matter is very important. We have this whole initiative or called better engineering, which is about building high-quality applications. We approach testing in a number of ways. We've got end-to-end testing, which we basically spin up a web browser in the cloud and we run tests that interact with the browser automatically and make sure that the app is working. Then there's unit testing, which is usually a good case for unit testing, is in something like when you're doing end-to-end encrypted messaging, you want to make sure your cryptography works as you'd expect that the inputs meant match the outputs and that certain things are guaranteed. The people involved in front-end testing, I guess there's two main groups. There's the product teams building products that our consumers clients use and they're the ones that should be writing tests to make sure that their product is stable. Then there's like the teams that build the test frameworks themselves. They're the ones that makes sure that those tests run with high reliability, that those tests run before we ship code to users or to people so we aren't shipping broken experiences. I see it as a responsibility of everyone to be writing tests at the company for their respective parts. There's not going to be one super team that comes in and tests your product for you because they don't know how your product works. Usually what we do is set a testing bar so for every new feature we make sure there's at least a few tests for it. That way our product isn't actually ready to release until we've already tested it, and so that gives us a lot more confidence than we otherwise would have. Testing is valuable, it can feel like a waste of time at first, but it is not. Eight months down the line when your app explodes and you're trying to work out why those testings could have saved you. The testing is also its own, like challenging activity writing good test is hard and take pride in writing tests in the same way, you'd take pride in building any of the products you want to build. Good luck in your first experience in testing, it's going to be very fundamental as you move forward in your career.
        </div>
        <div>
            <h2>Module summary: Interactive CSS</h2>
            <p>You've reached the end of this module on interactive CSS where you delve deeper into CSS by applying increasingly specific styling to various elements. </p>
            <p>It's now time to review what you've learned. </p>
            <p>You began this module with a lesson on creating layouts. </p>
            <p>You learned about CSS web layouts where you discuss the grid and flex box module, common flex layouts and examples of common page layouts like column grid and stack CSS units of measurement. </p>
            <p>Basic flex box flex charts and CSS grids. </p>
            <p>In this lesson, you also applied what you learned by creating a custom layout using grids. </p>
            <p>In an un graded lab lesson two focuses on CSS selectors. </p>
            <p>You learned about widely used advanced selectors. </p>
            <p>All selectors and their specificity combination selectors that demonstrate the granular selection of embedded elements targeted CSS style given elements using granular selection and the concepts and practical uses of pseudo classes and elements. </p>
            <p>In this lesson you also completed an ungrateful lab testing your ability to style given elements using granular selection. </p>
            <p>The third lesson was about C. S. S. Effects and in this portion of the module you learned about what effects are and how web presentation can be enhanced by the use of effects, how to use text effects like shadow and glow CSS animation and basic animation principles. </p>
            <p>CSS key frame animation and pre processes to demonstrate simple key frame animation. </p>
            <p>Additionally you completed an un graded lab about transforming and transitioning elements and their role in animation. </p>
            <p>The fourth and last lesson was about debugging where you learned how to inspect diagnose and resolve CSS and html issues in your exploration of this topic, you learned about common errors, handling errors, debugging the front end, how browser developer tools can assist with debugging html and CSS issues, conditional comments and UI testing. </p>
            <p>You should now be familiar with the basics of interactive CSS and the debugging tools available to diagnose and resolve CSS and html issues. </p>
            <p>You also know more about creating layouts using CSS selectors and applying CSS effects. </p>
            <p>You've done a great job so far, keep up the good work and continue progressing in your learning journey.</p>
        </div>
        <div>
            The following resources will be helpful as additional references in dealing with the different concepts related to the topics you have covered in this lesson.
                <li><a href="https://caniuse.com/">Website to check for browser-compatibility</a></li>
                <li><a href="https://stylelint.io/">Official website for Stylelint</a></li>
                <li><a href="http://csslint.net/">Widely used linter website to check CSS code</a></li>
                <li><a href="https://jigsaw.w3.org/css-validator/">CSS Validator to check accuracy of CSS code</a></li>
                <li><a href="https://www.freecodecamp.org/news/how-to-tackle-css-specificity-issues-and-when-to-use-the-important-keyword-b54123995e1a/">Dealing with specificity issues</a></li>
                <li><a href="https://www.sitepoint.com/study-errors-beginners-make-learning-html-css/">Beginner errors made in CSS</a></li>
                <li><a href="https://www.webfx.com/blog/web-design/12-common-css-mistakes-web-developers-make/">Knowledge-based mistakes to avoid in CSS</a></li>
                <li><a href="https://www.simplilearn.com/tutorials/css-tutorial/webkit-css">How to use Webkit in your CSS code</a></li>
                <li><a href="https://www.lambdatest.com/blog/top-5-browser-compatibility-issues-in-css-for-developers-in-2021/">Commonly-occurring browser issues in CSS</a></li>
        </div>
    </>
}
