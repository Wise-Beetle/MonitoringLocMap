var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Coverboards_1 = new ol.format.GeoJSON();
var features_Coverboards_1 = format_Coverboards_1.readFeatures(json_Coverboards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coverboards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coverboards_1.addFeatures(features_Coverboards_1);
var lyr_Coverboards_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coverboards_1, 
                style: style_Coverboards_1,
                popuplayertitle: 'Coverboards',
                interactive: true,
                title: '<img src="styles/legend/Coverboards_1.png" /> Coverboards'
            });
var format_Cams_2 = new ol.format.GeoJSON();
var features_Cams_2 = format_Cams_2.readFeatures(json_Cams_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cams_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cams_2.addFeatures(features_Cams_2);
var lyr_Cams_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cams_2, 
                style: style_Cams_2,
                popuplayertitle: 'Cams',
                interactive: true,
                title: '<img src="styles/legend/Cams_2.png" /> Cams'
            });
var format_Moth_3 = new ol.format.GeoJSON();
var features_Moth_3 = format_Moth_3.readFeatures(json_Moth_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Moth_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Moth_3.addFeatures(features_Moth_3);
var lyr_Moth_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Moth_3, 
                style: style_Moth_3,
                popuplayertitle: 'Moth',
                interactive: true,
                title: '<img src="styles/legend/Moth_3.png" /> Moth'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Coverboards_1.setVisible(true);lyr_Cams_2.setVisible(true);lyr_Moth_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Coverboards_1,lyr_Cams_2,lyr_Moth_3];
lyr_Coverboards_1.set('fieldAliases', {'id': 'id', });
lyr_Cams_2.set('fieldAliases', {'id': 'id', });
lyr_Moth_3.set('fieldAliases', {'id': 'id', });
lyr_Coverboards_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Cams_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Moth_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Coverboards_1.set('fieldLabels', {'id': 'no label', });
lyr_Cams_2.set('fieldLabels', {'id': 'no label', });
lyr_Moth_3.set('fieldLabels', {'id': 'no label', });
lyr_Moth_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});