export const markerColor = (item) => {
    var greenIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/green.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var lightblueIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/lightblue.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var yellowIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/yellow.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var goldIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/gold.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var redIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/red.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var pinkIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/pink.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var blueIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/blue.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var purpleIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/purple.png',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });
    
//     //if stage number is 1, then greenIcon, if stage number is 2, then lightblueIcon, etc.
//   var markers = L.marker([row.Latitude, row.Longitude], {
//     icon:
//       row.StageNumber == 1
//         ? greenIcon
//         : row.StageNumber == 2
//         ? lightblueIcon
//         : row.StageNumber == 3
//         ? yellowIcon
//         : row.StageNumber == 4
//         ? goldIcon
//         : row.StageNumber == 5
//         ? redIcon
//         : row.StageNumber == 6
//         ? pinkIcon
//         : row.StageNumber == 7
//         ? blueIcon
//         : purpleIcon,
//   }).addTo(map);
  console.log("MARKET COLOR", markerColor)
 return  item.StageNumber == 1
         ? greenIcon
         : item.StageNumber == 2
         ? lightblueIcon
         : item.StageNumber == 3
         ? yellowIcon
         : item.StageNumber == 4
         ? goldIcon
         : item.StageNumber == 5
         ? redIcon
         : item.StageNumber == 6
         ? pinkIcon
         : item.StageNumber == 7
         ? blueIcon
         : purpleIcon

};
