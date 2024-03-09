import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "80vw",
  height: "60vh",
  border: "1px solid blue",
  borderRadius: "25px",
};

const location = {
  lat: 36.1261579,
  lng: -115.1934502,
};

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBRnKjXkpfCf1DS3W8Yqdtb5PhKCMFmSDQ",
  });

  return isLoaded ? (
    <div
      // style={{ backgroundImage: `url(${main})`, height: "100vh" }}
      className="flex justify-center items-center h-[100vh]"
    >
      <div className="relative z-0 mt-40">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={15}
        >
          <Marker position={location} />
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default GoogleMaps;
