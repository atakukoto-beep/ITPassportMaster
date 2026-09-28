// =====================================
// ITパスポート マスター
// app.js（Ver0.4）
// =====================================

window.addEventListener("DOMContentLoaded", () => {
    console.log("ITパスポート マスター Ver0.4 起動");

    // 問題データの読み込み確認
    if (typeof createExam === "function") {
        console.log("exam.js 読み込みOK");
    } else {
        console.error("exam.js が読み込まれていません。");
    }

    if (typeof technologyQuestions !== "undefined") {
        console.log("テクノロジ系問題数：" + technologyQuestions.length);
    } else {
        console.error("technology.js が読み込まれていません。");
    }

    // 画面・ボタン取得
    const startBtn = document.getElementById("startBtn");
    const resultBtn = document.getElementById("resultBtn");
    const homeScreen = document.getElementById("homeScreen");
    const examScreen = document.getElementById("examScreen");
    const nextBtn = document.getElementById("nextBtn");

    // 試験開始
    if (startBtn) {
        startBtn.addEventListener("click", () => {

    console.log("試験開始ボタンが押されました");


        // 音声機能を試験開始時に準備
        getAudioContext();
        playStartFanfare();


            if (homeScreen) {
                homeScreen.style.display = "none";
            }

            if (examScreen) {
                examScreen.style.display = "block";
            }

            if (typeof createExam === "function") {
                createExam();
                console.log("試験問題を作成しました");
            }
        });
    } else {
        console.error("startBtn が見つかりません。");
    }

    // 次へ
if (nextBtn) {
    nextBtn.addEventListener("click", () => {

        console.log("次へボタンが押されました");

        if (typeof nextQuestion === "function") {
            nextQuestion();
        } else {
            console.error("nextQuestion() が見つかりません。");
        }

        playNextSound();
    });
} else {
    console.error("nextBtn が見つかりません。");
}
// 成績ボタン
if (resultBtn) {
    resultBtn.addEventListener("click", () => {

        console.log("成績ボタンが押されました");

        showSavedResult();

    });
}
});

// =====================================
// 設定ボタン
// =====================================

const settingBtn =
    document.getElementById("settingBtn");

if (settingBtn) {

    settingBtn.onclick = () => {

        openSettings();

    };
}

// =====================================
// 保存されている最新成績を表示
// =====================================

// =====================================
// 保存されている成績を表示
// =====================================

