// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topic = document.querySelector('.topics');

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then( data => {
  console.log( 'success!', data.data.topics);
  const objectData = data.data.topics;
  objectData.forEach(menu => {
  tab(menu);

    })
  })
.catch( error =>{
  console.log('error:', error);
});



function tab (objectData){
const theTab =document.createElement('div')
theTab.classList.add('tab');

topic.appendChild(theTab)

theTab.textContent = objectData;

return theTab
}