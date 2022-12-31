import React from 'react'
import BackToMain from '../components/BackToMain'

export default function CSS_units_of_measurement() {
    return <>
        <BackToMain />
        <h1>CSS units of measurement</h1>
        <br />
        <p>
            A web page, as you know it, is two-dimensional. In other words, it has width and height. There are a number of other ways you can express this such as vertical and horizontal, length and breadth, x and y axis and so on. Another property of a web page is its size which can either be static or dynamic. When you’ve encountered enough CSS code, you will note a number of different ways in which the values for the same property can be declared using different units of measurement. Most of these units of measurement are used to account for the dynamism and dimensionality of a web page.
        </p>
        <br />
        <p>
            Let’s examine the most widely used units of measurement. They can broadly be categorized as Absolute and Relative units.
        </p>
        <br />
        <h2>Absolute units</h2>
        <br />
        <p>
            Absolute units are constant across different devices and have a fixed size. They are useful for activities like printing a page. They are not so suitable when it comes to the wide variety of devices in use today that have different viewport sizes. Because of this, absolute units are used when the size of the web page is known and will remain constant.
        </p>
        <p>
            The table for absolute units can be seen below:
        </p>
        <table style={{border: "solid black 1px"}}>
            <td style={{border: "solid black 1px"}}>
                <th>Unit</th>
                <tr>Q</tr>
                <tr>mm</tr>
                <tr>cm</tr>
                <tr>in</tr>
                <tr>pc</tr>
                <tr>pt</tr>
                <tr>px</tr>
            </td>
            <td style={{border: "solid black 1px"}}>
                <th>Name</th>
                <tr>Quarter-millimeters</tr>
                <tr>Millimeters</tr>
                <tr>Centimeters</tr>
                <tr>Inches</tr>
                <tr>Picas</tr>
                <tr>Points</tr>
                <tr>Pixels</tr>
            </td>
            <td style={{border: "solid black 1px"}}>
                <th>Comparison</th>
                <tr>1Q = 1/40th of 1cm</tr>
                <tr>1mm = 1/10th of 1cm</tr>
                <tr>1cm = 37.8px = 25.2/64in</tr>
                <tr>1in = 2.54cm = 96px</tr>
                <tr>1pc = 1/6th of 1in</tr>
                <tr>1pt = 1/72nd of 1in</tr>
                <tr>1px = 1/96th of 1in</tr>
            </td>
        </table>
        <br />
        <p>Of these, the pixels and centimeters are most frequently used for defining properties. </p>
        <br />
        <h2>Relative values</h2>
        <br />
        <p>
            When you create a web page, you will almost never have only a single element present inside it. Even in case of containers such as flexboxes and grids, there’s usually more than one element present that rules are applied to. Relative values are defined ‘in relation’ to the other elements present inside the parent element. Additionally, they are defined ‘in relation’ to the viewport or the size of the visible web page. Given the dynamic nature of web pages today and the variable size of devices in use, relative units are the go-to option in many cases. Below is a list of some of the important relative units.
        </p>
        <br />
        <table style={{border: "solid black 1px"}}>
            <td style={{border: "solid black 1px"}}>
                <th>Unit</th>
                <tr>em</tr>
                <tr>ex</tr>
                <tr>ch</tr>
                <tr>rem</tr>
                <tr>lh</tr>
                <tr>rlh</tr>
                <tr>vw</tr>
                <tr>vh</tr>
                <tr>vmin</tr>
                <tr>vmax</tr>
                <tr>%</tr>
            </td>
            <td style={{border: "solid black 1px"}}>
                <th>Description and relativity</th>
                <tr>Font size of the parent where present.</tr>
                <tr>x-co-ordinate or height of the font element.</tr>
                <tr>Width of the font character.</tr>
                <tr>Font size of the root element.</tr>
                <tr>Value computed for line height of parent element. </tr>
                <tr>Value computed for line height of root element which is html. </tr>
                <tr>1% of the viewport width.</tr>
                <tr>1% of the viewport height.</tr>
                <tr>1% of the smaller dimension of viewport.</tr>
                <tr>1% of the larger dimension of viewport.</tr>
                <tr>Denotes a percentage value in relation to its parent element. </tr>
            </td>
        </table>
        <br />
        <p>
            Many of these units are used in terms of the relative size of fonts. Some units are more suitable depending on the relative context. Like when the dimensions of the viewport are important, it's more appropriate to use <b>vw</b> and <b>vh</b>. In a broader context, the relative units you will see most frequently used are percentage, <b>em</b>, <b>vh</b>, <b>vw</b> and <b>rem</b>.
        </p>
        <br />
        <p>
            Much like the absolute and relative units discussed above, certain properties have their own set of acceptable values that need to be taken into account. For example, color-based properties such as <b>backgroundcolor</b> will have values such as hexadecimal, <b>rgb(), rgba(), hsl(), hsla()</b> and so on. Each property should be explored on an individual basis and practicing with the code will help you to decide which of these units of measurement are the most suitable choice.
        </p>
    </>
}
