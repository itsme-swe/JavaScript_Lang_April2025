## Higher Order Functions

Higher order functions are functions that operate on other functions, either by receiving them as arguments or by returning them. It is a function that accepts a function as a parameter or returns a function as the output.

    function fun() {
        console.log("Hello, World!");
    }

    function fun2(action) {
        action();
        action();
    }

    fun2(fun);

🔸 fun2 is a higher-order function because it takes another function (action) as an argument.

🔸 It calls the action function twice.
