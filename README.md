# nightwatch-selenium-download
See: [full blog post here](http://www.johnantony.com/nightwatch-download-selenium-chromedriver-automatically/)  

A simple [Nightwatch.js](http://nightwatchjs.org/) project that uses [groupon/selenium-download](https://github.com/groupon/selenium-download) package to download and run the latest compatible versions of [selenium standalone server](http://www.seleniumhq.org/download/) and [chromedriver](https://sites.google.com/a/chromium.org/chromedriver/) for the operating system that you are currently running. This makes it easier to run the same Nightwatch.js tests on Mac, Windows, or Linux.
## Installation
    git clone https://github.com/jantonypdx/nightwatch-selenium-download
## Usage
First, make sure that selenium server isn't already running on your system.  

Then on Windows in a command prompt window (cmd), run:  
```
npm install
node nightwatch.js -t tests\google.js
```
Or on Mac or Linux in a terminal window, run:
```
npm install
node nightwatch.js -t tests/google.js
```
This will:
- download selenium.jar and chromedriver
- start selenium-standalone-server
- then run a basic Nightwatch test against Google using Chrome (see google.js in the tests directory).

## Credits
See [selenium-download Github](https://github.com/groupon/selenium-download) page.

## License
See [MIT License](license.txt)
