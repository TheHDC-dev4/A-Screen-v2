(function() {
     
    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app = {
        data: {}
    };

    var bootstrap = function() {
     
        $(function() {
            
            app.mobileApp = new kendo.mobile.Application(document.body, {
loading: '',
                // comment out the following line to get a UI which matches the look
                // and feel of the operating system
                skin: 'nova',
                // the application needs to know which view to load first
                initial: 'components/home/view.html',
                statusBarStyle: 'black-translucent'
            });
        });
        app.showLoading();
    };

    if (window.cordova) {
          
        // this function is called by Cordova when the application is loaded by the device
        document.addEventListener('deviceready', function() {
            // hide the splash screen as soon as the app is ready. otherwise
            // Cordova will wait 5 very long seconds to do it for you.
            if (navigator && navigator.splashscreen) {
                navigator.splashscreen.show();
            }

            var element = document.getElementById('appDrawer');
            if (typeof(element) != 'undefined' && element != null) {
                if (window.navigator.msPointerEnabled) {
                    $("#navigation-container").on("MSPointerDown", "a", function(event) {
                        app.keepActiveState($(this));
                    });
                } else {
                    $("#navigation-container").on("touchstart", "a", function(event) {
                        app.keepActiveState($(this));
                    });
                }
            }

            bootstrap();
        }, false);
    } else {
        bootstrap();
    }

    app.keepActiveState = function _keepActiveState(item) {
        var currentItem = item;
        $("#navigation-container li a.active").removeClass("active");
        currentItem.addClass('active');
    };

    window.app = app;

    app.isOnline = function() {
        if (!navigator || !navigator.connection) {
            return true;
        } else {
            return navigator.connection.type !== 'none';
        }
    };
}());

// START_CUSTOM_CODE_kendoUiMobileApp

function RedirectToCart()
{
   var router = new kendo.Router(); 
                          
  router.navigate("components/cartDetails/view.html");
}



// END_CUSTOM_CODE_kendoUiMobileApp