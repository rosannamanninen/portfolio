
    window.onscroll = function() {
        scrollFunction()
    };

  


    function scrollFunction() {
        if (document.body.scrollTop > 90 ||
            document.documentElement.scrollTop > 90)
        {
          document.getElementById("h1id")
                              .style.paddingBottom = "0px";
          document.getElementById("topnavid")
                              .style.paddingRight = "40%";
          document.getElementById("topnavid")
                              .style.paddingLeft = "40%";


            document.getElementById("topnavid")
                    .style.fontSize = "150%";


            document.getElementById("h1id")
                            .style.fontSize = "40px";


        }
        else {
          document.getElementById("h1id")
                              .style.paddingBottom = "5px";
          document.getElementById("topnavid")
                              .style.paddingRight = "30%";
          document.getElementById("topnavid")
                              .style.paddingLeft = "30%";
            document.getElementById("topnavid")
                        .style.fontSize = "180%";


            document.getElementById("h1id")
                            .style.fontSize = "80px";

  }
}
