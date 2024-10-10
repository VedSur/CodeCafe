let blogs = document.getElementById("blogs");
let no_blogs = true;
let blogs_path = "./blogs"
blogs.textContent = "No blogs at the moment";

function addBlog(name, path, relative=true) {
    if(no_blogs) {
        no_blogs = false;
        blogs.textContent = "";
    }
    let abs_path = relative ? `${blogs_path}/${path}` : path;
    let blog = document.createElement("li");
    let link_element = document.createElement("a");
    link_element.text = name;
    link_element.href = abs_path;
    blog.appendChild(link_element);
    blogs.appendChild(blog);
}

addBlog("How to make a repl", "making_a_repl");