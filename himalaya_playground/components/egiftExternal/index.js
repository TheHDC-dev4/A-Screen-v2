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

 function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }
    
  function isNumeric (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode (key);
    var regex = /[0-9]|\./;
    if ( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

// START_CUSTOM_CODE_egiftcard
// END_CUSTOM_CODE_egiftcard