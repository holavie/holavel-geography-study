// Geography Study — Broad-Shallow LIGHTWEIGHT resources（生成物。手で編集しない）。
// 生成経路: tools/geography_broad_shallow_build.py
// 正本:
//   WAVE 1 = docs/geography/BROAD_SHALLOW_WAVE1_V3.json（TASK-013G で entity 同定・所在地を再認証した 70 件）
//   WAVE 2 = docs/geography/BROAD_SHALLOW_WAVE2.json（TASK-018B で追加した 43 件。TASK-018A の母集団監査で
//            NOT_COVERED かつ公式過去問 R3〜R7 に複数年登場したもの）
//   WAVE 3 = docs/geography/BROAD_SHALLOW_WAVE3.json（TASK-018C。残った未収録候補のうち、公式一次情報で
//            名称・所在地・分類を確認できたもの。作業台帳は docs/geography/WAVE3_LEDGER.json）
//   WAVE 3-B = docs/geography/BROAD_SHALLOW_WAVE3B.json（TASK-018D。同じ台帳の続き）
//   WAVE 3-C = docs/geography/BROAD_SHALLOW_WAVE3C.json（TASK-018E。同じ台帳の続き）
//   WAVE 3-D = docs/geography/BROAD_SHALLOW_WAVE3D.json（TASK-018F。同じ台帳の続き）
//   WAVE 3-E = docs/geography/BROAD_SHALLOW_WAVE3E.json（TASK-018G。同じ台帳の続き）
// 旧 WAVE1 / WAVE1_V2 / V3 / V4 candidate pool は KNOWN DEFECTIVE / SUPERSEDED。runtime へは入れない。
//
// DEEP（data/resources.js の 30 件）とは役割が違う:
//   DEEP        = 詳細学習。要点・注意点・混同・過去問リンク・写真・実地図・Quiz A/B の採点対象
//   LIGHTWEIGHT = 高速暗記。資源名 → 都道府県・カテゴリ・一言特徴のみ。写真 0 / 地図 0 / Quiz 採点対象外
//
// 各件は公式一次情報（自治体・都道府県・文化庁・環境省・気象庁・農林水産省・経済産業省・国土地理院・国土交通省）で
// 名称と所在地を確認済み。planning 側の監査フィールド（GSI raw / old_prefectures / second-source diagnostics /
// exam_* 等）は runtime へ持ち込まず、出典（authority + url）だけを保持する。
window.GEO_BROAD_SHALLOW = {
 "version": "v3+wave2-v1+wave3-v1+wave3b-v1+wave3c-v1+wave3d-v1+wave3e-v1",
 "generated_at": "2026-09-17",
 "task": "TASK-018G",
 "source": "docs/geography/BROAD_SHALLOW_WAVE1_V3.json + docs/geography/BROAD_SHALLOW_WAVE2.json + docs/geography/BROAD_SHALLOW_WAVE3.json + docs/geography/BROAD_SHALLOW_WAVE3B.json + docs/geography/BROAD_SHALLOW_WAVE3C.json + docs/geography/BROAD_SHALLOW_WAVE3D.json + docs/geography/BROAD_SHALLOW_WAVE3E.json",
 "coverage_level": "LIGHTWEIGHT",
 "rights": "HOLAVEL_ORIGINAL metadata。公式一次情報で確認した名称・所在都道府県・カテゴリ・短い特徴のみ。市販教材・PRIVATE_REFERENCE・公式試験本文は含まない",
 "regions": [
  "北海道",
  "東北",
  "関東",
  "中部",
  "近畿",
  "中国",
  "四国",
  "九州・沖縄"
 ],
 "category_labels": {
  "COAST_CAPE_ISLAND": "海岸・岬・島",
  "LOCAL_FOOD_SPECIALTY": "郷土料理",
  "TRADITIONAL_CRAFT": "伝統的工芸品",
  "LEISURE_STRUCTURE_BRIDGE": "橋・構造物",
  "MUSEUM_CULTURAL_FACILITY": "美術館・博物館",
  "QUASI_NATIONAL_PARK": "国定公園"
 },
 "reading_terms": [
  {
   "term": "寺社",
   "reading": "じしゃ",
   "source_authority": "コトバンク（朝日新聞社・VOYAGE GROUP／精選版 日本国語大辞典・デジタル大辞泉・日本大百科全書 ほか）／weblio 辞書（GRAS Group／デジタル大辞泉 ほか）",
   "source_url": "https://kotobank.jp/word/%E5%AF%BA%E7%A4%BE"
  },
  {
   "term": "湖沼",
   "reading": "こしょう",
   "source_authority": "コトバンク（朝日新聞社・VOYAGE GROUP／精選版 日本国語大辞典・デジタル大辞泉・日本大百科全書 ほか）／weblio 辞書（GRAS Group／デジタル大辞泉 ほか）",
   "source_url": "https://kotobank.jp/word/%E6%B9%96%E6%B2%BC"
  },
  {
   "term": "湿原",
   "reading": "しつげん",
   "source_authority": "コトバンク（朝日新聞社・VOYAGE GROUP／精選版 日本国語大辞典・デジタル大辞泉・日本大百科全書 ほか）／weblio 辞書（GRAS Group／デジタル大辞泉 ほか）",
   "source_url": "https://kotobank.jp/word/%E6%B9%BF%E5%8E%9F"
  },
  {
   "term": "渓谷",
   "reading": "けいこく",
   "source_authority": "コトバンク（朝日新聞社・VOYAGE GROUP／精選版 日本国語大辞典・デジタル大辞泉・日本大百科全書 ほか）／weblio 辞書（GRAS Group／デジタル大辞泉 ほか）",
   "source_url": "https://kotobank.jp/word/%E6%B8%93%E8%B0%B7"
  },
  {
   "term": "山岳",
   "reading": "さんがく",
   "source_authority": "コトバンク（朝日新聞社・VOYAGE GROUP／精選版 日本国語大辞典・デジタル大辞泉・日本大百科全書 ほか）／weblio 辞書（GRAS Group／デジタル大辞泉 ほか）",
   "source_url": "https://kotobank.jp/word/%E5%B1%B1%E5%B2%B3"
  },
  {
   "term": "武家町",
   "reading": "ぶけまち",
   "source_authority": "コトバンク（朝日新聞社・VOYAGE GROUP／精選版 日本国語大辞典・デジタル大辞泉・日本大百科全書 ほか）",
   "source_url": "https://kotobank.jp/word/%E6%AD%A6%E5%AE%B6%E7%94%BA"
  },
  {
   "term": "重要伝統的建造物群保存地区",
   "reading": "じゅうようでんとうてきけんぞうぶつぐんほぞんちく",
   "source_authority": "コトバンク（朝日新聞社・VOYAGE GROUP／精選版 日本国語大辞典・デジタル大辞泉・日本大百科全書 ほか）",
   "source_url": "https://kotobank.jp/word/%E9%87%8D%E8%A6%81%E4%BC%9D%E7%B5%B1%E7%9A%84%E5%BB%BA%E9%80%A0%E7%89%A9%E7%BE%A4%E4%BF%9D%E5%AD%98%E5%9C%B0%E5%8C%BA"
  }
 ],
 "reading_terms_note": "解説文に出る共有語彙の読み。公式一次情報（固有名詞）または信頼できる国語辞典の完全一致見出し（一般語）で確認済みのものだけ。UI 表示は次タスク",
 "reading_note": "読みは公式一次情報で確認できた資源にのみ付く（TASK-013M: HIGH 27 件中 14 件）。未確認の資源には reading を置かない",
 "entity_kind_labels": {
  "RESOURCE": "資源",
  "AREA_RESOURCE": "区域資源",
  "FOOD": "郷土料理",
  "CRAFT": "伝統的工芸品",
  "FACILITY": "施設",
  "DESIGNATION": "指定名称",
  "FESTIVAL": "行事"
 },
 "resources": [
  {
   "id": "exam-007",
   "name": "オシンコシンの滝",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した渓谷・滝（北海道）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E3%82%AA%E3%82%B7%E3%83%B3%E3%82%B3%E3%82%B7%E3%83%B3%E3%81%AE%E6%BB%9D"
    },
    {
     "authority": "国土地理院／環境省 北海道地方環境事務所",
     "url": "https://hokkaido.env.go.jp/blog/2012/11/1005.html"
    }
   ]
  },
  {
   "id": "exam-013",
   "name": "サロマ湖",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "LAKE_WETLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した湖沼・湿原（北海道）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E3%82%B5%E3%83%AD%E3%83%9E%E6%B9%96"
    },
    {
     "authority": "国土地理院／佐呂間町（公式）",
     "url": "https://www.town.saroma.hokkaido.jp/kakuka/keizaika/tenboudai.html"
    }
   ]
  },
  {
   "id": "exam-w3d-003",
   "name": "三愛の丘展望公園",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "OTHER"
   ],
   "recognition_hook": "美瑛の丘のパノラマ風景を見る展望公園",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "美瑛町観光協会（公式・三愛の丘展望公園）",
     "url": "https://www.biei-hokkaido.jp/ja/facility/san-ai-no-oka_view-park"
    }
   ]
  },
  {
   "id": "exam-w3-001",
   "name": "大雪山国立公園",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "北海道の山岳公園。日本一大きな国立公園で、北海道最高峰の旭岳がある",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省 北海道地方環境事務所（管内の国立公園）",
     "url": "https://hokkaido.env.go.jp/park.html"
    }
   ]
  },
  {
   "id": "exam-006",
   "name": "天人峡",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した渓谷・滝（北海道）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%A4%A9%E4%BA%BA%E5%B3%A1"
    },
    {
     "authority": "国土地理院／環境省（大雪山国立公園 見どころ・施設）",
     "url": "https://www.env.go.jp/nature/nationalparks/list/daisetsuzan/spot/"
    }
   ]
  },
  {
   "id": "exam-w3d-010",
   "name": "天都山",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "北海道網走市の山。国の名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 天都山）",
     "url": "https://online.bunka.go.jp/heritages/detail/200856"
    }
   ]
  },
  {
   "id": "exam-w3e-043",
   "name": "宗谷岬",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "北海道稚内市の岬",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "稚内市（公式・宗谷岬周辺魅力創出）",
     "url": "https://www.city.wakkanai.hokkaido.jp/sangyo/kanko/soyamisakikousou.html"
    }
   ]
  },
  {
   "id": "exam-037",
   "name": "定山渓",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した渓谷・滝（北海道）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%AE%9A%E5%B1%B1%E6%B8%93"
    },
    {
     "authority": "国土地理院／札幌市南区（公式）",
     "url": "https://www.city.sapporo.jp/minami/shinko/jozankei/index.html"
    }
   ],
   "reading": "じょうざんけい"
  },
  {
   "id": "exam-x011",
   "name": "屈斜路湖",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "LAKE_WETLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に登場した湖沼・湿原（北海道）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%B1%88%E6%96%9C%E8%B7%AF%E6%B9%96"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ],
   "reading": "くっしゃろこ"
  },
  {
   "id": "exam-022",
   "name": "支笏湖",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "LAKE_WETLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した湖沼・湿原（北海道）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%94%AF%E7%AC%8F%E6%B9%96"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ],
   "reading": "しこつこ"
  },
  {
   "id": "exam-w3b-004",
   "name": "昭和新山",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "支笏洞爺国立公園にある新しい火山",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省 北海道地方環境事務所（管内の国立公園）",
     "url": "https://hokkaido.env.go.jp/park.html"
    }
   ]
  },
  {
   "id": "exam-w3c-007",
   "name": "松前城",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "北海道の城。本丸御門が国の重要文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 福山城（松前城）本丸御門）",
     "url": "https://online.bunka.go.jp/heritages/detail/154565"
    }
   ]
  },
  {
   "id": "food-005",
   "name": "松前漬",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "LOCAL_FOOD_SPECIALTY"
   ],
   "recognition_hook": "北海道の郷土料理（農林水産省「うちの郷土料理」掲載）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "FOOD",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "農林水産省（うちの郷土料理）",
     "url": "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/hokkaido.html"
    }
   ]
  },
  {
   "id": "exam-w3d-011",
   "name": "根室半島",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "北海道東端の半島。根室半島チャシ跡群が国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 根室半島チャシ跡群）",
     "url": "https://online.bunka.go.jp/heritages/detail/200896"
    }
   ]
  },
  {
   "id": "exam-w3d-012",
   "name": "然別湖",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "LAKE_WETLAND"
   ],
   "recognition_hook": "北海道の湖。オショロコマ生息地が国の天然記念物",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 然別湖のオショロコマ生息地）",
     "url": "https://online.bunka.go.jp/heritages/detail/164732"
    }
   ]
  },
  {
   "id": "exam-w3e-056",
   "name": "登別温泉",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "北海道登別市の温泉地。日帰り入浴施設や土産店が並ぶ登別極楽通り商店街がある",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "登別市（公式・登別温泉駐車場のご案内）",
     "url": "https://www.city.noboribetsu.lg.jp/docs/2025103000052/"
    }
   ]
  },
  {
   "id": "exam-w2-036",
   "name": "神威岬",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "積丹半島の岬。ニセコ積丹小樽海岸国定公園に含まれる",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "積丹町（公式）",
     "url": "https://www.town.shakotan.lg.jp/contents/post-96.html"
    },
    {
     "authority": "北海道（公式・ニセコ積丹小樽海岸国定公園）",
     "url": "https://www.pref.hokkaido.lg.jp/ks/skn/environ/parks/niseko-quasi-nationalpark.html"
    }
   ]
  },
  {
   "id": "exam-w3e-014",
   "name": "襟裳岬",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "北海道えりも町の岬。国の名勝「ピリカノカ」の一つ「襟裳岬（オンネエンルム）」",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 ピリカノカ）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/00003649"
    }
   ]
  },
  {
   "id": "exam-w3-020",
   "name": "豊富温泉",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "北海道の温泉地。環境大臣が指定する国民保養温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国民保養温泉地）",
     "url": "https://www.env.go.jp/nature/onsen/area/"
    }
   ]
  },
  {
   "id": "exam-w3-002",
   "name": "阿寒摩周国立公園",
   "region": "北海道",
   "prefectures": [
    "北海道"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "北海道の国立公園。マリモが生育する阿寒湖、摩周湖、屈斜路湖がある",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省 北海道地方環境事務所（管内の国立公園）",
     "url": "https://hokkaido.env.go.jp/park.html"
    }
   ]
  },
  {
   "id": "food-004",
   "name": "いちご煮",
   "region": "東北",
   "prefectures": [
    "青森県"
   ],
   "categories": [
    "LOCAL_FOOD_SPECIALTY"
   ],
   "recognition_hook": "青森県の郷土料理（農林水産省「うちの郷土料理」掲載）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "FOOD",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "農林水産省（うちの郷土料理）",
     "url": "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/aomori.html"
    }
   ]
  },
  {
   "id": "exam-w3c-008",
   "name": "三内丸山遺跡",
   "region": "東北",
   "prefectures": [
    "青森県"
   ],
   "categories": [
    "HISTORIC_DISTRICT",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "縄文時代の大規模集落跡。国の特別史跡で、世界文化遺産「北海道・北東北の縄文遺跡群」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 三内丸山遺跡）",
     "url": "https://online.bunka.go.jp/heritages/detail/200926"
    },
    {
     "authority": "文化遺産オンライン（文化庁 北海道・北東北の縄文遺跡群）",
     "url": "https://online.bunka.go.jp/special_content/hlinkK"
    }
   ]
  },
  {
   "id": "exam-w3e-004",
   "name": "亀ヶ岡石器時代遺跡",
   "region": "東北",
   "prefectures": [
    "青森県"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "青森県つがる市の遺跡。国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 亀ヶ岡石器時代遺跡）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/97"
    }
   ]
  },
  {
   "id": "exam-023",
   "name": "十三湖",
   "region": "東北",
   "prefectures": [
    "青森県"
   ],
   "categories": [
    "LAKE_WETLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した湖沼・湿原（青森県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%8D%81%E4%B8%89%E6%B9%96"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ],
   "reading": "じゅうさんこ"
  },
  {
   "id": "exam-w3-003",
   "name": "十和田八幡平国立公園",
   "region": "東北",
   "prefectures": [
    "青森県",
    "岩手県",
    "秋田県"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "青森・岩手・秋田にまたがる国立公園（昭和11年指定）",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省 東北地方環境事務所（管内の国立公園）",
     "url": "https://tohoku.env.go.jp/park.html"
    }
   ]
  },
  {
   "id": "exam-w3d-005",
   "name": "奥入瀬渓流",
   "region": "東北",
   "prefectures": [
    "青森県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "青森県十和田市の渓流。散策のネイチャーガイド拠点として奥入瀬渓流館がある",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "十和田市（公式・観光スポット 十和田市奥入瀬渓流館）",
     "url": "https://www.city.towada.lg.jp/kanko/spot/2021-0401-0830-001.html"
    }
   ]
  },
  {
   "id": "exam-w3e-025",
   "name": "岩木山",
   "region": "東北",
   "prefectures": [
    "青森県"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "青森県の山。山への登拝行事が国の重要無形民俗文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 岩木山の登拝行事）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/302/5"
    },
    {
     "authority": "国指定文化財等データベース（文化庁 岩木山神社拝殿）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/80"
    }
   ]
  },
  {
   "id": "exam-w2-029",
   "name": "弘前城",
   "region": "東北",
   "prefectures": [
    "青森県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "弘前公園内の城。天守は現存12天守の一つで東北唯一の現存天守",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "弘前市（公式・現存12天守）",
     "url": "https://www.city.hirosaki.aomori.jp/oshirase/jouhou/genzon12tenshu.html"
    },
    {
     "authority": "青森県（公式・重要文化財建造物）",
     "url": "https://www.pref.aomori.lg.jp/soshiki/kyoiku/e-bunka/jubun_kenzoubutu_7.html"
    }
   ]
  },
  {
   "id": "des-057",
   "name": "弘前市仲町",
   "region": "東北",
   "prefectures": [
    "青森県"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "重要伝統的建造物群保存地区（武家町）",
   "priority": "B",
   "exam_signal": "NO_DIRECT_SIGNAL",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化庁（重要伝統的建造物群保存地区一覧）",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/hozonchiku/judenken_ichiran.html"
    }
   ]
  },
  {
   "id": "exam-w3-021",
   "name": "酸ヶ湯温泉",
   "region": "東北",
   "prefectures": [
    "青森県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "青森県の温泉地。環境大臣が指定する国民保養温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国民保養温泉地）",
     "url": "https://www.env.go.jp/nature/onsen/area/"
    }
   ]
  },
  {
   "id": "exam-041",
   "name": "岩手山",
   "region": "東北",
   "prefectures": [
    "岩手県"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した山岳・高原（岩手県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%B2%A9%E6%89%8B%E5%B1%B1"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "des-004",
   "name": "明治日本の産業革命遺産 製鉄・製鋼、造船、石炭産業",
   "region": "東北",
   "prefectures": [
    "岩手県",
    "静岡県",
    "山口県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "鹿児島県"
   ],
   "categories": [
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産（平成27年記載）",
   "priority": "A",
   "exam_signal": "NO_DIRECT_SIGNAL",
   "entity_kind": "DESIGNATION",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化庁（日本の世界遺産一覧）",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/"
    }
   ]
  },
  {
   "id": "exam-w2-013",
   "name": "猊鼻渓",
   "region": "東北",
   "prefectures": [
    "岩手県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "砂鉄川をはさむ石灰岩の渓谷。国の名勝",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁）",
     "url": "https://online.bunka.go.jp/heritages/detail/190022"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ。旧字体表記「猊鼻溪」）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%8C%8A%E9%BC%BB%E6%BA%AA"
    }
   ]
  },
  {
   "id": "exam-w3e-012",
   "name": "碁石海岸",
   "region": "東北",
   "prefectures": [
    "岩手県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "岩手県大船渡市の海岸。国の名勝・天然記念物",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 碁石海岸）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/142"
    }
   ]
  },
  {
   "id": "exam-w3e-042",
   "name": "龍泉洞",
   "region": "東北",
   "prefectures": [
    "岩手県"
   ],
   "categories": [
    "OTHER"
   ],
   "recognition_hook": "岩手県岩泉町の鍾乳洞。洞内のコウモリとともに国の天然記念物",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "岩泉町（公式・トップページ 龍泉洞）",
     "url": "https://www.town.iwaizumi.lg.jp/"
    }
   ]
  },
  {
   "id": "exam-w3c-001",
   "name": "仙台城跡",
   "region": "東北",
   "prefectures": [
    "宮城県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "伊達氏の居城跡。国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 仙台城跡）",
     "url": "https://online.bunka.go.jp/heritages/detail/173895"
    }
   ],
   "aliases": [
    "青葉城"
   ]
  },
  {
   "id": "exam-w2-017",
   "name": "作並温泉",
   "region": "東北",
   "prefectures": [
    "宮城県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "仙台市青葉区作並にある温泉地",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "仙台市（公式・湯のまち作並 観光交流館 ラサンタ）",
     "url": "https://www.city.sendai.jp/kankokikaku/rasanta/index.html"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E4%BD%9C%E4%B8%A6%E6%B8%A9%E6%B3%89"
    }
   ]
  },
  {
   "id": "exam-w3e-057",
   "name": "秋保温泉",
   "region": "東北",
   "prefectures": [
    "宮城県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "宮城県仙台市の温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "仙台市（公式・記者発表資料 秋保温泉エリア）",
     "url": "https://www.city.sendai.jp/inbound/sonic_akiu.html"
    }
   ]
  },
  {
   "id": "exam-w3e-059",
   "name": "遠刈田温泉",
   "region": "東北",
   "prefectures": [
    "宮城県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "宮城県蔵王町の温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "蔵王町（公式・蔵王の観光案内）",
     "url": "https://www.town.zao.miyagi.jp/kankou/guide/index.html"
    }
   ]
  },
  {
   "id": "exam-w2-040",
   "name": "金華山",
   "region": "東北",
   "prefectures": [
    "宮城県"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "牡鹿半島の先にある島。黄金山神社が鎮座し、鮎川港から船で渡る",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "石巻市（公式・金華山）",
     "url": "https://www.city.ishinomaki.lg.jp/cont/10452000b/-kanko/-kankomap/d0130/20150814103511.html"
    },
    {
     "authority": "石巻市（公式・金華山黄金山神社）",
     "url": "https://www.city.ishinomaki.lg.jp/cont/10452000b/-kanko/-kankomap/d0140/20130225110659.html"
    }
   ]
  },
  {
   "id": "food-003",
   "name": "いぶりがっこ",
   "region": "東北",
   "prefectures": [
    "秋田県"
   ],
   "categories": [
    "LOCAL_FOOD_SPECIALTY"
   ],
   "recognition_hook": "秋田県の郷土料理（農林水産省「うちの郷土料理」掲載）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "FOOD",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "農林水産省（うちの郷土料理）",
     "url": "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/akita.html"
    }
   ]
  },
  {
   "id": "des-059",
   "name": "仙北市角館",
   "region": "東北",
   "prefectures": [
    "秋田県"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "重要伝統的建造物群保存地区（武家町）",
   "priority": "B",
   "exam_signal": "NO_DIRECT_SIGNAL",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化庁（重要伝統的建造物群保存地区一覧）",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/hozonchiku/judenken_ichiran.html"
    }
   ]
  },
  {
   "id": "exam-w2-018",
   "name": "入道崎",
   "region": "東北",
   "prefectures": [
    "秋田県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "男鹿半島先端の岬。入道埼灯台がある",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "男鹿市（公式）",
     "url": "https://www.city.oga.akita.jp/soshik/kankoka/kanko/6601.html"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%85%A5%E9%81%93%E5%B4%8E"
    }
   ]
  },
  {
   "id": "exam-w2-006",
   "name": "田沢湖",
   "region": "東北",
   "prefectures": [
    "秋田県"
   ],
   "categories": [
    "LAKE_WETLAND"
   ],
   "recognition_hook": "周囲約20キロメートルのほぼ円形の湖。水深423.4メートルで日本一の深さ",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "仙北市（公式）",
     "url": "https://www.city.semboku.akita.jp/sightseeing/spot/04_tazawako.html"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%94%B0%E6%B2%A2%E6%B9%96"
    }
   ]
  },
  {
   "id": "exam-w3e-013",
   "name": "立石寺",
   "region": "東北",
   "prefectures": [
    "山形県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "山形県の寺院。中堂が国の重要文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 立石寺中堂）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/176"
    }
   ]
  },
  {
   "id": "craft-004",
   "name": "置賜紬",
   "region": "東北",
   "prefectures": [
    "山形県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "山形県の伝統的工芸品（経済産業大臣指定）",
   "priority": "B",
   "exam_signal": "NO_DIRECT_SIGNAL",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "経済産業省（伝統的工芸品 指定品目一覧）",
     "url": "https://www.meti.go.jp/press/2025/10/20251027001/20251027001.html"
    }
   ]
  },
  {
   "id": "exam-w2-041",
   "name": "銀山温泉",
   "region": "東北",
   "prefectures": [
    "山形県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "大正時代の面影を残す温泉旅館街。木造三層四層の旅館とガス燈の町並み",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "尾花沢市（公式）",
     "url": "https://www.city.obanazawa.yamagata.jp/kanko/kankochi/1346"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%8A%80%E5%B1%B1%E6%B8%A9%E6%B3%89"
    }
   ]
  },
  {
   "id": "exam-w3c-002",
   "name": "二本松城跡",
   "region": "東北",
   "prefectures": [
    "福島県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "丹羽氏の居城となった中世・近世の城跡。国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 二本松城跡）",
     "url": "https://online.bunka.go.jp/heritages/detail/192752"
    }
   ],
   "aliases": [
    "霞ヶ城"
   ]
  },
  {
   "id": "exam-w2-023",
   "name": "大内宿",
   "region": "東北",
   "prefectures": [
    "福島県"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "会津西街道（下野街道）の宿場町。重要伝統的建造物群保存地区",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "下郷町（公式）",
     "url": "https://www.town.shimogo.fukushima.jp/organization/kyouiku/4/150.html"
    },
    {
     "authority": "文化庁（重要伝統的建造物群保存地区 下郷町大内宿）",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/hozonchiku/pdf/94105901_09.pdf"
    }
   ]
  },
  {
   "id": "craft-021",
   "name": "奥会津昭和からむし織",
   "region": "東北",
   "prefectures": [
    "福島県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "福島県の伝統的工芸品（経済産業大臣指定）",
   "priority": "B",
   "exam_signal": "NO_DIRECT_SIGNAL",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "経済産業省（伝統的工芸品 指定品目一覧）",
     "url": "https://www.meti.go.jp/press/2025/10/20251027001/20251027001.html"
    }
   ]
  },
  {
   "id": "exam-w3e-027",
   "name": "東山温泉",
   "region": "東北",
   "prefectures": [
    "福島県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "福島県会津若松市の温泉地。旅館の庭園が国の登録記念物",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 会津東山温泉向瀧庭園）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/411/00004215"
    }
   ]
  },
  {
   "id": "exam-w3e-049",
   "name": "偕楽園",
   "region": "関東",
   "prefectures": [
    "茨城県"
   ],
   "categories": [
    "GARDEN"
   ],
   "recognition_hook": "茨城県水戸市の園。千波湖の北西にあり、二季咲桜や十月桜、見晴広場の左近の桜がある",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "水戸市（公式・観光情報 水戸市内の桜の名所）",
     "url": "https://www.city.mito.lg.jp/site/kankouinfo/116882.html"
    }
   ]
  },
  {
   "id": "craft-010",
   "name": "笠間焼",
   "region": "関東",
   "prefectures": [
    "茨城県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "茨城県の伝統的工芸品（経済産業大臣指定）",
   "priority": "B",
   "exam_signal": "NO_DIRECT_SIGNAL",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "経済産業省（伝統的工芸品 指定品目一覧）",
     "url": "https://www.meti.go.jp/press/2025/10/20251027001/20251027001.html"
    }
   ]
  },
  {
   "id": "exam-w3-019",
   "name": "結城紬",
   "region": "関東",
   "prefectures": [
    "茨城県",
    "栃木県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "茨城・栃木にまたがって指定されている経済産業大臣指定 伝統的工芸品",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "一般財団法人 伝統的工芸品産業振興協会（経済産業大臣指定 伝統的工芸品 都道府県別一覧）",
     "url": "https://kyokai.kougeihin.jp/wp/wp-content/uploads/2025/10/shitei-area_20251027.pdf"
    }
   ]
  },
  {
   "id": "exam-w3e-018",
   "name": "鹿島神宮",
   "region": "関東",
   "prefectures": [
    "茨城県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "茨城県の神社。境内が国の史跡、社殿が国の重要文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 鹿島神宮境内）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/449"
    },
    {
     "authority": "国指定文化財等データベース（文化庁 鹿島神宮楼門）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/254"
    }
   ]
  },
  {
   "id": "exam-w3e-002",
   "name": "中禅寺湖",
   "region": "関東",
   "prefectures": [
    "栃木県"
   ],
   "categories": [
    "LAKE_WETLAND"
   ],
   "recognition_hook": "栃木県日光市の湖。湖畔は国の名勝「華厳瀑および中宮祠湖（中禅寺湖）湖畔」",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 華厳瀑および中宮祠湖（中禅寺湖）湖畔）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/477"
    }
   ]
  },
  {
   "id": "exam-w3-022",
   "name": "奥日光湯元温泉",
   "region": "関東",
   "prefectures": [
    "栃木県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "栃木県の温泉地。環境大臣が指定する国民保養温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国民保養温泉地）",
     "url": "https://www.env.go.jp/nature/onsen/area/"
    }
   ]
  },
  {
   "id": "exam-w3-033",
   "name": "日光東照宮",
   "region": "関東",
   "prefectures": [
    "栃木県"
   ],
   "categories": [
    "TEMPLE_SHRINE",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産「日光の社寺」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 日光の社寺）",
     "url": "https://online.bunka.go.jp/special_content/hlink8"
    }
   ]
  },
  {
   "id": "craft-001",
   "name": "益子焼",
   "region": "関東",
   "prefectures": [
    "栃木県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "栃木県の伝統的工芸品（経済産業大臣指定）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "経済産業省（伝統的工芸品 指定品目一覧）",
     "url": "https://www.meti.go.jp/press/2025/10/20251027001/20251027001.html"
    }
   ]
  },
  {
   "id": "exam-w2-039",
   "name": "輪王寺",
   "region": "関東",
   "prefectures": [
    "栃木県"
   ],
   "categories": [
    "TEMPLE_SHRINE",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "日光山輪王寺。天台宗の大本山で、世界文化遺産「日光の社寺」の構成資産",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "日光市（公式・日光の社寺：輪王寺）",
     "url": "https://www.city.nikko.lg.jp/soshiki/10/1041/1_1/2/1957.html"
    },
    {
     "authority": "栃木県（公式・日光山輪王寺）",
     "url": "https://www.pref.tochigi.lg.jp/c05/intro/tochigiken/miryoku/nikko/012.html"
    }
   ]
  },
  {
   "id": "exam-w2-043",
   "name": "龍王峡",
   "region": "関東",
   "prefectures": [
    "栃木県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "鬼怒川温泉と川治温泉の間にある鬼怒川の渓谷",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "日光市（公式）",
     "url": "https://www.city.nikko.lg.jp/soshiki/6/1026/1/377.html"
    },
    {
     "authority": "栃木県（公式・自然「滝・渓谷」龍王峡）",
     "url": "https://www.pref.tochigi.lg.jp/c05/intro/tochigiken/hakken/shizen4_06.html"
    }
   ]
  },
  {
   "id": "des-021",
   "name": "上信越高原国立公園",
   "region": "関東",
   "prefectures": [
    "群馬県",
    "新潟県",
    "長野県"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "国立公園（1949指定）",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国立公園一覧）",
     "url": "https://www.env.go.jp/park/parks/index.html"
    }
   ],
   "reading": "じょうしんえつこうげんこくりつこうえん"
  },
  {
   "id": "exam-w3e-051",
   "name": "伊香保温泉",
   "region": "関東",
   "prefectures": [
    "群馬県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "群馬県渋川市の温泉地。公衆浴場「石段の湯」がある",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "渋川市（公式・渋川市観光情報 伊香保温泉石段の湯）",
     "url": "https://www.city.shibukawa.lg.jp/kankou-site/kankou/000357/000361/p003077.html"
    }
   ]
  },
  {
   "id": "exam-005",
   "name": "吾妻峡",
   "region": "関東",
   "prefectures": [
    "群馬県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した渓谷・滝（群馬県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%90%BE%E5%A6%BB%E5%B3%A1"
    },
    {
     "authority": "国土地理院／東吾妻町（公式）",
     "url": "https://www.town.higashiagatsuma.gunma.jp/www/kankou/contents/1204103468186/index.html"
    }
   ],
   "reading": "あがつまきょう"
  },
  {
   "id": "exam-w2-021",
   "name": "四万温泉",
   "region": "関東",
   "prefectures": [
    "群馬県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "上毛三名湯の一つ。国民保養温泉地の第1号に指定された温泉地",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "中之条町（公式）",
     "url": "https://www.town.nakanojo.gunma.jp/soshiki/9/1177.html"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%9B%9B%E4%B8%87%E6%B8%A9%E6%B3%89"
    }
   ]
  },
  {
   "id": "exam-w3c-009",
   "name": "岩宿遺跡",
   "region": "関東",
   "prefectures": [
    "群馬県"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "旧石器時代の遺跡。国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 岩宿遺跡）",
     "url": "https://online.bunka.go.jp/heritages/detail/204963"
    }
   ]
  },
  {
   "id": "exam-w2-031",
   "name": "榛名湖",
   "region": "関東",
   "prefectures": [
    "群馬県"
   ],
   "categories": [
    "LAKE_WETLAND"
   ],
   "recognition_hook": "榛名山の火山活動でできた標高約1,100mの湖",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "高崎市（公式）",
     "url": "https://www.city.takasaki.gunma.jp/site/sightseeing/4625.html"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%A6%9B%E5%90%8D%E6%B9%96"
    }
   ]
  },
  {
   "id": "exam-w2-033",
   "name": "浅間山",
   "region": "関東",
   "prefectures": [
    "群馬県",
    "長野県"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "群馬県と長野県にまたがる活火山。気象庁の常時観測火山",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "気象庁（浅間山【常時観測火山】）",
     "url": "https://www.data.jma.go.jp/vois/data/tokyo/306_Asamayama/306_index.html"
    },
    {
     "authority": "群馬県（公式・浅間山に関する情報）",
     "url": "https://www.pref.gunma.jp/page/8044.html"
    },
    {
     "authority": "長野県（公式・佐久地域振興局 浅間山登山コース）",
     "url": "https://www.pref.nagano.lg.jp/sakuchi/sakuchi-shokan/kanko/asamacourse1.html"
    }
   ]
  },
  {
   "id": "exam-w3e-048",
   "name": "茂林寺",
   "region": "関東",
   "prefectures": [
    "群馬県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "群馬県館林市の寺院。境内の外に茂林寺沼湿原が広がる",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "館林市（公式・茂林寺沼湿原清掃活動について）",
     "url": "https://www.city.tatebayashi.gunma.jp/s091/kanko/040/050/070/20230606090443.html"
    }
   ]
  },
  {
   "id": "exam-w3-038",
   "name": "高山社跡",
   "region": "関東",
   "prefectures": [
    "群馬県"
   ],
   "categories": [
    "HISTORIC_DISTRICT",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産「富岡製糸場と絹産業遺産群」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 富岡製糸場と絹産業遺産群）",
     "url": "https://online.bunka.go.jp/special_content/hlinkE"
    }
   ]
  },
  {
   "id": "des-064",
   "name": "川越市川越",
   "region": "関東",
   "prefectures": [
    "埼玉県"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "重要伝統的建造物群保存地区（商家町）",
   "priority": "A",
   "exam_signal": "NO_DIRECT_SIGNAL",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化庁（重要伝統的建造物群保存地区一覧）",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/hozonchiku/judenken_ichiran.html"
    }
   ]
  },
  {
   "id": "exam-w3-004",
   "name": "秩父多摩甲斐国立公園",
   "region": "関東",
   "prefectures": [
    "埼玉県",
    "東京都",
    "山梨県",
    "長野県"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "埼玉・東京・山梨・長野にまたがる国立公園（昭和25年指定）",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省 関東地方環境事務所（管内の国立公園）",
     "url": "https://kanto.env.go.jp/park.html"
    }
   ]
  },
  {
   "id": "des-065",
   "name": "香取市佐原",
   "region": "関東",
   "prefectures": [
    "千葉県"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "重要伝統的建造物群保存地区（商家町）",
   "priority": "A",
   "exam_signal": "NO_DIRECT_SIGNAL",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化庁（重要伝統的建造物群保存地区一覧）",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/hozonchiku/judenken_ichiran.html"
    }
   ]
  },
  {
   "id": "exam-w3c-017",
   "name": "六義園",
   "region": "関東",
   "prefectures": [
    "東京都"
   ],
   "categories": [
    "GARDEN"
   ],
   "recognition_hook": "東京都の庭園。国の名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 六義園）",
     "url": "https://online.bunka.go.jp/heritages/detail/160918"
    }
   ]
  },
  {
   "id": "exam-069",
   "name": "利島",
   "region": "関東",
   "prefectures": [
    "東京都"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した海岸・岬・島（東京都）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%88%A9%E5%B3%B6"
    },
    {
     "authority": "国土地理院／東京都環境局（東京の自然公園）",
     "url": "https://www.kankyo1.metro.tokyo.lg.jp/naturepark/know/park/introduction/kokuritsu/fujihakone/toshima/tourism.html"
    }
   ],
   "reading": "としま"
  },
  {
   "id": "exam-w3e-019",
   "name": "大森貝塚",
   "region": "関東",
   "prefectures": [
    "東京都"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "東京都大田区・品川区にまたがる貝塚。国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 大森貝塚）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/721"
    }
   ]
  },
  {
   "id": "exam-w3-005",
   "name": "富士箱根伊豆国立公園",
   "region": "関東",
   "prefectures": [
    "東京都",
    "神奈川県",
    "山梨県",
    "静岡県"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "東京・神奈川・山梨・静岡にまたがる国立公園（昭和11年指定）",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省 関東地方環境事務所（管内の国立公園）",
     "url": "https://kanto.env.go.jp/park.html"
    }
   ]
  },
  {
   "id": "exam-w3e-040",
   "name": "秋川渓谷",
   "region": "関東",
   "prefectures": [
    "東京都"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "多摩川の支流・秋川の渓谷。あきる野市から檜原村に及ぶ約20km",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "あきる野市（公式・観光情報 秋川渓谷）",
     "url": "https://www.city.akiruno.tokyo.jp/kanko/"
    }
   ]
  },
  {
   "id": "exam-w3c-004",
   "name": "小田原城跡",
   "region": "関東",
   "prefectures": [
    "神奈川県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "後北条氏の本拠となった城跡。国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 小田原城跡）",
     "url": "https://online.bunka.go.jp/heritages/detail/171805"
    }
   ]
  },
  {
   "id": "exam-059",
   "name": "芦ノ湖",
   "region": "関東",
   "prefectures": [
    "神奈川県"
   ],
   "categories": [
    "LAKE_WETLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した湖沼・湿原（神奈川県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E8%8A%A6%E3%83%8E%E6%B9%96"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-099",
   "name": "鶴岡八幡宮",
   "region": "関東",
   "prefectures": [
    "神奈川県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した寺社（神奈川県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%B6%B4%E5%B2%A1%E5%85%AB%E5%B9%A1%E5%AE%AE"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "food-001",
   "name": "へぎそば",
   "region": "中部",
   "prefectures": [
    "新潟県"
   ],
   "categories": [
    "LOCAL_FOOD_SPECIALTY"
   ],
   "recognition_hook": "新潟県の郷土料理（農林水産省「うちの郷土料理」掲載）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "FOOD",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "農林水産省（うちの郷土料理）",
     "url": "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/niigata.html"
    }
   ]
  },
  {
   "id": "exam-w3-006",
   "name": "中部山岳国立公園",
   "region": "中部",
   "prefectures": [
    "新潟県",
    "富山県",
    "長野県",
    "岐阜県"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "新潟・富山・長野・岐阜にまたがる国立公園（昭和9年指定）",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省 中部地方環境事務所（管内の国立公園）",
     "url": "https://chubu.env.go.jp/park.html"
    }
   ]
  },
  {
   "id": "exam-w3b-008",
   "name": "佐渡島",
   "region": "中部",
   "prefectures": [
    "新潟県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "新潟県の島。世界文化遺産「佐渡島の金山」がある",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化庁（日本の世界遺産一覧）",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/"
    }
   ]
  },
  {
   "id": "exam-w3-007",
   "name": "妙高戸隠連山国立公園",
   "region": "中部",
   "prefectures": [
    "新潟県",
    "長野県"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "新潟・長野にまたがる国立公園（平成27年指定）",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省 中部地方環境事務所（管内の国立公園）",
     "url": "https://chubu.env.go.jp/park.html"
    }
   ]
  },
  {
   "id": "exam-w3-023",
   "name": "岩室温泉",
   "region": "中部",
   "prefectures": [
    "新潟県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "新潟県の温泉地。環境大臣が指定する国民保養温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国民保養温泉地）",
     "url": "https://www.env.go.jp/nature/onsen/area/"
    }
   ]
  },
  {
   "id": "exam-w3c-025",
   "name": "彌彦神社",
   "region": "中部",
   "prefectures": [
    "新潟県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "新潟県の神社",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 彌彦神社狛犬）",
     "url": "https://online.bunka.go.jp/heritages/detail/165992"
    }
   ]
  },
  {
   "id": "exam-w3c-003",
   "name": "村上城跡",
   "region": "中部",
   "prefectures": [
    "新潟県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "村上藩の城跡。国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 村上城跡）",
     "url": "https://online.bunka.go.jp/heritages/detail/216279"
    }
   ]
  },
  {
   "id": "exam-w3c-013",
   "name": "清津峡",
   "region": "中部",
   "prefectures": [
    "新潟県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "新潟県の渓谷。国の名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 清津峡）",
     "url": "https://online.bunka.go.jp/heritages/detail/216249"
    }
   ]
  },
  {
   "id": "exam-w3e-055",
   "name": "瀬波温泉",
   "region": "中部",
   "prefectures": [
    "新潟県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "新潟県村上市の温泉地。明治37年に石油試掘中に湧き出したのが始まりで、日本海に沈む夕日で知られる",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "村上市（公式・観光情報 瀬波温泉）",
     "url": "https://www.city.murakami.lg.jp/site/kanko/senamionsen.html"
    }
   ]
  },
  {
   "id": "exam-w2-003",
   "name": "宇奈月温泉",
   "region": "中部",
   "prefectures": [
    "富山県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "黒部峡谷の玄関口にある温泉郷。黒部川上流の黒薙温泉から引湯している",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "黒部市（公式）",
     "url": "https://www.city.kurobe.toyama.jp/machimeguri/sp/kankou/svKankouDtl.aspx?servno=50"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%AE%87%E5%A5%88%E6%9C%88%E6%B8%A9%E6%B3%89"
    }
   ]
  },
  {
   "id": "des-023",
   "name": "白山国立公園",
   "region": "中部",
   "prefectures": [
    "富山県",
    "石川県",
    "福井県",
    "岐阜県"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "国立公園（1962指定）",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国立公園一覧）",
     "url": "https://www.env.go.jp/park/parks/index.html"
    }
   ]
  },
  {
   "id": "exam-w3c-014",
   "name": "称名滝",
   "region": "中部",
   "prefectures": [
    "富山県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "立山にある滝。国の名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 称名滝）",
     "url": "https://online.bunka.go.jp/heritages/detail/162571"
    }
   ]
  },
  {
   "id": "exam-w3-013",
   "name": "九谷焼",
   "region": "中部",
   "prefectures": [
    "石川県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "石川県の経済産業大臣指定 伝統的工芸品",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "一般財団法人 伝統的工芸品産業振興協会（経済産業大臣指定 伝統的工芸品 都道府県別一覧）",
     "url": "https://kyokai.kougeihin.jp/wp/wp-content/uploads/2025/10/shitei-area_20251027.pdf"
    }
   ]
  },
  {
   "id": "exam-x020",
   "name": "和倉温泉",
   "region": "中部",
   "prefectures": [
    "石川県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に登場した温泉地（石川県）",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%92%8C%E5%80%89%E6%B8%A9%E6%B3%89"
    },
    {
     "authority": "七尾市（公式）",
     "url": "https://www.city.nanao.lg.jp/syougai/wakuraonsen.html"
    }
   ]
  },
  {
   "id": "exam-109",
   "name": "山代温泉",
   "region": "中部",
   "prefectures": [
    "石川県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した温泉地（石川県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%B1%B1%E4%BB%A3%E6%B8%A9%E6%B3%89"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-w3-012",
   "name": "能登半島国定公園",
   "region": "中部",
   "prefectures": [
    "石川県",
    "富山県"
   ],
   "categories": [
    "QUASI_NATIONAL_PARK"
   ],
   "recognition_hook": "石川・富山にまたがる国定公園。日本海最大の半島の海岸景観",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国定公園一覧）",
     "url": "https://www.env.go.jp/nature/nationalparks/about/quasi-national-park/"
    }
   ]
  },
  {
   "id": "exam-w3c-024",
   "name": "那谷寺",
   "region": "中部",
   "prefectures": [
    "石川県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "石川県の寺院。普門閣が国の登録有形文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 那谷寺普門閣）",
     "url": "https://online.bunka.go.jp/heritages/detail/221014"
    }
   ]
  },
  {
   "id": "exam-w3d-007",
   "name": "三方五湖",
   "region": "中部",
   "prefectures": [
    "福井県"
   ],
   "categories": [
    "LAKE_WETLAND"
   ],
   "recognition_hook": "福井県の五つの湖。国の名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 三方五湖）",
     "url": "https://online.bunka.go.jp/heritages/detail/162641"
    }
   ]
  },
  {
   "id": "exam-w3e-003",
   "name": "丸岡城",
   "region": "中部",
   "prefectures": [
    "福井県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "福井県の城。天守が国の重要文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 丸岡城天守）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/831"
    }
   ]
  },
  {
   "id": "exam-035",
   "name": "明通寺",
   "region": "中部",
   "prefectures": [
    "福井県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した寺社（福井県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%98%8E%E9%80%9A%E5%AF%BA"
    },
    {
     "authority": "国土地理院／小浜市（公式）",
     "url": "https://www1.city.obama.fukui.jp/kanko-bunka/jisha-shiseki/96.html"
    }
   ]
  },
  {
   "id": "exam-w3e-058",
   "name": "芦原温泉",
   "region": "中部",
   "prefectures": [
    "福井県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "福井県あわら市の温泉地。JR芦原温泉駅がある",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "あわら市（公式・観光 ＪＲ芦原温泉駅西口賑わい施設）",
     "url": "https://www.city.awara.lg.jp/mokuteki/industry/kanko/kanko/p012388.html"
    }
   ]
  },
  {
   "id": "exam-w3-024",
   "name": "下部温泉",
   "region": "中部",
   "prefectures": [
    "山梨県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "山梨県の温泉地。環境大臣が指定する国民保養温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国民保養温泉地）",
     "url": "https://www.env.go.jp/nature/onsen/area/"
    }
   ]
  },
  {
   "id": "exam-012",
   "name": "大菩薩峠",
   "region": "中部",
   "prefectures": [
    "山梨県"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した山岳・高原（山梨県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%A4%A7%E8%8F%A9%E8%96%A9%E5%B3%A0"
    },
    {
     "authority": "国土地理院／山梨県（公式 大菩薩の森）",
     "url": "https://www.pref.yamanashi.jp/kt-rinmuk/73987641400.html"
    }
   ]
  },
  {
   "id": "exam-w3b-001",
   "name": "山中湖",
   "region": "中部",
   "prefectures": [
    "山梨県"
   ],
   "categories": [
    "LAKE_WETLAND",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "富士五湖の一つ。世界文化遺産「富士山」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "山梨県（公式・世界文化遺産「富士山」の構成資産紹介）",
     "url": "https://www.pref.yamanashi.jp/fujisan/kouseishisanshoukai.html"
    }
   ]
  },
  {
   "id": "exam-019",
   "name": "恵林寺",
   "region": "中部",
   "prefectures": [
    "山梨県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した寺社（山梨県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%81%B5%E6%9E%97%E5%AF%BA"
    },
    {
     "authority": "国土地理院／甲州市（公式）",
     "url": "https://www.city.koshu.yamanashi.jp/iju/iju/erinji.html"
    }
   ]
  },
  {
   "id": "exam-w2-032",
   "name": "河口湖",
   "region": "中部",
   "prefectures": [
    "山梨県"
   ],
   "categories": [
    "LAKE_WETLAND",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "富士五湖の一つ。世界文化遺産「富士山」の構成資産",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "富士河口湖町（公式・町勢概要）",
     "url": "https://www.town.fujikawaguchiko.lg.jp/ka/info.php?if_id=738"
    },
    {
     "authority": "山梨県（公式・世界文化遺産「富士山」の構成資産紹介）",
     "url": "https://www.pref.yamanashi.jp/fujisan/kouseishisanshoukai.html"
    }
   ]
  },
  {
   "id": "exam-w3e-039",
   "name": "西沢渓谷",
   "region": "中部",
   "prefectures": [
    "山梨県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "山梨県山梨市の渓谷",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "山梨市（公式・西沢渓谷）",
     "url": "https://www.city.yamanashi.yamanashi.jp/soshiki/17/20929.html"
    }
   ]
  },
  {
   "id": "exam-w3c-023",
   "name": "身延山久遠寺",
   "region": "中部",
   "prefectures": [
    "山梨県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "山梨県の寺院。思親閣仁王門などが国の登録有形文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 身延山久遠寺思親閣仁王門）",
     "url": "https://online.bunka.go.jp/heritages/detail/610603"
    }
   ]
  },
  {
   "id": "exam-w2-019",
   "name": "別所温泉",
   "region": "中部",
   "prefectures": [
    "長野県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "上田市にある温泉地。安楽寺・北向観音などの古刹が近い",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "上田市（公式）",
     "url": "https://www.city.ueda.nagano.jp/soshiki/kenko/4992.html"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%88%A5%E6%89%80%E6%B8%A9%E6%B3%89"
    }
   ]
  },
  {
   "id": "exam-w2-020",
   "name": "善光寺",
   "region": "中部",
   "prefectures": [
    "長野県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "長野市にある寺院。本堂は宝永4年（1707）の建築で国宝",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "長野市（公式）",
     "url": "https://www.city.nagano.nagano.jp/n205100/contents/p003195.html"
    },
    {
     "authority": "文化遺産オンライン（文化庁 善光寺本堂）",
     "url": "https://online.bunka.go.jp/heritages/detail/133538"
    }
   ]
  },
  {
   "id": "exam-w3b-010",
   "name": "奈良井宿",
   "region": "中部",
   "prefectures": [
    "長野県"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "中山道の宿場町。重要伝統的建造物群保存地区「塩尻市奈良井」",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化庁（重要伝統的建造物群保存地区一覧）",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/hozonchiku/judenken_ichiran.html"
    }
   ]
  },
  {
   "id": "exam-w2-014",
   "name": "妻籠宿",
   "region": "中部",
   "prefectures": [
    "長野県"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "中山道の宿場町。全国で最初期に選定された重要伝統的建造物群保存地区の一つ",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "南木曽町（公式）",
     "url": "https://www.town.nagiso.nagano.jp/0000000370.html"
    },
    {
     "authority": "文化庁（重要伝統的建造物群保存地区 南木曽町妻籠宿）",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/hozonchiku/pdf/r1392257_038.pdf"
    }
   ]
  },
  {
   "id": "exam-027",
   "name": "松本城",
   "region": "中部",
   "prefectures": [
    "長野県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した城（長野県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%9D%BE%E6%9C%AC%E5%9F%8E"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-w3c-022",
   "name": "諏訪大社",
   "region": "中部",
   "prefectures": [
    "長野県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "長野県の神社。上社・下社の建造物が重要文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 諏訪大社上社本宮 布橋）",
     "url": "https://online.bunka.go.jp/heritages/detail/221127"
    }
   ]
  },
  {
   "id": "exam-w3e-050",
   "name": "下呂温泉",
   "region": "中部",
   "prefectures": [
    "岐阜県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "岐阜県下呂市の温泉地。下呂温泉まつりが開かれる",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "下呂市（公式・げろたび 下呂温泉まつり）",
     "url": "https://www.city.gero.lg.jp/site/kanko/24308.html"
    }
   ]
  },
  {
   "id": "exam-w3e-033",
   "name": "恵那峡",
   "region": "中部",
   "prefectures": [
    "岐阜県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "岐阜県恵那市の峡谷",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "恵那市（公式・ようこそ恵那市へ 恵那峡）",
     "url": "https://www.city.ena.lg.jp/ena_shokai/5699.html"
    }
   ]
  },
  {
   "id": "exam-w2-002",
   "name": "三保松原",
   "region": "中部",
   "prefectures": [
    "静岡県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "駿河湾に面した松林の景勝地。国の名勝で、世界文化遺産「富士山」の構成資産",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "静岡市（公式・三保松原）",
     "url": "https://www.city.shizuoka.lg.jp/p008356.html"
    },
    {
     "authority": "文化庁（国指定文化財等データベース）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/911/138"
    },
    {
     "authority": "山梨県（公式・世界文化遺産「富士山」の構成資産紹介）",
     "url": "https://www.pref.yamanashi.jp/fujisan/kouseishisanshoukai.html"
    }
   ]
  },
  {
   "id": "exam-021",
   "name": "三嶋大社",
   "region": "中部",
   "prefectures": [
    "静岡県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した寺社（静岡県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E4%B8%89%E5%B6%8B%E5%A4%A7%E7%A4%BE"
    },
    {
     "authority": "国土地理院／三島市（公式）",
     "url": "https://www.city.mishima.shizuoka.jp/page/3533.html"
    }
   ]
  },
  {
   "id": "exam-w2-015",
   "name": "久能山東照宮",
   "region": "中部",
   "prefectures": [
    "静岡県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "徳川家康を祀る神社。社殿は国宝で、日本平から結ばれる",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "静岡市（公式）",
     "url": "https://www.city.shizuoka.lg.jp/s5984/s005530.html"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E4%B9%85%E8%83%BD%E5%B1%B1%E6%9D%B1%E7%85%A7%E5%AE%AE"
    }
   ]
  },
  {
   "id": "exam-w3e-007",
   "name": "天窓洞",
   "region": "中部",
   "prefectures": [
    "静岡県"
   ],
   "categories": [
    "OTHER"
   ],
   "recognition_hook": "静岡県西伊豆町の堂ヶ島にある洞。国の天然記念物「堂ヶ島天窓洞」",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 堂ヶ島天窓洞）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/1337"
    }
   ]
  },
  {
   "id": "exam-w3b-002",
   "name": "富士山本宮浅間大社",
   "region": "中部",
   "prefectures": [
    "静岡県"
   ],
   "categories": [
    "TEMPLE_SHRINE",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産「富士山」の構成資産。全国の浅間神社の総本宮",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "山梨県（公式・世界文化遺産「富士山」の構成資産紹介）",
     "url": "https://www.pref.yamanashi.jp/fujisan/kouseishisanshoukai.html"
    }
   ]
  },
  {
   "id": "exam-w3e-044",
   "name": "爪木崎",
   "region": "中部",
   "prefectures": [
    "静岡県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "静岡県下田市の岬",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "下田市（公式・みどころ 爪木崎）",
     "url": "https://www.city.shimoda.shizuoka.jp/category/100100midokoro/110772.html"
    }
   ]
  },
  {
   "id": "exam-w3c-011",
   "name": "登呂遺跡",
   "region": "中部",
   "prefectures": [
    "静岡県"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "弥生時代後期の遺跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 静岡県登呂遺跡出土品）",
     "url": "https://online.bunka.go.jp/heritages/detail/274692"
    }
   ]
  },
  {
   "id": "exam-w3b-003",
   "name": "白糸ノ滝",
   "region": "中部",
   "prefectures": [
    "静岡県"
   ],
   "categories": [
    "VALLEY_WATERFALL",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産「富士山」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "山梨県（公式・世界文化遺産「富士山」の構成資産紹介）",
     "url": "https://www.pref.yamanashi.jp/fujisan/kouseishisanshoukai.html"
    }
   ]
  },
  {
   "id": "exam-w2-035",
   "name": "石廊崎",
   "region": "中部",
   "prefectures": [
    "静岡県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "南伊豆町の岬。伊豆半島の海岸美で知られ、奥には断崖の奥石廊崎が続く",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "南伊豆町（公式）",
     "url": "https://www.town.minamiizu.shizuoka.jp/docs/2013031200552/"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%9F%B3%E5%BB%8A%E5%B4%8E"
    }
   ]
  },
  {
   "id": "exam-w3-016",
   "name": "常滑焼",
   "region": "中部",
   "prefectures": [
    "愛知県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "愛知県の経済産業大臣指定 伝統的工芸品",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "一般財団法人 伝統的工芸品産業振興協会（経済産業大臣指定 伝統的工芸品 都道府県別一覧）",
     "url": "https://kyokai.kougeihin.jp/wp/wp-content/uploads/2025/10/shitei-area_20251027.pdf"
    }
   ]
  },
  {
   "id": "exam-w3e-035",
   "name": "清洲城",
   "region": "中部",
   "prefectures": [
    "愛知県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "愛知県清須市の城",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "清須市（公式・観光）",
     "url": "https://www.city.kiyosu.aichi.jp/kanko/index.html"
    },
    {
     "authority": "清須市（公式・観光施設 清洲城）",
     "url": "https://www.city.kiyosu.aichi.jp/shisetsu_annai/kanko_shisetsu_sonota/kiyosujo.html"
    }
   ]
  },
  {
   "id": "exam-026",
   "name": "犬山城",
   "region": "中部",
   "prefectures": [
    "愛知県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した城（愛知県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%8A%AC%E5%B1%B1%E5%9F%8E"
    },
    {
     "authority": "国土地理院／愛知県公式観光サイト",
     "url": "https://aichinow.pref.aichi.jp/spots/detail/20/"
    }
   ],
   "aliases": [
    "白帝城"
   ]
  },
  {
   "id": "exam-w3-008",
   "name": "伊勢志摩国立公園",
   "region": "近畿",
   "prefectures": [
    "三重県"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "三重県の国立公園（昭和21年指定）",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省 中部地方環境事務所（管内の国立公園）",
     "url": "https://chubu.env.go.jp/park.html"
    }
   ]
  },
  {
   "id": "exam-w3e-030",
   "name": "朝熊山",
   "region": "近畿",
   "prefectures": [
    "三重県"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "三重県伊勢市の山。山上の経塚群が国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 朝熊山経塚群）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/1525"
    }
   ]
  },
  {
   "id": "exam-w3e-047",
   "name": "本居宣長記念館",
   "region": "近畿",
   "prefectures": [
    "三重県"
   ],
   "categories": [
    "MUSEUM_CULTURAL_FACILITY"
   ],
   "recognition_hook": "三重県松阪市の記念館",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "FACILITY",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "松阪市（公式・松阪市観光プロモーションサイト）",
     "url": "https://www.city.matsusaka.mie.jp/site/kanko/prdouga.html"
    }
   ]
  },
  {
   "id": "exam-x002",
   "name": "瀞峡",
   "region": "近畿",
   "prefectures": [
    "三重県",
    "奈良県",
    "和歌山県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に登場した渓谷・滝（三重県・奈良県・和歌山県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%80%9E%E5%B3%A1"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ）／新宮市（公式）",
     "url": "https://www.city.shingu.lg.jp/Info/342"
    }
   ]
  },
  {
   "id": "exam-086",
   "name": "賢島",
   "region": "近畿",
   "prefectures": [
    "三重県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した海岸・岬・島（三重県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E8%B3%A2%E5%B3%B6"
    },
    {
     "authority": "国土地理院／三重県（公式）",
     "url": "https://www.pref.mie.lg.jp/miesummit/contents/2-4_post.html"
    }
   ],
   "reading": "かしこじま"
  },
  {
   "id": "exam-w3e-041",
   "name": "赤目四十八滝",
   "region": "近畿",
   "prefectures": [
    "三重県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "三重県名張市の滝群。不動滝・千手滝・布曳滝・琵琶滝・荷担滝が「赤目五瀑」と呼ばれる",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "名張市（公式・自然を満喫する）",
     "url": "https://www.city.nabari.lg.jp/n001/020/010/20150528115450.html"
    }
   ]
  },
  {
   "id": "exam-w3-014",
   "name": "信楽焼",
   "region": "近畿",
   "prefectures": [
    "滋賀県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "滋賀県の経済産業大臣指定 伝統的工芸品",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "一般財団法人 伝統的工芸品産業振興協会（経済産業大臣指定 伝統的工芸品 都道府県別一覧）",
     "url": "https://kyokai.kougeihin.jp/wp/wp-content/uploads/2025/10/shitei-area_20251027.pdf"
    }
   ]
  },
  {
   "id": "exam-094",
   "name": "多賀大社",
   "region": "近畿",
   "prefectures": [
    "滋賀県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した寺社（滋賀県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%A4%9A%E8%B3%80%E5%A4%A7%E7%A4%BE"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-w3c-026",
   "name": "宝厳寺",
   "region": "近畿",
   "prefectures": [
    "滋賀県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "琵琶湖の竹生島にある寺院。弁才天堂がある",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 宝厳寺弁才天堂）",
     "url": "https://online.bunka.go.jp/heritages/detail/622449"
    }
   ]
  },
  {
   "id": "exam-w3c-020",
   "name": "延暦寺",
   "region": "近畿",
   "prefectures": [
    "滋賀県"
   ],
   "categories": [
    "TEMPLE_SHRINE",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "滋賀県の寺院。世界文化遺産「古都京都の文化財」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 延暦寺文殊楼）",
     "url": "https://online.bunka.go.jp/heritages/detail/549698"
    },
    {
     "authority": "文化遺産オンライン（文化庁 古都京都の文化財）",
     "url": "https://online.bunka.go.jp/special_content/hlink3"
    }
   ]
  },
  {
   "id": "exam-w2-009",
   "name": "彦根城",
   "region": "近畿",
   "prefectures": [
    "滋賀県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "彦根山を利用して築かれた平山城。山頂に国宝の天守が残る",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "彦根市（公式・彦根城の観覧案内）",
     "url": "https://www.city.hikone.lg.jp/kakuka/kanko_bunka/8/2_1/3/4586.html"
    },
    {
     "authority": "文化庁（日本遺産ポータルサイト 彦根城）",
     "url": "https://japan-heritage.bunka.go.jp/ja/culturalproperties/result/157/"
    }
   ]
  },
  {
   "id": "exam-w3c-021",
   "name": "日吉大社",
   "region": "近畿",
   "prefectures": [
    "滋賀県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "滋賀県の神社。東本宮本殿などが国宝・重要文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 日吉大社東本宮本殿及び拝殿 本殿）",
     "url": "https://online.bunka.go.jp/heritages/detail/155885"
    }
   ]
  },
  {
   "id": "exam-w2-011",
   "name": "琵琶湖",
   "region": "近畿",
   "prefectures": [
    "滋賀県"
   ],
   "categories": [
    "LAKE_WETLAND"
   ],
   "recognition_hook": "滋賀県の面積の約6分の1を占める日本最大の湖。約400万年の歴史をもつ古代湖",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "滋賀県（公式）",
     "url": "https://www.pref.shiga.lg.jp/ippan/kankyoshizen/biwako/gaiyou.html"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%90%B5%E7%90%B6%E6%B9%96"
    }
   ]
  },
  {
   "id": "exam-w3d-002",
   "name": "長浜曳山祭の曳山行事",
   "region": "近畿",
   "prefectures": [
    "滋賀県"
   ],
   "categories": [
    "FESTIVAL_CULTURE"
   ],
   "recognition_hook": "滋賀県長浜市の祭礼行事。国指定の無形民俗文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "FESTIVAL",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "長浜市（公式・長浜市所在指定文化財一覧）",
     "url": "https://www.city.nagahama.lg.jp/cmsfiles/contents/0000014/14176/ichiran.pdf"
    }
   ]
  },
  {
   "id": "exam-w3c-019",
   "name": "仁和寺",
   "region": "近畿",
   "prefectures": [
    "京都府"
   ],
   "categories": [
    "TEMPLE_SHRINE",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "京都府の寺院。世界文化遺産「古都京都の文化財」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 仁和寺笈文書（三百十九通））",
     "url": "https://online.bunka.go.jp/heritages/detail/612933"
    },
    {
     "authority": "文化遺産オンライン（文化庁 古都京都の文化財）",
     "url": "https://online.bunka.go.jp/special_content/hlink3"
    }
   ]
  },
  {
   "id": "exam-w3e-031",
   "name": "保津川",
   "region": "近畿",
   "prefectures": [
    "京都府"
   ],
   "categories": [
    "OTHER"
   ],
   "recognition_hook": "京都府の川。嵯峨野観光鉄道の保津川橋梁が国の登録有形文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 嵯峨野観光鉄道保津川橋梁）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/101/00016519"
    }
   ]
  },
  {
   "id": "exam-w3e-008",
   "name": "天龍寺",
   "region": "近畿",
   "prefectures": [
    "京都府"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "京都市右京区の寺院。庭園が国の史跡・特別名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 天龍寺庭園）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/1649"
    }
   ]
  },
  {
   "id": "exam-w3e-010",
   "name": "平安神宮",
   "region": "近畿",
   "prefectures": [
    "京都府"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "京都市左京区の神社。神苑が国の名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 平安神宮神苑）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/1735"
    }
   ]
  },
  {
   "id": "exam-w3e-020",
   "name": "平等院",
   "region": "近畿",
   "prefectures": [
    "京都府"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "京都府の寺院。観音堂が国の重要文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 平等院観音堂）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/1945"
    }
   ]
  },
  {
   "id": "exam-w3e-021",
   "name": "広隆寺",
   "region": "近畿",
   "prefectures": [
    "京都府"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "京都府の寺院。桂宮院本堂が国宝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 広隆寺桂宮院本堂）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/1868"
    }
   ]
  },
  {
   "id": "exam-w3e-022",
   "name": "教王護国寺",
   "region": "近畿",
   "prefectures": [
    "京都府"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "京都府の寺院。北総門など多くの建物が国の重要文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 教王護国寺北総門）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/1839"
    }
   ]
  },
  {
   "id": "exam-w3d-006",
   "name": "湯の花温泉",
   "region": "近畿",
   "prefectures": [
    "京都府"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "亀岡市中心部から西へ約7km の山あいにある温泉郷",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "亀岡市（公式・亀岡観光トップページ）",
     "url": "https://www.city.kameoka.kyoto.jp/site/kankou/"
    }
   ]
  },
  {
   "id": "exam-009",
   "name": "醍醐寺",
   "region": "近畿",
   "prefectures": [
    "京都府"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した寺社（京都府）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%86%8D%E9%86%90%E5%AF%BA"
    },
    {
     "authority": "京都府（公式 世界遺産）",
     "url": "https://www.pref.kyoto.jp/isan/daigoji.html"
    }
   ],
   "reading": "だいごじ"
  },
  {
   "id": "exam-w3e-029",
   "name": "鞍馬寺",
   "region": "近畿",
   "prefectures": [
    "京都府"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "京都府の寺院。経塚遺物が国宝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 鞍馬寺経塚遺物）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/201/852"
    }
   ]
  },
  {
   "id": "exam-024",
   "name": "今宮戎神社",
   "region": "近畿",
   "prefectures": [
    "大阪府"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した寺社（大阪府）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E4%BB%8A%E5%AE%AE%E6%88%8E%E7%A5%9E%E7%A4%BE"
    },
    {
     "authority": "国土地理院／大阪市浪速区（公式）",
     "url": "https://www.city.osaka.lg.jp/naniwa/page/0000001062.html"
    }
   ]
  },
  {
   "id": "exam-002",
   "name": "住吉大社",
   "region": "近畿",
   "prefectures": [
    "大阪府"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した寺社（大阪府）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E4%BD%8F%E5%90%89%E5%A4%A7%E7%A4%BE"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-w3-009",
   "name": "瀬戸内海国立公園",
   "region": "近畿",
   "prefectures": [
    "大阪府",
    "兵庫県",
    "和歌山県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "福岡県",
    "大分県"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "11 府県にまたがる国立公園（昭和9年指定）",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省 近畿地方環境事務所（管内の国立公園）",
     "url": "https://kinki.env.go.jp/park.html"
    },
    {
     "authority": "環境省 中国四国地方環境事務所（管内の国立公園）",
     "url": "https://chushikoku.env.go.jp/park.html"
    }
   ]
  },
  {
   "id": "exam-w3e-045",
   "name": "六甲山",
   "region": "近畿",
   "prefectures": [
    "兵庫県"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "兵庫県神戸市の山",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "神戸市（公式・観光 六甲山）",
     "url": "https://www.city.kobe.lg.jp/a17526/kanko/leisure/mountain/index.html"
    },
    {
     "authority": "神戸市（公式・観光）",
     "url": "https://www.city.kobe.lg.jp/kanko/leisure/index.html"
    }
   ]
  },
  {
   "id": "craft-003",
   "name": "出石焼",
   "region": "近畿",
   "prefectures": [
    "兵庫県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "兵庫県の伝統的工芸品（経済産業大臣指定）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "経済産業省（伝統的工芸品 指定品目一覧）",
     "url": "https://www.meti.go.jp/press/2025/10/20251027001/20251027001.html"
    }
   ]
  },
  {
   "id": "exam-w3e-026",
   "name": "城崎温泉",
   "region": "近畿",
   "prefectures": [
    "兵庫県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "兵庫県豊岡市の温泉地。外湯めぐりで知られる",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "豊岡市（公式・観光 温泉）",
     "url": "https://www.city.toyooka.lg.jp/kanko/onsen/index.html"
    },
    {
     "authority": "国指定文化財等データベース（文化庁 城崎温泉ロープウェイ温泉寺駅）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/101/00011995"
    }
   ]
  },
  {
   "id": "exam-w3e-046",
   "name": "手塚治虫記念館",
   "region": "近畿",
   "prefectures": [
    "兵庫県"
   ],
   "categories": [
    "MUSEUM_CULTURAL_FACILITY"
   ],
   "recognition_hook": "兵庫県宝塚市が管理・運営する記念館。1994年開館",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "FACILITY",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "宝塚市（公式・手塚治虫記念館 開館時間・入館料）",
     "url": "https://www.city.takarazuka.hyogo.jp/tezuka/4000018/4000015.html"
    }
   ]
  },
  {
   "id": "exam-096",
   "name": "淡路島",
   "region": "近畿",
   "prefectures": [
    "兵庫県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した海岸・岬・島（兵庫県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%B7%A1%E8%B7%AF%E5%B3%B6"
    },
    {
     "authority": "国土地理院／兵庫県（公式 淡路県民局）",
     "url": "https://web.pref.hyogo.lg.jp/awk01/awaji/intro.html"
    }
   ]
  },
  {
   "id": "exam-w2-004",
   "name": "玄武洞",
   "region": "近畿",
   "prefectures": [
    "兵庫県"
   ],
   "categories": [
    "OTHER"
   ],
   "recognition_hook": "火山活動でできた柱状の節理。玄武洞・青龍洞は国の天然記念物",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "豊岡市（公式）",
     "url": "https://www.city.toyooka.lg.jp/1019810/1019854/1019861/1002161.html"
    },
    {
     "authority": "文化庁（国指定文化財等データベース）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/101/00006041"
    }
   ]
  },
  {
   "id": "exam-w3c-005",
   "name": "竹田城跡",
   "region": "近畿",
   "prefectures": [
    "兵庫県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "山上に石垣が残る城跡。国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 竹田城跡）",
     "url": "https://online.bunka.go.jp/heritages/detail/161758"
    }
   ]
  },
  {
   "id": "exam-w3e-024",
   "name": "吉野山",
   "region": "近畿",
   "prefectures": [
    "奈良県"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "奈良県吉野町の山。国の史跡・名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 吉野山）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/1950"
    }
   ]
  },
  {
   "id": "exam-w3e-006",
   "name": "大峰山寺",
   "region": "近畿",
   "prefectures": [
    "奈良県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "奈良県天川村の寺院。本堂が国の重要文化財、境内が国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 大峰山寺境内）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/3358"
    },
    {
     "authority": "国指定文化財等データベース（文化庁 大峰山寺本堂）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/2806"
    }
   ]
  },
  {
   "id": "exam-w3-032",
   "name": "春日大社",
   "region": "近畿",
   "prefectures": [
    "奈良県"
   ],
   "categories": [
    "TEMPLE_SHRINE",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産「古都奈良の文化財」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 古都奈良の文化財）",
     "url": "https://online.bunka.go.jp/special_content/hlink7"
    }
   ]
  },
  {
   "id": "exam-w3-030",
   "name": "法起寺",
   "region": "近畿",
   "prefectures": [
    "奈良県"
   ],
   "categories": [
    "TEMPLE_SHRINE",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産「法隆寺地域の仏教建造物」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 法隆寺地域の仏教建造物）",
     "url": "https://online.bunka.go.jp/special_content/hlink1"
    }
   ]
  },
  {
   "id": "exam-w3-031",
   "name": "興福寺",
   "region": "近畿",
   "prefectures": [
    "奈良県"
   ],
   "categories": [
    "TEMPLE_SHRINE",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産「古都奈良の文化財」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 古都奈良の文化財）",
     "url": "https://online.bunka.go.jp/special_content/hlink7"
    }
   ]
  },
  {
   "id": "exam-065",
   "name": "若草山",
   "region": "近畿",
   "prefectures": [
    "奈良県"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した山岳・高原（奈良県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E8%8B%A5%E8%8D%89%E5%B1%B1"
    },
    {
     "authority": "国土地理院／奈良県（公式 若草山焼き行事）",
     "url": "https://www3.pref.nara.jp/yamayaki/"
    }
   ]
  },
  {
   "id": "exam-w3e-001",
   "name": "赤膚焼",
   "region": "近畿",
   "prefectures": [
    "奈良県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "奈良晒・奈良墨・奈良団扇・奈良筆などと並ぶ奈良の伝統工芸品の一つ",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "奈良市（公式・産業政策課「奈良の工芸品」）",
     "url": "https://www.city.nara.lg.jp/soshiki/109/4514.html"
    }
   ]
  },
  {
   "id": "exam-w3e-016",
   "name": "金峯山寺",
   "region": "近畿",
   "prefectures": [
    "奈良県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "奈良県の寺院。本堂と二王門が国宝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 金峯山寺二王門）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/2798"
    },
    {
     "authority": "国指定文化財等データベース（文化庁 金峯山寺本堂）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/2797"
    }
   ]
  },
  {
   "id": "exam-w3e-017",
   "name": "高取城跡",
   "region": "近畿",
   "prefectures": [
    "奈良県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "奈良県高取町の城跡。国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 高取城跡）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/1992"
    }
   ]
  },
  {
   "id": "exam-w3e-011",
   "name": "橋杭岩",
   "region": "近畿",
   "prefectures": [
    "和歌山県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "和歌山県串本町の岩。国の名勝・天然記念物",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 橋杭岩）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/2059"
    }
   ]
  },
  {
   "id": "exam-w3e-023",
   "name": "道成寺",
   "region": "近畿",
   "prefectures": [
    "和歌山県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "和歌山県の寺院。本堂が国の重要文化財、境内が国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 道成寺境内）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/00003783"
    },
    {
     "authority": "国指定文化財等データベース（文化庁 道成寺本堂）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/2914"
    }
   ]
  },
  {
   "id": "exam-018",
   "name": "三朝温泉",
   "region": "中国",
   "prefectures": [
    "鳥取県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した温泉地（鳥取県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E4%B8%89%E6%9C%9D%E6%B8%A9%E6%B3%89"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-w3-010",
   "name": "大山隠岐国立公園",
   "region": "中国",
   "prefectures": [
    "鳥取県",
    "島根県",
    "岡山県"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "鳥取・島根・岡山にまたがる国立公園（昭和11年指定）",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省 中国四国地方環境事務所（管内の国立公園）",
     "url": "https://chushikoku.env.go.jp/park.html"
    }
   ]
  },
  {
   "id": "exam-w2-034",
   "name": "皆生温泉",
   "region": "中国",
   "prefectures": [
    "鳥取県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "美保湾に面した弓ヶ浜半島の東端にある温泉。米子の奥座敷と呼ばれる",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "米子市（公式）",
     "url": "https://www.city.yonago.lg.jp/9876.htm"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%9A%86%E7%94%9F%E6%B8%A9%E6%B3%89"
    }
   ]
  },
  {
   "id": "exam-w3d-008",
   "name": "三瓶山",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "島根県の山。三瓶山自然林が国の天然記念物",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 三瓶山自然林）",
     "url": "https://online.bunka.go.jp/heritages/detail/139174"
    }
   ]
  },
  {
   "id": "exam-w2-012",
   "name": "出雲大社",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "出雲市にある神社。境内は国の史跡",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "島根県（公式・史跡紹介）",
     "url": "https://www.pref.shimane.lg.jp/life/bunka/bunkazai/shiseki/shisekidesu/shiseki09.html"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%87%BA%E9%9B%B2%E5%A4%A7%E7%A4%BE"
    }
   ]
  },
  {
   "id": "exam-w2-022",
   "name": "国賀海岸",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "隠岐諸島・西ノ島の西海岸に約7kmにわたって続く海食崖と海食洞の海岸",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "西ノ島町（公式）",
     "url": "https://www.town.nishinoshima.shimane.jp/midokoro/miru/"
    },
    {
     "authority": "島根県（しまね観光ナビ｜島根県公式観光情報サイト）",
     "url": "https://www.kankou-shimane.com/pickup/24590.html"
    }
   ]
  },
  {
   "id": "exam-w2-025",
   "name": "嫁ヶ島",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "宍道湖の東端に浮かぶ周囲240メートルの平板な小島。後方に沈む夕日で知られる",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "松江市（公式・文化財課 調査コラム「嫁ケ島に温泉は湧いたか」）",
     "url": "https://www.city.matsue.lg.jp/material/files/group/34/chosa_colmn44a.pdf"
    },
    {
     "authority": "環境省（ラムサール条約湿地 宍道湖 リーフレット）",
     "url": "https://www.env.go.jp/nature/ramsar/conv/ramsarleaflet/39_Shinji-ko.pdf"
    }
   ]
  },
  {
   "id": "exam-w2-001",
   "name": "宍道湖",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "LAKE_WETLAND"
   ],
   "recognition_hook": "松江市の西に広がる汽水湖。夕日の景観と「宍道湖七珍」で知られる",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（ラムサール条約湿地 宍道湖 リーフレット）",
     "url": "https://www.env.go.jp/nature/ramsar/conv/ramsarleaflet/39_Shinji-ko.pdf"
    },
    {
     "authority": "島根県（公式・ラムサール条約湿地「宍道湖・中海」）",
     "url": "https://www.pref.shimane.lg.jp/infra/kankyo/kankyo/shinjiko_nakaumi/ramsar/"
    }
   ]
  },
  {
   "id": "exam-w3e-061",
   "name": "有福温泉",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "島根県江津市の温泉地。階段に沿って温泉街が形成され、御前湯・さつき湯・やよい湯の公衆浴場がある",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "江津市（公式・江津の温泉）",
     "url": "https://www.city.gotsu.lg.jp/soshiki/16/4704.html"
    }
   ]
  },
  {
   "id": "exam-w2-010",
   "name": "松江城",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "宍道湖の東、松江市街にある城。天守は国宝",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化庁（国指定文化財等データベース 松江城天守）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/2953"
    },
    {
     "authority": "松江市（公式・松江城天守の国宝指定について）",
     "url": "https://www.city.matsue.lg.jp/soshikikarasagasu/bunkasportsbu_matsuejo_shiryochosaka/rekishi_bunkazai/2/tensyu/2714.html"
    }
   ],
   "aliases": [
    "千鳥城"
   ]
  },
  {
   "id": "exam-w3b-009",
   "name": "温泉津温泉",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "HOT_SPRING",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産「石見銀山遺跡とその文化的景観」の構成資産「温泉津」にある温泉",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 石見銀山遺跡とその文化的景観）",
     "url": "https://online.bunka.go.jp/special_content/hlinkB"
    }
   ]
  },
  {
   "id": "exam-w2-005",
   "name": "玉造温泉",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "松江市街の南西にある温泉地。玉湯川沿いに温泉街が続く",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "島根県（しまね観光ナビ｜島根県公式観光情報サイト）",
     "url": "https://www.kankou-shimane.com/destination/20241"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%8E%89%E9%80%A0%E6%B8%A9%E6%B3%89"
    }
   ]
  },
  {
   "id": "exam-w3-036",
   "name": "石見銀山遺跡",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "HISTORIC_DISTRICT",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産「石見銀山遺跡とその文化的景観」",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 石見銀山遺跡とその文化的景観）",
     "url": "https://online.bunka.go.jp/special_content/hlinkB"
    }
   ]
  },
  {
   "id": "exam-w3-037",
   "name": "羅漢寺五百羅漢",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "TEMPLE_SHRINE",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産「石見銀山遺跡とその文化的景観」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 石見銀山遺跡とその文化的景観）",
     "url": "https://online.bunka.go.jp/special_content/hlinkB"
    }
   ]
  },
  {
   "id": "exam-w3e-032",
   "name": "西ノ島",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "島根県隠岐の島。年中行事「隠岐西ノ島のシャーラブネ」が国の記録作成等の措置を講ずべき無形の民俗文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 隠岐西ノ島のシャーラブネ）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/312/775"
    }
   ]
  },
  {
   "id": "exam-015",
   "name": "足立美術館",
   "region": "中国",
   "prefectures": [
    "島根県"
   ],
   "categories": [
    "MUSEUM_CULTURAL_FACILITY"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した文化施設（島根県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "FACILITY",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E8%B6%B3%E7%AB%8B%E7%BE%8E%E8%A1%93%E9%A4%A8"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-014",
   "name": "大原美術館",
   "region": "中国",
   "prefectures": [
    "岡山県"
   ],
   "categories": [
    "MUSEUM_CULTURAL_FACILITY"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した文化施設（岡山県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "FACILITY",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%A4%A7%E5%8E%9F%E7%BE%8E%E8%A1%93%E9%A4%A8"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-w3-025",
   "name": "奥津温泉",
   "region": "中国",
   "prefectures": [
    "岡山県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "岡山県の温泉地。環境大臣が指定する国民保養温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国民保養温泉地）",
     "url": "https://www.env.go.jp/nature/onsen/area/"
    }
   ]
  },
  {
   "id": "exam-w3-026",
   "name": "湯郷温泉",
   "region": "中国",
   "prefectures": [
    "岡山県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "岡山県の温泉地。環境大臣が指定する国民保養温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国民保養温泉地）",
     "url": "https://www.env.go.jp/nature/onsen/area/"
    }
   ]
  },
  {
   "id": "exam-003",
   "name": "瀬戸大橋",
   "region": "中国",
   "prefectures": [
    "岡山県",
    "香川県"
   ],
   "categories": [
    "LEISURE_STRUCTURE_BRIDGE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した橋・構造物（岡山県・香川県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%80%AC%E6%88%B8%E5%A4%A7%E6%A9%8B"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-w2-037",
   "name": "西大寺会陽",
   "region": "中国",
   "prefectures": [
    "岡山県"
   ],
   "categories": [
    "FESTIVAL_CULTURE"
   ],
   "recognition_hook": "岡山市東区の西大寺観音院で行われるはだか祭り",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "FESTIVAL",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "岡山市（公式・西大寺会陽（はだか祭り））",
     "url": "https://www.city.okayama.jp/higashiku/0000017681.html"
    },
    {
     "authority": "岡山市（公式・西大寺の会陽）",
     "url": "https://www.city.okayama.jp/life/0000041564.html"
    }
   ]
  },
  {
   "id": "exam-048",
   "name": "鷲羽山",
   "region": "中国",
   "prefectures": [
    "岡山県"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した山岳・高原（岡山県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%B7%B2%E7%BE%BD%E5%B1%B1"
    },
    {
     "authority": "国土地理院／倉敷市（公式）",
     "url": "https://www.city.kurashiki.okayama.jp/culture/tourism/1001881/1011764/1008056/1008060.html"
    }
   ]
  },
  {
   "id": "exam-w3e-034",
   "name": "千光寺公園",
   "region": "中国",
   "prefectures": [
    "広島県"
   ],
   "categories": [
    "OTHER"
   ],
   "recognition_hook": "広島県尾道市の公園",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "尾道市（公式・観光情報 千光寺公園）",
     "url": "https://www.city.onomichi.hiroshima.jp/site/onomichikanko/1316.html"
    }
   ]
  },
  {
   "id": "exam-098",
   "name": "因島",
   "region": "中国",
   "prefectures": [
    "広島県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した海岸・岬・島（広島県）",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%9B%A0%E5%B3%B6"
    },
    {
     "authority": "国土地理院／尾道市（公式）",
     "url": "https://www.city.onomichi.hiroshima.jp/site/onomichikanko/1267.html"
    }
   ]
  },
  {
   "id": "exam-w2-028",
   "name": "帝釈峡",
   "region": "中国",
   "prefectures": [
    "広島県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "帝釈川の谷にある渓谷。国の名勝「帝釈川の谷（帝釈峡）」",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "庄原市（公式・記念物）",
     "url": "https://www.city.shobara.hiroshima.jp/main/education/shogaigakushu/cat02/02/post_190.html"
    },
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%B8%9D%E9%87%88%E5%B3%A1"
    }
   ]
  },
  {
   "id": "exam-w3-027",
   "name": "湯来温泉",
   "region": "中国",
   "prefectures": [
    "広島県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "広島県の温泉。国民保養温泉地「湯来・湯の山温泉」に含まれる",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国民保養温泉地）",
     "url": "https://www.env.go.jp/nature/onsen/area/"
    }
   ]
  },
  {
   "id": "exam-097",
   "name": "生口島",
   "region": "中国",
   "prefectures": [
    "広島県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した海岸・岬・島（広島県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%94%9F%E5%8F%A3%E5%B3%B6"
    },
    {
     "authority": "国土地理院／尾道市（公式）",
     "url": "https://www.city.onomichi.hiroshima.jp/site/onomichikanko/1267.html"
    }
   ],
   "reading": "いくちじま"
  },
  {
   "id": "exam-w2-007",
   "name": "縮景園",
   "region": "中国",
   "prefectures": [
    "広島県"
   ],
   "categories": [
    "GARDEN"
   ],
   "recognition_hook": "浅野長晟が築いた大名庭園。国の名勝",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "広島県（公式・縮景園）",
     "url": "https://www.pref.hiroshima.lg.jp/lab/info/shukkeien/"
    },
    {
     "authority": "文化庁（国指定文化財等データベース）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/2330"
    }
   ]
  },
  {
   "id": "exam-w3b-005",
   "name": "秋芳洞",
   "region": "中国",
   "prefectures": [
    "山口県"
   ],
   "categories": [
    "OTHER"
   ],
   "recognition_hook": "秋吉台国定公園にある鍾乳洞窟",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国定公園一覧）",
     "url": "https://www.env.go.jp/nature/nationalparks/about/quasi-national-park/"
    }
   ]
  },
  {
   "id": "exam-001",
   "name": "赤間神宮",
   "region": "中国",
   "prefectures": [
    "山口県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した寺社（山口県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E8%B5%A4%E9%96%93%E7%A5%9E%E5%AE%AE"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-010",
   "name": "錦帯橋",
   "region": "中国",
   "prefectures": [
    "山口県"
   ],
   "categories": [
    "LEISURE_STRUCTURE_BRIDGE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した橋・構造物（山口県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%8C%A6%E5%B8%AF%E6%A9%8B"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ],
   "reading": "きんたいきょう"
  },
  {
   "id": "exam-004",
   "name": "関門橋",
   "region": "中国",
   "prefectures": [
    "山口県",
    "福岡県"
   ],
   "categories": [
    "LEISURE_STRUCTURE_BRIDGE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した橋・構造物（山口県・福岡県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%96%A2%E9%96%80%E6%A9%8B"
    },
    {
     "authority": "下関市（公式）／北九州市（公式）",
     "url": "https://www.city.shimonoseki.lg.jp/soshiki/73/130442.html"
    }
   ]
  },
  {
   "id": "exam-016",
   "name": "大塚国際美術館",
   "region": "四国",
   "prefectures": [
    "徳島県"
   ],
   "categories": [
    "MUSEUM_CULTURAL_FACILITY"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した文化施設（徳島県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "FACILITY",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%A4%A7%E5%A1%9A%E5%9B%BD%E9%9A%9B%E7%BE%8E%E8%A1%93%E9%A4%A8"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-w3-015",
   "name": "大谷焼",
   "region": "四国",
   "prefectures": [
    "徳島県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "徳島県の経済産業大臣指定 伝統的工芸品",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "一般財団法人 伝統的工芸品産業振興協会（経済産業大臣指定 伝統的工芸品 都道府県別一覧）",
     "url": "https://kyokai.kougeihin.jp/wp/wp-content/uploads/2025/10/shitei-area_20251027.pdf"
    }
   ]
  },
  {
   "id": "exam-w2-024",
   "name": "大鳴門橋",
   "region": "四国",
   "prefectures": [
    "徳島県",
    "兵庫県"
   ],
   "categories": [
    "LEISURE_STRUCTURE_BRIDGE"
   ],
   "recognition_hook": "鳴門海峡に架かり、鳴門市と淡路島を結ぶ橋。橋の真下で渦潮が見られる",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "徳島県（公式・鳴門の渦潮）",
     "url": "https://www.pref.tokushima.lg.jp/japanese/tourism/spot/uzushio"
    },
    {
     "authority": "南あわじ市（公式・鳴門海峡の渦潮のしくみ）",
     "url": "https://www.city.minamiawaji.hyogo.jp/soshiki/uzushio/shikumi.html"
    }
   ]
  },
  {
   "id": "food-006",
   "name": "祖谷そば",
   "region": "四国",
   "prefectures": [
    "徳島県"
   ],
   "categories": [
    "LOCAL_FOOD_SPECIALTY"
   ],
   "recognition_hook": "徳島県の郷土料理（農林水産省「うちの郷土料理」掲載）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "FOOD",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "農林水産省（うちの郷土料理）",
     "url": "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/tokushima.html"
    }
   ]
  },
  {
   "id": "exam-w2-008",
   "name": "丸亀城",
   "region": "四国",
   "prefectures": [
    "香川県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "石垣で知られる平山城。天守は国の重要文化財",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "丸亀市（公式）",
     "url": "https://www.city.marugame.lg.jp/site/castle/"
    },
    {
     "authority": "文化庁（国指定文化財等データベース）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/3286"
    }
   ]
  },
  {
   "id": "exam-017",
   "name": "地中美術館",
   "region": "四国",
   "prefectures": [
    "香川県"
   ],
   "categories": [
    "MUSEUM_CULTURAL_FACILITY"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した文化施設（香川県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "FACILITY",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%9C%B0%E4%B8%AD%E7%BE%8E%E8%A1%93%E9%A4%A8"
    },
    {
     "authority": "国土地理院／ベネッセアートサイト直島（施設公式）",
     "url": "https://benesse-artsite.jp/art/chichu.html"
    }
   ]
  },
  {
   "id": "exam-w3c-012",
   "name": "寒霞渓",
   "region": "四国",
   "prefectures": [
    "香川県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "小豆島の渓谷。国の名勝「神懸山（寒霞渓）」",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 神懸山（寒霞渓））",
     "url": "https://online.bunka.go.jp/heritages/detail/139394"
    }
   ]
  },
  {
   "id": "exam-w3d-013",
   "name": "小豆島",
   "region": "四国",
   "prefectures": [
    "香川県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "香川県の島。島内の神懸山（寒霞渓）は国の名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 神懸山（寒霞渓））",
     "url": "https://online.bunka.go.jp/heritages/detail/139394"
    }
   ]
  },
  {
   "id": "exam-w3c-018",
   "name": "琴弾公園",
   "region": "四国",
   "prefectures": [
    "香川県"
   ],
   "categories": [
    "GARDEN"
   ],
   "recognition_hook": "香川県の公園。国の名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 琴弾公園）",
     "url": "https://online.bunka.go.jp/heritages/detail/206433"
    }
   ]
  },
  {
   "id": "exam-w3e-005",
   "name": "大三島",
   "region": "四国",
   "prefectures": [
    "愛媛県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "愛媛県今治市の島。国の名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 大三島）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/2547"
    }
   ]
  },
  {
   "id": "exam-w3c-006",
   "name": "大洲城",
   "region": "四国",
   "prefectures": [
    "愛媛県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "愛媛県の城。三の丸南隅櫓など四棟の櫓が国の重要文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 大洲城三の丸南隅櫓）",
     "url": "https://online.bunka.go.jp/heritages/detail/187526"
    }
   ]
  },
  {
   "id": "exam-008",
   "name": "天赦園",
   "region": "四国",
   "prefectures": [
    "愛媛県"
   ],
   "categories": [
    "GARDEN"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した庭園・公園（愛媛県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%A4%A9%E8%B5%A6%E5%9C%92"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ],
   "reading": "てんしゃえん"
  },
  {
   "id": "exam-w3-018",
   "name": "砥部焼",
   "region": "四国",
   "prefectures": [
    "愛媛県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "愛媛県の経済産業大臣指定 伝統的工芸品",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "一般財団法人 伝統的工芸品産業振興協会（経済産業大臣指定 伝統的工芸品 都道府県別一覧）",
     "url": "https://kyokai.kougeihin.jp/wp/wp-content/uploads/2025/10/shitei-area_20251027.pdf"
    }
   ]
  },
  {
   "id": "exam-w3e-060",
   "name": "鈍川温泉",
   "region": "四国",
   "prefectures": [
    "愛媛県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "愛媛県今治市の温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "今治市（公式・観光課）",
     "url": "https://www.city.imabari.ehime.jp/kankou/"
    }
   ]
  },
  {
   "id": "exam-w3c-015",
   "name": "面河渓",
   "region": "四国",
   "prefectures": [
    "愛媛県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "愛媛県の渓谷。国の名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 面河渓）",
     "url": "https://online.bunka.go.jp/heritages/detail/139424"
    }
   ]
  },
  {
   "id": "exam-w3e-009",
   "name": "室戸岬",
   "region": "四国",
   "prefectures": [
    "高知県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "高知県室戸市の岬。国の名勝",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 室戸岬）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/401/2576"
    }
   ]
  },
  {
   "id": "exam-110",
   "name": "桂浜",
   "region": "四国",
   "prefectures": [
    "高知県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した海岸・岬・島（高知県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%A1%82%E6%B5%9C"
    },
    {
     "authority": "国土地理院／高知市（公式）",
     "url": "https://www.city.kochi.kochi.jp/site/kankosite/katsurahama.html"
    }
   ]
  },
  {
   "id": "food-002",
   "name": "皿鉢料理",
   "region": "四国",
   "prefectures": [
    "高知県"
   ],
   "categories": [
    "LOCAL_FOOD_SPECIALTY"
   ],
   "recognition_hook": "高知県の郷土料理（農林水産省「うちの郷土料理」掲載）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "FOOD",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "農林水産省（うちの郷土料理）",
     "url": "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/kochi.html"
    }
   ]
  },
  {
   "id": "des-006",
   "name": "「神宿る島」宗像・沖ノ島と関連遺産群",
   "region": "九州・沖縄",
   "prefectures": [
    "福岡県"
   ],
   "categories": [
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産（平成29年記載）",
   "priority": "A",
   "exam_signal": "NO_DIRECT_SIGNAL",
   "entity_kind": "DESIGNATION",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化庁（日本の世界遺産一覧）",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/"
    }
   ],
   "reading": "「かみやどるしま」むなかた・おきのしまとかんれんいさんぐん"
  },
  {
   "id": "exam-w3e-053",
   "name": "原鶴温泉",
   "region": "九州・沖縄",
   "prefectures": [
    "福岡県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "福岡県朝倉市の温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "朝倉市（公式・観光情報 原鶴温泉）",
     "url": "https://www.city.asakura.lg.jp/site/kanko/1740.html"
    }
   ]
  },
  {
   "id": "exam-075",
   "name": "太宰府天満宮",
   "region": "九州・沖縄",
   "prefectures": [
    "福岡県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した寺社（福岡県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%A4%AA%E5%AE%B0%E5%BA%9C%E5%A4%A9%E6%BA%80%E5%AE%AE"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-w3-017",
   "name": "伊万里・有田焼",
   "region": "九州・沖縄",
   "prefectures": [
    "佐賀県"
   ],
   "categories": [
    "TRADITIONAL_CRAFT"
   ],
   "recognition_hook": "佐賀県の経済産業大臣指定 伝統的工芸品",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "CRAFT",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "一般財団法人 伝統的工芸品産業振興協会（経済産業大臣指定 伝統的工芸品 都道府県別一覧）",
     "url": "https://kyokai.kougeihin.jp/wp/wp-content/uploads/2025/10/shitei-area_20251027.pdf"
    }
   ]
  },
  {
   "id": "exam-w3c-010",
   "name": "吉野ヶ里遺跡",
   "region": "九州・沖縄",
   "prefectures": [
    "佐賀県"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "弥生時代の環濠集落跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 吉野ヶ里遺跡出土銅鐸）",
     "url": "https://online.bunka.go.jp/heritages/detail/226382"
    }
   ]
  },
  {
   "id": "exam-w3e-054",
   "name": "嬉野温泉",
   "region": "九州・沖縄",
   "prefectures": [
    "佐賀県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "佐賀県嬉野市の温泉地。公衆浴場「シーボルトの湯」がある",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "嬉野市（公式・観光情報 うれしの特産品あれこれ）",
     "url": "https://www.city.ureshino.lg.jp/kanko/tokusanhin.html"
    }
   ]
  },
  {
   "id": "exam-093",
   "name": "武雄温泉",
   "region": "九州・沖縄",
   "prefectures": [
    "佐賀県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した温泉地（佐賀県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%AD%A6%E9%9B%84%E6%B8%A9%E6%B3%89"
    },
    {
     "authority": "国土地理院／武雄市（公式 文化財）",
     "url": "https://www.city.takeo.lg.jp/kyouiku/bunkazai/pages/bunkazai/bunkazai-110.htm"
    }
   ]
  },
  {
   "id": "exam-078",
   "name": "原城跡",
   "region": "九州・沖縄",
   "prefectures": [
    "長崎県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した城（長崎県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%8E%9F%E5%9F%8E%E8%B7%A1"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ],
   "reading": "はらじょうあと"
  },
  {
   "id": "exam-w3e-028",
   "name": "松浦史料博物館",
   "region": "九州・沖縄",
   "prefectures": [
    "長崎県"
   ],
   "categories": [
    "MUSEUM_CULTURAL_FACILITY"
   ],
   "recognition_hook": "長崎県の博物館。旧松浦詮邸の建物で、茶室閑雲亭が国の登録有形文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "FACILITY",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 松浦史料博物館（旧松浦詮邸）閑雲亭）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/101/00005511"
    }
   ]
  },
  {
   "id": "exam-w3e-015",
   "name": "西海橋",
   "region": "九州・沖縄",
   "prefectures": [
    "長崎県"
   ],
   "categories": [
    "LEISURE_STRUCTURE_BRIDGE"
   ],
   "recognition_hook": "長崎県の橋。国の重要文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国指定文化財等データベース（文化庁 西海橋）",
     "url": "https://kunishitei.bunka.go.jp/heritage/detail/102/00005318"
    }
   ]
  },
  {
   "id": "exam-w3-011",
   "name": "雲仙天草国立公園",
   "region": "九州・沖縄",
   "prefectures": [
    "長崎県",
    "熊本県",
    "鹿児島県"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "長崎・熊本・鹿児島にまたがる国立公園（昭和9年指定）",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省 九州地方環境事務所（管内の国立公園）",
     "url": "https://kyushu.env.go.jp/park.html"
    }
   ]
  },
  {
   "id": "exam-w2-016",
   "name": "人吉温泉",
   "region": "九州・沖縄",
   "prefectures": [
    "熊本県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "「美人の湯」とも呼ばれる温泉。市内に公衆浴場が数多くある",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "人吉市（公式・市内の温泉情報）",
     "url": "https://www.city.hitoyoshi.lg.jp/kanko/kankojyoho/37654"
    },
    {
     "authority": "人吉市（公式・人吉温泉観光協会）",
     "url": "https://www.city.hitoyoshi.lg.jp/kanko/hitoyoshi_onsen/21645"
    }
   ]
  },
  {
   "id": "exam-w3e-052",
   "name": "内牧温泉",
   "region": "九州・沖縄",
   "prefectures": [
    "熊本県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "熊本県阿蘇市の温泉地。温泉街の中央を黒川が流れる",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "阿蘇市（公式・観光 内牧温泉 黒川河川敷お散歩マップ）",
     "url": "https://www.city.aso.kumamoto.jp/tourism/brochure/uchinomaki_spa_walking_map/"
    }
   ]
  },
  {
   "id": "exam-w3e-038",
   "name": "菊池渓谷",
   "region": "九州・沖縄",
   "prefectures": [
    "熊本県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "熊本県菊池市の渓谷",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "菊池市（公式・観光スポット）",
     "url": "https://www.city.kikuchi.lg.jp/"
    }
   ]
  },
  {
   "id": "exam-011",
   "name": "通潤橋",
   "region": "九州・沖縄",
   "prefectures": [
    "熊本県"
   ],
   "categories": [
    "LEISURE_STRUCTURE_BRIDGE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した橋・構造物（熊本県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%80%9A%E6%BD%A4%E6%A9%8B"
    },
    {
     "authority": "国土地理院／山都町（公式）",
     "url": "https://www.town.kumamoto-yamato.lg.jp/kiji0036125/index.html"
    }
   ],
   "reading": "つうじゅんきょう"
  },
  {
   "id": "exam-w3e-037",
   "name": "黒川温泉",
   "region": "九州・沖縄",
   "prefectures": [
    "熊本県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "熊本県南小国町の温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "南小国町（公式・観光 黒川温泉）",
     "url": "https://www.town.minamioguni.lg.jp/kankou/kurokawa/kurokawa-onsen.html"
    }
   ]
  },
  {
   "id": "exam-w3d-004",
   "name": "九重“夢”大吊橋",
   "region": "九州・沖縄",
   "prefectures": [
    "大分県"
   ],
   "categories": [
    "LEISURE_STRUCTURE_BRIDGE"
   ],
   "recognition_hook": "長さ390m・高さ173m の歩道専用の吊橋",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "九重\"夢\"大吊橋（公式）",
     "url": "https://www.yumeooturihashi.com/"
    }
   ]
  },
  {
   "id": "exam-020",
   "name": "宇佐神宮",
   "region": "九州・沖縄",
   "prefectures": [
    "大分県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した寺社（大分県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%AE%87%E4%BD%90%E7%A5%9E%E5%AE%AE"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ]
  },
  {
   "id": "exam-w3e-036",
   "name": "岡城跡",
   "region": "九州・沖縄",
   "prefectures": [
    "大分県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "大分県竹田市の城跡。国の史跡",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "竹田市（公式・国指定史跡「岡城跡」）",
     "url": "https://www.city.taketa.oita.jp/bunka_rekishi_kanko/bunkazai/okajyo/index.html"
    }
   ]
  },
  {
   "id": "exam-w3d-001",
   "name": "日田祇園の曳山行事",
   "region": "九州・沖縄",
   "prefectures": [
    "大分県"
   ],
   "categories": [
    "FESTIVAL_CULTURE"
   ],
   "recognition_hook": "大分県日田市の祭礼行事。国の重要無形民俗文化財で、ユネスコ無形文化遺産「山・鉾・屋台行事」の一つ",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "FESTIVAL",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "日田市（公式・ユネスコ無形文化遺産「日田祇園の曳山行事」）",
     "url": "https://www.city.hita.oita.jp/soshiki/29/1344.html"
    }
   ]
  },
  {
   "id": "exam-w3b-007",
   "name": "由布院温泉",
   "region": "九州・沖縄",
   "prefectures": [
    "大分県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "大分県の温泉。国民保養温泉地「湯布院温泉郷」に含まれる",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国民保養温泉地）",
     "url": "https://www.env.go.jp/nature/onsen/area/"
    }
   ]
  },
  {
   "id": "exam-w3-028",
   "name": "鉄輪温泉",
   "region": "九州・沖縄",
   "prefectures": [
    "大分県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "大分県の温泉。国民保養温泉地「鉄輪・明礬・柴石温泉」に含まれる",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国民保養温泉地）",
     "url": "https://www.env.go.jp/nature/onsen/area/"
    }
   ]
  },
  {
   "id": "exam-w3b-006",
   "name": "日南海岸",
   "region": "九州・沖縄",
   "prefectures": [
    "宮崎県",
    "鹿児島県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "宮崎・鹿児島にまたがる日南海岸国定公園の海岸。亜熱帯植物が豊か",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国定公園一覧）",
     "url": "https://www.env.go.jp/nature/nationalparks/about/quasi-national-park/"
    }
   ]
  },
  {
   "id": "exam-w2-038",
   "name": "西都原古墳群",
   "region": "九州・沖縄",
   "prefectures": [
    "宮崎県"
   ],
   "categories": [
    "HISTORIC_DISTRICT"
   ],
   "recognition_hook": "西都原台地に300基以上が分布する古墳群。男狭穂塚・女狭穂塚がある",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "西都市（公式）",
     "url": "https://www.city.saito.lg.jp/post_270.html"
    },
    {
     "authority": "文化庁（日本遺産ポータルサイト）",
     "url": "https://japan-heritage.bunka.go.jp/ja/culturalproperties/result/4055/"
    }
   ]
  },
  {
   "id": "des-029",
   "name": "霧島錦江湾国立公園",
   "region": "九州・沖縄",
   "prefectures": [
    "宮崎県",
    "鹿児島県"
   ],
   "categories": [
    "NATIONAL_PARK"
   ],
   "recognition_hook": "国立公園（1934指定）",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国立公園一覧）",
     "url": "https://www.env.go.jp/park/parks/index.html"
    }
   ],
   "reading": "きりしまきんこうわんこくりつこうえん"
  },
  {
   "id": "exam-w3c-016",
   "name": "高千穂峡",
   "region": "九州・沖縄",
   "prefectures": [
    "宮崎県"
   ],
   "categories": [
    "VALLEY_WATERFALL"
   ],
   "recognition_hook": "宮崎県の峡谷。国の名勝・天然記念物「五箇瀬川峡谷（高千穂峡谷）」",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 五箇瀬川峡谷（高千穂峡谷））",
     "url": "https://online.bunka.go.jp/heritages/detail/203106"
    }
   ]
  },
  {
   "id": "exam-w3d-009",
   "name": "与論島",
   "region": "九州・沖縄",
   "prefectures": [
    "鹿児島県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "鹿児島県の島。生産・生活用具が国の重要有形民俗文化財",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "AREA_RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 与論島の生産・生活用具）",
     "url": "https://online.bunka.go.jp/heritages/detail/288389"
    }
   ]
  },
  {
   "id": "exam-x007",
   "name": "仙巌園",
   "region": "九州・沖縄",
   "prefectures": [
    "鹿児島県"
   ],
   "categories": [
    "GARDEN"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に登場した庭園・公園（鹿児島県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E4%BB%99%E5%B7%8C%E5%9C%92"
    },
    {
     "authority": "鹿児島県（公式）",
     "url": "https://www.pref.kagoshima.jp/suisuinavi/22861.html"
    }
   ],
   "reading": "せんがんえん"
  },
  {
   "id": "exam-w2-026",
   "name": "宮之浦岳",
   "region": "九州・沖縄",
   "prefectures": [
    "鹿児島県"
   ],
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "recognition_hook": "屋久島にある九州最高峰（標高1,936m）。日本百名山の最南端",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "屋久島町（公式）",
     "url": "https://www.town.yakushima.kagoshima.jp/soshiki/kanko_machizukuri/kankosushin/kankospot/yama/856.html"
    },
    {
     "authority": "環境省 九州地方環境事務所",
     "url": "https://kyushu.env.go.jp/blog/2013/04/1026.html"
    }
   ]
  },
  {
   "id": "exam-w2-030",
   "name": "指宿温泉",
   "region": "九州・沖縄",
   "prefectures": [
    "鹿児島県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "薩摩半島南端の温泉地。天然の砂むし温泉で知られる",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "指宿市（公式）",
     "url": "https://www.city.ibusuki.lg.jp/ijyu/about/"
    },
    {
     "authority": "鹿児島県（公式）",
     "url": "https://www.pref.kagoshima.jp/ad04/kurashi-kankyo/kankyo/sizenkouen/kennai/kinkouwan-ibusuki.html"
    }
   ]
  },
  {
   "id": "exam-w3-029",
   "name": "霧島温泉",
   "region": "九州・沖縄",
   "prefectures": [
    "鹿児島県"
   ],
   "categories": [
    "HOT_SPRING"
   ],
   "recognition_hook": "鹿児島県の温泉地。環境大臣が指定する国民保養温泉地",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "環境省（国民保養温泉地）",
     "url": "https://www.env.go.jp/nature/onsen/area/"
    }
   ]
  },
  {
   "id": "exam-w2-042",
   "name": "霧島神宮",
   "region": "九州・沖縄",
   "prefectures": [
    "鹿児島県"
   ],
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "recognition_hook": "霧島市にある神社。本殿・幣殿・拝殿は国宝",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 霧島神宮 本殿・幣殿・拝殿）",
     "url": "https://online.bunka.go.jp/heritages/detail/148831"
    },
    {
     "authority": "鹿児島県（公式）",
     "url": "https://www.pref.kagoshima.jp/suisuinavi/5809.html"
    }
   ]
  },
  {
   "id": "exam-038",
   "name": "中城城跡",
   "region": "九州・沖縄",
   "prefectures": [
    "沖縄県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に選択肢として登場した城（沖縄県）",
   "priority": "A",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E4%B8%AD%E5%9F%8E%E5%9F%8E%E8%B7%A1"
    },
    {
     "authority": "国土交通省（国土数値情報 観光資源データ P12-14）",
     "url": "https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-v2_2.html"
    }
   ],
   "reading": "なかぐすくじょうあと"
  },
  {
   "id": "exam-x003",
   "name": "今帰仁城跡",
   "region": "九州・沖縄",
   "prefectures": [
    "沖縄県"
   ],
   "categories": [
    "CASTLE"
   ],
   "recognition_hook": "公式過去問（R3〜R7 国内旅行実務）に登場した城（沖縄県）",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E4%BB%8A%E5%B8%B0%E4%BB%81%E5%9F%8E%E8%B7%A1"
    },
    {
     "authority": "今帰仁村（公式）",
     "url": "https://www.nakijin.jp/pagtop/kakuka/somuka/3/3/5/617.html"
    }
   ],
   "reading": "なきじんじょうあと"
  },
  {
   "id": "exam-w2-027",
   "name": "川平湾",
   "region": "九州・沖縄",
   "prefectures": [
    "沖縄県"
   ],
   "categories": [
    "COAST_CAPE_ISLAND"
   ],
   "recognition_hook": "石垣島北西部の入り江。国指定名勝「川平湾及び於茂登岳」",
   "priority": "B",
   "exam_signal": "EXAM_SIGNAL_HIGH",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "石垣市（公式・市内の指定文化財）",
     "url": "https://www.city.ishigaki.okinawa.jp/soshiki/bunkazaisisihennsyuka/bunakazaikinanbutu1/1_1/573.html"
    },
    {
     "authority": "文化遺産オンライン（文化庁）",
     "url": "https://online.bunka.go.jp/heritages/detail/140097"
    }
   ]
  },
  {
   "id": "exam-w3-034",
   "name": "座喜味城跡",
   "region": "九州・沖縄",
   "prefectures": [
    "沖縄県"
   ],
   "categories": [
    "CASTLE",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産「琉球王国のグスク及び関連遺産群」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 琉球王国のグスク及び関連遺産群）",
     "url": "https://online.bunka.go.jp/special_content/hlink9"
    }
   ]
  },
  {
   "id": "exam-w3-035",
   "name": "識名園",
   "region": "九州・沖縄",
   "prefectures": [
    "沖縄県"
   ],
   "categories": [
    "GARDEN",
    "WORLD_HERITAGE"
   ],
   "recognition_hook": "世界文化遺産「琉球王国のグスク及び関連遺産群」の構成資産",
   "priority": "C",
   "exam_signal": "EXAM_SIGNAL_LOW",
   "entity_kind": "RESOURCE",
   "coverage_level": "LIGHTWEIGHT",
   "sources": [
    {
     "authority": "文化遺産オンライン（文化庁 琉球王国のグスク及び関連遺産群）",
     "url": "https://online.bunka.go.jp/special_content/hlink9"
    }
   ]
  }
 ],
 "waves": [
  {
   "wave": 1,
   "version": "v3",
   "task": "TASK-013G",
   "size": 70,
   "source": "docs/geography/BROAD_SHALLOW_WAVE1_V3.json"
  },
  {
   "wave": 2,
   "version": "wave2-v1",
   "task": "TASK-018B",
   "size": 43,
   "source": "docs/geography/BROAD_SHALLOW_WAVE2.json"
  },
  {
   "wave": 3,
   "version": "wave3-v1",
   "task": "TASK-018C",
   "size": 38,
   "source": "docs/geography/BROAD_SHALLOW_WAVE3.json"
  },
  {
   "wave": 4,
   "version": "wave3b-v1",
   "task": "TASK-018D",
   "size": 10,
   "source": "docs/geography/BROAD_SHALLOW_WAVE3B.json"
  },
  {
   "wave": 5,
   "version": "wave3c-v1",
   "task": "TASK-018D",
   "size": 26,
   "source": "docs/geography/BROAD_SHALLOW_WAVE3C.json"
  },
  {
   "wave": 6,
   "version": "wave3d-v1",
   "task": "TASK-018D",
   "size": 13,
   "source": "docs/geography/BROAD_SHALLOW_WAVE3D.json"
  },
  {
   "wave": 7,
   "version": "wave3e-v1",
   "task": "TASK-018G",
   "size": 61,
   "source": "docs/geography/BROAD_SHALLOW_WAVE3E.json"
  }
 ],
 "coverage_note": "この 261 件は公式過去問 R3〜R7 に現れた観光資源の一部であって、試験範囲の全体ではない。TASK-018A の母集団監査では候補 461 件のうち未収録が多数残っている"
};
