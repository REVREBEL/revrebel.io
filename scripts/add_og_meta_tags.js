/*
  Add a og meta tags to each page that are not already provide through webflow.

  Usage
  <script src="https://revrebel.github.io/revrebel.io/scripts/add_og_meta_tags.js"></script>

*/


document.addEventListener('DOMContentLoaded', function() {
  // Function to add Open Graph meta tag
  function addOGMetaTag(property, content) {
    const meta = document.createElement('meta');
    meta.setAttribute('property', property);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }

  // Add Open Graph properties
  addOGMetaTag('og:site_name', 'REVREBEL');
  addOGMetaTag('og:url', 'https://revrebel.io');
  addOGMetaTag('og:image:width', '1600');
  addOGMetaTag('og:image:height', '1200');
  addOGMetaTag('og:locale', 'en_US');

  // Get the URL from the browser without query parameters and fragments
  const urlPath = window.location.origin + window.location.pathname;

  // Check for the meta og:url tag
  let ogURL = document.querySelector('meta[property="og:url"]');
  // Add the meta og:url tag if not found
  if (!ogURL) {
    const metaUrl = document.createElement('meta');
    metaUrl.setAttribute('property', 'og:url');
    metaUrl.setAttribute('content', urlPath);
    document.head.appendChild(metaUrl);
  } else {
    // If the og:url meta tag already exists, update its content
    ogURL.setAttribute('content', urlPath);
  }

  // Get the URL from the existing og:image property
  const ogImageMeta = document.querySelector('meta[property="og:image"]');
  if (!ogImageMeta) {
    console.error("og:image meta tag is missing. Unable to retrieve image URL.");
  } else {
    const urlImagePath = ogImageMeta.getAttribute('content');

    // Check for the meta og:image:secure_url tag
    let ogSecureURL = document.querySelector('meta[property="og:image:secure_url"]');

    // Add the meta og:image:secure_url tag if not found
    if (!ogSecureURL) {
      const metaImage = document.createElement('meta');
      metaImage.setAttribute('property', 'og:image:secure_url');
      metaImage.setAttribute('content', urlImagePath);
      document.head.appendChild(metaImage);
    } else {
      // If the og:image:secure_url meta tag already exists, update its content
      ogSecureURL.setAttribute('content', urlImagePath);
    }
  }

  // Construct array for Open Graph properties
  let ogPropertiesArray = [{
    "@property": "og:site_name",
    "@content": "REVREBEL"
  }, {
    "@property": "og:url",
    "@content": urlPath
  }, {
    "@property": "og:image:width",
    "@content": "1600"
  }, {
    "@property": "og:image:height",
    "@content": "1200"
  }, {
    "@property": "og:image:secure_url",
    "@content": "IMAGE-URL"
  }, {
    "@property": "og:locale",
    "@content": "en_US"
  }];

  // Construct Open Graph schema
  let ogSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "mainEntity": ogPropertiesArray
  };

  // Create script element for JSON-LD
  let script = document.createElement('script');
  script.type = "application/ld+json";
  script.innerHTML = JSON.stringify(ogSchema);

  // Append script element to the head
  document.getElementsByTagName('head')[0].appendChild(script);

  console.log('Open Graph schema script added to the head.');

});
