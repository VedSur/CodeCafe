let article, ToC, links;
let no_sections = 0;
export const defineArticle = (id) => {article = document.getElementById(id)};
export const defineToC = (id) => {ToC = document.getElementById(id)};
export const defineLinks = (id) => {links = document.getElementById(id)};
let current_section;

export function writeText(...text) {
    let p = document.createElement("p");
    p.className = "content";
    p.textContent = text.join(' ');
    current_section.appendChild(p);
}

export function writeCode(src_code) {
    let code = document.createElement("code");
    code.textContent = src_code;
    let pre = document.createElement("pre");
    pre.appendChild(code)
    current_section.appendChild(pre);
}

export function startSection(heading) {
    no_sections++;
    let section = document.createElement("div");
    section.className = "container";
    section.id = `section${no_sections}`;
    let h2 = document.createElement("h2");
    h2.textContent = `${no_sections}. ${heading}`;
    section.appendChild(h2);
    current_section = section;
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = `#section${no_sections}`;
    a.textContent = heading;
    li.appendChild(a);
    ToC.appendChild(li);
}

export function endSection() {
    article.appendChild(current_section);
}

export function addLink(text, link) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = link;
    a.textContent = text;
    li.appendChild(a);
    links.appendChild(li);
}