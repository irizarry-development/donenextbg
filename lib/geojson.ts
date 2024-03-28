const encode = require('geojson-polyline').encode

// Keeping this here for my own personal use.

// get the relation id from this site
// https://nominatim.openstreetmap.org/

// https://polygons.openstreetmap.fr/index.py - This takes a reference ID and gives the polygon for the respective area

const encodedData = {"type":"MultiPolygon","coordinates":[[[[-87.0606705,36.6429237],[-87.0414942,36.6435043],[-87.0115221,36.643949],[-87.0002907,36.6441958],[-86.9873988,36.6444791],[-86.9199227,36.6459619],[-86.906583,36.646255],[-86.906023,36.646302],[-86.854268,36.646884],[-86.8436041,36.6470487],[-86.833155,36.64721],[-86.818405,36.647639],[-86.816186,36.647722],[-86.813037,36.647647],[-86.7983555,36.64804],[-86.7964448,36.6480672],[-86.7875327,36.6482931],[-86.7628887,36.6489353],[-86.751602,36.7269549],[-86.742226,36.750179],[-86.7165451,36.7957919],[-86.7046891,36.809513],[-86.690872,36.8445659],[-86.6755141,36.855148],[-86.656281,36.8757359],[-86.632217,36.882767],[-86.6115111,36.882961],[-86.674332,36.9998049],[-86.750237,37.0248869],[-86.844765,37.056068],[-86.94133,37.069012],[-86.976608,37.0735739],[-87.053091,37.0610102],[-87.05481,36.9999707],[-87.0551422,36.970874],[-87.0554841,36.9328701],[-87.0563248,36.8749579],[-87.0569469,36.8469706],[-87.0581206,36.8046232],[-87.050069,36.7674669],[-87.0593996,36.7479572],[-87.0595925,36.7292643],[-87.0606705,36.6429237]]]]}


const encodedPolyLine = encode(encodedData)

console.log(encodedPolyLine)