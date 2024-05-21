async function fetchProperties() {
    try {
        const response = await fetch('assets/js/data.json');
        const properties = await response.json();
        displayAllProperties(properties);
    } catch (error) {
        console.error('Error fetching properties:', error);
    }
}

///all properties to display
function displayAllProperties(properties) {
    var container = document.getElementById('property-all-container');
    container.innerHTML = ''; // Clear any existing content

    properties.forEach(function(property) {
        var propertyHTML = `
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="property-item rounded overflow-hidden">
                    <div class="position-relative overflow-hidden">
                        <a href=""><img class="img-fluid" src="assets/img/property-1.jpg" alt=""></a>
                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.property_type}</div>
                    </div>
                    <div class="p-4 pb-0">
                        <h5 class="text-primary mb-3">${property.estimate_cost}</h5>
                        <a class="d-block h5 mb-2" href="">${property.property_name}</a>
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
fetchProperties() 