// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
 .then( data => {
   console.log( 'success!', data.data.articles); 
   const objectDataArt = data.data.articles;
   const bootStrap = data.data.articles.bootstrap;
   const javaScript = data.data.articles.javascript;
   const technology = data.data.articles.technology;
   const jquery = data.data.articles.jquery;
   const nodeJs = data.data.articles.node;
   //arrayTopics = ['bootStrap', 'javaScript', 'technology', 'jquery', 'nodeJs'];
   bootStrap.forEach(element => {
    articlesCard(element);
   });
   javaScript.forEach(elementj => {
    articlesCard(elementj);
   });
   technology.forEach(elementT => {
    articlesCard(elementT);
   });
   jquery.forEach(elementJ => {
    articlesCard(elementJ);
   });
   nodeJs.forEach(elementN => {
    articlesCard(elementN);
   });
   

   })
 .catch( error =>{
   console.log('error:', error);
 });



 const cardsContainer = document.querySelector('.cards-container')
 
 
 
 function articlesCard(argument){

    const theCardArticle = document.createElement('div');
    theCardArticle.classList.add('card');

    const theHeadLine = document.createElement('div');
    theHeadLine.classList.add('headline');

    const theAuthor = document.createElement('div');
    theAuthor.classList.add('author');

    const theImage = document.createElement('div');
    theImage.classList.add('img-container'); 

    const theImg = document.createElement("img");

    const theSpan = document.createElement("span");

    //appended elements
    cardsContainer.appendChild(theCardArticle);
    theCardArticle.appendChild(theHeadLine);
    theCardArticle.appendChild(theAuthor);
    theAuthor.appendChild(theImage);
    theImage.appendChild(theImg);
    theAuthor.appendChild(theSpan);

    //set content
    
    theHeadLine.textContent = argument.headline;
    theImg.src = argument.authorPhoto;
    theSpan.textContent = `By ${argument.authorName}`

 return theCardArticle;
 }
