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
// END_CUSTOM_CODE_addNewAddressModel