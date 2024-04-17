import * as aq from 'arquero';

async function loadCSV(points, filter) {
  let dt = []
  try {
    dt = await aq.loadCSV('/db.csv');
    dt = dt.filter(aq.escape(d => d["Book"] === filter))

    const locations = dt.array('Location');
    const coordinates = dt.array('WKT');
    const text = dt.array('text');
    const frequency = dt.array('frequency');

    let arrPoints = [];
    for (let i = 0; i < locations.length; i++) {
      arrPoints.push({
        "location": locations[i],
        "coordinates": coordinates[i],
        "quotes": text[i],
        "frequency": frequency[i]
      })
    }
    points.value = arrPoints;
    return points.value
  } catch (error) {
    console.log(error)
  }
}

export default function (points, filter) {
  const finalPoints = loadCSV(points, filter);
  return useState('loadCSV', () => finalPoints)
}