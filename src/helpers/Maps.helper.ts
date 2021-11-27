export async function getLocationBrowser(): Promise<{
  lng: number;
  lat: number;
}> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (locationBrowser) => {
        resolve({
          lng: locationBrowser.coords.longitude,
          lat: locationBrowser.coords.latitude,
        });
      },
      (error) => {
        reject({ lng: -39.27, lat: -7.27 });
      }
    );
  });
}
