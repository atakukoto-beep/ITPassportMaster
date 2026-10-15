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

];