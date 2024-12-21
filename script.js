const categories = {
    "צפיפורים": [
        { name: "עורב", link: "https://he.wikipedia.org/wiki/%D7%A2%D7%95%D7%A8%D7%91" },
        { name: "נשר", link: "https://he.wikipedia.org/wiki/%D7%A0%D7%A9%D7%A8" },
        { name: "יונה", link: "https://he.wikipedia.org/wiki/%D7%99%D7%95%D7%A0%D7%94" }
    ],
    "ים ומטקות": [
        { name: "חוף מציצים", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%A3_%D7%9E%D7%A6%D7%99%D7%A6%D7%99%D7%9D" },
        { name: "חוף גורדון", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%A3_%D7%92%D7%95%D7%A8%D7%93%D7%95%D7%9F" }
    ],
    "כדורסל NBA": {
        "Golden State Warriors": {
            logo: "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg",
            players: [
                { name: "Steph Curry", link: "https://he.wikipedia.org/wiki/%D7%A1%D7%98%D7%A3_%D7%A7%D7%90%D7%A8%D7%99" }
            ]
        }
    },
    "קללות": ["\u05e9\u05d5\u05d1\u05d1", "\u05d7\u05d5\u05e6\u05e4\u05df", "\u05de\u05e9\u05d5\u05d2\u05e2"]
};

let selectedWords = [];

function showCategories() {
    const categoriesDiv = document.getElementById('categories');
    const wordsDiv = document.getElementById('words');
    wordsDiv.classList.add('hidden');
    categoriesDiv.classList.remove('hidden');
    categoriesDiv.innerHTML = '';

    for (const category in categories) {
        const btn = document.createElement('button');
        btn.classList.add('flashcard');
        btn.textContent = category;
        btn.onclick = () => showWords(category);
        categoriesDiv.appendChild(btn);
    }
}

function showWords(category) {
    const wordsDiv = document.getElementById('words');
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.classList.add('hidden');
    wordsDiv.classList.remove('hidden');
    wordsDiv.innerHTML = '';

    const backBtn = document.createElement('button');
    backBtn.textContent = "חזרה לקטגוריות";
    backBtn.classList.add('flashcard', 'back-button');
    backBtn.onclick = showCategories;
    wordsDiv.appendChild(backBtn);

    const items = categories[category];

    if (Array.isArray(items)) {
        items.forEach(word => {
            const btn = document.createElement('button');
            btn.classList.add('flashcard');
            btn.textContent = word.name || word;
            btn.onclick = () => addWord(word);
            wordsDiv.appendChild(btn);
        });
    }
}

function addWord(word) {
    const sentenceDiv = document.getElementById('sentence');
    const span = document.createElement('span');
    span.textContent = word.name || word;
    if (word.link) {
        const a = document.createElement('a');
        a.href = word.link;
        a.textContent = word.name;
        a.target = "_blank";
        span.appendChild(a);
    }
    sentenceDiv.appendChild(span);
    selectedWords.push(word.name || word);
}

document.getElementById('delete-last').onclick = () => {
    selectedWords.pop();
    updateSentence();
};

document.getElementById('clear-all').onclick = () => {
    selectedWords = [];
    updateSentence();
};

document.getElementById('done').onclick = () => {
    alert(`המשפט שנוצר: ${selectedWords.join(' ')}`);
};

function updateSentence() {
    const sentenceDiv = document.getElementById('sentence');
    sentenceDiv.textContent = selectedWords.join(' ');
}

showCategories();
