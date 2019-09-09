/* 
  1. Consider the following code what will the console.log output be and why?
  Name the JS rule that is responsible for this behavior.
  console.log(my_variable);
  var my_variable = 1;
*/

const answer1 = `
  Output will be 'undefined' coz it is normal JS bahaviour and it is called hoisting.
  Use let or const that avoid this behaviour if you don't need global variable.
`;

/*
  2.⦁	Create a function named parseUrl(string) which will receive URL string as parameter
  and will return an object with parsed data as shown in the following demo.
*/
const parseURL = providedURL => {
  let url = new URL(providedURL);
  const urlParams = {
    href: url.href,
    origin: url.origin,
    host: url.host,
    protocol: url.protocol,
    hostName: url.hostname,
    pathName: url.pathname,
    port: url.port || "",
    search: url.search || "",
    hash: url.hash || "",
    user: url.user || "",
    password: url.password || ""
  };
  return urlParams;
};

const urlParams = parseURL("http://ffwagency.com/do/any.php?a=1#foo");

console.log(urlParams);
console.log(urlParams.hash);
console.log(urlParams.hostName);
console.log(urlParams.pathName);

/*
  3.⦁	Consider the following data object. Use ES6 feature to easily create variables that extract
  and store values from the data object to obtain:
  ⦁	A variable called “names” that will contain data.names
  ⦁	A variable called “enrolled” that will contain value from data.enrolled but will default to “false”
  in case data.enrolled doesn’t exist or is not usable
  ⦁	A variable called “marks” that will contain value from data.marksss
*/

const data = {
  names: ["A", "B", "C"],
  enrolled: true,
  marksss: {
    A: [1, 1, 1],
    B: [2, 2, 2],
    C: [3, 3, 3]
  }
};

const names = [...data.names];
const enrolled = data.enrolled ? data.enrolled : false;
const marks = { ...data.marksss };

console.log(names);
console.log(enrolled);
console.log(marks);

/*
  4.Consider the scenario from the image below. You have a “functionality” helper object that you reuse.
    In it you attach a click handler called “clickListener” that should ultimately change “isActive” and call “checkTriggered”.
    When a user clicks on a link: will your code execute correctly? If not – how should we fix it while keeping 
    this original object structure?
  */

var functionality = {
  isActive: false,

  addListeners: function() {
    let links = document.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", this.clickListener);
    }
  },

  clickListener: event => {
    event.preventDefault();
    this.isActive = !this.isActive;
    console.log("Changing isActive state to: " + this.isActive);
    functionality.checkTriggered();
  },

  checkTriggered: function() {
    console.log("From checkTriggered");
  }
};

functionality.addListeners();

/*
  5.
  ⦁	You work on a jQuery project. Considering the following HTML code on a page.
    You need to extract all div.node only from the articles wrapper. How many ways of 
    selector-picking using jQuery can you enumerate for this case?
*/

$(".articles .node");
$(".articles > .node");
$(".articles >");
$(".articles").find(".node");
$("div:not(.blogs > )");
$("div:lt(4)");
$(".articles").children();
$(".articles").children(".node");

/*
  6.⦁	Write a short JS snippet that pulls JSON users data from
    https://jsonplaceholder.typicode.com/users. Once you have the data print a div
    for each user instance object received like in the following example
*/

$(document).ready(function() {
  (async function getData() {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const usersList = await axios.get(baseUrl + "/users");
    usersList.data.map(user => {
      document.getElementById("user-name").innerHTML += user.name + "<br/>";
    });
    usersList.data.map(user => {
      document.getElementById("user-email").innerHTML += user.email + "<br/>";
    });
  })();
});

/*
  7.⦁	At what point do you recommend to run AJAX requests 
    (or trigger other asynchronous tasks)during a React Component lifecycle? Why?
*/

const answer7 = `
1. The most common way to do this is in the componentDidMount () method.

2. The second option is to do this in the componentDidUpdate () method, if we need to 
   pass some parameters from the props, such as history, location, match.
   Be careful, we need to write the necessary conditions to avoid an infinite loop.

$. Of course, we will be use Redux and middleware such as redux-thunk and redux-saga.

3. So we can do this in our reducers with redux-thunk.

4. And finally, the best place to do our side-effects it is redux-saga.
`;

/*
  8. Considering the following react component please pick one or more correct ways of passing a handler to a component.
  Also, explain what happens when you click each button from this component?
*/

// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.text = "This is expample of text";
//     this.handler2 = this.handler1.bind(this);
//   }

//   handler1() {
//     alert(this.text);
//   }

//   handler3 = () => alert(this.text);

//   render() {
//     return (
//       <div>
//         <button onClick={this.handler1()}>First</button>
//         <button onClick={this.handler1}>Second</button>
//         <button onClick={this.handler2}>Third</button>
//         <button onClick={this.handler3}>Four</button>
//       </div>
//     );
//   }
// }

const answer8 = `
  1. Alert from the first button will be executed immediately. Don't use function call use function reference instead.
  
  2. When we click the second button will be the error. We can't use "this" in regular methods. Simple fix use

    handler1 = () => alert(this.text);

  3. When we click the third button all works as expected, but I usually use 
  
    this.handler2 = () => this.handler1() insted this.handler1.bind(this);
  
  4. When we click the fourth button all works well. We can observe the alert with the provided text.
`;

/* 
  9. Convert the following image to HTML/CSS/JS. Make it responsive using your best judgment.
     The font used in the design is Montserrat from Google Fonts. Please create Tabs navigation with vanilla JS.
     In BUY FONTS tab show dummy text that is centered by both axis. For Cards component, add Radio button 
     group behavior without javascript. Style Card with 50% opacity when this has an active state.
*/

$(document).ready(function() {
  function onTabClick(event) {
    let activeTabs = document.querySelectorAll(".active");
    activeTabs.forEach(function(tab) {
      tab.className = tab.className.replace("active", "");
    });

    event.target.parentElement.className += " active";
    document.getElementById(event.target.href.split("#")[1]).className +=
      " active";
  }

  const element = document.getElementById("nav-tab");

  element.addEventListener("click", onTabClick, false);

  (() => {
    var ctx = document.getElementById("canvas1").getContext("2d");
    ctx.font = "bold 30px sans-serif";
    ctx.fillStyle = "#fff";
    ctx.fillText("M", 10, 20);
  })();

  (() => {
    var ctx = document.getElementById("canvas2").getContext("2d");
    ctx.font = "bold 20px sans-serif";
    ctx.fillStyle = "#fff";
    ctx.fillText("R", 10, 20);
  })();

  (() => {
    var ctx = document.getElementById("canvas3").getContext("2d");
    ctx.font = "bold 20px sans-serif";
    ctx.fillStyle = "#fff";
    ctx.fillText("NS", 10, 20);
  })();
});

var Human = function() {
  this.race = "Humanoid";
};

Human.prototype.doSomething = function() {
  console.log("Hello " + this.race);
};

var Person = function() {
  Human.call(this);
  this.name = "Vladimir";
};

Person.prototype = Object.create(Human.prototype, {
  constructor: {
    value: Person,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

Person.prototype.doAnotherAction = function() {
  console.log("My name is " + this.name);
};

var person = new Person();

console.log(person.doSomething());
console.log(person.doAnotherAction());


patternlab, storybook, kccnode