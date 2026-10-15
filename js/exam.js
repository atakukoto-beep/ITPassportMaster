// ========================================
// ボタン音
// ========================================

let audioContext = null;

function getAudioContext() {

    if (!audioContext) {
        audioContext =
            new (window.AudioContext || window.webkitAudioContext)();
    }

    return audioContext;
}


// ========================================
// 選択肢を押したときの音
// ========================================

function playClickSound() {

    // 効果音がOFFなら何もしない
    if (typeof isSoundEnabled === "function" &&
        !isSoundEnabled()) {
        return;
    }

    const ctx = getAudioContext();

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = 600;
    gainNode.gain.value = 0.08;

    oscillator.start();

    setTimeout(() => {
        oscillator.stop();
    }, 80);
}

// ========================================
// 次へボタンの音
// ========================================

function playNextSound() {

    // 効果音がOFFなら何もしない
    if (typeof isSoundEnabled === "function" &&
        !isSoundEnabled()) {
        return;
    }

    const ctx = getAudioContext();

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = 800;
    gainNode.gain.value = 0.08;

    oscillator.start();

    setTimeout(() => {
        oscillator.frequency.value = 1000;
    }, 60);

    setTimeout(() => {
        oscillator.stop();
    }, 120);
}

// ========================================
// 試験開始時のファンファーレ
// ========================================

function playStartFanfare() {

    // 効果音がOFFなら何もしない
    if (typeof isSoundEnabled === "function" &&
        !isSoundEnabled()) {
        return;
    }

    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const notes = [
        { frequency: 523.25, start: 0.00, duration: 0.18 },
        { frequency: 659.25, start: 0.12, duration: 0.18 },
        { frequency: 783.99, start: 0.24, duration: 0.22 },
        { frequency: 1046.50, start: 0.38, duration: 0.45 }
    ];

    notes.forEach(note => {

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = "triangle";

        oscillator.frequency.setValueAtTime(
            note.frequency,
            now + note.start
        );

        gainNode.gain.setValueAtTime(
            0,
            now + note.start
        );

        gainNode.gain.linearRampToValueAtTime(
            0.08,
            now + note.start + 0.02
        );

        gainNode.gain.linearRampToValueAtTime(
            0,
            now + note.start + note.duration
        );

        oscillator.start(now + note.start);

        oscillator.stop(
            now + note.start + note.duration
        );
    });
}

// =====================================
// ITパスポートマスター
// exam.js Ver0.3
// 試験エンジン
// =====================================

let examQuestions = [];
let currentQuestion = 0;
let answers = [];

// ========================================
// ユーザー別の試験回数
// ========================================

let examCount = getExamCount();


// ========================================
// 出題履歴
// ========================================

let questionHistory = getQuestionHistory();

