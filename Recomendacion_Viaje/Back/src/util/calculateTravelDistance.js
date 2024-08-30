const calculateTrevelDistance = (from, to) => {
  const { lat: fromLat, lng: fromLng } = from;
  const { lat: toLat, lng: toLng } = to;

  R = 6371;

  dLat = (toLat - fromLat) * Math.PI / 180;
  dLng = (toLng - fromLng) * Math.PI / 180;

  a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(fromLat * Math.PI / 180) * Math.cos(toLat * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return d;

}