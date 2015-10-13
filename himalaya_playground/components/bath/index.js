'use strict';

app.bath = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_bath
// END_CUSTOM_CODE_bath
(function(parent) {
    var dataProvider = app.data.himalayaPlaygroundBackend,
        processImage = function(img) {
            if (!img) {
                var empty1x1png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=';
                img = 'data:image/png;base64,' + empty1x1png;
            } else if (img.slice(0, 4) !== 'http' &&
                img.slice(0, 2) !== '//' &&
                img.slice(0, 5) !== 'data:') {
                var setup = dataProvider.setup;
                img = setup.scheme + ':' + setup.url + setup.apiKey + '/Files/' + img + '/Download';
            }

            return img;
        },
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
                typeName: 'BabyBath',
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
                        'ProductName': {
                            field: 'ProductName',
                            defaultValue: ''
                        },
                    }
                }
            },
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        bathModel = kendo.observable({
            dataSource: dataSource,
            itemClick: function(e) {
                app.mobileApp.navigate('#components/bath/details.html?uid=' + e.dataItem.uid);
            },
            detailsShow: function(e) {
                var item = e.view.params.uid,
                    dataSource = bathModel.get('dataSource'),
                    itemModel = dataSource.getByUid(item);
                itemModel.ImageUrlUrl = processImage(itemModel.ImageUrl);
                if (!itemModel.ProductName) {
                    itemModel.ProductName = String.fromCharCode(160);
                }
                bathModel.set('currentItem', itemModel);
            },
            currentItem: null
        });

    parent.set('bathModel', bathModel);
})(app.bath);

// START_CUSTOM_CODE_bathModel
function addTo(e) {

    var count1 = parseInt($(e).prev().text());
    count1++;
    $(e).prev().text(count1);
}

function removecart(e) {
    var count1 = parseInt($(e).next().text());

    if (count1 > 0) {
        count1--;
        $(e).next().text(count1);
    }
}
// END_CUSTOM_CODE_bathModel