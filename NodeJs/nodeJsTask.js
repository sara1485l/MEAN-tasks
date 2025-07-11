let users=[
    {id:1,name:"Ali",email:"ali@gmail.com"},
    {id:2,name:"Ahmed",email:"ahmed@gmail.com"},
    {id:3,name:"Esraa",email:"esraa@gmail.com"}
];
let posts = [
    { id: 1, userId: 1, title: "Hello World", content: "This is my first post!" },
    { id: 2, userId: 2, title: "Post by Ahmed", content: "Hey, I'm Ahmed!" }
];
const server =http.createServer((red,res)=>{
    res.setHeader("content","Application/json")
    if (req.url === "/users" && req.method === "POST") {
  req.on("data", chunk => {
    let addedUser = JSON.parse(chunk);
    let exist = users.find(user => user.id === addedUser.id);

    if (exist) {
      res.end("already registered, please login");
    } else {
       users.push(addedUser);
      res.end("added successfully");
    }
  });
}
else if (req.url === "/posts" && req.method === "POST") {
  req.on("data", chunk => {
    let newPost = JSON.parse(chunk);
    posts.push(newPost);
    res.end("post added successfully");
  });
}
else if (req.url === "/users" && req.method === "GET") {
  res.end(JSON.stringify(users));
}
else if (req.url === "/posts" && req.method === "GET") {
  res.end(JSON.stringify(posts));
}
else if (req.url === "/users" && req.method === "DELETE") {
  req.on("data", chunk => {
    let { id } = JSON.parse(chunk);
    users = users.filter(user => user.id !== id);
    res.end("user deleted successfully");
  });
}
else if (req.url === "/posts" && req.method === "DELETE") {
  req.on("data", chunk => {
    let { id } = JSON.parse(chunk);
    posts = posts.filter(post => post.id !== id);
    res.end("post deleted successfully");
  });
}
else if (req.url === "/users" && req.method === "PUT") {
  req.on("data", chunk => {
    let updatedUser = JSON.parse(chunk);
    let index = users.findIndex(user => user.id === updatedUser.id);

    if (index !== -1) {
      users[index] = updatedUser;
      res.end("user updated successfully");
    } else {
      res.end("user not found");
    }
  });
}
else if (req.url === "/posts" && req.method === "PUT") {
  req.on("data", chunk => {
    let updatedPost = JSON.parse(chunk);
    let index = posts.findIndex(post => post.id === updatedPost.id);

    if (index !== -1) {
      posts[index] = updatedPost;
      res.end("post updated successfully");
    } else {
      res.end("post not found");
    }
  });
}

})