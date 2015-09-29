'use strict';

app.finalOrder = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_finalOrder
// END_CUSTOM_CODE_finalOrder
(function(parent) {
    var dataProvider = app.data.himalayaPlaygroundBackend,
        flattenLocationProperties = function(dataItem) {
            var propName, propValue,
                isLocation = function(value) {
                    return propValue && typeof propValue === 'object' &&
                        propValue.longitude && propValue.latitude;
                };

            for (propName in dataItem) {
                if (dataItem.hasOwnProperty(propName)) {
                    propValue = dataItem[propName];
                    if (isLocation(propValue)) {
                        // Location type property
                        dataItem[propName] =
                            kendo.format('Latitude: {0}, Longitude: {1}',
                                propValue.latitude, propValue.longitude);
                    }
                }
            }
        },
        dataSourceOptions = {
            type: 'everlive',
            transport: {
                typeName: 'PersonalCare',
                dataProvider: dataProvider
            },

            change: function(e) {
                var data = this.data();
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                      dataItem["totalPrice"] = parseFloat(dataItem["Price"]).toFixed(2) * 3;
            
                    flattenLocationProperties(dataItem);
                }
            },
            schema: {
                model: {
                    fields: {
                        'ProductName': {
                            field: 'ProductName',
                            defaultValue: ''
                        },
                    }
                }
            },
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        finalOrderModel = kendo.observable({
            dataSource: dataSource
        });

    parent.set('finalOrderModel', finalOrderModel);
})(app.finalOrder);

// START_CUSTOM_CODE_finalOrderModel
// END_CUSTOM_CODE_finalOrderModel