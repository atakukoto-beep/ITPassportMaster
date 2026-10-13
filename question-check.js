// ========================================
// ITパスポート マスター
// 問題データ重複チェック
// ========================================

(function checkQuestionData() {

    const allQuestions = [
        ...(Array.isArray(technologyQuestions) ? technologyQuestions : []),
        ...(Array.isArray(strategyQuestions) ? strategyQuestions : []),
        ...(Array.isArray(managementQuestions) ? managementQuestions : [])
    ];

    // ------------------------------
    // 文字を比較しやすい形にする
    // ------------------------------
    function normalizeText(text) {
        return String(text ?? "")
            .replace(/\s+/g, "")
            .replace(/　/g, "");
    }

    // ------------------------------
    // 重複チェック用
    // ------------------------------
    const idMap = new Map();
    const questionMap = new Map();
    const fullMap = new Map();

    allQuestions.forEach(question => {

        // 問題ID
        const idKey = String(question.id);

        if (!idMap.has(idKey)) {
            idMap.set(idKey, []);
        }

        idMap.get(idKey).push(question);


        // 問題文
        const questionKey =
            normalizeText(question.question);

        if (!questionMap.has(questionKey)) {
            questionMap.set(questionKey, []);
        }

        questionMap.get(questionKey).push(question);


        // 問題文 + 選択肢
        const choicesKey =
            question.choices
                .map(choice => normalizeText(choice))
                .join("||");

        const fullKey =
            questionKey + "||" + choicesKey;

        if (!fullMap.has(fullKey)) {
            fullMap.set(fullKey, []);
        }

        fullMap.get(fullKey).push(question);
    });


    // ========================================
    // 結果表示
    // ========================================

    console.group(
        "【ITパスポート マスター】問題重複チェック"
    );

    console.log(
        "チェックした問題数：",
        allQuestions.length
    );


    // ------------------------------
    // ID重複
    // ------------------------------

    const duplicateIds = [];

    idMap.forEach((questions, id) => {

        if (questions.length > 1) {

            duplicateIds.push({
                id: id,
                questions: questions
            });

        }

    });


    if (duplicateIds.length === 0) {

        console.log(
            "✅ 問題IDの重複：なし"
        );

    } else {

        console.warn(
            "⚠️ 問題IDの重複：",
            duplicateIds
        );

    }


    // ------------------------------
    // 問題文の重複
    // ------------------------------

    const duplicateQuestions = [];

    questionMap.forEach((questions, text) => {

        if (questions.length > 1) {

            duplicateQuestions.push({
                question: text,
                ids: questions.map(q => q.id)
            });

        }

    });


    if (duplicateQuestions.length === 0) {

        console.log(
            "✅ 問題文の重複：なし"
        );

    } else {

        console.warn(
            "⚠️ 問題文の重複：",
            duplicateQuestions
        );

    }


    // ------------------------------
    // 問題文＋選択肢の完全重複
    // ------------------------------

    const duplicateFull = [];

    fullMap.forEach((questions, key) => {

        if (questions.length > 1) {

            duplicateFull.push({
                ids: questions.map(q => q.id),
                questions: questions.map(q => q.question)
            });

        }

    });


    if (duplicateFull.length === 0) {

        console.log(
            "✅ 問題文＋選択肢の完全重複：なし"
        );

    } else {

        console.warn(
            "⚠️ 問題文＋選択肢の完全重複：",
            duplicateFull
        );

    }


    console.log(
        "チェック終了"
    );

    console.groupEnd();

})();