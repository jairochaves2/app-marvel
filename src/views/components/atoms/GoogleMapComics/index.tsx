import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import { getLocationBrowser } from "../../../../helpers/Maps.helper";
import { useAddress } from "../../../../hooks/contexts.hooks";
import GoogleGeocodeApi from "../../../../services/GoogleGeocodeApi.service";

export default function GoogleMapComics() {
  const [location, setLocation] = React.useState({ lng: -1, lat: -1 });
  const [locationMark, setLocationMark] = React.useState({ lng: 0, lat: 0 });
  const [geocode] = React.useState<GoogleGeocodeApi>(new GoogleGeocodeApi());

  const { setAddress } = useAddress();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
      ? process.env.REACT_APP_GOOGLE_API_KEY
      : "",
  });

  React.useEffect(() => {
    getLocationBrowser()
      .then((locationBrowser) => {
        setLocation(locationBrowser);
      })
      .catch((errorBrowser) => {
        setLocation(errorBrowser);
      });
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "400px",
      }}
      center={location}
      zoom={12}
      onClick={(event) => {
        const data = event.latLng?.toJSON();
        if (data) {
          geocode
          .getAddress(data.lat.toString(), data.lng.toString())
          .then((geoAddress) => {
              setLocationMark({ lat: data.lat, lng: data.lng });
              setAddress(geoAddress);
            });
        }
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {locationMark.lat ? <Marker position={locationMark} /> : <></>}
    </GoogleMap>
  ) : (
    <></>
  );
}
