import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
@Injectable()
export class RentalService {

  private rentals: Rental[] = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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

  public getRentalById(rentalId: string): Observable<Rental> {
    return new Observable<Rental>((observer) => {
      setTimeout(() => {
        const foundRental = this.rentals.find((rental) => {
          return rental.id == rentalId;
        });
        observer.next(foundRental);
      }, 500);
    });
  }

  public getRentals(): Observable<Rental[]> {
    return new Observable<Rental[]>((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
      setTimeout(() => {
        observer.error('Error');
      }, 2000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

  }

}
