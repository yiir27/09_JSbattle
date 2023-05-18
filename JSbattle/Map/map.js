function GetMap() {
    const map = new Microsoft.Maps.Map('#mymap', {
        center: new Microsoft.Maps.Location(47.6149, -122.1941), //地図を真ん中に
        mapTypeId: Microsoft.Maps.MapTypeId.aerial, ////Type: [load, aerial(航空写真),canvasDark,canvasLight,birdseye,grayscale,streetside]
        zoom: 17 //Zoom:1=zoomOut, 20=zoomUp[ 1~20 ]
    });
}