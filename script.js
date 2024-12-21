
const categories = {
    "צרכים בסיסיים": ["צריך","צמא","מים", "אוכל", "שתייה", "שירותים", "עזרה", "תרופה","מוזיקה"],
    "רגשות ותחושות": [
        "שמח", "עצוב", "כועס", "עייף", "מפחד", "לחוץ",
        "די!","שקט!","כוס אמק!", "שמחה עזה", "ייאוש", "אכזבה", "התרגשות", "אומץ"
    ],
    "רפואה ובריאות": ["רופא", "אחות", "תרופה", "דקירה","כואב","בדיקה", "חום","גב","רגל","ראש","מרפק","יד"],
    "משפחה וקשרים": ["אבא", "אמא", "בן", "בת", "חבר", "אישה"],
     " ציפורים": 
         ]
"ציפורי ישראל",
"חובתיים",
"חוברה מדברית",
"חובה גדולה",
"חובה קטנה",
"תרנגולאים",
"חוגלת סלעים",
"קורא מדברי",
"פרנקולין שחור",
"שליו נודד",
"צוללנים",
"צוללן אדום-גרון",
"צוללן שחור-גרון",
"צוללן פציפי",
"טבלנים",
"טבלן גמדי",
"טבלן מצויץ",
"טבלן לבן-לחיים",
"טבלן אפור-לחיים",
"טבלן בינוני",
"יסעוראים",
"יסעור גדול",
"יסעור גמדי",
"יסעורון מדירה",
"אלבטרוס לבן-כיפה",
"סערון לבן-חזה",
"סערון צווארון",
"סערון אטלנטי",
"יסעור לבן-מצח",
"יסעור כהה-כנף",
"יסעור שחור-כיפה",
"יסעור כהה",
"יסעור מצוי",
"יסעור אטלנטי",
"יסעור מערבי",
"יסעור קטן",
"יסעור פרסי",
"יסעורון וילסון",
"יסעורון קטן",
"יסעורון פסיפי",
"יסעורון אטלנטי",
"אווזאים",
"אוו קטן",
"ברבור מצוי",
"ברבור קטן",
"יאורית",
"ברווז חד-זנב",
"צולל ביצות",
"מרגון גדול",
"ברנטה לבנת-לחי",
"[
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
