function store() {
  var header = document.getElementById("exampleFormControlInput1").value;
  var body = document.getElementById("exampleFormControlTextarea1").value;
  var timestamp = new Date();

  // console.log(header, body, timestamp);
  var post1 = {
    title: header,
    date: timestamp,
    body: body,
  };

  // posts is a local storage attribute (a list of all the posts), post1 is the JSON
  // you need to parse before adding post1 so it creates a list instead of a string
  // need to convert back into a string for local storage
  if (localStorage.getItem("posts") !== null) {
    // console.log(JSON.parse(localStorage.posts));
    let newSetOfPosts = JSON.parse(localStorage.posts);
    newSetOfPosts.push(post1);
    localStorage.setItem("posts", JSON.stringify(newSetOfPosts));
    // localStorage.setItem("posts", JSON.stringify());
    // localStorage.setItem("posts", JSON.stringify(JSON.parse(localStorage.posts).push(post1)));
    // console.log("posts not empty");
  } else {
    var posts = [];
    //because posts is empty, you dont need to parse anything before pushing
    posts.push(post1);
    localStorage.setItem("posts", JSON.stringify([post1]));
    console.log([post1]);
  }
}

function displayPosts() {
  let posts = JSON.parse(localStorage.posts);
  let htmltoadd = "";
  for (let i = 0; i < posts.length; i++) {
    let post1 = posts[i];
    console.log(post1.title);
    htmltoadd +=
      '<div class="card text-left"><div class="card-body"><h5 class="card-title">' +
      post1.title +
      '</h5><p class="card-text">' +
      post1.body +
      '</p></div><div class="card-footer text-muted">' +
      post1.date +
      "</div></div>";
  }
  document.getElementById("stage").innerHTML = htmltoadd;
  return localStorage.getItem("posts");
}
