
// Question sets for different subjects
const questionSets = {
    python: [
    {
        id: "0",
        question: "What is the output of print(2**3)?",
        options: ["6", "8", "9", "12"],
        correct: "8",
    },
    {
        id: "1",
        question: "Which of the following is not a keyword in Python?",
        options: ["eval", "assert", "nonlocal", "async"],
        correct: "eval",
    },
    {
        id: "2",
        question: "What will be the output of 'Hello' + 'World' in Python?",
        options: ["Hello World", "HelloWorld", "Hello + World", "Error"],
        correct: "HelloWorld",
    },
    {
        id: "3",
        question: "How do you create a variable with a floating-point number in Python?",
        options: ["x = float(7)", "x = 7.0", "x = 7f", "Both A and B"],
        correct: "Both A and B",
    },
    {
        id: "4",
        question: "What is the correct file extension for Python files?",
        options: [".pyth", ".pt", ".pyt", ".py"],
        correct: ".py",
    },
    {
        id: "5",
        question: "Which of the following statements is used to exit a loop in Python?",
        options: ["quit", "exit", "break", "return"],
        correct: "break",
    },
    {
        id: "6",
        question: "What is the output of 2 + 2 * 3 in Python?",
        options: ["10", "16", "8", "None of the above"],
        correct: "8",
    },
    {
        id: "7",
        question: "Which one of these is not a core data type in Python?",
        options: ["Lists", "Dictionary", "Tuples", "Class"],
        correct: "Class",
    },
    {
        id: "8",
        question: "What is used to define a block of code (body of loop, function etc.) in Python?",
        options: ["Curly braces", "Parentheses", "Indentation", "Quotation"],
        correct: "Indentation",
    },
    {
        id: "9",
        question: "What is the method inside the class in Python?",
        options: ["Object", "Function", "Attribute", "Argument"],
        correct: "Function",
    },
    {
        id: "10",
        question: "Which of the following is not a Python data type?",
        options: ["Integer", "Float", "Complex", "Double"],
        correct: "Double",
    },
    {
        id: "11",
        question: "Which of the following operators in Python has the highest precedence?",
        options: ["+", "*", "/", "**"],
        correct: "**",
    },
    {
        id: "12",
        question: "What is the output of the following code? \n```python\nx = [0, 1, [2]]\nprint(x[2][0])\n```",
        options: ["2", "[2]", "1", "0"],
        correct: "2",
    },
    {
        id: "13",
        question: "Which of the following is used to create a list in Python?",
        options: ["()", "[]", "{}", "<>"],
        correct: "[]",
    },
    {
        id: "14",
        question: "What is the output of the following code? \n```python\nx = 'hello'\nprint(x[::-1])\n```",
        options: ["hello", "olleh", "h", "o"],
        correct: "olleh",
    }
    ],
    html: [
        {
            id: "0",
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Hyperlinks and Text Markup Language",
                "Home Tool Markup Language",
                "None of the above",
            ],
            correct: "Hyper Text Markup Language",
        },
        {
            id: "1",
            question: "Who is making the Web standards?",
            options: [
                "The World Wide Web Consortium",
                "Google",
                "Microsoft",
                "Mozilla"
            ],
            correct: "The World Wide Web Consortium",
        },
        {
            id: "2",
            question: "Choose the correct HTML element for the largest heading:",
            options: [
                "&lt;h1&gt;",
                "&lt;heading&gt;",
                "&lt;h6&gt;",
                "&lt;head&gt;"
            ],
            correct: "&lt;h1&gt;",
        },
        {
            id: "3",
            question: "What is the correct HTML element for inserting a line break?",
            options: [
                "&lt;br&gt;",
                "&lt;lb&gt;",
                "&lt;break&gt;",
                "&lt;newline&gt;"
            ],
            correct: "&lt;br&gt;",
        },
        {
            id: "4",
            question: "What is the correct HTML for adding a background color?",
            options: [
                "&lt;body style=\"background-color:yellow;\"&gt;",
                "&lt;background&gt;yellow&lt;/background&gt;",
                "&lt;body bg=\"yellow\"&gt;",
                "&lt;bgcolor&gt;yellow&lt;/bgcolor&gt;"
            ],
            correct: "&lt;body style=\"background-color:yellow;\"&gt;",
        },
        {
            id: "5",
            question: "Choose the correct HTML element to define important text",
            options: [
                "&lt;strong&gt;",
                "&lt;important&gt;",
                "&lt;i&gt;",
                "&lt;b&gt;"
            ],
            correct: "&lt;strong&gt;",
        },
        {
            id: "6",
            question: "Choose the correct HTML element to define emphasized text",
            options: [
                "&lt;i&gt;",
                "&lt;italic&gt;",
                "&lt;em&gt;",
                "&lt;emphasized&gt;"
            ],
            correct: "&lt;em&gt;",
        },
        {
            id: "7",
            question: "Which character is used to indicate an end tag?",
            options: [
                "/",
                "*",
                "&lt;",
                "^"
            ],
            correct: "/",
        },
        {
            id: "8",
            question: "How can you make a numbered list?",
            options: [
                "&lt;ol&gt;",
                "&lt;ul&gt;",
                "&lt;list&gt;",
                "&lt;dl&gt;"
            ],
            correct: "&lt;ol&gt;",
        },
        {
            id: "9",
            question: "How can you make a bulleted list?",
            options: [
                "&lt;ul&gt;",
                "&lt;ol&gt;",
                "&lt;list&gt;",
                "&lt;dl&gt;"
            ],
            correct: "&lt;ul&gt;",
        },
        {
            id: "10",
            question: "What is the correct HTML for making a checkbox?",
            options: [
                "&lt;input type=\"checkbox\"&gt;",
                "&lt;checkbox&gt;",
                "&lt;check&gt;",
                "&lt;input type=\"check\"&gt;"
            ],
            correct: "&lt;input type=\"checkbox\"&gt;",
        },
        {
            id: "11",
            question: "What is the correct HTML for making a text input field?",
            options: [
                "&lt;input type=\"text\"&gt;",
                "&lt;textinput&gt;",
                "&lt;input type=\"textfield\"&gt;",
                "&lt;textfield&gt;"
            ],
            correct: "&lt;input type=\"text\"&gt;",
        },
        {
            id: "12",
            question: "What is the correct HTML for making a drop-down list?",
            options: [
                "&lt;select&gt;",
                "&lt;list&gt;",
                "&lt;dropdown&gt;",
                "&lt;input type=\"dropdown\"&gt;"
            ],
            correct: "&lt;select&gt;",
        },
        {
            id: "13",
            question: "What is the correct HTML for making a text area?",
            options: [
                "&lt;textarea&gt;",
                "&lt;input type=\"textarea\"&gt;",
                "&lt;text&gt;",
                "&lt;input type=\"text\"&gt;"
            ],
            correct: "&lt;textarea&gt;",
        },
        {
            id: "14",
            question: "What is the correct HTML for inserting an image?",
            options: [
                "&lt;img src=\"image.gif\" alt=\"MyImage\"&gt;",
                "&lt;image src=\"image.gif\" alt=\"MyImage\"&gt;",
                "&lt;img alt=\"MyImage\"&gt;image.gif&lt;/img&gt;",
                "&lt;img href=\"image.gif\" alt=\"MyImage\"&gt;"
            ],
            correct: "&lt;img src=\"image.gif\" alt=\"MyImage\"&gt;",
        }
    ],
    css: [
    {
        id: "0",
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets",
        ],
        correct: "Cascading Style Sheets",
    },
    {
        id: "1",
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        options: [
            "In the &lt;body&gt; section", 
            "At the end of the document", 
            "In the &lt;head&gt; section", 
            "In the &lt;style&gt; section"
        ],
        correct: "In the &lt;head&gt; section",
    },
    {
        id: "2",
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "font-style", "text-style"],
        correct: "font-size",
    },
    {
        id: "3",
        question: "How do you add a background color for all &lt;h1&gt; elements?",
        options: [
            "h1 {background-color: #FFFFFF;}", 
            "all.h1 {background-color: #FFFFFF;}", 
            "h1.all {background-color: #FFFFFF;}", 
            "h1 {bg-color: #FFFFFF;}"
        ],
        correct: "h1 {background-color: #FFFFFF;}",
    },
    {
        id: "4",
        question: "Which is the correct CSS syntax?",
        options: [
            "body {color: black;}", 
            "{body;color:black;}", 
            "{body:color=black;}", 
            "body:color=black;"
        ],
        correct: "body {color: black;}",
    },
    {
        id: "5",
        question: "How do you make the text bold in CSS?",
        options: ["font-weight: bold;", "font-style: bold;", "text-weight: bold;", "text-style: bold;"],
        correct: "font-weight: bold;",
    },
    {
        id: "6",
        question: "How do you create a flex container?",
        options: ["display: flex;", "display: block;", "display: inline;", "display: grid;"],
        correct: "display: flex;",
    },
    {
        id: "7",
        question: "How do you add a border to an element?",
        options: [
            "border: 1px solid black;", 
            "border-width: 1px;", 
            "border-color: black;", 
            "border-style: solid;"
        ],
        correct: "border: 1px solid black;",
    },
    {
        id: "8",
        question: "How do you change the font of an element in CSS?",
        options: ["font-family: Arial;", "font: Arial;", "text-family: Arial;", "font-name: Arial;"],
        correct: "font-family: Arial;",
    },
    {
        id: "9",
        question: "Which property is used to change the background color?",
        options: ["background-color", "color", "bg-color", "background"],
        correct: "background-color",
    },
    {
        id: "10",
        question: "How do you center an element horizontally using CSS?",
        options: [
            "margin: 0 auto;", 
            "text-align: center;", 
            "padding: 0 auto;", 
            "align: center;"
        ],
        correct: "margin: 0 auto;",
    },
    {
        id: "11",
        question: "How do you select an element with id 'header'?",
        options: ["#header", ".header", "header", "id=header"],
        correct: "#header",
    },
    {
        id: "12",
        question: "What property is used to change the text color of an element?",
        options: ["color", "font-color", "text-color", "text-style"],
        correct: "color",
    },
    {
        id: "13",
        question: "How do you add padding to an element in CSS?",
        options: ["padding", "margin", "border", "spacing"],
        correct: "padding",
    },
    {
        id: "14",
        question: "How do you hide an element using CSS?",
        options: ["display: none;", "visibility: hidden;", "opacity: 0;", "hide: true;"],
        correct: "display: none;",
    }
    ],
    javascript: [
    {
        id: "0",
        question: "What does 'DOM' stand for in JavaScript?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Model",
            "Dynamic Object Model",
        ],
        correct: "Document Object Model",
    },
    {
        id: "1",
        question: "Which keyword is used to declare variables in JavaScript?",
        options: [
            "var",
            "int",
            "declare",
            "variable",
        ],
        correct: "var",
    },
    {
        id: "2",
        question: "How do you comment in JavaScript?",
        options: [
            "// Single-line comment",
            "/* Multi-line comment */",
            "# Comment",
            "<!-- Comment -->",
        ],
        correct: "// Single-line comment",
    },
    {
        id: "3",
        question: "What is the result of typeof null in JavaScript?",
        options: [
            "'object'",
            "'null'",
            "'undefined'",
            "'string'",
        ],
        correct: "'object'",
    },
    {
        id: "4",
        question: "Which method is used to add an element to the end of an array?",
        options: [
            "push()",
            "append()",
            "addToEnd()",
            "insert()",
        ],
        correct: "push()",
    },
    {
        id: "5",
        question: "How do you declare a function in JavaScript?",
        options: [
            "function myFunction() {}",
            "myFunction = function() {}",
            "def myFunction() {}",
            "function:myFunction() {}",
        ],
        correct: "function myFunction() {}",
    },
    {
        id: "6",
        question: "What is the result of '5' + 3 in JavaScript?",
        options: [
            "'53'",
            "8",
            "'8'",
            "TypeError",
        ],
        correct: "'53'",
    },
    {
        id: "7",
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
            "onclick",
            "onchange",
            "onmouseover",
            "onmouseclick",
        ],
        correct: "onclick",
    },
    {
        id: "8",
        question: "How do you write an if statement in JavaScript?",
        options: [
            "if (condition) {}",
            "if condition: {}",
            "if {condition} then {}",
            "if condition {}",
        ],
        correct: "if (condition) {}",
    },
    {
        id: "9",
        question: "What is a closure in JavaScript?",
        options: [
            "A function that has access to its outer function's scope",
            "An anonymous function",
            "A function that returns another function",
            "A built-in JavaScript object",
        ],
        correct: "A function that has access to its outer function's scope",
    },
    {
        id: "10",
        question: "Which built-in method returns the length of a string?",
        options: [
            "length()",
            "getSize()",
            "size()",
            "length",
        ],
        correct: "length",
    },
    {
        id: "11",
        question: "How do you convert a string to uppercase in JavaScript?",
        options: [
            "toUpperCase()",
            "upperCase()",
            "toUpper()",
            "caseUppercase()",
        ],
        correct: "toUpperCase()",
    },
    {
        id: "12",
        question: "What does JSON stand for?",
        options: [
            "JavaScript Object Notation",
            "JavaScript Oriented Notation",
            "JavaScript Object Naming",
            "JavaScript Object Network",
        ],
        correct: "JavaScript Object Notation",
    },
    {
        id: "13",
        question: "How do you add a comment in JSON?",
        options: [
            "// Comment",
            "# Comment",
            "/* Comment */",
            "<!-- Comment -->",
        ],
        correct: "/* Comment */",
    },
    {
        id: "14",
        question: "What does the `this` keyword refer to in JavaScript?",
        options: [
            "The current function",
            "The global object",
            "The DOM element",
            "The current object",
        ],
        correct: "The current object",
    },
    ],
    react: [
    {
        id: "0",
        question: "What is React?",
        options: [
            "A JavaScript library for building user interfaces",
            "A programming language",
            "An integrated development environment",
            "A database management system",
        ],
        correct: "A JavaScript library for building user interfaces",
    },
    {
        id: "1",
        question: "What is JSX?",
        options: [
            "JavaScript XML",
            "JavaScript Extension",
            "JavaScript Syntax Extension",
            "JavaScript XML Syntax",
        ],
        correct: "JavaScript XML Syntax",
    },
    {
        id: "2",
        question: "In React, what is the virtual DOM?",
        options: [
            "A virtual representation of the actual DOM",
            "A testing environment for React components",
            "A tool for debugging React applications",
            "A secure version of the DOM",
        ],
        correct: "A virtual representation of the actual DOM",
    },
    {
        id: "3",
        question: "What are props in React?",
        options: [
            "Properties that are passed to components",
            "Methods that handle component state",
            "CSS styles applied to components",
            "HTML attributes used in JSX elements",
        ],
        correct: "Properties that are passed to components",
    },
    {
        id: "4",
        question: "How do you create a React component?",
        options: [
            "Using the `createComponent` function",
            "Using the `component` keyword",
            "Defining a class that extends `React.Component` or using a function",
            "Importing a component from a library",
        ],
        correct: "Defining a class that extends `React.Component` or using a function",
    },
    {
        id: "5",
        question: "What is state in React?",
        options: [
            "A persistent storage for data",
            "The initial props passed to a component",
            "An internal data store for a component",
            "A type of CSS styling in React",
        ],
        correct: "An internal data store for a component",
    },
    {
        id: "6",
        question: "What lifecycle method is invoked immediately after a component is mounted?",
        options: [
            "componentDidMount",
            "componentWillMount",
            "componentWillUnmount",
            "componentDidUpdate",
        ],
        correct: "componentDidMount",
    },
    {
        id: "7",
        question: "How can you update the state of a component in React?",
        options: [
            "Directly assign a new value to this.state",
            "Use setState() method",
            "Invoke forceUpdate()",
            "Update props directly",
        ],
        correct: "Use setState() method",
    },
    {
        id: "8",
        question: "What is a key prop in React used for?",
        options: [
            "To identify elements uniquely in a list",
            "To apply unique styles to elements",
            "To control component visibility",
            "To manage form state",
        ],
        correct: "To identify elements uniquely in a list",
    },
    {
        id: "9",
        question: "What is the purpose of propTypes in React?",
        options: [
            "To define the types of props passed to a component",
            "To specify required props for a component",
            "To validate props received by a component",
            "All of the above",
        ],
        correct: "All of the above",
    },
    {
        id: "10",
        question: "What is the purpose of defaultProps in React?",
        options: [
            "To provide default values for props",
            "To set initial state for a component",
            "To define default styles for a component",
            "To handle component errors",
        ],
        correct: "To provide default values for props",
    },
    {
        id: "11",
        question: "What is the recommended way to fetch data from a remote API in React?",
        options: [
            "Using AJAX directly in components",
            "Using async/await with fetch() or axios",
            "Defining a separate service class for API calls",
            "Using jQuery for API requests",
        ],
        correct: "Using async/await with fetch() or axios",
    },
    {
        id: "12",
        question: "What is Redux?",
        options: [
            "A state management library for React",
            "A JavaScript testing framework",
            "A CSS-in-JS solution",
            "An IDE for React development",
        ],
        correct: "A state management library for React",
    },
    {
        id: "13",
        question: "What is the purpose of the render method in React components?",
        options: [
            "To handle events",
            "To update component state",
            "To render JSX and HTML elements",
            "To define component styles",
        ],
        correct: "To render JSX and HTML elements",
    },
    {
        id: "14",
        question: "What is the role of React Router?",
        options: [
            "To manage state in React components",
            "To handle API requests",
            "To perform client-side routing in single-page applications",
            "To automate testing of React components",
        ],
        correct: "To perform client-side routing in single-page applications",
    },
    ],
    php: [
    {
        id: "0",
        question: "What does PHP stand for?",
        options: [
            "Hypertext Preprocessor",
            "Personal Home Page",
            "Private Hypertext Processor",
            "Pretext Hypertext Processor",
        ],
        correct: "Hypertext Preprocessor",
    },
    {
        id: "1",
        question: "What is the output of print(2**3)?",
        options: ["6", "8", "9", "12"],
        correct: "8",
    },
    {
        id: "2",
        question: "How do you echo \"Hello World\" in PHP?",
        options: [
            "echo 'Hello World';",
            "print 'Hello World';",
            "echo(\"Hello World\");",
            "print(\"Hello World\");",
        ],
        correct: "echo 'Hello World';",
    },
    {
        id: "3",
        question: "Which PHP function is used to generate a random number?",
        options: [
            "rand()",
            "random()",
            "random_number()",
            "generate_random()",
        ],
        correct: "rand()",
    },
    {
        id: "4",
        question: "How do you declare a variable in PHP?",
        options: [
            "$myVar = 5;",
            "let myVar = 5;",
            "var myVar = 5;",
            "int myVar = 5;",
        ],
        correct: "$myVar = 5;",
    },
    {
        id: "5",
        question: "Which operator is used for concatenation in PHP?",
        options: [
            ".",
            "+",
            "&",
            "|",
        ],
        correct: ".",
    },
    {
        id: "6",
        question: "What does the function `strlen()` do in PHP?",
        options: [
            "Returns the length of a string",
            "Converts a string to lowercase",
            "Splits a string into an array",
            "Reverses a string",
        ],
        correct: "Returns the length of a string",
    },
    {
        id: "7",
        question: "How do you start a session in PHP?",
        options: [
            "session_start()",
            "start_session()",
            "begin_session()",
            "new_session()",
        ],
        correct: "session_start()",
    },
    {
        id: "8",
        question: "Which of the following PHP statements is used to send cookies to the browser?",
        options: [
            "setcookie()",
            "sendcookie()",
            "cookie()",
            "set_cookie()",
        ],
        correct: "setcookie()",
    },
    {
        id: "9",
        question: "What is the correct way to include a PHP file named \"header.php\"?",
        options: [
            "include 'header.php';",
            "require 'header.php';",
            "import 'header.php';",
            "include_once 'header.php';",
        ],
        correct: "include 'header.php';",
    },
    {
        id: "10",
        question: "Which PHP function is used to check if a file exists?",
        options: [
            "file_exists()",
            "check_file()",
            "exists_file()",
            "file_check()",
        ],
        correct: "file_exists()",
    },
    {
        id: "11",
        question: "What does PDO stand for in PHP?",
        options: [
            "PHP Data Object",
            "Persistent Data Object",
            "Personal Data Object",
            "Protected Data Object",
        ],
        correct: "PHP Data Object",
    },
    {
        id: "12",
        question: "How do you define a constant in PHP?",
        options: [
            "define('MY_CONST', 'value');",
            "const MY_CONST = 'value';",
            "$MY_CONST = 'value';",
            "constant('MY_CONST', 'value');",
        ],
        correct: "define('MY_CONST', 'value');",
    },
    {
        id: "13",
        question: "What does the function `implode()` do in PHP?",
        options: [
            "Joins array elements with a string",
            "Explodes a string into an array",
            "Sorts an array",
            "Counts the number of elements in an array",
        ],
        correct: "Joins array elements with a string",
    },
    {
        id: "14",
        question: "How do you get the current date and time in PHP?",
        options: [
            "date('Y-m-d H:i:s');",
            "time('Y-m-d H:i:s');",
            "now('Y-m-d H:i:s');",
            "datetime('Y-m-d H:i:s');",
        ],
        correct: "date('Y-m-d H:i:s');",
    },
    ],
};

