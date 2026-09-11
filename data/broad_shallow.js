// Geography Study — Broad-Shallow WAVE 1 LIGHTWEIGHT resources (TASK-013H).
// 唯一の生成元: docs/geography/BROAD_SHALLOW_WAVE1_V3.json（TASK-013G で entity 同定・所在地を再認証した 70 件）。
// 旧 WAVE1 / WAVE1_V2 / V3 / V4 candidate pool は KNOWN DEFECTIVE / SUPERSEDED。runtime へは入れない。
//
// DEEP（data/resources.js の 30 件）とは役割が違う:
//   DEEP        = 詳細学習。要点・注意点・混同・過去問リンク・写真・実地図・Quiz A/B の採点対象
//   LIGHTWEIGHT = 高速暗記。資源名 → 都道府県・カテゴリ・一言特徴のみ。写真 0 / 地図 0 / Quiz 採点対象外
//
// 各件は公式一次情報（自治体・都道府県・文化庁・環境省・農林水産省・経済産業省・国土地理院・国土交通省）で
// 名称と所在地を確認済み。planning 側の監査フィールド（GSI raw / old_prefectures / second-source diagnostics 等）は
// runtime へ持ち込まず、出典（authority + url）だけを保持する。
window.GEO_BROAD_SHALLOW = {
 "version": "wave1-v3",
 "generated_at": "2026-09-10",
 "task": "TASK-013H",
 "source": "docs/geography/BROAD_SHALLOW_WAVE1_V3.json",
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
  "MUSEUM_CULTURAL_FACILITY": "美術館・博物館"
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
  "DESIGNATION": "指定名称"
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
  }
 ]
};
