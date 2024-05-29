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
    //  console.log(property)
    if(property!=undefined){
        console.log("post exists");
        
        document.getElementById('warning-shared').style.display = 'none';

        
        document.getElementById('img1').setAttribute('src', `https://drive.google.com/thumbnail?export=view&id=${property.img1}&sz=w1000`);
        document.getElementById('img2').setAttribute('src', `https://drive.google.com/thumbnail?export=view&id=${property.img2}&sz=w1000`);
        document.getElementById('img3').setAttribute('src', `https://drive.google.com/thumbnail?export=view&id=${property.img3}&sz=w1000`);
        // $('#c-img2').remove();

        if(property.property_name!=="NA"){
            document.getElementById('propertyName').innerHTML=property.property_name;
            // document.getElementById('propertyName').style.display = 'block';
            $('#propertyName').show();
        }else{
            // document.getElementById('propertyName').style.display = 'none';
            $('#propertyName').hide();
        }
        
        
        document.getElementById('estimateCost').innerHTML=property.estimate_cost;

        if(property.description!=="NA"){
            document.getElementById('description').innerHTML=property.description;
            $('#description').show();
            // document.getElementById('description').style.display = 'block';
        }else{
            $('#description').hide();
            // document.getElementById('description').style.display = 'none';
        }
        
        if(property.type!=="NA"){
            document.getElementById('pType').innerHTML=property.type;
            // document.getElementById('tr-pType').style.display = 'block';
            $('#tr-pType').show();
        }else{
            $('#tr-pType').hide();
            // document.getElementById('tr-pType').style.display = 'none';
        }

        if(property.property_type!=="NA"){
            document.getElementById('propertyType').innerHTML=property.property_type; 
            // document.getElementById('tr-propertyType').style.display = 'block';
            $('#tr-sqft').show();
        }else{
            $('#propertyName').hide();
            // document.getElementById('tr-propertyType').style.display = 'none';
        }
        
        if(property.sqft!=="NA"){
            document.getElementById('sqft').innerHTML=property.sqft;
            // document.getElementById('tr-sqft').style.display = 'block';
            $('#tr-sqft').show();
        }else{
           // document.getElementById('tr-sqft').style.display = 'none';
           $('#tr-sqft').hide();
        }

        if(property.acres!=="NA"){
            document.getElementById('acres').innerHTML=property.acres;
            $('#tr-acres').show();
        }else{
            $('#tr-acres').hide();
        }

        if(property.kutas!=="NA"){
            document.getElementById('kutas').innerHTML=property.kutas;
            $('#tr-kutas').show();
        }else{
            $('#tr-kutas').hide();
        }

        if(property.dimension!=="NA"){
            document.getElementById('dimension').innerHTML=property.dimension;
            $('#tr-dimension').show();
        }else{
            $('#tr-dimension').hide();
        }

        if(property.facing!=="NA"){
            document.getElementById('facing').innerHTML=property.facing;
            $('#tr-facing').show();
        }else{
            $('#tr-facing').hide();
        }
        
        if(property.furnish!=="NA"){
            document.getElementById('furnished').innerHTML=property.furnish;
            $('#tr-furnished').show();
            // document.getElementById('tr-furnished').style.display = 'block';
        }else{
            $('#tr-furnished').hide();
            // document.getElementById('tr-furnished').style.display = 'none';
        }
        
        if(property.bedroom!=="NA"){
            document.getElementById('bedroom').innerHTML=property.bedroom;
            $('#tr-bedroom').show();
            // document.getElementById('tr-bedroom').style.display = 'block';
        }else{
            $('#tr-bedroom').hide();
            // document.getElementById('tr-bedroom').style.display = 'none';
        }
        
        if(property.bathroom!=="NA"){
            document.getElementById('bathroom').innerHTML=property.bathroom;
            $('#tr-bathroom').show();
            // document.getElementById('tr-bathroom').style.display = 'block';
        }else{
            $('#tr-bathroom').hide();
            // document.getElementById('tr-bathroom').style.display = 'none';
        }
        
        if(property.address!=="NA"){
            document.getElementById('address').innerHTML=property.address;
            $('#tr-address').show();
            // document.getElementById('tr-address').style.display = 'block';
        }else{
            $('#tr-address').hide();
            // document.getElementById('tr-address').style.display = 'none';
        }

        if(property.location){
            document.getElementById('location').innerHTML=property.location
            $('#tr-location').show();
            // document.getElementById('tr-location').style.display = 'block';
        }else{
            $('#tr-location').hide();
            // document.getElementById('tr-location').style.display = 'none';
        }
        
        if(property.googlemap!=="NA"){
            document.getElementById('googlemap').setAttribute('href', property.googlemap);
            // document.getElementById('googlemap').style.display = 'block';
            $('#googlemap').show();
        }else{
            // document.getElementById('googlemap').style.display = 'none'; 
            $('#googlemap').hide();
        }

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

