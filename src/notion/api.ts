import { PopupContent } from "./types";

// Import modal images
import img1 from "image/ModalImage/1.png";
import img2 from "image/ModalImage/2.jpeg";
import img3 from "image/ModalImage/3.jpg";
import img5 from "image/ModalImage/5.jpg";
import img6 from "image/ModalImage/6.jpg";
import img7 from "image/ModalImage/7.jpg";
import img8 from "image/ModalImage/8.png";
import img9 from "image/ModalImage/9.jpg";
import img12 from "image/ModalImage/12.jpg";
import img13 from "image/ModalImage/13.png";
import img14 from "image/ModalImage/14.jpg";
import img15 from "image/ModalImage/15.bmp";
import img16 from "image/ModalImage/16.jpg";

// Dummy data with all positions defined
const DUMMY_MODAL_CONTENTS: PopupContent[] = [
  // Lounge entries (1-4) - first part
  {
    id: 1,
    modalTitle: "天然木の椅子",
    name: "オコーネルオーエン竜",
    modalContent:
      "無作為な形状をもつ天然木から、座面や脚部として機能する「価値となる形」を見出し、椅子として組み上げた。加工にはShopBotを使用し、天然木を固定するための専用治具は合板をShopBotで切削して製作した。片面加工しかできないというShopBotの制約に対して、治具を反転して再利用できるよう設計し、2回の加工で両面のほぞ加工を可能にした。加工データは、Rhinoceros上で工具経路を曲線として描き、そのデータをGrasshopperでShopBot用のsbpコードへ変換した。",
    grade: "B2",
    modalImage: img1,
    buttonPosition: { width: 9.18, height: 151 },
  },
  {
    id: 2,
    modalTitle: "The Ground ",
    name: "杉山日渚",
    modalContent:
      "2024年度デザインスタジオ基礎で設計したレンタル畑・道・兼レストラン。大学内SBCの滞在棟群をデッキのレベルで繋ぐと同時に地下にレストランを設置する提案。実際に土でコンクリートを打設するスタディを重ね、工法から形を考えた試み。",
    grade: "B2",
    modalImage: img2,
    contentUrl: [
      "https://www.gl-competition.net/pdfs/final_result/69_%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89.pdf",
    ],
    buttonPosition: { width: 9.18, height: 133 },
  },
  {
    id: 3,
    modalTitle: "階段⇆家",
    name: "中本明希",
    modalContent:
      "階段と家の境界をあえて曖昧にし、身体寸法を基点とした最小行動単位の小空間を連ねて構成する。これらの小空間と段差を等価に配置し、全体をボロノイ分割によって統合することで、多様なスケールの滞在領域を生み出す。さらに、住居や什器が階段のかたちに擬態し、段差そのものが家具や生活の装置として機能するように設計した。段差は階段であると同時に、椅子やテーブル、植栽の基盤となり、空間全体が多層的な使われ方を誘発する。内外や上下の境界が緩やかに接続され、人の行為が自然と外へ滲み出していく建築を目指した。",
    grade: "B2",
    modalImage: img3,
    buttonPosition: { width: 9.18, height: 115 },
  },
  {
    id: 4,
    modalTitle: "",
    name: "童陳通",
    modalContent: "",
    grade: "M2",
    modalImage: "",
    buttonPosition: { width: 9.18, height: 97 },
  },

  // Atelier2 entries (5-8)
  {
    id: 5,
    modalTitle: "横浜立体誘身地　～多様な身体行為を導く設計手法の研究～",
    name: "新延摩耶",
    modalContent:
      "本研究は、人の多様な身体行為を引き出す建築設計手法の確立を目的とする。既存の都市や建築を対象に、タイムラプス撮影によって人々の動きを観測・分析し、行為を誘発する形態パターンの抽出を行った。得られた形態要素を再構成し、半分は身体の動きを導き、半分は行為者に委ねるような、制御と自由のあいだに位置する「半制御的空間」の設計を試みる。偶発的な体験や身体的熱狂が失われつつある現代都市に対して、建築が人の行為を積極的に誘発する新たな公共空間の在り方を提示する。",
    grade: "B4",
    modalImage: img5,
    buttonPosition: { width: 0, height: 95.809 },
  },
  {
    id: 6,
    modalTitle: "誘滴",
    name: "高橋紗里",
    modalContent:
      "本研究は、液滴がファラデー波の振動によって水面上を自律的に跳ね続ける現象を扱う展示制作である。通常は水面に落ちた瞬間に吸収されるしずくが、特定条件下では水面に浮かび続けるという、直観に反する挙動を示す。この不思議な現象を可視化することを軸に、自然現象そのものを設計によって制御し、誘導するという個人的な関心から制作が始まった。周波数・振幅・容器形状といった条件を変化させ、液滴の軌道やふるまいがどのように導かれるのかを検証することで、自然現象の不確定性の中から秩序をより引き出すための設計手法を探っている。",
    grade: "B4",
    modalImage: img6,
    contentUrl: [
      "https://gorgeous-spleen-fd6.notion.site/2b152d2d43a380d0b3f7cec65698ae99?source=copy_link",
    ],
    buttonPosition: { width: 0, height: 120.074 },
  },
  {
    id: 7,
    modalTitle: "任意の曲線に開く展開可能な構築物",
    name: "浅岡 小百合",
    modalContent:
      "本研究は、展開・収縮が可能なハサミ状の構造体「シザーズ構造」を対象とし、複雑な形状に対応する構築物の実現を目指す。従来のシザーズ構造は直線や球など単純な形状への応用に限られてきたが、より天板や接合部等の詳細設計を行い、収納・展開両状態における実環境での応用可能性を検証することを目的とする。",
    grade: "M2",
    modalImage: img7,
    buttonPosition: { width: 0, height: 144.569 },
  },
  {
    id: 8,
    modalTitle: "蒐集による価値の転換",
    name: "小栗章太郎",
    modalContent:
      "本研究は、蒐（あつ）めるという行為が持つ可能性を探求すると同時に、自らの蒐集（しゅうしゅう）人生を振り返るきっかけでもあります。目の前にあるものは、私がこれまで収集してきたものの一部です。この内いくつかはとある目的を叶えるために集めるのでは飽き足らず、集めること自体が目的化した「蒐集」に転じています。蒐集の多くは、本人以外から見ると些細な事柄が夥しいほど積み重なり、もはや馬鹿にできないほどの熱量と存在感を帯びた結果「どうでもいい」から「凄まじい」への価値の逆転を示すことが徐々にわかってきています。およそ半年間の研究成果と20余年の人生を、一つの展示にまとめました。",
    grade: "M1",
    modalImage: img8,
    contentUrl: [
      "https://drive.google.com/file/d/14hmqR9R4JbmNfJC5Nm1f45Q1fmHC71Xj/view?usp=sharing",
    ],
    buttonPosition: { width: 0, height: 168.959 },
  },

  // Atelier1 entries (9-12)
  {
    id: 9,
    modalTitle: "八幡野プロジェクト",
    name: "",
    modalContent:
      "本プロジェクトは、八幡野の敷地に、仕事・研究・レジャーなど、さまざまな活動が可能な居場所をつくることを目的としている。これから長期プロジェクトとして敷地のランドスケープに携わっていく。\n「地形と共にある什器の設計と施工」をテーマとし、敷地の既存状況を読み取り、それを模型化することから始めた。そして、八幡野の地形を生かした屋外什器やアプローチを設計するとともに、自主施工の方法を学び、現地で効果を体験し、議論を深めてきた。\n今回は段階的成果として、1：1モックアップを展示し、その可能性を共有している。",
    grade: "",
    modalImage: img9,
    buttonPosition: { width: 39, height: 82 },
  },
  {
    id: 10,
    modalTitle: "修士研究",
    name: "",
    modalContent:
      "賀山 遥斗　「在来木造における仮設性と永続性の探求」\n田島 圭一郎　「辻堂東海岸エリアに表出するサーフィン文化の考察、及び、住宅街の通りの設計への展開」\n岩坪妃麻里　「模型思考に基づく建築設計方法論に関する研究―1/30スケール模型を用いた空間分析と設計プロセスの体系化―」\n塚田 匠　「築古問屋ビルにおける余剰空間の新たな活用に向けた手法論の探究」\n津田 瑞稀　「境界を共有の契機とする建築手法の研究―「什器」を用いた領域の創出―」",
    grade: "",
    modalImage: "",
    buttonPosition: { width: 5.5, height: 188 },
  },
  {
    id: 11,
    modalTitle: "卒業プロジェクト",
    name: "",
    modalContent:
      "伊藤 創一朗　「庭を持つ集合住宅(仮称)」\n岡 萌香　「生活の痕跡を感じる集合住宅」\n杉浦 カイナ　「眠らない家と眠る家」\n高橋 亜瑠　「模型制作を通じた居住空間の空間認知の研究」\nマイゼル ハンナ愛子　「迷子になれる建築-衰退する商業施設の再定義と活用-」",
    grade: "",
    modalImage: "",
    buttonPosition: { width: 15, height: 161 },
  },
  {
    id: 12,
    modalTitle: "スタジオA（住まいと環境）",
    name: "",
    modalContent:
      "建築設計を目指す初歩段階の学生を対象とし、中川エリカと浅子佳英の指導のもと、周辺環境のエッセンスを読み取った上で、街の一部としての住宅を設計する。今年度の対象敷地となった横浜市植勘坂は、坂の多い住宅地で、敷地の高低差が街の景観や暮らしを形づくっている。本授業では、第一課題として周辺を含んだ敷地模型を1/30で制作し、地形や敷地の立体感、添景を再現した。その上で、模型を用いて街の特徴を立体的に解釈し、それをヒントとして活用しながら個人の住宅設計に第二課題として取り組んだ。",
    grade: "",
    modalImage: img12,
    buttonPosition: { width: -39, height: 118 },
  },

  // Lounge entries (13-16) - second part
  {
    id: 13,
    modalTitle: "Rhino Chair MCP",
    name: "森本結暉ルーク",
    modalContent:
      "RhinoChairMCP は、LLM から RhinoCAD を操作する Model Context Protocol（MCP）を用い、合板から実際に組み立て可能なモノづくりを目指す。現在は、小さいが構造が弱いと座れない椅子を題材に、自然言語の指示や動画に付した注釈画像をLLM (Claude) に送り、形状生成を試行している。汎用コマンドではなく、あられ継ぎやほぞ・ほぞ穴といった接合加工ツールを MCP に組み込むことで、合板工作に特化した「つくれる形」の設計をどこまで AI に可能かを検証している。",
    grade: "M1",
    modalImage: img13,
    buttonPosition: { width: -9.18, height: 97 },
  },
  {
    id: 14,
    modalTitle: "L-CREATURES",
    name: "藤原彰大",
    modalContent:
      "レゴのように組み換え・組み立てが可能な人工生命システムを作成。「進化性」や「創発性」の観点から生命らしさを模索中。",
    grade: "M1",
    modalImage: img14,
    contentUrl: ["https://rb.gy/vs3qoh", "Instagram: @fu_zi_man"],
    buttonPosition: { width: -9.18, height: 115 },
  },
  {
    id: 15,
    modalTitle: "大磯(西湘)のゲニウス・ロキに関する探索的研究",
    name: "志磨純平",
    modalContent:
      "学部授業での大磯調査を契機に、西湘地域で自然発生している新しい交換システムを観察・記録。贈与と市場の融合、開かれた相互扶助、ネットワーク型コミュニティなど、既存の地域類型では説明できない現象を取材・調査。現在、交換様式論を援用しながら地域固有性の仮説を構築中。",
    grade: "M1",
    modalImage: img15,
    buttonPosition: { width: -9.18, height: 133 },
  },
  {
    id: 16,
    modalTitle: "自律的・持続可能な共同体の設計",
    name: "桑原健",
    modalContent:
      "貨幣を介さず、個人の行動を環境価値へ変換する「環境応答型OS」。外部資本に頼らない、自己完結した循環経済。労働と環境反応が直結する、ブルシット・ジョブを排した持続可能な共同体の提示。",
    grade: "M2",
    modalImage: img16,
    contentUrl: [
      "https://kengiftology.notion.site/?v=46f38cbd612d453888cffb0df7d2f455&pvs=74",
    ],
    buttonPosition: { width: -9.18, height: 151 },
  },
];

export const fetchModalContents = async (): Promise<PopupContent[]> => {
  // Simply return the dummy data
  return Promise.resolve(DUMMY_MODAL_CONTENTS);
};
