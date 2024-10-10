import { startSection, endSection, writeCode, writeText, defineArticle, defineToC, defineLinks, addLink } from "../blog.js";

defineArticle("article");
defineToC("ToC");
defineLinks("links");

addLink("REPL wiki", "https://en.wikipedia.org/wiki/read%e2%80%93eval%e2%80%93print_loop");

startSection("Introduction");
    writeText(
        "Welcome to this blog about creating a REPL(Read Eval Print Loop).", 
        "I am going making it c++ but you can use any language you want.",
    );
    writeText(
        "What I have envisioned for this REPL is that will run a simple(stack based) string formating language.",
        "So, let's begin!"
    );
endSection();

startSection("Setting up the loop");
    writeText("First we should first start off by setting the loop:");
    writeCode(
`#include <iostream>
using namespace std;

int main() {
    bool running = true;
    while(running){
        running = rep();
    }
    return 0;
}
`
    );
    writeText("Here the 'rep' method does the Read-Eval-Print part of REPL and return a boolean specifying whether the loop should continue.");
    writeText("That's it for setting up the loop.");
endSection();


startSection("Getting the input (Read)");
        writeText(
            "This one's also pretty simple too.",
            "Just read from the console and store it."
        );
        writeCode(
`...
bool rep() {
    string input;
    cin >> input;
}
...`
        );
endSection();

startSection("Evaluating (Eval)");
    writeText(
        "And now comes the hard part of buildung the evaluator."
    )
endSection();