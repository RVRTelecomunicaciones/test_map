import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private googleMapsLoaded: Promise<void>;

  constructor() {
    this.googleMapsLoaded = new Promise<void>((resolve) => {
      // Asignar la función al objeto window globalmente
      window.initGoogleMaps = () => {
        resolve();
      };

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBrkygBTW5BHfNxdAxxErprHzpYbqhYeRo&libraries=places&callback=initGoogleMaps`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    });
  }

  async loadGoogleMaps(): Promise<void> {
    await this.googleMapsLoaded;
  }
}