// Function to generate quiz content for a subject
function generateQuizContent(subject) {
    const quizArray = questionSets[subject];
    let quizContent = `<h2>${subject.toUpperCase()} Quiz</h2>`;
    
    // Generate HTML for each question
    quizArray.forEach((question, index) => {
        quizContent += `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">Question ${index + 1}</h5>
                    <p class="card-text">${question.question}</p>
                    <div class="options">
        `;

        // Add options for the question
        question.options.forEach((option) => {
            quizContent += `<div class="form-check">
                                <input class="form-check-input" type="radio" name="question${index}" id="q${index}_option${question.options.indexOf(option)}" value="${option}">
                                <label class="form-check-label" for="q${index}_option${question.options.indexOf(option)}">${option}</label>
                            </div>`;
        });

        quizContent += `
                    </div>
                </div>
            </div>
        `;
    });

    return quizContent;
}

// Extract subject from query parameter
const urlParams = new URLSearchParams(window.location.search);
const subject = urlParams.get('subject');

// Display quiz content for the specified subject
if (subject && questionSets.hasOwnProperty(subject)) {
    document.getElementById("quiz-title").innerText = `${subject.toUpperCase()} Quiz`;
    document.getElementById("display-container").innerHTML = generateQuizContent(subject);
} else {
    document.getElementById("quiz-title").innerText = "Quiz Not Found";
    document.getElementById("display-container").innerHTML = "<p>Quiz for the selected subject is not available.</p>";
}

