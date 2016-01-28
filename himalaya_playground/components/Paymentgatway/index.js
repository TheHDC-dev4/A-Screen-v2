'use strict';



var ref;
app.Search = kendo.observable({
    onShow: function() {
 ref =  window.open( "http://210.18.113.115/himalayastore/paymentTest.aspx?orderid=1010101010101010101010101&orderamount=3.00", "_blank","location=no" );
        ref.addEventListener('loadstop',closeInAppBrowser);
ref.addEventListener('exit', function() {  location.href='#components/home/view.html'; }); 
    },
    
    
    afterShow: function() {}
    
});
  



        function closeInAppBrowser (event) {
  
    if (event.url.match("/mobileClose.aspx")) {
        ref.close();
    }
    if (event.url.match("/mobileredirection.aspx")) {
        alert('clear sql lite cart here')
    }
}
