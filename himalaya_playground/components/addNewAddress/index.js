'use strict';

app.addNewAddress = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
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
    $('#spanAddress').animate({top: '5px'}, "slow");
}

function  upaniAddress(e)
{ 

if($("#" + e).val() == '') {
        $('#spanAddress').css({"top": "30px", "display": "none"});
    }
}





function aniCity()
{
  
     $('#spanCity').show();
    $('#spanCity').animate({top: '70px'}, "slow");
}

function  upaniCity(e)
{ 

if($("#" + e).val() == '') {
        $('#spanCity').css({"top": "100px", "display": "none"});
    }
}




function aniCity()
{
  
     $('#spanCity').show();
    $('#spanCity').animate({top: '70px'}, "slow");
}

function  upaniCity(e)
{ 

if($("#" + e).val() == '') {
        $('#spanCity').css({"top": "100px", "display": "none"});
    }
}



function aniPincode()
{
  
     $('#spanPincode').show();
    $('#spanPincode').animate({top: '210px'}, "slow");
}

function  upaniPincode(e)
{ 

if($("#" + e).val() == '') {
        $('#spanPincode').css({"top": "240px", "display": "none"});
    }
}





function aniName()
{
  
     $('#spanName').show();
    $('#spanName').animate({top: '350px'}, "slow");
}

function  upaniName(e)
{ 

if($("#" + e).val() == '') {
        $('#spanName').css({"top": "380px", "display": "none"});
    }
}



function aniAddEmail()
{
  
     $('#spanAddEmail').show();
    $('#spanAddEmail').animate({top: '420px'}, "slow");
}

function  upaniAddEmail(e)
{ 

if($("#" + e).val() == '') {
        $('#spanAddEmail').css({"top": "450px", "display": "none"});
    }
}



function aniAddMobile()
{
  
     $('#spanAddMobile').show();
    $('#spanAddMobile').animate({top: '490px'}, "slow");
}

function  upaniAddMobile(e)
{ 

if($("#" + e).val() == '') {
        $('#spanAddMobile').css({"top": "520px", "display": "none"});
    }
}
// END_CUSTOM_CODE_addNewAddressModel