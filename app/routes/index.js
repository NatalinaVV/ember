import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { query } from '@ember-data/json-api/request';

export default class IndexRoute extends Route {
  @service rentals;

  async model() {
    return await this.rentals.fetchRentals();
  }
}



// export default class IndexRoute extends Route {
//   @service store;

//   async model() {
//     const { content } = await this.store.request(query('rental'));
//     return content.data;
//   }
// }





// import Route from '@ember/routing/route';
// const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

// export default class IndexRoute extends Route {
//   async model() {
//     // return {
//     //keep it for DB
//     //type:"rentals",
//     //id: "grand-old-mansion",
//     //attributes: {
//     //   title: 'Grand Old Mansion',
//     //   owner: 'Veruca Salt',
//     //   city: 'San Francisco',
//     //   location: {
//     //     lat: 37.7749,
//     //     lng: -122.4194,
//     //   },
//     //   category: 'Estate',
//     //   type: 'Standalone',
//     //   bedrooms: 15,
//     //   image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
//     //   description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
//     // }
//     // };

//     let response = await fetch('/api/rentals.json');
//     let { data } = await response.json();

//     return data.map((model) => {
//       let { id, attributes } = model;
//       let type;

//       if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
//         type = 'Community';
//       } else {
//         type = 'Standalone';
//       }

//       return { id, type, ...attributes };
//     });
//   }
// }
