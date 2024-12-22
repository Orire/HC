const categories = {
    
     
    "קללות": ["שובב", "חוצפן", "משוגע", "טיפש", "בזבזן", "מרושע", "תחמן", "חלש", "חוצפני", "מפגר"],
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
