"use strict";

function Homepage() {
  return (
    
    <div>
    <p>Hello name.</p>  
    <p><a href="/cards">Go To Cards</a></p>
    <img class="home-img" src="/static/img/balloonicorn.jpg"/>
    </div>
    
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
