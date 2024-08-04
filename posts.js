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