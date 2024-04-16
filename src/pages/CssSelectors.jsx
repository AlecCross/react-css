import React from 'react'
import BackToMain from '../components/BackToMain'
import combinationSelectors from '../css-modules/combinationSelectors.module.css'

export default function CssSelectors() {
    return <>
        <BackToMain />
        <div>Combination selectors</div>
        <h1>All selectors and their specificity</h1>
        <p>As you build a website, the complexity of the code might increase to such a point that more than one CSS rule is applied to the same element. Or, you might accidentally add more than one rule over the same element. This results in conflicts as only one rule can be applied to a specific property. For example, the color of a certain p tag can either be blue or white, but not both. CSS engines use something called specificity to resolve these conflicts. Specificity is the ranking or score that helps CSS determine the final rule that will be applied to a given element. </p>
        <p>This reading will help you grasp how the element with the ‘highest’ specificity is selected by CSS. But before you read on, it is important to note that these rules only apply in cases where conflicts arise for the properties. </p>
        <h2>Specificity hierarchy</h2>
        <p>CSS has a set of rules that it uses to ‘score’ or assign a certain weight to selectors and this creates a specificity hierarchy. Based on the weights, there are four categories in this hierarchy: </p>
        <ul>
            <li>Inline styles </li>
            <li>IDs </li>
            <li>Classes, attributes, and pseudo-classes </li>
            <li>Elements and pseudo-elements</li>
        </ul>
        <h3>Inline styles</h3>
        <p>Inline styles are attached to the elements within your HTML code like with the ‘style’ attribute. inline styles have the highest specificity. That means that rules that are defined as inline styles will be applied irrespective of other rules. </p>
        <p>For example, take these two rules that create a conflict in color styling for a p tag:</p>
        <p>
            {`<p style=“color: white;”>
            p{color: blue}
            `}
        </p>
        <p>The p tag will be colored white because it is declared inside the inline tag. </p>
        <h3>IDs</h3>
        <p>Next in the hierarchy are IDs and by now you know that they are represented by ‘#’.  For example:</p>

        <p>#div</p>

        <h3>Classes, attributes, and pseudo-classes</h3>
        <p>Classes, and the attributes inside the selectors, come next with what is called the pseudo-classes that you will soon learn more about.</p>

        <p>For example:</p>

        <div><b>.my-class</b></div>

        <b>p[“attribute”]</b>

        <b>div:hover</b>

        <h3>Elements and pseudo-elements</h3>
        <p>Finally, elements and something you call pseudo-elements have the lowest position in the specificity hierarchy. You will learn more about pseudo-elements later in this lesson.</p>

        <h2>Calculating scores</h2>
        <p>But by now you might wonder how is specificity calculated?</p>

        <p>CSS uses the hierarchical model internally to calculate the specificity of the selectors used on a web page. But often as the size of CSS code increases, developers unavoidably face rule conflicts. In these cases, developers use the specificity hierarchy to calculate the precedence of CSS rules and to control the outcome of their web pages.</p>

        <p>Let’s explore a practical example of how to determine the score of a few selectors.</p>

        <b>#hello { } will be 0100</b>

        <b>div { } will be 0001 and</b>

        <b>div p.foo { } will be 0012</b>

        <p>In the order stated above, the four categories will be assigned values 1000, 100, 10 and 1 with the element selectors having the lowest value of 1. These scores will be calculated respectively for each element present inside the selector. The total score for these elements is then calculated and the one with the highest value has the highest specificity.</p>

        <p>Let’s explore a couple of examples for clarity. Take note that the properties and values are not included in these examples to keep the focus on the selectors only.</p>

        <h2>Example 1</h2>

        <p>{`p#bar => 1 element & 1 ID =>  0 1 0 1 => Score: 101`}</p>

        <p>{`p.foo => 1 element & 1 class => 0 0 1 1 => Score: 11`}</p>

        <p>{`p.p.foo => 1 element & 2 class =>  0 0 2 1 => Score: 21`}</p>

        <p>By now it should be clear that the case containing ID has a much higher score and the rules inside it will be applied.</p>

        <p>Once you learn about the different pseudo-classes, pseudo-elements, and wide range of selectors later in this section, it will be easy to see why understanding specificity is important.</p>

        <p>While the weights assigned from the hierarchical structure help in a systematic approach, there are a few more guidelines and rules that become important especially in cases when the score for the different selectors is the same. Some of these are:</p>

        <ul>
            <li>Every selector will have a score and place in the hierarchy</li>
            <li>In the case of selectors with equal specificity, the latest or last written rule is the one that will be applied</li>
            <li>In general, ID selector should be applied in cases where you need to be certain about a rule </li>
            <li>Universal selectors have zero specificity value</li>
        </ul>

        <p>
            This reading only gave you an overview of specificity, but you should know that it is a much broader topic and also the underlying basis on which CSS engines work. That's what the 'Cascading' in CSS means: the way in which CSS engines evaluate and apply the specificity rules is called ‘cascade’. Cascade is a type of small waterfall that falls in stages down the rocks and that is exactly how CSS behaves.
        </p>

        <p>Don’t be too worried about applying what you’ve learned now, there are CSS specificity calculators available that can help you with determining the styling outcomes of your pages. </p>

        <h1>
            Combination selectors
        </h1>

        <p>
            Sometimes you want to apply the same styling to different elements or to different groups of elements. CSS makes it possible to combine more than one selector so that you can apply rules to elements based on their relationship with one another. You do this with combination selectors, and there are four main types. Namely, descendant selectors, child selectors, general sibling selectors and adjacent sibling selectors. In this video you will learn about combination selectors and how you can use them to target more specific elements. Let's start with descendant selectors. Descendant selectors are useful if you need to select HTML elements that are contained within another selector. The easiest way to remember descendant selectors is to think of a family. You pick a person in the family and then select all descendants, such as children, grandchildren and great grandchildren, who have, say, brown hair. For example, you can have an HTML file with a div tag, and its ID attributes set to blog, inside the div tag are a few heading tags. In this example, all h1 elements are descendants of the element with the ID blog. So to make all the h1 descendants blue, you can add the ID selector hash #blog followed by the h1 selector with a space in between and then the properties in curly brackets. Child selectors on the other hand are more specific than descendant selectors. To go back to the family example, with child selectors you select a person and then select only their immediate children who have red hair. Let's update the previous selector to a child selector by adding a close angle bracket in between the two selectors. The effect is that now only the first h1 element turns blue. This is because it is the only h1 element that is a child of the element with the blog id attribute. Next, let's focus on general sibling selectors, which apply rules to all the selectors of the same type that follow the first type. To use the family analogy again, general sibling selectors allow you to select a person and then select all younger brothers with black hair. You can update the selector with a tilde in between the two selectors to make it a general sibling selector. The selector now targets all paragraph elements that are siblings of h1 element, the result is the last two paragraph elements turn blue. Notice that the first paragraph element didn't turn blue, this is because the general sibling selector only select subsequent elements that match the selector. In comparison to sibling selectors, you can use adjacent sibling selectors to target only the first or adjacent element that follows another element. Once again, if you think about a family, this selector selects a person and then selects the next younger brothers. Finally, let's replace the tilde with a plus sign to update this selector to an adjacent sibling selector. The selector now selects all paragraph elements that are adjacent siblings of the h1 element. The result is that only the middle paragraph element turns blue. This is because the adjacent sibling selector only selects the first subsequent element if it matches the selector. Now that you are more familiar with combination selectors, let's explore a few practical examples. I will now demonstrate two combination selectors, the general sibling selector and the adjacent sibling selector. Let's start with the general sibling selector. Remember, the general sibling selectors select all the matching elements of the second type which follow the first type. The html file has a paragraph tag with the words, Basic Info About Little Lemon, and that is followed by a div tag with the word, About. After the div tag, there is an ordered list with three list items. This structure repeats below. So there is another paragraph tag, a div tag, and then an ordered list with two list items. Now, let's inspect the CSS rules. First, I set basic rules for the html body. This is so that the special effect that I will apply with the sibling selector will stand out. Below the styling for the body is the general sibling selector. I set the div tag as the parent and the un ordered list as the sibling. Remember, for the sibling selector, you always use a tilde. This time I specify a contrasting background color, white. Then notice that I added the box shadow effect. As the name indicates, it adds a box with a shadow around the element that you target. The box shadow property consists of the horizontal offset, set to one pixel, the vertical offset, set to one pixel, and then the blur radius, which I set to three pixels. Thereafter, you need to specify the color of the shadow, which in this case is set to gray. So what elements will be styled? Remember, sibling selectors apply rules to all the selectors of the same type that follow the first type. Let's go to the html again to identify what will be styled. The first div tag is the reference. So the rules will target the un ordered list that follows it. And again, the second div tag will also serve as a reference and the rules will affect the un ordered list that follows it. Let's inspect the output. The background is orange and there are two box shadows, each with un ordered list inside it. Notice that the subheadings that are inside div tags, About and Employee or Owner, just have the body styling. The sibling selector only targets the items that follow the div tags. By now you should realize that you can use the sibling selector to efficiently apply the same styling to several elements with one rule. If there is another instance where an un ordered list follows a div tag on this page, it will also have a box shadow. But say the page has other un ordered lists that do not follow a div tag, the styling will not be applied to those elements. Next, I will demonstrate how to use the adjacent selector. The html file contains an image tag and then three paragraph tags. Thereafter, there is another image tag followed by a div tag and then a paragraph tag. Lastly, there is another image tag followed by a paragraph tag. Notice that the first paragraph after the top and bottom images are descriptions of the images above it. So I want to style these paragraphs so that it looks like captions. In other words, I want to style all paragraphs that follow an image but not affect any other paragraphs or other elements like a div tag. And I can do this with the adjacent selector. Because remember,, the difference between an adjacent selector and a sibling selector, is that the adjacent selector only targets the first element following the reference element. Whereas the sibling selector targets all the elements of the same type after the reference element. Let's inspect the output and CSS code. As explained, the first paragraph that follows the image is styled differently than the next two paragraphs. Notice that I set up the styling in the adjacent rule so that it will appear as a caption. The text is smaller and aligned in the center. Again, with one rule I applied styling to two captions. If you have a site with many images and captions, the adjacent selector will be very helpful and save you a lot of time. In this video, you learned about combination selectors and how to use them. As you become more advanced in styling your Web pages, these CSS selectors will surely be helpful in targeting specific items and save you a lot of time.
        </p>
        <br />
        <h2>Descendant selectors</h2>
        <p translate="no">{`#blog h1 {
                color: blue;
            }`}</p>
        <br />
        <div id={combinationSelectors.blog}>
            <h1>Latest News</h1>
            <div>
                <h1>Weather News</h1>
                <p>The weather will be sunny</p>
                <p>Tomorrow will be rainy</p>
            </div>
        </div>
        <br />
        <h2>{`Child selectors (>)`}</h2>
        <br />
        <p translate="no">{`#blogChild > h1 {
            color: blue;
        }`}</p>
        <div id={combinationSelectors.blogChild}>
            <h1>Latest News</h1>
            <div>
                <h1>Weather News</h1>
                <p>The weather will be sunny</p>
                <p>Tomorrow will be rainy</p>
            </div>
        </div>
        <br />
        <h2>General Sibling selectors (~)</h2>
        <p translate="no">{`#blogSibling h1 ~ p {
                                color: blue;
                            }`}</p>
        <div id={combinationSelectors.blogSibling}>
            <h1>Latest News</h1>
            <div>
                <h1>Weather News</h1>
                <p>The weather will be sunny</p>
                <p>Tomorrow will be rainy</p>
            </div>
        </div>
        <h2>Adjacent Sibling selectors (Dont work)</h2>
        <p translate="no">{`#blogAdjacent h1 + p {
                                color: blue;
                            }`}</p>
        <div id={combinationSelectors.blogAdjacent}>
            <h1>Latest News</h1>
            <div>
                <h1>Weather News</h1>
                <p>The weather will be sunny</p>
                <p>Tomorrow will be rainy</p>
            </div>
        </div>
        <br />
        <h2>General Sibling selectors</h2>
        <p translate="no">{`
        .wrapper {
            color: #333333;
            background-color: #EE9972;
            font-family: Cambria;
        }
        
        div~ul {
    background-color: #EDEFEE;
    color: 495E57;
    box-shadow: inset 1px 1px 3px #333333;
    margin: 15px;
}`}</p>
        <div className={combinationSelectors.wrapper}>
            <p><b>Basic Info about Something</b></p>
            <div>About (div)</div>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </li>
                <li>Suscipit rerum consectetur aspernatur est cupiditate harum deleniti tempora dicta? </li>
                <li>Eius eaque qui veniam quaerat ipsam nam. Veritatis eaque suscipit minima ipsa?</li>
            </ul>
            <p><b>Info about another</b></p>
            <div>Lorem (div)</div>
            <ul>
                <li>Suscipit rerum consectetur aspernatur est cupiditate harum deleniti tempora dicta?</li>
                <li>Eius eaque qui veniam quaerat ipsam nam. Veritatis eaque suscipit minima ipsa?</li>
            </ul>
            <br />
        </div>
        <br />
        <h2>Adjacent Sibling selectors</h2>
        {`img + p {
    color: #495E57;
    padding-left: 70px;
    padding-bottom: 20px;
    font-size: small;
    font-family: Verdana;
}`}

        <div>
            <img src="https://aleccross.github.io/react-css/logo192.png" alt="logo1921" width={320} />
            <p>First paragraph after image tag</p>

            <p>Second Paragraph tag</p>
            <p>Another Paragraph tag</p>

            <img src="https://aleccross.github.io/react-css/logo192.png" alt="logo1922" width={320} />
            <div>Div tag after image</div>
            <p>Paragraph</p>

            <img src="https://aleccross.github.io/react-css/logo192.png" alt="logo1923" width={320} />
            <p>First paragraph after image tag</p>
        </div>
    </>
}
