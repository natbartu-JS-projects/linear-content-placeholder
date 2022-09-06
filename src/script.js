const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1555117391-6c0795768da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="laptop"/>';
  title.innerHTML = "Lorem Ipsum dolor";
  excerpt.innerHTML =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas numquam est cum modi optio nesciunt ut consequuntur, dignissimos harum veritatis! Illum voluptate est dolores eius perferendis quos consequatur. Mollitia, quisquam!";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="portrait" />';
}
