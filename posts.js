//get api data 
async function fetchData(){
       let url="https://jsonplaceholder.typicode.com/posts";
       try{
        let reponse=await fetch(url); //url 
        let posts=await reponse.json(); //json
        //console.log(posts);
        let postArea=document.querySelector("#post-area");
        let postUIs="";
        for(let post of posts){
            console.log(`Title : ${post.title}\nContent:${post.body}`)
            let p=getPost(post);
            postUIs+=p;
        }
        postArea.innerHTML=postUIs;
       }catch(err){
       }
    }
    function getPost(post){
        return `<div class="card col-md-3">
      <div class="card-body">
        <h5 class="card-title ">${post.title}</h5>
        <hr />
        <p class="card-text text-secondary">${post.body}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
        <a href="#" class="btn btn-primary">Details</a>
        </li>
      </ul>
    </div>`;
    }
    async function fetchUser(){
        let url="https://jsonplaceholder.typicode.com/users"
           try{
            let reponse=await fetch(url); //url 
            let users=await reponse.json(); //json
            console.log(users);
            let postArea=document.querySelector("#post-area");
            let userUIs="";
            for(let user of users){
               // console.log(`Title : ${user.title}\nContent:${post.body}`)
        //console.log("User",user);      
          let u = getUser(user);
        
                userUIs+=u;
            }
        console.log(userUIs);
            postArea.innerHTML=userUIs;
           }catch(err){
           }
        }
        function getUser(user){
            console.log(user);
            return `<div class="card">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <h6 class="card-subtitle mb-2  text-body-secondary">${user.username}</h6>
              <h6 class="card-subtitle mb-2  text-body-secondary">${user.email}</h6>
              <h6 class="card-subtitle mb-2  text-body-secondary">${user.phone}</h6>
              <h6 class="card-subtitle mb-2  text-body-secondary">${user.website}</h6>
            <h6> ${user.address.street},${user.address.suite},
            ${user.address.city},
            ${user.address.zipcode},
            ${user.address.geo.lat},
            ${user.address.geo.lng},
            </h6>        

            
            <p class="card-text">
          ${user.company.name},
          ${user.company.catchPhrase},
          ${user.company.bs},

            </p>

              <a href="#" class="card-link">Detail link</a>
            </div>
          </div>`
        }
        // "phone": "1-770-736-8031 x56442",
        // "website": "hildegard.org",
        // "company": {
        //   "name": "Romaguera-Crona",
        //   "catchPhrase": "Multi-layered client-server neural-net",
        //   "bs": "harness real-time e-markets"
        // }
    