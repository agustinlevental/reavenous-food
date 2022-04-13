// Client ID
// hrDKnkHT1BSXvOFf0WaL5w

// API Key
// bkkNV9lcaLPi_OfZfX6fXn2A9yAhYe7mzYXp9Lb1Z3VkzuEWs8gdgxBSwEN78c3x8Rd61kLWsTRBWWxjAxlKCi55YyUM5r4VHxgm-CTl1Sn-kW1g_B9HaW8_r4szYnYx


const apiKey = 'bkkNV9lcaLPi_OfZfX6fXn2A9yAhYe7mzYXp9Lb1Z3VkzuEWs8gdgxBSwEN78c3x8Rd61kLWsTRBWWxjAxlKCi55YyUM5r4VHxgm-CTl1Sn-kW1g_B9HaW8_r4szYnYx'; 

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
