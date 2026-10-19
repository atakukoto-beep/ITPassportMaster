// ========================================
// ITパスポート マスター
// テクノロジ系問題
// ========================================

const technologyQuestions = [

{
    id:1,
    category:"technology",
    question:"CPUの役割として最も適切なものはどれか。",
    choices:[
        "演算や制御を行う",
        "印刷する",
        "画面表示する",
        "データを保存する"
    ],
    answer:0,
    explanation:"CPUはコンピュータ全体の演算や制御を担当します。"
},

{
    id:2,
    category:"technology",
    question:"RAMの特徴として正しいものはどれか。",
    choices:[
        "電源を切っても内容は消えない",
        "主記憶装置として使用される",
        "永久保存用の装置である",
        "CPUそのものである"
    ],
    answer:1,
    explanation:"RAMは主記憶装置であり、電源を切ると内容は消えます。"
},

{
    id:3,
    category:"technology",
    question:"LANとは何を表すか。",
    choices:[
        "建物内などの限定されたネットワーク",
        "人工衛星",
        "携帯電話回線",
        "インターネット全体"
    ],
    answer:0,
    explanation:"LAN（Local Area Network）は限られた範囲のネットワークです。"
},

{
    id:4,
    category:"technology",
    question:"IPアドレスの役割はどれか。",
    choices:[
        "ネットワーク上の機器を識別する",
        "印刷速度を決める",
        "CPUの性能を表す",
        "画面の解像度を決める"
    ],
    answer:0,
    explanation:"IPアドレスはネットワーク上の機器を識別するための番号です。"
},

{
    id:5,
    category:"technology",
    question:"OSの役割として正しいものはどれか。",
    choices:[
        "ハードウェアやアプリケーションを管理する",
        "印刷専用ソフト",
        "メールソフト",
        "表計算ソフト"
    ],
    answer:0,
    explanation:"OSはコンピュータ全体を管理する基本ソフトウェアです。"
},

{
    id: 6,
    category: "technology",
    question: "コンピュータの主記憶装置として使用され、電源を切ると記憶内容が失われるものはどれか。",
    choices: [
        "RAM",
        "ROM",
        "SSD",
        "DVD"
    ],
    answer: 0,
    explanation: "RAMは主記憶装置として使用され、電源を切ると記憶内容が失われる揮発性メモリです。"
},

{
    id: 7,
    category: "technology",
    question: "コンピュータの演算や制御を行う装置はどれか。",
    choices: [
        "CPU",
        "HDD",
        "キーボード",
        "プリンタ"
    ],
    answer: 0,
    explanation: "CPUはコンピュータの命令を解釈して演算や制御を行う装置です。"
},
{
    id: 8,
    category: "technology",
    question: "Webページを閲覧するときに使用するソフトウェアはどれか。",
    choices: [
        "ブラウザ",
        "コンパイラ",
        "表計算ソフト",
        "データベース管理システム"
    ],
    answer: 0,
    explanation: "ブラウザはWebサーバーからWebページを取得して表示するためのソフトウェアです。"
},
{
    id: 9,
    category: "technology",
    question: "コンピュータウイルスなどの不正なプログラムからコンピュータを保護するソフトウェアはどれか。",
    choices: [
        "ウイルス対策ソフト",
        "表計算ソフト",
        "プレゼンテーションソフト",
        "画像編集ソフト"
    ],
    answer: 0,
    explanation: "ウイルス対策ソフトは、コンピュータウイルスなどのマルウェアを検出・駆除するために使用します。"
},
{
    id: 10,
    category: "technology",
    question: "複数のコンピュータを通信回線で接続し、データをやり取りできるようにしたものはどれか。",
    choices: [
        "ネットワーク",
        "CPU",
        "メモリ",
        "OS"
    ],
    answer: 0,
    explanation: "ネットワークは、複数のコンピュータや機器を接続してデータを通信できるようにしたものです。"
},

{
    id: 11,
    category: "technology",
    question: "コンピュータの処理速度を表す指標の一つで、1秒間に実行できる命令数を表すものはどれか。",
    choices: [
        "MIPS",
        "dpi",
        "bps",
        "GB"
    ],
    answer: 0,
    explanation: "MIPSは、1秒間に何百万個の命令を実行できるかを表す、CPUの処理性能を示す指標の一つです。"
},
{
    id: 12,
    category: "technology",
    question: "電源を切ってもデータが保持される記憶装置はどれか。",
    choices: [
        "SSD",
        "RAM",
        "キャッシュメモリ",
        "レジスタ"
    ],
    answer: 0,
    explanation: "SSDは電源を切ってもデータを保持できる不揮発性の記憶装置です。"
},
{
    id: 13,
    category: "technology",
    question: "コンピュータのハードウェアやソフトウェアを管理し、アプリケーションが動作するための基本的な機能を提供するソフトウェアはどれか。",
    choices: [
        "OS",
        "Webブラウザ",
        "表計算ソフト",
        "画像編集ソフト"
    ],
    answer: 0,
    explanation: "OS（オペレーティングシステム）は、コンピュータのハードウェアやソフトウェアを管理し、基本的な機能を提供します。"
},
{
    id: 14,
    category: "technology",
    question: "インターネット上でコンピュータやネットワーク機器を識別するために使用される番号はどれか。",
    choices: [
        "IPアドレス",
        "MACアドレス",
        "URL",
        "HTML"
    ],
    answer: 0,
    explanation: "IPアドレスは、ネットワーク上の機器を識別するために使用される番号です。"
},
{
    id: 15,
    category: "technology",
    question: "データベースで、データを重複なく整理して管理するための考え方はどれか。",
    choices: [
        "正規化",
        "暗号化",
        "圧縮",
        "バックアップ"
    ],
    answer: 0,
    explanation: "正規化は、データの重複や不整合を減らし、データベースを効率的に管理するための手法です。"
},
{
    id: 16,
    category: "technology",
    question: "ネットワークを通じて送受信するデータを第三者に読み取られにくくするために行う処理はどれか。",
    choices: [
        "暗号化",
        "デフラグ",
        "フォーマット",
        "圧縮"
    ],
    answer: 0,
    explanation: "暗号化は、データを一定の規則で変換し、第三者に内容を読み取られにくくする処理です。"
},
{
    id: 17,
    category: "technology",
    question: "コンピュータウイルスなどのマルウェアに感染することを防ぐために有効な対策はどれか。",
    choices: [
        "OSやソフトウェアを最新の状態にする",
        "パスワードを誰でも分かるものにする",
        "不明なメールの添付ファイルを必ず開く",
        "セキュリティソフトを無効にする"
    ],
    answer: 0,
    explanation: "OSやソフトウェアを最新の状態に保つことで、既知の脆弱性を悪用したマルウェア感染のリスクを低減できます。"
},
{
    id: 18,
    category: "technology",
    question: "障害やデータ消失に備えて、重要なデータを別の場所などに複製して保存することはどれか。",
    choices: [
        "バックアップ",
        "暗号化",
        "認証",
        "ログイン"
    ],
    answer: 0,
    explanation: "バックアップは、障害や誤操作などによるデータ消失に備えて、データを別の場所などに複製して保存することです。"
},
{
    id: 19,
    category: "technology",
    question: "クラウドサービスの特徴として、最も適切なものはどれか。",
    choices: [
        "インターネットを通じて必要なIT資源やサービスを利用できる",
        "必ず自社の建物内にサーバを設置する",
        "インターネットを利用せずにサービスを提供する",
        "利用するたびに専用のコンピュータを購入する"
    ],
    answer: 0,
    explanation: "クラウドサービスでは、インターネットなどを通じて、必要なIT資源やサービスを利用できます。"
},
{
    id: 20,
    category: "technology",
    question: "Webページを記述するために使用されるマークアップ言語はどれか。",
    choices: [
        "HTML",
        "SQL",
        "Java",
        "Python"
    ],
    answer: 0,
    explanation: "HTMLは、Webページの構造や内容を記述するために使用されるマークアップ言語です。"
},

{
    id: 21,
    category: "technology",
    question: "コンピュータで文字や数値などのデータを一時的に記憶する装置はどれか。",
    choices: [
        "メモリ",
        "キーボード",
        "ディスプレイ",
        "プリンタ"
    ],
    answer: 0,
    explanation: "メモリは、CPUが処理するデータやプログラムを一時的に記憶する装置です。"
},
{
    id: 22,
    category: "technology",
    question: "ネットワーク上でWebサイトの場所を示す文字列はどれか。",
    choices: [
        "URL",
        "CPU",
        "RAM",
        "USB"
    ],
    answer: 0,
    explanation: "URLは、Webページなどインターネット上の情報が存在する場所を示す文字列です。"
},
{
    id: 23,
    category: "technology",
    question: "データベースから必要なデータを検索したり、追加・更新したりするために使用される言語はどれか。",
    choices: [
        "SQL",
        "HTML",
        "CSS",
        "JPEG"
    ],
    answer: 0,
    explanation: "SQLは、データベースのデータを検索、追加、更新、削除するために使用される言語です。"
},
{
    id: 24,
    category: "technology",
    question: "コンピュータやネットワークへの不正なアクセスを防ぐために、通信を監視して許可されていない通信を遮断する仕組みはどれか。",
    choices: [
        "ファイアウォール",
        "バックアップ",
        "デフラグ",
        "コンパイラ"
    ],
    answer: 0,
    explanation: "ファイアウォールは、ネットワーク通信を監視し、設定されたルールに基づいて不正な通信を遮断します。"
},
{
    id: 25,
    category: "technology",
    question: "パスワードを他人に知られないようにするための対策として、最も適切なものはどれか。",
    choices: [
        "他人に教えず、推測されにくいものを使用する",
        "誕生日をパスワードにする",
        "すべてのサービスで同じパスワードを使う",
        "パスワードを紙に書いて誰でも見られる場所に置く"
    ],
    answer: 0,
    explanation: "パスワードは推測されにくいものを使用し、他人に教えたり使い回したりしないことが重要です。"
},
{
    id: 26,
    category: "technology",
    question: "コンピュータ同士を接続してデータを送受信するとき、通信の手順や規則を定めたものはどれか。",
    choices: [
        "プロトコル",
        "アルゴリズム",
        "データベース",
        "インターフェース"
    ],
    answer: 0,
    explanation: "プロトコルは、コンピュータやネットワーク機器が通信するときの手順や規則を定めたものです。"
},
{
    id: 27,
    category: "technology",
    question: "同じ内容のデータを、より少ない容量で保存できるようにする処理はどれか。",
    choices: [
        "圧縮",
        "認証",
        "暗号化",
        "復号"
    ],
    answer: 0,
    explanation: "圧縮は、データの内容を保ちながらデータ量を小さくする処理です。"
},
{
    id: 28,
    category: "technology",
    question: "コンピュータで処理する手順を、順序立てて表現したものはどれか。",
    choices: [
        "アルゴリズム",
        "IPアドレス",
        "データベース",
        "プロトコル"
    ],
    answer: 0,
    explanation: "アルゴリズムは、問題を解決するための処理手順を明確にしたものです。"
},
{
    id: 29,
    category: "technology",
    question: "利用者が本人であることを確認するために、IDとパスワードなどを使って確認することはどれか。",
    choices: [
        "認証",
        "暗号化",
        "圧縮",
        "バックアップ"
    ],
    answer: 0,
    explanation: "認証は、システムを利用しようとしている人が本人であることを確認する処理です。"
},
{
    id: 30,
    category: "technology",
    question: "IoTの説明として、最も適切なものはどれか。",
    choices: [
        "様々な機器をインターネットなどのネットワークに接続し、データを収集・活用する仕組み",
        "コンピュータの電源を自動的に切る仕組み",
        "紙の書類を電子化するだけの作業",
        "キーボードだけを使ってデータを入力する仕組み"
    ],
    answer: 0,
    explanation: "IoTは、様々なモノをインターネットなどのネットワークに接続し、データを収集・活用する仕組みです。"
},

{
        id: 31,
        category: "technology",
        question: "コンピュータのCPUにおいて、命令を解読し、各装置に処理を指示する部分はどれか。",
        choices: [
            "制御装置",
            "演算装置",
            "主記憶装置",
            "入力装置"
        ],
        answer: 0,
        explanation: "制御装置は、プログラムの命令を解読し、コンピュータの各装置に処理を行うよう指示します。"
    },

    {
        id: 32,
        category: "technology",
        question: "CPUが計算や論理演算を行う部分はどれか。",
        choices: [
            "演算装置",
            "制御装置",
            "補助記憶装置",
            "出力装置"
        ],
        answer: 0,
        explanation: "演算装置は、加算や減算などの算術演算や、大小比較などの論理演算を行います。"
    },

    {
        id: 33,
        category: "technology",
        question: "コンピュータの電源を切ると、原則として記憶内容が失われる主記憶装置はどれか。",
        choices: [
            "RAM",
            "ROM",
            "SSD",
            "DVD"
        ],
        answer: 0,
        explanation: "RAMは電源を切ると記憶内容が失われる揮発性メモリです。"
    },

    {
        id: 34,
        category: "technology",
        question: "電源を切っても記憶内容が保持されるメモリはどれか。",
        choices: [
            "ROM",
            "RAM",
            "キャッシュメモリ",
            "レジスタ"
        ],
        answer: 0,
        explanation: "ROMは、基本的に電源を切っても記憶内容が保持される不揮発性メモリです。"
    },

    {
        id: 35,
        category: "technology",
        question: "CPUと主記憶装置の間に配置され、CPUが頻繁に利用するデータを高速に保持するメモリはどれか。",
        choices: [
            "キャッシュメモリ",
            "DVD",
            "HDD",
            "USBメモリ"
        ],
        answer: 0,
        explanation: "キャッシュメモリはCPUと主記憶装置の速度差を補うために使用される高速なメモリです。"
    },

    {
        id: 36,
        category: "technology",
        question: "10進数の5を2進数で表したものはどれか。",
        choices: [
            "101",
            "100",
            "110",
            "111"
        ],
        answer: 0,
        explanation: "2進数の101は、4＋1＝5なので、10進数の5を表します。"
    },

    {
        id: 37,
        category: "technology",
        question: "1バイトは何ビットか。",
        choices: [
            "8ビット",
            "4ビット",
            "16ビット",
            "32ビット"
        ],
        answer: 0,
        explanation: "1バイト（Byte）は8ビット（bit）で構成されます。"
    },

    {
        id: 38,
        category: "technology",
        question: "画像を構成する最小単位の点を表す用語はどれか。",
        choices: [
            "画素",
            "セクタ",
            "パケット",
            "レコード"
        ],
        answer: 0,
        explanation: "画素（ピクセル）は、デジタル画像を構成する最小単位の点です。"
    },

    {
        id: 39,
        category: "technology",
        question: "文字や記号をコンピュータで扱うために、文字に数値を割り当てる仕組みはどれか。",
        choices: [
            "文字コード",
            "画像圧縮",
            "ファイル形式",
            "プロトコル"
        ],
        answer: 0,
        explanation: "文字コードは、文字や記号などに数値を割り当て、コンピュータで扱えるようにする仕組みです。"
    },

    {
        id: 40,
        category: "technology",
        question: "OSの役割として適切なものはどれか。",
        choices: [
            "コンピュータのハードウェアやソフトウェアを管理する",
            "商品の販売価格を決定する",
            "顧客への広告だけを行う",
            "Webサイトの文章だけを作成する"
        ],
        answer: 0,
        explanation: "OSは、CPU、メモリ、記憶装置などのハードウェアや、アプリケーションなどのソフトウェアを管理します。"
    },

    {
        id: 41,
        category: "technology",
        question: "複数のアプリケーションで共通して利用される基本的なソフトウェア部品などを提供するソフトウェアはどれか。",
        choices: [
            "ミドルウェア",
            "表計算ソフト",
            "画像編集ソフト",
            "ゲームソフト"
        ],
        answer: 0,
        explanation: "ミドルウェアは、OSとアプリケーションソフトウェアの中間に位置し、共通する機能を提供します。"
    },

    {
        id: 42,
        category: "technology",
        question: "Webページを記述するために使用される代表的な言語はどれか。",
        choices: [
            "HTML",
            "SQL",
            "Java",
            "Python"
        ],
        answer: 0,
        explanation: "HTMLは、Webページの構造や内容を記述するために使用されるマークアップ言語です。"
    },

    {
        id: 43,
        category: "technology",
        question: "Webページの文字の大きさや色、配置などの見た目を指定するために使用されるものはどれか。",
        choices: [
            "CSS",
            "SQL",
            "DNS",
            "FTP"
        ],
        answer: 0,
        explanation: "CSSは、Webページの文字色、サイズ、配置など、見た目やレイアウトを指定するために使用されます。"
    },

    {
        id: 44,
        category: "technology",
        question: "WebブラウザからWebサーバーへ要求を送信し、Webページなどを取得するために利用される代表的なプロトコルはどれか。",
        choices: [
            "HTTP",
            "SMTP",
            "FTP",
            "POP3"
        ],
        answer: 0,
        explanation: "HTTPは、WebブラウザとWebサーバーの間でWebページなどを送受信するためのプロトコルです。"
    },

    {
        id: 45,
        category: "technology",
        question: "電子メールを送信するために利用される代表的なプロトコルはどれか。",
        choices: [
            "SMTP",
            "HTTP",
            "FTP",
            "DNS"
        ],
        answer: 0,
        explanation: "SMTPは、電子メールを送信するために利用される代表的なプロトコルです。"
    },

    {
        id: 46,
        category: "technology",
        question: "ドメイン名からIPアドレスを調べる仕組みはどれか。",
        choices: [
            "DNS",
            "DHCP",
            "SMTP",
            "HTTP"
        ],
        answer: 0,
        explanation: "DNSは、www.example.comのようなドメイン名をIPアドレスに対応付けて名前解決を行う仕組みです。"
    },

    {
        id: 47,
        category: "technology",
        question: "ネットワークに接続する機器にIPアドレスなどの情報を自動的に割り当てる仕組みはどれか。",
        choices: [
            "DHCP",
            "DNS",
            "SMTP",
            "HTML"
        ],
        answer: 0,
        explanation: "DHCPは、ネットワークに接続する端末にIPアドレスなどのネットワーク設定を自動的に割り当てる仕組みです。"
    },

    {
        id: 48,
        category: "technology",
        question: "異なるネットワーク間でデータを中継する機器はどれか。",
        choices: [
            "ルータ",
            "キーボード",
            "プリンタ",
            "ディスプレイ"
        ],
        answer: 0,
        explanation: "ルータは、異なるネットワーク間でパケットを中継し、適切な経路へ転送する機器です。"
    },

    {
        id: 49,
        category: "technology",
        question: "同一ネットワーク内の機器を接続し、データを適切なポートへ転送する機器はどれか。",
        choices: [
            "スイッチ",
            "ルータ",
            "モデム",
            "プリンタ"
        ],
        answer: 0,
        explanation: "スイッチは、LAN内の機器を接続し、宛先のMACアドレスなどを利用して適切なポートへデータを転送します。"
    },

    {
        id: 50,
        category: "technology",
        question: "インターネット上で通信する際に、機器を識別するために利用される番号はどれか。",
        choices: [
            "IPアドレス",
            "メールアドレス",
            "URL",
            "ファイル名"
        ],
        answer: 0,
        explanation: "IPアドレスは、ネットワーク上の機器を識別するために利用される番号です。"
    },

    {
        id: 51,
        category: "technology",
        question: "データベースで、データを表形式で管理する方式はどれか。",
        choices: [
            "関係データベース",
            "階層型ファイル管理",
            "画像データベース",
            "音声データベース"
        ],
        answer: 0,
        explanation: "関係データベースは、データを行と列からなる表（テーブル）として管理する方式です。"
    },

    {
        id: 52,
        category: "technology",
        question: "関係データベースで、表の中の一つの行が表すものはどれか。",
        choices: [
            "レコード",
            "フィールド",
            "データベース",
            "テーブル"
        ],
        answer: 0,
        explanation: "関係データベースでは、表の1行をレコード、1列をフィールドと呼びます。"
    },

    {
        id: 53,
        category: "technology",
        question: "データベースを操作するために使用される代表的な言語はどれか。",
        choices: [
            "SQL",
            "HTML",
            "CSS",
            "SMTP"
        ],
        answer: 0,
        explanation: "SQLは、関係データベースのデータ検索、追加、更新、削除などを行うための言語です。"
    },

    {
        id: 54,
        category: "technology",
        question: "データベースにおいて、重複したデータを減らし、データの整合性を保ちやすくするために表を分割して整理することはどれか。",
        choices: [
            "正規化",
            "暗号化",
            "圧縮",
            "バックアップ"
        ],
        answer: 0,
        explanation: "正規化は、データの重複や更新時の不整合を減らすために、データベースの表を適切に分割して整理することです。"
    },

    {
        id: 55,
        category: "technology",
        question: "情報セキュリティの3要素のうち、許可された利用者が必要なときに情報を利用できることはどれか。",
        choices: [
            "可用性",
            "機密性",
            "完全性",
            "否認防止"
        ],
        answer: 0,
        explanation: "可用性は、許可された利用者が必要なときに情報やシステムを利用できることを表します。"
    },

    {
        id: 56,
        category: "technology",
        question: "情報セキュリティの3要素のうち、情報が正確で改ざんされていないことを表すものはどれか。",
        choices: [
            "完全性",
            "可用性",
            "機密性",
            "利便性"
        ],
        answer: 0,
        explanation: "完全性は、情報が正確かつ完全であり、許可されていない改ざんなどがされていないことを表します。"
    },

    {
        id: 57,
        category: "technology",
        question: "許可されていない利用者に情報を見られないようにすることを表す情報セキュリティの要素はどれか。",
        choices: [
            "機密性",
            "完全性",
            "可用性",
            "保守性"
        ],
        answer: 0,
        explanation: "機密性は、許可された利用者だけが情報にアクセスできるようにすることを表します。"
    },

    {
        id: 58,
        category: "technology",
        question: "コンピュータウイルスなどのマルウェアへの感染を防ぐための対策として適切なものはどれか。",
        choices: [
            "OSやソフトウェアを最新の状態に保つ",
            "パスワードを誰でも利用できる場所に掲示する",
            "不審なファイルを積極的に開く",
            "セキュリティソフトを無効にする"
        ],
        answer: 0,
        explanation: "OSやソフトウェアを最新の状態に保つことで、既知の脆弱性を悪用するマルウェアへの対策になります。"
    },

    {
        id: 59,
        category: "technology",
        question: "Webサイトとの通信を暗号化するために利用されるHTTPSの説明として適切なものはどれか。",
        choices: [
            "HTTPによる通信をTLSなどで保護する",
            "Webページを自動的に印刷する",
            "画像を必ず圧縮する",
            "IPアドレスを削除する"
        ],
        answer: 0,
        explanation: "HTTPSは、HTTP通信をTLSなどによって暗号化し、通信内容の盗聴や改ざんなどへの対策を行う仕組みです。"
    },

    {
        id: 60,
        category: "technology",
        question: "重要なデータを誤って削除した場合などに備えて、別の場所にデータのコピーを保存しておくことはどれか。",
        choices: [
            "バックアップ",
            "デバッグ",
            "コンパイル",
            "デフラグ"
        ],
        answer: 0,
        explanation: "バックアップは、データの紛失や破損などに備えて、別の場所にデータのコピーを保存しておくことです。"
    },

{
    id: 61,
    category: "technology",
    question: "会社のネットワークに接続されたパソコンが、Webサイトを閲覧するときに利用する代表的なプロトコルはどれか。",
    choices: [
        "HTTP",
        "FTP",
        "SMTP",
        "POP3"
    ],
    answer: 0,
    explanation: "HTTPは、WebブラウザとWebサーバーとの間でWebページなどの情報を送受信するために利用されるプロトコルです。"
},

{
    id: 62,
    category: "technology",
    question: "メールを送信するために利用される代表的なプロトコルはどれか。",
    choices: [
        "SMTP",
        "HTTP",
        "FTP",
        "DNS"
    ],
    answer: 0,
    explanation: "SMTPは、電子メールを送信するために利用される代表的なプロトコルです。"
},

{
    id: 63,
    category: "technology",
    question: "利用者がWebサイトにアクセスした際、ドメイン名に対応するIPアドレスを調べる仕組みはどれか。",
    choices: [
        "DNS",
        "DHCP",
        "NAT",
        "FTP"
    ],
    answer: 0,
    explanation: "DNSは、ドメイン名とIPアドレスを対応付けて名前解決を行う仕組みです。"
},

{
    id: 64,
    category: "technology",
    question: "社内の複数のパソコンをインターネットに接続する際、プライベートIPアドレスとグローバルIPアドレスを変換する技術はどれか。",
    choices: [
        "NAT",
        "DNS",
        "SMTP",
        "HTML"
    ],
    answer: 0,
    explanation: "NATは、プライベートIPアドレスとグローバルIPアドレスを相互に変換する技術です。"
},

{
    id: 65,
    category: "technology",
    question: "Webページの見た目や文字の大きさ、配置などを指定するために使用されるものはどれか。",
    choices: [
        "CSS",
        "SQL",
        "FTP",
        "SMTP"
    ],
    answer: 0,
    explanation: "CSSは、Webページの色、文字サイズ、配置などのデザインや表示形式を指定するために使用されます。"
},

{
    id: 66,
    category: "technology",
    question: "データベースから条件に合うデータを検索したり、データを追加・更新したりするために使用される言語はどれか。",
    choices: [
        "SQL",
        "HTML",
        "CSS",
        "SMTP"
    ],
    answer: 0,
    explanation: "SQLは、データベースの検索、追加、更新、削除などを行うための言語です。"
},

{
    id: 67,
    category: "technology",
    question: "ある会社では、重要なデータを定期的にバックアップしている。ランサムウェアによって元のデータが利用できなくなった場合、最も有効な対策はどれか。",
    choices: [
        "バックアップからデータを復元する",
        "パスワードを短くする",
        "ディスプレイを交換する",
        "マウスを交換する"
    ],
    answer: 0,
    explanation: "ランサムウェアなどによってデータが利用できなくなった場合、正常な状態のバックアップからデータを復元することが有効です。"
},

{
    id: 68,
    category: "technology",
    question: "利用者が本人であることを確認する際、パスワードに加えてスマートフォンに送られる確認コードを使用する認証方式はどれか。",
    choices: [
        "多要素認証",
        "シングルサインオン",
        "公開鍵暗号方式",
        "デジタル署名"
    ],
    answer: 0,
    explanation: "多要素認証は、パスワードなどの知識情報に加えて、スマートフォンなどの所持情報や生体情報など、複数の異なる要素を組み合わせて認証する方式です。"
},

{
    id: 69,
    category: "technology",
    question: "コンピュータウイルスに感染する可能性を低減するため、OSやソフトウェアに対して定期的に行うべき対策はどれか。",
    choices: [
        "セキュリティ更新プログラムを適用する",
        "不要なファイル名を変更する",
        "画面の明るさを変更する",
        "キーボードを交換する"
    ],
    answer: 0,
    explanation: "OSやソフトウェアの脆弱性を悪用されないよう、セキュリティ更新プログラムを適用して最新の状態に保つことが重要です。"
},

{
    id: 70,
    category: "technology",
    question: "複数の利用者が同じパスワードを使っていることが判明した。情報セキュリティ上、最も適切な対応はどれか。",
    choices: [
        "利用者ごとに異なるパスワードを設定する",
        "全員が覚えやすい短いパスワードに変更する",
        "パスワードを紙に書いて共有する",
        "パスワードを設定しない"
    ],
    answer: 0,
    explanation: "利用者ごとに異なる認証情報を設定することで、ある利用者の認証情報が漏えいした場合でも、他の利用者への影響を抑えられます。"
},

{
    id: 71,
    category: "technology",
    question: "コンピュータやネットワークに接続された機器に、インターネット上で通信するために割り当てられる識別番号はどれか。",
    choices: [
        "IPアドレス",
        "MACアドレス",
        "URL",
        "ドメイン名"
    ],
    answer: 0,
    explanation: "IPアドレスは、ネットワークに接続された機器を識別するために割り当てられる番号です。インターネット上でデータを送受信する際に、通信相手を識別するために利用されます。"
},

{
    id: 72,
    category: "technology",
    question: "コンピュータのCPUが、一度に処理できるデータのビット数を表すものはどれか。",
    choices: [
        "ワード長",
        "クロック周波数",
        "キャッシュ容量",
        "記憶容量"
    ],
    answer: 0,
    explanation: "ワード長は、CPUが1回の命令処理で扱えるデータのビット数を表します。32ビットCPUや64ビットCPUなどの表現に使われます。"
},

{
    id: 73,
    category: "technology",
    question: "Webサイトを閲覧するとき、WebブラウザとWebサーバーとの間で通信に使用される代表的なプロトコルはどれか。",
    choices: [
        "HTTP",
        "FTP",
        "SMTP",
        "POP3"
    ],
    answer: 0,
    explanation: "HTTPは、WebブラウザとWebサーバーの間でWebページなどのデータを送受信するために使用される代表的な通信プロトコルです。"
},

{
    id: 74,
    category: "technology",
    question: "データベースにおいて、表の中から条件に合うデータだけを取り出す操作はどれか。",
    choices: [
        "検索",
        "バックアップ",
        "暗号化",
        "正規化"
    ],
    answer: 0,
    explanation: "データベースでは、指定した条件に合うデータを取り出すことを検索といいます。SQLのSELECT文などを利用して実行できます。"
},
{
    id: 75,
    category: "technology",
    question: "CPUの性能を表す指標の一つであり、1秒間に実行できるクロック信号の回数を表すものはどれか。",
    choices: [
        "クロック周波数",
        "記憶容量",
        "画面解像度",
        "通信速度"
    ],
    answer: 0,
    explanation: "クロック周波数は、CPUなどの動作タイミングを決めるクロック信号の1秒当たりの回数を表し、Hzで示される。"
},
{
    id: 76,
    category: "technology",
    question: "CPUが処理を行う際に、一時的にデータや命令を高速に保持するために使用する記憶装置はどれか。",
    choices: [
        "DVD",
        "レジスタ",
        "磁気テープ",
        "外付けHDD"
    ],
    answer: 1,
    explanation: "レジスタはCPU内部にある高速な記憶領域で、演算に使うデータや命令、処理途中の値などを一時的に保持する。"
},
{
    id: 77,
    category: "technology",
    question: "複数のCPUコアを搭載することによって期待できる効果はどれか。",
    choices: [
        "必ず消費電力がゼロになる",
        "記憶装置が不要になる",
        "複数の処理を並行して実行しやすくなる",
        "すべてのプログラムの実行時間が必ず半分になる"
    ],
    answer: 2,
    explanation: "複数のCPUコアがあると、処理を並行して実行しやすくなる。ただし、性能向上の程度はプログラムの性質などによって異なる。"
},
{
    id: 78,
    category: "technology",
    question: "電源を切っても記憶内容が保持され、読み出し専用のメモリとして利用されるものはどれか。",
    choices: [
        "RAM",
        "キャッシュメモリ",
        "レジスタ",
        "ROM"
    ],
    answer: 3,
    explanation: "ROMは、電源を切っても記憶内容が保持される不揮発性メモリであり、読み出し専用の用途などに利用される。"
},
{
    id: 79,
    category: "technology",
    question: "CPUと主記憶装置の間に配置し、よく使うデータを保持して処理を高速化する記憶装置はどれか。",
    choices: [
        "キャッシュメモリ",
        "光ディスク",
        "磁気テープ",
        "プリンタバッファ"
    ],
    answer: 0,
    explanation: "キャッシュメモリは、CPUが頻繁に使うデータなどを保持し、主記憶装置へのアクセスを減らして処理を高速化する。"
},
{
    id: 80,
    category: "technology",
    question: "ハードディスクと比較したSSDの一般的な特徴はどれか。",
    choices: [
        "必ず記憶容量が小さい",
        "可動部品がなく、衝撃に比較的強い",
        "電源を切るとデータが必ず消える",
        "データを保存するために磁気ディスクを回転させる"
    ],
    answer: 1,
    explanation: "SSDはフラッシュメモリを利用した記憶装置で、一般的なHDDのような回転するディスクや可動部品を持たない。"
},
{
    id: 81,
    category: "technology",
    question: "コンピュータの性能を評価するために、実際の処理を想定したプログラムなどを実行して測定する方法はどれか。",
    choices: [
        "バックアップ",
        "デバッグ",
        "ベンチマークテスト",
        "フォーマット"
    ],
    answer: 2,
    explanation: "ベンチマークテストは、一定の処理を実行して、その結果からコンピュータやソフトウェアなどの性能を評価する方法である。"
},
{
    id: 82,
    category: "technology",
    question: "OSの役割として、最も適切なものはどれか。",
    choices: [
        "すべてのアプリケーションを自動的に開発する",
        "インターネット上の情報を必ず正しいものにする",
        "コンピュータの故障を完全に防ぐ",
        "ハードウェアやソフトウェアの資源を管理する"
    ],
    answer: 3,
    explanation: "OSは、CPUやメモリ、ファイルなどの資源を管理し、アプリケーションがコンピュータを利用するための基本的な機能を提供する。"
},
{
    id: 83,
    category: "technology",
    question: "プログラムのソースコードを機械語などに変換し、実行可能な形式を生成するソフトウェアはどれか。",
    choices: [
        "コンパイラ",
        "ブラウザ",
        "ファイアウォール",
        "データベース管理システム"
    ],
    answer: 0,
    explanation: "コンパイラは、プログラミング言語で記述されたソースコードを、機械語などの実行可能な形式に変換するソフトウェアである。"
},
{
    id: 84,
    category: "technology",
    question: "プログラムの実行中に、ソースコードを逐次解釈しながら処理する方式に関係するものはどれか。",
    choices: [
        "コンパイル方式だけを使う処理",
        "インタプリタ",
        "ディスクの初期化",
        "データの暗号化"
    ],
    answer: 1,
    explanation: "インタプリタは、プログラムを実行時に逐次解釈する方式に用いられる。実際の言語処理系によっては、コンパイルなどを組み合わせる場合もある。"
},
{
    id: 85,
    category: "technology",
    question: "コンピュータの処理方式のうち、複数の利用者がCPUの処理時間を短い単位で分け合い、対話的に処理を行う方式はどれか。",
    choices: [
        "バッチ処理",
        "タイムシェアリングシステム",
        "リアルタイム処理",
        "分散処理"
    ],
    answer: 1,
    explanation: "タイムシェアリングシステムは、CPUの処理時間を短い単位で複数の利用者や処理に割り当て、対話的な利用を可能にする方式である。"
},
{
    id: 86,
    category: "technology",
    question: "一定期間にまとめてデータを処理する方式はどれか。",
    choices: [
        "バッチ処理",
        "リアルタイム処理",
        "対話型処理",
        "並列処理"
    ],
    answer: 0,
    explanation: "バッチ処理は、データを一定量または一定期間まとめて処理する方式である。給与計算や月次集計などに利用される。"
},
{
    id: 87,
    category: "technology",
    question: "入力されたデータに対して、決められた時間内に処理結果を返すことが重要となる処理方式はどれか。",
    choices: [
        "バッチ処理",
        "オフライン処理",
        "リアルタイム処理",
        "手動処理"
    ],
    answer: 2,
    explanation: "リアルタイム処理は、入力や事象に応じて必要な処理を行い、要求される時間内に結果を返すことが重視される。"
},
{
    id: 88,
    category: "technology",
    question: "複数のコンピュータをネットワークで接続し、それぞれが処理を分担する方式はどれか。",
    choices: [
        "集中処理",
        "分散処理",
        "単一処理",
        "逐次処理"
    ],
    answer: 1,
    explanation: "分散処理は、複数のコンピュータなどに処理を分担させる方式であり、負荷分散や可用性の向上などを図れる。"
},
{
    id: 89,
    category: "technology",
    question: "システムの一部に障害が発生しても、別の機器などに処理を引き継いでサービスを継続できるようにする仕組みはどれか。",
    choices: [
        "フェールオーバー",
        "フラグメンテーション",
        "フォーマット",
        "コンパイル"
    ],
    answer: 0,
    explanation: "フェールオーバーは、稼働中のシステムに障害が発生した際、待機系などの別のシステムへ処理を切り替えてサービスの継続を図る仕組みである。"
},
{
    id: 90,
    category: "technology",
    question: "システムの障害発生時に、予備のシステムへ切り替えず、同じ機器や構成で復旧作業を行う方法に最も近いものはどれか。",
    choices: [
        "ホットスタンバイ",
        "フェールオーバー",
        "コールドスタンバイ",
        "ロードバランシング"
    ],
    answer: 2,
    explanation: "コールドスタンバイは、予備システムを通常時には稼働させず、障害時に起動や設定を行って利用する方式である。"
},
{
    id: 91,
    category: "technology",
    question: "複数のサーバに処理要求を振り分け、特定のサーバに負荷が集中しないようにする仕組みはどれか。",
    choices: [
        "ロードバランシング",
        "ミラーリング",
        "暗号化",
        "デフラグメンテーション"
    ],
    answer: 0,
    explanation: "ロードバランシングは、複数のサーバなどに処理要求を分散し、負荷の偏りを抑える仕組みである。"
},
{
    id: 92,
    category: "technology",
    question: "システムが故障せずに連続して稼働できる時間の平均を表す指標はどれか。",
    choices: [
        "MTTR",
        "MTBF",
        "RTO",
        "RPO"
    ],
    answer: 1,
    explanation: "MTBFは平均故障間隔を表し、修理して再稼働した後、次の故障までの平均的な時間を示す信頼性の指標である。"
},
{
    id: 93,
    category: "technology",
    question: "故障したシステムの修理や復旧に要する時間の平均を表す指標はどれか。",
    choices: [
        "MTBF",
        "稼働率",
        "MTTR",
        "スループット"
    ],
    answer: 2,
    explanation: "MTTRは平均修復時間を表し、故障したシステムを修理して復旧するまでに要する時間の平均を示す。"
},
{
    id: 94,
    category: "technology",
    question: "システムの稼働率を求める式として適切なものはどれか。なお、MTBFは平均故障間隔、MTTRは平均修復時間とする。",
    choices: [
        "MTTR ÷ MTBF",
        "MTBF ÷ (MTBF ＋ MTTR)",
        "MTBF ＋ MTTR",
        "MTTR ÷ (MTBF ＋ MTTR)"
    ],
    answer: 1,
    explanation: "修理可能なシステムの基本的な稼働率は、MTBF ÷ (MTBF ＋ MTTR) で求められる。"
},
{
    id: 95,
    category: "technology",
    question: "システムの信頼性を高めるため、同じ機能を持つ機器を複数用意しておくことはどれか。",
    choices: [
        "冗長化",
        "正規化",
        "暗号化",
        "圧縮"
    ],
    answer: 0,
    explanation: "冗長化は、機器や回線などを複数用意し、一部に障害が発生してもシステム全体への影響を抑えるための設計である。"
},
{
    id: 96,
    category: "technology",
    question: "データを複数の記憶装置に分散して書き込み、読み書きの性能向上を図る方式はどれか。",
    choices: [
        "ミラーリング",
        "ストライピング",
        "暗号化",
        "バックアップ"
    ],
    answer: 1,
    explanation: "ストライピングは、データを複数の記憶装置に分割して書き込む方式で、読み書きの性能向上を図れる。ただし、方式によっては冗長性を持たない。"
},
{
    id: 97,
    category: "technology",
    question: "同じデータを複数のディスクに書き込み、一方のディスクが故障してもデータを維持できるようにする方式はどれか。",
    choices: [
        "ストライピング",
        "キャッシュ",
        "ミラーリング",
        "スプーリング"
    ],
    answer: 2,
    explanation: "ミラーリングは、同じデータを複数のディスクに書き込む方式で、片方が故障した場合のデータ保護や可用性の向上に役立つ。"
},
{
    id: 98,
    category: "technology",
    question: "複数のコンピュータやサーバを連携させ、利用者からは一つのシステムのように見せる技術はどれか。",
    choices: [
        "クラスタリング",
        "デフラグメンテーション",
        "コンパイル",
        "フォーマット"
    ],
    answer: 0,
    explanation: "クラスタリングは、複数のコンピュータを連携させ、一つのシステムのように動作させる技術であり、性能や可用性の向上に利用される。"
},
{
    id: 99,
    category: "technology",
    question: "コンピュータシステムの処理能力を評価する際、単位時間当たりに処理できる仕事量を表す指標はどれか。",
    choices: [
        "応答時間",
        "スループット",
        "MTTR",
        "稼働率"
    ],
    answer: 1,
    explanation: "スループットは、単位時間当たりに処理できる仕事量を表す。一般に、スループットが高いほど多くの処理をこなせる。"
},
{
    id: 100,
    category: "technology",
    question: "利用者が処理を要求してから、システムが応答を返すまでにかかる時間を表すものはどれか。",
    choices: [
        "応答時間",
        "スループット",
        "クロック周波数",
        "記憶容量"
    ],
    answer: 0,
    explanation: "応答時間は、処理要求を行ってから結果や応答が返ってくるまでの時間を表す。"
},
{
    id: 101,
    category: "technology",
    question: "仮想化技術を利用して、1台の物理サーバ上で複数の独立した仮想マシンを動作させる利点はどれか。",
    choices: [
        "必ず通信が不要になる",
        "物理サーバの利用効率を高められる",
        "すべての障害が発生しなくなる",
        "OSの利用が不要になる"
    ],
    answer: 1,
    explanation: "サーバ仮想化により、1台の物理サーバ上で複数の仮想マシンを動作させ、ハードウェア資源の利用効率を高められる。"
},
{
    id: 102,
    category: "technology",
    question: "仮想マシンを作成・実行するために、物理的なハードウェア資源を管理するソフトウェアはどれか。",
    choices: [
        "ハイパーバイザー",
        "コンパイラ",
        "メールクライアント",
        "データベースビュー"
    ],
    answer: 0,
    explanation: "ハイパーバイザーは、仮想マシンを作成・実行し、CPUやメモリなどの物理資源を仮想マシンに割り当てる役割を持つ。"
},
{
    id: 103,
    category: "technology",
    question: "クラウドサービスのうち、利用者がアプリケーションをインターネット経由で利用する形態はどれか。",
    choices: [
        "IaaS",
        "PaaS",
        "SaaS",
        "LAN"
    ],
    answer: 2,
    explanation: "SaaSは、提供事業者が用意したアプリケーションを、ネットワーク経由で利用するサービス形態である。"
},
{
    id: 104,
    category: "technology",
    question: "クラウドサービスのうち、アプリケーションを開発・実行するためのプラットフォームを提供する形態はどれか。",
    choices: [
        "SaaS",
        "PaaS",
        "IaaS",
        "WAN"
    ],
    answer: 1,
    explanation: "PaaSは、アプリケーションの開発や実行に必要な環境をサービスとして提供する形態である。"
},
{
    id: 105,
    category: "technology",
    question: "クラウドサービスのうち、仮想サーバやストレージ、ネットワークなどのIT基盤を提供する形態はどれか。",
    choices: [
        "SaaS",
        "PaaS",
        "IaaS",
        "グループウェア"
    ],
    answer: 2,
    explanation: "IaaSは、サーバ、ストレージ、ネットワークなどのIT基盤をサービスとして提供する形態である。"
},
{
    id: 106,
    category: "technology",
    question: "複数のコンピュータをネットワークで接続し、データやプリンタなどの資源を共有する仕組みはどれか。",
    choices: [
        "コンピュータネットワーク",
        "コンパイラ",
        "デフラグメンテーション",
        "データ圧縮"
    ],
    answer: 0,
    explanation: "コンピュータネットワークは、複数のコンピュータや機器を接続し、データや資源を相互に利用できるようにする仕組みである。"
},
{
    id: 107,
    category: "technology",
    question: "限られた範囲内のコンピュータや機器を接続するネットワークはどれか。",
    choices: [
        "WAN",
        "LAN",
        "インターネット",
        "VPN"
    ],
    answer: 1,
    explanation: "LANは、家庭や学校、オフィスなど、限られた範囲内の機器を接続するネットワークである。"
},
{
    id: 108,
    category: "technology",
    question: "離れた地域にある複数のLANなどを接続する広域ネットワークはどれか。",
    choices: [
        "PAN",
        "LAN",
        "WAN",
        "SAN"
    ],
    answer: 2,
    explanation: "WANは、地理的に離れた拠点のネットワークなどを接続する広域ネットワークである。"
},
{
    id: 109,
    category: "technology",
    question: "ネットワーク上の機器を識別するために使用されるIPアドレスの説明として適切なものはどれか。",
    choices: [
        "ネットワーク上で機器や接続先を識別するために使われる論理的なアドレスである",
        "コンピュータの画面の大きさを示す",
        "ファイルの圧縮率を示す",
        "CPUの動作周波数を示す"
    ],
    answer: 0,
    explanation: "IPアドレスは、IPネットワーク上で通信相手などを識別するために使われる論理的なアドレスである。"
},
{
    id: 110,
    category: "technology",
    question: "ドメイン名とIPアドレスを対応付ける仕組みはどれか。",
    choices: [
        "DHCP",
        "DNS",
        "SMTP",
        "FTP"
    ],
    answer: 1,
    explanation: "DNSは、ドメイン名とIPアドレスなどを対応付け、名前から接続先を特定できるようにする仕組みである。"
},
{
    id: 111,
    category: "technology",
    question: "Webページを取得する際に、WebブラウザとWebサーバの間で主に使用されるプロトコルはどれか。",
    choices: [
        "SMTP",
        "POP3",
        "HTTP",
        "DHCP"
    ],
    answer: 2,
    explanation: "HTTPは、WebブラウザなどのクライアントとWebサーバとの間で、Webページなどの情報をやり取りするためのプロトコルである。"
},
{
    id: 112,
    category: "technology",
    question: "電子メールを送信する際に一般的に使用されるプロトコルはどれか。",
    choices: [
        "SMTP",
        "HTTP",
        "DNS",
        "DHCP"
    ],
    answer: 0,
    explanation: "SMTPは、電子メールを送信したり、メールサーバ間で転送したりする際に使用されるプロトコルである。"
},
{
    id: 113,
    category: "technology",
    question: "電子メールを受信する際に、メールサーバ上のメールを端末にダウンロードする方式で使用されるプロトコルはどれか。",
    choices: [
        "FTP",
        "POP3",
        "SMTP",
        "HTTP"
    ],
    answer: 1,
    explanation: "POP3は、メールサーバから電子メールを受信するためのプロトコルであり、端末へのダウンロードに利用される。"
},
{
    id: 114,
    category: "technology",
    question: "電子メールをサーバ上に保存したまま、複数の端末からメールボックスを管理しやすい受信方式で使用されるプロトコルはどれか。",
    choices: [
        "DHCP",
        "FTP",
        "IMAP",
        "ARP"
    ],
    answer: 2,
    explanation: "IMAPは、メールをサーバ上に保存したまま、複数の端末からメールボックスを参照・管理する用途に適したプロトコルである。"
},
{
    id: 115,
    category: "technology",
    question: "コンピュータ間でファイルを転送するために利用される代表的なプロトコルはどれか。",
    choices: [
        "FTP",
        "SMTP",
        "DNS",
        "DHCP"
    ],
    answer: 0,
    explanation: "FTPは、ネットワークを介してファイルを転送するためのプロトコルである。通常のFTP通信自体には暗号化がないため、保護が必要な場合はSFTPなど別の方式が使われる。"
},
{
    id: 116,
    category: "technology",
    question: "ネットワーク上の通信を暗号化し、安全なリモートアクセスなどに利用される仮想的な専用ネットワークはどれか。",
    choices: [
        "LAN",
        "VPN",
        "DNS",
        "NAT"
    ],
    answer: 1,
    explanation: "VPNは、インターネットなどのネットワーク上に暗号化などを用いた仮想的な専用通信経路を構築する技術である。"
},
{
    id: 117,
    category: "technology",
    question: "異なるネットワーク同士を接続し、IPパケットの転送経路を選択する機器はどれか。",
    choices: [
        "ハブ",
        "リピータ",
        "ルータ",
        "キーボード"
    ],
    answer: 2,
    explanation: "ルータは、IPアドレスなどの情報を基に、異なるネットワーク間でパケットを転送する機器である。"
},
{
    id: 118,
    category: "technology",
    question: "LAN内で受信したフレームの宛先MACアドレスなどを基に転送先を判断する機器はどれか。",
    choices: [
        "スイッチングハブ",
        "モデム",
        "プリンタ",
        "スキャナ"
    ],
    answer: 0,
    explanation: "スイッチングハブは、MACアドレスなどを基にフレームの転送先ポートを判断し、LAN内の通信を中継する。"
},
{
    id: 119,
    category: "technology",
    question: "受信した信号を増幅・再生して、ネットワークの伝送距離を延ばすために使われる機器はどれか。",
    choices: [
        "ルータ",
        "リピータ",
        "ファイアウォール",
        "プロキシサーバ"
    ],
    answer: 1,
    explanation: "リピータは、受信した信号を再生して中継し、通信可能な距離を延ばすために利用される。"
},
{
    id: 120,
    category: "technology",
    question: "通信回線の伝送速度を表す単位として一般的に使用されるものはどれか。",
    choices: [
        "dpi",
        "GHz",
        "bps",
        "リットル"
    ],
    answer: 2,
    explanation: "bpsは、1秒間に伝送できるビット数を表す単位であり、通信回線の伝送速度などに使用される。"
},
{
    id: 121,
    category: "technology",
    question: "通信で一度に送信するデータ量や、通信のまとまりを表す用語として適切なものはどれか。",
    choices: [
        "パケット",
        "ピクセル",
        "セクタ",
        "レジスタ"
    ],
    answer: 0,
    explanation: "パケットは、ネットワーク通信でデータを分割して送受信する際の単位の一つである。"
},
{
    id: 122,
    category: "technology",
    question: "ネットワークに接続する機器に固有の識別情報として割り当てられ、LAN内のフレーム転送などに利用されるアドレスはどれか。",
    choices: [
        "URL",
        "MACアドレス",
        "メールアドレス",
        "ドメイン名"
    ],
    answer: 1,
    explanation: "MACアドレスは、ネットワークインタフェースに割り当てられる識別情報で、イーサネットなどのLAN内でフレームを転送する際に利用される。"
},
{
    id: 123,
    category: "technology",
    question: "インターネット上で、Webページなどの場所やアクセス方法を示す文字列はどれか。",
    choices: [
        "CPU",
        "RAM",
        "URL",
        "SQL"
    ],
    answer: 2,
    explanation: "URLは、Webページなどの資源の場所やアクセス方法を示すために使用される文字列である。"
},
{
    id: 124,
    category: "technology",
    question: "IPv4で使用されるIPアドレスのビット長はどれか。",
    choices: [
        "16ビット",
        "32ビット",
        "64ビット",
        "128ビット"
    ],
    answer: 1,
    explanation: "IPv4のIPアドレスは32ビットで構成される。なお、IPv6のIPアドレスは128ビットである。"
},
{
    id: 125,
    category: "technology",
    question: "IPv6のIPアドレスのビット長はどれか。",
    choices: [
        "32ビット",
        "64ビット",
        "128ビット",
        "256ビット"
    ],
    answer: 2,
    explanation: "IPv6のIPアドレスは128ビットで構成され、IPv4の32ビットよりも多くのアドレスを利用できる。"
},
{
    id: 126,
    category: "technology",
    question: "IPv4で、プライベートネットワーク内のIPアドレスとインターネット側のIPアドレスを変換する技術はどれか。",
    choices: [
        "DNS",
        "NAT",
        "SMTP",
        "FTP"
    ],
    answer: 1,
    explanation: "NATはIPアドレスを変換する技術であり、プライベートIPアドレスとグローバルIPアドレスの変換などに利用される。"
},
{
    id: 127,
    category: "technology",
    question: "組織内のネットワークからインターネットへの通信などを中継し、アクセス制御やキャッシュを行うことがあるサーバはどれか。",
    choices: [
        "プロキシサーバ",
        "プリントサーバ",
        "ファイルサーバ",
        "メールクライアント"
    ],
    answer: 0,
    explanation: "プロキシサーバは、クライアントに代わって外部サーバと通信する中継サーバであり、アクセス制御やキャッシュなどに利用される。"
},
{
    id: 128,
    category: "technology",
    question: "組織の内部ネットワークと外部ネットワークの間に設置し、通信を監視して許可されていない通信を遮断する仕組みはどれか。",
    choices: [
        "ロードバランサ",
        "ファイアウォール",
        "コンパイラ",
        "データベース"
    ],
    answer: 1,
    explanation: "ファイアウォールは、通信ルールに基づいてネットワーク通信を許可または遮断し、不正なアクセスを防ぐために利用される。"
},
{
    id: 129,
    category: "technology",
    question: "ネットワーク上の通信を監視し、不正なアクセスや攻撃の兆候を検知して管理者に通知する仕組みはどれか。",
    choices: [
        "IDS",
        "DHCP",
        "DNS",
        "NAT"
    ],
    answer: 0,
    explanation: "IDSは侵入検知システムであり、ネットワークやコンピュータを監視して不正な活動を検知し、管理者に通知する。"
},
{
    id: 130,
    category: "technology",
    question: "不正な通信を検知するだけでなく、設定に応じて通信を遮断する機能を持つ仕組みはどれか。",
    choices: [
        "DNS",
        "IPS",
        "DHCP",
        "SMTP"
    ],
    answer: 1,
    explanation: "IPSは侵入防止システムであり、不正な通信を検知し、設定に応じて通信を遮断するなどの防御を行う。"
},
{
    id: 131,
    category: "technology",
    question: "情報セキュリティの三大要素に含まれるものはどれか。",
    choices: [
        "機密性・完全性・可用性",
        "速度・価格・デザイン",
        "入力・演算・出力",
        "計画・実行・販売"
    ],
    answer: 0,
    explanation: "情報セキュリティの三大要素は、機密性、完全性、可用性である。"
},
{
    id: 132,
    category: "technology",
    question: "情報へのアクセスを許可された人だけに制限し、許可されていない人には利用させない性質はどれか。",
    choices: [
        "可用性",
        "完全性",
        "機密性",
        "保守性"
    ],
    answer: 2,
    explanation: "機密性は、情報へのアクセスを認められた者だけが情報を利用できるようにする性質である。"
},
{
    id: 133,
    category: "technology",
    question: "情報が正確であり、不正な改ざんや破壊を受けていない状態を維持する性質はどれか。",
    choices: [
        "完全性",
        "機密性",
        "可用性",
        "移植性"
    ],
    answer: 0,
    explanation: "完全性は、情報が正確で完全な状態に保たれ、不正な改ざんなどが行われていない性質である。"
},
{
    id: 134,
    category: "technology",
    question: "必要なときに情報やシステムを利用できる状態を維持する性質はどれか。",
    choices: [
        "機密性",
        "可用性",
        "完全性",
        "匿名性"
    ],
    answer: 1,
    explanation: "可用性は、利用者が必要なときに情報やシステムを利用できる性質である。"
},
{
    id: 135,
    category: "technology",
    question: "利用者本人であることを確認するために、パスワードに加えてスマートフォンの認証コードも利用する方法はどれか。",
    choices: [
        "単一認証",
        "多要素認証",
        "データ圧縮",
        "アクセスログ"
    ],
    answer: 1,
    explanation: "多要素認証は、知識情報、所持情報、生体情報など、異なる種類の要素を組み合わせて本人確認を行う方式である。"
},
{
    id: 136,
    category: "technology",
    question: "利用者が知っている情報を用いて本人確認を行う認証要素はどれか。",
    choices: [
        "指紋",
        "ICカード",
        "パスワード",
        "顔の特徴"
    ],
    answer: 2,
    explanation: "パスワードは、本人だけが知っていることを前提とする知識情報による認証要素である。"
},
{
    id: 137,
    category: "technology",
    question: "利用者が所持している物を用いて本人確認を行う認証要素はどれか。",
    choices: [
        "暗証番号",
        "秘密の質問の答え",
        "指紋",
        "ICカード"
    ],
    answer: 3,
    explanation: "ICカードや認証用トークンなどは、本人が所持していることを利用する所持情報による認証要素である。"
},
{
    id: 138,
    category: "technology",
    question: "指紋や顔の特徴など、身体的な特徴を利用して本人確認を行う認証方式はどれか。",
    choices: [
        "生体認証",
        "パスワード認証",
        "電子署名",
        "アクセス制御リスト"
    ],
    answer: 0,
    explanation: "生体認証は、指紋、顔、虹彩、声など、身体的または行動的な特徴を利用して本人確認を行う方式である。"
},
{
    id: 139,
    category: "technology",
    question: "利用者が一度認証を受けると、連携する複数のシステムを追加のログイン操作なしで利用できる仕組みはどれか。",
    choices: [
        "シングルサインオン",
        "二重化",
        "ミラーリング",
        "バッチ処理"
    ],
    answer: 0,
    explanation: "シングルサインオンは、一度の認証で、連携する複数のシステムやサービスを利用できるようにする仕組みである。"
},
{
    id: 140,
    category: "technology",
    question: "通信相手が正当な相手であることを確認し、通信内容の暗号化などにも利用される電子的な証明書はどれか。",
    choices: [
        "バックアップファイル",
        "デジタル証明書",
        "ログファイル",
        "圧縮ファイル"
    ],
    answer: 1,
    explanation: "デジタル証明書は、公開鍵とその所有者などの情報を結び付け、認証局などによって発行される電子的な証明書である。"
},
{
    id: 141,
    category: "technology",
    question: "送信者が秘密鍵を用いて作成し、データの改ざん検知や送信者の確認に利用されるものはどれか。",
    choices: [
        "電子署名",
        "データ圧縮",
        "IPアドレス",
        "バックアップ"
    ],
    answer: 0,
    explanation: "電子署名は、公開鍵暗号方式などを利用して、データの作成者の確認や改ざんの検知を可能にする仕組みである。"
},
{
    id: 142,
    category: "technology",
    question: "元のデータから一定の計算によって生成され、データの改ざん検知などに利用できる固定長の値はどれか。",
    choices: [
        "IPアドレス",
        "ハッシュ値",
        "URL",
        "ポート番号"
    ],
    answer: 1,
    explanation: "ハッシュ値は、ハッシュ関数によってデータから計算される値であり、データの同一性確認や改ざん検知などに利用される。"
},
{
    id: 143,
    category: "technology",
    question: "通信内容を第三者に読み取られないように、一定の規則に従ってデータを変換することはどれか。",
    choices: [
        "認証",
        "監査",
        "暗号化",
        "索引付け"
    ],
    answer: 2,
    explanation: "暗号化は、鍵などを用いてデータを変換し、適切な鍵を持たない第三者に内容を読み取られにくくする技術である。"
},
{
    id: 144,
    category: "technology",
    question: "暗号化と復号に同じ鍵を使用する暗号方式はどれか。",
    choices: [
        "公開鍵暗号方式",
        "共通鍵暗号方式",
        "電子署名方式",
        "ハッシュ方式"
    ],
    answer: 1,
    explanation: "共通鍵暗号方式は、暗号化と復号に同じ鍵を使用する方式であり、一般に処理が高速である。"
},
{
    id: 145,
    category: "technology",
    question: "公開鍵暗号方式において、公開鍵で暗号化したデータを復号するために使用する鍵はどれか。",
    choices: [
        "別の利用者の公開鍵",
        "暗号化に使用した公開鍵と同じ鍵",
        "対応する秘密鍵",
        "ハッシュ値"
    ],
    answer: 2,
    explanation: "公開鍵暗号方式では、公開鍵と秘密鍵の組を使用する。公開鍵で暗号化したデータは、対応する秘密鍵で復号する。"
},
{
    id: 146,
    category: "technology",
    question: "共通鍵暗号方式と比較した公開鍵暗号方式の一般的な特徴はどれか。",
    choices: [
        "暗号化や復号の処理が常に高速である",
        "鍵の受け渡しに関する課題を軽減できる",
        "鍵を一切使用しない",
        "データの暗号化ができない"
    ],
    answer: 1,
    explanation: "公開鍵暗号方式では公開鍵を相手に配布できるため、共通鍵暗号方式における共通鍵の安全な受け渡しに関する課題を軽減できる。一般に処理速度は共通鍵暗号方式より遅い。"
},
{
    id: 147,
    category: "technology",
    question: "データの作成者の確認や、データが改ざんされていないことの検証に利用される技術はどれか。",
    choices: [
        "電子署名",
        "データ圧縮",
        "ファイル分割",
        "ディスクの最適化"
    ],
    answer: 0,
    explanation: "電子署名は、公開鍵暗号技術などを利用して、データの作成者の確認や改ざんの検知を可能にする仕組みである。"
},
{
    id: 148,
    category: "technology",
    question: "電子メールの送信元ドメインについて、送信を許可されたメールサーバから送信されたかを確認する仕組みはどれか。",
    choices: [
        "DHCP",
        "SPF",
        "FTP",
        "RAID"
    ],
    answer: 1,
    explanation: "SPFは、送信元ドメインの管理者が許可したメールサーバから送信されたかを、受信側が確認するための仕組みである。"
},
{
    id: 149,
    category: "technology",
    question: "電子メールに電子署名を付与し、受信側が公開鍵を用いて署名を検証する仕組みはどれか。",
    choices: [
        "DNS",
        "IMAP",
        "DKIM",
        "DHCP"
    ],
    answer: 2,
    explanation: "DKIMは、送信側が電子メールに電子署名を付け、受信側が公開鍵を用いて署名を検証することで、メールの改ざん検知などに役立てる仕組みである。"
},
{
    id: 150,
    category: "technology",
    question: "SPFやDKIMの検証結果などに基づいて、認証に失敗したメールの扱いを受信側に示す仕組みはどれか。",
    choices: [
        "DMARC",
        "POP3",
        "NAT",
        "SQL"
    ],
    answer: 0,
    explanation: "DMARCは、SPFやDKIMの検証結果などに基づき、認証に失敗したメールを受信側がどのように扱うかを判断するための仕組みである。"
},
{
    id: 151,
    category: "technology",
    question: "コンピュータウイルスなどの不正なプログラムを検出・隔離するために利用されるソフトウェアはどれか。",
    choices: [
        "表計算ソフト",
        "ウイルス対策ソフト",
        "プレゼンテーションソフト",
        "コンパイラ"
    ],
    answer: 1,
    explanation: "ウイルス対策ソフトは、不正なプログラムを検出・隔離・駆除するなどして、コンピュータをマルウェアから保護するために利用される。"
},
{
    id: 152,
    category: "technology",
    question: "正規の組織やサービスを装ったメールやWebサイトを使い、利用者の認証情報などを盗み取ろうとする攻撃はどれか。",
    choices: [
        "フィッシング",
        "デフラグメンテーション",
        "ロードバランシング",
        "バックアップ"
    ],
    answer: 0,
    explanation: "フィッシングは、正規の組織やサービスを装い、利用者を偽のWebサイトなどに誘導して、認証情報や個人情報をだまし取ろうとする攻撃である。"
},
{
    id: 153,
    category: "technology",
    question: "利用者の情報や操作などを秘密裏に収集することを目的とする不正なソフトウェアはどれか。",
    choices: [
        "表計算ソフト",
        "スパイウェア",
        "データベース管理システム",
        "バックアップソフト"
    ],
    answer: 1,
    explanation: "スパイウェアは、利用者の情報や操作などを秘密裏に収集することを目的とする不正なソフトウェアである。"
},
{
    id: 154,
    category: "technology",
    question: "データを暗号化するなどして利用できない状態にし、復旧と引き換えに金銭などを要求するマルウェアはどれか。",
    choices: [
        "アドウェア",
        "ランサムウェア",
        "ファームウェア",
        "ミドルウェア"
    ],
    answer: 1,
    explanation: "ランサムウェアは、データを暗号化するなどして利用できない状態にし、復旧と引き換えに身代金などを要求するマルウェアである。"
},
{
    id: 155,
    category: "technology",
    question: "ほかのプログラムに寄生せず、ネットワークなどを通じて自律的に拡散する特徴を持つマルウェアはどれか。",
    choices: [
        "ワーム",
        "トロイの木馬",
        "スパイウェア",
        "アドウェア"
    ],
    answer: 0,
    explanation: "ワームは、ほかのプログラムに寄生しなくても、ネットワークなどを通じて自律的に拡散する特徴を持つマルウェアである。"
},
{
    id: 156,
    category: "technology",
    question: "一見すると正規のソフトウェアなどに見せかけ、利用者に実行させることで不正な活動を行うマルウェアはどれか。",
    choices: [
        "ワーム",
        "トロイの木馬",
        "ファイアウォール",
        "ハイパーバイザー"
    ],
    answer: 1,
    explanation: "トロイの木馬は、正規のプログラムなどを装い、利用者に実行させることで不正な活動を行うマルウェアである。"
},
{
    id: 157,
    category: "technology",
    question: "多数の機器から大量の通信を集中させ、サーバやネットワークのサービス提供を妨害する攻撃はどれか。",
    choices: [
        "デフラグメンテーション",
        "DDoS攻撃",
        "データ圧縮",
        "電子署名"
    ],
    answer: 1,
    explanation: "DDoS攻撃は、複数の機器から大量の通信を集中させ、対象のサーバやネットワークのサービス提供を妨害する攻撃である。"
},
{
    id: 158,
    category: "technology",
    question: "Webアプリケーションへの入力値を悪用し、データベースに意図しないSQL文を実行させようとする攻撃はどれか。",
    choices: [
        "SQLインジェクション",
        "フィッシング",
        "ブルートフォース攻撃",
        "盗聴"
    ],
    answer: 0,
    explanation: "SQLインジェクションは、入力値の処理などの不備を悪用し、意図しないSQL文を実行させてデータの窃取や改ざんなどを試みる攻撃である。"
},
{
    id: 159,
    category: "technology",
    question: "Webサイトの脆弱性を悪用して悪意のあるスクリプトを埋め込み、閲覧者のブラウザで実行させる攻撃はどれか。",
    choices: [
        "クロスサイトスクリプティング",
        "NAT",
        "RAID",
        "スプーリング"
    ],
    answer: 0,
    explanation: "クロスサイトスクリプティング（XSS）は、Webサイトの入力値処理などの不備を悪用し、閲覧者のブラウザで悪意のあるスクリプトを実行させる攻撃である。"
},
{
    id: 160,
    category: "technology",
    question: "考えられる文字列の組合せを総当たりで試し、パスワードなどを特定しようとする攻撃はどれか。",
    choices: [
        "ブルートフォース攻撃",
        "ロードバランシング",
        "データ圧縮",
        "ミラーリング"
    ],
    answer: 0,
    explanation: "ブルートフォース攻撃は、可能な文字列の組合せを総当たりで試し、パスワードなどを特定しようとする攻撃である。"
},
{
    id: 161,
    category: "technology",
    question: "よく使われるパスワード候補の一覧を利用して、ログインを試みる攻撃はどれか。",
    choices: [
        "辞書攻撃",
        "DDoS攻撃",
        "SQLインジェクション",
        "中間者攻撃"
    ],
    answer: 0,
    explanation: "辞書攻撃は、辞書に載っている単語やよく使われるパスワードなどを候補として、認証を突破しようとする攻撃である。"
},
{
    id: 162,
    category: "technology",
    question: "通信する二者の間に攻撃者が介在し、通信内容を盗み見たり改ざんしたりする攻撃はどれか。",
    choices: [
        "中間者攻撃",
        "バックアップ",
        "コンパイル",
        "正規化"
    ],
    answer: 0,
    explanation: "中間者攻撃は、通信する二者の間に攻撃者が介在し、通信内容の盗聴や改ざんなどを試みる攻撃である。"
},
{
    id: 163,
    category: "technology",
    question: "ソフトウェアやOSの不具合、脆弱性などを修正するために提供される更新プログラムはどれか。",
    choices: [
        "パッチ",
        "クエリ",
        "セクタ",
        "プロトコル"
    ],
    answer: 0,
    explanation: "パッチは、ソフトウェアの不具合や脆弱性などを修正するために配布される更新プログラムである。"
},
{
    id: 164,
    category: "technology",
    question: "利用者の権限に応じて、情報やシステム資源へのアクセスを許可または拒否する仕組みはどれか。",
    choices: [
        "アクセス制御",
        "データ圧縮",
        "スケジューリング",
        "フォーマット"
    ],
    answer: 0,
    explanation: "アクセス制御は、利用者やプログラムなどの権限に応じて、情報やシステム資源へのアクセスを許可または拒否する仕組みである。"
},
{
    id: 165,
    category: "technology",
    question: "ファイアウォールの主な役割はどれか。",
    choices: [
        "ネットワーク通信を監視し、許可されていない通信を遮断する",
        "コンピュータの画面を明るくする",
        "ファイルの圧縮率を高める",
        "プリンタの印刷速度を向上させる"
    ],
    answer: 0,
    explanation: "ファイアウォールは、通信ルールに基づいてネットワークへのアクセスを制御し、不正な通信を遮断する仕組みである。"
},
{
    id: 166,
    category: "technology",
    question: "VPNの説明として、適切なものはどれか。",
    choices: [
        "コンピュータの記憶容量を増やす技術",
        "公衆ネットワークなどを利用して、仮想的な専用通信路を構築する技術",
        "画像ファイルを自動的に圧縮する技術",
        "Webページの文字を自動翻訳する技術"
    ],
    answer: 1,
    explanation: "VPNは、暗号化などの技術を用いて、インターネットなどのネットワーク上に仮想的な専用通信路を構築する技術である。"
},
{
    id: 167,
    category: "technology",
    question: "無線LANの通信を保護するために利用されるWPA3の主な目的はどれか。",
    choices: [
        "無線通信のセキュリティを強化する",
        "無線LANの電波を必ず遠くまで届かせる",
        "接続する端末の画面サイズを統一する",
        "通信料金を無料にする"
    ],
    answer: 0,
    explanation: "WPA3は、無線LANの通信を保護するためのセキュリティ規格であり、認証や暗号化の安全性を高める。"
},
{
    id: 168,
    category: "technology",
    question: "多要素認証の説明として、適切なものはどれか。",
    choices: [
        "同じパスワードを複数回入力する認証方式",
        "複数のWebサイトで同じIDを使う方式",
        "異なる種類の認証要素を組み合わせる方式",
        "利用者の名前だけで本人確認する方式"
    ],
    answer: 2,
    explanation: "多要素認証は、知識情報、所持情報、生体情報など、異なる種類の要素を組み合わせて本人確認を行う方式である。"
},
{
    id: 169,
    category: "technology",
    question: "生体認証に該当するものはどれか。",
    choices: [
        "暗証番号の入力",
        "指紋による本人確認",
        "ICカードの提示",
        "秘密の質問への回答"
    ],
    answer: 1,
    explanation: "生体認証は、指紋、顔、声、虹彩など、個人の身体的・行動的特徴を利用して本人確認を行う方式である。"
},
{
    id: 170,
    category: "technology",
    question: "シングルサインオン（SSO）の利点はどれか。",
    choices: [
        "一度の認証で複数の対応システムを利用できる",
        "すべてのシステムでパスワードを不要にできる",
        "通信速度を必ず2倍にできる",
        "すべてのファイルを自動的に暗号化できる"
    ],
    answer: 0,
    explanation: "シングルサインオンは、一度の認証で複数のシステムやサービスを利用できる仕組みであり、利用者の利便性を高める。"
},
{
    id: 171,
    category: "technology",
    question: "アクセスログを記録する主な目的はどれか。",
    choices: [
        "画面の配色を自動的に変更する",
        "利用者の操作やシステムへのアクセスを記録し、監査や障害調査に役立てる",
        "ファイルの容量を必ず半分にする",
        "コンピュータの電源を自動的に切る"
    ],
    answer: 1,
    explanation: "アクセスログには、利用者やアクセス日時、操作内容などが記録され、不正利用の調査や監査、障害原因の特定に役立つ。"
},
{
    id: 172,
    category: "technology",
    question: "情報セキュリティにおける可用性の説明として、適切なものはどれか。",
    choices: [
        "情報が許可された人にだけ開示されること",
        "情報が正確で改ざんされていないこと",
        "情報やシステムを必要なときに利用できること",
        "情報を必ず紙に印刷できること"
    ],
    answer: 2,
    explanation: "可用性は、利用者が必要とするときに情報やシステムを利用できる状態を確保することである。機密性、完全性とともに情報セキュリティの重要な要素である。"
},
{
    id: 173,
    category: "technology",
    question: "情報セキュリティにおける完全性を損なう行為はどれか。",
    choices: [
        "権限のない人がデータを無断で書き換える",
        "利用者が正しいパスワードを入力する",
        "定期的にデータのバックアップを取る",
        "通信内容を暗号化する"
    ],
    answer: 0,
    explanation: "完全性は、情報が正確であり、改ざんや破壊を受けていない状態を保つことである。無断の書換えは完全性を損なう。"
},
{
    id: 174,
    category: "technology",
    question: "情報セキュリティにおける機密性を確保する対策はどれか。",
    choices: [
        "障害時に備えて予備のサーバを用意する",
        "許可された利用者だけが情報を閲覧できるようにする",
        "データの誤りを定期的に検査する",
        "停電に備えて無停電電源装置を設置する"
    ],
    answer: 1,
    explanation: "機密性は、許可された者だけが情報にアクセスできるようにすることである。アクセス権限の設定や暗号化などが対策となる。"
},
{
    id: 175,
    category: "technology",
    question: "バックアップを定期的に取得する主な目的はどれか。",
    choices: [
        "コンピュータの処理速度を必ず向上させる",
        "パスワードを自動的に強化する",
        "データが消失した場合に復旧できるようにする",
        "ウイルスの侵入を完全に防ぐ"
    ],
    answer: 2,
    explanation: "バックアップは、誤操作、機器故障、災害、マルウェア感染などによるデータ消失に備え、データを復旧できるようにするために取得する。"
},
{
    id: 176,
    category: "technology",
    question: "RAID 1の特徴として、適切なものはどれか。",
    choices: [
        "複数のディスクに同じデータを書き込み、冗長性を確保する",
        "データを必ず一つのディスクだけに保存する",
        "データを圧縮して保存容量を増やす",
        "ネットワーク通信を暗号化する"
    ],
    answer: 0,
    explanation: "RAID 1はミラーリングとも呼ばれ、複数のディスクに同じデータを書き込むことで、ディスク故障に対する耐障害性を高める。"
},
{
    id: 177,
    category: "technology",
    question: "UPS（無停電電源装置）の主な役割はどれか。",
    choices: [
        "ネットワーク上の不正通信を検出する",
        "停電時に一定時間、機器へ電力を供給する",
        "データベースの検索を高速化する",
        "画面表示の解像度を高める"
    ],
    answer: 1,
    explanation: "UPSは停電などが発生した際に、接続された機器へ一定時間電力を供給し、安全な停止やデータ保護を支援する装置である。"
},
{
    id: 178,
    category: "technology",
    question: "システムの可用性を高めるための対策はどれか。",
    choices: [
        "重要なサーバを1台だけ設置し、予備を用意しない",
        "障害発生時に備えて冗長構成にする",
        "すべてのバックアップを同じディスクだけに保存する",
        "障害時の連絡手順を作らない"
    ],
    answer: 1,
    explanation: "冗長構成では、機器や回線などに予備を設け、故障が発生してもサービスを継続しやすくすることで可用性を高める。"
},
{
    id: 179,
    category: "technology",
    question: "クラウドコンピューティングの特徴として、適切なものはどれか。",
    choices: [
        "利用するIT資源をネットワーク経由で必要に応じて利用できる",
        "必ず自社の建物内にサーバを設置しなければならない",
        "利用開始前にすべての機器を購入する必要がある",
        "インターネットに接続せずにしか利用できない"
    ],
    answer: 0,
    explanation: "クラウドコンピューティングは、サーバ、ストレージ、ソフトウェアなどのIT資源をネットワーク経由で必要に応じて利用する形態である。"
},
{
    id: 180,
    category: "technology",
    question: "SaaSの説明として、適切なものはどれか。",
    choices: [
        "利用者が物理サーバを必ず購入するサービス",
        "ネットワーク経由でソフトウェアの機能を利用するサービス",
        "CPUの製造工程を管理する仕組み",
        "通信ケーブルの規格を定める方式"
    ],
    answer: 1,
    explanation: "SaaSは、ソフトウェアをサービスとしてネットワーク経由で提供する形態である。利用者は一般に、ソフトウェアのインストールやサーバ管理の負担を軽減できる。"
},
{
    id: 181,
    category: "technology",
    question: "IaaSの説明として、適切なものはどれか。",
    choices: [
        "完成した業務ソフトウェアだけを提供する形態",
        "利用者の代わりにすべての業務判断を行う仕組み",
        "サーバやストレージなどのIT基盤をサービスとして提供する形態",
        "紙の書類を電子メールで送付する方式"
    ],
    answer: 2,
    explanation: "IaaSは、仮想サーバ、ストレージ、ネットワークなどのIT基盤をサービスとして提供する形態である。利用者はその上にOSやアプリケーションなどを構築できる。"
},
{
    id: 182,
    category: "technology",
    question: "仮想化技術を利用する利点として、適切なものはどれか。",
    choices: [
        "1台の物理サーバ上で複数の仮想マシンを動作させ、資源を有効活用できる",
        "コンピュータに障害が発生しなくなる",
        "すべてのソフトウェアの利用料金が無料になる",
        "ネットワークのセキュリティ対策が不要になる"
    ],
    answer: 0,
    explanation: "仮想化技術を使うと、1台の物理サーバ上で複数の仮想マシンを動作させられるため、ハードウェア資源を効率的に利用できる。"
},
{
    id: 183,
    category: "technology",
    question: "コンテナ型仮想化の特徴として、適切なものはどれか。",
    choices: [
        "各アプリケーションが必ず専用の物理サーバを必要とする",
        "アプリケーションと実行に必要な環境をまとめて扱いやすい",
        "コンテナを利用するとネットワークが不要になる",
        "コンテナはデータのバックアップにしか利用できない"
    ],
    answer: 1,
    explanation: "コンテナ型仮想化では、アプリケーションとその実行に必要なライブラリなどをまとめて扱える。一般に、仮想マシンより軽量に動作させやすい。"
},
{
    id: 184,
    category: "technology",
    question: "エッジコンピューティングの説明として、適切なものはどれか。",
    choices: [
        "すべてのデータを必ず遠隔地のクラウドだけで処理する方式",
        "コンピュータの画面の端に情報を表示する技術",
        "データが発生する機器や利用者に近い場所で処理を行う方式",
        "データを紙に印刷してから処理する方式"
    ],
    answer: 2,
    explanation: "エッジコンピューティングは、データが発生する機器や利用者に近い場所でデータ処理を行う方式であり、通信遅延の低減や通信量の削減が期待できる。"
},{
    id: 185,
    category: "technology",
    question: "IoTの説明として、適切なものはどれか。",
    choices: [
        "コンピュータ同士でしか通信できない仕組み",
        "さまざまなモノをインターネットに接続し、情報を収集・活用する仕組み",
        "紙の書類を電子化せずに保存する方式",
        "コンピュータの計算速度だけを向上させる技術"
    ],
    answer: 1,
    explanation: "IoTは、家電やセンサー、自動車などのさまざまなモノをインターネットに接続し、データの収集や遠隔操作などに活用する仕組みである。"
},
{
    id: 186,
    category: "technology",
    question: "センサーの役割として、適切なものはどれか。",
    choices: [
        "情報を必ず紙に印刷する",
        "プログラムの誤りを自動的に修正する",
        "温度や明るさなどの状態を検知し、データに変換する",
        "ネットワーク上のすべての通信を暗号化する"
    ],
    answer: 2,
    explanation: "センサーは、温度、光、圧力、位置などの物理的な状態を検知し、システムで利用できる信号やデータに変換する装置である。"
},
{
    id: 187,
    category: "technology",
    question: "アクチュエーターの説明として、適切なものはどれか。",
    choices: [
        "電気信号などを受けて、モーターを動かすなどの物理的な動作を行う装置",
        "データベースのデータを検索するソフトウェア",
        "ネットワークの通信経路を記録する装置",
        "画像データを圧縮するアルゴリズム"
    ],
    answer: 0,
    explanation: "アクチュエーターは、制御信号などに応じて、回転、移動、開閉などの物理的な動作を実現する装置である。"
},
{
    id: 188,
    category: "technology",
    question: "AIにおける機械学習の説明として、適切なものはどれか。",
    choices: [
        "人間がすべての判断結果を毎回手入力すること",
        "コンピュータの電源を自動的に管理すること",
        "データを使って規則性や特徴を学習し、予測や分類などに利用すること",
        "すべての情報を紙の資料として保存すること"
    ],
    answer: 2,
    explanation: "機械学習は、データから規則性や特徴を学習し、その結果を予測、分類、認識などの処理に利用するAIの技術である。"
},
{
    id: 189,
    category: "technology",
    question: "教師あり学習に必要なデータの特徴はどれか。",
    choices: [
        "入力データに対応する正解ラベルなどが付いている",
        "データが一切保存されていない",
        "入力データがすべて暗号化されていなければならない",
        "学習に使うデータが必ず画像だけで構成されている"
    ],
    answer: 0,
    explanation: "教師あり学習では、入力データと、それに対応する正解ラベルや正解値を用いて、予測や分類のモデルを学習させる。"
},
{
    id: 190,
    category: "technology",
    question: "教師なし学習の例として、適切なものはどれか。",
    choices: [
        "正解が付いた画像を使って犬と猫を分類する",
        "過去の売上と正解の売上予測値を使って学習する",
        "正解ラベルのない顧客データを特徴に基づいてグループ分けする",
        "決められた手順どおりに数値を合計する"
    ],
    answer: 2,
    explanation: "教師なし学習では、正解ラベルを与えずにデータの特徴や構造を学習する。顧客データを似た特徴ごとに分類するクラスタリングなどが例である。"
},
{
    id: 191,
    category: "technology",
    question: "ディープラーニングの説明として、適切なものはどれか。",
    choices: [
        "データを必ず手作業で並べ替える技術",
        "多層のニューラルネットワークを用いて特徴などを学習する技術",
        "コンピュータの画面を立体表示する技術",
        "通信ケーブルの長さを自動調整する技術"
    ],
    answer: 1,
    explanation: "ディープラーニングは、多層のニューラルネットワークを用いてデータの特徴を学習する機械学習の手法であり、画像認識や音声認識などに利用される。"
},
{
    id: 192,
    category: "technology",
    question: "生成AIの利用例として、適切なものはどれか。",
    choices: [
        "新しい文章や画像などのコンテンツを生成する",
        "停電時に電力を供給する",
        "ネットワークケーブルを物理的に接続する",
        "すべての情報セキュリティ事故を自動的に防止する"
    ],
    answer: 0,
    explanation: "生成AIは、学習したデータの特徴などを基に、文章、画像、音声、プログラムコードなどの新しいコンテンツを生成するAIである。"
},
{
    id: 193,
    category: "technology",
    question: "AIの学習データに偏りがある場合に起こり得る問題はどれか。",
    choices: [
        "必ず処理速度が一定になる",
        "すべての予測が正解になる",
        "特定の属性や状況に対して不公平な結果を出す可能性がある",
        "ネットワーク接続が不要になる"
    ],
    answer: 2,
    explanation: "学習データに偏りがあると、AIの判断にも偏りが生じ、特定の人や状況に対して不公平な結果を出す可能性がある。データの品質や多様性の確認が重要である。"
},
{
    id: 194,
    category: "technology",
    question: "ビッグデータの特徴を表すものとして、適切なものはどれか。",
    choices: [
        "必ず小さな表計算ファイルだけで構成される",
        "大量、多様、高頻度などの特徴を持つデータ",
        "人間が手書きしたデータだけを指す",
        "一度保存すると更新できないデータ"
    ],
    answer: 1,
    explanation: "ビッグデータは、量が膨大であることに加え、形式の多様性や発生・更新の速さなどの特徴を持つデータを指すことが多い。"
},
{
    id: 195,
    category: "technology",
    question: "データマイニングの目的として、適切なものはどれか。",
    choices: [
        "データから有用な規則性や関係性を発見する",
        "データを必ず紙に印刷する",
        "コンピュータの消費電力をゼロにする",
        "すべてのデータを同じ値に置き換える"
    ],
    answer: 0,
    explanation: "データマイニングは、大量のデータを分析し、これまで気付かなかった規則性や相関関係などの有用な知見を発見する手法である。"
},
{
    id: 196,
    category: "technology",
    question: "オープンデータの説明として、適切なものはどれか。",
    choices: [
        "作成者以外は利用できないデータ",
        "必ず有料で販売されるデータ",
        "一定の利用条件の下で、誰もが利用・再利用しやすい形で公開されたデータ",
        "パスワードを知っている人だけが閲覧できる個人用データ"
    ],
    answer: 2,
    explanation: "オープンデータは、一定のルールの下で誰もが利用、再利用、再配布しやすい形で公開されたデータである。行政情報などが活用される例がある。"
},
{
    id: 197,
    category: "technology",
    question: "データの匿名化を行う主な目的はどれか。",
    choices: [
        "データの保存容量を必ずゼロにする",
        "個人を識別できる可能性を低減し、プライバシーを保護する",
        "すべてのデータを自動的に正確にする",
        "データの検索機能をなくす"
    ],
    answer: 1,
    explanation: "匿名化は、個人を識別できる情報を削除・加工するなどして、個人が特定されるリスクを低減するために行われる。加工方法によっては再識別のリスクが残る場合もある。"
},
{
    id: 198,
    category: "technology",
    question: "ビットとバイトの関係として、正しいものはどれか。",
    choices: [
        "1バイトは通常8ビットである",
        "1ビットは常に8バイトである",
        "1バイトは100ビットである",
        "ビットとバイトは同じ単位である"
    ],
    answer: 0,
    explanation: "1バイトは通常8ビットで構成される。ビットは情報量の最小単位として使われ、バイトはデータ容量を表す単位として広く使われる。"
},
{
    id: 199,
    category: "technology",
    question: "2進数の「1010」を10進数に変換した値はどれか。",
    choices: [
        "8",
        "10",
        "12",
        "14"
    ],
    answer: 1,
    explanation: "2進数1010は、1×2³＋0×2²＋1×2¹＋0×2⁰＝8＋2＝10となる。"
},
{
    id: 200,
    category: "technology",
    question: "10進数の「13」を2進数で表したものはどれか。",
    choices: [
        "1010",
        "1011",
        "1100",
        "1101"
    ],
    answer: 3,
    explanation: "10進数13は、8＋4＋1で表せるため、2進数では1101となる。"
},
{
    id: 201,
    category: "technology",
    question: "16進数の「A」を10進数で表した値はどれか。",
    choices: [
        "8",
        "9",
        "10",
        "11"
    ],
    answer: 2,
    explanation: "16進数では、0～9の次にA～Fを使い、Aは10進数の10を表す。"
},
{
    id: 202,
    category: "technology",
    question: "文字コードの役割として、適切なものはどれか。",
    choices: [
        "文字と数値などの符号を対応付け、コンピュータで文字を扱えるようにする",
        "文字を必ず音声に変換する",
        "ネットワークの通信速度を一定にする",
        "画像の明るさを自動的に調整する"
    ],
    answer: 0,
    explanation: "文字コードは、文字に数値などの符号を対応付ける規則であり、コンピュータ間で文字情報を保存・交換するために使われる。"
},
{
    id: 203,
    category: "technology",
    question: "Unicodeの説明として、適切なものはどれか。",
    choices: [
        "日本語の数字だけを扱う文字コード",
        "画像ファイル専用の圧縮方式",
        "世界のさまざまな文字を共通の文字体系で扱うための規格",
        "コンピュータの演算速度を測定する単位"
    ],
    answer: 2,
    explanation: "Unicodeは、世界のさまざまな言語の文字を共通の文字体系で扱うための規格である。UTF-8などはUnicodeの文字を符号化する方式である。"
},
{
    id: 204,
    category: "technology",
    question: "画像の解像度を高くした場合に、一般的に起こることはどれか。",
    choices: [
        "必ずファイル容量がゼロになる",
        "より細かな画像表現が可能になるが、データ量が増える場合がある",
        "画像の色数が必ず1色になる",
        "画像を表示するための装置が不要になる"
    ],
    answer: 1,
    explanation: "解像度が高い画像は、より多くの画素で表現されるため細かな描写が可能になる。一方、条件によっては画像データの容量が大きくなる。"
},
{
    id: 205,
    category: "technology",
    question: "画像の画素（ピクセル）について、適切な説明はどれか。",
    choices: [
        "画像を構成する最小単位となる点",
        "音声の高さを表す単位",
        "ネットワークの通信速度を表す単位",
        "CPUの処理回数を表す単位"
    ],
    answer: 0,
    explanation: "画素（ピクセル）は、デジタル画像を構成する点の単位である。画素数が多いほど、より細かな画像を表現できる場合がある。"
},
{
    id: 206,
    category: "technology",
    question: "画像の階調数を増やすことによる効果として、適切なものはどれか。",
    choices: [
        "必ず画像ファイルの容量がゼロになる",
        "表現できる明るさや色の段階を細かくできる",
        "画像の縦横の画素数が必ず半分になる",
        "画像を音声データに変換できる"
    ],
    answer: 1,
    explanation: "階調数を増やすと、明るさや色の濃淡をより細かく表現できる。一般に、階調を多く表現するには、より多くのビット数が必要となる。"
},
{
    id: 207,
    category: "technology",
    question: "可逆圧縮の説明として、適切なものはどれか。",
    choices: [
        "圧縮すると元のデータを完全には復元できない方式",
        "画像の色を必ず白黒にする方式",
        "圧縮したデータから元のデータを完全に復元できる方式",
        "データを圧縮せずに暗号化する方式"
    ],
    answer: 2,
    explanation: "可逆圧縮は、圧縮したデータを展開すると元のデータを完全に復元できる方式である。文書ファイルや一部の画像形式などで利用される。"
},
{
    id: 208,
    category: "technology",
    question: "非可逆圧縮の特徴として、適切なものはどれか。",
    choices: [
        "圧縮前のデータを必ず完全に復元できる",
        "データの内容を一切変えずにしか圧縮できない",
        "圧縮後のデータは必ず圧縮前より大きくなる",
        "一部の情報を削減して、データ容量を小さくすることがある"
    ],
    answer: 3,
    explanation: "非可逆圧縮は、人間が感じにくい情報などを削減してデータ容量を小さくする方式である。JPEGや一般的な音声・動画圧縮などで利用される。"
},
{
    id: 209,
    category: "technology",
    question: "音声の標本化（サンプリング）の説明として、適切なものはどれか。",
    choices: [
        "一定の時間間隔で音声信号の値を取り出すこと",
        "音声データを必ず文字に変換すること",
        "音声の再生速度を必ず2倍にすること",
        "音声データをネットワークから削除すること"
    ],
    answer: 0,
    explanation: "標本化は、連続的な音声信号を一定の時間間隔で測定し、デジタルデータにするための処理の一つである。"
},
{
    id: 210,
    category: "technology",
    question: "音声の量子化の説明として、適切なものはどれか。",
    choices: [
        "音声を一定時間ごとに測定することだけを指す",
        "標本化した値を、決められた段階の数値に対応付けること",
        "音声を必ず画像に変換すること",
        "音声データを複数の利用者に送信すること"
    ],
    answer: 1,
    explanation: "量子化は、標本化によって得た信号の値を、あらかじめ定められた段階の数値に対応付ける処理である。"
},
{
    id: 211,
    category: "technology",
    question: "音声の標本化周波数を高くする一般的な効果はどれか。",
    choices: [
        "音声データの保存が必ず不要になる",
        "音声のすべての雑音が自動的に消える",
        "単位時間当たりの標本数が増え、より高い周波数成分を扱えるようになる",
        "音声データが必ず文字データになる"
    ],
    answer: 2,
    explanation: "標本化周波数が高いほど、単位時間当たりに取り出す標本数が増える。適切な条件では、より高い周波数成分をデジタル化できる。"
},
{
    id: 212,
    category: "technology",
    question: "コンピュータのCPUの主な役割はどれか。",
    choices: [
        "電源が切れてもデータを必ず保存し続ける",
        "紙の書類を読み取ることだけを行う",
        "ネットワークケーブルの信号を増幅する",
        "プログラムの命令を解釈し、演算や制御を行う"
    ],
    answer: 3,
    explanation: "CPUは中央処理装置とも呼ばれ、プログラムの命令を解釈して演算や各装置の制御を行う、コンピュータの主要な構成要素である。"
},
{
    id: 213,
    category: "technology",
    question: "主記憶装置（メインメモリ）の特徴として、一般的に適切なものはどれか。",
    choices: [
        "CPUが処理するプログラムやデータを一時的に保持する",
        "コンピュータの電源を切っても、必ず内容が保持される",
        "印刷用の紙を保存する装置である",
        "ネットワークの通信経路だけを決定する"
    ],
    answer: 0,
    explanation: "主記憶装置は、CPUが処理するプログラムやデータを一時的に保持する。一般的なRAMは揮発性であり、電源を切ると内容が失われる。"
},
{
    id: 214,
    category: "technology",
    question: "SSDの特徴として、HDDと比較した場合に一般的に適切なものはどれか。",
    choices: [
        "必ずHDDより保存容量が大きい",
        "可動部品を持たず、アクセスが速い製品が多い",
        "電源を切ると必ず保存データが消える",
        "データを保存するために磁気ディスクを回転させる"
    ],
    answer: 1,
    explanation: "SSDはフラッシュメモリなどを用いてデータを保存し、HDDのような回転する磁気ディスクを持たない。一般的にアクセスが速く、衝撃にも強い。"
},
{
    id: 215,
    category: "technology",
    question: "キャッシュメモリの主な役割はどれか。",
    choices: [
        "データを長期間保存するための外部記憶装置になる",
        "ネットワークの利用者を認証する",
        "CPUと主記憶装置の速度差を補い、処理を高速化する",
        "コンピュータの画面を印刷する"
    ],
    answer: 2,
    explanation: "キャッシュメモリは、CPUが頻繁に使うデータや命令を一時的に保持し、主記憶装置へのアクセスを減らして処理を高速化する。"
},
{
    id: 216,
    category: "technology",
    question: "CPUのクロック周波数について、適切な説明はどれか。",
    choices: [
        "1秒間に何回のクロック信号が発生するかを表す指標である",
        "記憶装置の容量を表す単位である",
        "画面の色数を表す指標である",
        "ネットワークの接続台数を表す単位である"
    ],
    answer: 0,
    explanation: "クロック周波数は、CPUなどに供給されるクロック信号の1秒当たりの周期数を表し、Hzで示される。ただし、CPUの性能はクロック周波数だけでは決まらない。"
},
{
    id: 217,
    category: "technology",
    question: "マルチコアCPUの特徴として、適切なものはどれか。",
    choices: [
        "複数のCPUを必ず別々の建物に設置する方式",
        "1つのCPU内に複数の処理コアを備える方式",
        "主記憶装置を使用しない方式",
        "プログラムをすべて紙に記録する方式"
    ],
    answer: 1,
    explanation: "マルチコアCPUは、1つのCPU内に複数の処理コアを備え、複数の処理を並行して実行しやすくする。実際の性能はプログラムなどにも左右される。"
},
{
    id: 218,
    category: "technology",
    question: "GPUが特に得意とする処理はどれか。",
    choices: [
        "利用者の氏名を紙に印刷する処理だけ",
        "コンピュータの電源ケーブルを制御する処理だけ",
        "複数のデータに対する同種の計算を並列に実行する処理",
        "すべてのデータを手作業で入力する処理"
    ],
    answer: 2,
    explanation: "GPUは、多数の演算を並列に実行することが得意であり、画像処理や科学技術計算、AIの学習・推論などに利用される。"
},
{
    id: 219,
    category: "technology",
    question: "OS（オペレーティングシステム）の役割として、適切なものはどれか。",
    choices: [
        "コンピュータのハードウェア資源やソフトウェアの実行を管理する",
        "すべてのWebサイトの内容を作成する",
        "インターネット上の情報を必ず正しいものにする",
        "プリンタの用紙を自動的に補充する"
    ],
    answer: 0,
    explanation: "OSは、CPU、メモリ、ファイル、入出力装置などの資源を管理し、アプリケーションが動作するための基本的な環境を提供する。"
},
{
    id: 220,
    category: "technology",
    question: "マルチタスクの説明として、適切なものはどれか。",
    choices: [
        "コンピュータを複数台必ず購入すること",
        "複数の処理を切り替えながら実行し、並行して動作しているように扱うこと",
        "一度に一つのファイルしか保存できないこと",
        "すべてのプログラムを同時に印刷すること"
    ],
    answer: 1,
    explanation: "マルチタスクは、OSが複数のタスクにCPUの実行時間などを割り当て、処理を切り替えながら実行する仕組みである。"
},
{
    id: 221,
    category: "technology",
    question: "デバイスドライバの役割はどれか。",
    choices: [
        "コンピュータの利用料金を計算する",
        "Webサイトの文章を自動的に翻訳する",
        "OSと周辺機器などとの間の制御や通信を仲介する",
        "ネットワーク上のすべての情報を保存する"
    ],
    answer: 2,
    explanation: "デバイスドライバは、OSがプリンタやグラフィック装置などのハードウェアを制御するために必要なソフトウェアである。"
},
{
    id: 222,
    category: "technology",
    question: "オープンソースソフトウェア（OSS）の説明として、適切なものはどれか。",
    choices: [
        "ソースコードが公開され、ライセンスの条件に従って利用や改変などができるソフトウェア",
        "必ず有料で販売され、改変が一切認められないソフトウェア",
        "インターネットに接続しなければ使用できないソフトウェア",
        "ソースコードが存在しないソフトウェア"
    ],
    answer: 0,
    explanation: "OSSはソースコードが公開され、所定のライセンス条件の下で利用、改変、再配布などが認められるソフトウェアである。公開されていることと、無条件で自由に使えることは同じではない。"
},
{
    id: 223,
    category: "technology",
    question: "APIの役割として、適切なものはどれか。",
    choices: [
        "コンピュータの画面の明るさを測定する装置",
        "異なるソフトウェア同士が機能やデータをやり取りするための接点や規約",
        "データを必ず紙に印刷するための規格",
        "CPUの温度を下げる冷却装置"
    ],
    answer: 1,
    explanation: "APIは、ソフトウェアやサービスが機能やデータをやり取りするためのインターフェースである。適切なAPIを利用すると、既存の機能と連携したシステムを開発しやすくなる。"
},
{
    id: 224,
    category: "technology",
    question: "ファームウェアの説明として、適切なものはどれか。",
    choices: [
        "利用者が作成した文書ファイルだけを指す",
        "インターネット上で閲覧する文章だけを指す",
        "紙の書類を電子化するための装置",
        "機器の基本的な制御を行うために、機器に組み込まれたソフトウェア"
    ],
    answer: 3,
    explanation: "ファームウェアは、機器に組み込まれ、ハードウェアの基本的な制御などを行うソフトウェアである。ルーターや家電、周辺機器などに利用される。"
},
{
    id: 225,
    category: "technology",
    question: "アルゴリズムの説明として、適切なものはどれか。",
    choices: [
        "コンピュータの外観を設計すること",
        "問題を解決するための処理手順や計算方法",
        "ネットワークの通信料金を決めること",
        "データを必ず紙に印刷すること"
    ],
    answer: 1,
    explanation: "アルゴリズムは、問題を解決するための処理手順や計算方法である。効率のよいアルゴリズムを使うことで、処理時間や必要な資源を削減できる。"
},
{
    id: 226,
    category: "technology",
    question: "フローチャートで、処理の開始や終了を表す記号として一般的なものはどれか。",
    choices: [
        "ひし形",
        "長方形",
        "楕円形",
        "平行四辺形"
    ],
    answer: 2,
    explanation: "フローチャートでは、開始や終了を端子記号（一般に楕円形など）で表す。長方形は処理、ひし形は判断を表すのが一般的である。"
},
{
    id: 227,
    category: "technology",
    question: "フローチャートで、条件によって処理を分岐させる判断を表す記号はどれか。",
    choices: [
        "ひし形",
        "円形",
        "長方形",
        "楕円形"
    ],
    answer: 0,
    explanation: "フローチャートでは、条件に応じて処理を分岐させる判断をひし形で表す。分岐した先には、条件が成立する場合と成立しない場合などの処理を記述する。"
},
{
    id: 228,
    category: "technology",
    question: "変数の説明として、適切なものはどれか。",
    choices: [
        "プログラムの実行中に値を保持するための名前付きの領域",
        "コンピュータの電源を供給する装置",
        "ネットワーク通信の暗号方式",
        "データを必ず永久に変更できなくする仕組み"
    ],
    answer: 0,
    explanation: "変数は、プログラムで使用する値を保持するための名前付きの領域である。処理の途中で値を代入したり、更新したりできる。"
},
{
    id: 229,
    category: "technology",
    question: "プログラムにおける繰返し処理の説明として、適切なものはどれか。",
    choices: [
        "処理を必ず一度だけ実行すること",
        "条件や回数に応じて、同じ処理を繰り返し実行すること",
        "すべての変数を削除すること",
        "プログラムを機械語に変換することだけを指す"
    ],
    answer: 1,
    explanation: "繰返し処理は、指定された回数や条件に従って処理を繰り返す構造である。ループ処理とも呼ばれる。"
},
{
    id: 230,
    category: "technology",
    question: "プログラムにおける条件分岐の説明として、適切なものはどれか。",
    choices: [
        "すべての処理を無条件に繰り返すこと",
        "プログラムの実行を必ず終了させること",
        "条件の真偽などに応じて実行する処理を選択すること",
        "データを必ず暗号化すること"
    ],
    answer: 2,
    explanation: "条件分岐は、条件が成立するかどうかなどに応じて、実行する処理を選択する仕組みである。if文などで実現される。"
},
{
    id: 231,
    category: "technology",
    question: "プログラムのデバッグの目的はどれか。",
    choices: [
        "プログラムの誤りを発見し、原因を調べて修正する",
        "プログラムの利用者を必ず増やす",
        "コンピュータの画面を大型化する",
        "データベースの保存容量を必ず倍にする"
    ],
    answer: 0,
    explanation: "デバッグは、プログラムに含まれる不具合や誤りを発見し、その原因を調査して修正する作業である。"
},
{
    id: 232,
    category: "technology",
    question: "単体テストの説明として、適切なものはどれか。",
    choices: [
        "完成したシステム全体を利用者が評価するテスト",
        "複数のシステムを接続した状態だけを確認するテスト",
        "システムの運用開始後に障害件数だけを集計する作業",
        "個々の関数やモジュールなど、小さな単位で動作を確認するテスト"
    ],
    answer: 3,
    explanation: "単体テストは、個々の関数やモジュールなどの小さな単位が、設計どおりに動作するかを確認するテストである。"
},
{
    id: 233,
    category: "technology",
    question: "結合テストの主な目的はどれか。",
    choices: [
        "個々の部品を製造すること",
        "複数のモジュールを組み合わせ、連携が正しく動作するか確認すること",
        "利用者の給与を計算すること",
        "コンピュータの電源容量を測定すること"
    ],
    answer: 1,
    explanation: "結合テストは、複数のモジュールやシステム要素を組み合わせ、データの受渡しや連携が正しく行われるかを確認するテストである。"
},
{
    id: 234,
    category: "technology",
    question: "システムテストの説明として、適切なものはどれか。",
    choices: [
        "変数名の付け方だけを確認する作業",
        "プログラムの1行だけを実行する作業",
        "システム全体が要求された機能や性能を満たしているか確認するテスト",
        "ネットワークケーブルの色を確認する作業"
    ],
    answer: 2,
    explanation: "システムテストは、システム全体を対象に、要求された機能や性能、信頼性などを満たしているかを確認するテストである。"
},
{
    id: 235,
    category: "technology",
    question: "回帰テスト（リグレッションテスト）の目的はどれか。",
    choices: [
        "変更や修正によって、既存の機能に新たな不具合が生じていないか確認する",
        "システムの利用料金を計算する",
        "すべてのデータを削除して初期化する",
        "プログラムの開発者を選定する"
    ],
    answer: 0,
    explanation: "回帰テストは、プログラムの修正や機能追加などによって、これまで正常だった機能に不具合が生じていないかを確認するテストである。"
},
{
    id: 236,
    category: "technology",
    question: "ブラックボックステストの説明として、適切なものはどれか。",
    choices: [
        "プログラムの内部構造だけを調べるテスト",
        "ソースコードを必ず変更しながら実施するテスト",
        "ハードウェアの内部回路だけを調べるテスト",
        "内部の実装を意識せず、入力と出力の関係などから動作を確認するテスト"
    ],
    answer: 3,
    explanation: "ブラックボックステストは、プログラムの内部構造を前提とせず、入力に対して期待する出力や動作が得られるかを確認するテストである。"
},
{
    id: 237,
    category: "technology",
    question: "ホワイトボックステストの説明として、適切なものはどれか。",
    choices: [
        "利用者の満足度だけを調査するテスト",
        "プログラムの内部構造や処理経路を考慮して確認するテスト",
        "画面の色だけを評価するテスト",
        "システムを使わずに書類だけを確認する作業"
    ],
    answer: 1,
    explanation: "ホワイトボックステストは、プログラムの内部構造や制御の流れを考慮し、命令や分岐などが適切に実行されるかを確認するテストである。"
},
{
    id: 238,
    category: "technology",
    question: "ウォーターフォールモデルの特徴として、適切なものはどれか。",
    choices: [
        "工程を明確に区切り、原則として順番に進める開発モデル",
        "開発工程を一切決めずに作業を進める方式",
        "完成したシステムを必ず毎日作り直す方式",
        "テスト工程を設けない開発方式"
    ],
    answer: 0,
    explanation: "ウォーターフォールモデルは、要件定義、設計、実装、テストなどの工程を明確に区切り、原則として順番に進める開発モデルである。"
},
{
    id: 239,
    category: "technology",
    question: "アジャイル開発の特徴として、適切なものはどれか。",
    choices: [
        "最初に決めた仕様を、どのような状況でも変更してはならない",
        "テストはすべての開発が終わるまで実施しない",
        "短い開発サイクルを繰り返し、利用者の意見などを反映しながら開発する",
        "設計書を作成することだけを開発の目的とする"
    ],
    answer: 2,
    explanation: "アジャイル開発では、短い期間で計画、開発、評価などを繰り返し、変化する要求や利用者のフィードバックを反映しながら開発を進める。"
},
{
    id: 240,
    category: "technology",
    question: "スクラムにおけるスプリントの説明として、適切なものはどれか。",
    choices: [
        "システムを永久に停止する期間",
        "開発チームが一定の短い期間で作業し、成果を生み出す開発サイクル",
        "利用者のパスワードを変更する手順",
        "ネットワーク機器を廃棄するための手続"
    ],
    answer: 1,
    explanation: "スクラムでは、スプリントと呼ばれる一定の期間ごとに作業を進め、利用可能な成果を作り出すことを目指す。"
},
{
    id: 241,
    category: "technology",
    question: "プロトタイピングの説明として、適切なものはどれか。",
    choices: [
        "完成品を作るまで利用者に何も見せない方法",
        "障害が発生したシステムを廃棄する方法",
        "プログラムのソースコードを必ず公開する方法",
        "試作品を作成して、利用者の確認や評価を通じて要求を明確にする方法"
    ],
    answer: 3,
    explanation: "プロトタイピングは、試作品を早い段階で作成し、利用者の評価やフィードバックを得て、要求や設計を具体化する方法である。"
},
{
    id: 242,
    category: "technology",
    question: "要件定義の主な目的はどれか。",
    choices: [
        "システムで実現すべき機能や条件、利用者の要求などを明確にする",
        "完成したシステムを必ず廃棄する",
        "プログラムの実行速度だけを測定する",
        "サーバの設置場所だけを決定し、機能は決めない"
    ],
    answer: 0,
    explanation: "要件定義では、利用者や関係者の要求を整理し、システムに必要な機能や性能、運用条件などを明確にする。"
},
{
    id: 243,
    category: "technology",
    question: "システムの保守作業に該当するものはどれか。",
    choices: [
        "新しい事業の広告を作成することだけ",
        "コンピュータの設置場所を決めることだけ",
        "稼働中のシステムの不具合を修正し、必要に応じて機能を改善すること",
        "利用者の氏名を必ず公開すること"
    ],
    answer: 2,
    explanation: "システム保守には、稼働中に発見された不具合の修正、環境の変化への対応、機能改善などが含まれる。"
},
{
    id: 244,
    category: "technology",
    question: "バージョン管理システムを利用する主な利点はどれか。",
    choices: [
        "すべてのプログラムの不具合を自動的になくす",
        "ファイルの変更履歴を管理し、過去の状態の確認や複数人での共同作業を支援する",
        "コンピュータの記憶容量を必ず無制限にする",
        "ネットワークを使わずにすべてのデータを共有する"
    ],
    answer: 1,
    explanation: "バージョン管理システムは、ファイルの変更履歴を記録し、過去の状態への確認や復元、複数人による共同開発を支援する。Gitなどが代表例である。"
},
{
    id: 245,
    category: "technology",
    question: "データベースの主キー（主キー制約）の説明として、適切なものはどれか。",
    choices: [
        "同じ値を複数のレコードに必ず設定するためのキー",
        "レコードを一意に識別するためのキー",
        "データベースを暗号化するためのキー",
        "データを必ず並べ替えるためだけのキー"
    ],
    answer: 1,
    explanation: "主キーは、テーブル内の各レコードを一意に識別するための項目または項目の組合せである。主キーの値は重複せず、NULLにもできない。"
},
{
    id: 246,
    category: "technology",
    question: "リレーショナルデータベースにおける外部キーの役割はどれか。",
    choices: [
        "データベースの電源を制御する",
        "テーブル内の全データを暗号化する",
        "関連するテーブル間のデータの関係を表す",
        "データを必ず画像として保存する"
    ],
    answer: 2,
    explanation: "外部キーは、別のテーブルなどの主キーを参照することで、テーブル間の関連付けや参照整合性の維持に利用される。"
},
{
    id: 247,
    category: "technology",
    question: "データベースの正規化を行う主な目的はどれか。",
    choices: [
        "データの重複を減らし、更新時の不整合を防ぎやすくする",
        "すべてのデータを画像に変換する",
        "データベースの利用者を必ず一人に制限する",
        "データの保存を一切できなくする"
    ],
    answer: 0,
    explanation: "正規化は、テーブルの構造を整理してデータの重複を抑え、追加・更新・削除に伴う不整合を防ぎやすくする手法である。"
},
{
    id: 248,
    category: "technology",
    question: "SQLのSELECT文の主な用途はどれか。",
    choices: [
        "データベースの電源を切る",
        "テーブルのデータを暗号化することだけ",
        "ネットワークの接続先を設定する",
        "テーブルからデータを検索・取得する"
    ],
    answer: 3,
    explanation: "SELECT文は、データベースのテーブルから必要な列や行を検索・取得するために使用するSQL文である。"
},
{
    id: 249,
    category: "technology",
    question: "SQLのINSERT文の用途はどれか。",
    choices: [
        "既存のデータを検索する",
        "テーブルに新しいレコードを追加する",
        "テーブルのデータを必ず暗号化する",
        "データベースのバックアップを自動的に復元する"
    ],
    answer: 1,
    explanation: "INSERT文は、テーブルに新しいレコードを追加するために使用するSQL文である。"
},
{
    id: 250,
    category: "technology",
    question: "SQLのUPDATE文の用途はどれか。",
    choices: [
        "既存のレコードの内容を変更する",
        "新しいテーブルを必ず作成する",
        "データベースの利用者を認証する",
        "ネットワークの通信速度を変更する"
    ],
    answer: 0,
    explanation: "UPDATE文は、テーブル内の既存のレコードの値を変更するために使用する。WHERE句を適切に指定しないと、意図しない多数のレコードを更新するおそれがある。"
},
{
    id: 251,
    category: "technology",
    question: "SQLのDELETE文の用途はどれか。",
    choices: [
        "新しいレコードを追加する",
        "データベースを必ず暗号化する",
        "指定した条件に該当するレコードを削除する",
        "データの検索結果を並べ替えることだけ"
    ],
    answer: 2,
    explanation: "DELETE文は、テーブル内のレコードを削除するために使用する。WHERE句で条件を指定できるが、条件を省略すると対象テーブルの全レコードが削除される場合がある。"
},
{
    id: 252,
    category: "technology",
    question: "SQLのWHERE句の役割として、適切なものはどれか。",
    choices: [
        "データベースの物理的な設置場所を指定する",
        "検索や更新などの対象となるレコードの条件を指定する",
        "テーブルの色を設定する",
        "データベースの電源を制御する"
    ],
    answer: 1,
    explanation: "WHERE句は、検索や更新、削除などの対象となるレコードを条件によって絞り込むために使用する。"
},
{
    id: 253,
    category: "technology",
    question: "SQLのORDER BY句の役割はどれか。",
    choices: [
        "レコードを条件に従って並べ替える",
        "レコードをすべて削除する",
        "新しいデータベースを作成する",
        "データベースの利用者を追加することだけ"
    ],
    answer: 0,
    explanation: "ORDER BY句は、検索結果を指定した列などの値に基づいて並べ替えるために使用する。昇順や降順を指定できる。"
},
{
    id: 254,
    category: "technology",
    question: "データベースのトランザクションの説明として、適切なものはどれか。",
    choices: [
        "データを紙に印刷するための装置",
        "データベースの利用者を登録する作業だけ",
        "ネットワークの通信経路を決める処理",
        "一連の処理をひとまとまりとして扱う単位"
    ],
    answer: 3,
    explanation: "トランザクションは、データベースに対する一連の処理をひとまとまりとして扱う単位である。処理の整合性を保つために利用される。"
},
{
    id: 255,
    category: "technology",
    question: "トランザクションのACID特性に含まれる原子性の説明はどれか。",
    choices: [
        "処理を必ず高速に実行すること",
        "一連の処理をすべて実行するか、全く実行しないかのどちらかにすること",
        "データを必ず複数の場所に保存すること",
        "利用者の画面を統一すること"
    ],
    answer: 1,
    explanation: "原子性は、一連の処理をすべて実行するか、全く実行しないかのどちらかにする性質である。途中までしか反映されない状態を防ぐ。"
},
{
    id: 256,
    category: "technology",
    question: "データベースの排他制御を行う目的はどれか。",
    choices: [
        "データベースの画面表示を装飾する",
        "データを必ず圧縮する",
        "複数の処理が同じデータを同時に更新することによる不整合を防ぐ",
        "データベースへの接続を永久に禁止する"
    ],
    answer: 2,
    explanation: "排他制御は、複数のトランザクションが同じデータを同時に扱う際の競合を制御し、更新の矛盾や不整合を防ぐために利用される。"
},
{
    id: 257,
    category: "technology",
    question: "データベースのインデックスを設定する主な目的はどれか。",
    choices: [
        "検索対象のデータを見つけやすくし、検索を高速化する",
        "データを必ず紙に印刷する",
        "すべてのデータを削除する",
        "ネットワークの通信を暗号化する"
    ],
    answer: 0,
    explanation: "インデックスは、検索対象のデータを効率よく見つけるための索引である。検索を高速化できる一方、更新時の処理や保存領域が増えることがある。"
},
{
    id: 258,
    category: "technology",
    question: "データウェアハウスの説明として、適切なものはどれか。",
    choices: [
        "コンピュータの電源を管理する装置",
        "Webサイトの画像だけを保存する仕組み",
        "ネットワークの通信を暗号化する技術",
        "分析や意思決定に利用するため、さまざまなデータを蓄積・整理した基盤"
    ],
    answer: 3,
    explanation: "データウェアハウスは、業務システムなどから集めたデータを分析や意思決定に利用しやすい形で蓄積・整理するための基盤である。"
},
{
    id: 259,
    category: "technology",
    question: "BIツールの主な目的はどれか。",
    choices: [
        "コンピュータの部品を製造する",
        "データを分析・可視化し、業務上の意思決定を支援する",
        "すべてのデータを自動的に削除する",
        "ネットワークケーブルの故障を物理的に修理する"
    ],
    answer: 1,
    explanation: "BI（ビジネスインテリジェンス）ツールは、データを集計・分析・可視化し、経営や業務上の意思決定を支援するために利用される。"
},
{
    id: 260,
    category: "technology",
    question: "データベースのバックアップを取得する主な目的はどれか。",
    choices: [
        "データベースの検索機能をなくす",
        "データの入力を禁止する",
        "障害や誤操作などでデータが失われた場合に復旧できるようにする",
        "すべての利用者の権限を自動的に管理者にする"
    ],
    answer: 2,
    explanation: "データベースのバックアップは、機器故障、誤操作、災害などによってデータが失われた場合に、復旧できるようにするために取得する。"
},
{
    id: 261,
    category: "technology",
    question: "データベースのレプリケーションの説明として、適切なものはどれか。",
    choices: [
        "データを別のサーバなどに複製し、利用や可用性の向上に役立てる仕組み",
        "データを必ず紙に印刷する仕組み",
        "データベースを一切更新できなくする仕組み",
        "コンピュータの画面解像度を変更する技術"
    ],
    answer: 0,
    explanation: "レプリケーションは、データを別のサーバやデータベースなどに複製する仕組みである。可用性の向上や負荷分散などに利用される。"
},
{
    id: 262,
    category: "technology",
    question: "ネットワークにおけるIPアドレスの役割はどれか。",
    choices: [
        "ファイルの圧縮率を指定する",
        "利用者のパスワードを保存する",
        "画像の色を指定する",
        "IPネットワーク上で通信先などを識別するために使う"
    ],
    answer: 3,
    explanation: "IPアドレスは、IPネットワーク上で機器やインターフェースを識別し、データを適切な宛先へ届けるために利用される。"
},
{
    id: 263,
    category: "technology",
    question: "DNSの役割として、適切なものはどれか。",
    choices: [
        "コンピュータの電源を管理する",
        "ドメイン名に対応するIPアドレスなどの情報を調べる",
        "ファイルを必ず暗号化する",
        "プリンタのインク残量を測定する"
    ],
    answer: 1,
    explanation: "DNSは、ドメイン名に対応するIPアドレスなどの情報を検索する仕組みである。利用者がドメイン名を使ってWebサイトなどにアクセスする際に利用される。"
},
{
    id: 264,
    category: "technology",
    question: "DHCPの役割として、適切なものはどれか。",
    choices: [
        "Webページの文章を自動翻訳する",
        "データベースのテーブルを正規化する",
        "ネットワークに接続した機器にIPアドレスなどの設定情報を自動的に割り当てる",
        "コンピュータの画面を印刷する"
    ],
    answer: 2,
    explanation: "DHCPは、ネットワークに接続した機器にIPアドレスやネットワーク設定情報を自動的に割り当てるためのプロトコルである。"
},
{
    id: 265,
    category: "technology",
    question: "TCPの特徴として、適切なものはどれか。",
    choices: [
        "通信相手との接続を確立し、データの到着確認や再送制御を行う",
        "データの到着確認を行わず、必ず最短経路で送信する",
        "IPアドレスを自動的に割り当てる",
        "ドメイン名をIPアドレスに変換する"
    ],
    answer: 0,
    explanation: "TCPは、通信相手との接続を確立し、データの到着確認や再送制御を行う信頼性の高い通信プロトコルです。"
},
{
    id: 266,
    category: "technology",
    question: "UDPの特徴として、適切なものはどれか。",
    choices: [
        "通信のたびに必ず接続を確立する",
        "データの到着確認や再送制御を行わず、処理が比較的軽い",
        "Webページの暗号化だけを行う",
        "IPアドレスをドメイン名に変換する"
    ],
    answer: 1,
    explanation: "UDPは接続の確立やデータの到着確認などを行わないため、処理が比較的軽く、音声や動画のリアルタイム通信などに利用されます。"
},
{
    id: 267,
    category: "technology",
    question: "Webページを閲覧するときに利用され、Webサーバとブラウザの間でデータをやり取りするプロトコルはどれか。",
    choices: [
        "SMTP",
        "FTP",
        "HTTP",
        "SNMP"
    ],
    answer: 2,
    explanation: "HTTPは、WebブラウザとWebサーバの間でWebページなどのデータをやり取りするためのプロトコルです。"
},
{
    id: 268,
    category: "technology",
    question: "HTTPSを利用する主な目的として、適切なものはどれか。",
    choices: [
        "Web通信を暗号化し、通信相手の確認などを行う",
        "コンピュータの電源を自動的に切る",
        "データベースの表を自動的に正規化する",
        "IPアドレスを自動的に割り当てる"
    ],
    answer: 0,
    explanation: "HTTPSはHTTPをTLSなどで保護した通信方式です。通信の暗号化や、証明書による接続先サーバの確認などに利用されます。"
},
{
    id: 269,
    category: "technology",
    question: "電子メールを送信するために一般的に利用されるプロトコルはどれか。",
    choices: [
        "POP3",
        "SMTP",
        "IMAP",
        "DHCP"
    ],
    answer: 1,
    explanation: "SMTPは、電子メールを送信したり、メールサーバ間で転送したりするために利用されるプロトコルです。"
},
{
    id: 270,
    category: "technology",
    question: "電子メールをサーバ上に保存したまま、複数の端末でメールを閲覧・管理する用途に適したプロトコルはどれか。",
    choices: [
        "FTP",
        "SMTP",
        "IMAP",
        "ARP"
    ],
    answer: 2,
    explanation: "IMAPは、メールをサーバ上で管理しながら閲覧する方式です。複数の端末で同じメール環境を利用する場合に適しています。"
},
{
    id: 271,
    category: "technology",
    question: "異なるネットワーク同士を接続し、IPアドレスなどを基にデータの転送先を決定する機器はどれか。",
    choices: [
        "ルータ",
        "キーボード",
        "プロッタ",
        "スキャナ"
    ],
    answer: 0,
    explanation: "ルータは、異なるネットワーク間でデータを転送する機器です。IPアドレスなどを基に、転送先を決定します。"
},
{
    id: 272,
    category: "technology",
    question: "同じLAN内の機器を接続し、主にMACアドレスを基にデータを転送する機器はどれか。",
    choices: [
        "モデム",
        "ルータ",
        "リピータ",
        "スイッチ"
    ],
    answer: 3,
    explanation: "スイッチは、主にMACアドレスを基に転送先のポートを判断し、LAN内の機器間でデータを転送します。"
},
{
    id: 273,
    category: "technology",
    question: "比較的狭い範囲の建物や事業所内などで、コンピュータやプリンタを接続するネットワークはどれか。",
    choices: [
        "WAN",
        "LAN",
        "インターネット全体",
        "衛星通信網"
    ],
    answer: 1,
    explanation: "LANは、建物や事業所などの限られた範囲で構築するネットワークです。"
},
{
    id: 274,
    category: "technology",
    question: "IPv4と比較したIPv6の特徴として、適切なものはどれか。",
    choices: [
        "IPアドレスを使用しない",
        "Web通信だけに使用できる",
        "IPアドレスのビット数が128ビットである",
        "必ず通信内容を暗号化する"
    ],
    answer: 2,
    explanation: "IPv6のIPアドレスは128ビットです。IPv4の32ビットと比べて、非常に多くのアドレスを利用できます。"
},
{
    id: 275,
    category: "technology",
    question: "家庭や小規模な事業所のネットワークで、複数の機器がプライベートIPアドレスを使用しながら、1つのグローバルIPアドレスなどを使ってインターネットへ接続できるようにする技術はどれか。",
    choices: [
        "NAT",
        "OCR",
        "RAID",
        "OCR"
    ],
    answer: 0,
    explanation: "NATは、IPアドレスを別のIPアドレスに変換する技術です。家庭用ルータなどでは、複数の端末がインターネットへ接続するために利用されます。"
},
{
    id: 276,
    category: "technology",
    question: "利用者とインターネット上のWebサーバとの間に入り、通信の中継やアクセス制御などを行うサーバはどれか。",
    choices: [
        "DNSサーバ",
        "DHCPサーバ",
        "メールサーバ",
        "プロキシサーバ"
    ],
    answer: 3,
    explanation: "プロキシサーバは、利用者と接続先サーバの間で通信を中継します。アクセス制御やキャッシュなどにも利用されます。"
},
{
    id: 277,
    category: "technology",
    question: "OSI基本参照モデルにおいて、ルータが主に処理する層はどれか。",
    choices: [
        "第1層 物理層",
        "第3層 ネットワーク層",
        "第6層 プレゼンテーション層",
        "第7層 アプリケーション層"
    ],
    answer: 1,
    explanation: "ルータは主にネットワーク層で動作し、IPアドレスなどを使ってパケットの転送先を判断します。"
},
{
    id: 278,
    category: "technology",
    question: "LANに接続された機器を識別するために、ネットワークインタフェースに割り当てられることが多いアドレスはどれか。",
    choices: [
        "URL",
        "ポート番号",
        "MACアドレス",
        "ファイル名"
    ],
    answer: 2,
    explanation: "MACアドレスは、ネットワークインタフェースを識別するために使われるアドレスです。LAN内のデータ転送などで利用されます。"
},
{
    id: 279,
    category: "technology",
    question: "ネットワーク上で送受信されるデータを、転送に適した単位に分割したものはどれか。",
    choices: [
        "パケット",
        "フォルダ",
        "セクタ",
        "レコード"
    ],
    answer: 0,
    explanation: "パケットは、ネットワーク上でデータを転送する際の単位です。データを小さな単位に分割して送受信します。"
},
{
    id: 280,
    category: "technology",
    question: "ネットワークの帯域幅が大きいことの説明として、適切なものはどれか。",
    choices: [
        "通信相手の住所が必ず分かる",
        "通信内容が必ず暗号化される",
        "通信の遅延が必ずゼロになる",
        "単位時間当たりに送信できるデータ量が大きい"
    ],
    answer: 3,
    explanation: "帯域幅は、通信路が単位時間当たりに伝送できるデータ量に関係します。帯域幅が大きいほど、多くのデータを伝送できる可能性があります。"
},
{
    id: 281,
    category: "technology",
    question: "ネットワーク通信における遅延時間の説明として、適切なものはどれか。",
    choices: [
        "保存できるファイルの最大個数",
        "データを送信してから相手に届くまでなどにかかる時間",
        "IPアドレスのビット数",
        "画面に表示できる色の数"
    ],
    answer: 1,
    explanation: "ネットワークの遅延時間は、データの送信や伝送、処理などにかかる時間です。音声通話やオンラインゲームでは、遅延が小さいことが重要です。"
},
{
    id: 282,
    category: "technology",
    question: "ネットワーク上の音声や映像などについて、通信品質を確保するために優先制御などを行う考え方はどれか。",
    choices: [
        "OCR",
        "RPA",
        "QoS",
        "ETL"
    ],
    answer: 2,
    explanation: "QoSはQuality of Serviceの略で、通信の優先制御などによって、遅延や通信品質を管理する考え方です。"
},
{
    id: 283,
    category: "technology",
    question: "無線LANで、アクセスポイントと端末が通信するために一般的に使用される規格群はどれか。",
    choices: [
        "IEEE 802.11",
        "IEEE 802.3だけ",
        "USB",
        "SATA"
    ],
    answer: 0,
    explanation: "IEEE 802.11は、Wi-Fiで利用される無線LANの規格群です。"
},
{
    id: 284,
    category: "technology",
    question: "ネットワークのポート番号の役割として、適切なものはどれか。",
    choices: [
        "コンピュータの物理的な設置場所を示す",
        "画面の解像度を決める",
        "ファイルの保存場所を指定する",
        "同じコンピュータ上で通信を行うアプリケーションやサービスを識別する"
    ],
    answer: 3,
    explanation: "ポート番号は、TCPやUDPによる通信で、コンピュータ上のどのアプリケーションやサービス宛てのデータかを識別するために使われます。"
},
{
    id: 285,
    category: "technology",
    question: "コンピュータでファイルやフォルダを管理し、記憶装置上のデータを読み書きする仕組みはどれか。",
    choices: [
        "ファイルシステム",
        "ファイアウォール",
        "ロードバランサ",
        "コンパイラ"
    ],
    answer: 0,
    explanation: "ファイルシステムは、記憶装置上のデータをファイルやフォルダとして管理し、保存場所や名前などを扱う仕組みです。"
},
{
    id: 286,
    category: "technology",
    question: "プログラムのソースコード全体を機械語などに変換してから実行する方式に用いられるソフトウェアはどれか。",
    choices: [
        "デバイスドライバ",
        "コンパイラ",
        "ブラウザ",
        "ファイル管理ソフト"
    ],
    answer: 1,
    explanation: "コンパイラは、プログラミング言語で書かれたソースコードを、機械語などの実行可能な形式に変換するソフトウェアです。"
},
{
    id: 287,
    category: "technology",
    question: "プログラムを実行するときに、命令を逐次的に解釈しながら処理する方式に用いられるものはどれか。",
    choices: [
        "スキャナ",
        "コンパイラだけ",
        "インタプリタ",
        "ルータ"
    ],
    answer: 2,
    explanation: "インタプリタは、プログラムの命令を逐次的に解釈しながら実行する方式に用いられます。"
},
{
    id: 288,
    category: "technology",
    question: "プログラムの処理手順を記述するために用いられる、特定の規則に従った記号や表現の集まりはどれか。",
    choices: [
        "IPアドレス",
        "MACアドレス",
        "文字コード",
        "プログラミング言語"
    ],
    answer: 3,
    explanation: "プログラミング言語は、コンピュータに実行させる処理手順などを記述するための言語です。"
},
{
    id: 289,
    category: "technology",
    question: "プログラムで、同じ種類のデータを順番に並べ、添字を使って各要素にアクセスするデータ構造はどれか。",
    choices: [
        "配列",
        "スタック",
        "キュー",
        "木構造"
    ],
    answer: 0,
    explanation: "配列は、複数のデータを順番に格納し、添字などを使って各要素にアクセスするデータ構造です。"
},
{
    id: 290,
    category: "technology",
    question: "最後に格納したデータを最初に取り出す方式のデータ構造はどれか。",
    choices: [
        "キュー",
        "スタック",
        "配列",
        "ハッシュ表"
    ],
    answer: 1,
    explanation: "スタックはLIFO（Last In, First Out）と呼ばれ、最後に格納したデータを最初に取り出すデータ構造です。"
},
{
    id: 291,
    category: "technology",
    question: "最初に格納したデータを最初に取り出す方式のデータ構造はどれか。",
    choices: [
        "スタック",
        "木構造",
        "キュー",
        "ハッシュ表"
    ],
    answer: 2,
    explanation: "キューはFIFO（First In, First Out）と呼ばれ、最初に格納したデータを最初に取り出すデータ構造です。"
},
{
    id: 292,
    category: "technology",
    question: "データのキーから格納場所を計算し、データの検索などに利用する仕組みはどれか。",
    choices: [
        "キュー",
        "スタック",
        "線形探索",
        "ハッシュ法"
    ],
    answer: 3,
    explanation: "ハッシュ法は、キーからハッシュ値を計算し、データの格納場所の決定や検索などに利用する方法です。"
},
{
    id: 293,
    category: "technology",
    question: "先頭から順番にデータを調べ、目的のデータを探す方法はどれか。",
    choices: [
        "線形探索",
        "二分探索",
        "ハッシュ法",
        "クイックソート"
    ],
    answer: 0,
    explanation: "線形探索は、データを先頭から順番に調べて目的のデータを探す方法です。データが整列されていなくても利用できます。"
},
{
    id: 294,
    category: "technology",
    question: "データが昇順または降順に整列されているとき、探索範囲を半分ずつ絞り込んで目的のデータを探す方法はどれか。",
    choices: [
        "線形探索",
        "二分探索",
        "バブルソート",
        "ハッシュ法"
    ],
    answer: 1,
    explanation: "二分探索は、整列されたデータを対象に、探索範囲を半分ずつ絞り込んで検索する方法です。"
},
{
    id: 295,
    category: "technology",
    question: "複数のデータを、指定された順序に並べ替える処理はどれか。",
    choices: [
        "検索",
        "暗号化",
        "ソート",
        "圧縮"
    ],
    answer: 2,
    explanation: "ソートは、数値や文字列などのデータを、昇順や降順などの指定された順序に並べ替える処理です。"
},
{
    id: 296,
    category: "technology",
    question: "アルゴリズムの計算量を表すとき、入力データの大きさに対して処理時間や処理回数がどのように増えるかを示す記法はどれか。",
    choices: [
        "HTML",
        "SQL",
        "UML",
        "O記法（オーダー記法）"
    ],
    answer: 3,
    explanation: "O記法（オーダー記法）は、入力データの大きさに対してアルゴリズムの処理時間や処理回数がどのように増えるかを表すために使われます。"
},
{
    id: 297,
    category: "technology",
    question: "Webページの構造や見出し、段落などを記述するために使われるマークアップ言語はどれか。",
    choices: [
        "HTML",
        "SQL",
        "Python",
        "Java"
    ],
    answer: 0,
    explanation: "HTMLは、Webページの構造や見出し、段落、リンクなどを記述するためのマークアップ言語です。"
},
{
    id: 298,
    category: "technology",
    question: "Webページの文字色、背景色、配置などの見た目を指定するために使われるものはどれか。",
    choices: [
        "DNS",
        "CSS",
        "DHCP",
        "SMTP"
    ],
    answer: 1,
    explanation: "CSSは、Webページの文字色、背景色、配置、文字サイズなど、表示上のデザインを指定するために使われます。"
},
{
    id: 299,
    category: "technology",
    question: "Webページに動的な動作を追加し、ボタン操作への反応などを実現するために、ブラウザ上でよく利用されるプログラミング言語はどれか。",
    choices: [
        "SQL",
        "HTML",
        "JavaScript",
        "CSS"
    ],
    answer: 2,
    explanation: "JavaScriptは、Webブラウザ上で動作し、ボタン操作への反応や画面内容の動的な変更などを実現するために利用されます。"
},
{
    id: 300,
    category: "technology",
    question: "Webサービスなどで、異なるソフトウェア同士がデータをやり取りするためのインタフェースとして利用されるものはどれか。",
    choices: [
        "CPU",
        "RAM",
        "GPU",
        "API"
    ],
    answer: 3,
    explanation: "APIは、ソフトウェアやサービスが機能やデータを利用するためのインタフェースです。異なるシステム同士の連携などに使われます。"
},
{
    id: 301,
    category: "technology",
    question: "家電製品や産業機器などに組み込まれ、特定の機能を制御するためのコンピュータシステムはどれか。",
    choices: [
        "組込みシステム",
        "検索エンジン",
        "データウェアハウス",
        "グループウェア"
    ],
    answer: 0,
    explanation: "組込みシステムは、家電製品や自動車、産業機器などに組み込まれ、機器の特定の機能を制御するシステムです。"
},
{
    id: 302,
    category: "technology",
    question: "温度、明るさ、圧力など、周囲の状態を検出して電気信号などに変換する装置はどれか。",
    choices: [
        "アクチュエーター",
        "センサー",
        "ルータ",
        "コンパイラ"
    ],
    answer: 1,
    explanation: "センサーは、温度や明るさ、圧力などの物理的な状態を検出し、測定結果を電気信号などに変換する装置です。"
},
{
    id: 303,
    category: "technology",
    question: "コンピュータからの指示を受け、モーターやバルブなどを動作させる装置はどれか。",
    choices: [
        "センサー",
        "キャッシュメモリ",
        "アクチュエーター",
        "DNSサーバ"
    ],
    answer: 2,
    explanation: "アクチュエーターは、電気信号などを物理的な動作に変換する装置です。モーターやバルブなどが例として挙げられます。"
},
{
    id: 304,
    category: "technology",
    question: "コンピュータシステムの信頼性を高めるため、故障が発生しても処理を継続できるように予備の機器などを用意する構成はどれか。",
    choices: [
        "単一構成",
        "データ圧縮",
        "デフラグ",
        "冗長構成"
    ],
    answer: 3,
    explanation: "冗長構成は、予備の機器や経路などを用意しておき、故障時にもシステムの停止を防いだり、影響を小さくしたりするための構成です。"
},
{
    id: 305,
    category: "technology",
    question: "システムの稼働率を高めるために、複数のサーバへ処理を振り分ける装置や仕組みはどれか。",
    choices: [
        "コンパイラ",
        "ロードバランサ",
        "スキャナ",
        "デバイスドライバ"
    ],
    answer: 1,
    explanation: "ロードバランサは、複数のサーバに処理を振り分け、負荷の集中を防いだり、システムの可用性を高めたりするために利用されます。"
},
{
    id: 306,
    category: "technology",
    question: "システムの処理能力を評価する際に、単位時間当たりに処理できる仕事量を表す指標はどれか。",
    choices: [
        "スループット",
        "レスポンスタイム",
        "稼働率",
        "MTTR"
    ],
    answer: 0,
    explanation: "スループットは、単位時間当たりに処理できる仕事量やデータ量を表す指標です。"
},
{
    id: 307,
    category: "technology",
    question: "利用者が処理を要求してから、結果が返ってくるまでにかかる時間を表す指標はどれか。",
    choices: [
        "スループット",
        "CPU使用率",
        "レスポンスタイム",
        "稼働率"
    ],
    answer: 2,
    explanation: "レスポンスタイムは、処理要求を行ってから応答が返ってくるまでの時間です。応答時間とも呼ばれます。"
},
{
    id: 308,
    category: "technology",
    question: "システムが故障してから、修理などによって復旧するまでの平均時間を表す指標はどれか。",
    choices: [
        "MTBF",
        "MIPS",
        "MTTF",
        "MTTR"
    ],
    answer: 3,
    explanation: "MTTRはMean Time To Repairの略で、平均修復時間を表します。一般に、MTTRが短いほど故障からの復旧が速いといえます。"
},
{
    id: 309,
    category: "technology",
    question: "修理を必要とする故障が発生するシステムについて、故障から次の故障までの平均時間を表す指標はどれか。",
    choices: [
        "MTBF",
        "MTTR",
        "レスポンスタイム",
        "スループット"
    ],
    answer: 0,
    explanation: "MTBFはMean Time Between Failuresの略で、平均故障間隔を表します。一般に、MTBFが長いほど故障の発生間隔が長いといえます。"
},
{
    id: 310,
    category: "technology",
    question: "修理を行わずに使用する機器について、故障するまでの平均動作時間を表す指標はどれか。",
    choices: [
        "MTTR",
        "MTTF",
        "MTBF",
        "スループット"
    ],
    answer: 1,
    explanation: "MTTFはMean Time To Failureの略で、平均故障時間を表します。修理せずに使用する部品や機器の寿命を評価する際などに用いられます。"
},
{
    id: 311,
    category: "technology",
    question: "システムの稼働率を求める式として、適切なものはどれか。ここではMTBFを平均故障間隔、MTTRを平均修復時間とする。",
    choices: [
        "MTTR ÷ MTBF",
        "MTBF × MTTR",
        "MTBF ÷（MTBF ＋ MTTR）",
        "MTBF ＋ MTTR"
    ],
    answer: 2,
    explanation: "修理を伴うシステムの稼働率は、一般にMTBF ÷（MTBF ＋ MTTR）で求めます。故障せずに動作する時間の割合を示します。"
},
{
    id: 312,
    category: "technology",
    question: "システムの処理能力が不足している場合に、CPUやメモリなどの資源を追加して性能を向上させる方法はどれか。",
    choices: [
        "データの暗号化",
        "データの正規化",
        "アクセスログの削除",
        "スケールアップ"
    ],
    answer: 3,
    explanation: "スケールアップは、サーバのCPUやメモリなどを高性能なものに変更し、1台の処理能力を向上させる方法です。"
},
{
    id: 313,
    category: "technology",
    question: "Webサービスの利用者が増えたとき、サーバの台数を増やして処理能力を向上させる方法はどれか。",
    choices: [
        "スケールアウト",
        "スケールアップ",
        "デフラグ",
        "コンパイル"
    ],
    answer: 0,
    explanation: "スケールアウトは、サーバなどの台数を増やして処理能力を向上させる方法です。負荷分散と組み合わせて利用されます。"
},
{
    id: 314,
    category: "technology",
    question: "コンピュータの電源が切れても、保存したデータが消えない記憶装置はどれか。",
    choices: [
        "CPUのレジスタ",
        "SSD",
        "キャッシュレジスタ",
        "揮発性のメインメモリ"
    ],
    answer: 1,
    explanation: "SSDは不揮発性の記憶装置であり、電源を切っても保存したデータは基本的に保持されます。"
},
{
    id: 315,
    category: "technology",
    question: "コンピュータの主記憶装置として使われ、電源を切ると通常は記憶内容が失われるものはどれか。",
    choices: [
        "SSD",
        "DVD",
        "RAM",
        "USBメモリ"
    ],
    answer: 2,
    explanation: "一般的な主記憶装置に使われるRAMは揮発性メモリであり、電源を切ると記憶内容が失われます。"
},
{
    id: 316,
    category: "technology",
    question: "CPUと主記憶装置の間に配置され、頻繁に使うデータを保持して処理を高速化する記憶装置はどれか。",
    choices: [
        "光ディスク",
        "外付けハードディスク",
        "磁気テープ",
        "キャッシュメモリ"
    ],
    answer: 3,
    explanation: "キャッシュメモリは、CPUが頻繁に利用するデータや命令を保持し、主記憶装置へのアクセスを減らして処理を高速化します。"
},
{
    id: 317,
    category: "technology",
    question: "停電が発生した際に、コンピュータなどへ一時的に電力を供給し、適切な終了処理を行う時間を確保する装置はどれか。",
    choices: [
        "UPS",
        "ルータ",
        "スイッチ",
        "プロキシサーバ"
    ],
    answer: 0,
    explanation: "UPSは無停電電源装置です。停電時にバッテリーから電力を供給し、機器の安全な終了や短時間の運転継続を支援します。"
},
{
    id: 318,
    category: "technology",
    question: "同じデータを複数のディスクに書き込み、1台のディスクが故障してもデータを失いにくくするRAIDの方式はどれか。",
    choices: [
        "RAID 0",
        "RAID 1",
        "RAID 5だけ",
        "RAIDを使用しない方式"
    ],
    answer: 1,
    explanation: "RAID 1はミラーリングと呼ばれ、同じデータを複数のディスクに書き込みます。1台が故障しても、残りのディスクからデータを利用できる可能性があります。"
},
{
    id: 319,
    category: "technology",
    question: "複数のディスクにデータを分散して書き込み、読み書きの性能向上を目的とする一方、冗長性を持たないRAID方式はどれか。",
    choices: [
        "RAID 1",
        "RAID 5",
        "RAID 0",
        "RAID 6"
    ],
    answer: 2,
    explanation: "RAID 0はデータを複数のディスクに分散して記録し、性能向上を図る方式です。冗長性がないため、ディスクが1台でも故障するとデータを失うおそれがあります。"
},
{
    id: 320,
    category: "technology",
    question: "ソフトウェアの脆弱性を修正したり、機能を改善したりするために提供される更新プログラムはどれか。",
    choices: [
        "データベース",
        "ファイルシステム",
        "プロトコル",
        "セキュリティパッチ"
    ],
    answer: 3,
    explanation: "セキュリティパッチは、ソフトウェアの脆弱性などを修正するために提供される更新プログラムです。脆弱性を放置すると、攻撃に悪用される可能性があります。"
},
{
    id: 321,
    category: "technology",
    question: "ソフトウェアの開発者がソースコードを公開し、利用者がライセンス条件に従って利用・改変・再配布できるソフトウェアはどれか。",
    choices: [
        "OSS",
        "専用ハードウェア",
        "ファームウェアだけ",
        "商用ソフトウェアすべて"
    ],
    answer: 0,
    explanation: "OSSはオープンソースソフトウェアの略です。ソースコードが公開され、ライセンス条件に従って利用や改変、再配布などが認められています。"
},
{
    id: 322,
    category: "technology",
    question: "情報セキュリティの3要素のうち、許可された利用者だけが情報にアクセスできることを表すものはどれか。",
    choices: [
        "可用性",
        "機密性",
        "完全性",
        "保守性"
    ],
    answer: 1,
    explanation: "機密性は、許可された利用者だけが情報にアクセスできることを表します。情報セキュリティの3要素は、機密性・完全性・可用性です。"
},
{
    id: 323,
    category: "technology",
    question: "情報セキュリティの3要素のうち、必要なときに情報やシステムを利用できることを表すものはどれか。",
    choices: [
        "機密性",
        "完全性",
        "可用性",
        "匿名性"
    ],
    answer: 2,
    explanation: "可用性は、必要なときに情報やシステムを利用できることを表します。バックアップや冗長構成などは、可用性の確保に役立ちます。"
},
];