import Flags from './Flags';
import Country from './Country';
import ChuckNorris from './ChuckNorris';


fetch('/data/countries.json')
  .then(res => res.json())
  .then(data => {

    let html = data.countries.reduce((result, country) => {
      return result + `
        <div class="country-list__item">
          <img src="${ country.flag }" alt="${ country.name }">
          <div class="country-list__name">
            ${ country.name }
          </div>
        </div>
      `
    }, '');

    document.querySelector('#country-list').innerHTML = html;
  });

