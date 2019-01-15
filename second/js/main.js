window.onload = () => {
  //inside viewport
  var insideViewport = function(args) {
    window.onscroll = function() {
      for (const arg of args) {
        if (!Array.isArray(arg.classesNames)) {
          console.log("Error! classesNames must be an array.");
        } else if (arg.position >= 1 || arg.position < 0) {
          console.log(
            "Error! Position must be a number more than 0 and less than 1."
          );
        } else {
          if (arg.position === undefined) {
            arg.position = 0;
          }
          for (const className of arg.classesNames) {
            var elements = document.getElementsByClassName(className);
            if (elements.length === 0) {
              console.log("Error! Class(es) not found.");
            } else {
              for (const element of elements) {
                var bounding = element.getBoundingClientRect();
                if (
                  bounding.top >= 0 &&
                  bounding.left >= 0 &&
                  bounding.top <=
                    (window.innerHeight * (1 - arg.position) ||
                      document.documentElement.clientHeight *
                        (1 - arg.position)) &&
                  bounding.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
                ) {
                  arg.action(element);
                }
              }
            }
          }
        }
      }
    };
  };
  if (window.innerWidth >= 576) {
    insideViewport([
      {
        classesNames: ["logo"],
        position: 0.05,
        action: function(elements) {
          elements.classList.add("fadeInRight");
        }
      }
    ]);
  } else {
    insideViewport([
      {
        classesNames: ["logo"],
        position: 0.05,
        action: function(elements) {
          elements.classList.add("fadeIn");
        }
      }
    ]);
  }
  
};