function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function createExam() {

// ユーザー別に試験回数を1回増やす
examCount = incrementExamCount();

// 最新の問題履歴を読み込む
questionHistory = getQuestionHistory();

    // ========================================
    // 各分野の問題を取得
    // ========================================

const questionCount = getQuestionCount();

let categories;

if (questionCount === 20) {

    categories = [
        {
            name: "ストラテジ系",
            questions: strategyQuestions,
            count: 7
        },
        {
            name: "マネジメント系",
            questions: managementQuestions,
            count: 7
        },
        {
            name: "テクノロジ系",
            questions: technologyQuestions,
            count: 6
        }
    ];

} else if (questionCount === 50) {

    categories = [
        {
            name: "ストラテジ系",
            questions: strategyQuestions,
            count: 18
        },
        {
            name: "マネジメント系",
            questions: managementQuestions,
            count: 17
        },
        {
            name: "テクノロジ系",
            questions: technologyQuestions,
            count: 15
        }
    ];

} else if (questionCount === 100) {

    categories = [
        {
            name: "ストラテジ系",
            questions: strategyQuestions,
            count: 35
        },
        {
            name: "マネジメント系",
            questions: managementQuestions,
            count: 35
        },
        {
            name: "テクノロジ系",
            questions: technologyQuestions,
            count: 30
        }
    ];
}

    let selectedQuestions = [];

// ========================================
// 分野ごとに問題を選ぶ
// ========================================

categories.forEach(category => {

    // ----------------------------------------
    // 出題優先度を設定
    //
    // 優先度 1：間違えた問題
    // 優先度 2：まだ履歴がない問題
    // 優先度 3：1回正解したが、まだ10回以内の問題
    // 優先度 4：それ以外
    //
    // 2回連続正解した問題は基本的に除外
    // ----------------------------------------

const priority1 = [];
const priority2 = [];
const priority3 = [];
const priority4 = [];
const protectedQuestions = [];
const mastered = [];

category.questions.forEach(question => {

    const history = questionHistory[question.id];

    // ========================================
    // ① まだ一度も回答していない
    // → 優先して出題
    // ========================================

    if (!history) {
        priority2.push(question);
        return;
    }

    // ========================================
    // ② 2回連続正解
    // → 基本的に出題対象から除外
    // ========================================

    if (history.consecutiveCorrect >= 2) {
        mastered.push(question);
        return;
    }

    // ========================================
    // ③ 前回の試験で不正解
    // → 次回は最優先
    // ========================================

    if (history.lastResult === "wrong") {
        priority1.push(question);
        return;
    }

    // ========================================
    // ④ 間違えた経験があり、その後正解
    // → 次の5試験以内に再出題
    // ========================================

    if (
        history.wrongCount > 0 &&
        history.consecutiveCorrect === 1 &&
        examCount - history.lastCorrectExam <= 5
    ) {
        priority3.push(question);
        return;
    }

    // ========================================
    // ⑤ 初回正解
    // → 次の10試験は出題しない
    // ========================================

if (
    history.correctCount === 1 &&
    history.wrongCount === 0 &&
    examCount - history.lastCorrectExam <= 10
) {
    protectedQuestions.push(question);
    return;
}

    // ========================================
    // ⑥ その他
    // ========================================

    priority4.push(question);
});

    // 各グループをシャッフル
    const shuffled1 = shuffle(priority1);
    const shuffled2 = shuffle(priority2);
    const shuffled3 = shuffle(priority3);
    const shuffled4 = shuffle(priority4);
    const shuffledMastered = shuffle(mastered);

    // ----------------------------------------
    // 優先順位の高い順に候補を作る
    // ----------------------------------------

    let candidates = [
        ...shuffled1,
        ...shuffled2,
        ...shuffled3,
        ...shuffled4
    ];

    // ----------------------------------------
    // 2回連続正解した問題を除外すると
    // 必要な問題数が足りない場合は補充
    // ----------------------------------------

    if (candidates.length < category.count) {

        const remaining =
            category.count - candidates.length;

        candidates = [
            ...candidates,
            ...shuffledMastered.slice(0, remaining)
        ];
    }

    // ----------------------------------------
    // 必要な問題数だけ取得
    // ----------------------------------------

    const selected =
        candidates.slice(0, category.count);

    // ----------------------------------------
    // 選んだ問題を追加
    // ----------------------------------------

selectedQuestions.push(...selected);

console.log(
    category.name + "：" + selected.length + "問"
);
});

    // ========================================
    // 試験問題をシャッフル
    // ========================================

    examQuestions = shuffle(selectedQuestions);

    console.log(
        "試験問題数：" + examQuestions.length + "問"
    );

    // ========================================
    // 初期化
    // ========================================

    currentQuestion = 0;

    answers = [];

    // ========================================
    // 最初の問題を表示
    // ========================================

    showQuestion();
}

