'use strict';

app.paymentOptiion = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
     selectedColor: function(e) {
        
           var router = new kendo.Router();
         e.checked ? 
        
             router.navigate("components/thankyou/view.html")
         
         : "unchecked";
        
        }
});

// START_CUSTOM_CODE_paymentOptiion
// END_CUSTOM_CODE_paymentOptiion