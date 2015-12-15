'use strict';



app.authenticationView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_authenticationView
// END_CUSTOM_CODE_authenticationView
(function(parent) {
    var provider = app.data.defaultProvider,
        mode = 'signin',
        registerRedirect = 'home',
        signinRedirect = 'home',
        init = function(error) {
            if (error) {
                if (error.message) {
                    alert(error.message);
                }

                return false;
            }

            var activeView = mode === 'signin' ? '.signin-view' : '.signup-view';

            if (provider.setup && provider.setup.offlineStorage && !app.isOnline()) {
                $('.offline').show().siblings().hide();
            } else {
                $(activeView).show().siblings().hide();
            }
        },
        successHandler = function(data) {
            var redirect = mode === 'signin' ? signinRedirect : registerRedirect;

            if (data && data.result) {
                app.user = data.result;

                setTimeout(function() {
                    app.mobileApp.navigate('components/' + redirect + '/view.html');
                }, 0);
            } else {
                init();
            }
        },
        authenticationViewModel = kendo.observable({
            displayName: '',
            email: '',
            password: '',
            validateData: function(data) {
                if (!data.email) {
                    alert('Missing email');
                    return false;
                }

                if (!data.password) {
                    alert('Missing password');
                    return false;
                }

                return true;
            },
            signin: function() {
                var model = authenticationViewModel,
                    email = model.email.toLowerCase(),
                    password = model.password;

                if (!model.validateData(model)) {
                    return false;
                }

                provider.Users.login(email, password, successHandler, init);
            },
            register: function() {
                var model = authenticationViewModel,
                    email = model.email.toLowerCase(),
                    password = model.password,
                    displayName = model.displayName,
                    attrs = {
                        Email: email,
                        DisplayName: displayName
                    };

                if (!model.validateData(model)) {
                    return false;
                }

                provider.Users.register(email, password, attrs, successHandler, init);
            },
            toggleView: function() {
                
          
  

 
                mode = mode === 'signin' ? 'register' : 'signin';
                init();
            }
        });

    parent.set('authenticationViewModel', authenticationViewModel);
    parent.set('afterShow', function() {
        provider.Users.currentUser().then(successHandler, init);
    });
})(app.authenticationView);

// START_CUSTOM_CODE_authenticationViewModel
function aniPassword()
{
     $('#spanPassword').show();
    $('#spanPassword').animate({top: '80px'}, "slow");
}

function aniEmail()
{
   
     $('#spanEmail').show();
    $('#spanEmail').animate({top: '0px'}, "slow");
}

function  upaniEmail(e)
{
if($("#" + e).val() == '') {
        $('#spanEmail').css({"top": "30px", "display": "none"});
    }
}

function  upaniPassword(e)
{
if($("#" + e).val() == '') {
     $('#spanPassword').css({"top": "110px", "display": "none"});
       
    }
}




function aniRegEmail(){
     $('#spaninputRegEmail').show();
    $('#spaninputRegEmail').animate({top: '5px'}, "slow");
}
function aniRegPassword(){
    $('#spaninputRegPassword').show();
    $('#spaninputRegPassword').animate({top: '80px'}, "slow"); 
}
function  aniRegConf(){
     $('#spaninputRegConf').show();
    $('#spaninputRegConf').animate({top: '160px'}, "slow");
}

function upaniRegConf(e){
    if($("#" + e).val() == '') {
     $('#spaninputRegConf').css({"top": "180px", "display": "none"});
       
    } 
}


function upaniRegPassworde(e){
     if($("#" + e).val() == '') {
     $('#spaninputRegPassword').css({"top": "110px", "display": "none"});
       
    }
    
}


function upaniRegEmail(e){
    if($("#" + e).val() == '') {
     $('#spaninputRegEmail').css({"top": "30px", "display": "none"});
       
    }
}
// END_CUSTOM_CODE_authenticationViewModel