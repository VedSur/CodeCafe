let blogs = document.getElementById("blogs");
let no_blogs = true;
let blogs_path = "./blogs"
blogs.textContent = "No blogs at the moment";

function addBlog(name, relative_path, relative=true) {
    if(no_blogs) {
        no_blogs = false;
        blogs.textContent = "";
    }
    let path = relative ? `${blogs_path}/${relative_path}` : relative_path;
    let blog = document.createElement("li");
    let link_element = document.createElement("a");
    link_element.text = name;
    link_element.href = path;
    blog.appendChild(link_element);
    blogs.appendChild(blog);
}

addBlog("Making a Website", "making_a_website");