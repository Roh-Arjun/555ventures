var Properties=[
    {
        id:1,
        type:"Residential",
        property_type:"Villa",
        property_name:"something name",
        location:"mysore",
        sqft:"1500",
        bedroom:"2",
        bathroom:"2",
        attach_bathroom:true,
        furnish:"semi furnished",
        description:"something about the property",
        address:"niveditha nagar mysore",
        estimate_cost:"2000",
    },
    {
        id:2,
        type:"Commerical",
        property_type:"Shop",
        property_name:"Best position",
        location:"mysore",
        sqft:"1500",
        bedroom:"2",
        bathroom:"2",
        attach_bathroom:true,
        furnish:"semi furnished",
        description:"something about the property",
        address:"niveditha nagar mysore",
        estimate_cost:"2000",
    },
    {
        id:3,
        type:"Plot",
        property_type:"Land",
        property_name:"Plot in mysore",
        location:"mysore",
        sqft:"1500",
        bedroom:"2",
        bathroom:"2",
        attach_bathroom:true,
        furnish:"semi furnished",
        description:"something about the property",
        address:"niveditha nagar mysore",
        estimate_cost:"2000",
    },
    {
        id:4,
        type:"Residential",
        property_type:"Villa",
        property_name:"something name",
        location:"Bengluru",
        sqft:"1500",
        bedroom:"2",
        bathroom:"2",
        attach_bathroom:true,
        furnish:"semi furnished",
        description:"something about the property",
        address:"niveditha nagar mysore",
        estimate_cost:"2000",
    },
    {
        id:5,
        type:"Residential",
        property_type:"Villa",
        property_name:"something name",
        location:"mysore",
        sqft:"1500",
        bedroom:"2",
        bathroom:"2",
        attach_bathroom:true,
        furnish:"semi furnished",
        description:"something about the property",
        address:"niveditha nagar mysore",
        estimate_cost:"2000",
    },
    {
        id:6,
        type:"Residential",
        property_type:"Villa",
        property_name:"something name",
        location:"mysore",
        sqft:"1500",
        bedroom:"2",
        bathroom:"2",
        attach_bathroom:true,
        furnish:"semi furnished",
        description:"something about the property",
        address:"niveditha nagar mysore",
        estimate_cost:"2000",
    },
]

function displayTopProperties(properties, limit) {
    var container = document.getElementById('property-container');
    container.innerHTML = ''; // Clear any existing content

    properties.slice(0, limit).forEach(function(property) {
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

// Call the function to display the top 5 properties
displayTopProperties(Properties, 6);