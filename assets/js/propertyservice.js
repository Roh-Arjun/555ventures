const localhosturl="http://127.0.0.1:5500";
const githuburl="https://roh-arjun.github.io";
const productionurl="https://555ventures.in";


async function fetchProperties(property_type,location) {
    try {
        const response = await fetch('assets/js/data.json');
        const properties = await response.json();
        // displayAllProperties(properties);
        if(property_type===undefined || location===undefined){
            displayAllProperties(properties)
            displayAllSellProperty(properties)
            displayAllRentProperty(properties)
        }else{
            displaySearchProperty(properties,property_type,location);
            displaySellProperty(properties,property_type,location);
            displayRentProperty(properties,property_type,location);
        }
    } catch (error) {
        console.error('Error fetching properties:', error);
    }
}




//all properties to display
function displayAllProperties(properties) {
    var container = document.getElementById('property-all-container');
    container.innerHTML = ''; // Clear any existing content
    document.getElementById("listedcount").innerHTML=properties.length
    properties.forEach(function(property) {
        var propertyHTML = `
            <div class="col-lg-4 col-md-6 fadeInUp">
                <div class="property-item rounded overflow-hidden">
                    <div class="position-relative overflow-hidden">
                        <a><img class="img-fluid" src="assets/img/property-1.jpg" alt=""></a>
                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
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
//display all sell property
function displayAllSellProperty(properties){
    let containersell = document.getElementById('property-container-sell');
    containersell.innerHTML = ''; // Clear any existing content
    const filteredPropertiesell = properties.filter(property => property.Availability === "Sell");
    console.log(properties.length)
    console.log("total sell property",filteredPropertiesell.length)
    
    filteredPropertiesell.forEach(function(property) {
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

//display all rent property
function displayAllRentProperty(properties){
    let containerent = document.getElementById('property-container-rent');
    containerent.innerHTML = ''; // Clear any existing content
    const filteredProperties = properties.filter(property => property.Availability === "Rent");
    console.log("Total rent property",filteredProperties.length)
    filteredProperties.forEach(function(property) {
        let propertyHTML = `
            <div class="col-lg-4 col-md-6 fadeInUp">
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

// Function to get query string parameters
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queries = queryString.split("&");
    queries.forEach(query => {
        const [key, value] = query.split("=");
        params[key] = decodeURIComponent(value);
    });
    return params;
}
function setFormValues(params) {
    if (params.keyword) {
        document.getElementById('searchKeyword').value = params.keyword;
    }
    if (params.propertyType) {
        document.getElementById('propertyType').value = params.propertyType;
    }
    if (params.location) {
        document.getElementById('location').value = params.location;
    }
}

// Use the query string parameters
document.addEventListener("DOMContentLoaded", () => {
    const params = getQueryParams();
        setFormValues(params)
        let property_type=params.propertyType;
        let location= params.location;
        fetchProperties(property_type,location)
});

function displaySearchProperty(properties,property_type,location){
    let containerent = document.getElementById('property-all-container');
    containerent.innerHTML = ''; // Clear any existing content
    const filteredProperties = properties.filter(property => property.type===property_type && property.location===location);
    console.log("search : ",filteredProperties.length)
    document.getElementById("listedcount").innerHTML=filteredProperties.length
    if(filteredProperties.length!=0){
        document.getElementById('warning-search').style.display = 'none';
        document.getElementById('warning-sell').style.display = 'none';
    filteredProperties.forEach(function(property) {
        let propertyHTML = `
            <div class="col-lg-4 col-md-6 fadeInUp">
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
        containerent.innerHTML += propertyHTML;
    });
}else{
    document.getElementById('warning-search').style.display = 'block';
    document.getElementById('warning-sell').style.display = 'block';
}
}

document.getElementById('searchButton').addEventListener('click', function() {
    const searchKeyword = document.getElementById('searchKeyword').value;
    const property_type = document.getElementById('propertyType').value;
    const location = document.getElementById('location').value;

    // Check if Property Type and Location are selected
    if (propertyType === "Property Type" || location === "Location") {
        // Display warning message
        document.getElementById('warning').style.display = 'block';
    } else {
        // Hide warning message
        document.getElementById('warning').style.display = 'none';
        document.getElementById("featured-tab").click();
        fetchProperties(property_type,location)
       
    }
});

function displaySellProperty(properties,property_type,location){
    let containersell = document.getElementById('property-container-sell');
    containersell.innerHTML = ''; // Clear any existing content
    const filteredPropertiesell = properties.filter(property =>property.type===property_type && property.location===location && property.Availability === "Sell");

    console.log("sell : ",filteredPropertiesell.length)
    if(filteredPropertiesell.length!=0){
        document.getElementById('warning-sell').style.display = 'none';
        filteredPropertiesell.forEach(function(property) {
            let propertyHTML = `
                <div class="col-lg-4 col-md-6 fadeInUp">
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
}else{
    document.getElementById('warning-sell').style.display = 'block';
}
}

function displayRentProperty(properties,property_type,location){
    let containerent = document.getElementById('property-container-rent');
    containerent.innerHTML = ''; // Clear any existing content
    const filteredPropertiesrent = properties.filter(property =>property.type===property_type && property.location===location && property.Availability === "Rent");

    console.log("rent : ",filteredPropertiesrent.length)
    if(filteredPropertiesrent.length!=0){
        document.getElementById('warning-rent').style.display = 'none';
        filteredPropertiesrent.forEach(function(property) {
            let propertyHTML = `    
                <div class="col-lg-4 col-md-6 fadeInUp">
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
            containerent.innerHTML += propertyHTML;
        });
    }else{
        document.getElementById('warning-rent').style.display = 'block';
    }
}

function handleClick(id){
    console.log(id)
    sessionStorage.setItem('shareid', id);
}

document.getElementById('shareBtn').addEventListener('click', event => {
    let id= sessionStorage.getItem('shareid');
    console.log("from share module", id)
     // Check for Web Share api support
    const url=window.location.protocol+"//"+window.location.host
    let path;
    if(url===localhosturl){
        console.log("localhost")
        path=url+`/shareproperty.html?id=${encodeURIComponent(id)}`
    }else if(url===githuburl){
        console.log("github account")
        path=url+`555ventures/shareproperty.html?id=${encodeURIComponent(id)}`
    }else if(url===productionurl){
        console.log("555venture.in")
        path=url+`/shareproperty.html?id=${encodeURIComponent(id)}`
    }
     if (navigator.share) {
       // Browser supports native share api
       navigator.share({
         text: 'Please check this property: ',
         url: path
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