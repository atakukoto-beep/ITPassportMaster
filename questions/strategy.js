// =====================================
// ITパスポート マスター
// ストラテジ系問題
// strategy.js Ver0.4
// =====================================

const strategyQuestions = [

    {
        id: 101,
        category: "strategy",
        question: "企業が経営理念や経営目標を実現するために、長期的な視点で策定するものはどれか。",
        choices: [
            "経営戦略",
            "操作手順",
            "プログラム",
            "作業マニュアル"
        ],
        answer: 0,
        explanation: "経営戦略は、企業が将来の目標を達成するための基本的な方向性や方針を定めたものです。"
    },

    {
        id: 102,
        category: "strategy",
        question: "SWOT分析で、自社の内部環境に分類されるものはどれか。",
        choices: [
            "市場の成長率",
            "競合企業の動向",
            "自社の技術力",
            "法制度の変更"
        ],
        answer: 2,
        explanation: "SWOT分析では、Strength（強み）とWeakness（弱み）が内部環境、Opportunity（機会）とThreat（脅威）が外部環境です。"
    },

    {
        id: 103,
        category: "strategy",
        question: "顧客が商品やサービスを知ってから購入するまでの流れを分析する際に活用できるものはどれか。",
        choices: [
            "カスタマージャーニー",
            "バックアップ",
            "ファイアウォール",
            "コンパイラ"
        ],
        answer: 0,
        explanation: "カスタマージャーニーは、顧客が商品やサービスを認知し、検討、購入、利用するまでの行動や心理を整理する考え方です。"
    },

    {
        id: 104,
        category: "strategy",
        question: "企業活動において、商品やサービスを提供することで得られる収入を何というか。",
        choices: [
            "売上高",
            "減価償却費",
            "固定費",
            "負債"
        ],
        answer: 0,
        explanation: "商品やサービスを販売することで得られる金額を売上高といいます。"
    },

    {
        id: 105,
        category: "strategy",
        question: "企業の強みを生かして他社との差別化を図る経営戦略として適切なものはどれか。",
        choices: [
            "競争優位を確立する",
            "全ての業務を停止する",
            "顧客の要求を無視する",
            "市場調査を行わない"
        ],
        answer: 0,
        explanation: "自社の強みを生かして他社との差別化を図ることは、競争優位の確立につながります。"
    },

    {
        id: 106,
        category: "strategy",
        question: "企業が新しい市場へ進出することを何というか。",
        choices: [
            "市場開拓",
            "在庫管理",
            "品質管理",
            "設備保全"
        ],
        answer: 0,
        explanation: "新しい市場を開拓して事業領域を広げることを市場開拓といいます。"
    },

    {
        id: 107,
        category: "strategy",
        question: "顧客の属性や購買行動などによって市場をいくつかのグループに分けることを何というか。",
        choices: [
            "市場細分化",
            "暗号化",
            "仮想化",
            "標準化"
        ],
        answer: 0,
        explanation: "市場細分化（セグメンテーション）は、顧客の特徴やニーズなどによって市場を分けることです。"
    },

    {
        id: 108,
        category: "strategy",
        question: "企業が商品を販売する価格、流通、広告などを組み合わせて考えることを何というか。",
        choices: [
            "マーケティングミックス",
            "システム監査",
            "リスク分析",
            "アクセス制御"
        ],
        answer: 0,
        explanation: "マーケティングミックスは、商品、価格、流通、プロモーションなどのマーケティング手段を組み合わせる考え方です。"
    },

    {
        id: 109,
        category: "strategy",
        question: "企業が業務の一部を外部の企業に委託することを何というか。",
        choices: [
            "アウトソーシング",
            "インストール",
            "デバッグ",
            "コンパイル"
        ],
        answer: 0,
        explanation: "アウトソーシングは、自社の業務の一部を外部の専門企業などに委託することです。"
    },

    {
        id: 110,
        category: "strategy",
        question: "企業の財務状態を表す財務諸表の一つで、資産・負債・純資産を示すものはどれか。",
        choices: [
            "貸借対照表",
            "損益計算書",
            "キャッシュフロー計算書",
            "組織図"
        ],
        answer: 0,
        explanation: "貸借対照表（B/S）は、ある時点における資産、負債、純資産の状態を表します。"
    },
{
        id: 111,
        category: "strategy",
        question: "企業が自社の商品やサービスを販売する対象となる人々の集まりを何というか。",
        choices: [
            "市場",
            "在庫",
            "設備",
            "組織"
        ],
        answer: 0,
        explanation: "商品やサービスを購入する顧客や、その対象となる領域を市場といいます。"
    },

    {
        id: 112,
        category: "strategy",
        question: "競合する企業の商品やサービスについて調査する主な目的はどれか。",
        choices: [
            "自社との違いや競争上の強みを把握する",
            "自社の社員数を減らす",
            "コンピュータの処理速度を上げる",
            "全ての広告を停止する"
        ],
        answer: 0,
        explanation: "競合分析では、競合企業の商品やサービス、価格、特徴などを調査し、自社の競争力向上に役立てます。"
    },

    {
        id: 113,
        category: "strategy",
        question: "企業が新しい商品を開発して既存の顧客に販売する戦略はどれか。",
        choices: [
            "新商品開発",
            "市場撤退",
            "設備廃棄",
            "業務停止"
        ],
        answer: 0,
        explanation: "既存市場の顧客に対して新しい商品やサービスを提供することは、新商品開発の戦略に当たります。"
    },

    {
        id: 114,
        category: "strategy",
        question: "企業の収益と費用が等しくなり、利益がゼロとなる売上高を求める分析はどれか。",
        choices: [
            "損益分岐点分析",
            "市場細分化",
            "SWOT分析",
            "顧客分析"
        ],
        answer: 0,
        explanation: "損益分岐点分析では、売上高と費用が等しくなり、利益がゼロになる点を分析します。"
    },

    {
        id: 115,
        category: "strategy",
        question: "企業が保有する経営資源として適切な組合せはどれか。",
        choices: [
            "人・物・金・情報",
            "天気・季節・曜日・時間",
            "画面・キーボード・マウス・電源",
            "道路・鉄道・港・空港"
        ],
        answer: 0,
        explanation: "企業の代表的な経営資源として、人、物、金、情報が挙げられます。"
    },
    {
        id: 116,
        category: "strategy",
        question: "企業が自社の商品やサービスの認知度を高めるために行う活動はどれか。",
        choices: [
            "プロモーション",
            "在庫削減",
            "設備点検",
            "データ消去"
        ],
        answer: 0,
        explanation: "プロモーションは、商品やサービスを顧客に知らせ、購入などを促すための活動です。"
    },

    {
        id: 117,
        category: "strategy",
        question: "顧客のニーズを把握するために実施する活動として適切なものはどれか。",
        choices: [
            "市場調査",
            "プログラムのコンパイル",
            "ファイルの暗号化",
            "サーバの再起動"
        ],
        answer: 0,
        explanation: "市場調査では、顧客のニーズや市場の状況などを調査し、商品開発や販売戦略などに活用します。"
    },

    {
        id: 118,
        category: "strategy",
        question: "企業が複数の事業を行っている場合、それぞれの事業の位置付けや将来性を分析するために利用される手法はどれか。",
        choices: [
            "PPM",
            "WBS",
            "PERT",
            "PDCA"
        ],
        answer: 0,
        explanation: "PPM（プロダクト・ポートフォリオ・マネジメント）は、複数の事業を市場成長率と市場占有率などから分析します。"
    },

    {
        id: 119,
        category: "strategy",
        question: "業務を改善するために、計画、実行、評価、改善を繰り返す考え方はどれか。",
        choices: [
            "PDCA",
            "SWOT",
            "PPM",
            "BPR"
        ],
        answer: 0,
        explanation: "PDCAは、Plan（計画）、Do（実行）、Check（評価）、Act（改善）のサイクルを繰り返して業務を改善する考え方です。"
    },

    {
        id: 120,
        category: "strategy",
        question: "企業の業務や組織を抜本的に見直し、業務プロセスを再構築することを何というか。",
        choices: [
            "BPR",
            "CRM",
            "ERP",
            "OCR"
        ],
        answer: 0,
        explanation: "BPR（Business Process Re-engineering）は、既存の業務プロセスを抜本的に見直し、再構築する考え方です。"
    },
    {
        id: 121,
        category: "strategy",
        question: "ある企業では、顧客からの問い合わせ内容を分析したところ、同じ質問が繰り返し寄せられていることが分かった。この情報を活用する取組として、最も適切なものはどれか。",
        choices: [
            "FAQを作成して顧客が自分で解決できるようにする",
            "問い合わせ窓口を廃止する",
            "全ての顧客情報を削除する",
            "商品の販売価格を無条件に上げる"
        ],
        answer: 0,
        explanation: "頻繁に寄せられる質問をFAQとして整理することで、顧客が自分で回答を確認でき、問い合わせ対応の負担軽減にもつながります。"
    },

    {
        id: 122,
        category: "strategy",
        question: "企業がIoTを活用して工場の設備からデータを収集し、設備の故障を事前に予測する取組として、最も適切なものはどれか。",
        choices: [
            "設備の状態データを分析して予防保全に活用する",
            "設備から取得したデータを全て廃棄する",
            "設備を定期的に全て交換する",
            "設備の稼働状況を記録しない"
        ],
        answer: 0,
        explanation: "IoTによって設備の状態データを収集・分析し、故障する前に保守を行うことは予防保全につながります。"
    },

    {
        id: 123,
        category: "strategy",
        question: "企業が顧客一人ひとりの購入履歴や問い合わせ履歴を管理し、顧客との関係を良好にするために活用するシステムはどれか。",
        choices: [
            "CRM",
            "WBS",
            "DNS",
            "OS"
        ],
        answer: 0,
        explanation: "CRM（Customer Relationship Management）は、顧客情報や購買履歴などを管理し、顧客との関係を強化するための仕組みです。"
    },

    {
        id: 124,
        category: "strategy",
        question: "企業が販売した商品の売上だけでなく、購入後の問い合わせや修理などの情報も管理する目的として、最も適切なものはどれか。",
        choices: [
            "顧客満足度の向上につなげる",
            "顧客との接点を減らす",
            "商品情報を全て削除する",
            "販売活動を停止する"
        ],
        answer: 0,
        explanation: "購入後の問い合わせや修理などの情報を管理することで、顧客のニーズを把握し、サービスや顧客満足度の向上に活用できます。"
    },

    {
        id: 125,
        category: "strategy",
        question: "企業が業務をデジタル技術によって変革し、競争力を高めることを目指す取組はどれか。",
        choices: [
            "DX",
            "バックアップ",
            "デバッグ",
            "暗号化"
        ],
        answer: 0,
        explanation: "DX（デジタルトランスフォーメーション）は、デジタル技術を活用して業務やビジネスモデルなどを変革し、競争上の優位性を確立することを目指します。"
    },
     {
        id: 126,
        category: "strategy",
        question: "ある小売店では、曜日や時間帯によって商品の売れ方が大きく異なる。過去の販売データを分析して発注量を決める取組として、最も適切なものはどれか。",
        choices: [
            "販売データを活用した需要予測",
            "全ての商品を同じ数量で発注する",
            "販売データを破棄する",
            "発注担当者を置かない"
        ],
        answer: 0,
        explanation: "過去の販売データを分析して将来の需要を予測することで、適切な発注量を決めることができます。"
    },

    {
        id: 127,
        category: "strategy",
        question: "企業が新しいITサービスを導入する際、導入によって得られる効果と必要な費用を比較して導入の妥当性を判断する考え方はどれか。",
        choices: [
            "費用対効果",
            "市場細分化",
            "情報漏えい",
            "アクセス制御"
        ],
        answer: 0,
        explanation: "費用対効果では、導入や実施に必要な費用に対して、どの程度の効果が得られるかを比較します。"
    },

    {
        id: 128,
        category: "strategy",
        question: "企業が業務の中で蓄積した知識や経験を組織全体で共有し、業務改善や新しい価値の創出に活用する活動はどれか。",
        choices: [
            "ナレッジマネジメント",
            "ファイル圧縮",
            "ネットワーク監視",
            "データ消去"
        ],
        answer: 0,
        explanation: "ナレッジマネジメントは、組織内の知識や経験を共有・活用し、業務改善や新しい価値の創出につなげる活動です。"
    },

    {
        id: 129,
        category: "strategy",
        question: "企業が複数の部門で同じ種類のデータを個別に管理しているため、データの重複や不整合が発生している。この問題を改善する方法として適切なものはどれか。",
        choices: [
            "データを統合して一元的に管理する",
            "同じデータをさらに複製する",
            "データの更新を禁止する",
            "各部門のデータを全て削除する"
        ],
        answer: 0,
        explanation: "データを統合して一元管理することで、重複や不整合を減らし、データを効率的に利用できます。"
    },

    {
        id: 130,
        category: "strategy",
        question: "企業が新しい事業を始める前に、その事業に関係する法律や規制を確認することの主な目的はどれか。",
        choices: [
            "法令違反のリスクを低減する",
            "競合企業を必ずなくす",
            "全ての費用をゼロにする",
            "顧客を増やすことを保証する"
        ],
        answer: 0,
        explanation: "事業を開始する前に関係する法律や規制を確認することで、法令違反などのリスクを低減できます。"
    },
    {
        id: 131,
        category: "strategy",
        question: "企業が自社の強みや弱み、外部環境の機会や脅威を整理するために利用する手法はどれか。",
        choices: [
            "SWOT分析",
            "WBS",
            "PERT",
            "システム監査"
        ],
        answer: 0,
        explanation: "SWOT分析は、企業内部の強み（Strength）・弱み（Weakness）と、外部環境の機会（Opportunity）・脅威（Threat）を整理して分析する手法です。"
    },

    {
        id: 132,
        category: "strategy",
        question: "企業が特定の商品やサービスについて、他社よりも低いコストで提供できることによって競争上の優位性を得る戦略はどれか。",
        choices: [
            "コストリーダーシップ戦略",
            "市場細分化戦略",
            "顧客関係管理",
            "プロモーション戦略"
        ],
        answer: 0,
        explanation: "コストリーダーシップ戦略は、効率化などによって競合他社より低いコストを実現し、競争優位を確立する戦略です。"
    },

    {
        id: 133,
        category: "strategy",
        question: "企業が既存の商品を新しい市場に販売することで事業を拡大する戦略はどれか。",
        choices: [
            "市場開拓",
            "商品開発",
            "市場撤退",
            "業務縮小"
        ],
        answer: 0,
        explanation: "市場開拓は、既存の商品やサービスを新しい顧客層や地域などの新市場へ展開する戦略です。"
    },

    {
        id: 134,
        category: "strategy",
        question: "企業が新しい商品を開発し、それを新しい市場に投入する成長戦略はどれか。",
        choices: [
            "多角化",
            "市場浸透",
            "市場開拓",
            "既存事業の縮小"
        ],
        answer: 0,
        explanation: "多角化は、新しい商品・サービスを新しい市場へ展開することで、新たな事業領域に進出する戦略です。"
    },

    {
        id: 135,
        category: "strategy",
        question: "商品の販売価格を決定する際に、競合他社の価格を参考にする方法はどれか。",
        choices: [
            "競争志向型価格設定",
            "原価計算",
            "在庫管理",
            "設備管理"
        ],
        answer: 0,
        explanation: "競争志向型価格設定は、競合他社の価格などを参考にして自社商品の価格を決定する方法です。"
    },

    {
        id: 136,
        category: "strategy",
        question: "顧客が商品やサービスを購入した後も継続的に利用してもらい、長期的な関係を築くことを重視する考え方はどれか。",
        choices: [
            "顧客ロイヤルティ",
            "設備保全",
            "在庫削減",
            "原価管理"
        ],
        answer: 0,
        explanation: "顧客ロイヤルティは、顧客が企業や商品・サービスに対して持つ信頼や愛着などを表し、継続利用や再購入につながります。"
    },

    {
        id: 137,
        category: "strategy",
        question: "顧客の購入履歴などを分析し、顧客ごとに適した商品を提案する仕組みとして適切なものはどれか。",
        choices: [
            "レコメンデーション",
            "ファイアウォール",
            "バックアップ",
            "コンパイル"
        ],
        answer: 0,
        explanation: "レコメンデーションは、顧客の購入履歴や閲覧履歴などを分析し、顧客に適した商品やサービスを推薦する仕組みです。"
    },

    {
        id: 138,
        category: "strategy",
        question: "企業が商品やサービスを販売するために利用するWebサイトやスマートフォンアプリなどの経路を何というか。",
        choices: [
            "販売チャネル",
            "開発環境",
            "通信プロトコル",
            "データベース"
        ],
        answer: 0,
        explanation: "販売チャネルは、商品やサービスを顧客に届けるための販売経路を指します。店舗、Webサイト、アプリなどがあります。"
    },

    {
        id: 139,
        category: "strategy",
        question: "企業がインターネット上で商品やサービスを販売する取引形態はどれか。",
        choices: [
            "電子商取引",
            "システム監査",
            "情報セキュリティ管理",
            "設備保全"
        ],
        answer: 0,
        explanation: "電子商取引（EC）は、インターネットなどのネットワークを利用して商品やサービスを売買する取引です。"
    },

    {
        id: 140,
        category: "strategy",
        question: "企業間で商品やサービスを電子的に取引する形態を表すものはどれか。",
        choices: [
            "BtoB",
            "BtoC",
            "CtoC",
            "CtoB"
        ],
        answer: 0,
        explanation: "BtoBはBusiness to Businessの略で、企業間の取引を表します。"
    },

    {
        id: 141,
        category: "strategy",
        question: "企業が一般消費者に商品やサービスを販売する取引形態を表すものはどれか。",
        choices: [
            "BtoC",
            "BtoB",
            "CtoC",
            "GtoG"
        ],
        answer: 0,
        explanation: "BtoCはBusiness to Consumerの略で、企業から一般消費者への商品やサービスの提供を表します。"
    },

    {
        id: 142,
        category: "strategy",
        question: "一般消費者同士がインターネット上で商品などを売買する取引形態はどれか。",
        choices: [
            "CtoC",
            "BtoB",
            "BtoC",
            "GtoB"
        ],
        answer: 0,
        explanation: "CtoCはConsumer to Consumerの略で、一般消費者同士の取引を表します。"
    },

    {
        id: 143,
        category: "strategy",
        question: "企業が商品やサービスを提供する際に、環境への影響を考慮して事業活動を行うことの目的として適切なものはどれか。",
        choices: [
            "環境負荷を低減する",
            "全ての製品を廃棄する",
            "顧客情報を削除する",
            "業務を停止する"
        ],
        answer: 0,
        explanation: "環境への影響を考慮した事業活動によって、資源の有効利用や廃棄物削減などを行い、環境負荷を低減できます。"
    },

    {
        id: 144,
        category: "strategy",
        question: "企業が社会の一員として果たすべき責任を意識して経営を行う考え方はどれか。",
        choices: [
            "CSR",
            "DNS",
            "WBS",
            "OCR"
        ],
        answer: 0,
        explanation: "CSR（Corporate Social Responsibility）は、企業が社会の一員として果たすべき責任を考え、社会や環境などに配慮して活動する考え方です。"
    },

    {
        id: 145,
        category: "strategy",
        question: "企業が法令や社内規則などを守りながら事業活動を行うことを重視する考え方はどれか。",
        choices: [
            "コンプライアンス",
            "アウトソーシング",
            "マーケティング",
            "セグメンテーション"
        ],
        answer: 0,
        explanation: "コンプライアンスは、法令や規則、社会的なルールなどを守って事業活動を行うことです。"
    },

    {
        id: 146,
        category: "strategy",
        question: "企業が不正行為を防止するために、業務を相互にけん制できるよう担当者の役割を分けることはどれか。",
        choices: [
            "職務分掌",
            "市場細分化",
            "商品開発",
            "需要予測"
        ],
        answer: 0,
        explanation: "職務分掌は、業務の担当や権限を分けることで、相互けん制を働かせ、不正や誤りを防止する考え方です。"
    },

    {
        id: 147,
        category: "strategy",
        question: "企業が経営上の重要な意思決定を行う際に、将来起こり得る不確実な事象を考慮する活動はどれか。",
        choices: [
            "リスクマネジメント",
            "データ入力",
            "ファイル圧縮",
            "画面設計"
        ],
        answer: 0,
        explanation: "リスクマネジメントは、事業活動に伴うリスクを把握・分析し、適切な対策を講じる活動です。"
    },

    {
        id: 148,
        category: "strategy",
        question: "企業が新しいITシステムを導入する際、導入前後の業務量や費用などを比較する主な目的はどれか。",
        choices: [
            "導入効果を評価する",
            "顧客を減らす",
            "データを削除する",
            "社員を必ず増やす"
        ],
        answer: 0,
        explanation: "ITシステムの導入前後を比較することで、業務効率化や費用削減などの導入効果を評価できます。"
    },

    {
        id: 149,
        category: "strategy",
        question: "企業が新しいシステムの導入に必要な費用と、それによって得られる利益を比較する考え方はどれか。",
        choices: [
            "投資対効果",
            "市場細分化",
            "職務分掌",
            "顧客ロイヤルティ"
        ],
        answer: 0,
        explanation: "投資対効果は、投資した費用に対してどの程度の効果や利益が得られるかを評価する考え方です。"
    },

    {
        id: 150,
        category: "strategy",
        question: "企業が経営目標を達成するために、達成状況を数値で評価するために設定する指標はどれか。",
        choices: [
            "KPI",
            "DNS",
            "HTML",
            "FTP"
        ],
        answer: 0,
        explanation: "KPI（重要業績評価指標）は、目標達成に向けた業務の進捗状況を測定するための重要な指標です。"
    },

    {
        id: 151,
        category: "strategy",
        question: "企業が最終的に達成したい経営上の目標を表す指標はどれか。",
        choices: [
            "KGI",
            "KPI",
            "WBS",
            "SLA"
        ],
        answer: 0,
        explanation: "KGI（重要目標達成指標）は、企業や組織が最終的に達成したい目標を数値で表した指標です。"
    },

    {
        id: 152,
        category: "strategy",
        question: "企業が設定した目標を達成するために、具体的な数値目標を段階的に設定して管理する方法として適切なものはどれか。",
        choices: [
            "KPIによる進捗管理",
            "データの完全削除",
            "ネットワークの切断",
            "設備の廃棄"
        ],
        answer: 0,
        explanation: "KPIを設定して定期的に測定することで、最終目標に向けた業務の進捗状況を管理できます。"
    },

    {
        id: 153,
        category: "strategy",
        question: "企業が複数の業務システムで利用するデータを統一的に管理し、部門間で共有しやすくする取組として適切なものはどれか。",
        choices: [
            "データ標準化",
            "データ破棄",
            "業務停止",
            "端末交換"
        ],
        answer: 0,
        explanation: "データ標準化は、データの形式や定義などを統一することで、異なるシステムや部門間でデータを利用しやすくする取組です。"
    },

    {
        id: 154,
        category: "strategy",
        question: "企業がデータを分析して経営上の意思決定に役立てるために、データを収集・蓄積する仕組みはどれか。",
        choices: [
            "データウェアハウス",
            "ファイアウォール",
            "コンパイラ",
            "プリンタ"
        ],
        answer: 0,
        explanation: "データウェアハウスは、企業内のさまざまなデータを分析しやすい形で蓄積し、意思決定などに活用するための仕組みです。"
    },

    {
        id: 155,
        category: "strategy",
        question: "大量のデータから、統計的な手法や機械学習などを利用して有用な知識を見つけ出す活動はどれか。",
        choices: [
            "データマイニング",
            "データ消去",
            "ファイル転送",
            "画面表示"
        ],
        answer: 0,
        explanation: "データマイニングは、大量のデータを分析し、そこから有用なパターンや知識を発見する活動です。"
    },

    {
        id: 156,
        category: "strategy",
        question: "企業が業務上必要な情報を関係者が必要なときに利用できるよう、適切に収集・管理・共有する活動はどれか。",
        choices: [
            "情報資産管理",
            "設備廃棄",
            "商品返品",
            "広告停止"
        ],
        answer: 0,
        explanation: "情報資産管理では、企業が保有する情報を重要な資産として適切に管理し、必要な場面で有効活用できるようにします。"
    },

    {
        id: 157,
        category: "strategy",
        question: "企業が業務に必要な情報を、決められた形式やルールに従って登録・更新することの主な目的はどれか。",
        choices: [
            "情報の正確性や一貫性を保つ",
            "情報を必ず削除する",
            "業務を停止する",
            "顧客を減らす"
        ],
        answer: 0,
        explanation: "情報を決められたルールに従って登録・更新することで、情報の正確性や一貫性を保ち、業務で適切に利用できます。"
    },

    {
        id: 158,
        category: "strategy",
        question: "企業が業務上の問題を発見した際、その原因を分析して再発防止策を検討することの主な目的はどれか。",
        choices: [
            "業務の改善につなげる",
            "問題を隠す",
            "記録を削除する",
            "顧客との関係をなくす"
        ],
        answer: 0,
        explanation: "問題の原因を分析して再発防止策を検討することで、同じ問題の発生を防ぎ、業務品質の改善につなげられます。"
    },

    {
        id: 159,
        category: "strategy",
        question: "企業が経営環境の変化に対応するため、一定期間ごとに経営戦略を見直すことの主な目的はどれか。",
        choices: [
            "変化した環境に適した戦略に更新する",
            "全ての業務を停止する",
            "顧客情報を削除する",
            "競合企業の活動を禁止する"
        ],
        answer: 0,
        explanation: "市場や技術、法制度などの経営環境は変化するため、状況に応じて経営戦略を見直すことが重要です。"
    },

    {
        id: 160,
        category: "strategy",
        question: "企業が経営戦略を実行した結果を評価し、必要に応じて次の戦略や施策を修正する活動として適切なものはどれか。",
        choices: [
            "戦略の評価と改善",
            "データの無条件削除",
            "設備の全廃",
            "業務の永久停止"
        ],
        answer: 0,
        explanation: "戦略を実行した後に成果を評価し、必要に応じて施策を修正することで、経営目標の達成に向けて継続的に改善できます。"
    },
{
    id: 161,
    category: "strategy",
    question: "企業の経営環境を分析する際、自社・顧客・競合の3つの視点から分析する手法はどれか。",
    choices: [
        "3C分析",
        "SWOT分析",
        "PEST分析",
        "ABC分析"
    ],
    answer: 0,
    explanation: "3C分析は、Customer（顧客）、Competitor（競合）、Company（自社）の3つの視点から経営環境を分析する手法です。"
},

{
    id: 162,
    category: "strategy",
    question: "企業が他社には容易にまねできない独自の技術やノウハウなどを強みとして活用する考え方はどれか。",
    choices: [
        "コアコンピタンス",
        "アウトソーシング",
        "ベンチマーキング",
        "デファクトスタンダード"
    ],
    answer: 0,
    explanation: "コアコンピタンスとは、他社が容易に模倣できない企業独自の技術や能力など、競争優位の源泉となる強みです。"
},

{
    id: 163,
    category: "strategy",
    question: "企業活動を主活動と支援活動に分け、どの活動が顧客への価値を生み出しているかを分析する手法はどれか。",
    choices: [
        "バリューチェーン分析",
        "3C分析",
        "PEST分析",
        "RFM分析"
    ],
    answer: 0,
    explanation: "バリューチェーン分析は、企業活動を一連の価値創造活動として捉え、どの活動が競争優位につながるかを分析します。"
},

{
    id: 164,
    category: "strategy",
    question: "自社の業務や製品について、優れた企業の方法と比較して改善点を見つける手法はどれか。",
    choices: [
        "ベンチマーキング",
        "ブレーンストーミング",
        "クラウドソーシング",
        "ファシリテーション"
    ],
    answer: 0,
    explanation: "ベンチマーキングは、優れた企業や業界標準などと自社を比較し、改善につなげる手法です。"
},

{
    id: 165,
    category: "strategy",
    question: "企業の業績を評価するために、最終的な経営目標を数値化した指標はどれか。",
    choices: [
        "KGI",
        "KPI",
        "CSF",
        "RFM"
    ],
    answer: 0,
    explanation: "KGIはKey Goal Indicatorの略で、最終的な経営目標の達成度を測る指標です。"
},

{
    id: 166,
    category: "strategy",
    question: "KGIを達成するために設定する、中間的な達成度を測る指標はどれか。",
    choices: [
        "KPI",
        "KGI",
        "ROI",
        "ROE"
    ],
    answer: 0,
    explanation: "KPIはKey Performance Indicatorの略で、KGIを達成するための途中経過を測る重要業績評価指標です。"
},

{
    id: 167,
    category: "strategy",
    question: "企業が経営目標を達成するうえで、特に重要となる成功要因を表すものはどれか。",
    choices: [
        "CSF",
        "KPI",
        "KGI",
        "BSC"
    ],
    answer: 0,
    explanation: "CSFはCritical Success Factorの略で、経営目標を達成するために重要となる成功要因です。"
},

{
    id: 168,
    category: "strategy",
    question: "顧客の購入履歴などを分析し、最終購入日、購入頻度、購入金額の3つの観点から顧客を分類する手法はどれか。",
    choices: [
        "RFM分析",
        "ABC分析",
        "3C分析",
        "SWOT分析"
    ],
    answer: 0,
    explanation: "RFM分析は、Recency（最終購入日）、Frequency（購入頻度）、Monetary（購入金額）の3つの指標で顧客を分析します。"
},

{
    id: 169,
    category: "strategy",
    question: "顧客が取引開始から終了までの期間に企業にもたらす利益の総額を表す指標はどれか。",
    choices: [
        "LTV",
        "KPI",
        "ROI",
        "ROE"
    ],
    answer: 0,
    explanation: "LTVはLife Time Valueの略で、顧客が取引期間を通じてもたらす利益や売上の総額を表します。"
},

{
    id: 170,
    category: "strategy",
    question: "店舗、Webサイト、スマートフォンアプリなど複数の販売チャネルを連携させ、顧客に一貫した購買体験を提供する考え方はどれか。",
    choices: [
        "オムニチャネル",
        "アウトソーシング",
        "オープンソース",
        "シングルサインオン"
    ],
    answer: 0,
    explanation: "オムニチャネルは、実店舗やWeb、アプリなど複数の顧客接点を連携させ、統合された購買体験を提供する考え方です。"
},

{
    id: 171,
    category: "strategy",
    question: "企業が他社を買収することによって事業規模や事業領域を拡大することを表すものはどれか。",
    choices: [
        "M&A",
        "BPR",
        "ERP",
        "CRM"
    ],
    answer: 0,
    explanation: "M&AはMergers and Acquisitionsの略で、企業の合併や買収を意味します。"
},

{
    id: 172,
    category: "strategy",
    question: "複数の企業が、それぞれの経営資源や技術を活用するために協力関係を構築することはどれか。",
    choices: [
        "業務提携",
        "独占禁止",
        "事業撤退",
        "清算"
    ],
    answer: 0,
    explanation: "業務提携は、複数の企業が技術や販売網などの経営資源を相互に活用するために協力することです。"
},

{
    id: 173,
    category: "strategy",
    question: "社外の技術やアイデアを積極的に取り入れ、自社の技術と組み合わせて新しい製品やサービスを生み出す考え方はどれか。",
    choices: [
        "オープンイノベーション",
        "垂直統合",
        "集中戦略",
        "固定費削減"
    ],
    answer: 0,
    explanation: "オープンイノベーションは、社外の知識や技術などを積極的に活用して新しい価値を生み出す考え方です。"
},

{
    id: 174,
    category: "strategy",
    question: "利用者が増えるほど、そのサービス自体の価値が高まる効果を何というか。",
    choices: [
        "ネットワーク効果",
        "相乗効果",
        "範囲の経済",
        "規模の不経済"
    ],
    answer: 0,
    explanation: "ネットワーク効果とは、サービスの利用者が増えることで、そのサービスの価値がさらに高まる効果です。"
},

{
    id: 175,
    category: "strategy",
    question: "基本的なサービスを無料で提供し、一部の高度な機能を有料で提供するビジネスモデルはどれか。",
    choices: [
        "フリーミアム",
        "従量課金",
        "リース",
        "フランチャイズ"
    ],
    answer: 0,
    explanation: "フリーミアムは、基本機能を無料で提供し、高度な機能や追加サービスを有料で提供するモデルです。"
},

{
    id: 176,
    category: "strategy",
    question: "商品やサービスを一定期間利用する権利に対して、継続的に料金を支払うビジネスモデルはどれか。",
    choices: [
        "サブスクリプション",
        "買い切り方式",
        "委託販売",
        "競売方式"
    ],
    answer: 0,
    explanation: "サブスクリプションは、一定期間の利用権などに対して継続的に料金を支払うビジネスモデルです。"
},

{
    id: 177,
    category: "strategy",
    question: "インターネット上で多数の人から少額ずつ資金を集め、事業や製品開発などに活用する仕組みはどれか。",
    choices: [
        "クラウドファンディング",
        "アウトソーシング",
        "ファクタリング",
        "リース"
    ],
    answer: 0,
    explanation: "クラウドファンディングは、インターネットなどを通じて多数の人から資金を募る仕組みです。"
},

{
    id: 178,
    category: "strategy",
    question: "金融とITを組み合わせた新しい金融サービスや技術を表す用語はどれか。",
    choices: [
        "FinTech",
        "IoT",
        "GIS",
        "CAD"
    ],
    answer: 0,
    explanation: "FinTechはFinanceとTechnologyを組み合わせた言葉で、ITを活用した新しい金融サービスや技術を指します。"
},

{
    id: 179,
    category: "strategy",
    question: "企業が収集したデータを分析し、経営上の意思決定に活用することを重視する経営の考え方はどれか。",
    choices: [
        "データドリブン経営",
        "トップダウン経営",
        "成果主義",
        "終身雇用"
    ],
    answer: 0,
    explanation: "データドリブン経営は、経験や勘だけに頼らず、収集・分析したデータを意思決定に活用する経営の考え方です。"
},

{
    id: 180,
    category: "strategy",
    question: "企業内外のデータを分析し、経営上の意思決定を支援するための仕組みを何というか。",
    choices: [
        "BI",
        "ERP",
        "CRM",
        "SCM"
    ],
    answer: 0,
    explanation: "BIはBusiness Intelligenceの略で、企業内外のデータを分析し、経営上の意思決定を支援する仕組みです。"
},

{
    id: 181,
    category: "strategy",
    question: "企業が環境、社会、企業統治の観点を重視して経営を行う考え方はどれか。",
    choices: [
        "ESG",
        "BPR",
        "RFM",
        "ROI"
    ],
    answer: 0,
    explanation: "ESGは、Environment（環境）、Social（社会）、Governance（企業統治）の観点を重視する考え方です。"
},

{
    id: 182,
    category: "strategy",
    question: "持続可能な社会の実現を目指して国際的に設定された17の目標はどれか。",
    choices: [
        "SDGs",
        "GDP",
        "CSR",
        "ISO"
    ],
    answer: 0,
    explanation: "SDGsは持続可能な開発目標のことで、2030年までに達成を目指す17の国際目標です。"
},

{
    id: 183,
    category: "strategy",
    question: "企業が温室効果ガスの排出量を実質的にゼロにすることを目指す考え方はどれか。",
    choices: [
        "カーボンニュートラル",
        "デジタルトランスフォーメーション",
        "オープンデータ",
        "ペーパーレス"
    ],
    answer: 0,
    explanation: "カーボンニュートラルは、温室効果ガスの排出量と吸収・除去量を差し引き、実質ゼロを目指す考え方です。"
},

{
    id: 184,
    category: "strategy",
    question: "発明を保護するために取得する知的財産権はどれか。",
    choices: [
        "特許権",
        "著作権",
        "商標権",
        "意匠権"
    ],
    answer: 0,
    explanation: "特許権は、発明を保護するための知的財産権です。"
},

{
    id: 185,
    category: "strategy",
    question: "文章、音楽、画像、プログラムなどの創作物を保護する権利はどれか。",
    choices: [
        "著作権",
        "特許権",
        "商標権",
        "実用新案権"
    ],
    answer: 0,
    explanation: "著作権は、文章、音楽、画像、プログラムなどの創作物を保護する権利です。"
},

{
    id: 186,
    category: "strategy",
    question: "企業の商品名やサービス名、ロゴなどを保護する知的財産権はどれか。",
    choices: [
        "商標権",
        "特許権",
        "著作権",
        "意匠権"
    ],
    answer: 0,
    explanation: "商標権は、商品やサービスを識別する名称、ロゴなどの商標を保護する権利です。"
},

{
    id: 187,
    category: "strategy",
    question: "企業が秘密として管理している技術情報や営業情報などを何というか。",
    choices: [
        "営業秘密",
        "公開情報",
        "オープンデータ",
        "標準規格"
    ],
    answer: 0,
    explanation: "営業秘密とは、企業が秘密として管理している技術上・営業上の有用な情報です。"
},

{
    id: 188,
    category: "strategy",
    question: "投資した資金に対して、どれだけ利益を得られたかを示す指標はどれか。",
    choices: [
        "ROI",
        "ROE",
        "KPI",
        "KGI"
    ],
    answer: 0,
    explanation: "ROIはReturn on Investmentの略で、投資額に対してどれだけ利益を生み出したかを示す指標です。"
},

{
    id: 189,
    category: "strategy",
    question: "企業が株主から調達した資本を使って、どれだけ利益を生み出したかを示す指標はどれか。",
    choices: [
        "ROE",
        "ROI",
        "KGI",
        "LTV"
    ],
    answer: 0,
    explanation: "ROEはReturn on Equityの略で、自己資本に対してどれだけ利益を生み出したかを示す指標です。"
},

{
    id: 190,
    category: "strategy",
    question: "売上高から売上原価などを差し引いた後、企業が本業によって得た利益を表すものはどれか。",
    choices: [
        "営業利益",
        "売上高",
        "固定費",
        "自己資本"
    ],
    answer: 0,
    explanation: "営業利益は、本業によって得られた利益を表す指標です。"
}

,

{
    id: 191,
    category: "strategy",
    question: "企業の内部環境と外部環境を分析し、強み・弱み・機会・脅威の4つの観点から整理する手法はどれか。",
    choices: [
        "SWOT分析",
        "PEST分析",
        "PPM分析",
        "ABC分析"
    ],
    answer: 0,
    explanation: "SWOT分析は、企業の内部環境である強み・弱みと、外部環境である機会・脅威を整理して分析する手法です。"
},

{
    id: 192,
    category: "strategy",
    question: "政治、経済、社会、技術の4つの外部環境を分析するために用いられる手法はどれか。",
    choices: [
        "SWOT分析",
        "PEST分析",
        "PPM分析",
        "RFM分析"
    ],
    answer: 1,
    explanation: "PEST分析は、政治、経済、社会、技術の観点から外部環境を分析する手法です。"
},

{
    id: 193,
    category: "strategy",
    question: "複数の事業を市場成長率と市場占有率の2軸で分析し、事業の位置付けを判断する手法はどれか。",
    choices: [
        "PPM",
        "SWOT分析",
        "PEST分析",
        "3C分析"
    ],
    answer: 0,
    explanation: "PPMは、市場成長率と相対的市場占有率を用いて、複数の事業の位置付けを分析する手法です。"
},

{
    id: 194,
    category: "strategy",
    question: "PPMにおいて、市場成長率が高く、市場占有率も高い事業を何と呼ぶか。",
    choices: [
        "花形",
        "金のなる木",
        "問題児",
        "負け犬"
    ],
    answer: 0,
    explanation: "PPMでは、市場成長率と市場占有率がともに高い事業を「花形」と呼びます。"
},

{
    id: 195,
    category: "strategy",
    question: "PPMにおいて、市場成長率は低いものの、市場占有率が高く、安定した収益が期待できる事業を何と呼ぶか。",
    choices: [
        "問題児",
        "花形",
        "金のなる木",
        "負け犬"
    ],
    answer: 2,
    explanation: "「金のなる木」は、市場成長率が低い一方で市場占有率が高く、安定した収益を生み出す事業です。"
},

{
    id: 196,
    category: "strategy",
    question: "既存の商品を既存の市場でさらに販売し、市場占有率を高める成長戦略はどれか。",
    choices: [
        "市場浸透",
        "市場開拓",
        "製品開発",
        "多角化"
    ],
    answer: 0,
    explanation: "市場浸透戦略は、既存市場に既存製品を投入し、販売量や市場占有率を高める戦略です。"
},

{
    id: 197,
    category: "strategy",
    question: "既存の商品を、これまで販売していなかった新しい市場へ展開する成長戦略はどれか。",
    choices: [
        "市場浸透",
        "市場開拓",
        "製品開発",
        "多角化"
    ],
    answer: 1,
    explanation: "市場開拓戦略は、既存製品を新しい顧客層や地域などの新市場へ展開する戦略です。"
},

{
    id: 198,
    category: "strategy",
    question: "既存の市場に対して、新しい製品やサービスを投入する成長戦略はどれか。",
    choices: [
        "市場浸透",
        "市場開拓",
        "製品開発",
        "撤退"
    ],
    answer: 2,
    explanation: "製品開発戦略は、既存市場の顧客に対して新しい製品やサービスを提供する戦略です。"
},

{
    id: 199,
    category: "strategy",
    question: "新しい市場に対して、新しい製品やサービスを投入する成長戦略はどれか。",
    choices: [
        "市場浸透",
        "市場開拓",
        "製品開発",
        "多角化"
    ],
    answer: 3,
    explanation: "多角化戦略は、新しい市場と新しい製品の両方を対象とする成長戦略です。"
},

{
    id: 200,
    category: "strategy",
    question: "競合他社とは異なる特徴や価値を顧客に提供することで、競争上の優位性を確立する戦略はどれか。",
    choices: [
        "差別化戦略",
        "コストリーダーシップ戦略",
        "撤退戦略",
        "現状維持戦略"
    ],
    answer: 0,
    explanation: "差別化戦略は、品質、機能、デザイン、サービスなどに独自性を持たせ、競合他社との差別化を図る戦略です。"
},

{
    id: 291,
    category: "strategy",
    question: "特定の顧客層や地域などに経営資源を集中し、その分野で競争優位を確立する戦略はどれか。",
    choices: [
        "集中戦略",
        "多角化戦略",
        "市場浸透戦略",
        "撤退戦略"
    ],
    answer: 0,
    explanation: "集中戦略は、特定の市場や顧客層などに経営資源を集中して競争優位を確立する戦略です。"
},

{
    id: 292,
    category: "strategy",
    question: "企業が自社で行っていた業務の一部を、専門性を持つ外部企業に委託することを何というか。",
    choices: [
        "アウトソーシング",
        "インソーシング",
        "ダウンサイジング",
        "リストラクチャリング"
    ],
    answer: 0,
    explanation: "アウトソーシングは、業務の一部を外部の専門企業などに委託することです。"
},

{
    id: 293,
    category: "strategy",
    question: "企業が外部に委託していた業務を、自社内で行うように戻すことを何というか。",
    choices: [
        "アウトソーシング",
        "インソーシング",
        "オフショアリング",
        "クラウドソーシング"
    ],
    answer: 1,
    explanation: "インソーシングは、外部へ委託していた業務を自社内で行うことです。"
},

{
    id: 294,
    category: "strategy",
    question: "原材料の調達から生産、物流、販売までの一連の流れを効率化し、企業全体の最適化を図る考え方はどれか。",
    choices: [
        "SCM",
        "CRM",
        "ERP",
        "SFA"
    ],
    answer: 0,
    explanation: "SCMは、調達、生産、物流、販売などの一連の流れを管理・最適化する考え方です。"
},

{
    id: 295,
    category: "strategy",
    question: "企業の会計、人事、生産、販売などの基幹業務を統合して管理するための仕組みはどれか。",
    choices: [
        "ERP",
        "SCM",
        "CRM",
        "SNS"
    ],
    answer: 0,
    explanation: "ERPは、企業の基幹業務を統合し、経営資源を効率的に管理するための仕組みです。"
},

{
    id: 296,
    category: "strategy",
    question: "市場調査を行う際に、実際の消費者からアンケートを収集する方法として適切なものはどれか。",
    choices: [
        "アンケート調査",
        "財務諸表分析",
        "ソースコード解析",
        "在庫評価"
    ],
    answer: 0,
    explanation: "アンケート調査は、消費者などから意見や行動、ニーズなどの情報を収集する代表的な市場調査方法です。"
},

{
    id: 297,
    category: "strategy",
    question: "年齢、性別、居住地域、所得などの特徴に基づいて顧客を分類することを何というか。",
    choices: [
        "市場細分化",
        "価格設定",
        "販売促進",
        "在庫管理"
    ],
    answer: 0,
    explanation: "市場細分化（セグメンテーション）は、顧客を年齢、性別、地域、所得などの特徴によって分類することです。"
},

{
    id: 298,
    category: "strategy",
    question: "市場細分化した顧客グループの中から、企業が重点的に商品やサービスを提供する対象を決定することを何というか。",
    choices: [
        "ターゲティング",
        "ポジショニング",
        "ブランディング",
        "ベンチマーキング"
    ],
    answer: 0,
    explanation: "ターゲティングは、市場細分化によって分けた顧客グループの中から、重点的に狙う市場を選択することです。"
},

{
    id: 299,
    category: "strategy",
    question: "競合商品との違いを明確にし、顧客の中で自社商品がどのような位置付けになるかを決める活動はどれか。",
    choices: [
        "ポジショニング",
        "ターゲティング",
        "市場調査",
        "在庫管理"
    ],
    answer: 0,
    explanation: "ポジショニングは、競合商品との違いを明確にし、顧客から見た自社商品の位置付けを確立する活動です。"
},

{
    id: 300,
    category: "strategy",
    question: "企業や商品について、顧客に一定のイメージや価値を持ってもらうために行う活動はどれか。",
    choices: [
        "ブランディング",
        "棚卸し",
        "購買管理",
        "原価計算"
    ],
    answer: 0,
    explanation: "ブランディングは、企業や商品について顧客に認識してもらいたい価値やイメージを形成する活動です。"
},

{
    id: 301,
    category: "strategy",
    question: "マーケティングの4Pに含まれるものとして、適切な組合せはどれか。",
    choices: [
        "Product・Price・Place・Promotion",
        "People・Process・Profit・Plan",
        "Product・Process・Profit・Promotion",
        "Price・Plan・Place・Profit"
    ],
    answer: 0,
    explanation: "マーケティングの4Pは、Product（製品）、Price（価格）、Place（流通）、Promotion（販売促進）です。"
},

{
    id: 302,
    category: "strategy",
    question: "新商品を発売する際、競合商品の価格や顧客が感じる価値などを考慮して販売価格を決定する活動は、4Pのどれに該当するか。",
    choices: [
        "Product",
        "Price",
        "Place",
        "Promotion"
    ],
    answer: 1,
    explanation: "Priceは価格を意味します。商品価格の決定は、マーケティングの4PにおけるPriceの活動です。"
},

{
    id: 303,
    category: "strategy",
    question: "商品を店舗、通信販売、Webサイトなど、どの販売経路で顧客に届けるかを決定する活動は、4Pのどれに該当するか。",
    choices: [
        "Product",
        "Price",
        "Place",
        "Promotion"
    ],
    answer: 2,
    explanation: "Placeは流通・販売経路を意味します。商品をどこで、どのような経路で販売するかを決める活動です。"
},

{
    id: 304,
    category: "strategy",
    question: "新商品の認知度を高めるため、広告やキャンペーン、SNSなどを活用して顧客に情報を伝える活動は、4Pのどれに該当するか。",
    choices: [
        "Product",
        "Price",
        "Place",
        "Promotion"
    ],
    answer: 3,
    explanation: "Promotionは販売促進を意味します。広告、キャンペーン、広報などによって商品の情報を顧客に伝える活動です。"
},

{
    id: 305,
    category: "strategy",
    question: "同じ製品を大量に生産することで、製品1個当たりの平均コストが低下する現象はどれか。",
    choices: [
        "規模の経済",
        "機会費用",
        "埋没費用",
        "限界効用"
    ],
    answer: 0,
    explanation: "規模の経済は、生産規模を拡大することで固定費などが分散され、1個当たりの平均コストが低下する現象です。"
},

{
    id: 306,
    category: "strategy",
    question: "複数の商品や事業で共通の設備、技術、販売網などを利用することで、全体として効率が高まる効果はどれか。",
    choices: [
        "範囲の経済",
        "規模の経済",
        "機会費用",
        "サンクコスト"
    ],
    answer: 0,
    explanation: "範囲の経済は、複数の商品や事業で経営資源を共有することで、単独で行うよりも効率が高まる効果です。"
},

{
    id: 307,
    category: "strategy",
    question: "同じ作業を繰り返し経験することで、作業方法が改善され、製品1個当たりの作業時間やコストが低下していく効果はどれか。",
    choices: [
        "学習効果",
        "規模の経済",
        "相乗効果",
        "ネットワーク効果"
    ],
    answer: 0,
    explanation: "学習効果は、経験を積み重ねることで作業の習熟度が高まり、作業時間やコストが低下する効果です。"
},

{
    id: 308,
    category: "strategy",
    question: "ある選択肢を選んだために、選ばなかった別の選択肢から得られたはずの利益を何というか。",
    choices: [
        "機会費用",
        "固定費",
        "変動費",
        "埋没費用"
    ],
    answer: 0,
    explanation: "機会費用は、ある選択をしたことで断念した他の選択肢のうち、最も価値の高いものから得られたはずの利益を指します。"
},

{
    id: 309,
    category: "strategy",
    question: "すでに支出してしまい、現在の意思決定によって回収できない費用を何というか。",
    choices: [
        "変動費",
        "固定費",
        "埋没費用",
        "機会費用"
    ],
    answer: 2,
    explanation: "埋没費用（サンクコスト）は、すでに支出され、現在の意思決定によって回収できない費用です。"
},

{
    id: 310,
    category: "strategy",
    question: "自社の商品やサービスについて、顧客がどのような価値を求めているかを把握し、商品開発や改善に生かす活動として最も適切なものはどれか。",
    choices: [
        "顧客ニーズの把握",
        "固定資産の減価償却",
        "債務管理",
        "棚卸資産の評価"
    ],
    answer: 0,
    explanation: "顧客ニーズを把握することは、商品開発やサービス改善、マーケティング戦略を検討する上で重要です。"
},

{
    id: 311,
    category: "strategy",
    question: "企業が経営戦略を立案する際、自社の強み・弱みと外部環境の機会・脅威を整理する分析手法はどれか。",
    choices: [
        "SWOT分析",
        "ABC分析",
        "PDCA",
        "PERT"
    ],
    answer: 0,
    explanation: "SWOT分析は、自社の強み（Strengths）、弱み（Weaknesses）、機会（Opportunities）、脅威（Threats）を整理し、経営戦略の立案に活用する手法です。"
},

{
    id: 312,
    category: "strategy",
    question: "顧客が商品やサービスを認知してから購入するまでの心理的な段階を示すモデルはどれか。",
    choices: [
        "AIDMA",
        "PDCA",
        "SWOT",
        "BPR"
    ],
    answer: 0,
    explanation: "AIDMAは、Attention（注意）、Interest（興味）、Desire（欲求）、Memory（記憶）、Action（行動）の頭文字を取った購買行動モデルです。"
},

{
    id: 313,
    category: "strategy",
    question: "業務プロセスを抜本的に見直し、業務の効率や生産性を大幅に向上させる考え方はどれか。",
    choices: [
        "BPR",
        "CRM",
        "SFA",
        "SCM"
    ],
    answer: 0,
    explanation: "BPR（Business Process Reengineering）は、既存の業務プロセスを抜本的に見直し、業務の効率化や生産性向上を目指す考え方です。"
},

];