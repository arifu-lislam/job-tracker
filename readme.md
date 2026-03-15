1)What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer--->
when browser read html file , it makes a structure of tree.this structure is dom.every elements of this tree is called node.we changed dom by javascript language.we find element from dom by using getElementById,getElementByClassName,getElementByTagName.querySelector,querySelectorAll .
getElementById catched by (id) and return single element,
querySelector catched by css selector (id,class,tag_name ) and return single element,
getElementsByClassName is catched by (className) and return html collection(live) ,
querySelectorAll is catched by css selector (id,class,tag_name ) and return html nodelist(static) ,
getElementsByTagName catched by (tag_name) and return html collection

2)How do you create and insert a new element into the DOM?
Answer--->
firstly i create a tag by using javascript
const Tag_name = createElement('tag_name');
and than i will insert some text within this tag
Tag_name.innerText = "new text"
and than i will append new text
appendChild(Tag_name);

3. What is Event Bubbling? And how does it work?
   Answer--->
   when event is happen to a element it goes to upper parent element step by step.
   firstly event goes to down by capture to the target phage and after bubbling goes to upper .but we control this bubble stopPropagation method.

4)What is Event Delegation in JavaScript? Why is it useful?
Answer--->
Event Delegation is a process where we use a event listener within the parentNode instade of using event within every child element.it is working by event Bubbling .when a event is happen on a element ,this event is happen in this element and than it goes to parent--> grandparent-->document

5)What is the difference between preventDefault() and stopPropagation() methods?j
Answer ---->
i think i cannot answer it.may be i forget it.
