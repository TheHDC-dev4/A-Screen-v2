'use strict';

app.addNewAddress = kendo.observable({
    onShow: function() {
         document.getElementById("addressLable-Div").style.display = "none";
    },
    afterShow: function() {},
    onChange: function(e) {
        
           var router = new kendo.Router();
         e.checked ? 
        
            document.getElementById("addressLable-Div").style.display = "inline"
         
         : document.getElementById("addressLable-Div").style.display = "none";
        
        }
      
});

// START_CUSTOM_CODE_addNewAddress
// END_CUSTOM_CODE_addNewAddress
(function(parent) {
    var addNewAddressModel = kendo.observable({
        fields: {
            email: '',
            name: '',
            title: '',
            pincode: '',
            state: '',
            city: '',
            address: '',
        },
        submit: function() {}
    });

    parent.set('addNewAddressModel', addNewAddressModel);
})(app.addNewAddress);

// START_CUSTOM_CODE_addNewAddressModel
function aniAddress()
{
  
     $('#spanAddress').show();
    $('#spanAddress').animate({top: '210px'}, "slow");
}

function  upaniAddress(e)
{ 

if($("#" + e).val() == '') {
        $('#spanAddress').css({"top": "260px", "display": "none"});
    }
}





function aniCity()
{
  
     $('#spanCity').show();
    $('#spanCity').animate({top: '280px'}, "slow");
}

function  upaniCity(e)
{ 

if($("#" + e).val() == '') {
        $('#spanCity').css({"top": "310px", "display": "none"});
    }
}








function aniPincode()
{
  
     $('#spanPincode').show();
    $('#spanPincode').animate({top: '420px'}, "slow");
}

function  upaniPincode(e)
{ 

if($("#" + e).val() == '') {
        $('#spanPincode').css({"top": "440px", "display": "none"});
    }
}





function aniName()
{
  
     $('#spanName').show();
    $('#spanName').animate({top: '5px'}, "slow");
}

function  upaniName(e)
{ 

if($("#" + e).val() == '') {
        $('#spanName').css({"top": "30px", "display": "none"});
    }
}



function aniAddEmail()
{
  
     $('#spanAddEmail').show();
    $('#spanAddEmail').animate({top: '70px'}, "slow");
}

function  upaniAddEmail(e)
{ 

if($("#" + e).val() == '') {
        $('#spanAddEmail').css({"top": "100px", "display": "none"});
    }
}



function aniAddMobile()
{
  
     $('#spanAddMobile').show();
    $('#spanAddMobile').animate({top: '140px'}, "slow");
}

function  upaniAddMobile(e)
{ 

if($("#" + e).val() == '') {
        $('#spanAddMobile').css({"top": "180px", "display": "none"});
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

// END_CUSTOM_CODE_addNewAddressModel



