# bond-js
Lightweight Frontend Templating

#### CDN Available At `https://ryanwans.com/dep/bondfile.js`

## Example Usage
All actions are done through the `BOND` object, available after the script is run.
<br><br>
To bind a template endpoint to an element, use `BOND.add()` such as<br>
`
BOND.add(
  "/your/template/endpoint.htm",
  "#yourTargetContainer",
  {
    "priority": 2
  }
);
`
<br>An Exmaple:<br>
`BOND.add("/viewport/nav.htm", "#nav", {priority: 1})`<br><br>

You can incorporate logic to determine what template to grab <br>
`"/" === window.location.pathname || "" === window.location.pathname` <br>
&emsp;&emsp;`? BOND.add("/viewport/home.htm", "#tc", {priority: 0})` <br>
&emsp;&emsp;`: (BOND.add("/viewport" + window.location.pathname + ".htm", "#tc", {priority: 0})`<br>
<br><br>
To run the inject sequence, run `BOND.repl()`<br><br>
To run a function after every event in que has been executed, you would use:<br>
`BOND.created( function() {console.log("All Templated Have Been Injected!")} )`
<br><br>
## How It Works
Upon bonding a template endpoint to a target element, it adds the bind data to an event que. Once you run the execution, or replace function, it will execute this que with respect to its given priority (if none given, in defined order). The script will draft an XMLHttpRequest to your template endpoint, and grab the HTML, which <b>MUST START WITH A DIV ELEMENT</b> in order for it to register. Once all targets have been grabbed, it will then begin to insert the HTML into its given target element.
