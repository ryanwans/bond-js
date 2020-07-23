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
    "priority": 1
  }
);
`
<br>An Exmaple:<br>
`BOND.add("/port/nav.htm", "#nav", {priority: 1})`
