// =====================================
// ITパスポート マスター
// settings.js
// 設定機能
// =====================================


// =====================================
// 効果音設定
// =====================================

// 効果音設定を取得
function isSoundEnabled() {

    const saved =
        localStorage.getItem("itpassport_sound_enabled");

    // 初回はON
    if (saved === null) {
        return true;
    }

    return saved === "true";
}


// 効果音設定を保存
function setSoundEnabled(enabled) {

    localStorage.setItem(
        "itpassport_sound_enabled",
        enabled ? "true" : "false"
    );
}

// =====================================
// 出題数設定
// =====================================

// 現在の出題数を取得
function getQuestionCount() {

    const saved =
        localStorage.getItem(
            "itpassport_question_count"
        );

    // 初回は20問
    if (saved === null) {
        return 20;
    }

    const count =
        Number(saved);

    if (
        count !== 20 &&
        count !== 50 &&
        count !== 100
    ) {
        return 20;
    }

    return count;
}


// 出題数を保存
function setQuestionCount(count) {

    localStorage.setItem(
        "itpassport_question_count",
        String(count)
    );
}

// =====================================
// 学習履歴リセット
// =====================================

// 現在のユーザーの問題別学習履歴をリセット
function resetLearningHistory() {

    const currentUser =
        getCurrentUser();

    const confirmed =
        confirm(
            "学習履歴をリセットしますか？\n\n" +
            "「" + currentUser + "」の\n" +
            "問題ごとの正解・不正解・連続正解などの履歴が\n" +
            "すべてリセットされます。\n\n" +
            "この操作は元に戻せません。"
        );

    if (!confirmed) {
        return;
    }

    // 現在のユーザー専用の問題履歴を削除
    localStorage.removeItem(
        "itpassport_question_history_" +
        currentUser
    );

    alert(
        "学習履歴をリセットしました。"
    );
}


// =====================================
// 設定画面
// =====================================

function openSettings() {

    const currentSetting =
        isSoundEnabled();

    const currentQuestionCount =
        getQuestionCount();

      const choice =
        prompt(
            "⚙ 設定\n\n" +
            "1：効果音 ON/OFF\n" +
            "2：学習履歴をリセット\n" +
            "3：出題数設定\n" +
            "4：過去の成績をリセット\n\n" +
            "番号を入力してください。"
        );

    // キャンセル
    if (choice === null) {
        return;
    }


    // =====================================
    // 1：効果音設定
    // =====================================

    if (choice === "1") {

        const change =
            confirm(
                "現在の効果音：" +
                (currentSetting ? "ON" : "OFF") +
                "\n\n" +
                "効果音を" +
                (currentSetting ? "OFF" : "ON") +
                "にしますか？"
            );

        if (change) {

            setSoundEnabled(
                !currentSetting
            );

            alert(
                "効果音を" +
                (isSoundEnabled() ? "ON" : "OFF") +
                "にしました。"
            );
        }

        return;
    }


    // =====================================
    // 2：学習履歴リセット
    // =====================================

    if (choice === "2") {

        resetLearningHistory();

        return;
    }


    // =====================================
    // 3：出題数設定
    // =====================================

    if (choice === "3") {

        const input =
            prompt(
                "出題数を入力してください。\n\n" +
                "現在：" +
                currentQuestionCount +
                "問\n\n" +
                "選択できる出題数：\n" +
                "20 / 50 / 100"
            );

        if (input === null) {
            return;
        }

        const count =
            Number(input);

        if (
            count !== 20 &&
            count !== 50 &&
            count !== 100
        ) {

            alert(
                "20、50、100のいずれかを入力してください。"
            );

            return;
        }

        setQuestionCount(count);

        alert(
            "出題数を" +
            count +
            "問に設定しました。"
        );

        return;
    }

        if (choice === "4") {

        const currentUser =
            getCurrentUser();

        const confirmed =
            confirm(
                "過去の試験成績をリセットしますか？\n\n" +
                "「" + currentUser + "」の\n" +
                "過去の試験結果と成績グラフが\n" +
                "すべて削除されます。\n\n" +
                "問題ごとの学習履歴は削除されません。"
            );

        if (!confirmed) {
            return;
        }

        localStorage.removeItem(
            "itpassport_examResults_" +
            currentUser
        );

        alert(
            "過去の試験成績をリセットしました。"
        );

        return;
    }

    // =====================================
    // その他
    // =====================================

    alert(
        "1、2、3、4のいずれかを入力してください。"
    );
}