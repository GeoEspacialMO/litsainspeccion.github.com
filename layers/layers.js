var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FotosTermicasDJI_1 = new ol.format.GeoJSON();
var features_FotosTermicasDJI_1 = format_FotosTermicasDJI_1.readFeatures(json_FotosTermicasDJI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FotosTermicasDJI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FotosTermicasDJI_1.addFeatures(features_FotosTermicasDJI_1);
var lyr_FotosTermicasDJI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FotosTermicasDJI_1, 
                style: style_FotosTermicasDJI_1,
                interactive: true,
                title: '<img src="styles/legend/FotosTermicasDJI_1.png" /> FotosTermicasDJI'
            });
var format_Lnea_2 = new ol.format.GeoJSON();
var features_Lnea_2 = format_Lnea_2.readFeatures(json_Lnea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lnea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lnea_2.addFeatures(features_Lnea_2);
var lyr_Lnea_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lnea_2, 
                style: style_Lnea_2,
                interactive: true,
                title: '<img src="styles/legend/Lnea_2.png" /> Línea'
            });
var format_Torres_3 = new ol.format.GeoJSON();
var features_Torres_3 = format_Torres_3.readFeatures(json_Torres_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Torres_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Torres_3.addFeatures(features_Torres_3);
var lyr_Torres_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Torres_3, 
                style: style_Torres_3,
                interactive: true,
                title: '<img src="styles/legend/Torres_3.png" /> Torres'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_FotosTermicasDJI_1.setVisible(true);lyr_Lnea_2.setVisible(true);lyr_Torres_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FotosTermicasDJI_1,lyr_Lnea_2,lyr_Torres_3];
lyr_FotosTermicasDJI_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Cam. Maker': 'Cam. Maker', 'Cam. Model': 'Cam. Model', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', 'Images': 'Images', });
lyr_Lnea_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Torres_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nombre': 'Nombre', });
lyr_FotosTermicasDJI_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', 'Altitude': 'TextEdit', 'North': 'TextEdit', 'Azimuth': 'TextEdit', 'Cam. Maker': 'TextEdit', 'Cam. Model': 'TextEdit', 'Title': 'TextEdit', 'Comment': 'TextEdit', 'Path': 'TextEdit', 'RelPath': 'TextEdit', 'Timestamp': 'TextEdit', 'Images': 'TextEdit', });
lyr_Lnea_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_Torres_3.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_FotosTermicasDJI_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Name': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Lon': 'inline label', 'Lat': 'inline label', 'Altitude': 'inline label', 'North': 'inline label', 'Azimuth': 'inline label', 'Cam. Maker': 'inline label', 'Cam. Model': 'inline label', 'Title': 'inline label', 'Comment': 'inline label', 'Path': 'inline label', 'RelPath': 'inline label', 'Timestamp': 'inline label', 'Images': 'inline label', });
lyr_Lnea_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Torres_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nombre': 'inline label', });
lyr_Torres_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});