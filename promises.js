const posts = [
    {title:'post1',body:'this is post1',lastUserActivity:new Date().getTime()},
    {title:'post2',body:'this is post2',lastUserActivity:new Date().getTime()}];
function getPosts(){
    setTimeout(()=>{
        
        let output='';
        posts.forEach((post,index)=>{
            output+= `<li>${post.title} lastUpdatedUserActivity  ${(new Date().getTime()-post.lastUserActivity)/1000}</li>`;
        });
        document.body.innerHTML=output;
    },100)
}
getPosts();

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        
            posts.push({...post,lastUserActivity:new Date().getTime()});
            const error=false;
            if(!error){
                resolve();
            }else{
                reject("error");
            }
            
        }, 2000);

    })
    

}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Empty');
            }
        },1000)
    })
}
createPost({title:'post3',body:'this is post3'}).then(getPosts).catch(err=>console.log(err));
deletePost();
deletePost();
deletePost();


createPost({title:'post4',body:'this is post4'}).then(getPosts).catch(err=>console.log(err));


deletePost();
function lastUserActivity(){ 
    return new Promise((resolve,reject)=>{
        post.lastUserActivity=new Date().getTime();
        resolve(post.lastUserActivity);
        console.log('useract')


})
}

Promise.all([createPost,lastUserActivity]).then(console.log(posts));




