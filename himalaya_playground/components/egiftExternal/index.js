'use strict';




app.EgiftExternal = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
    
});



function aniPassword()
{
     $('#spanCardPin').show();
    $('#spanCardPin').animate({top: '80px'}, "slow");
}

function aniEmail()
{
   
     $('#spanCardNumber').show();
    $('#spanCardNumber').animate({top: '0px'}, "slow");
}

function  upaniEmail(e)
{
if($("#" + e).val() == '') {
        $('#spanCardNumber').css({"top": "30px", "display": "none"});
    }
}

function  upaniPassword(e)
{
if($("#" + e).val() == '') {
     $('#spanCardPin').css({"top": "110px", "display": "none"});
       
    }
}



// START_CUSTOM_CODE_egiftcard
// END_CUSTOM_CODE_egiftcard