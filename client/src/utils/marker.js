export const markerColor = (item) => {
    var greenIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/green1.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var lightblueIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/blue1.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var yellowIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/yellow1.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var goldIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/purple1.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var redIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/red1.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var pinkIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/magenta1.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var blueIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/black1.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });

    var purpleIcon = L.icon({
        iconUrl: 'https://github.com/samermahir/Conquer.io/blob/main/client/public/assets/brown1.png?raw=true',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25],
    });
    
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
