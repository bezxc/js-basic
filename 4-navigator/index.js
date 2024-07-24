const addressLat = 10;
const addresLong = 5;
const positionLat = 23;
const positionLong = 9;

const getDistance = (addressLat, addresLong, positionLat, positionLong) => {
  return Math.sqrt(
    (addressLat - positionLat) ** 2 + (addresLong - positionLong) ** 2,
  );
};

console.log(getDistance(addressLat, addresLong, positionLat, positionLong));
