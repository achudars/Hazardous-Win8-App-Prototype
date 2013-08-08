(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            // attach the event handler to your hyperlinks.
            WinJS.Utilities.query("a").listen("click", linkClickEventHandler, false);

        }
    });

    function linkClickEventHandler(eventInfo) {
        eventInfo.preventDefault();
        //Retrieve the hyperlink that triggered the event.
        var link = eventInfo.target;
        //Call the WinJS.Navigation.navigate function and pass it the link target.
        WinJS.Navigation.navigate(link.href);
    }
})();
