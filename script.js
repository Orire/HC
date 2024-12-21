const categories = {
    "ציפורים": [
        { name: "עורב", link: "https://he.wikipedia.org/wiki/%D7%A2%D7%95%D7%A8%D7%91" },
        { name: "נשר", link: "https://he.wikipedia.org/wiki/%D7%A0%D7%A9%D7%A8" },
        { name: "יונה", link: "https://he.wikipedia.org/wiki/%D7%99%D7%95%D7%A0%D7%94" },
        { name: "אנפה", link: "https://he.wikipedia.org/wiki/%D7%90%D7%A0%D7%A4%D7%94" },
        { name: "ברווז", link: "https://he.wikipedia.org/wiki/%D7%91%D7%A8%D7%95%D7%95%D7%96" },
        { name: "דוכיפת", link: "https://he.wikipedia.org/wiki/%D7%93%D7%95%D7%9B%D7%99%D7%A4%D7%AA" },
        { name: "חוחית", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%97%D7%99%D7%AA" },
        { name: "שחף", link: "https://he.wikipedia.org/wiki/%D7%A9%D7%97%D7%A3" },
        { name: "אנקור", link: "https://he.wikipedia.org/wiki/%D7%90%D7%A0%D7%A7%D7%95%D7%A8" },
        { name: "צופית", link: "https://he.wikipedia.org/wiki/%D7%A6%D7%95%D7%A4%D7%99%D7%AA" }
    ],
    "ים ומטקות": [
        { name: "חוף מציצים", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%A3_%D7%9E%D7%A6%D7%99%D7%A6%D7%99%D7%9D" },
        { name: "חוף גורדון", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%A3_%D7%92%D7%95%D7%A8%D7%93%D7%95%D7%9F" },
        { name: "חוף הילטון", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%A3_%D7%94%D7%99%D7%9C%D7%98%D7%95%D7%9F" },
        { name: "חוף הצוק", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%A3_%D7%94%D7%A6%D7%95%D7%A7" },
        { name: "חוף הנפרד", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%A3_%D7%94%D7%A0%D7%A4%D7%A8%D7%93" },
        { name: "חוף פרישמן", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%A3_%D7%A4%D7%A8%D7%99%D7%A9%D7%9E%D7%9F" },
        { name: "חוף בוגרשוב", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%A3_%D7%91%D7%95%D7%92%D7%A8%D7%A9%D7%95%D7%91" },
        { name: "חוף תל ברוך", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%A3_%D7%AA%D7%9C_%D7%91%D7%A8%D7%95%D7%9A" },
        { name: "חוף הרצליה", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%A3_%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94" },
        { name: "חוף אפולוניה", link: "https://he.wikipedia.org/wiki/%D7%90%D7%A4%D7%95%D7%9C%D7%95%D7%A0%D7%99%D7%94" }
    ],
    
    "קללות": ["שובב", "חוצפן", "משוגע", "טיפש", "בזבזן", "מרושע", "תחמן", "חלש", "חוצפני", "מפגר"],
    "רפואה": [
        { name: "רופא", link: "https://he.wikipedia.org/wiki/%D7%A8%D7%95%D7%A4%D7%90" },
        { name: "אחות", link: "https://he.wikipedia.org/wiki/%D7%90%D7%97%D7%95%D7%AA_(%D7%A8%D7%A4%D7%95%D7%90%D7%94)" },
        { name: "תרופה", link: "https://he.wikipedia.org/wiki/%D7%AA%D7%A8%D7%95%D7%A4%D7%94" },
        { name: "דקירה", link: "https://he.wikipedia.org/wiki/%D7%94%D7%96%D7%A8%D7%A7%D7%94" },
        { name: "בדיקה", link: "https://he.wikipedia.org/wiki/%D7%91%D7%93%D7%99%D7%A7%D7%94_%D7%A8%D7%A4%D7%95%D7%90%D7%99%D7%AA" },
        { name: "כאב ראש", link: "https://he.wikipedia.org/wiki/%D7%9B%D7%90%D7%91_%D7%A8%D7%90%D7%A9" },
        { name: "חום", link: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%9D_(%D7%A8%D7%A4%D7%95%D7%90%D7%94)" },
        { name: "בטן", link: "https://he.wikipedia.org/wiki/%D7%91%D7%98%D7%9F" },
        { name: "יד", link: "https://he.wikipedia.org/wiki/%D7%99%D7%93" },
        { name: "רגל", link: "https://he.wikipedia.org/wiki/%D7%A8%D7%92%D7%9C" }
    ]
 "רפואה ובריאות": ["רופא", "אחות", "תרופה", "דקירה", "בדיקה", "חום"],
    "משפחה וקשרים": ["אבא", "אמא", "בן", "בת", "חבר", "אישה"],
    "כינויים": ["אני", "אתה", "את", "הוא", "היא", "אנחנו", "אתם", "אתן", "הם", "הן"],
    "מילות חיבור": ["ו", "אבל", "כי", "או", "של", "לכן", "עם", "ללא", "כמו"]
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
