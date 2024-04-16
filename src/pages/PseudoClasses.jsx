import React from 'react'
import BackToMain from '../components/BackToMain'

export default function PseudoClasses() {
    return <>
        <BackToMain />
        <h1>Pseudo-classes</h1>
        <p>
            Pseudo-class selectors give developers great control over what they select and style. By knowing how to use these selectors, you will not only improve the interactivity of your web pages, but you will also be able to add advanced styling without too much effort. These selectors are also often referred to as just pseudo-classes. Previously, you were briefly introduced to the pseudo-class invalid. Remember, pseudo-classes are state-based selectors, which means that they allow you to select elements based on their state. For example, the hover state. You use pseudo-class selectors to improve the interactivity of web pages by styling elements in response to user input. In this video, you will explore practical examples of how to do this. There are many types of pseudo-classes. Other than the hover state, examples include selecting an element when it is active or in-focus, or when a link has already been visited. Pseudo-classes are also very effective to target specific elements such as, let's say, the fifth item in a list, bold items, empty elements, and so on. Let's review the general syntax that you use for various pseudo-classes. You add the selector, a colon, the pseudo-class, and then the properties. Well, there isn't a broadly accepted classification for pseudo-classes, you can group them in terms of general similarities and their purpose. Let's explore a few of these general classifications. The first group you need to know about is user action states, which include the hover pseudo-class, which changes the style of an element when a cursor hovers over it. The active pseudo-class, which styles an element only while a user actively presses and holds the mouse button, and the focus pseudo-class, which focuses styling on the element that you use it for. These pseudo-classes have an effect while a user is actively engaging with a HTML element. Let's explore an example of how the hover and active pseudo-classes can be used. Say you have a HTML file with an a tag inside a paragraph and a button element inside a div element. The paragraph element has a class defined as "mypage" and the button class is defined as "mybutton." Now, let's explore the CSS. First it contains basically styling for the mypage and mybutton class elements. Then to make the link change its appearance when a user hovers over it, you use the hover pseudo-class to target a tag. To change the mybutton class, you use the active pseudo-class. The active pseudo-class changes the properties of an element when the state of that element is active. In this case, the styling properties will be applied only when a user presses and holds the mouse button. In this example, the pseudo-class selectors target HTML elements, but you can also use them to target HTML class attributes. Next, let's focus on Form states. Previously, when discussing form validation you were introduced to the invalid pseudo-class selector. But there are more pseudo-classes that are specifically used for HTML forms. They usually come in pairs and target the different states that elements can have. Form state pseudo-classes include disabled and enabled, generally used for buttons, checked and indeterminate, that are used for checkboxes, and valid and invalid used in case of fields like emails and phone numbers. Another pseudo-class type that you should know about is specific position-based states. They allow you to target specific items, for instance, a specific list item among the list elements. Some examples of this type include, first-of-type, last-of-type, nth-of-type, and nth-last-of-type. Let's explore an example of first-of-type. Say you have two list items in an HTML page, Adrian and Mario. With the first-of-type pseudo-class, you can style the first item of its type while the remaining items will not be affected. In this video, you explored a few examples of how you can use pseudo-classes to improve the interactivity of your web pages. There are plenty of other pseudo-classes and some of them are more popular than others. You're encouraged to follow your own style and explore the creative possibilities that pseudo-classes offer.
        </p>
        <h2>Pseudo-elements</h2>
        <p>By now you know that pseudo-elements help you style a specific part of an element. For example, you can decide to apply styling to only the first word or line in a given element. First, let’s examine the syntax of a pseudo-element.</p>
        <h2>Syntax</h2>
        {`selector::pseudo-element {
        property: value; 
        }`}

        <p>It is important to note that pseudo-elements use two colon characters instead of one.</p>

        <p>Now, let’s explore some examples of popular pseudo-elements.</p>

        <p><b>::first-letter</b></p>
        <p>You can use first-letter to change the color of just the first letter of each of the three points in the example text.</p>

        <p>HTML code:</p>
        {`<!DOCTYPE html>
        <html>
            <head>
                <link rel="stylesheet" href="pseudo4.css">
            </head>
            <body>
                <ul>
                    <li>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </li>
                    <li>The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</li>
                    <li>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</li>
                </ul>
            </body>
        </html>`}
        <p><b>CSS code:</b></p>
        {`li::first-letter {
            color:coral;
            font-size: 1.3em;
            font-weight: bold;
            line-height: 1; 
            }`}
        <p><b>Output</b></p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Optio culpa sequi unde animi vero?</li>
            <li>Aliquam molestias consectetur magnam nostrum ducimus iste asperiores.</li>
        </ul>
        <img src="https://aleccross.github.io/react-css/CSS Selectors/ik0QcFB_T_GNEHBQf4_xMw_bf608e673a0941bba2048e98289e4ce1_Picture22.png" alt="" />
        <p></p>
        <p>Although the code only changed the first letter of each bullet point, it makes a big difference in terms of presentation. Now let’s change the font in a different way. </p>
        <p><b>::first-line</b></p>

        <p>First-line will change the complete first line of each of the bullet points to light sea green.</p>
        <p><b>Css code:</b></p>
        {`ul{
            list - style - type: none;
        }

        li::first-line {
            color: lightseagreen;
        text-decoration: underline;
        line-height: 1;
        }`}
        <p><b>Output</b></p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est numquam omnis dolor dicta, ipsa nisi, vero distinctio quasi id perferendis corporis, earum vitae veniam ea rem consequatur sequi perspiciatis? Excepturi!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut alias labore iure exercitationem, at voluptate a magnam. Inventore a rem voluptatem nulla aperiam, suscipit similique enim quaerat quia quasi. Tempore?</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolore ipsum perspiciatis provident in laborum, quidem consectetur facere deleniti ratione obcaecati magnam illo dolorum blanditiis optio voluptas asperiores? Possimus, dignissimos?</li>
        </ul>
        <img src="https://aleccross.github.io/react-css/CSS Selectors/Btxtv5_LSmacbb-fy_pmzA_0a64c347b7cc4897a733495266328ee1_Picture33.png" alt="" />
        <p></p>
        <p>Because it’s only the first line of each bullet point, it almost functions like dividers between the three different points instead of having to rely on bullets.</p>
        <p>Note that the contents of the line to which this pseudo-element is applied will change as you increase or decrease the size of your viewport.</p>
        <p><b>Output</b></p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est numquam omnis dolor dicta, ipsa nisi, vero distinctio quasi id perferendis corporis, earum vitae veniam ea rem consequatur sequi perspiciatis? Excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vero. Laboriosam exercitationem accusantium, iusto quaerat, repellendus dignissimos veritatis voluptatem molestias mollitia aut incidunt nostrum quia possimus minima distinctio! Vero, ipsum?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut alias labore iure exercitationem, at voluptate a magnam. Inventore a rem voluptatem nulla aperiam, suscipit similique enim quaerat quia quasi. Tempore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima consequatur amet? Deserunt iste itaque est officiis eius quo necessitatibus commodi. Ut, quo necessitatibus provident voluptatum blanditiis quod minus officiis.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolore ipsum perspiciatis provident in laborum, quidem consectetur facere deleniti ratione obcaecati magnam illo dolorum blanditiis optio voluptas asperiores? Possimus, dignissimos? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dolores culpa nisi quasi ratione provident, non sint dolore perferendis illo deleniti fugiat animi sequi natus excepturi delectus pariatur ipsa praesentium!</li>
        </ul>
        <img src="https://aleccross.github.io/react-css/CSS Selectors/meLH3ynzRGOix98p8yRj6g_a5b3bf4ca3cb4cc3ba3b690416a3b1e1_Picture44.png" alt="" />
        <p></p>
        <p><b>::selection</b></p>
        <p>Selection is another useful pseudo-element. For example, you may use it when you are taking notes on your device because it allows you to highlight specific text. The effect of it becomes obvious only after the user selects content. On web pages today, you will typically see inverted colors from white-black to black-white when selecting a portion of text.</p>

        <p><b>Css code:</b></p>
        {`ul{
            list - style - type: none;
        }

        li::selection {
            color:brown;
        background-color: antiquewhite;
        line-height: 1;
        }`}
        <p>Here is an example of a selection of text.</p>
        <p><b>Output</b></p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est numquam omnis dolor dicta, ipsa nisi, vero distinctio quasi id perferendis corporis, earum vitae veniam ea rem consequatur sequi perspiciatis? Excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vero. Laboriosam exercitationem accusantium, iusto quaerat, repellendus dignissimos veritatis voluptatem molestias mollitia aut incidunt nostrum quia possimus minima distinctio! Vero, ipsum?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut alias labore iure exercitationem, at voluptate a magnam. Inventore a rem voluptatem nulla aperiam, suscipit similique enim quaerat quia quasi. Tempore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima consequatur amet? Deserunt iste itaque est officiis eius quo necessitatibus commodi. Ut, quo necessitatibus provident voluptatum blanditiis quod minus officiis.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolore ipsum perspiciatis provident in laborum, quidem consectetur facere deleniti ratione obcaecati magnam illo dolorum blanditiis optio voluptas asperiores? Possimus, dignissimos? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dolores culpa nisi quasi ratione provident, non sint dolore perferendis illo deleniti fugiat animi sequi natus excepturi delectus pariatur ipsa praesentium!</li>
        </ul>
        <img src="https://aleccross.github.io/react-css/CSS Selectors/XTOsncLuSLezrJ3C7ri3cQ_dd37768230fe4092838f32544feff1e1_Picture55.png" alt="" />
        <p></p>
        <p>And another example of the same text but with a different section selected and highlighted.</p>
        <p><b>Output</b></p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est numquam omnis dolor dicta, ipsa nisi, vero distinctio quasi id perferendis corporis, earum vitae veniam ea rem consequatur sequi perspiciatis? Excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vero. Laboriosam exercitationem accusantium, iusto quaerat, repellendus dignissimos veritatis voluptatem molestias mollitia aut incidunt nostrum quia possimus minima distinctio! Vero, ipsum?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut alias labore iure exercitationem, at voluptate a magnam. Inventore a rem voluptatem nulla aperiam, suscipit similique enim quaerat quia quasi. Tempore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima consequatur amet? Deserunt iste itaque est officiis eius quo necessitatibus commodi. Ut, quo necessitatibus provident voluptatum blanditiis quod minus officiis.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolore ipsum perspiciatis provident in laborum, quidem consectetur facere deleniti ratione obcaecati magnam illo dolorum blanditiis optio voluptas asperiores? Possimus, dignissimos? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dolores culpa nisi quasi ratione provident, non sint dolore perferendis illo deleniti fugiat animi sequi natus excepturi delectus pariatur ipsa praesentium!</li>
        </ul>
        <img src="https://aleccross.github.io/react-css/CSS Selectors/0NuXaVX5SpWbl2lV-bqVwA_da8aa7acbb144626bc8753434a8215e1_Picture66.png" alt="" />
        <p></p>
        <p>Different segments of the text are highlighted depending on the text that is selected at any given point.</p>

        <p><b>::marker</b></p>
        <p>Markers are typically used to add style elements to a list, for instance, to color bullet points. For example, you can enhance the user experience when you use a marker in the following way.</p>
        <p><b>Css code:</b></p>
        {`li::marker {
            color: cornflowerblue;
            content: '<> ';
            font-size: 1.1em;
        }`}
        <p><b>Output</b></p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est numquam omnis dolor dicta, ipsa nisi, vero distinctio quasi id perferendis corporis, earum vitae veniam ea rem consequatur sequi perspiciatis? Excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vero. Laboriosam exercitationem accusantium, iusto quaerat, repellendus dignissimos veritatis voluptatem molestias mollitia aut incidunt nostrum quia possimus minima distinctio! Vero, ipsum?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut alias labore iure exercitationem, at voluptate a magnam. Inventore a rem voluptatem nulla aperiam, suscipit similique enim quaerat quia quasi. Tempore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima consequatur amet? Deserunt iste itaque est officiis eius quo necessitatibus commodi. Ut, quo necessitatibus provident voluptatum blanditiis quod minus officiis.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolore ipsum perspiciatis provident in laborum, quidem consectetur facere deleniti ratione obcaecati magnam illo dolorum blanditiis optio voluptas asperiores? Possimus, dignissimos? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dolores culpa nisi quasi ratione provident, non sint dolore perferendis illo deleniti fugiat animi sequi natus excepturi delectus pariatur ipsa praesentium!</li>
        </ul>
        <img src="https://aleccross.github.io/react-css/CSS Selectors/9I5kNQR4QLmOZDUEeOC5Vg_6db68966311a40faac1ec96a0458c7e1_Picture77.png" alt="" />
        <p></p>
        <p>Now the bullet points are cornflower blue and they have the shape specified in the code.</p>
        <p><b>::before and ::after</b></p>
        <p>One more pair of pseudo-elements are the <b>::before</b> and <b>::after</b> pseudo-elements. They allow you to add content before and after an element on which they are allowed. In other words, new content can be added to a page without adding HTML code for it. You can also add styling options for this content. Let’s do an example where text is added both before and after some cooking guidelines to identify them as important tips.</p>

        <p><b>HTML code:</b></p>
        {`<body>
            <p id="tips"> Don't rinse your pasta after it is drained. </p>
            <p> Slice the tomatoes. Take the extra efforts to seed them. </p>
            <p id="tips"> Peel and seed large tomatoes. </p>
        </body>`}
        <p><b>Css code:</b></p>
        <p>{`#tips::before{
            background: darkkhaki;
            color:darkslategray;
            content: "Tip:";
            padding-left: 3px;
            padding-right: 5px;
            border-radius: 10%;
        }`}</p>

        <p>{`#tips::after{
            background:darkkhaki;
            color:darkslategray;
            content: "!!";
            padding-right: 5px;
            border-radius: 20%;
        }`}</p>
        <p><b>Output:</b></p>
        <p id="tips"> Don't rinse your pasta after it is drained. </p>
        <p> Slice the tomatoes. Take the extra efforts to seed them. </p>
        <p id="tips"> Peel and seed large tomatoes. </p>
        <img src="https://aleccross.github.io/react-css/CSS Selectors/tQWOWQtuQ_eFjlkLbrP35w_cabab4491c49452fa4bbd9c0ee9e65e1_Picture88.png" alt="" />
        <p></p>
        <p>The “content” property is where the text for the guidelines goes.
            The word “tip” has been added before each guideline thanks to the rules added for <b>tips::before</b>.
            And, each of the three guidelines now has two exclamation marks after them thanks to the rules added for <b>tips::after</b>. Note how the second {`<p>`} element inside the HTML code remains unaffected.
            You don’t have to use after and before together like this, but sometimes it is useful to combine them.</p>

        <p>The examples covered here illustrate that adding simple code for pseudo-elements can greatly enhance the appearance of websites. There are plenty of other pseudo-elements and some of them are more popular than others. You can follow your own style and explore the creative possibilities that pseudo-classes and pseudo-elements offer.</p>
        <br />
        <h2>Practical use of pseudo</h2>
        <p>By now you should know that developers use pseudo-classes to style and make web pages more interactive. In this video, you will explore pseudo-classes that you can use to style links on web pages, namely web-link states. Although, you can use web-link states for many functionalities, developers often use them to style the color of links that a user already opened. For instance, a HTML file can have two a tags, each with its own href that links to a different page of a website. To give the links their initial color, you can use the link pseudo-class selector, and to let the links change color, once a user has visited these pages, you can use the visited pseudo-class selector. But if you're using multiple pseudo-classes for a specific element, there is an important rule to keep in mind. The order in which you apply pseudo-classes in a document determines which style will be displayed. So be careful not to accidentally overwrite a style you want to set. Developers use the acronym LVHA to remind them of the order that they need to follow when writing pseudo-class rules. LVHA stands for link, visited, hover, active. So always apply pseudo-class styles in the correct order. First link, then visited, next hover, and lastly active. Now that you know more about web-link states, let's explore how to use the link, visited, hover, and active pseudo-classes. Additionally, you will learn two more effects that you can create with the hover pseudo-class. In the pseudo_links.html file, I added three tags: a heading tag, followed by a paragraph tag, and another paragraph tag. In the heading tag, I added the name of the restaurant, Little Lemon, and the first paragraph tag has a link to their Instagram page. Now I go to my CSS code by clicking on the pseudo_links.css file at the top of my screen. In this file, I already added properties related to the pseudo-classes we discussed previously, namely link, visited, hover, and active. To display the output of this code, I moved back to my HTML file and click the "View" icon at the top right of my screen. By default, the link to the Little Lemon Instagram page displays in a blue color because I set it to blue with the link pseudo-class in the CSS code. As expected, when I move the mouse over the link, the color changes to green because I added green as the value of the color attribute in the hover pseudo-class. Let's test what happens when I click and hold the link. It changes to white text on a black background, just like defined with the active pseudo-class property. When I click on the link to visit the Little Lemon Instagram page, the system asked me to connect to an external source, since I am using Visual Studio Code. I click the "Cancel" option for now. But after I visit the link, the color of the link will change to violet because I defined it to do that with the visited pseudo-class. I'm now going to demonstrate how you can use the pseudo-class hover. To do this, I use the pseudoshadow.html file I created previously. In this file, I added four paragraph tags, each belonging to a class called textual. I also added random text, commonly used in publishing and graphic design as placeholder text. The CSS code that I added is fairly simple. The first property defines the properties of the textual class. The second property defines the effect that the pseudo-class hover will have on the textural class. For the hover pseudo-class, I use the shorthand for a box-shadow property. As you've seen earlier, box-shadow adds one or more shadows to an element. The horizontal offset is set to five pixels, the vertical offset is set to zero pixels, the blur radius is set to 25 pixels, and the color of the shadow is set to black. I moved back to my HTML file to output this code and click on the "View" icon. The Little Lemon page with blocks of texts displays. The texts looks like regular blocks of texts. But when I hover over a block of code with my mouse, it gets highlighted with a box-shadow around the edges. I get the same effect when I hover over any other block of text as all the blocks of texts belong to the same textual class. This is an interesting effect that is simple to create with the help of the hover pseudo-class. In this video, you learned how to use pseudo-classes like web-link states to improve the interactivity of web pages. You also explored additional effects that you can create with the hover effect.</p>
        <br />
        <p>{`a:link {
                color: blue;
            }

            a:visited {
                color: purple;
            }
            
            a:hover{
                color: green;
            }
            
            a:active{
                color: white;
                background-color: black;
            }
            `
        }</p>
        <li><a target="_blank" href="https://aleccross.github.io/react-css/">react-css</a></li>
        <li><a target="_blank" href="https://aleccross.github.io/react-css/#/flexbox">flexbox</a></li>

        <h2>LCHA</h2>
        <p><b>Link, visited, hover, active</b></p>
        <p>:link</p>
        <p>:visited</p>
        <p>:hover</p>
        <p>:active</p>
    </>
}
