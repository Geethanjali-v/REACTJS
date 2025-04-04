 g1.{} -- refers about attributes (ex: id: "heading" , xyz:"abc")
 2.we need to create root inside react using reactdom, to  put the elements into browser/dom we have to use reactdom
 3. create a root for our library
 4. nested elements
 <div id="parent">
     <div id = "child">
         <h1></h1>
     </div>
    </div>
 5.React element are objects and then it becomes html which browser understands
 6. If we want to create array of childrens we have to create it in []
 <div id="parent">
     <div id = "child">
         <h1></h1>
         <h2></h2>
     </div>
    </div> 
 7. Here we wrote all the code using react but it doesn't look good, 
 so we would be using JSX to make our life easy to create elts and the code
 8. whatever we write inside root elt will get replaced with the rendering elt and we can observe it while refreshing 