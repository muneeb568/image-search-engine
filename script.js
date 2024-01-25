const accesskey="WS1dBslhHa_w17DRRZ_KqZX3m4m5sZbJ4xjZn303dNc";


const searchform=document.getElementById("search-form")
const searchbox=document.getElementById("search-box")
const searchresult=document.getElementById("search-result")
const showmorebtn=document.getElementById("show-more-btn")

let keyword="";
let page=1;

async function searchImages() {
     keyword=searchbox.value;
     const url=`https://api.unsplash.com/search/photos?page=1&query=${page}&query=${keyword}&client_id=${accesskey}&per_page=30`;
     const response=await fetch(url);
     const data=await response.json();
     const results=data.results;
     
     results.map((result)=>{
         const image=document.createElement("img");
         image.src=result.urls.small;
         const imageLink=document.createElement("a");
         imageLink.href=result.links.html;
         imageLink.target="_blank";
         
         imageLink.appendChild(image);
         searchresult.appendChild(imageLink);       
     })
     
};
searchform.addEventListener('submit',(e) =>{
          e.preventDefault();
          page=1;
          searchImages();        
})