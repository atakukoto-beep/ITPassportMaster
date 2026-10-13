// =====================================
// ITパスポート マスター
// storage.js Ver0.6
// ユーザー別の問題成績・試験回数を保存
// =====================================


// =====================================
// 現在のユーザー
// =====================================

function getCurrentUser() {
    return localStorage.getItem("itpassport_current_user") || "学習者1";
}


// =====================================
// ユーザー別・問題成績の保存先
// =====================================

function getStorageKey() {
    return "itpassport_question_history_" + getCurrentUser();
}


// =====================================
// 問題成績を取得
// =====================================

function getQuestionHistory() {
    const saved =
        localStorage.getItem(getStorageKey());

    if (!saved) {
        return {};
    }

    try {
        return JSON.parse(saved);
    } catch (error) {
        console.error(
            "成績データの読み込みに失敗しました。",
            error
        );
        return {};
    }
}


// =====================================
// 問題成績を保存
// =====================================

function saveQuestionHistory(history) {
    localStorage.setItem(
        getStorageKey(),
        JSON.stringify(history)
    );
}


// =====================================
// ユーザー別・試験回数を取得
// =====================================

function getExamCount() {
    const key =
        "itpassport_examCount_" + getCurrentUser();

    return Number(
        localStorage.getItem(key)
    ) || 0;
}


// =====================================
// ユーザー別・試験回数を1回増やす
// =====================================

function incrementExamCount() {
    const key =
        "itpassport_examCount_" + getCurrentUser();

    const count =
        Number(localStorage.getItem(key)) || 0;

    const newCount = count + 1;

    localStorage.setItem(
        key,
        newCount
    );

    return newCount;
}


// =====================================
// 問題の結果を記録
// =====================================

function recordQuestionResult(question, isCorrect) {

    if (!question || !question.id) {
        console.warn(
            "問題IDがないため、成績を保存できません。"
        );
        return;
    }

    const history =
        getQuestionHistory();


    // 初めて記録する問題
    if (!history[question.id]) {

        history[question.id] = {
            correctCount: 0,
            wrongCount: 0,
            consecutiveCorrect: 0,
            lastResult: null,
            lastCorrectExam: 0
        };
    }


    // 古い形式のデータにも対応
    if (
        history[question.id].correctCount ===
        undefined
    ) {
        history[question.id].correctCount =
            history[question.id].correct || 0;
    }


    if (
        history[question.id].wrongCount ===
        undefined
    ) {
        history[question.id].wrongCount =
            history[question.id].wrong || 0;
    }


    if (
        history[question.id].consecutiveCorrect ===
        undefined
    ) {
        history[question.id].consecutiveCorrect = 0;
    }


    if (
        history[question.id].lastResult ===
        undefined
    ) {
        history[question.id].lastResult = null;
    }


    if (
        history[question.id].lastCorrectExam ===
        undefined
    ) {
        history[question.id].lastCorrectExam = 0;
    }


    // =====================================
    // 正解
    // =====================================

    if (isCorrect) {

        history[question.id].correctCount++;


        if (
            history[question.id].lastResult ===
            "correct"
        ) {
            history[question.id].consecutiveCorrect++;

        } else {

            history[question.id].consecutiveCorrect = 1;
        }


        history[question.id].lastResult =
            "correct";


        history[question.id].lastCorrectExam =
            getExamCount();

    }


    // =====================================
    // 不正解
    // =====================================

    else {

        history[question.id].wrongCount++;

        history[question.id].consecutiveCorrect = 0;

        history[question.id].lastResult =
            "wrong";
    }


    // 保存
    saveQuestionHistory(history);


    console.log(
        "問題成績保存：",
        question.id,
        history[question.id]
    );
}


// =====================================
// 特定問題の成績を取得
// =====================================

function getQuestionResult(questionId) {

    const history =
        getQuestionHistory();

    return history[questionId] || {
        correctCount: 0,
        wrongCount: 0,
        consecutiveCorrect: 0,
        lastResult: null,
        lastCorrectExam: 0
    };
}