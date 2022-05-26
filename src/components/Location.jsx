/*global kakao*/ 
import React, { useEffect } from 'react'


const map3=[37.4971574,127.144457];
const map4=[37.5093906,127.079639];
const Location=({id})=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    if (id===3){
      var options = {
        center: new kakao.maps.LatLng(map3[0], map3[1]),
        level: 3
      };
    }else{
      var options = {
        center: new kakao.maps.LatLng(map4[0], map4[1]),
        level: 3
      };
    }

    var map = new kakao.maps.Map(container, options);
    if (id===3){
      var markerPosition  = new kakao.maps.LatLng(map3[0], map3[1]); 
    }
    else {
      var markerPosition  = new kakao.maps.LatLng(map4[0], map4[1]); 
    }

    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [id])


    return (
        <div>
        <div id="map" style={{width:"100%", height:"430px"}}></div>
       
        </div>
    )
}

export default Location;