function showQuestion() {

    const question = examQuestions[currentQuestion];

    if (!question) {
        finishExam();
        return;
    }

    document.getElementById("questionNumber").textContent =
        `問題 ${currentQuestion + 1} / ${examQuestions.length}`;

    document.getElementById("questionText").textContent =
        question.question;

    const choices = document.querySelectorAll(".choiceBtn");

    // ========================================
    // 選択肢をシャッフル
    // ========================================

    const shuffledChoices = question.choices.map((text, index) => {
        return {
            text: text,
            originalIndex: index
        };
    });

    const shuffled = shuffle(shuffledChoices);

    // ========================================
    // 正解の表示位置を記録
    // ========================================

    question.displayAnswer =
        shuffled.findIndex(choice =>
            choice.originalIndex === question.answer
        );

    // ========================================
    // 選択肢を表示
    // ========================================

    choices.forEach((button, index) => {

        button.textContent = shuffled[index].text;

        button.classList.remove("selected");

        button.onclick = () => {

            playClickSound();

            answers[currentQuestion] = {
                displayIndex: index,
                text: shuffled[index].text
            };

            choices.forEach(btn =>
                btn.classList.remove("selected")
            );

            button.classList.add("selected");
        };
    });
}

function nextQuestion() {

    if (answers[currentQuestion] === undefined) {
        console.log("回答を選択してください。");
        return;
    }


    // ==============================
    // 問題の正誤を記録
    // ==============================

    const question = examQuestions[currentQuestion];

    const selectedAnswer = answers[currentQuestion];

    const isCorrect =
    selectedAnswer &&
    selectedAnswer.displayIndex === question.displayAnswer;

    if (typeof recordQuestionResult === "function") {
        recordQuestionResult(question, isCorrect);
    }

    console.log(
        "問題ID：" + question.id,
        "回答：" + selectedAnswer,
        "正解：" + question.answer,
        "結果：" + (isCorrect ? "正解" : "不正解")
    );

    // 次の問題へ
    currentQuestion++;

    if (currentQuestion >= examQuestions.length) {
        finishExam();
        return;
    }

     showQuestion();
} 

// ========================================
// 試験終了処理
// ========================================

