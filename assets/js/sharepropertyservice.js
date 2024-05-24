const localhosturl="http://127.0.0.1:5500";
const githuburl="https://roh-arjun.github.io";
const productionurl="https://555ventures.in";


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
        console.log("post exists");
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
        path=url+`/555ventures/shareproperty.html?id=${encodeURIComponent(id)}`
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

 function whatsappmessage(){
    let id= sessionStorage.getItem('shareid');
    const url=window.location.protocol+"//"+window.location.host
    let path;
    if(url===localhosturl){
        console.log("localhost")
        path=url+`/shareproperty.html?id=${encodeURIComponent(id)}`
    }else if(url===githuburl){
        console.log("github account")
        path=url+`/555ventures/shareproperty.html?id=${encodeURIComponent(id)}`
    }else if(url===productionurl){
        console.log("555venture.in")
        path=url+`/shareproperty.html?id=${encodeURIComponent(id)}`
    }
   // const url=window.location.protocol+"//"+window.location.host+`/shareproperty.html?id=${encodeURIComponent(id)}`
    const text="https://wa.me/+919959579555?text=I'm%20interested%20in%20your%20property%20sale%20"+path
    location.href=text;
}

function whtsaperror(){
    let id= sessionStorage.getItem('shareid');
    const url=window.location.protocol+"//"+window.location.host
    let path;
    if(url===localhosturl){
        console.log("localhost")
        path=url+`/shareproperty.html?id=${encodeURIComponent(id)}`
    }else if(url===githuburl){
        console.log("github account")
        path=url+`/555ventures/shareproperty.html?id=${encodeURIComponent(id)}`
    }else if(url===productionurl){
        console.log("555venture.in")
        path=url+`/shareproperty.html?id=${encodeURIComponent(id)}`
    }
   // const url=window.location.protocol+"//"+window.location.host+`/shareproperty.html?id=${encodeURIComponent(id)}`
    const text="https://wa.me/+919959579555?text=I'm%20unable%20to%20view%20your%20for%20property%20"+path
    location.href=text;
}