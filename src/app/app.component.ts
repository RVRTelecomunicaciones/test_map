import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  PlaceAutocompleteComponent,
  PlaceSearchResult,
} from './components/place-autocomplete.component';
import { PlaceCardComponent } from './components/place-card.component';
import { MapDisplayComponent } from './components/map-display.component';
import { NgIf } from '@angular/common';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    PlaceAutocompleteComponent,
    PlaceCardComponent,
    MapDisplayComponent,
    NgIf,
  ],
  template: `
    <mat-toolbar color="primary"> My Journey Planner </mat-toolbar>

    <div class="container">
      <div class="input-area">
        <h2>I want to go from</h2>
        <app-place-autocomplete
          (placeChanged)="fromValue = $event"
          placeholder="Enter from address..."
        ></app-place-autocomplete>
        <h2>to</h2>
        <app-place-autocomplete
          (placeChanged)="toValue = $event"
          placeholder="Enter to address..."
        ></app-place-autocomplete>
      </div>
      <div
        class="display-area"
        [hidden]="!fromValue.address && !toValue.address"
      >
        <div>
          <app-place-card [data]="fromValue"></app-place-card>
          <app-place-card [data]="toValue"></app-place-card>
        </div>
        <app-map-display [from]="fromValue" [to]="toValue"></app-map-display>
      </div>
    </div>
  `,
  styles: [
    `
      .input-area {
        display: flex;
        gap: 16px;
        align-items: center;
      }

      .display-area {
        display: flex;
        gap: 16px;
        align-items: flex-start;
        height: calc(100vh - 180px);

        > div {
          width: 30%;
          overflow: auto;
          padding: 8px;
          height: inherit;

          > * {
            margin-bottom: 16px;
          }
        }

        > app-map-display {
          width: 70%;
          height: inherit;
        }
      }

      .display-area[hidden] {
        display: none;
      }

      .container {
        padding: 24px;
      }

      app-place-autocomplete {
        width: 300px;
      }
    `,
  ],
})
export class AppComponent implements AfterViewInit, OnInit {
  ngAfterViewInit(): void {}
  fromValue: PlaceSearchResult = { address: '' };
  toValue: PlaceSearchResult = { address: '' };

  ngOnInit(): void {
    /*  const loader = new Loader({
      apiKey: 'AIzaSyBrkygBTW5BHfNxdAxxErprHzpYbqhYeRo',
      version: 'weekly',
      libraries: [
        'places',
        'routes',
        'marker',
        'geometry',
        'journeySharing',
        'drawing',
        'core',
        'maps',
        'geocoding',
        'streetView',
      ],
    });

    loader.importLibrary('maps').then(() => {
      // Aquí puedes utilizar la API de Google Maps de manera segura
      console.log('Google Maps API cargada correctamente');
    }); */
  }
}
