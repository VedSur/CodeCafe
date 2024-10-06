let blogs = document.getElementById("blogs");
let no_blogs = true;
blogs.textContent = "No blogs at the moment";

function addBlog(name, link) {
    if(no_blogs) {
        no_blogs = false;
        blogs.textContent = "";
    }
    let blog = document.createElement("li");
    let link_element = document.createElement("a");
    link_element.text = name;
    link_element.href = link;
    blog.appendChild(link_element);
    blogs.appendChild(blog);
}

addBlog("Website Making", "./Website_making/index.html")