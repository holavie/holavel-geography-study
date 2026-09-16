// Geography Study — Broad-Shallow LIGHTWEIGHT resources（生成物。手で編集しない）。
// 生成経路: tools/geography_broad_shallow_build.py
// 正本:
//   WAVE 1 = docs/geography/BROAD_SHALLOW_WAVE1_V3.json（TASK-013G で entity 同定・所在地を再認証した 70 件）
//   WAVE 2 = docs/geography/BROAD_SHALLOW_WAVE2.json（TASK-018B で追加した 43 件。TASK-018A の母集団監査で
//            NOT_COVERED かつ公式過去問 R3〜R7 に複数年登場したもの）
//   WAVE 3 = docs/geography/BROAD_SHALLOW_WAVE3.json（TASK-018C。残った未収録候補のうち、公式一次情報で
//            名称・所在地・分類を確認できたもの。作業台帳は docs/geography/WAVE3_LEDGER.json）
//   WAVE 3-B = docs/geography/BROAD_SHALLOW_WAVE3B.json（TASK-018D。同じ台帳の続き）
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
 "version": "v3+wave2-v1+wave3-v1+wave3b-v1",
 "generated_at": "2026-09-16",
 "task": "TASK-018D",
 "source": "docs/geography/BROAD_SHALLOW_WAVE1_V3.json + docs/geography/BROAD_SHALLOW_WAVE2.json + docs/geography/BROAD_SHALLOW_WAVE3.json + docs/geography/BROAD_SHALLOW_WAVE3B.json",
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
  }
 ],
 "coverage_note": "この 161 件は公式過去問 R3〜R7 に現れた観光資源の一部であって、試験範囲の全体ではない。TASK-018A の母集団監査では候補 461 件のうち未収録が多数残っている"
};