function showSavedResult() {

    const currentUser =
        getCurrentUser();

    const examResultsKey =
        "itpassport_examResults_" + currentUser;

    const examResults =
        JSON.parse(
            localStorage.getItem(examResultsKey) || "[]"
        );

    if (examResults.length === 0) {

        alert("まだ成績がありません。");

        return;
    }

    // =====================================
    // 最新成績
    // =====================================

    const latestResult =
        examResults[examResults.length - 1];


    // =====================================
    // 過去の成績グラフ
    // =====================================

    let historyGraphHTML = "";

    examResults.forEach((result, index) => {

        const height =
            Math.max(10, result.rate);

        historyGraphHTML += `
            <div style="
                flex:1;
                min-width:40px;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:flex-end;
            ">

                <div style="
                    font-size:11px;
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


    // =====================================
    // 分野別成績
    // =====================================

    let categoryHTML = "";

    if (latestResult.categoryStats) {

        Object.entries(
            latestResult.categoryStats
        ).forEach(([category, data]) => {

            if (data.total === 0) {
                return;
            }

            const rate =
                Math.round(
                    data.correct /
                    data.total *
                    100
                );

            categoryHTML += `
                <div style="
                    background:#f5f5f5;
                    margin:10px 0;
                    padding:15px;
                    border-radius:12px;
                    text-align:left;
                ">

                    <div style="
                        font-size:18px;
                        font-weight:bold;
                        margin-bottom:6px;
                    ">
                        ${category}
                    </div>

                    <div style="
                        font-size:16px;
                    ">
                        正解：
                        ${data.correct} / ${data.total}
                        　
                        正解率：
                        ${rate}%
                    </div>

                </div>
            `;
        });
    }

        // =====================================
    // 間違えた問題
    // =====================================

    let wrongQuestionsHTML = "";

    const wrongQuestions =
        latestResult.wrongQuestions || [];

    if (wrongQuestions.length === 0) {

        wrongQuestionsHTML = `
            <div style="
                background:#e8f5e9;
                padding:20px;
                border-radius:12px;
                text-align:center;
                font-weight:bold;
            ">
                🎉 この試験は全問正解です！
            </div>
        `;

    } else {

        wrongQuestions.forEach((item, index) => {

            wrongQuestionsHTML += `
                <div style="
                    background:#ffffff;
                    margin:15px 0;
                    padding:20px;
                    border-radius:15px;
                    box-shadow:
                        0 3px 12px
                        rgba(0,0,0,0.10);
                    text-align:left;
                ">

                    <div style="
                        color:#d32f2f;
                        font-size:17px;
                        font-weight:bold;
                        margin-bottom:12px;
                    ">
                        ❌ 間違えた問題 ${index + 1}
                    </div>

                    <div style="
                        font-size:18px;
                        font-weight:bold;
                        margin-bottom:15px;
                        line-height:1.6;
                    ">
                        ${item.question}
                    </div>

                    <div style="
                        background:#ffebee;
                        padding:12px;
                        border-radius:8px;
                        margin-bottom:10px;
                    ">
                        あなたの回答：
                        <strong>${item.userAnswer}</strong>
                    </div>

                    <div style="
                        background:#e8f5e9;
                        padding:12px;
                        border-radius:8px;
                        margin-bottom:10px;
                    ">
                        正解：
                        <strong>${item.correctAnswer}</strong>
                    </div>

                    <div style="
                        background:#f5f5f5;
                        padding:15px;
                        border-radius:8px;
                        line-height:1.7;
                    ">
                        <strong>💡 解説</strong><br>
                        ${item.explanation}
                    </div>

                </div>
            `;
        });
    }


    // =====================================
    // 成績画面を作成
    // =====================================

    const resultScreen =
        document.createElement("div");

    resultScreen.id =
        "savedResultScreen";

    resultScreen.style.position =
        "fixed";

    resultScreen.style.top = "0";
    resultScreen.style.left = "0";

    resultScreen.style.width =
        "100%";

    resultScreen.style.height =
        "100%";

    resultScreen.style.background =
        "#eef6ff";

    resultScreen.style.overflowY =
        "auto";

    resultScreen.style.zIndex =
        "9999";


    resultScreen.innerHTML = `

        <div style="
            width:90%;
            max-width:700px;
            margin:30px auto;
            padding-bottom:50px;
        ">

            <!-- タイトル -->

            <div style="
                background:linear-gradient(
                    135deg,
                    #1976d2,
                    #42a5f5
                );
                padding:30px 20px;
                border-radius:24px;
                text-align:center;
                color:white;
                box-shadow:
                    0 8px 25px
                    rgba(25,118,210,0.25);
            ">

                <div style="
                    font-size:16px;
                    font-weight:bold;
                    margin-bottom:8px;
                ">
                    ITパスポート マスター
                </div>

                <h1 style="
                    font-size:32px;
                    margin:5px 0 20px;
                ">
                    📊 成績
                </h1>

                <div style="
                    font-size:18px;
                ">
                    ${currentUser}
                </div>

            </div>


            <!-- 最新成績 -->

            <div style="
                background:white;
                margin-top:20px;
                padding:25px;
                border-radius:20px;
                text-align:center;
                box-shadow:
                    0 5px 20px
                    rgba(0,0,0,0.10);
            ">

                <h2 style="
                    color:#1976d2;
                ">
                    📌 最新の成績
                </h2>

                <div style="
                    font-size:40px;
                    font-weight:bold;
                    color:#1976d2;
                    margin:15px 0;
                ">
                    ${latestResult.score}
                    /
                    ${latestResult.total}
                </div>

                <div style="
                    font-size:22px;
                    font-weight:bold;
                ">
                    正解率 ${latestResult.rate}%
                </div>
                
                <div style="
    margin-top:15px;
    font-size:15px;
    color:#666;
">
    第${latestResult.examNumber}回　｜　
    受験日：${latestResult.date}
</div>

            </div>


            <!-- 過去の成績グラフ -->

            <div style="
                background:white;
                margin-top:20px;
                padding:25px;
                border-radius:20px;
                box-shadow:
                    0 5px 20px
                    rgba(0,0,0,0.10);
            ">

                <h2 style="
                    text-align:center;
                    color:#1976d2;
                    margin-bottom:20px;
                ">
                    📈 過去の成績
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

            </div>


            <!-- 分野別成績 -->

            <div style="
                background:white;
                margin-top:20px;
                padding:25px;
                border-radius:20px;
                box-shadow:
                    0 5px 20px
                    rgba(0,0,0,0.10);
            ">

                <h2 style="
                    text-align:center;
                    color:#1976d2;
                    margin-bottom:20px;
                ">
                    📊 分野別成績
                </h2>

                ${categoryHTML}

            </div>


            <!-- 間違えた問題 -->

            <div style="
                background:white;
                margin-top:20px;
                padding:25px;
                border-radius:20px;
                box-shadow:
                    0 5px 20px
                    rgba(211,47,47,0.12);
            ">

                <h2 style="
                    text-align:center;
                    color:#d32f2f;
                    margin-bottom:10px;
                ">
                    ❌ 間違えた問題
                </h2>

                <div style="
                    text-align:center;
                    color:#777;
                    font-size:13px;
                    margin-bottom:15px;
                ">
                    最新の試験で間違えた問題を復習できます
                </div>

                ${wrongQuestionsHTML}

            </div>


            <!-- ホームへ戻る -->
            <button
                id="savedResultHomeButton"
                style="
                    display:block;
                    width:85%;
                    max-width:360px;
                    margin:30px auto;
                    padding:16px;
                    border:none;
                    border-radius:16px;
                    background:
                        linear-gradient(
                            135deg,
                            #1976d2,
                            #42a5f5
                        );
                    color:white;
                    font-size:19px;
                    font-weight:bold;
                    cursor:pointer;
                "
            >
                🏠 ホームへ戻る
            </button>

        </div>
    `;


    document.body.appendChild(
        resultScreen
    );


    
    // =====================================
    // ホームへ戻る
    // =====================================

    document.getElementById(
        "savedResultHomeButton"
    ).onclick = () => {

        resultScreen.remove();

    };
}