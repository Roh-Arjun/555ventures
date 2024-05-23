async function fetchProperties() {
    try {
        const response = await fetch('assets/js/data.json');
        const properties = await response.json();
        displayTopProperties(properties, 6);
        displayRentProperty(properties,6);
        displaySellProperty(properties,6);
    } catch (error) {
        console.error('Error fetching properties:', error);
    }
}

function displayTopProperties(properties, limit) {
    let container = document.getElementById('property-container');
    container.innerHTML = ''; // Clear any existing content
    document.getElementById("listedcount").innerHTML=properties.length
    properties.slice(0, limit).forEach(function(property) {
        let propertyHTML = `
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="property-item rounded overflow-hidden">
                    <div class="position-relative overflow-hidden">
                        <a><img class="img-fluid" src="assets/img/property-1.jpg" alt=""></a>
                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For ${property.Availability}</div>
                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.property_type}</div>
                    </div>
                    <div class="p-4 pb-0">
                        <h5 class="text-primary mb-3">₹ ${property.estimate_cost}</h5>
                        <a class="d-block h5 mb-2" href="" onclick="handleClick(${property.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">${property.property_name}</a>
                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${property.address}</p>
                    </div>
                    <div class="d-flex border-top">
                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>${property.sqft}</small>
                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${property.bedroom}</small>
                        <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${property.bathroom}</small>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += propertyHTML;
    });
}

function handleClick(id){
    console.log(id)
    sessionStorage.setItem('shareid', id);
}

function displayRentProperty(properties,limit){
    let containerent = document.getElementById('property-container-rent');
    containerent.innerHTML = ''; // Clear any existing content
    const filteredProperties = properties.filter(property => property.Availability === "Rent");

    filteredProperties.slice(0, limit).forEach(function(property) {
        let propertyHTML = `
            <div class="col-lg-4 col-md-6 fadeInUp" >
                <div class="property-item rounded overflow-hidden">
                    <div class="position-relative overflow-hidden">
                        <a><img class="img-fluid" src="assets/img/property-1.jpg" alt=""></a>
                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For ${property.Availability}</div>
                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.property_type}</div>
                    </div>
                    <div class="p-4 pb-0">
                        <h5 class="text-primary mb-3">₹ ${property.estimate_cost}</h5>
                        <a class="d-block h5 mb-2" href="" onclick="handleClick(${property.id})" data-bs-toggle="modal" data-bs-target="#exampleModal" >${property.property_name}</a>
                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${property.address}</p>
                    </div>
                    <div class="d-flex border-top">
                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>${property.sqft}</small>
                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${property.bedroom}</small>
                        <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${property.bathroom}</small>
                    </div>
                </div>
            </div>
        `;
        containerent.innerHTML += propertyHTML;
    });
}

function displaySellProperty(properties,limit){
    let containersell = document.getElementById('property-container-sell');
    containersell.innerHTML = ''; // Clear any existing content
    const filteredPropertiesell = properties.filter(property => property.Availability === "Sell");
    console.log(properties.length)
    
    filteredPropertiesell.slice(0, limit).forEach(function(property) {
        let propertyHTML = `
            <div class="col-lg-4 col-md-6 fadeInUp" >
                <div class="property-item rounded overflow-hidden">
                    <div class="position-relative overflow-hidden">
                        <a><img class="img-fluid" src="assets/img/property-1.jpg" alt=""></a>
                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For ${property.Availability}</div>
                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.property_type}</div>
                    </div>
                    <div class="p-4 pb-0">
                        <h5 class="text-primary mb-3">₹ ${property.estimate_cost}</h5>
                        <a class="d-block h5 mb-2" href="" onclick="handleClick(${property.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">${property.property_name}</a>
                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${property.address}</p>
                    </div>
                    <div class="d-flex border-top">
                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>${property.sqft}</small>
                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${property.bedroom}</small>
                        <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${property.bathroom}</small>
                    </div>
                </div>
            </div>
        `;
        containersell.innerHTML += propertyHTML;
    });
}

document.getElementById('searchButton').addEventListener('click', function() {
    const searchKeyword = document.getElementById('searchKeyword').value;
    const propertyType = document.getElementById('propertyType').value;
    const location = document.getElementById('location').value;

    // Check if Property Type and Location are selected
    if (propertyType === "Property Type" || location === "Location") {
        // Display warning message
        document.getElementById('warning').style.display = 'block';
    } else {
        // Hide warning message
        document.getElementById('warning').style.display = 'none';

        // Create query string
        const queryString = `?keyword=${encodeURIComponent(searchKeyword)}&propertyType=${encodeURIComponent(propertyType)}&location=${encodeURIComponent(location)}`;

        // Redirect to property.html with query string
        window.location.href = 'property.html' + queryString;
    }
});

document.getElementById('shareBtn').addEventListener('click', event => {
   let id= sessionStorage.getItem('shareid');
   console.log("from share modulw", id)
    // Check for Web Share api support
    if (navigator.share) {
      // Browser supports native share api
      navigator.share({
        text: 'Please check this property: ',
        url: `https://roh-arjun.github.io/555ventures/shareproperty.html?id=${encodeURIComponent(id)}`
      }).then(() => {
        console.log('Thanks for sharing!');
      })
        .catch((err) => console.error(err));
    } else {
      // Fallback
      alert("The current browser does not support the share function. Please, manually share the link")
    }
  }

);

// Fetch and display properties on page load
fetchProperties();