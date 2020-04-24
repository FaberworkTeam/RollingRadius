import { Component } from "@angular/core";

@Component({
  selector: "app-vehicle-search",
  templateUrl: "./vehicle-search.component.html",
  styleUrls: ["./vehicle-search.component.css"]
})
export class VehicleSearchComponent {
  cities = [
    { id: 1, name: "Vilnius" },
    { id: 2, name: "Kaunas" },
    { id: 3, name: "Pavilnys" },
    { id: 4, name: "PabradÄ" },
    { id: 5, name: "KlaipÄda" }
  ];

  selectedCity: any;
}
