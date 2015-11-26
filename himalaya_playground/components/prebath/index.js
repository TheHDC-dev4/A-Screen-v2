'use strict';

function AddtowishList(e)
{
   $('#'+e).css('color','#FF6600');
}

app.prebath = kendo.observable({
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
    afterShow: function() {
              $('.startLink').removeClass('startLink'); 
    }
});

// START_CUSTOM_CODE_prebath
var cartFlag = false;
function addToCart(e)
{

/* var data = e.button.data();

    alert( data.test);*/

    
    
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

 /* start  inser or update table*/
app.insertRecordUpdateRecord = function(ProductName, Catalogid ,size ,Image_URL ,Catalogy) {
  /*  alert('insertRecordUpdateRecord');*/
     app.db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM CartTable where Catalogid = ? ", [Catalogid],
                       function (tx, rs) {
      
        if ( rs.rows.length < 1) {
   
              app.db.transaction(function(tx) {
         tx.executeSql("INSERT INTO CartTable(ProductName, Catalogid ,size ,Image_URL ,Catalogy,count ) VALUES (?,?,?,?,?,?)",
                      [ProductName, Catalogid ,size ,Image_URL ,Catalogy,1],
                      app.onSuccess,
                      app.onError);
    });
        }
            else
                {
                        app.db.transaction(function(tx) {
                      tx.executeSql("UPDATE CartTable SET count = count + 1 WHERE Catalogid = ?",
                      [Catalogid],
                      app.onSuccess,
                      app.onError);
                      }); 
                    
                }
    },
                      app.onError);
    });
    
    
    
    app.db.transaction(function(tx) {
        var cDate = new Date();
        tx.executeSql("INSERT INTO CartTable(ProductName, Catalogid ,size ,Image_URL ,Catalogy ) VALUES (?,?,?,?,?)",
                      [ProductName, Catalogid ,size ,Image_URL ,Catalogy],
                      app.onSuccess,
                      app.onError);
    });
}
 /* end inser or update table*/



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
  var view = this.view();
app.onSuccess = function(tx, r) {
 
  var badgeElement =   view.element.find("#btnCart").data("kendoMobileButton");
   var badge = parseInt( badgeElement.badge()); //get badge value
    badge++;
    badgeElement.badge(badge); //set new badge value
 var count1 =  parseInt(e.button.prev().text());
 count1++;
e.button.prev().text(count1);
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
           /* alert(JSON.stringify(rs.rows.item(i)));*/
        }
    }

    app.selectAllRecords(render);
}
    /* end  get table*/
       var data = e.button.data();
app.openDb();
app.createTable();
/* app.deleteRecord(parseInt(data.id));*/
  
    app.insertRecordUpdateRecord(data.product,parseInt(data.id) ,data.size ,data.imageurl ,'Personal Care');
   /* getAllTheData();*/

   
}

function removeFromCart(e)
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
   var view = this.view();
app.onSuccess = function(tx, r) {
 
 

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
app.checkRecords = function(id) {
    app.db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM CartTable WHERE Catalogid = ?", [id],
                                            function (tx, rs) {
      
        if ( rs.rows.length > 0) {
         app.db.transaction(function(tx) {
        tx.executeSql("DELETE FROM CartTable WHERE Catalogid = ?",
                      [id],
                      app.onSuccess,
                      app.onError);
    });
        }
            else
                {
                    
                    
                }
    },
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
           /* alert(JSON.stringify(rs.rows.item(i)));*/
        }
    }

    app.selectAllRecords(render);
}
    /* end  get table*/
    app.openDb();
       var data = e.button.data();
    
 app.checkRecords(parseInt(data.id));

    
                var count1 =  parseInt(e.button.next().text());
    if(count1 > 0)
        {
 count1--;
e.button.next().text(count1);
 var badgeElement =   view.element.find("#btnCart").data("kendoMobileButton");
   var badge = parseInt( badgeElement.badge()); //get badge value
    badge--;
    badgeElement.badge(badge); //set new badge value
        }

        
             
    
   
}
// END_CUSTOM_CODE_prebath
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
                typeName: 'PreBathandDipers',
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
        prebathModel = kendo.observable({
            dataSource: dataSource,
          /*  itemClick: function(e) {
                app.mobileApp.navigate('#components/prebath/details.html?uid=' + e.dataItem.uid);
            },*/
            detailsShow: function(e) {
                var item = e.view.params.uid,
                    dataSource = prebathModel.get('dataSource'),
                    itemModel = dataSource.getByUid(item);
                itemModel.ImageUrlUrl = processImage(itemModel.ImageUrl);
                if (!itemModel.ProductName) {
                    itemModel.ProductName = String.fromCharCode(160);
                }
                prebathModel.set('currentItem', itemModel);
            },
            currentItem: null
        });

    parent.set('prebathModel', prebathModel);
})(app.prebath);

// START_CUSTOM_CODE_bathModel
function AddtowishListDetails(e)
{
 
   $('#'+e).next().show();
    $('#'+e).hide();
}

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
// END_CUSTOM_CODE_prebathModel