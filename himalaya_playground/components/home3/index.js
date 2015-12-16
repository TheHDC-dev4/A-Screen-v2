'use strict';

app.home3 = kendo.observable({
    onShow3: function() {
        
      var view = this.view();
/* $("#appDrawer").data("kendoMobileDrawer").show();*/
           /* view.header.hide();*/
     
    },
    afterShow3: function() {
        
    }
});

function prev() {
    var view = this.view();
    var scrollview = view.element.find("#scrollView").data("kendoMobileScrollView");
    scrollview.prev();
}

function next() {
    var view = this.view();
    var scrollview = view.element.find("#scrollView").data("kendoMobileScrollView");
  	scrollview.next();
}


// START_CUSTOM_CODE_home
// END_CUSTOM_CODE_home