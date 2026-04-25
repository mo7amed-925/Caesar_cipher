// ========================
// Navigation
// ========================
function show(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ========================
// Caesar Cipher (JS)
// ========================
function caesar(text, shift) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let c = text[i];

        if (/[a-z]/i.test(c)) {
            let code = text.charCodeAt(i);
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            let newChar = ((code - base + shift) % 26 + 26) % 26 + base;
            result += String.fromCharCode(newChar);
        } else {
            result += c;
        }
    }

    return result;
}

// ========================
// Encrypt
// ========================
function encrypt() {
    let text = document.getElementById("encInput").value;
    document.getElementById("encOutput").innerText = caesar(text, 3);
}

// ========================
// Decrypt
// ========================
function decrypt() {
    let text = document.getElementById("decInput").value;
    document.getElementById("decOutput").innerText = caesar(text, -3);
}

// ========================
// Credentials Data
// ========================
let links = {
    m7md_ali: {
        linkedin: "https://www.linkedin.com/in/mohamed-ali-b08a9a404",
        github: "https://github.com/mo7amed-925"
    },
    amr: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },
    ammar: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },
    youssef: {
        linkedin: "https://www.linkedin.com/in/youssef-tarek-049558380",
        github: "https://github.com"
    },
    m7md_wael: {
        linkedin: "https://www.linkedin.com/in/mohamed-wael-abdel-latif-348521396/",
        github: "https://github.com"
    }
};

// ========================
// Modal (فتح اللينكات)
// ========================
function openModal(name) {
    document.getElementById("modal").classList.remove("hidden");

    document.getElementById("linkedinBtn").onclick = () => {
        window.location.href = links[name].linkedin;
    };

    document.getElementById("githubBtn").onclick = () => {
        window.location.href = links[name].github;
    };
}

// ========================
// Close Modal
// ========================
function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}