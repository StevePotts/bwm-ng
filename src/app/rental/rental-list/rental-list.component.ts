import { Component, OnInit } from "@angular/core";

@Component({
  selector: "bwm-rental-list",
  templateUrl: "./rental-list.component.html",
  styleUrls: ["./rental-list.component.scss"]
})
export class RentalListComponent implements OnInit {
  rentals: any[] = [
    {
      id: 1,
      title: 'Central Apartment',
      city: 'New York',
      street: 'Times Square',
      category: 'Apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very nice apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2018'
    },
    {
      id: 2,
      title: 'Average Apartment',
      city: 'London',
      street: 'Carnaby Street',
      category: 'Apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      description: 'Very nice apartment',
      dailyRate: 100,
      shared: false,
      createdAt: '12/12/2018'
    },
    {
      id: 3,
      title: 'Small Family Home',
      city: 'Derby',
      street: 'Manor Road',
      category: 'House',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very nice Family Home',
      dailyRate: 80,
      shared: false,
      createdAt: '24/01/2018'
    },
    {
      id: 4,
      title: 'Market Apartment',
      city: 'Krakow',
      street: 'Market Square',
      category: 'Apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 1,
      description: 'Very nice apartment',
      dailyRate: 50,
      shared: false,
      createdAt: '06/06/2018'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
