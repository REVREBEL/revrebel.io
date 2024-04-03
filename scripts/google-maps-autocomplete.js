



<!-- AUTOFILL ADDRESS INPUTS -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR-API-KEY&libraries=places&callback=initAutocomplete" async defer> </script>
<style>
.pac-logo::after {
display: none;
}
.pac-container {
border-radius: 5px;
border: 1px solid #ccc;
}
.pac-item {
padding: 0 10px;
}
</style>




<!-- AUTOFILL ADDRESS INPUTS -->
<script>
let autocomplete;

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.querySelector('input[ms-code-input="address"]'),
    {
      componentRestrictions: { country: ['US'] },
      fields: ['address_components'],
      types: ['address']
    }
  );

  autocomplete.addListener('place_changed', function() {
    const place = autocomplete.getPlace();

    if (place) {
      const addressInput = document.querySelector('input[ms-code-input="address"]');
      const cityInput = document.querySelector('input[ms-code-input="city"]');
      const regionInput = document.querySelector('input[ms-code-input="region"]');
      const countryInput = document.querySelector('input[ms-code-input="country"]');
      const postalCodeInput = document.querySelector('input[ms-code-input="postal-code"]');

      addressInput.value = extractAddress(place);
      cityInput.value = extractCity(place);
      regionInput.value = extractRegion(place);
      countryInput.value = extractCountry(place);
      postalCodeInput.value = extractPostalCode(place);
    }
  });
}

function extractAddress(place) {
  let address = '';
  const streetNumber = extractComponent(place, 'street_number');
  const route = extractComponent(place, 'route');

  if (streetNumber) {
    address += streetNumber + ' ';
  }
  if (route) {
    address += route;
  }

  return address.trim();
}

function extractComponent(place, componentType) {
  for (const component of place.address_components) {
    if (component.types.includes(componentType)) {
      return component.long_name;
    }
  }
  return '';
}

function extractCity(place) {
  for (const component of place.address_components) {
    if (component.types.includes('locality')) {
      return component.long_name;
    }
  }
  return '';
}

function extractRegion(place) {
  for (const component of place.address_components) {
    if (component.types.includes('administrative_area_level_1')) {
      return component.long_name;
    }
  }
  return '';
}

function extractCountry(place) {
  for (const component of place.address_components) {
    if (component.types.includes('country')) {
      return component.long_name;
    }
  }
  return '';
}

function extractPostalCode(place) {
  for (const component of place.address_components) {
    if (component.types.includes('postal_code')) {
      return component.long_name;
    }
  }
  return '';
}
</script>
