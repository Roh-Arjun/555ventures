async function fetchProperties(id) {
    try {
        const response = await fetch('assets/js/data.json');
        const properties = await response.json();
        if(id!=undefined){
            console.log("data exists")
            propertySharedDisplay(properties,id)
        }
    } catch (error) {
        console.error('Error fetching properties:', error);
    }
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
// Use the query string parameters
document.addEventListener("DOMContentLoaded", () => {
    const params = getQueryParams();
        console.log(params.id)       
        fetchProperties(params.id)
});

function propertySharedDisplay(properties,id){
    const propertyId = parseInt(id);
    const property = properties.find(p => p.id === propertyId);
    // console.log(property)
    if(property!=undefined){
        console.log("post esxists");
        document.getElementById('warning-shared').style.display = 'none';
        document.getElementById('propertyName').innerHTML=property.property_name;
        document.getElementById('estimateCost').innerHTML=property.estimate_cost;
        document.getElementById('description').innerHTML=property.description;
        document.getElementById('pType').innerHTML=property.type;
        document.getElementById('propertyType').innerHTML=property.property_type;
        document.getElementById('sqft').innerHTML=property.sqft;
        document.getElementById('furnished').innerHTML=property.furnish;
        document.getElementById('bedroom').innerHTML=property.bedroom;
        document.getElementById('bathroom').innerHTML=property.bathroom;
        document.getElementById('address').innerHTML=property.address;
        document.getElementById('location').innerHTML=property.location
        document.getElementById('sharedelement').style.display = 'block';
    }else{
        console.log("post not exists")
        document.getElementById('sharedelement').style.display = 'none';
        document.getElementById('warning-shared').style.display = 'block';
    }
}