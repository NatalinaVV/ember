import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class RentalFormComponent extends Component {
  @tracked title = '';
  @tracked id = '';
  @tracked owner = '';
  @tracked city = '';
  @tracked lat = 0;
  @tracked lng = 0;
  @tracked category = 'Apartment';
  @tracked bedrooms = 1;
  @tracked description = '';
  @tracked image = null;

  @service router;

  categories = ['Apartment', 'House', 'Condo'];
  bedroomOptions = [1, 2, 3, 4, 5];

  @action
  updateValue(field, event) {
    this[field] = event.target.value;
  }

  @action
  async submitForm(event) {
    event.preventDefault();

    //  const formData = new FormData();
    // formData.append('type', 'rental');
    // formData.append('id', this.title);
    // formData.append('attributes[title]', this.title);
    // formData.append('attributes[owner]', this.owner);
    // formData.append('attributes[city]', this.city);
    // formData.append('attributes[location][lat]', this.lat);
    // formData.append('attributes[location][lng]', this.lng);
    // formData.append('attributes[category]', this.category);
    // formData.append('attributes[bedrooms]', this.bedrooms);
    // formData.append('attributes[description]', this.description);

    // if (this.image) {
    //     formData.append('attributes[image]', this.image);
    //   }

    const newRental = {
        type: 'rental',
        id: this.title,
        attributes: {
            title: this.title,
            owner: this.owner,
            city: this.city,
            location: {
                lat: parseFloat(this.lat),
                lng: parseFloat(this.lng),
            },
            category: this.category,
            bedrooms: parseInt(this.bedrooms),
            image: this.image,
            description: this.description,
        }
    }; 
    
    try {
      const response = await fetch('https://emberapimanagement.azure-api.net/fa-rentals-service/rentals', {
        method: 'POST',
        body: JSON.stringify(newRental),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      alert('Form submitted successfully!');
      this.router.transitionTo('index');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  }

  @action
  handleImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        const base64String = reader.result.replace("data:", "").replace(/^.+,/, ""); // remove content type part
        this.image = base64String;
    }
    
    reader.readAsDataURL(file);
}
}