/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';

new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});

// const user = new User();
// const company = new Company();

// console.log(user);
// console.log(company);
