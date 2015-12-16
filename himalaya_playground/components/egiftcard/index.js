'use strict';

function aniGiftCardNumber()
{
     $('#spanCardNumber').show();
    $('#spanCardNumber').animate({top: '5px'}, "slow");
}

function  upGiftCardNumber(e)
{
if($("#" + e).val() == '') {
        $('#spanCardNumber').css({"top": "30px", "display": "none"});
    }
}

function aniGiftCardPin()
{
     $('#spanCardPin').show();
    $('#spanCardPin').animate({top: '100px'}, "slow");
}

function  upGiftCardPin(e)
{
if($("#" + e).val() == '') {
        $('#spanCardPin').css({"top": "140px", "display": "none"});
    }
}


app.egiftcard = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
     selectedColor: function(e) {
        
           var router = new kendo.Router();
         e.checked ? 
        
             router.navigate("components/thankyou/view.html")
         
         : "unchecked";
        
        }
});

// START_CUSTOM_CODE_egiftcard
// END_CUSTOM_CODE_egiftcard