(function(window, undefined) {
  var dictionary = {
    "31f65544-0ce9-473b-b4af-4653bd7dba77": "pointsofinterest",
    "a7d0ef2a-639a-4f55-992c-b04d85b07548": "map",
    "b28f581f-4017-44c0-90bb-ee3536279f31": "Login",
    "1af0858b-5195-4a2b-80cd-8cc0f2d3084b": "Accomodation/camping",
    "994df46f-97c9-4bcb-a817-25d6bb6d2c1c": "register",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "a4ad34e3-1473-45d5-9be4-6901ad798673": "Water/fuel",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);