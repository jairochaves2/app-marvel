import Geocode from "react-geocode";

export default class GoogleGeocodeApi {
  public geocode: typeof Geocode;
  constructor() {
    Geocode.setApiKey(
      process.env.REACT_APP_GOOGLE_API_KEY
        ? process.env.REACT_APP_GOOGLE_API_KEY
        : ""
    );
    this.geocode = Geocode;
  }
  public async getAddress(lat: string, lng: string): Promise<string> {
    const response = await this.geocode.fromLatLng(lat, lng);
    return response.results[0].formatted_address;
  }
}
