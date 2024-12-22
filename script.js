
const categories =
{
    "צרכים בסיסיים": ["מים", "אוכל", "שתייה", "שירותים", "עזרה", "תרופה"],
    "רגשות ותחושות": [
        "שמח", "עצוב", "כועס", "עייף", "מפחד", "לחוץ",
        "כעס עמוק", "שמחה עזה", "ייאוש", "אכזבה", "התרגשות", "אומץ"
    ],
    "רפואה ובריאות": ["רופא", "אחות", "תרופה", "דקירה", "בדיקה", "חום"],
    "משפחה וקשרים": ["אבא", "אמא", "בן", "בת", "חבר", "אישה"],
    "כינויים": ["אני", "אתה", "את", "הוא", "היא", "אנחנו", "אתם", "אתן", "הם", "הן"],
    "מילות חיבור": ["ו", "אבל", "כי", "או", "של", "לכן", "עם", "ללא", "כמו"],
    "שמות של ציפורים": ["יונה", "עורב", "דרור", "שליו", "אנפה", "חסידה", "שחף", "דוכיפת", "ינשוף", "צופית"],
    "שמות של שחקני NBA": ["סטף קרי", "לברון ג'יימס", "קווין דוראנט", "יאניס אנטטוקומפו", "לוקה דונצ'יץ'", "דמיאן לילארד", "קוואי לנארד", "ג'ייסון טייטום", "ג'ימי באטלר", "ניקולה יוקיץ'"],
    "ים": ["גל", "חול", "מלח", "דג", "אלמוג", "מדוזה", "עוגן", "סירה", "צדפה", "צוללת"],
    
        "חופים בתל אביב": ["חוף גורדון", "חוף פרישמן", "חוף ירושלים", "חוף בוגרשוב", "חוף הילטון"],
        "חופים בהרצליה": ["חוף אכדיה", "חוף השרון", "חוף זבולון", "חוף דבוש"]
    
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

    categories[category].forEach(word => {
        const btn = document.createElement('button');
        btn.classList.add('flashcard');
        btn.textContent = word;
        btn.onclick = () => addWord(word);
        wordsDiv.appendChild(btn);
    });
}

function addWord(word) {
    selectedWords.push(word);
    updateSentence();
}

function updateSentence() {
    const sentenceDiv = document.getElementById('sentence');
    sentenceDiv.textContent = selectedWords.join(' ');
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

// Initialize the interface
showCategories();
