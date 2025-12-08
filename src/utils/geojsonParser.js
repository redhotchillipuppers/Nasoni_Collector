/**
 * Parses GeoJSON data into a simple array of nasoni objects
 * @param {Object} geojsonData - The GeoJSON object to parse
 * @returns {Array} Array of nasoni objects with { id, lat, lon, properties }
 */
export function parseNasoniData(geojsonData) {
  if (!geojsonData || !geojsonData.features) {
    console.warn('Invalid GeoJSON data provided');
    return [];
  }

  return geojsonData.features.map((feature, index) => {
    const [longitude, latitude] = feature.geometry.coordinates;

    return {
      id: feature.id || feature.properties?.id || `nasone-${index}`,
      lat: latitude,
      lon: longitude,
      properties: feature.properties || {},
    };
  });
}

/**
 * Loads and parses the nasoni GeoJSON data
 * @returns {Array} Array of parsed nasoni objects
 */
export function loadNasoniData() {
  try {
    // Import the GeoJSON file
    const geojsonData = require('../data/export.geojson');
    return parseNasoniData(geojsonData);
  } catch (error) {
    console.error('Error loading nasoni data:', error);
    return [];
  }
}
