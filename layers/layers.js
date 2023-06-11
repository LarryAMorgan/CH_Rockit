var wms_layers = [];


        var lyr_ESRIImagery_0 = new ol.layer.Tile({
            'title': 'ESRI Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Manzana2_1 = new ol.format.GeoJSON();
var features_Manzana2_1 = format_Manzana2_1.readFeatures(json_Manzana2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzana2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzana2_1.addFeatures(features_Manzana2_1);
var lyr_Manzana2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzana2_1, 
                style: style_Manzana2_1,
                interactive: true,
                title: '<img src="styles/legend/Manzana2_1.png" /> Manzana2'
            });
var format_Manzana1_2 = new ol.format.GeoJSON();
var features_Manzana1_2 = format_Manzana1_2.readFeatures(json_Manzana1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzana1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzana1_2.addFeatures(features_Manzana1_2);
var lyr_Manzana1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzana1_2, 
                style: style_Manzana1_2,
                interactive: true,
                title: '<img src="styles/legend/Manzana1_2.png" /> Manzana1'
            });
var format_Longlands_3 = new ol.format.GeoJSON();
var features_Longlands_3 = format_Longlands_3.readFeatures(json_Longlands_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Longlands_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Longlands_3.addFeatures(features_Longlands_3);
var lyr_Longlands_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Longlands_3, 
                style: style_Longlands_3,
                interactive: true,
                title: '<img src="styles/legend/Longlands_3.png" /> Longlands'
            });

lyr_ESRIImagery_0.setVisible(true);lyr_Manzana2_1.setVisible(true);lyr_Manzana1_2.setVisible(true);lyr_Longlands_3.setVisible(true);
var layersList = [lyr_ESRIImagery_0,lyr_Manzana2_1,lyr_Manzana1_2,lyr_Longlands_3];
lyr_Manzana2_1.set('fieldAliases', {'FID': 'FID', });
lyr_Manzana1_2.set('fieldAliases', {'FID': 'FID', });
lyr_Longlands_3.set('fieldAliases', {'id': 'id', });
lyr_Manzana2_1.set('fieldImages', {'FID': '', });
lyr_Manzana1_2.set('fieldImages', {'FID': '', });
lyr_Longlands_3.set('fieldImages', {'id': '', });
lyr_Manzana2_1.set('fieldLabels', {'FID': 'no label', });
lyr_Manzana1_2.set('fieldLabels', {'FID': 'no label', });
lyr_Longlands_3.set('fieldLabels', {'id': 'no label', });
lyr_Longlands_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});