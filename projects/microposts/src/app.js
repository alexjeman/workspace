import { http } from "./http";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { ui } from "./ui";

// Het post on DOM load
document.addEventListener('DOMContentLoaded', getPosts)

function getPosts() {
  http.get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}
