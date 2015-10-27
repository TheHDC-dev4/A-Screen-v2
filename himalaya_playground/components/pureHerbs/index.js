'use strict';

app.pureHerbs = kendo.observable({
     onShow: function() {

        
          var app = {};
app.db = null;
   

    
/* start create data base*/
app.openDb = function() {
    if (window.sqlitePlugin !== undefined) {
        app.db = window.sqlitePlugin.openDatabase("Himalaya_Lite_Database");
    } else {
        // For debugging in simulator fallback to native SQL Lite
        app.db = window.openDatabase("Himalaya_Lite_Database", "1.0", "Cordova Demo", 200000);
    }
}
/* end create data base*/
/* start  select table*/
app.selectAllRecords = function(fn) {
    app.db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM CartTable ORDER BY id", [],
                      fn,
                      app.onError);
    });
}
/* end  select table*/
/* start  get table*/
  
function getAllTheData() {
    var render = function (tx, rs) {
 var _cartcountrs =   parseInt(rs.rows.length);
 view.element.find("#btnCart").kendoMobileButton({ badge: _cartcountrs });      
    }

    app.selectAllRecords(render);
}
    /* end  get table*/
      app.openDb();  
        getAllTheData();
    },
    afterShow: function() {}
});

// START_CUSTOM_CODE_pureHerbs
// END_CUSTOM_CODE_pureHerbs
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
                typeName: 'pureHerbs',
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
        pureHerbsModel = kendo.observable({
            dataSource: dataSource,
           /* itemClick: function(e) {
                app.mobileApp.navigate('#components/pureHerbs/details.html?uid=' + e.dataItem.uid);
            },*/
            detailsShow: function(e) {
                var item = e.view.params.uid,
                    dataSource = pureHerbsModel.get('dataSource'),
                    itemModel = dataSource.getByUid(item);
                itemModel.ImageUrlUrl = processImage(itemModel.ImageUrl);
                if (!itemModel.ProductName) {
                    itemModel.ProductName = String.fromCharCode(160);
                }
                pureHerbsModel.set('currentItem', itemModel);
            },
            currentItem: null
        });

    parent.set('pureHerbsModel', pureHerbsModel);
})(app.pureHerbs);

// START_CUSTOM_CODE_pureHerbsModel
 function addTo(e)
    {
    
       var count1 =  parseInt($(e).prev().text());
 count1++;
$(e).prev().text(count1);
    }

function removecart(e)
{
          var count1 =  parseInt($(e).next().text());

    if(count1 > 0)
        {
 count1--;
$(e).next().text(count1);
            }
}
// END_CUSTOM_CODE_pureHerbsModel