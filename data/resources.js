// Geography Study — 国内観光地理 30資源 pilot (HOLAVEL_ORIGINAL metadata compiled from official sources; no official exam text).
// Contract: apps/geography-study/README.md. Checker: tools/geography_study_check.py. past_exam_links carry ids only.
window.GEO_RESOURCES = {
 "version": "0.3",
 "generated_at": "2026-09-09",
 "rights": "HOLAVEL_ORIGINAL",
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
  "WORLD_HERITAGE": "世界遺産",
  "NATIONAL_PARK": "国立公園",
  "TEMPLE_SHRINE": "寺社",
  "CASTLE": "城",
  "HOT_SPRING": "温泉",
  "MOUNTAIN_HIGHLAND": "山岳・高原",
  "LAKE_WETLAND": "湖沼・湿地",
  "VALLEY_WATERFALL": "渓谷・滝",
  "HISTORIC_DISTRICT": "歴史的町並み・遺跡",
  "GARDEN": "庭園",
  "FESTIVAL_CULTURE": "祭り・文化",
  "OTHER": "その他"
 },
 "resources": [
  {
   "resource_id": "shiretoko",
   "name": "知床",
   "reading": "しれとこ",
   "prefectures": [
    "北海道"
   ],
   "municipalities": [
    "斜里町",
    "羅臼町"
   ],
   "region": "北海道",
   "categories": [
    "WORLD_HERITAGE",
    "NATIONAL_PARK"
   ],
   "subcategories": [
    "世界自然遺産",
    "知床国立公園"
   ],
   "summary": "オホーツク海に突き出す知床半島。流氷から始まる豊かな生態系と火山・海岸断崖の景観で、2005年（平成17年）に世界自然遺産に登録。知床国立公園。",
   "key_facts": [
    "世界自然遺産（平成17年 登録）。日本の自然遺産は 屋久島・白神山地・知床・小笠原諸島・奄美大島…",
    "知床国立公園。流氷が育む海の生態系、ヒグマ・シャチなど大型哺乳類、猛禽類",
    "半島の北側（オホーツク海側）が斜里町ウトロ、南側（根室海峡側）が羅臼町"
   ],
   "confusion_points": [
    "自然遺産の 白神山地（青森・秋田）や 屋久島（鹿児島）と登録年・所在を混同しない",
    "同じ道東の 阿寒摩周・釧路湿原 と国立公園名を混同しない"
   ],
   "attention_points": [
    {
     "point": "世界自然遺産（2005年）",
     "note": "文化遺産ではない。日本の自然遺産 5 件の一つ"
    },
    {
     "point": "斜里町（ウトロ）／羅臼町",
     "note": "半島の北側と南側で町が違う"
    }
   ],
   "memory_hook": "「流氷・ヒグマ・知床半島」＝北海道の自然遺産。斜里は北、羅臼は南。",
   "quiz_hint": "オホーツク海に突き出す半島。流氷が育む生態系とヒグマ・シャチなどの野生生物で知られ、2005年に世界自然遺産に登録された国立公園。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "shiretoko_wh",
     "type": "WORLD_HERITAGE",
     "name": "知床",
     "relation": "IDENTICAL",
     "prefectures": [
      "北海道"
     ],
     "source_ids": [
      "shiretoko-s1"
     ]
    },
    {
     "id": "shiretoko_np",
     "type": "NATIONAL_PARK",
     "name": "知床国立公園",
     "relation": "IDENTICAL",
     "prefectures": [
      "北海道"
     ],
     "source_ids": [
      "shiretoko-s2"
     ]
    }
   ],
   "confusable_ids": [
    "shirakami",
    "yakushima",
    "akan"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r07",
     "question_id": "anta-r07-q66",
     "label": "R7 問66",
     "relation": "RELATED_CONTEXT"
    },
    {
     "set_id": "anta-r06",
     "question_id": "anta-r06-q66",
     "label": "R6 問66",
     "relation": "DIRECT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "shiretoko-s1"
    },
    {
     "authority": "環境省",
     "title": "知床国立公園",
     "url": "https://www.env.go.jp/nature/nationalparks/list/shiretoko/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "shiretoko-s2"
    },
    {
     "authority": "斜里町",
     "title": "斜里町公式サイト（世界自然遺産・知床のまち）",
     "url": "https://www.town.shari.hokkaido.jp/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "shiretoko-s3"
    }
   ]
  },
  {
   "resource_id": "akan",
   "name": "阿寒湖・摩周湖",
   "reading": "あかんこ・ましゅうこ",
   "prefectures": [
    "北海道"
   ],
   "municipalities": [],
   "region": "北海道",
   "categories": [
    "LAKE_WETLAND"
   ],
   "subcategories": [
    "カルデラ湖"
   ],
   "summary": "阿寒・屈斜路・摩周の3つのカルデラと湖からなる道東の国立公園。阿寒湖は雌阿寒岳・雄阿寒岳のふもと、摩周湖は世界有数の透明度で知られる。",
   "key_facts": [
    "阿寒摩周国立公園。3つのカルデラ（阿寒・屈斜路・摩周）と湖",
    "阿寒地域: 阿寒湖・オンネトー・雌阿寒岳・雄阿寒岳",
    "摩周地域: 摩周湖（透明度）・屈斜路湖"
   ],
   "confusion_points": [
    "支笏湖・洞爺湖（支笏洞爺国立公園、道央）と カルデラ湖 同士で混同しやすい",
    "釧路湿原国立公園は別の公園"
   ],
   "attention_points": [
    {
     "point": "3つのカルデラ",
     "note": "阿寒・屈斜路・摩周。摩周湖は透明度"
    },
    {
     "point": "道東",
     "note": "道央の支笏湖・洞爺湖と分ける"
    }
   ],
   "memory_hook": "「阿寒・屈斜路・摩周」は道東のカルデラ三兄弟。透明度なら摩周湖。",
   "quiz_hint": "阿寒・屈斜路・摩周の3つのカルデラと湖からなる道東の国立公園。世界有数の透明度の湖を含む。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "akan_np",
     "type": "NATIONAL_PARK",
     "name": "阿寒摩周国立公園",
     "relation": "WITHIN",
     "prefectures": [
      "北海道"
     ],
     "source_ids": [
      "akan-s1"
     ]
    }
   ],
   "confusable_ids": [
    "toya",
    "towada"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r06",
     "question_id": "anta-r06-q79",
     "label": "R6 問79",
     "relation": "RELATED_CONTEXT"
    },
    {
     "set_id": "anta-r04",
     "question_id": "anta-r04-q3_6_3",
     "label": "R4 ６．(3)",
     "relation": "RELATED_CONTEXT"
    },
    {
     "set_id": "anta-r03",
     "question_id": "anta-r03-q3_5_5",
     "label": "R3 ５．(5)",
     "relation": "DIRECT"
    },
    {
     "set_id": "anta-r03",
     "question_id": "anta-r03-q3_8_1",
     "label": "R3 ８．(1)",
     "relation": "RELATED_CONTEXT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "環境省",
     "title": "阿寒摩周国立公園",
     "url": "https://www.env.go.jp/nature/nationalparks/list/akan-mashu/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "akan-s1"
    },
    {
     "authority": "環境省",
     "title": "国立公園一覧",
     "url": "https://www.env.go.jp/nature/nationalparks/list/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "akan-s2"
    }
   ]
  },
  {
   "resource_id": "toya",
   "name": "洞爺湖",
   "reading": "とうやこ",
   "prefectures": [
    "北海道"
   ],
   "municipalities": [],
   "region": "北海道",
   "categories": [
    "LAKE_WETLAND",
    "HOT_SPRING"
   ],
   "subcategories": [
    "カルデラ湖",
    "火山"
   ],
   "summary": "北海道南西部の国立公園。支笏湖・洞爺湖の二大カルデラ湖と、有珠山・樽前山・羊蹄山などの火山が集まる「生きた火山の博物館」。登別・洞爺湖・定山渓などの温泉地。",
   "key_facts": [
    "支笏洞爺国立公園（道央・道南）。支笏湖と洞爺湖の二大カルデラ湖",
    "有珠山・樽前山・羊蹄山など火山地形。温泉地として 登別・洞爺湖・定山渓",
    "「生きた火山の博物館」（環境省の紹介）"
   ],
   "confusion_points": [
    "阿寒湖・摩周湖・屈斜路湖（阿寒摩周国立公園、道東）と混同しない",
    "十和田湖（青森・秋田）もカルデラ湖"
   ],
   "attention_points": [
    {
     "point": "支笏湖と洞爺湖はセット",
     "note": "支笏洞爺国立公園。道央・道南"
    },
    {
     "point": "有珠山・羊蹄山",
     "note": "火山と温泉（登別・洞爺湖・定山渓）"
    }
   ],
   "memory_hook": "「支笏・洞爺・有珠・登別」は道央の火山と温泉セット。",
   "quiz_hint": "北海道南西部の二大カルデラ湖と有珠山・樽前山・羊蹄山などの火山からなり、登別などの温泉地を含む国立公園の湖。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "toya_np",
     "type": "NATIONAL_PARK",
     "name": "支笏洞爺国立公園",
     "relation": "WITHIN",
     "prefectures": [
      "北海道"
     ],
     "source_ids": [
      "toya-s1"
     ]
    }
   ],
   "confusable_ids": [
    "akan",
    "towada"
   ],
   "exam_priority": "B",
   "past_exam_links": [
    {
     "set_id": "anta-r06",
     "question_id": "anta-r06-q79",
     "label": "R6 問79",
     "relation": "RELATED_CONTEXT"
    },
    {
     "set_id": "anta-r04",
     "question_id": "anta-r04-q3_6_3",
     "label": "R4 ６．(3)",
     "relation": "DIRECT"
    },
    {
     "set_id": "anta-r03",
     "question_id": "anta-r03-q3_5_5",
     "label": "R3 ５．(5)",
     "relation": "RELATED_CONTEXT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "環境省",
     "title": "支笏洞爺国立公園",
     "url": "https://www.env.go.jp/nature/nationalparks/list/shikotsu-toya/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "toya-s1"
    }
   ]
  },
  {
   "resource_id": "towada",
   "name": "十和田湖・発荷峠",
   "reading": "とわだこ・はっかとうげ",
   "prefectures": [
    "青森県",
    "秋田県"
   ],
   "municipalities": [
    "十和田市",
    "小坂町"
   ],
   "region": "東北",
   "categories": [
    "LAKE_WETLAND",
    "MOUNTAIN_HIGHLAND"
   ],
   "subcategories": [
    "カルデラ湖",
    "奥入瀬渓流",
    "展望地"
   ],
   "summary": "青森・秋田にまたがるカルデラ湖。奥入瀬渓流・八甲田山系とともに十和田八幡平国立公園を構成。南の玄関口の発荷峠（秋田県小坂町）からは御鼻部山と南八甲田を望む。",
   "key_facts": [
    "十和田八幡平国立公園（青森・岩手・秋田、昭和11年 指定）= 十和田八甲田地域（十和田湖・奥入瀬渓流・八甲田）＋ 八幡平地域（八幡平・岩手山・秋田駒ヶ岳）",
    "発荷峠展望台は樹海ラインと国道103号が交わる十和田湖南の玄関口。正面に御鼻部山、後方に南八甲田",
    "湖畔の休屋は青森県十和田市。神田川を境に秋田県側は小坂町の休平地区。発荷峠は秋田県鹿角郡小坂町"
   ],
   "confusion_points": [
    "峠の出題: 狩勝峠（北海道・十勝）、仁田峠（長崎・雲仙）、鍵掛峠（鳥取・大山）と区別",
    "支笏湖・洞爺湖・阿寒湖（北海道）とカルデラ湖同士で混同しない"
   ],
   "attention_points": [
    {
     "point": "発荷峠＝秋田県側",
     "note": "十和田湖の南。小坂町"
    },
    {
     "point": "十和田湖は青森・秋田にまたがる",
     "note": "休屋（青森県十和田市）が観光拠点。県境は神田川"
    },
    {
     "point": "奥入瀬渓流とセット",
     "note": "同じ国立公園"
    }
   ],
   "memory_hook": "「南から発荷峠、正面に御鼻部山」。狩勝＝十勝、仁田＝雲仙、鍵掛＝大山。",
   "quiz_hint": "青森・秋田にまたがるカルデラ湖で、南の玄関口の峠からは御鼻部山と南八甲田を望む。奥入瀬渓流と同じ国立公園。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "quiz_a_exclude_prefectures": [
    "岩手県"
   ],
   "designation_relations": [
    {
     "id": "towada_np",
     "type": "NATIONAL_PARK",
     "name": "十和田八幡平国立公園",
     "relation": "WITHIN",
     "prefectures": [
      "青森県",
      "岩手県",
      "秋田県"
     ],
     "source_ids": [
      "towada-s5"
     ],
     "note": "公園は岩手県（八幡平地域）にも広がるが、十和田湖・発荷峠は青森県・秋田県"
    }
   ],
   "confusable_ids": [
    "toya",
    "akan",
    "daisen",
    "unzen"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r07",
     "question_id": "anta-r07-q67",
     "label": "R7 問67",
     "relation": "DIRECT"
    },
    {
     "set_id": "anta-r07",
     "question_id": "anta-r07-q74",
     "label": "R7 問74",
     "relation": "DIRECT"
    },
    {
     "set_id": "anta-r05",
     "question_id": "anta-r05-q3_5_2",
     "label": "R5 ５．(2)",
     "relation": "DIRECT"
    },
    {
     "set_id": "anta-r03",
     "question_id": "anta-r03-q3_8_3",
     "label": "R3 ８．(3)",
     "relation": "RELATED_CONTEXT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "環境省",
     "title": "十和田八幡平国立公園",
     "url": "https://www.env.go.jp/nature/nationalparks/list/towada-hachimantai/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "towada-s1"
    },
    {
     "authority": "小坂町",
     "title": "大自然が織りなす美しき国立公園「十和田湖」",
     "url": "https://www.town.kosaka.akita.jp/machinososhiki/kankosangyoka/kankoshokohan/3/kosakakankouspot/1662.html",
     "level": 1,
     "date": "2026-09-09 取得",
     "id": "towada-s2"
    },
    {
     "authority": "かづの観光物産公社（Kazuno DMO）",
     "title": "発荷峠展望台（鹿角公式観光サイト）",
     "url": "https://explorekazuno.jp/tourizm/towadako-nanataki/hakkatouge/",
     "level": 2,
     "date": "2026-09-09 取得",
     "id": "towada-s3"
    },
    {
     "authority": "十和田湖国立公園協会",
     "title": "十和田湖・奥入瀬渓流の魅力",
     "url": "https://towadako.or.jp/",
     "level": 2,
     "date": "2026-09-08 取得",
     "id": "towada-s4"
    },
    {
     "id": "towada-s5",
     "authority": "環境省",
     "title": "十和田八幡平国立公園 概要・計画書（青森県・岩手県・秋田県）",
     "url": "https://www.env.go.jp/park/towada/intro/",
     "level": 1,
     "date": "2026-09-09 取得"
    }
   ]
  },
  {
   "resource_id": "hiraizumi",
   "name": "平泉（中尊寺・毛越寺）",
   "reading": "ひらいずみ",
   "prefectures": [
    "岩手県"
   ],
   "municipalities": [
    "平泉町"
   ],
   "region": "東北",
   "categories": [
    "WORLD_HERITAGE",
    "TEMPLE_SHRINE",
    "HISTORIC_DISTRICT"
   ],
   "subcategories": [
    "世界文化遺産",
    "奥州藤原氏"
   ],
   "summary": "奥州藤原氏の拠点。「平泉‐仏国土（浄土）を表す建築・庭園及び考古学的遺跡群‐」として2011年（平成23年）に世界文化遺産に登録。構成資産は中尊寺・毛越寺・観自在王院跡・無量光院跡・金鶏山。",
   "key_facts": [
    "世界文化遺産（平成23年 登録）。構成資産 5: 中尊寺、毛越寺、観自在王院跡、無量光院跡、金鶏山",
    "奥州藤原氏（清衡・基衡・秀衡）の時代の浄土思想を表す建築・庭園",
    "岩手県西磐井郡平泉町"
   ],
   "confusion_points": [
    "同じ2011年登録の 小笠原諸島（自然遺産）と混同しない",
    "松島（宮城）・山寺（山形）など東北の名所と所在県を混同しない"
   ],
   "attention_points": [
    {
     "point": "岩手県平泉町",
     "note": "宮城県ではない"
    },
    {
     "point": "構成資産は5つ",
     "note": "中尊寺・毛越寺・観自在王院跡・無量光院跡・金鶏山"
    }
   ],
   "memory_hook": "「浄土の平泉、岩手の中尊寺」。2011年（平成23年）は小笠原と同じ年。",
   "quiz_hint": "奥州藤原氏ゆかりの町。浄土を表す建築・庭園群として世界文化遺産に登録され、中尊寺・毛越寺などが構成資産。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "hiraizumi_wh",
     "type": "WORLD_HERITAGE",
     "name": "平泉‐仏国土（浄土）を表す建築・庭園及び考古学的遺跡群‐",
     "relation": "IDENTICAL",
     "prefectures": [
      "岩手県"
     ],
     "source_ids": [
      "hiraizumi-s1"
     ]
    }
   ],
   "confusable_ids": [
    "nikko",
    "shirakami"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r03",
     "question_id": "anta-r03-q3_5_3",
     "label": "R3 ５．(3)",
     "relation": "RELATED_CONTEXT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "hiraizumi-s1"
    },
    {
     "authority": "平泉町",
     "title": "平泉の文化遺産（構成資産）",
     "url": "https://www.town.hiraizumi.iwate.jp/heritage/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "hiraizumi-s2"
    }
   ]
  },
  {
   "resource_id": "izunuma",
   "name": "伊豆沼・内沼",
   "reading": "いずぬま・うちぬま",
   "prefectures": [
    "宮城県"
   ],
   "municipalities": [
    "栗原市",
    "登米市"
   ],
   "region": "東北",
   "categories": [
    "LAKE_WETLAND",
    "RAMSAR_SITE"
   ],
   "subcategories": [
    "ラムサール条約湿地",
    "ガン類越冬地"
   ],
   "summary": "宮城県北部の浅い淡水湖。1985年（昭和60年）9月にラムサール条約湿地に登録。マガン・オオハクチョウなど水鳥の越冬地で、夏はハスの花が水面を覆う。",
   "key_facts": [
    "ラムサール条約湿地（1985年9月13日 登録、面積559ha）。宮城県栗原市・登米市",
    "マガンやオオハクチョウなどの越冬地。水生植物（ハス・ヒシなど）が繁茂する浅い湖",
    "夏には湖面をハスの花が覆い、ハス祭りが行われる"
   ],
   "confusion_points": [
    "兵庫県豊岡市のコウノトリ（円山川下流域・周辺水田）や「コウノトリ育む農法」は別の湿地",
    "同じ宮城県北部の 蕪栗沼・化女沼 もラムサール湿地"
   ],
   "attention_points": [
    {
     "point": "宮城県（栗原市・登米市）",
     "note": "ガンカモ類の越冬地・ハス"
    },
    {
     "point": "コウノトリは豊岡（兵庫）",
     "note": "伊豆沼の説明に混ぜない"
    }
   ],
   "memory_hook": "「伊豆沼＝宮城のガンとハス」。コウノトリは兵庫の豊岡。",
   "quiz_hint": "宮城県北部にある浅い淡水湖。ラムサール条約湿地で、マガンなどガンカモ類の越冬地。夏はハスの花で知られる。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "izunuma_ramsar",
     "type": "RAMSAR",
     "name": "伊豆沼・内沼",
     "relation": "IDENTICAL",
     "prefectures": [
      "宮城県"
     ],
     "source_ids": [
      "izunuma-s1"
     ]
    }
   ],
   "confusable_ids": [
    "towada",
    "oze"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r06",
     "question_id": "anta-r06-q72",
     "label": "R6 問72",
     "relation": "DIRECT"
    },
    {
     "set_id": "anta-r04",
     "question_id": "anta-r04-q3_6_4",
     "label": "R4 ６．(4)",
     "relation": "RELATED_CONTEXT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "環境省",
     "title": "ラムサール条約湿地 リーフレット「伊豆沼・内沼」",
     "url": "https://www.env.go.jp/nature/ramsar/conv/ramsarleaflet/15_Izu-numa_and_Uchi-numa.pdf",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "izunuma-s1"
    },
    {
     "authority": "宮城県",
     "title": "伊豆沼・内沼県自然環境保全地域",
     "url": "https://www.pref.miyagi.jp/soshiki/sizenhogo/izunuma.html",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "izunuma-s2"
    }
   ]
  },
  {
   "resource_id": "shirakami",
   "name": "白神山地",
   "reading": "しらかみさんち",
   "prefectures": [
    "青森県",
    "秋田県"
   ],
   "municipalities": [],
   "region": "東北",
   "categories": [
    "WORLD_HERITAGE",
    "MOUNTAIN_HIGHLAND"
   ],
   "subcategories": [
    "世界自然遺産",
    "ブナ原生林"
   ],
   "summary": "青森県と秋田県にまたがる山地。人の影響をほとんど受けていないブナの原生林が広がり、1993年（平成5年）に屋久島とともに日本初の世界自然遺産に登録。",
   "key_facts": [
    "世界自然遺産（平成5年 登録。屋久島と同年）。青森県・秋田県",
    "ブナ原生林。暗門渓谷など（青森県西目屋村側にビジターセンター）",
    "日本の世界遺産 最初の4件: 法隆寺・姫路城（文化）、屋久島・白神山地（自然）"
   ],
   "confusion_points": [
    "知床（北海道、2005年）と自然遺産の登録年を混同しない",
    "十和田八幡平国立公園（青森・秋田・岩手）とは別（白神山地は国立公園ではない）"
   ],
   "attention_points": [
    {
     "point": "ブナ原生林",
     "note": "白神山地の価値の中心"
    },
    {
     "point": "1993年（平成5年）",
     "note": "屋久島・法隆寺・姫路城と同じ最初の登録"
    }
   ],
   "memory_hook": "「白神はブナ、屋久島は杉」。どちらも1993年の最初の自然遺産。",
   "quiz_hint": "青森県と秋田県にまたがり、原生的なブナ林で知られる世界自然遺産。屋久島と同じ年に登録された。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "shirakami_wh",
     "type": "WORLD_HERITAGE",
     "name": "白神山地",
     "relation": "IDENTICAL",
     "prefectures": [
      "青森県",
      "秋田県"
     ],
     "source_ids": [
      "shirakami-s1"
     ]
    }
   ],
   "confusable_ids": [
    "shiretoko",
    "yakushima",
    "towada"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r03",
     "question_id": "anta-r03-q3_7_1",
     "label": "R3 ７．(1)",
     "relation": "DIRECT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "shirakami-s1"
    },
    {
     "authority": "白神山地ビジターセンター（指定管理: 青森県森林組合連合会）",
     "title": "世界自然遺産 白神山地",
     "url": "https://www.shirakami-visitor.jp/",
     "level": 2,
     "date": "2026-09-09 取得",
     "id": "shirakami-s2"
    }
   ]
  },
  {
   "resource_id": "nikko",
   "name": "日光の社寺",
   "reading": "にっこうのしゃじ",
   "prefectures": [
    "栃木県"
   ],
   "municipalities": [
    "日光市"
   ],
   "region": "関東",
   "categories": [
    "WORLD_HERITAGE",
    "TEMPLE_SHRINE"
   ],
   "subcategories": [
    "世界文化遺産",
    "二社一寺"
   ],
   "summary": "徳川家康を祀る日光東照宮を中心とする社寺群。1999年（平成11年）に「日光の社寺」として世界文化遺産に登録。日光国立公園（栃木・福島・群馬）の玄関口。",
   "key_facts": [
    "世界文化遺産（平成11年 登録）「日光の社寺」",
    "日光東照宮は元和3年（1617）に徳川家康公を祀って創建、寛永13年（1636）に三代家光が造替",
    "日光国立公園（栃木・福島・群馬）: 男体山・日光白根山・那須岳（茶臼岳）などの山岳"
   ],
   "confusion_points": [
    "久能山東照宮（静岡）と混同しない（家康は久能山から日光へ）",
    "日光国立公園は栃木・福島・群馬にまたがる。尾瀬は2007年に分離して尾瀬国立公園"
   ],
   "attention_points": [
    {
     "point": "1617年 創建、1636年 造替",
     "note": "家康を祀る。三代家光が現在の姿に"
    },
    {
     "point": "尾瀬は別の国立公園",
     "note": "2007年に日光国立公園から分離"
    }
   ],
   "memory_hook": "「家康は久能山から日光へ」。日光の社寺は1999年（平成11年）の文化遺産。",
   "quiz_hint": "徳川家康を祀る神社を中心とする社寺群で、1999年に世界文化遺産に登録された。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "nikko_wh",
     "type": "WORLD_HERITAGE",
     "name": "日光の社寺",
     "relation": "IDENTICAL",
     "prefectures": [
      "栃木県"
     ],
     "source_ids": [
      "nikko-s1"
     ]
    },
    {
     "id": "nikko_np",
     "type": "NATIONAL_PARK",
     "name": "日光国立公園",
     "relation": "WITHIN",
     "prefectures": [
      "福島県",
      "栃木県",
      "群馬県"
     ],
     "source_ids": [
      "nikko-s3"
     ],
     "note": "公園は3県だが、日光の社寺は栃木県日光市"
    }
   ],
   "confusable_ids": [
    "oze",
    "hiraizumi"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r06",
     "question_id": "anta-r06-q76",
     "label": "R6 問76",
     "relation": "DIRECT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "nikko-s1"
    },
    {
     "authority": "日光東照宮",
     "title": "日光東照宮 公式サイト（由緒）",
     "url": "https://www.toshogu.jp/",
     "level": 2,
     "date": "2026-09-08 取得",
     "id": "nikko-s2"
    },
    {
     "authority": "環境省",
     "title": "日光国立公園",
     "url": "https://www.env.go.jp/nature/nationalparks/list/nikko/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "nikko-s3"
    }
   ]
  },
  {
   "resource_id": "tomioka",
   "name": "富岡製糸場",
   "reading": "とみおかせいしじょう",
   "prefectures": [
    "群馬県"
   ],
   "municipalities": [
    "富岡市"
   ],
   "region": "関東",
   "categories": [
    "WORLD_HERITAGE",
    "HISTORIC_DISTRICT"
   ],
   "subcategories": [
    "世界文化遺産",
    "近代化遺産"
   ],
   "summary": "「富岡製糸場と絹産業遺産群」として2014年（平成26年）に世界文化遺産に登録。フランスから導入した繰糸器を備えた世界最大規模の器械製糸工場で、西置繭所などが国宝。",
   "key_facts": [
    "世界文化遺産（平成26年 登録）「富岡製糸場と絹産業遺産群」",
    "創設時にフランスから導入した金属製の繰糸器300釜。長さ約140mの繰糸所。世界最大規模の器械製糸工場",
    "西置繭所などが国宝。昭和62年（1987年）操業停止"
   ],
   "confusion_points": [
    "「明治日本の産業革命遺産」（2015年、製鉄・造船・石炭）とは別の産業遺産",
    "群馬県の温泉（草津・伊香保）と所在は同じ県"
   ],
   "attention_points": [
    {
     "point": "群馬県富岡市",
     "note": "絹産業遺産群"
    },
    {
     "point": "2014年（平成26年）",
     "note": "翌2015年の産業革命遺産と混同しない"
    }
   ],
   "memory_hook": "「絹の富岡（群馬）2014」→「鉄と石炭の産業革命遺産 2015」の順。",
   "quiz_hint": "フランスの技術で造られた日本の器械製糸工場で、絹産業遺産群として2014年に世界文化遺産に登録。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "tomioka_wh",
     "type": "WORLD_HERITAGE",
     "name": "富岡製糸場と絹産業遺産群",
     "relation": "COMPONENT_OF",
     "prefectures": [
      "群馬県"
     ],
     "source_ids": [
      "tomioka-s1"
     ]
    }
   ],
   "confusable_ids": [
    "nikko",
    "kenrokuen"
   ],
   "exam_priority": "B",
   "past_exam_links": [],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "tomioka-s1"
    },
    {
     "authority": "富岡市観光協会",
     "title": "富岡製糸場のみどころ（富岡市観光協会サイト）",
     "url": "https://www.tomioka-silk.jp/tomioka-silk-mill/guide/",
     "level": 2,
     "date": "2026-09-09 取得",
     "id": "tomioka-s2"
    }
   ]
  },
  {
   "resource_id": "oze",
   "name": "尾瀬",
   "reading": "おぜ",
   "prefectures": [
    "群馬県",
    "福島県",
    "新潟県"
   ],
   "municipalities": [
    "片品村",
    "檜枝岐村",
    "魚沼市"
   ],
   "region": "関東",
   "categories": [
    "LAKE_WETLAND",
    "MOUNTAIN_HIGHLAND",
    "RAMSAR_SITE"
   ],
   "subcategories": [
    "高層湿原",
    "尾瀬ヶ原・尾瀬沼"
   ],
   "summary": "本州最大の高層湿原の尾瀬ヶ原と、噴火で只見川源流が堰き止められてできた尾瀬沼を、至仏山・燧ヶ岳などが囲む。湿原はラムサール条約湿地「尾瀬」（2005年登録、福島・群馬・新潟）。周囲は2007年に日光国立公園から分離した尾瀬国立公園（福島・栃木・群馬・新潟）。",
   "key_facts": [
    "ラムサール条約湿地「尾瀬」（2005年11月8日 登録、8,711ha）: 福島県檜枝岐村・群馬県片品村・新潟県魚沼市",
    "尾瀬国立公園（2007年8月30日 指定、日光国立公園から分離）: 福島県・栃木県・群馬県・新潟県の4県",
    "尾瀬ヶ原＝本州最大の高層湿原、尾瀬沼、至仏山・燧ヶ岳・会津駒ヶ岳",
    "愛唱歌「夏の思い出」で知られる"
   ],
   "confusion_points": [
    "日光国立公園と混同しない（2007年に分離）",
    "釧路湿原（北海道）と湿原つながりで混同しない"
   ],
   "attention_points": [
    {
     "point": "ラムサール湿地「尾瀬」＝福島・群馬・新潟",
     "note": "檜枝岐村・片品村・魚沼市。栃木県は含まない"
    },
    {
     "point": "尾瀬国立公園＝福島・栃木・群馬・新潟の4県",
     "note": "2007年に日光国立公園から分離。湿地の範囲より広い"
    },
    {
     "point": "2007年 日光から分離",
     "note": "尾瀬国立公園"
    }
   ],
   "memory_hook": "「夏の思い出」の尾瀬。湿地は 福島・群馬・新潟 の3県、国立公園は 栃木 を足して4県。",
   "quiz_hint": "本州最大の高層湿原と沼を至仏山・燧ヶ岳が囲む。ラムサール条約湿地で、2007年に日光国立公園から分離した国立公園の中心。",
   "quiz_a": {
    "scope": "DESIGNATION:oze_ramsar"
   },
   "quiz_a_exclude_prefectures": [
    "栃木県"
   ],
   "designation_relations": [
    {
     "id": "oze_ramsar",
     "type": "RAMSAR",
     "name": "尾瀬",
     "relation": "IDENTICAL",
     "prefectures": [
      "福島県",
      "群馬県",
      "新潟県"
     ],
     "source_ids": [
      "oze-s3"
     ],
     "note": "ラムサール登録湿地（2005年11月8日、8,711ha）: 福島県檜枝岐村・群馬県片品村・新潟県魚沼市"
    },
    {
     "id": "oze_np",
     "type": "NATIONAL_PARK",
     "name": "尾瀬国立公園",
     "relation": "WITHIN",
     "prefectures": [
      "福島県",
      "栃木県",
      "群馬県",
      "新潟県"
     ],
     "source_ids": [
      "oze-s2"
     ],
     "note": "国立公園は栃木県を含む4県（2007年8月30日指定）"
    }
   ],
   "confusable_ids": [
    "nikko",
    "izunuma",
    "kamikochi"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r05",
     "question_id": "anta-r05-q3_7_3",
     "label": "R5 ７．(3)",
     "relation": "DIRECT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "環境省",
     "title": "尾瀬国立公園",
     "url": "https://www.env.go.jp/nature/nationalparks/list/oze/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "oze-s1"
    },
    {
     "authority": "環境省",
     "title": "尾瀬国立公園 概要・計画書",
     "url": "https://www.env.go.jp/park/oze/intro/",
     "level": 1,
     "date": "2026-09-09 取得",
     "id": "oze-s2"
    },
    {
     "id": "oze-s3",
     "authority": "環境省",
     "title": "ラムサール条約湿地 リーフレット「尾瀬」（福島県檜枝岐村、群馬県片品村、新潟県魚沼市、2005年11月8日登録、8,711ha）",
     "url": "https://www.env.go.jp/nature/ramsar/conv/ramsarleaflet/20_Oze.pdf",
     "level": 1,
     "date": "2026-09-09 取得"
    }
   ]
  },
  {
   "resource_id": "fuji",
   "name": "富士山",
   "reading": "ふじさん",
   "prefectures": [
    "山梨県",
    "静岡県"
   ],
   "municipalities": [],
   "region": "中部",
   "categories": [
    "WORLD_HERITAGE",
    "MOUNTAIN_HIGHLAND"
   ],
   "subcategories": [
    "世界文化遺産",
    "富士箱根伊豆国立公園",
    "信仰・芸術"
   ],
   "summary": "「富士山‐信仰の対象と芸術の源泉‐」として2013年（平成25年）に世界文化遺産に登録。富士講の信仰の場（浅間神社・登山道・富士五湖など）が構成資産。富士箱根伊豆国立公園。",
   "key_facts": [
    "世界文化遺産（平成25年 登録）。自然遺産ではなく文化遺産。山梨県・静岡県",
    "構成資産の例: 吉田口登山道、北口本宮冨士浅間神社など（山梨県側の富士講の信仰の対象）",
    "富士箱根伊豆国立公園（東京・神奈川・山梨・静岡。富士・箱根・伊豆半島・伊豆諸島）"
   ],
   "confusion_points": [
    "世界「自然」遺産と誤答しやすい（登録は文化遺産）",
    "山梨県と静岡県にまたがる。片方の県だけと覚えない"
   ],
   "attention_points": [
    {
     "point": "文化遺産（2013年）",
     "note": "自然遺産ではない"
    },
    {
     "point": "山梨県・静岡県",
     "note": "吉田口登山道・北口本宮冨士浅間神社は山梨県側"
    }
   ],
   "memory_hook": "「富士山は信仰と芸術の文化遺産」。2013年（平成25年）。",
   "quiz_hint": "信仰の対象と芸術の源泉として2013年に世界文化遺産に登録された山。山梨県と静岡県にまたがる。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "fuji_wh",
     "type": "WORLD_HERITAGE",
     "name": "富士山‐信仰の対象と芸術の源泉‐",
     "relation": "IDENTICAL",
     "prefectures": [
      "山梨県",
      "静岡県"
     ],
     "source_ids": [
      "fuji-s1"
     ]
    },
    {
     "id": "fuji_np",
     "type": "NATIONAL_PARK",
     "name": "富士箱根伊豆国立公園",
     "relation": "WITHIN",
     "prefectures": [
      "東京都",
      "神奈川県",
      "山梨県",
      "静岡県"
     ],
     "source_ids": [
      "fuji-s4"
     ],
     "note": "公園は箱根・伊豆諸島まで含む4都県"
    }
   ],
   "confusable_ids": [
    "kamikochi",
    "oze"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r06",
     "question_id": "anta-r06-q71",
     "label": "R6 問71",
     "relation": "DIRECT"
    },
    {
     "set_id": "anta-r04",
     "question_id": "anta-r04-q3_8_1",
     "label": "R4 ８．(1)",
     "relation": "DIRECT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "fuji-s1"
    },
    {
     "authority": "山梨県立富士山世界遺産センター",
     "title": "富士山世界遺産センター",
     "url": "https://www.fujisan-whc.jp/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "fuji-s2"
    },
    {
     "authority": "環境省",
     "title": "富士箱根伊豆国立公園",
     "url": "https://www.env.go.jp/nature/nationalparks/list/fuji-hakone-izu/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "fuji-s3"
    },
    {
     "id": "fuji-s4",
     "authority": "環境省",
     "title": "富士箱根伊豆国立公園 概要・計画書（東京都・神奈川県・山梨県・静岡県）",
     "url": "https://www.env.go.jp/park/fujihakone/intro/",
     "level": 1,
     "date": "2026-09-09 取得"
    }
   ]
  },
  {
   "resource_id": "shirakawago",
   "name": "白川郷・五箇山の合掌造り集落",
   "reading": "しらかわごう・ごかやま",
   "prefectures": [
    "岐阜県",
    "富山県"
   ],
   "municipalities": [
    "白川村",
    "南砺市"
   ],
   "region": "中部",
   "categories": [
    "WORLD_HERITAGE",
    "HISTORIC_DISTRICT"
   ],
   "subcategories": [
    "世界文化遺産",
    "合掌造り"
   ],
   "summary": "岐阜県白川村荻町と富山県の五箇山に残る合掌造り集落。1995年（平成7年）に世界文化遺産に登録。今も人々が生活する集落で、住民の相互扶助の営みも評価された。",
   "key_facts": [
    "世界文化遺産（平成7年 登録）。岐阜県・富山県",
    "白川郷は岐阜県大野郡白川村の荻町地区。大小100棟余りの合掌造り",
    "五箇山は富山県南砺市の相倉集落・菅沼集落（1995年に白川郷とともに登録）"
   ],
   "confusion_points": [
    "白川郷（岐阜）と五箇山（富山）の県を入れ替えない",
    "高山（飛驒）や妻籠・馬籠（宿場）と町並みつながりで混同しない"
   ],
   "attention_points": [
    {
     "point": "白川郷＝岐阜県白川村",
     "note": "五箇山＝富山県"
    },
    {
     "point": "1995年（平成7年）",
     "note": "文化遺産"
    }
   ],
   "memory_hook": "「合掌造りは 岐阜の白川郷 と 富山の五箇山」。",
   "quiz_hint": "岐阜県と富山県に残る合掌造りの集落群。1995年に世界文化遺産に登録され、今も人が暮らしている。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "shirakawago_wh",
     "type": "WORLD_HERITAGE",
     "name": "白川郷・五箇山の合掌造り集落",
     "relation": "IDENTICAL",
     "prefectures": [
      "岐阜県",
      "富山県"
     ],
     "source_ids": [
      "shirakawago-s1"
     ]
    }
   ],
   "confusable_ids": [
    "kamikochi",
    "kenrokuen"
   ],
   "exam_priority": "A",
   "past_exam_links": [],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "shirakawago-s1"
    },
    {
     "authority": "白川郷観光協会",
     "title": "【公式】白川郷観光協会",
     "url": "https://shirakawa-go.gr.jp/",
     "level": 2,
     "date": "2026-09-08 取得",
     "id": "shirakawago-s2"
    },
    {
     "authority": "南砺市",
     "title": "五箇山合掌造り集落（南砺市 文化遺産アーカイブ）",
     "url": "https://culture-archives.city.nanto.toyama.jp/heritages/sekai0001/",
     "level": 1,
     "date": "2026-09-09 取得",
     "id": "shirakawago-s3"
    }
   ]
  },
  {
   "resource_id": "kamikochi",
   "name": "上高地",
   "reading": "かみこうち",
   "prefectures": [
    "長野県"
   ],
   "municipalities": [
    "松本市"
   ],
   "region": "中部",
   "categories": [
    "MOUNTAIN_HIGHLAND",
    "VALLEY_WATERFALL"
   ],
   "subcategories": [
    "梓川",
    "河童橋"
   ],
   "summary": "北アルプスの中部山岳国立公園に位置する標高約1,500mの山岳景勝地。梓川、穂高連峰、河童橋や大正池で知られ、国の特別名勝・特別天然記念物。長野県松本市。",
   "key_facts": [
    "中部山岳国立公園（新潟・富山・長野・岐阜、昭和9年指定）。上高地は長野県松本市",
    "梓川、河童橋（上高地のシンボル）、大正池、明神池、岳沢湿原。国の特別名勝・特別天然記念物",
    "通年のマイカー規制。さわんど等からシャトルバス"
   ],
   "confusion_points": [
    "立山（富山）や乗鞍高原と混同しない",
    "軽井沢・志賀高原（上信越高原国立公園）とは別の公園"
   ],
   "attention_points": [
    {
     "point": "長野県松本市",
     "note": "梓川・河童橋"
    },
    {
     "point": "中部山岳国立公園",
     "note": "北アルプス"
    }
   ],
   "memory_hook": "「河童橋と梓川なら上高地（松本）」。",
   "quiz_hint": "北アルプスの国立公園にある標高約1,500mの山岳景勝地。梓川と穂高連峰、河童橋で知られ、通年マイカー規制がある松本市の観光地。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "kamikochi_np",
     "type": "NATIONAL_PARK",
     "name": "中部山岳国立公園",
     "relation": "WITHIN",
     "prefectures": [
      "新潟県",
      "富山県",
      "長野県",
      "岐阜県"
     ],
     "source_ids": [
      "kamikochi-s2"
     ],
     "note": "公園は4県だが、上高地は長野県松本市"
    }
   ],
   "confusable_ids": [
    "fuji",
    "oze",
    "shirakawago"
   ],
   "exam_priority": "B",
   "past_exam_links": [],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "松本市（松本市公式観光サイト）",
     "title": "上高地｜松本市公式観光サイト",
     "url": "https://visitmatsumoto.com/spot/detail_1025.html",
     "level": 1,
     "date": "2026-09-09 取得",
     "id": "kamikochi-s1"
    },
    {
     "authority": "環境省",
     "title": "中部山岳国立公園 概要・計画書",
     "url": "https://www.env.go.jp/park/chubu/intro/",
     "level": 1,
     "date": "2026-09-09 取得",
     "id": "kamikochi-s2"
    },
    {
     "authority": "上高地公式ウェブサイト（上高地観光旅館組合等）",
     "title": "上高地公式ウェブサイト",
     "url": "https://www.kamikochi.or.jp/",
     "level": 2,
     "date": "2026-09-09 取得",
     "id": "kamikochi-s3"
    }
   ]
  },
  {
   "resource_id": "kenrokuen",
   "name": "兼六園",
   "reading": "けんろくえん",
   "prefectures": [
    "石川県"
   ],
   "municipalities": [
    "金沢市"
   ],
   "region": "中部",
   "categories": [
    "GARDEN"
   ],
   "subcategories": [
    "特別名勝",
    "大名庭園"
   ],
   "summary": "金沢城公園に隣接する石川県の文化財指定庭園（特別名勝）。金沢市中心部にあり、石川県金沢城・兼六園管理事務所が管理する。",
   "key_facts": [
    "国の特別名勝（文化財指定庭園）。石川県金沢市",
    "金沢城公園と一体で整備・公開（金沢城・兼六園管理事務所）",
    "園内に時雨亭（休憩施設）"
   ],
   "confusion_points": [
    "岡山の後楽園、水戸の偕楽園と庭園名を混同しない",
    "金沢＝石川県（富山県・福井県ではない）"
   ],
   "attention_points": [
    {
     "point": "石川県金沢市",
     "note": "金沢城公園に隣接"
    },
    {
     "point": "特別名勝",
     "note": "文化財指定庭園"
    }
   ],
   "memory_hook": "「金沢城の隣が兼六園」。石川県。",
   "quiz_hint": "金沢城公園に隣接する、石川県が管理する特別名勝の大名庭園。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "kenrokuen_meisho",
     "type": "OTHER_DESIGNATION",
     "name": "特別名勝 兼六園",
     "relation": "IDENTICAL",
     "prefectures": [
      "石川県"
     ],
     "source_ids": [
      "kenrokuen-s1"
     ]
    }
   ],
   "confusable_ids": [
    "shirakawago",
    "tomioka"
   ],
   "exam_priority": "C",
   "past_exam_links": [],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "石川県（金沢城・兼六園管理事務所）",
     "title": "文化財指定庭園 特別名勝 兼六園",
     "url": "https://www.pref.ishikawa.jp/siro-niwa/kenrokuen/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "kenrokuen-s1"
    }
   ]
  },
  {
   "resource_id": "kiyomizu",
   "name": "清水寺",
   "reading": "きよみずでら",
   "prefectures": [
    "京都府"
   ],
   "municipalities": [
    "京都市"
   ],
   "region": "近畿",
   "categories": [
    "WORLD_HERITAGE",
    "TEMPLE_SHRINE"
   ],
   "subcategories": [
    "世界文化遺産「古都京都の文化財」",
    "音羽山"
   ],
   "summary": "京都東山・音羽山中に広がる寺。開創は778年。国宝・重要文化財を含む伽藍を持ち、「古都京都の文化財（京都市、宇治市、大津市）」（1994年登録）の構成資産の一つ。",
   "key_facts": [
    "世界文化遺産「古都京都の文化財（京都市、宇治市、大津市）」（平成6年 登録）は京都府・滋賀県",
    "清水寺の開創は778年。東山・音羽山中に境内が広がり、国宝・重要文化財を含む15の伽藍",
    "同じ「古都京都」の構成資産に宇治（平等院・宇治上神社）や大津（延暦寺）も含まれる"
   ],
   "confusion_points": [
    "「古都京都」は京都市だけでなく宇治市・大津市（滋賀県）を含む",
    "「古都奈良の文化財」（1998年）と登録年・県を混同しない"
   ],
   "attention_points": [
    {
     "point": "古都京都＝京都府＋滋賀県",
     "note": "京都市・宇治市・大津市。清水寺そのものは京都市東山"
    },
    {
     "point": "1994年（平成6年）",
     "note": "古都奈良は1998年"
    }
   ],
   "memory_hook": "「古都京都は 京都・宇治・大津」。清水寺は東山の音羽山。",
   "quiz_hint": "京都東山の音羽山中にあり、778年開創。京都市・宇治市・大津市にまたがる世界文化遺産の構成資産の一つ。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "kyoto_wh",
     "type": "WORLD_HERITAGE",
     "name": "古都京都の文化財（京都市、宇治市、大津市）",
     "relation": "COMPONENT_OF",
     "prefectures": [
      "京都府",
      "滋賀県"
     ],
     "source_ids": [
      "kiyomizu-s1"
     ],
     "note": "世界遺産全体は滋賀県（大津市）を含むが、清水寺は京都市"
    }
   ],
   "confusable_ids": [
    "todaiji",
    "kumano"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r04",
     "question_id": "anta-r04-q3_7_1",
     "label": "R4 ７．(1)",
     "relation": "RELATED_CONTEXT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "kiyomizu-s1"
    },
    {
     "authority": "音羽山 清水寺",
     "title": "清水寺 公式サイト（境内案内・歴史）",
     "url": "https://www.kiyomizudera.or.jp/",
     "level": 2,
     "date": "2026-09-08 取得",
     "id": "kiyomizu-s2"
    }
   ]
  },
  {
   "resource_id": "todaiji",
   "name": "東大寺",
   "reading": "とうだいじ",
   "prefectures": [
    "奈良県"
   ],
   "municipalities": [
    "奈良市"
   ],
   "region": "近畿",
   "categories": [
    "WORLD_HERITAGE",
    "TEMPLE_SHRINE"
   ],
   "subcategories": [
    "世界文化遺産「古都奈良の文化財」",
    "大仏殿"
   ],
   "summary": "奈良時代創建の大仏で知られる寺。鎌倉再建・江戸再興を経て現在に至る。「古都奈良の文化財」（1998年・平成10年 登録）の構成資産の一つ。",
   "key_facts": [
    "世界文化遺産「古都奈良の文化財」（平成10年 登録）。奈良県",
    "奈良時代創建（大仏殿・大仏）。鎌倉再建、江戸再興",
    "「法隆寺地域の仏教建造物」（1993年）は別の世界遺産"
   ],
   "confusion_points": [
    "法隆寺（1993年）と東大寺（古都奈良 1998年）は別の世界遺産",
    "古都京都（1994年）と古都奈良（1998年）の年を入れ替えない"
   ],
   "attention_points": [
    {
     "point": "古都奈良＝1998年（平成10年）",
     "note": "法隆寺は1993年の別遺産"
    },
    {
     "point": "奈良時代創建の大仏",
     "note": "鎌倉・江戸に再建"
    }
   ],
   "memory_hook": "「法隆寺 1993 → 古都京都 1994 → 古都奈良 1998」の順。",
   "quiz_hint": "奈良時代に創建された大仏の寺。鎌倉と江戸に再建され、1998年登録の古都の世界文化遺産の構成資産。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "nara_wh",
     "type": "WORLD_HERITAGE",
     "name": "古都奈良の文化財",
     "relation": "COMPONENT_OF",
     "prefectures": [
      "奈良県"
     ],
     "source_ids": [
      "todaiji-s1"
     ]
    }
   ],
   "confusable_ids": [
    "kiyomizu",
    "asuka"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r06",
     "question_id": "anta-r06-q77",
     "label": "R6 問77",
     "relation": "DIRECT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "todaiji-s1"
    },
    {
     "authority": "東大寺",
     "title": "東大寺 公式サイト（歴史）",
     "url": "https://www.todaiji.or.jp/",
     "level": 2,
     "date": "2026-09-08 取得",
     "id": "todaiji-s2"
    }
   ]
  },
  {
   "resource_id": "himeji",
   "name": "姫路城",
   "reading": "ひめじじょう",
   "prefectures": [
    "兵庫県"
   ],
   "municipalities": [
    "姫路市"
   ],
   "region": "近畿",
   "categories": [
    "WORLD_HERITAGE",
    "CASTLE"
   ],
   "subcategories": [
    "世界文化遺産",
    "国宝"
   ],
   "summary": "国宝の城。1993年（平成5年）12月、法隆寺とともに日本で最初の世界文化遺産に登録。400年以上前の姿を残す。",
   "key_facts": [
    "世界文化遺産（平成5年 登録）。法隆寺地域の仏教建造物と同時に日本初の文化遺産",
    "国宝。兵庫県姫路市",
    "世界遺産『姫路城』は城として単独で登録。兵庫県姫路市が管理"
   ],
   "confusion_points": [
    "松本城・彦根城・松江城など他の城と混同しない。世界遺産『姫路城』は姫路城の単独登録",
    "二条城（京都市）は『古都京都の文化財』、首里城跡（沖縄県）は『琉球王国のグスク及び関連遺産群』の構成資産として世界遺産に含まれる"
   ],
   "attention_points": [
    {
     "point": "日本初の世界文化遺産（1993年）",
     "note": "法隆寺と同時"
    },
    {
     "point": "『姫路城』は単独登録の世界遺産",
     "note": "「世界遺産の城は姫路城だけ」ではない。二条城は古都京都、首里城跡はグスク群の構成資産"
    }
   ],
   "memory_hook": "「姫路城は法隆寺と同時、1993年の第1号」。城の世界遺産は 姫路（単独）・二条（古都京都）・首里城跡（グスク群）。",
   "quiz_hint": "兵庫県にある国宝の城で、1993年に法隆寺とともに日本で最初の世界文化遺産に登録された。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "himeji_wh",
     "type": "WORLD_HERITAGE",
     "name": "姫路城",
     "relation": "IDENTICAL",
     "prefectures": [
      "兵庫県"
     ],
     "source_ids": [
      "himeji-s1"
     ]
    }
   ],
   "confusable_ids": [
    "itsukushima",
    "shuri"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r05",
     "question_id": "anta-r05-q3_6_1",
     "label": "R5 ６．(1)",
     "relation": "RELATED_CONTEXT"
    },
    {
     "set_id": "anta-r05",
     "question_id": "anta-r05-q3_6_2",
     "label": "R5 ６．(2)",
     "relation": "RELATED_CONTEXT"
    },
    {
     "set_id": "anta-r05",
     "question_id": "anta-r05-q3_6_3",
     "label": "R5 ６．(3)",
     "relation": "RELATED_CONTEXT"
    },
    {
     "set_id": "anta-r05",
     "question_id": "anta-r05-q3_6_4",
     "label": "R5 ６．(4)",
     "relation": "DIRECT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "himeji-s1"
    },
    {
     "authority": "姫路市",
     "title": "姫路城公式サイト",
     "url": "https://www.city.himeji.lg.jp/castle/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "himeji-s2"
    },
    {
     "authority": "京都市（元離宮二条城事務所）",
     "title": "元離宮二条城 公式サイト（世界遺産「古都京都の文化財」構成資産）",
     "url": "https://nijo-jocastle.city.kyoto.lg.jp/",
     "level": 1,
     "date": "2026-09-09 取得",
     "id": "himeji-s3"
    },
    {
     "authority": "沖縄県",
     "title": "首里城跡（沖縄の世界遺産）",
     "url": "https://www.pref.okinawa.jp/kyoiku/kodomo/1002688/1002695/1002697.html",
     "level": 1,
     "date": "2026-09-09 取得",
     "id": "himeji-s4"
    }
   ]
  },
  {
   "resource_id": "kumano",
   "name": "紀伊山地の霊場と参詣道（熊野三山・高野山・吉野）",
   "reading": "きいさんちのれいじょうとさんけいみち",
   "prefectures": [
    "三重県",
    "奈良県",
    "和歌山県"
   ],
   "municipalities": [],
   "region": "近畿",
   "categories": [
    "WORLD_HERITAGE",
    "TEMPLE_SHRINE",
    "MOUNTAIN_HIGHLAND"
   ],
   "subcategories": [
    "世界文化遺産",
    "熊野古道"
   ],
   "summary": "熊野三山（本宮・速玉・那智）、高野山、吉野・大峯の三つの霊場と、それらを結ぶ参詣道（熊野参詣道中辺路など）。2004年（平成16年）に世界文化遺産に登録。三重・奈良・和歌山。",
   "key_facts": [
    "世界文化遺産（平成16年 登録）。三重県・奈良県・和歌山県",
    "登録資産: 高野山（壇上伽藍・奥の院）、熊野本宮大社・熊野速玉大社・熊野那智大社・那智山青岸渡寺、熊野参詣道中辺路など",
    "「道」が登録された世界遺産"
   ],
   "confusion_points": [
    "吉野熊野国立公園（三重・奈良・和歌山）と世界遺産の範囲を混同しない",
    "伊勢神宮（三重）は世界遺産ではない"
   ],
   "attention_points": [
    {
     "point": "3県（三重・奈良・和歌山）",
     "note": "熊野三山は和歌山、吉野は奈良、高野山は和歌山"
    },
    {
     "point": "参詣道（道）も登録",
     "note": "中辺路など"
    }
   ],
   "memory_hook": "「熊野・高野・吉野を結ぶ道」＝2004年の文化遺産。",
   "quiz_hint": "三重・奈良・和歌山にまたがり、三つの霊場とそれらを結ぶ参詣道が2004年に世界文化遺産に登録された。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "kumano_wh",
     "type": "WORLD_HERITAGE",
     "name": "紀伊山地の霊場と参詣道",
     "relation": "IDENTICAL",
     "prefectures": [
      "三重県",
      "奈良県",
      "和歌山県"
     ],
     "source_ids": [
      "kumano-s1"
     ]
    }
   ],
   "confusable_ids": [
    "kiyomizu",
    "todaiji",
    "asuka"
   ],
   "exam_priority": "A",
   "past_exam_links": [],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "kumano-s1"
    },
    {
     "authority": "和歌山県世界遺産センター",
     "title": "世界遺産「紀伊山地の霊場と参詣道」の登録資産",
     "url": "https://www.sekaiisan-wakayama.jp/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "kumano-s2"
    }
   ]
  },
  {
   "resource_id": "asuka",
   "name": "飛鳥・藤原の宮都",
   "reading": "あすか・ふじわらのきゅうと",
   "prefectures": [
    "奈良県"
   ],
   "municipalities": [
    "明日香村",
    "橿原市",
    "桜井市"
   ],
   "region": "近畿",
   "categories": [
    "WORLD_HERITAGE",
    "HISTORIC_DISTRICT"
   ],
   "subcategories": [
    "世界文化遺産（2026年登録）",
    "宮殿・寺院・古墳"
   ],
   "summary": "飛鳥時代の宮殿跡・寺院跡・古墳群（藤原宮跡、飛鳥宮跡、石舞台古墳、高松塚古墳、キトラ古墳など）。2026年7月26日の第48回世界遺産委員会で世界文化遺産に登録が決定し、日本の世界遺産は27件目。",
   "key_facts": [
    "世界文化遺産（令和8年 登録）。奈良県明日香村・橿原市・桜井市",
    "構成資産の例: 藤原宮跡、飛鳥宮跡、飛鳥寺跡、石舞台古墳、高松塚古墳、キトラ古墳、天武・持統天皇陵古墳",
    "日本の世界遺産 27件目（文化遺産 22 件目）"
   ],
   "confusion_points": [
    "「古都奈良の文化財」（奈良市、1998年）とは別の資産",
    "同じ奈良県の 法隆寺（1993年）・紀伊山地（2004年）とも別"
   ],
   "attention_points": [
    {
     "point": "2026年7月26日 登録決定",
     "note": "2026年度試験の基準日（2026-06-01）より後の出来事"
    },
    {
     "point": "明日香村・橿原市・桜井市",
     "note": "奈良市ではない"
    }
   ],
   "memory_hook": "「飛鳥・藤原は 27件目（2026）」。奈良市の古都奈良とは別。",
   "quiz_hint": "奈良県の明日香村・橿原市・桜井市にまたがる宮殿跡・寺院跡・古墳群で、2026年に世界文化遺産に登録が決定した。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "asuka_wh",
     "type": "WORLD_HERITAGE",
     "name": "飛鳥・藤原の宮都",
     "relation": "IDENTICAL",
     "prefectures": [
      "奈良県"
     ],
     "source_ids": [
      "asuka-s1"
     ]
    }
   ],
   "confusable_ids": [
    "todaiji",
    "kumano",
    "hiraizumi"
   ],
   "exam_priority": "B",
   "past_exam_links": [],
   "hot_2026": true,
   "current_2026_note": "基準日後ニュース: 世界遺産登録（2026-07-26）は令和8年度試験の基準日（2026-06-01）より後。2026年度に「必ず出る」とは言えない。翌年度以降も警戒し、構成資産の所在（明日香村・橿原市・桜井市）を押さえる。",
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧（27 飛鳥・藤原の宮都 奈良県 令和8年 文化）",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "asuka-s1"
    },
    {
     "authority": "橿原市",
     "title": "「飛鳥・藤原の宮都」が世界遺産に登録されました！",
     "url": "https://www.city.kashihara.nara.jp/soshiki/1020/gyomu/1/1/20839.html",
     "level": 1,
     "date": "2026-07-26",
     "id": "asuka-s2"
    },
    {
     "authority": "世界遺産「飛鳥・藤原」登録推進協議会",
     "title": "構成資産の紹介",
     "url": "https://asuka-fujiwara.jp/",
     "level": 2,
     "date": "2026-09-08 取得",
     "id": "asuka-s3"
    }
   ]
  },
  {
   "resource_id": "itsukushima",
   "name": "厳島神社",
   "reading": "いつくしまじんじゃ",
   "prefectures": [
    "広島県"
   ],
   "municipalities": [
    "廿日市市"
   ],
   "region": "中国",
   "categories": [
    "WORLD_HERITAGE",
    "TEMPLE_SHRINE"
   ],
   "subcategories": [
    "世界文化遺産",
    "国宝"
   ],
   "summary": "宮島（広島県廿日市市）の海上に社殿が建つ国宝の神社。1996年（平成8年）に世界文化遺産に登録。大鳥居・廻廊・能舞台などの社殿群。",
   "key_facts": [
    "世界文化遺産（平成8年 登録。原爆ドームと同年）。国宝",
    "広島県廿日市市宮島町。海に建つ大鳥居・東西廻廊・能舞台",
    "所在地は広島県廿日市市宮島町。宮島（厳島）の島内"
   ],
   "confusion_points": [
    "原爆ドーム（広島市、同じ1996年）と登録年が同じ",
    "海の神社つながりで 金刀比羅宮（香川、石段）と混同しない"
   ],
   "attention_points": [
    {
     "point": "廿日市市（宮島）",
     "note": "広島市ではない"
    },
    {
     "point": "1996年（平成8年）",
     "note": "原爆ドームと同年登録"
    }
   ],
   "memory_hook": "「宮島の海に浮かぶ大鳥居」＝廿日市市。1996年は原爆ドームとセット。",
   "quiz_hint": "広島県の島の海上に社殿と大鳥居が建つ国宝の神社。1996年に世界文化遺産に登録。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "itsukushima_wh",
     "type": "WORLD_HERITAGE",
     "name": "厳島神社",
     "relation": "IDENTICAL",
     "prefectures": [
      "広島県"
     ],
     "source_ids": [
      "itsukushima-s1"
     ]
    }
   ],
   "confusable_ids": [
    "genbaku_dome",
    "konpira",
    "himeji"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r07",
     "question_id": "anta-r07-q73",
     "label": "R7 問73",
     "relation": "RELATED_CONTEXT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "itsukushima-s1"
    },
    {
     "authority": "嚴島神社",
     "title": "国宝・世界遺産 嚴島神社 公式サイト",
     "url": "https://www.itsukushimajinja.jp/",
     "level": 2,
     "date": "2026-09-08 取得",
     "id": "itsukushima-s2"
    }
   ]
  },
  {
   "resource_id": "genbaku_dome",
   "name": "原爆ドーム",
   "reading": "げんばくどーむ",
   "prefectures": [
    "広島県"
   ],
   "municipalities": [
    "広島市"
   ],
   "region": "中国",
   "categories": [
    "WORLD_HERITAGE",
    "HISTORIC_DISTRICT"
   ],
   "subcategories": [
    "世界文化遺産",
    "負の遺産"
   ],
   "summary": "旧広島県産業奨励館。チェコの建築家ヤン・レツルの設計で広島県物産陳列館として建てられ、原爆は建物の南東約160mで炸裂。1996年（平成8年）12月に世界文化遺産に登録。",
   "key_facts": [
    "世界文化遺産（平成8年12月 登録）。広島市中区大手町、平和記念公園",
    "旧 広島県産業奨励館（広島県物産陳列館 → 商品陳列所 → 産業奨励館）。設計はヤン・レツル",
    "爆心地からの距離 160m。核兵器廃絶と恒久平和のシンボル"
   ],
   "confusion_points": [
    "厳島神社（廿日市市）と同じ1996年登録",
    "長崎の平和公園とは別"
   ],
   "attention_points": [
    {
     "point": "旧広島県産業奨励館",
     "note": "設計 ヤン・レツル"
    },
    {
     "point": "1996年12月 登録",
     "note": "厳島神社と同年"
    }
   ],
   "memory_hook": "「産業奨励館が原爆ドーム」。1996年は広島の2件（原爆ドーム・厳島神社）。",
   "quiz_hint": "チェコ人建築家設計の旧産業奨励館で、爆心地から約160mに残る建物。1996年に世界文化遺産に登録。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "genbaku_wh",
     "type": "WORLD_HERITAGE",
     "name": "原爆ドーム",
     "relation": "IDENTICAL",
     "prefectures": [
      "広島県"
     ],
     "source_ids": [
      "genbaku_dome-s1"
     ]
    }
   ],
   "confusable_ids": [
    "itsukushima",
    "daisen"
   ],
   "exam_priority": "A",
   "past_exam_links": [],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "genbaku_dome-s1"
    },
    {
     "authority": "広島市",
     "title": "原爆ドーム（広島県産業奨励館）",
     "url": "https://www.city.hiroshima.lg.jp/atomicbomb-peace/fukko/1021101/1026920/1026921/1020866.html",
     "level": 1,
     "date": "2026-04-07 更新",
     "id": "genbaku_dome-s2"
    }
   ]
  },
  {
   "resource_id": "daisen",
   "name": "大山・鍵掛峠",
   "reading": "だいせん・かぎかけとうげ",
   "prefectures": [
    "鳥取県"
   ],
   "municipalities": [],
   "region": "中国",
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "subcategories": [
    "中国地方最高峰",
    "展望地"
   ],
   "summary": "中国地方最高峰の大山を中心に、蒜山・三徳山・三瓶山、隠岐諸島、島根半島海岸からなる大山隠岐国立公園。江府町側の鍵掛峠（標高約910m）は大山南壁を望む絶景地。",
   "key_facts": [
    "大山隠岐国立公園（鳥取・島根・岡山、昭和11年 指定）。大山は中国地方最高峰",
    "鍵掛峠は鳥取県江府町、標高約910m。手前にブナ林、奥に大山の南壁。紅葉の名所",
    "公園内に 隠岐諸島（ユネスコ世界ジオパーク）、出雲大社など神話の名所"
   ],
   "confusion_points": [
    "峠の出題: 発荷峠（秋田・十和田湖）、狩勝峠（北海道）、仁田峠（長崎）と区別",
    "大山（だいせん、鳥取）と 大山（おおやま、神奈川）を混同しない"
   ],
   "attention_points": [
    {
     "point": "鍵掛峠＝鳥取県江府町",
     "note": "大山の南壁を望む"
    },
    {
     "point": "中国地方最高峰",
     "note": "大山隠岐国立公園（隠岐・出雲も含む）"
    }
   ],
   "memory_hook": "「鍵掛峠から大山南壁」。鍵掛＝大山、発荷＝十和田、仁田＝雲仙、狩勝＝十勝。",
   "quiz_hint": "中国地方最高峰の山と隠岐諸島などからなる国立公園。江府町側の峠から南壁を望む。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "daisen_np",
     "type": "NATIONAL_PARK",
     "name": "大山隠岐国立公園",
     "relation": "WITHIN",
     "prefectures": [
      "鳥取県",
      "島根県",
      "岡山県"
     ],
     "source_ids": [
      "daisen-s3"
     ],
     "note": "公園は隠岐・島根半島・蒜山まで含む3県だが、大山と鍵掛峠は鳥取県"
    }
   ],
   "confusable_ids": [
    "towada",
    "unzen",
    "aso"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r07",
     "question_id": "anta-r07-q75",
     "label": "R7 問75",
     "relation": "RELATED_CONTEXT"
    },
    {
     "set_id": "anta-r05",
     "question_id": "anta-r05-q3_5_2",
     "label": "R5 ５．(2)",
     "relation": "RELATED_CONTEXT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "環境省",
     "title": "大山隠岐国立公園",
     "url": "https://www.env.go.jp/nature/nationalparks/list/daisen-oki/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "daisen-s1"
    },
    {
     "authority": "鳥取県江府町（公式観光サイト）",
     "title": "鍵掛峠",
     "url": "https://www.town-kofu.jp/kanko/8/1/01/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "daisen-s2"
    },
    {
     "id": "daisen-s3",
     "authority": "環境省",
     "title": "大山隠岐国立公園 概要・計画書（鳥取県・島根県・岡山県）",
     "url": "https://www.env.go.jp/park/daisen/intro/",
     "level": 1,
     "date": "2026-09-09 取得"
    }
   ]
  },
  {
   "resource_id": "konpira",
   "name": "金刀比羅宮",
   "reading": "ことひらぐう",
   "prefectures": [
    "香川県"
   ],
   "municipalities": [
    "琴平町"
   ],
   "region": "四国",
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "subcategories": [
    "海上安全の信仰",
    "重要文化財（2024年 12棟）"
   ],
   "summary": "象頭山の東斜面にあり、785段の石段を登って御本宮に至る「こんぴらさん」。海の守り神として全国から参拝を集め、2024年8月に本宮など12棟が国の重要文化財に指定。",
   "key_facts": [
    "香川県仲多度郡琴平町（金刀比羅宮の門前町）。象頭山。785段の石段（御本宮まで）",
    "海上安全の信仰。参道沿いに土産物・さぬきうどんの店",
    "令和6年5月 文化審議会答申、令和6年8月15日 官報告示で本宮・別宮など12棟が重要文化財"
   ],
   "confusion_points": [
    "鵜戸神宮（宮崎、洞窟の本殿・下り宮）と混同しない",
    "厳島神社（広島、海上の社殿）とも別"
   ],
   "attention_points": [
    {
     "point": "香川県琴平町",
     "note": "象頭山・785段"
    },
    {
     "point": "2024年 重要文化財 12棟",
     "note": "8月15日 官報告示"
    }
   ],
   "memory_hook": "「石段＋海の神＋うどん」＝こんぴらさん。",
   "quiz_hint": "象頭山の中腹、長い石段の参道で知られる海上安全の神社。2024年に本宮など12棟が重要文化財に指定された。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [],
   "confusable_ids": [
    "udo",
    "itsukushima",
    "dogo"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r07",
     "question_id": "anta-r07-q63",
     "label": "R7 問63",
     "relation": "DIRECT"
    },
    {
     "set_id": "anta-r06",
     "question_id": "anta-r06-q75",
     "label": "R6 問75",
     "relation": "DIRECT"
    },
    {
     "set_id": "anta-r03",
     "question_id": "anta-r03-q3_5_4",
     "label": "R3 ５．(4)",
     "relation": "DIRECT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "琴平町",
     "title": "琴平町観光基本計画（金刀比羅宮の門前町として発展）",
     "url": "https://www.town.kotohira.kagawa.jp/uploaded/attachment/3592.pdf",
     "level": 1,
     "date": "2026-09-09 取得",
     "id": "konpira-s1"
    },
    {
     "authority": "金刀比羅宮",
     "title": "金刀比羅宮 公式サイト（785段の石段）",
     "url": "https://www.konpira.or.jp/",
     "level": 2,
     "date": "2026-09-08 取得",
     "id": "konpira-s2"
    },
    {
     "authority": "金刀比羅宮",
     "title": "御本宮など国の重要文化財に指定（令和6年8月15日 官報告示）",
     "url": "https://www.konpira.or.jp/articles_2024/20240518_important-cultural-propertys/article.html",
     "level": 2,
     "date": "2024-08-15",
     "id": "konpira-s3"
    }
   ]
  },
  {
   "resource_id": "dogo",
   "name": "道後温泉",
   "reading": "どうごおんせん",
   "prefectures": [
    "愛媛県"
   ],
   "municipalities": [
    "松山市"
   ],
   "region": "四国",
   "categories": [
    "HOT_SPRING"
   ],
   "subcategories": [
    "道後温泉本館（重要文化財）"
   ],
   "summary": "松山市の温泉地。シンボルの道後温泉本館は平成6年12月に公衆浴場として初めて国の重要文化財に指定され、平成31年1月から始まった保存修理工事が令和6年12月に完了した。",
   "key_facts": [
    "愛媛県松山市。道後温泉本館は平成6年12月27日、公衆浴場として初めて国の重要文化財に指定",
    "本館の保存修理工事: 平成31年1月〜令和6年12月 完了",
    "別館 飛鳥乃湯泉、椿の湯"
   ],
   "confusion_points": [
    "有馬温泉（兵庫）・白浜温泉（和歌山）など他県の温泉と混同しない",
    "松山＝愛媛県（高松＝香川県）"
   ],
   "attention_points": [
    {
     "point": "愛媛県松山市",
     "note": "松山と高松を混同しない"
    },
    {
     "point": "本館は重要文化財",
     "note": "保存修理は令和6年12月完了"
    }
   ],
   "memory_hook": "「道後の本館、松山（愛媛）」。",
   "quiz_hint": "愛媛県の県庁所在地にある温泉地。本館は公衆浴場として初めて重要文化財に指定され、令和6年に保存修理が完了した。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [],
   "confusable_ids": [
    "konpira",
    "naruto"
   ],
   "exam_priority": "B",
   "past_exam_links": [
    {
     "set_id": "anta-r04",
     "question_id": "anta-r04-q3_7_2",
     "label": "R4 ７．(2)",
     "relation": "RELATED_CONTEXT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "松山市",
     "title": "道後温泉本館等への評価（松山市公式）",
     "url": "https://www.city.matsuyama.ehime.jp/kanko/kankoguide/kankomeisho/dogoonsen/honkan/rekishihudo.html",
     "level": 1,
     "date": "2026-09-09 取得",
     "id": "dogo-s1"
    },
    {
     "authority": "道後温泉公式サイト（指定管理者 道後温泉コンソーシアム）",
     "title": "【公式サイト】道後温泉",
     "url": "https://dogo.jp/",
     "level": 2,
     "date": "2026-09-09 取得",
     "id": "dogo-s2"
    }
   ]
  },
  {
   "resource_id": "naruto",
   "name": "鳴門の渦潮",
   "reading": "なるとのうずしお",
   "prefectures": [
    "徳島県"
   ],
   "municipalities": [
    "鳴門市"
   ],
   "region": "四国",
   "categories": [
    "OTHER"
   ],
   "subcategories": [
    "瀬戸内海国立公園",
    "海峡"
   ],
   "summary": "徳島県鳴門市、鳴門海峡の潮流が生む渦潮。大鳴門橋の橋桁内に設けられた遊歩道「渦の道」から真下に渦潮を見られる。瀬戸内海国立公園（日本で最初の国立公園の一つ）の一部。",
   "key_facts": [
    "徳島県鳴門市（鳴門公園）。大鳴門橋遊歩道「渦の道」",
    "瀬戸内海国立公園は昭和9年（1934）に雲仙・霧島とともに日本で最初に指定された国立公園。1府10県にまたがる最も広い国立公園",
    "明石・紀淡・鳴門・関門・豊予の5つの海峡に囲まれた海域"
   ],
   "confusion_points": [
    "大鳴門橋（徳島—淡路島）と 明石海峡大橋（淡路島—兵庫）を混同しない",
    "鳴門市は徳島県（香川県ではない）"
   ],
   "attention_points": [
    {
     "point": "徳島県鳴門市",
     "note": "渦の道＝大鳴門橋の遊歩道"
    },
    {
     "point": "瀬戸内海国立公園は最初の国立公園（1934年）",
     "note": "雲仙・霧島と同時"
    }
   ],
   "memory_hook": "「渦潮は徳島・鳴門、橋は大鳴門橋」。",
   "quiz_hint": "徳島県の海峡に発生する渦潮。橋の橋桁内の遊歩道から真下に見られ、日本で最初に指定された国立公園の一部。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "quiz_a_exclude_prefectures": [
    "兵庫県"
   ],
   "designation_relations": [
    {
     "id": "setonaikai_np",
     "type": "NATIONAL_PARK",
     "name": "瀬戸内海国立公園",
     "relation": "WITHIN",
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
     "source_ids": [
      "naruto-s3"
     ],
     "note": "1府10県にまたがる最も広い国立公園。鳴門の渦潮は徳島県側の鳴門公園"
    }
   ],
   "confusable_ids": [
    "dogo",
    "konpira",
    "itsukushima"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r06",
     "question_id": "anta-r06-q75",
     "label": "R6 問75",
     "relation": "RELATED_CONTEXT"
    },
    {
     "set_id": "anta-r04",
     "question_id": "anta-r04-q3_9_1",
     "label": "R4 ９．(1)",
     "relation": "RELATED_CONTEXT"
    },
    {
     "set_id": "anta-r03",
     "question_id": "anta-r03-q3_5_1",
     "label": "R3 ５．(1)",
     "relation": "RELATED_CONTEXT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "環境省",
     "title": "瀬戸内海国立公園",
     "url": "https://www.env.go.jp/nature/nationalparks/list/setonaikai/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "naruto-s1"
    },
    {
     "authority": "大鳴門橋遊歩道 渦の道",
     "title": "渦の道 公式サイト",
     "url": "https://www.uzunomichi.jp/",
     "level": 2,
     "date": "2026-09-08 取得",
     "id": "naruto-s2"
    },
    {
     "id": "naruto-s3",
     "authority": "環境省",
     "title": "瀬戸内海国立公園 概要・計画書（1府10県）",
     "url": "https://www.env.go.jp/park/setonaikai/intro/",
     "level": 1,
     "date": "2026-09-09 取得"
    }
   ]
  },
  {
   "resource_id": "yakushima",
   "name": "屋久島",
   "reading": "やくしま",
   "prefectures": [
    "鹿児島県"
   ],
   "municipalities": [
    "屋久島町"
   ],
   "region": "九州・沖縄",
   "categories": [
    "WORLD_HERITAGE",
    "MOUNTAIN_HIGHLAND"
   ],
   "subcategories": [
    "世界自然遺産",
    "屋久島国立公園",
    "縄文杉"
   ],
   "summary": "鹿児島県の島。1993年（平成5年）に白神山地とともに日本初の世界自然遺産に登録。縄文杉への登山などエコツーリズムの島で、屋久島国立公園。",
   "key_facts": [
    "世界自然遺産（平成5年 登録。白神山地と同年）。鹿児島県熊毛郡屋久島町",
    "屋久島国立公園。縄文杉登山、ウミガメ（永田浜）などのエコツーリズム",
    "屋久島世界遺産センター（環境省、安房）"
   ],
   "confusion_points": [
    "奄美大島・徳之島・沖縄島北部及び西表島（2021年）と自然遺産を混同しない",
    "種子島（ロケット）は隣の島"
   ],
   "attention_points": [
    {
     "point": "1993年 最初の自然遺産",
     "note": "白神山地と同年"
    },
    {
     "point": "鹿児島県屋久島町",
     "note": "縄文杉・国立公園"
    }
   ],
   "memory_hook": "「屋久島は杉、白神はブナ」。",
   "quiz_hint": "鹿児島県の島で、1993年に白神山地とともに日本初の世界自然遺産に登録。縄文杉で知られる国立公園。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "yakushima_wh",
     "type": "WORLD_HERITAGE",
     "name": "屋久島",
     "relation": "RELATED_TO",
     "prefectures": [
      "鹿児島県"
     ],
     "source_ids": [
      "yakushima-s1"
     ],
     "note": "世界遺産区域は島の一部"
    },
    {
     "id": "yakushima_np",
     "type": "NATIONAL_PARK",
     "name": "屋久島国立公園",
     "relation": "RELATED_TO",
     "prefectures": [
      "鹿児島県"
     ],
     "source_ids": [
      "yakushima-s2"
     ]
    }
   ],
   "confusable_ids": [
    "shirakami",
    "shiretoko",
    "shuri"
   ],
   "exam_priority": "A",
   "past_exam_links": [],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "yakushima-s1"
    },
    {
     "authority": "環境省 屋久島世界遺産センター",
     "title": "屋久島世界遺産センター",
     "url": "https://www.env.go.jp/park/yakushima/ywhcc/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "yakushima-s2"
    }
   ]
  },
  {
   "resource_id": "shuri",
   "name": "首里城跡",
   "reading": "しゅりじょうあと",
   "prefectures": [
    "沖縄県"
   ],
   "municipalities": [],
   "region": "九州・沖縄",
   "categories": [
    "WORLD_HERITAGE",
    "CASTLE",
    "HISTORIC_DISTRICT"
   ],
   "subcategories": [
    "世界文化遺産",
    "グスク"
   ],
   "summary": "琉球王国の王城。2000年（平成12年）に「琉球王国のグスク及び関連遺産群」として世界文化遺産に登録（世界遺産の対象は首里城跡）。首里城公園として正殿などを公開。",
   "key_facts": [
    "世界文化遺産（平成12年 登録）「琉球王国のグスク及び関連遺産群」。沖縄県",
    "首里城公園（正殿・白銀門・寝廟殿など）。世界遺産としての首里城は「首里城跡」",
    "琉球王国の歴史・文化を伝える"
   ],
   "confusion_points": [
    "世界遺産の登録対象は「跡」（遺構）で、復元建物そのものではない",
    "姫路城（国宝・世界遺産）と「城」つながりで混同しない"
   ],
   "attention_points": [
    {
     "point": "2000年（平成12年）",
     "note": "琉球王国のグスク及び関連遺産群"
    },
    {
     "point": "世界遺産は首里城跡",
     "note": "復元された正殿は対象外"
    }
   ],
   "memory_hook": "「グスクは2000年、首里城は跡が遺産」。",
   "quiz_hint": "琉球王国の王城で、2000年にグスク及び関連遺産群として世界文化遺産に登録された（登録対象は城跡）。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "ryukyu_wh",
     "type": "WORLD_HERITAGE",
     "name": "琉球王国のグスク及び関連遺産群",
     "relation": "COMPONENT_OF",
     "prefectures": [
      "沖縄県"
     ],
     "source_ids": [
      "shuri-s1",
      "shuri-s2"
     ]
    }
   ],
   "confusable_ids": [
    "himeji",
    "yakushima"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r07",
     "question_id": "anta-r07-q72",
     "label": "R7 問72",
     "relation": "DIRECT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "文化庁",
     "title": "日本の世界遺産一覧",
     "url": "https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "shuri-s1"
    },
    {
     "authority": "沖縄県",
     "title": "首里城跡（沖縄の世界遺産）",
     "url": "https://www.pref.okinawa.jp/kyoiku/kodomo/1002688/1002695/1002697.html",
     "level": 1,
     "date": "2026-09-09 取得",
     "id": "shuri-s2"
    },
    {
     "authority": "首里城公園（沖縄美ら島財団）",
     "title": "首里城 ‐ 琉球王国の栄華を物語る 世界遺産 首里城",
     "url": "https://oki-park.jp/shurijo/",
     "level": 2,
     "date": "2026-09-08 取得",
     "id": "shuri-s3"
    }
   ]
  },
  {
   "resource_id": "aso",
   "name": "阿蘇山",
   "reading": "あそさん",
   "prefectures": [
    "熊本県"
   ],
   "municipalities": [],
   "region": "九州・沖縄",
   "categories": [
    "MOUNTAIN_HIGHLAND"
   ],
   "subcategories": [
    "カルデラ",
    "火山"
   ],
   "summary": "大カルデラにそびえる阿蘇山（噴煙を上げる中岳火口、米塚、草千里ヶ浜）と、北に連なるくじゅう連山、周囲の草原からなる阿蘇くじゅう国立公園（昭和9年 指定）。",
   "key_facts": [
    "阿蘇くじゅう国立公園（昭和9年12月4日 指定）。熊本県・大分県",
    "阿蘇山: 中岳火口、米塚（円錐形）、草千里ヶ浜、火口原と外輪山",
    "くじゅう連山: 久住高原・飯田高原の草原、タデ原湿原・坊ガツル湿原"
   ],
   "confusion_points": [
    "雲仙（長崎、雲仙天草国立公園）と九州の火山で混同しない",
    "霧島（鹿児島・宮崎、霧島錦江湾国立公園）とも別"
   ],
   "attention_points": [
    {
     "point": "阿蘇（熊本）／くじゅう（大分）",
     "note": "一つの国立公園"
    },
    {
     "point": "カルデラ・中岳・草千里",
     "note": "外輪山に囲まれた火口原"
    }
   ],
   "memory_hook": "「阿蘇は熊本、くじゅうは大分」。九州の火山は 阿蘇・雲仙・霧島 で県を分ける。",
   "quiz_hint": "大カルデラの中に噴煙を上げる火口や草千里ヶ浜があり、北に連なる連山とともに昭和9年指定の国立公園をなす熊本県の山。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "aso_np",
     "type": "NATIONAL_PARK",
     "name": "阿蘇くじゅう国立公園",
     "relation": "WITHIN",
     "prefectures": [
      "熊本県",
      "大分県"
     ],
     "source_ids": [
      "aso-s2"
     ],
     "note": "公園はくじゅう連山（大分県）を含む2県だが、阿蘇山は熊本県"
    }
   ],
   "confusable_ids": [
    "unzen",
    "daisen",
    "toya"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r07",
     "question_id": "anta-r07-q75",
     "label": "R7 問75",
     "relation": "DIRECT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "環境省",
     "title": "阿蘇くじゅう国立公園",
     "url": "https://www.env.go.jp/nature/nationalparks/list/aso-kuju/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "aso-s1"
    },
    {
     "authority": "環境省",
     "title": "阿蘇くじゅう国立公園 概要・計画書",
     "url": "https://www.env.go.jp/park/aso/intro/",
     "level": 1,
     "date": "2026-09-09 取得",
     "id": "aso-s2"
    }
   ]
  },
  {
   "resource_id": "udo",
   "name": "鵜戸神宮",
   "reading": "うどじんぐう",
   "prefectures": [
    "宮崎県"
   ],
   "municipalities": [
    "日南市"
   ],
   "region": "九州・沖縄",
   "categories": [
    "TEMPLE_SHRINE"
   ],
   "subcategories": [
    "洞窟の本殿",
    "日南海岸"
   ],
   "summary": "宮崎県日南市、日向灘に面した鵜戸崎の岩屋（洞窟）の中に本殿がある神社。石段を下って参拝する。運玉投げやシャンシャン馬で知られる。",
   "key_facts": [
    "宮崎県日南市。日南海岸",
    "本殿は日向灘に面した鵜戸崎の岩屋内。県指定有形文化財（建造物、平成7年3月指定）",
    "運玉投げ、シャンシャン馬（婚礼の風習）"
   ],
   "confusion_points": [
    "金刀比羅宮（香川、石段を登る）とは逆に石段を下って参拝する",
    "青島（宮崎市）と同じ日南海岸の名所"
   ],
   "attention_points": [
    {
     "point": "宮崎県日南市",
     "note": "日南海岸"
    },
    {
     "point": "洞窟（岩屋）の本殿",
     "note": "石段を下る"
    }
   ],
   "memory_hook": "「洞窟の本殿は鵜戸（宮崎）」。石段を登るのはこんぴら、下るのは鵜戸。",
   "quiz_hint": "宮崎県の日南海岸、海に面した洞窟の中に本殿がある神社。運玉投げの風習で知られる。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [],
   "confusable_ids": [
    "konpira",
    "itsukushima",
    "aso"
   ],
   "exam_priority": "B",
   "past_exam_links": [
    {
     "set_id": "anta-r07",
     "question_id": "anta-r07-q63",
     "label": "R7 問63",
     "relation": "RELATED_CONTEXT"
    },
    {
     "set_id": "anta-r05",
     "question_id": "anta-r05-q3_8_4",
     "label": "R5 ８．(4)",
     "relation": "RELATED_CONTEXT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "鵜戸神宮",
     "title": "鵜戸神宮（公式）",
     "url": "http://www.udojingu.or.jp/",
     "level": 2,
     "date": "2026-09-08 取得",
     "id": "udo-s1"
    },
    {
     "authority": "日南市",
     "title": "日南市文化遺産ミュージアム「鵜戸神宮本殿」",
     "url": "https://www.city.nichinan.lg.jp/museum/kennshiteibunnkazai/kennzoubutsu_sekizoubutsu/3/4068.html",
     "level": 1,
     "date": "2023-12-01 更新",
     "id": "udo-s2"
    }
   ]
  },
  {
   "resource_id": "unzen",
   "name": "雲仙・仁田峠",
   "reading": "うんぜん・にたとうげ",
   "prefectures": [
    "長崎県"
   ],
   "municipalities": [],
   "region": "九州・沖縄",
   "categories": [
    "MOUNTAIN_HIGHLAND",
    "HOT_SPRING"
   ],
   "subcategories": [
    "雲仙普賢岳・平成新山",
    "ミヤマキリシマ・紅葉"
   ],
   "summary": "長崎県の雲仙岳（普賢岳・平成新山）と雲仙温泉、天草（熊本県）などからなる雲仙天草国立公園の中心。仁田峠は紅葉や霧氷、ミヤマキリシマの見どころ。昭和9年に日本で最初に指定された国立公園の一つ。",
   "key_facts": [
    "雲仙天草国立公園（昭和9年 雲仙国立公園として指定。瀬戸内海・霧島と同時の最初の国立公園）。長崎県・熊本県（天草）と鹿児島県の一部",
    "見どころ: 雲仙普賢岳・平成新山、雲仙地獄、ミヤマキリシマ（池の原園地）、紅葉（仁田峠）",
    "雲仙温泉"
   ],
   "confusion_points": [
    "峠の出題: 発荷峠（秋田）、鍵掛峠（鳥取）、狩勝峠（北海道）と区別",
    "阿蘇（熊本）と九州の火山で混同しない"
   ],
   "attention_points": [
    {
     "point": "仁田峠＝長崎県（雲仙）",
     "note": "紅葉・ミヤマキリシマ"
    },
    {
     "point": "最初の国立公園（1934年）",
     "note": "雲仙・霧島・瀬戸内海"
    }
   ],
   "memory_hook": "「仁田峠は雲仙（長崎）」。1934年の最初の国立公園は 雲仙・霧島・瀬戸内海。",
   "quiz_hint": "長崎県の火山と温泉を中心に熊本県の島々を含む国立公園。紅葉やミヤマキリシマで知られる峠があり、日本で最初に指定された国立公園の一つ。",
   "quiz_a": {
    "scope": "RESOURCE"
   },
   "designation_relations": [
    {
     "id": "unzen_np",
     "type": "NATIONAL_PARK",
     "name": "雲仙天草国立公園",
     "relation": "WITHIN",
     "prefectures": [
      "長崎県",
      "熊本県",
      "鹿児島県"
     ],
     "source_ids": [
      "unzen-s3"
     ],
     "note": "公園は天草地域（熊本県、一部鹿児島県）を含むが、雲仙・仁田峠は長崎県"
    }
   ],
   "confusable_ids": [
    "aso",
    "daisen",
    "towada"
   ],
   "exam_priority": "A",
   "past_exam_links": [
    {
     "set_id": "anta-r07",
     "question_id": "anta-r07-q75",
     "label": "R7 問75",
     "relation": "RELATED_CONTEXT"
    },
    {
     "set_id": "anta-r05",
     "question_id": "anta-r05-q3_5_2",
     "label": "R5 ５．(2)",
     "relation": "RELATED_CONTEXT"
    }
   ],
   "hot_2026": false,
   "current_2026_note": null,
   "sources": [
    {
     "authority": "環境省",
     "title": "雲仙天草国立公園",
     "url": "https://www.env.go.jp/nature/nationalparks/list/unzen-amakusa/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "unzen-s1"
    },
    {
     "authority": "環境省",
     "title": "雲仙天草国立公園 見どころ・施設",
     "url": "https://www.env.go.jp/nature/nationalparks/list/unzen-amakusa/spot/",
     "level": 1,
     "date": "2026-09-08 取得",
     "id": "unzen-s2"
    },
    {
     "id": "unzen-s3",
     "authority": "環境省",
     "title": "雲仙天草国立公園 概要・計画書（長崎県・熊本県・鹿児島県）",
     "url": "https://www.env.go.jp/park/unzen/intro/",
     "level": 1,
     "date": "2026-09-09 取得"
    }
   ]
  }
 ],
 "location_contract": {
  "prefectures": "RESOURCE SCOPE: 名称が指す資源そのものの所在都道府県（複数県にまたがる場合はすべて）。指定区域（国立公園等）の範囲は含めない",
  "municipalities": "公式資料で確認できた市町村のみ。未確認は空配列",
  "quiz_a": "scope = RESOURCE（resource.prefectures を採点）または DESIGNATION:<designation id>（該当 designation_relations.prefectures を採点）",
  "quiz_a_exclude_prefectures": "クイズAの誤答候補から除外する都道府県（境界が接する県、関連指定区域の県など誤答として不適切なもの）",
  "designation_relations": "DESIGNATION SCOPE: 資源が属する／関係する国立公園・世界遺産・ラムサール等。type / name / relation（IDENTICAL, WITHIN, COMPONENT_OF, OVERLAPS, RELATED_TO）/ prefectures（その指定自体の公式 source に基づく）/ source_ids（sources[].id）"
 },
 "past_exam_relation": {
  "DIRECT": "資源そのもの（名称・構成要素）が正答または出題対象",
  "RELATED_CONTEXT": "誤答選択肢・同一資料内・隣接資源など学習上関連があるが資源自体の出題ではない"
 }
};
