o // -----------------------------------
 //nested elements
 //    <div id="parent">
 //     <div id = "child">
 //         <h1></h1>
 //     </div>
 //    </div>
 //If we want to create array of childrens we have to create it in []
 //* <div id="parent">
 //     <div id = "child">
 //         <h1></h1>
 //         <h2></h2>
 //     </div>
 //    </div> */
 // const parent = React.createElement(
 //     "div", {id: "parent"},
 // React.createElement(
 //     "div",{id:"child"},
 //     // creating array of child
 //     [React.createElement("h1", {}, "Nested Elements"),React.createElement("h2", {}, "Array of Child")]));
 // console.log(parent);
 // const root = ReactDOM.createRoot(document.getElementById("root"));
 // root.render(parent);
 // const heading = React.createElement("h1",{
 //     id:"heading" , xyz: "abc"
 // },"Hello World from REACT!");
 //     console.log(heading);
 //     const root = ReactDOM.createRoot(document.getElementById("root"));
 //     root.render(heading);
 //Before we begin, we have to remove the existing React Code from
 // App.js where we used React.createElement() for displaying content
 // on the webpage but its syntax is very bad. It’s not developerfriendly, and very hard to read. To solve this problem Facebook
 // developers built JSX.
 // JSX makes developer life easy as we no longer have to write our
 // code using React.createElement()
 // 📢 NOTE: We write code for both Machines and Humans but
 // first for Human understanding as it is read by a lot of
 // developers
;

//# sourceMappingURL=EP1.6bd02f5a.js.map