function finishExam() {

    let score = 0;

    const categoryStats = {
        "ストラテジ系": {
            correct: 0,
            total: 0
        },
        "マネジメント系": {
            correct: 0,
            total: 0
        },
        "テクノロジ系": {
            correct: 0,
            total: 0
        }
    };

    const wrongQuestions = [];

    // ========================================
    // 試験結果を集計
    // ========================================

    examQuestions.forEach((question, index) => {

        const selectedAnswer =
            answers[index];

        const isCorrect =
            selectedAnswer &&
            selectedAnswer.displayIndex ===
            question.displayAnswer;

        // 正解数
        if (isCorrect) {

            score++;

        } else {

            // 間違えた問題を保存
            wrongQuestions.push({
                question: question,
                userAnswer: selectedAnswer
            });
        }

        // ========================================
        // 分野を取得
        // ========================================

        let category =
            question.category ||
            question.field ||
            question.type ||
            "";

        // ========================================
        // 分野名を日本語表示名に変換
        // ========================================

        const categoryMap = {

            "strategy": "ストラテジ系",
            "management": "マネジメント系",
            "technology": "テクノロジ系",

            "ストラテジ": "ストラテジ系",
            "マネジメント": "マネジメント系",
            "テクノロジ": "テクノロジ系",

            "ストラテジ系": "ストラテジ系",
            "マネジメント系": "マネジメント系",
            "テクノロジ系": "テクノロジ系"
        };

        category =
            categoryMap[category] || category;

        // ========================================
        // 分野別成績
        // ========================================

        if (categoryStats[category]) {

            categoryStats[category].total++;

            if (isCorrect) {

                categoryStats[category].correct++;

            }
        }
    });

    console.log("試験終了");
    console.log("正解数：" + score);

// ========================================
// 過去の試験結果を保存
// ========================================

// ========================================
// ユーザー別の過去の試験結果
// ========================================

const currentUser = getCurrentUser();

const examResultsKey =
    "itpassport_examResults_" + currentUser;

let examResults = JSON.parse(
    localStorage.getItem(examResultsKey) || "[]"
);


// 今回の正解率
const currentRate =
    Math.round(score / examQuestions.length * 100);


// 今回の結果を追加
examResults.push({
    examNumber: examResults.length + 1,

    // 総合成績
    score: score,
    total: examQuestions.length,
    rate: currentRate,

    // 受験日
    date: new Date().toLocaleDateString("ja-JP"),

    // 分野別成績
    categoryStats: JSON.parse(
        JSON.stringify(categoryStats)
    ),

    // 間違えた問題
    wrongQuestions: wrongQuestions.map(item => {

        const question = item.question;

        return {
            id: question.id,
            question: question.question,

            userAnswer:
                item.userAnswer
                    ? item.userAnswer.text
                    : "未回答",

            correctAnswer:
                question.choices[question.answer],

            explanation:
                question.explanation ||
                "この問題の解説は、今後追加予定です。"
        };
    })
});

// 最大50回まで保存
if (examResults.length > 50) {
    examResults = examResults.slice(-50);
}


// ユーザー別に保存
localStorage.setItem(
    examResultsKey,
    JSON.stringify(examResults)
);

// ========================================
// 過去の成績を計算
// ========================================

const resultRates = examResults.map(result => result.rate);

const averageRate =
    resultRates.length > 0
        ? Math.round(
            resultRates.reduce((sum, rate) => sum + rate, 0)
            / resultRates.length
        )
        : 0;

const highestRate =
    resultRates.length > 0
        ? Math.max(...resultRates)
        : 0;

const previousRate =
    resultRates.length >= 2
        ? resultRates[resultRates.length - 2]
        : null;

const improvement =
    previousRate !== null
        ? currentRate - previousRate
        : null;

    // ==============================
// ITパスポート合格可能性
// ==============================

const overallRate =
    Math.round(score / examQuestions.length * 100);

const categoryRates = Object.values(categoryStats)
    .filter(data => data.total > 0)
    .map(data =>
        Math.round(data.correct / data.total * 100)
    );

const lowestCategoryRate =
    categoryRates.length > 0
        ? Math.min(...categoryRates)
        : 0;

// 総合正解率70%＋最低分野30%で算出
let passProbability =
    Math.round(
        overallRate * 0.7 +
        lowestCategoryRate * 0.3
    );

passProbability =
    Math.max(0, Math.min(100, passProbability));

let passStatus = "";
let passStatusColor = "#1976d2";
let passAdvice = "";

if (passProbability >= 80) {

    passStatus = "🟢 合格圏内";
    passStatusColor = "#2e7d32";

    passAdvice =
        "現在は良い状態です。この調子で3分野の学習を続けましょう。";

} else if (passProbability >= 60) {

    passStatus = "🟡 合格圏に近づいています";
    passStatusColor = "#f57c00";

    passAdvice =
        "あと少しです。正解率の低い分野を重点的に学習しましょう。";

} else {

    passStatus = "🔴 もう少し！";
    passStatusColor = "#d32f2f";

    passAdvice =
        "まずは苦手な分野を重点的に学習して、正解率を上げましょう。";
}

const lowestCategoryEntry =
    Object.entries(categoryStats)
        .filter(([category, data]) => data.total > 0)
        .sort((a, b) =>
            (a[1].correct / a[1].total) -
            (b[1].correct / b[1].total)
        )[0];

const lowestCategoryName =
    lowestCategoryEntry
        ? lowestCategoryEntry[0]
        : "";

    // ==============================
    // 結果画面
    // ==============================

// ========================================
// 過去の成績グラフ
// ========================================

let historyGraphHTML = "";

examResults.forEach((result, index) => {

    const height = Math.max(10, result.rate);

    historyGraphHTML += `
        <div style="
            flex:1;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:flex-end;
            min-width:35px;
        ">

            <div style="
                font-size:12px;
                font-weight:bold;
                margin-bottom:5px;
            ">
                ${result.rate}%
            </div>

            <div style="
                width:28px;
                height:${height * 1.5}px;
                background:#1976d2;
                border-radius:6px 6px 0 0;
                transition:height 0.3s;
            "></div>

            <div style="
                font-size:11px;
                margin-top:5px;
                color:#555;
            ">
                ${index + 1}回
            </div>

        </div>
    `;
});

// 前回からの変化
let improvementHTML = "";

if (improvement !== null) {

    if (improvement > 0) {

        improvementHTML = `
            <div style="
                color:#2e7d32;
                font-weight:bold;
            ">
                📈 前回から +${improvement}%
            </div>
        `;

    } else if (improvement < 0) {

        improvementHTML = `
            <div style="
                color:#d32f2f;
                font-weight:bold;
            ">
                📉 前回から ${improvement}%
            </div>
        `;

    } else {

        improvementHTML = `
            <div style="
                color:#555;
                font-weight:bold;
            ">
                ➡️ 前回と同じ
            </div>
        `;
    }

} else {

    improvementHTML = `
        <div style="
            color:#555;
        ">
            今回が初回受験です
        </div>
    `;
}

const resultScreen = document.createElement("div");

    resultScreen.id = "resultScreen";

    resultScreen.style.position = "fixed";
    resultScreen.style.top = "0";
    resultScreen.style.left = "0";
    resultScreen.style.width = "100%";
    resultScreen.style.height = "100%";
    resultScreen.style.background = "#eef6ff";
    resultScreen.style.overflowY = "auto";
    resultScreen.style.zIndex = "9999";

    let categoryHTML = "";

    Object.keys(categoryStats).forEach(category => {

        const data = categoryStats[category];

        if (data.total === 0) {
            return;
        }

        const rate =
            Math.round(data.correct / data.total * 100);

        categoryHTML += `
            <div style="
                background:#f5f5f5;
                margin:12px 0;
                padding:18px;
                border-radius:12px;
                text-align:left;
            ">

                <div style="
                    font-size:20px;
                    font-weight:bold;
                    margin-bottom:8px;
                ">
                    ${category}
                </div>

                <div style="font-size:18px;">
                    正解：${data.correct} / ${data.total}
                   　
                    正解率：${rate}%
                </div>

            </div>
        `;
    });

    // ==============================
    // 間違えた問題
    // ==============================

    let wrongHTML = "";

    if (wrongQuestions.length === 0) {

        wrongHTML = `
            <div style="
                background:#e8f5e9;
                padding:20px;
                border-radius:12px;
                margin-top:20px;
                font-size:20px;
                font-weight:bold;
            ">
                🎉 全問正解です！
            </div>
        `;

    } else {

        wrongQuestions.forEach((item, index) => {

            const question = item.question;

const userAnswer =
    item.userAnswer
        ? item.userAnswer.text
        : "未回答";
        
            const correctAnswer =
                question.choices[question.answer];

            const explanation =
                question.explanation ||
                "この問題の解説は、今後追加予定です。";

            wrongHTML += `
                <div style="
                    background:white;
                    margin:20px 0;
                    padding:25px;
                    border-radius:15px;
                    box-shadow:0 3px 12px rgba(0,0,0,0.10);
                    text-align:left;
                ">

                    <div style="
                        font-size:18px;
                        font-weight:bold;
                        color:#d32f2f;
                        margin-bottom:12px;
                    ">
                        間違えた問題 ${index + 1}
                    </div>

                    <div style="
                        font-size:20px;
                        font-weight:bold;
                        margin-bottom:20px;
                    ">
                        ${question.question}
                    </div>

                    <div style="
                        background:#ffebee;
                        padding:12px;
                        border-radius:8px;
                        margin-bottom:10px;
                    ">
                        あなたの回答：
                        <strong>${userAnswer}</strong>
                    </div>

                    <div style="
                        background:#e8f5e9;
                        padding:12px;
                        border-radius:8px;
                        margin-bottom:10px;
                    ">
                        正解：
                        <strong>${correctAnswer}</strong>
                    </div>

                    <div style="
                        background:#f5f5f5;
                        padding:15px;
                        border-radius:8px;
                        line-height:1.7;
                    ">
                        <strong>解説</strong><br>
                        ${explanation}
                    </div>

                </div>
            `;
        });
    }

    // ==============================
    // 画面を表示
    // ==============================

    resultScreen.innerHTML = `

        <div style="
            width:90%;
            max-width:700px;
            margin:40px auto;
            padding-bottom:50px;
        ">

            <div style="
                background:linear-gradient(135deg, #1976d2, #42a5f5);
                padding:35px 25px;
                border-radius:24px;
                text-align:center;
                box-shadow:0 8px 25px rgba(25,118,210,0.25);
                color:white;
            ">

                <div style="
                    font-size:18px;
                    font-weight:bold;
                    letter-spacing:2px;
                    opacity:0.9;
                    margin-bottom:8px;
                ">
                    ITパスポート マスター
                </div>

                <h1 style="
                    font-size:38px;
                    margin:5px 0 25px;
                    letter-spacing:2px;
                ">
                    🎉 試験終了！
                </h1>

                <div style="
                    font-size:20px;
                    margin-bottom:8px;
                    opacity:0.95;
                ">
                    総合成績
                </div>

                <div style="
                    font-size:58px;
                    font-weight:bold;
                    margin:5px 0 15px;
                    line-height:1.1;
                ">
                    ${score} / ${examQuestions.length}
                </div>

                <div style="
                    display:inline-block;
                    background:rgba(255,255,255,0.18);
                    padding:10px 25px;
                    border-radius:30px;
                    font-size:22px;
                    font-weight:bold;
                ">
                    正解率 ${Math.round(score / examQuestions.length * 100)}%
                </div>

            </div>

<!-- ITパスポート合格可能性 -->

<div style="
    margin-top:25px;
    padding:30px 25px;
    border-radius:24px;
    background:white;
    box-shadow:0 6px 22px rgba(25,118,210,0.12);
    text-align:center;
    border:1px solid #e3f2fd;
">

    <div style="
        font-size:16px;
        font-weight:bold;
        color:#1976d2;
        letter-spacing:1px;
        margin-bottom:8px;
    ">
        🎯 ITパスポート合格可能性
    </div>

    <div style="
        font-size:58px;
        font-weight:bold;
        color:${passStatusColor};
        line-height:1.1;
        margin:8px 0 5px;
    ">
        ${passProbability}％
    </div>

    <div style="
        display:inline-block;
        padding:8px 22px;
        border-radius:25px;
        background:${passStatusColor};
        color:white;
        font-size:19px;
        font-weight:bold;
        margin:5px 0 22px;
    ">
        ${passStatus}
    </div>

    <div style="
        background:#f4f9ff;
        border-radius:14px;
        padding:18px 16px;
        margin-bottom:18px;
        color:#444;
        font-size:15px;
        line-height:1.8;
        border-left:5px solid #42a5f5;
        text-align:left;
    ">
        💡 ${passAdvice}
    </div>

    <div style="
        background:#fafafa;
        border-radius:12px;
        padding:14px 12px;
        margin-bottom:18px;
        color:#666;
        font-size:15px;
        line-height:1.7;
    ">
        📊 最も正解率が低い分野<br>

        <strong style="
            color:#1976d2;
            font-size:18px;
        ">
            ${lowestCategoryName || "なし"}
        </strong>

        <span style="
            font-weight:bold;
            color:#555;
        ">
            （${lowestCategoryRate}%）
        </span>
    </div>

    <div style="
        font-size:12px;
        color:#888;
        line-height:1.6;
    ">
        ※練習成績から算出したアプリ独自の目安です。<br>
        本試験の合否を保証するものではありません。
    </div>

</div>

            <!-- 過去の成績グラフ -->
            <div style="
                background:white;
                padding:25px;
                border-radius:20px;
                margin-top:25px;
                box-shadow:0 5px 20px rgba(0,0,0,0.12);
            ">
                <h2 style="
                    text-align:center;
                    color:#1976d2;
                    margin-bottom:25px;
                ">
                    📊 過去の成績
                </h2>

                <div style="
                    display:flex;
                    align-items:flex-end;
                    justify-content:center;
                    gap:10px;
                    min-height:220px;
                    overflow-x:auto;
                    padding:10px;
                ">
                    ${historyGraphHTML}
                </div>

                 <button id="resetExamHistoryBtn" style="
                    display:block;
                    margin:20px auto 0;
                    padding:10px 22px;
                    border:none;
                    border-radius:10px;
                    background:#eeeeee;
                    color:#555;
                    font-size:14px;
                    cursor:pointer;
                ">
                    🗑️ 過去の成績をリセット
                </button>

            </div>

<!-- 分野別成績 -->

<div style="
    margin-top:25px;
    padding:28px 22px;
    border-radius:24px;
    background:white;
    box-shadow:0 6px 22px rgba(25,118,210,0.12);
    border:1px solid #e3f2fd;
">

    <div style="
        text-align:center;
        margin-bottom:22px;
    ">

        <div style="
            font-size:16px;
            font-weight:bold;
            color:#1976d2;
            letter-spacing:1px;
            margin-bottom:6px;
        ">
            📊 分野別成績
        </div>

        <div style="
            font-size:13px;
            color:#777;
        ">
            3分野の学習状況
        </div>

    </div>

    ${categoryHTML}

</div>

<!-- 間違えた問題 -->

<div style="
    margin-top:25px;
    padding:28px 22px;
    border-radius:24px;
    background:white;
    box-shadow:0 6px 22px rgba(211,47,47,0.12);
    border:1px solid #ffebee;
">

    <div style="
        text-align:center;
        margin-bottom:22px;
    ">

        <div style="
            font-size:16px;
            font-weight:bold;
            color:#d32f2f;
            letter-spacing:1px;
            margin-bottom:6px;
        ">
            ❌ 間違えた問題
        </div>

        <div style="
            font-size:13px;
            color:#777;
        ">
            復習して次回の正解につなげよう
        </div>

    </div>

    ${wrongHTML}

</div>

            <!-- ホームボタン -->

            <div style="
                text-align:center;
                margin-top:30px;
            ">

<button id="returnHomeButton" style="
    display:block;
    width:85%;
    max-width:360px;
    margin:30px auto 10px;
    padding:16px 20px;
    font-size:19px;
    font-weight:bold;
    border:none;
    border-radius:16px;
    background:linear-gradient(135deg, #1976d2, #42a5f5);
    color:white;
    cursor:pointer;
    box-shadow:0 6px 16px rgba(25,118,210,0.25);
    letter-spacing:1px;
">
    🏠 ホームへ戻る
</button>

            </div>

        </div>
    `;

    document.body.appendChild(resultScreen);


    // ==============================
    // ホームへ戻る
    // ==============================

    document.getElementById("returnHomeButton").onclick = () => {
        location.reload();
    };
     // ==============================
    // 過去の成績リセット
    // ==============================

    const resetExamHistoryBtn =
        document.getElementById("resetExamHistoryBtn");

    if (resetExamHistoryBtn) {
        resetExamHistoryBtn.onclick = () => {

            const confirmed = confirm(
                "本当に過去の成績をリセットしますか？\n\nこれまでの試験結果と成績グラフがすべて削除されます。"
            );

            if (!confirmed) {
                return;
            }

            localStorage.removeItem(
    "itpassport_examResults_" + getCurrentUser()
);

            alert("過去の成績をリセットしました。");

            location.reload();
        };
    }   
}