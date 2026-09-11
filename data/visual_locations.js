// Geography Study visual locations (TASK-012H). Study-purpose representative points for the real-map view.
// Separate from the factual data in resources.js; NEVER used for quiz grading. Coordinates were obtained from the
// 国土地理院 地理院地図 住所検索API (地名 / 公共施設データ) on 2026-09-09 (raw responses kept in the task scratch record).
// Points are representative spots, not designation boundaries.
window.GEO_VISUAL_LOCATIONS = {
 "version": "0.17.0",
 "rights": "HOLAVEL_ORIGINAL metadata; coordinates from 国土地理院 地理院地図 住所検索API（地名・公共施設データ）",
 "purpose": "実地図（地理院タイル）上の学習用代表地点。Quiz A の採点には使わない（採点は resource.prefectures / designation scope のみ）。role: REPRESENTATIVE=資源を代表する地点 / LANDMARK=資源そのものである建造物・史跡 / VIEWPOINT=資源（自然現象等）を見るための代表的な地点",
 "point_roles": [
  "REPRESENTATIVE",
  "LANDMARK",
  "VIEWPOINT"
 ],
 "required_point_fields": [
  "id",
  "label",
  "lat",
  "lon",
  "role",
  "source_url",
  "source_authority",
  "verified_at"
 ],
 "resources": [
  {
   "resource_id": "shiretoko",
   "map_points": [
    {
     "id": "羅臼岳",
     "label": "羅臼岳",
     "lat": 44.07568,
     "lon": 145.12224,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%BE%85%E8%87%BC%E5%B2%B3",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "知床五湖",
     "label": "知床五湖",
     "lat": 44.12318,
     "lon": 145.08324,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%9F%A5%E5%BA%8A%E4%BA%94%E6%B9%96",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "知床岬",
     "label": "知床岬",
     "lat": 44.34509,
     "lon": 145.32975,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%9F%A5%E5%BA%8A%E5%B2%AC",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    }
   ],
   "preferred_view": {
    "zoom": 9
   },
   "note": "知床半島（オホーツク海側）の代表 3 地点。世界遺産・国立公園の境界ではない"
  },
  {
   "resource_id": "akan",
   "map_points": [
    {
     "id": "阿寒湖",
     "label": "阿寒湖",
     "lat": 43.4526,
     "lon": 144.09519,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%98%BF%E5%AF%92%E6%B9%96",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "摩周湖",
     "label": "摩周湖",
     "lat": 43.58235,
     "lon": 144.53149,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%91%A9%E5%91%A8%E6%B9%96",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "屈斜路湖",
     "label": "屈斜路湖",
     "lat": 43.62954,
     "lon": 144.32853,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%B1%88%E6%96%9C%E8%B7%AF%E6%B9%96",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    }
   ],
   "preferred_view": {
    "zoom": 10
   },
   "note": "道東の 3 つのカルデラ湖"
  },
  {
   "resource_id": "shirakami",
   "map_points": [
    {
     "id": "白神岳",
     "label": "白神岳",
     "lat": 40.50367,
     "lon": 140.01866,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%99%BD%E7%A5%9E%E5%B2%B3",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "白神山地",
     "label": "白神山地",
     "lat": 40.44552,
     "lon": 140.22677,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%99%BD%E7%A5%9E%E5%B1%B1%E5%9C%B0",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    }
   ],
   "preferred_view": {
    "zoom": 10
   },
   "note": "白神岳（青森県側）と山地中心付近。世界遺産区域の境界ではない"
  },
  {
   "resource_id": "towada",
   "map_points": [
    {
     "id": "十和田湖",
     "label": "十和田湖",
     "lat": 40.46596,
     "lon": 140.88134,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%8D%81%E5%92%8C%E7%94%B0%E6%B9%96",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "発荷峠",
     "label": "発荷峠",
     "lat": 40.40605,
     "lon": 140.86528,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%99%BA%E8%8D%B7%E5%B3%A0",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "十和田湖（湖心付近）と発荷峠（秋田県小坂町）"
  },
  {
   "resource_id": "oze",
   "map_points": [
    {
     "id": "尾瀬ヶ原",
     "label": "尾瀬ヶ原",
     "lat": 36.93267,
     "lon": 139.22982,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%B0%BE%E7%80%AC%E3%83%B6%E5%8E%9F",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "尾瀬沼",
     "label": "尾瀬沼",
     "lat": 36.9278,
     "lon": 139.30667,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%B0%BE%E7%80%AC%E6%B2%BC",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "至仏山",
     "label": "至仏山",
     "lat": 36.9035,
     "lon": 139.17322,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E8%87%B3%E4%BB%8F%E5%B1%B1",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "燧ヶ岳",
     "label": "燧ヶ岳",
     "lat": 36.95312,
     "lon": 139.28848,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%87%A7%E3%83%B6%E5%B2%B3",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "学習用代表地点。ラムサール湿地・国立公園の境界ではない"
  },
  {
   "resource_id": "fuji",
   "map_points": [
    {
     "id": "富士山",
     "label": "富士山",
     "lat": 35.3628,
     "lon": 138.73078,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%AF%8C%E5%A3%AB%E5%B1%B1",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    }
   ],
   "preferred_view": {
    "zoom": 9
   },
   "note": "山頂付近の地名点。山梨・静岡県境"
  },
  {
   "resource_id": "kamikochi",
   "map_points": [
    {
     "id": "河童橋",
     "label": "河童橋",
     "lat": 36.24865,
     "lon": 137.63782,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%B2%B3%E7%AB%A5%E6%A9%8B",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "大正池",
     "label": "大正池",
     "lat": 36.22968,
     "lon": 137.61918,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%A4%A7%E6%AD%A3%E6%B1%A0",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    }
   ],
   "preferred_view": {
    "zoom": 12
   },
   "note": "梓川沿いの代表地点"
  },
  {
   "resource_id": "kumano",
   "map_points": [
    {
     "id": "熊野本宮大社",
     "label": "熊野本宮大社",
     "lat": 33.84344,
     "lon": 135.7734,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%86%8A%E9%87%8E%E6%9C%AC%E5%AE%AE%E5%A4%A7%E7%A4%BE",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "熊野速玉大社",
     "label": "熊野速玉大社",
     "lat": 33.73522,
     "lon": 135.98353,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%86%8A%E9%87%8E%E9%80%9F%E7%8E%89%E5%A4%A7%E7%A4%BE",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "熊野那智大社",
     "label": "熊野那智大社",
     "lat": 33.66865,
     "lon": 135.89009,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%86%8A%E9%87%8E%E9%82%A3%E6%99%BA%E5%A4%A7%E7%A4%BE",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "高野山（金剛峯寺）",
     "label": "高野山（金剛峯寺）",
     "lat": 34.21608,
     "lon": 135.5843,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%87%91%E5%89%9B%E5%B3%AF%E5%AF%BA",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "吉野山",
     "label": "吉野山",
     "lat": 34.34527,
     "lon": 135.8823,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%90%89%E9%87%8E%E5%B1%B1",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    }
   ],
   "preferred_view": {
    "zoom": 9
   },
   "note": "三つの霊場の代表地点。参詣道・世界遺産区域の境界ではない"
  },
  {
   "resource_id": "aso",
   "map_points": [
    {
     "id": "阿蘇山",
     "label": "阿蘇山",
     "lat": 32.88797,
     "lon": 131.08331,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%98%BF%E8%98%87%E5%B1%B1",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "草千里ヶ浜",
     "label": "草千里ヶ浜",
     "lat": 32.88221,
     "lon": 131.05346,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E8%8D%89%E5%8D%83%E9%87%8C%E3%83%B6%E6%B5%9C",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "阿蘇山（中岳・高岳付近の地名点）と草千里ヶ浜。国立公園の境界ではない"
  },
  {
   "resource_id": "unzen",
   "map_points": [
    {
     "id": "普賢岳",
     "label": "普賢岳",
     "lat": 32.75983,
     "lon": 130.29226,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%99%AE%E8%B3%A2%E5%B2%B3",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "平成新山",
     "label": "平成新山",
     "lat": 32.76125,
     "lon": 130.2989,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%B9%B3%E6%88%90%E6%96%B0%E5%B1%B1",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    },
    {
     "id": "仁田峠",
     "label": "仁田峠",
     "lat": 32.75115,
     "lon": 130.28344,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E4%BB%81%E7%94%B0%E5%B3%A0",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-09"
    }
   ],
   "preferred_view": {
    "zoom": 12
   },
   "note": "雲仙岳の代表地点。国立公園の境界ではない"
  },
  {
   "resource_id": "himeji",
   "map_points": [
    {
     "id": "姫路城",
     "label": "姫路城",
     "lat": 34.83753,
     "lon": 134.69094,
     "role": "LANDMARK",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%A7%AB%E8%B7%AF%E5%9F%8E",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-10",
     "note": "地理院地図の地名「姫路城跡(特)」（姫路市, addressCode 28201）の地点"
    }
   ],
   "preferred_view": {
    "zoom": 10
   },
   "note": "姫路市中心部の城跡の代表地点。世界遺産の登録範囲を示すものではない"
  },
  {
   "resource_id": "dogo",
   "map_points": [
    {
     "id": "道後温泉本館",
     "label": "道後温泉本館",
     "lat": 33.85211,
     "lon": 132.78619,
     "role": "LANDMARK",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E6%9D%BE%E5%B1%B1%E5%B8%82%E9%81%93%E5%BE%8C%E6%B9%AF%E4%B9%8B%E7%94%BA5-6",
     "source_authority": "国土地理院（地理院地図 住所検索API 住所ジオコーディング）／住所は道後温泉公式サイト（松山市 指定管理者 道後温泉コンソーシアム）https://dogo.jp/",
     "verified_at": "2026-09-10",
     "note": "公式サイト記載の所在地「愛媛県松山市道後湯之町5番6号」を地理院地図でジオコーディングした地点"
    }
   ],
   "preferred_view": {
    "zoom": 10
   },
   "note": "温泉地「道後温泉」全体ではなく、写真と同じ道後温泉本館の代表地点"
  },
  {
   "resource_id": "naruto",
   "map_points": [
    {
     "id": "大鳴門橋",
     "label": "大鳴門橋（渦の道）",
     "lat": 34.23881,
     "lon": 134.64982,
     "role": "VIEWPOINT",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%A4%A7%E9%B3%B4%E9%96%80%E6%A9%8B",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-10",
     "note": "地理院地図の地名「大鳴門橋」（鳴門市, addressCode 36202）。橋桁内の遊歩道「渦の道」（鳴門公園内・徳島県鳴門市鳴門町土佐泊浦字福池65）はこの橋の中にある"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "渦潮は潮流により生じる自然現象で固定位置を持たないため、渦潮の座標ではなく代表的な観潮地点（大鳴門橋・渦の道）を表示している"
  },
  {
   "resource_id": "tomioka",
   "map_points": [
    {
     "id": "富岡製糸場",
     "label": "富岡製糸場",
     "lat": 36.25539,
     "lon": 138.8877,
     "role": "LANDMARK",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E7%BE%A4%E9%A6%AC%E7%9C%8C%E5%AF%8C%E5%B2%A1%E5%B8%82%E5%AF%8C%E5%B2%A11-1",
     "source_authority": "国土地理院（地理院地図 住所検索API 住所ジオコーディング）／住所は富岡製糸場公式サイト https://www.tomioka-silk.jp/",
     "verified_at": "2026-09-11",
     "note": "公式サイト記載の所在地「群馬県富岡市富岡１番地１」を地理院地図でジオコーディングした地点（逆ジオコーダ: 群馬県富岡市・富岡、muniCd 10210）"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "世界遺産「富岡製糸場と絹産業遺産群」の構成資産のうち富岡製糸場の代表地点。登録範囲を示すものではない"
  },
  {
   "resource_id": "kenrokuen",
   "map_points": [
    {
     "id": "兼六園",
     "label": "兼六園",
     "lat": 36.56243,
     "lon": 136.66086,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%85%BC%E5%85%AD%E5%9C%92",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-11",
     "note": "地理院地図の地名「兼六園（特）」（金沢市, addressCode 17201）の地点。逆ジオコーダの町名は「兼六町」で、文化庁 国指定文化財等データベースの特別名勝「兼六園」の所在地「石川県 金沢市 兼六町」と一致する"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "特別名勝の庭園全体ではなく園の代表地点"
  },
  {
   "resource_id": "kiyomizu",
   "map_points": [
    {
     "id": "清水寺",
     "label": "清水寺",
     "lat": 34.99588,
     "lon": 135.78314,
     "role": "LANDMARK",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E4%BA%AC%E9%83%BD%E5%BA%9C%E4%BA%AC%E9%83%BD%E5%B8%82%E6%9D%B1%E5%B1%B1%E5%8C%BA%E6%B8%85%E6%B0%B41%E4%B8%81%E7%9B%AE294",
     "source_authority": "国土地理院（地理院地図 住所検索API 住所ジオコーディング）／住所は清水寺公式サイト（交通アクセス） https://www.kiyomizudera.or.jp/access/",
     "verified_at": "2026-09-11",
     "note": "公式サイト記載の所在地「京都市東山区清水1丁目294」を地理院地図でジオコーディングした地点（逆ジオコーダ: 京都府京都市東山区・清水一丁目、muniCd 26105）"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "世界遺産「古都京都の文化財」の構成資産 清水寺の代表地点。登録範囲を示すものではない"
  },
  {
   "resource_id": "todaiji",
   "map_points": [
    {
     "id": "東大寺",
     "label": "東大寺",
     "lat": 34.68615,
     "lon": 135.83814,
     "role": "REPRESENTATIVE",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%A5%88%E8%89%AF%E7%9C%8C%E5%A5%88%E8%89%AF%E5%B8%82%E9%9B%91%E5%8F%B8%E7%94%BA406-1",
     "source_authority": "国土地理院（地理院地図 住所検索API 住所ジオコーディング）／住所は東大寺公式サイト（交通アクセス） https://www.todaiji.or.jp/access/",
     "verified_at": "2026-09-11",
     "note": "公式サイト記載の東大寺寺務所の所在地「奈良市雑司町406-1」を地理院地図でジオコーディングした地点（逆ジオコーダ: 奈良県奈良市・雑司町、muniCd 29201）。大仏殿そのものの座標ではなく境内の代表地点"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "世界遺産「古都奈良の文化財」の構成資産 東大寺の代表地点。伽藍全体の範囲を示すものではない"
  },
  {
   "resource_id": "itsukushima",
   "map_points": [
    {
     "id": "厳島神社",
     "label": "厳島神社",
     "lat": 34.29578,
     "lon": 132.31987,
     "role": "LANDMARK",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%8E%B3%E5%B3%B6%E7%A5%9E%E7%A4%BE",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-11",
     "note": "地理院地図の地名「厳島神社」（廿日市市, addressCode 34213）の地点。同名の別地物（香川県 37203 / 兵庫県 28205）とは市区町村コードで区別し、公式サイト記載の所在地「広島県廿日市市宮島町１－１」と市区町村が一致する（社殿は海上にあり逆ジオコーダは街区を返さないため、隣接する「厳島神社宝物館」点で 宮島町 を確認）"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "世界遺産「厳島神社」の社殿の代表地点。登録範囲（前面の海域・弥山原始林等）を示すものではない"
  },
  {
   "resource_id": "genbaku_dome",
   "map_points": [
    {
     "id": "原爆ドーム",
     "label": "原爆ドーム",
     "lat": 34.39548,
     "lon": 132.45367,
     "role": "LANDMARK",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E5%BA%83%E5%B3%B6%E7%9C%8C%E5%BA%83%E5%B3%B6%E5%B8%82%E4%B8%AD%E5%8C%BA%E5%A4%A7%E6%89%8B%E7%94%BA1-10",
     "source_authority": "国土地理院（地理院地図 住所検索API 住所ジオコーディング）／住所は文化庁 国指定文化財等データベース（特別史跡「原爆ドーム（旧広島県産業奨励館）」）と広島市公式サイト（平和記念公園）",
     "verified_at": "2026-09-11",
     "note": "文化庁 国指定文化財等データベースの所在地「広島県 広島市中区 大手町」と、広島市公式サイト記載の平和記念公園の住所「広島市中区中島町1及び大手町1-10」から、原爆ドーム側の街区「大手町一丁目10番」を地理院地図でジオコーディングした地点（逆ジオコーダ: 広島県広島市中区・大手町一丁目、muniCd 34101）"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "特別史跡・世界遺産「原爆ドーム」の代表地点。平和記念公園全体の範囲を示すものではない"
  },
  {
   "resource_id": "konpira",
   "map_points": [
    {
     "id": "金刀比羅宮",
     "label": "金刀比羅宮",
     "lat": 34.18404,
     "lon": 133.80641,
     "role": "LANDMARK",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%87%91%E5%88%80%E6%AF%94%E7%BE%85%E5%AE%AE",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-11",
     "note": "地理院地図の地名「金刀比羅宮」（琴平町, addressCode 37403）の地点。同名の別地物（三重県 24211）とは市区町村コードで区別し、公式サイト記載の所在地「香川県仲多度郡琴平町892-1」と市町村が一致する"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "象頭山の社地の代表地点。石段の起点（門前町）や奥社の位置を示すものではない"
  },
  {
   "resource_id": "udo",
   "map_points": [
    {
     "id": "鵜戸神宮",
     "label": "鵜戸神宮",
     "lat": 31.65049,
     "lon": 131.46682,
     "role": "LANDMARK",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%B5%9C%E6%88%B8%E7%A5%9E%E5%AE%AE",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-11",
     "note": "地理院地図の地名「鵜戸神宮」（日南市, addressCode 45204）の地点。逆ジオコーダの大字は「大字宮浦」で、公式サイト記載の所在地「宮崎県日南市大字宮浦3232番地」と一致する"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "日南海岸の岩窟内の本殿を含む神域の代表地点"
  },
  {
   "resource_id": "shuri",
   "map_points": [
    {
     "id": "首里城跡",
     "label": "首里城跡",
     "lat": 26.21665,
     "lon": 127.71837,
     "role": "LANDMARK",
     "source_url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E9%A6%96%E9%87%8C%E5%9F%8E",
     "source_authority": "国土地理院（地理院地図 住所検索API 地名・公共施設データ）",
     "verified_at": "2026-09-11",
     "note": "地理院地図の地名「首里城跡」（那覇市, addressCode 47201）の地点。文化庁 文化遺産オンラインの史跡「首里城跡」の所在地「沖縄県那覇市首里」と一致する"
    }
   ],
   "preferred_view": {
    "zoom": 11
   },
   "note": "世界遺産「琉球王国のグスク及び関連遺産群」の構成資産 首里城跡の代表地点。復元建造物の焼失前後の状態を示すものではない"
  }
 ]
};
