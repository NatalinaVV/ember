import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class RentalsService extends Service {
  @tracked rentals = [];

  async fetchRentals() {
    let response = await fetch('https://emberapimanagement.azure-api.net/fa-rentals-service/rentals');
    let data = await response.json();
    this.rentals = data;
    console.log(this.rentals);
    return this.rentals;
  }
}