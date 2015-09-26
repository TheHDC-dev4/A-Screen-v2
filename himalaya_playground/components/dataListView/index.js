'use strict';

app.dataListView = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
 
});

// START_CUSTOM_CODE_dataListView
function addToCart(e)
{
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
 /* start create table*/
app.createTable = function() {
    app.db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS CartTable (id INTEGER PRIMARY KEY ASC, ProductName TEXT, Catalogid INTEGER,size TEXT,Image_URL TEXT,Catalogy TEXT)", []);
    });
}
 /* end  create table*/
 /* start  insert table*/
app.insertRecord = function(ProductName, Catalogid ,size ,Image_URL ,Catalogy) {
    app.db.transaction(function(tx) {
        var cDate = new Date();
        tx.executeSql("INSERT INTO CartTable(ProductName, Catalogid ,size ,Image_URL ,Catalogy ) VALUES (?,?,?,?,?)",
                      [ProductName, Catalogid ,size ,Image_URL ,Catalogy],
                      app.onSuccess,
                      app.onError);
    });
}
app.onSuccess = function(tx, r) {
    console.log("Your SQLite query was successful!");
}

app.onError = function(tx, e) {
    console.log("SQLite Error: " + e.message);
}
 /* end  insert table*/
 /* start  update table*/
app.updateRecord = function(id, t) {
    app.db.transaction(function(tx) {
        var mDate = new Date();
        tx.executeSql("UPDATE MyTable SET text_sample = ?, date_sample = ? WHERE id = ?",
                      [t, mDate, id],
                      app.onSuccess,
                      app.onError);
    });
}
 /* end  update table*/
/* start  delete table*/
app.deleteRecord = function(id) {
    app.db.transaction(function(tx) {
        tx.executeSql("DELETE FROM CartTable WHERE Catalogid = ?",
                      [id],
                      app.onSuccess,
                      app.onError);
    });
}
/* end  delete table*/
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
        // rs contains our SQLite recordset, at this point you can do anything with it
        // in this case we'll just loop through it and output the results to the console
        for (var i = 0; i < rs.rows.length; i++) {
            alert(JSON.stringify(rs.rows.item(i)));
        }
    }

    app.selectAllRecords(render);
}
    /* end  get table*/
       var data = e.button.data();
app.openDb();
app.createTable();
/* app.deleteRecord(parseInt(data.id));*/
  
    app.insertRecord(data.product,parseInt(data.id) ,data.size ,data.imageurl ,'Personal Care');
    getAllTheData();

   alert(data.product);''
      alert(data.id);
      alert(data.size);
      alert(data.imageurl);
}

function removeFromCart(e)
{
    alert();
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
 /* start create table*/
app.createTable = function() {
    app.db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS CartTable (id INTEGER PRIMARY KEY ASC, ProductName TEXT, Catalogid INTEGER,size TEXT,Image_URL TEXT,Catalogy TEXT)", []);
    });
}
 /* end  create table*/
 /* start  insert table*/
app.insertRecord = function(ProductName, Catalogid ,size ,Image_URL ,Catalogy) {
    app.db.transaction(function(tx) {
        var cDate = new Date();
        tx.executeSql("INSERT INTO CartTable(ProductName, Catalogid ,size ,Image_URL ,Catalogy ) VALUES (?,?,?,?,?)",
                      [ProductName, Catalogid ,size ,Image_URL ,Catalogy],
                      app.onSuccess,
                      app.onError);
    });
}
app.onSuccess = function(tx, r) {
    console.log("Your SQLite query was successful!");
}

app.onError = function(tx, e) {
    console.log("SQLite Error: " + e.message);
}
 /* end  insert table*/
 /* start  update table*/
app.updateRecord = function(id, t) {
    app.db.transaction(function(tx) {
        var mDate = new Date();
        tx.executeSql("UPDATE MyTable SET text_sample = ?, date_sample = ? WHERE id = ?",
                      [t, mDate, id],
                      app.onSuccess,
                      app.onError);
    });
}
 /* end  update table*/
/* start  delete table*/
app.deleteRecord = function(id) {alert(id);
    app.db.transaction(function(tx) {
        tx.executeSql("DELETE FROM CartTable WHERE Catalogid = ?",
                      [id],
                      app.onSuccess,
                      app.onError);
    });
}
/* end  delete table*/
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
        // rs contains our SQLite recordset, at this point you can do anything with it
        // in this case we'll just loop through it and output the results to the console
        for (var i = 0; i < rs.rows.length; i++) {
            alert(JSON.stringify(rs.rows.item(i)));
        }
    }

    app.selectAllRecords(render);
}
    /* end  get table*/
    app.openDb();
       var data = e.button.data();
    alert(data.id);
     app.deleteRecord(parseInt(data.id));
}
// END_CUSTOM_CODE_dataListView
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
                typeName: 'PersonalCare',
                dataProvider: dataProvider
            },

            change: function(e) {
                var data = this.data();
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];

                    dataItem['ImageUrlUrl'] =
                        processImage(dataItem['ImageUrl']);

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
                        'Price': {
                            field: 'Price',
                            defaultValue: ''
                        },
                        'ImageUrl': {
                            field: 'ImageUrl',
                            defaultValue: ''
                        },
                    }
                }
            },
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        dataListViewModel = kendo.observable({
            dataSource: dataSource,
          /*  itemClick: function(e) {
                app.mobileApp.navigate('#components/dataListView/details.html?uid=' + e.dataItem.uid);
            },*/
            detailsShow: function(e) {
                var item = e.view.params.uid,
                    dataSource = dataListViewModel.get('dataSource'),
                    itemModel = dataSource.getByUid(item);
                itemModel.ImageUrlUrl = processImage(itemModel.ImageUrl);
                if (!itemModel.ProductName) {
                    itemModel.ProductName = String.fromCharCode(160);
                }
                dataListViewModel.set('currentItem', itemModel);
            },
            currentItem: null
        });

    parent.set('dataListViewModel', dataListViewModel);
})(app.dataListView);

// START_CUSTOM_CODE_dataListViewModel
// END_CUSTOM_CODE_dataListViewModel