// Function to submit quiz and calculate score
function submitQuiz() {
    let score = 0;
    const quizArray = questionSets[subject];
    const totalQuestions = quizArray.length;

    // Iterate through each question to check answers
    for (let i = 0; i < totalQuestions; i++) {
        const options = document.getElementsByName(`question${i}`);
        let answered = false;

        // Check which option is selected
        options.forEach((option) => {
            if (option.checked) {
                answered = true;
                // Check if answer is correct
                if (option.value === quizArray[i].correct) {
                    score++;
                }
            }
        });

        // If no option is selected for a question, alert and return
        if (!answered) {
            // alert(`Please answer question ${i + 1}`);
            Swal.fire(`Please answer question ${i + 1}`)

            return;
        }
    }

    // Calculate and display the percentage
    const percentage = (score / totalQuestions) * 100;
    // alert(`Your score is ${percentage.toFixed(2)}%`);
    Swal.fire(`Your score is ${percentage.toFixed(1)}%`)


    // Optionally, you can reset the quiz or perform other actions after submission
    // resetQuiz(); // Implement resetQuiz function if needed
}

// Function to reset quiz
function resetQuiz() {
    // Clear all selected options
    const options = document.querySelectorAll('input[type=radio]');
    options.forEach((option) => {
        option.checked = false;
    });

    // Clear the display container and regenerate quiz content
    document.getElementById("display-container").innerHTML = generateQuizContent(subject);
}

