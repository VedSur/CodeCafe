let article = document.getElementById("article");
let current_section;

export function writeText(text) {
    let p = document.createElement("p");
    p.className = "content";
    p.textContent = text;
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
    let section = document.createElement("div");
    section.className = "container";
    let h2 = document.createElement("h2");
    h2.textContent = heading;
    section.appendChild(h2);
    current_section = section;
}

export function endSection() {
    article.appendChild(current_section);
}