/* MapTilerTileJSON; Copyright (C) 2016 Klokan Technologies GmbH */
var loadMapTilerTileJSON=function(d,l){var g=function(b){var c=b.attribution,e=b.scheme||"xyz",d=b.tiles,h=b.minzoom||0,g=b.maxzoom||22,v=b.bounds||[-180,-90,180,90],m=b.crs||"EPSG:3857",n=b.proj4,k=b.extent,f=b.tile_matrix;window.proj4&&(n=b.proj4)&&window.proj4.defs(m,n);var p="tms"!=e,e=k;if(f){var q=[],r=[],t=[],u=ol.extent.createEmpty();f.forEach(function(a){t.push(a.tile_size||[256,256]);a.extent&&ol.extent.extend(u,a.extent);q.push(a.origin||[k[0],k[3]]);a=a.pixel_size||[1,1];r.push(Math.abs(a[0]));
0<a[1]&&(p=!1)});f=new ol.tilegrid.TileGrid({minZoom:h,origins:q,resolutions:r,tileSizes:t});e=e||u}else f=ol.tilegrid.createXYZ({extent:ol.proj.get("EPSG:3857").getExtent(),maxZoom:g,minZoom:h});c=new ol.source.XYZ({projection:ol.proj.get(m),maxZoom:g,minZoom:h,tileGrid:f,attribution:c,tileUrlFunction:function(a,b,c){b=a[0];c=a[1];a=a[2];p&&(a=-a-1);return d[(b+c+a)%d.length].replace("{z}",b).replace("{x}",c).replace("{y}",a)}});l(c,v,e,b)};if("string"==typeof d){var c=new XMLHttpRequest;c.addEventListener("load",
function(){g(this.response)});c.open("GET",d);c.responseType="json";c.send()}else g(d,l)};
