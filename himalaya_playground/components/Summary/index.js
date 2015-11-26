'use strict';

app.summary = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
     onChange: function(e) {
        
           var router = new kendo.Router();
         e.checked ? 
        
             router.navigate("components/thankyou/view.html")
         
         : "unchecked";
        
        }
});

// START_CUSTOM_CODE_summary
// END_CUSTOM_CODE_summary
(function(parent) {
    var dataProvider = app.data.defaultProvider,
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
                typeName: 'Activities',
                dataProvider: dataProvider
            },

            change: function(e) {
                var data = this.data();
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];

                    flattenLocationProperties(dataItem);
                }
            },
            schema: {
                model: {
                    fields: {
                        'Text': {
                            field: 'Text',
                            defaultValue: ''
                        },
                    }
                }
            },
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        summaryModel = kendo.observable({
            dataSource: dataSource,
            itemClick: function(e) {
                app.mobileApp.navigate('#components/summary/details.html?uid=' + e.dataItem.uid);
            },
            detailsShow: function(e) {
                var item = e.view.params.uid,
                    dataSource = summaryModel.get('dataSource'),
                    itemModel = dataSource.getByUid(item);
                if (!itemModel.Text) {
                    itemModel.Text = String.fromCharCode(160);
                }
                summaryModel.set('currentItem', itemModel);
            },
            currentItem: null
        });

    parent.set('summaryModel', summaryModel);
})(app.summary);

// START_CUSTOM_CODE_summaryModel
// END_CUSTOM_CODE_summaryModel