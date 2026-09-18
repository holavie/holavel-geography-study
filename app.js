// Geography Study v0.26.0 — 国内観光地理 DEEP 30 + LIGHTWEIGHT 70+n (no build, local first; Leaflet vendored locally).
// v0.26.0 (TASK-019A): 全国MAP の一番下に「歴史地図・参考」を追加した。外部サイト（TonbiWing）への通常のリンクだけで、
//   画像・DZI タイル・境界データは取り込まず、iframe / hotlink / proxy も使わない。Holavel 独自の歴史MAP は準備中の表示のみ。
//   教材データ（DEEP 30 / LIGHTWEIGHT / 実地点 58）は 1 件も変えていない。
// v0.25.0 (TASK-018G): 高速暗記の答え側に「別名」行を追加した。出すのは正本の verified_aliases（別名関係そのものを
//   公式資料または公式過去問本文で確認できたもの）だけで、確認できていない候補（alias_pending）は runtime に出さない。
//   表側（資源名）には別名を出さないので、答えを見る前に答えが漏れることはない。
// v0.24.0 (TASK-018B): LIGHTWEIGHT へ WAVE 2 の 43 件を追加（生成経路: tools/geography_broad_shallow_build.py）。
//   件数は data から数えて表示する。教材総数をコードに定数で書かない。DEEP 30 資源 58 地点は変更しない。
// v0.18.0 (TASK-013H): Broad-Shallow WAVE 1 V3 の LIGHTWEIGHT 70 件（data/broad_shallow.js）と Rapid Study Mode v0.1 を
// 追加。Rapid は DEEP 30 とは別レイヤーで、資源名 → 都道府県・カテゴリ・一言特徴だけを高速反復する。
//   pool: LIGHTWEIGHT のみ（v0.1 では DEEP を混ぜない）。写真 0 / 地図 0 / Quiz 採点対象外。
//   state: localStorage "holavel_geography_rapid_v1"（version 1）。DEEP の "holavel_geography_study_v2" は読み書きしない。
// v0.23.0 (TASK-017A): 全国MAP を実地図中心の画面にした。タブに入ると追加操作なしで地理院タイルの実地図が出て、
//   ジャンル・県を変えても地図 instance と背景タイルは作り直さず marker / ラベル / 一覧 / 選択パネルだけ差し替える。
//   カメラ（中心・縮尺）と選択中の資源はページセッション内だけで保持し、localStorage は増やさない。
//   県タイル図は「県別の教材分布」として折りたたみへ移動。state.nmap.points は旧 field として boolean のまま残す。
// v0.21.1 (TASK-014H1): Astra 独立監査の指摘 5 件を修正。(H1) 全国MAP の実地点地図に Card と同じ GSI 追加出所（ZL5〜8）を出す。
//   (M1) 保存 state の region / prefecture を own property だけで検証し、toString / constructor / __proto__ を弾く。
//   (M2) 全国MAP のフィルタ操作で focus が body へ落ちないよう、操作していた control へ再描画後に戻す。
//   (L1) Leaflet が無いときは空の地図枠を出さず、Card と同じ失敗理由を表示する。仕様拡張はしていない。
// v0.22.0 (TASK-015A): Exam Sprint との相互リンク。過去問の対応は resources.js の past_exam_links が唯一の正本で、
//   対応表を別データへ複製しない。Card の過去問欄を relation 付きの一覧にし、**ローカル環境のときだけ**
//   「この問題を解く →」（../exam-sprint/index.html?question=<id>）を出す。公開ホストでは件数表示のみでリンクを作らない。
//   受け口は ?resource=<resource_id> で、既知 ID に一致したときだけカードを開く（未知は無視）。
// v0.21.0 (TASK-014H): 第 4 モード「全国MAP」を追加。ジャンルは既存の categories[] をそのまま使い（新しい分類データ 0）、
//   LAYER 1 = 全資源（DEEP + LIGHTWEIGHT）の prefectures[] による都道府県単位の分布、LAYER 2 = visual_locations の 30 資源 58 点だけの実地点、
//   の 2 層に分けて精度差を明示する。県庁所在地・県の中心点・推定座標は作らない。外部 map SDK / API key も増やさない。
// v0.20.1 (TASK-014E): (1) 詳細カードの地図セクションに「Google Mapsで見る ↗」を追加。公式 Maps URL（api=1 の検索）への
//   外部リンクだけで、JavaScript API / Embed / Places / API key / 課金・新しい座標データは一切使わない。高速暗記には出さない。
//   (2) 画面下部に「過去問・他科目」を追加（index.html）。ANTA・JATA の公式ページへのリンクのみで、問題本文は持たない。
// v0.19.4 (TASK-014B): 高速暗記の答えに「全国のどこか（都道府県の俯瞰）」を追加。既存 locatorSVG をそのまま呼ぶだけで、
//   位置データ・座標・visual_locations・外部リクエストは 0。答えを見る前は details ごと生成しない（front の hint leak 契約）。
//   既定は閉じた状態。実地図（DEEP 13 資源 30 地点）とは別物で、実地点・座標は主張しない。
// v0.19.3 (TASK-013Z): 共通フィルタ sanitize の境界値を修正。category / priority / region / prefecture の判定を
//   「truthy か」から「有効な値そのものか」へ変え、0 / false / null / 欠損 / 配列 / オブジェクトも '' へ正規化する。
//   有効値と '' 以外を state に残さない。同期仕様（県を正として学習分類を合わせる）と wrongOnly / search は不変。
// v0.19.2 (TASK-013X): Codex ランタイムレビュー(TASK-013W)の MEDIUM 2 件を修正。(1) 高速暗記で action 後に pool が
//   縮むとき（「要復習のみ」で 知ってる）、古い pool のまま進めて次の 1 件を飛ばしていたのを、action 後の pool に
//   その資源が残っているかで一般判定するよう修正。(2) 共通フィルタの読み込み時 sanitize を カテゴリ・優先度・
//   誤答履歴・検索語へ拡張（選択肢に無い保存値で「すべて表示なのに 0 件」になるのを防ぐ）。データ変更なし。
// v0.19.1 (TASK-013U): 高速暗記の上部を圧縮。(1) ヘッダー統計は Rapid 中だけ資源数のみにし、知ってる／要復習は
//   進捗行（現在位置 / 件数 ＋ 知ってる ＋ 要復習）1 か所に集約する。カード／クイズのヘッダー統計は変更しない。
//   (2) front の注意書きを枠付きボックスから 1 行の控えめな注記へ縮小する（意味は維持、資源名とボタンより弱く）。
// v0.19.0 (TASK-013T1): カード／クイズの共通フィルタにも学習分類×都道府県の同期を入れた（Rapid の TASK-013J と同じ
//   考え方。state は Rapid と別のまま）。都道府県 select は常に 47 件で、県を選ぶとその県の学習分類へ自動同期し、
//   学習分類を変えたとき県がその分類外なら「すべて」に戻す。絞り込みは個別県を選んでいる間は県を正とし、学習分類で
//   二重に絞らない（尾瀬＝学習分類 関東／福島県・群馬県・新潟県 のような資源を取りこぼさないため）。保存 state の
//   矛盾（近畿＋栃木県 等）は読み込み時に県を正として補正する。一覧・カード・クイズの表示仕様そのものは変更なし。
// v0.18.9 (TASK-013S): 答えの metadata 重複整理。学習分類ラベルは、単一県資源でその県名と学習分類が同じ文字列に
//   なるとき（利用者から見て同じ情報になるとき）だけ省く。県名は一般条件で比較し、特定の県名をコードに書かない。
//   複数県資源では都道府県と学習分類が別情報なので必ず両方残す。data は変更しない（表示上の重複排除のみ）。
// v0.18.8 (TASK-013R): 答え表示後だけ「読みの補助」行を出す。data/broad_shallow.js の reading_terms（公式一次情報
//   または信頼できる国語辞典の完全一致見出しで確認済みの語のみ）を参照し、表示中の recognition_hook に term の完全な
//   文字列が含まれるものを 1 語 1 回だけ列挙する。本文は書き換えず、inline ruby 化も文字列置換もしない。読みは
//   runtime data からのみ取り、app.js にハードコードしない。未確定語は runtime に存在しないので出しようがない。
// v0.18.3 (TASK-013K): 高速暗記の間だけ共通フィルタを実際に非表示にする（hidden 属性は v0.18.0 から付けていたが
//   .filters{display:flex} が UA の [hidden]{display:none} に勝って見えたままだった。style.css 側で打ち消した）。
//   DOM は残すので Card / Quiz へ戻れば同じ共通フィルタが値を保ったまま再表示される。
// v0.18.2 (TASK-013J): Rapid の地域 × 都道府県を相互同期して「中国 + 熊本県」のような矛盾条件を作れなくした。
//   都道府県 select は常に 47 件（地域で候補を絞らない）。都道府県を選ぶとその県の地域へ自動同期し、絞り込みでも
//   都道府県を正とする（学習分類が別地方の複数県資源 —— 関門橋 = 中国分類/山口・福岡 —— を取りこぼさないため）。
//   地域を変えたとき、選択中の県がその地域外なら県を「すべて」に戻す。地域「全国」＋個別県は有効な組み合わせ。
//   保存済み state の矛盾も読み込み時に sanitize する（県があれば県を正）。
//   読み仮名: 確定した読みフィールド（reading / yomi / kana）が資源にある場合だけ、答え表示後に ruby で出す。
//   読みをコード側で推測して作らない。読みが無い LIGHTWEIGHT 資源には何も表示されない（TASK-013J audit）。
// v0.18.1 (TASK-013I, USER UAT): Rapid に「← 前へ」を追加（filtered pool 内だけを移動し、1 件目からは末尾へ loop）。
//   移動時は必ず front 状態へ戻し、known / review は移動だけでは書き換えない。視覚補強は地域ラベルと細い進捗バーのみ
//   （写真・地図・アイコン画像・日本地図 SVG・アニメーション・音・スコアは追加しない）。state schema は変更なし。
//   Quiz A/B の採点 truth は従来どおり DEEP 30 のみ。LIGHTWEIGHT は出題も採点もしない。
// Photo state (current): the Photo Pilot ships 5 rights-verified local photo assets (知床 / 富士山 / 姫路城 / 道後温泉 /
// 鳴門の渦潮, one each); the other 25 resources have no photo asset and render no photo UI. Photos support learning on
// the card and in the quiz result only — never before an answer, so they cannot leak a hint.
// v0.16.0 (TASK-012M): photo visual memory pilot — 5 resources carry one locally stored, rights-verified photo each
// (data/visual_assets.js). Photos appear on the card (景観の記憶) and behind a collapsed 「写真で確認」 in the quiz result;
// they never appear before an answer, so they cannot hint at it. Resources without an asset show nothing.
// v0.15.2 (TASK-012J): the GSI attribution also carries the additional source that 地理院タイル一覧 requires for the
// pale map's ZL5-8 小縮尺地図 (VMAP0 shoreline), and every render disposes previously created Leaflet instances so no
// orphan map survives a card / question / filter change.
// v0.5.1 (TASK-012I): multi-point resources use numbered markers (1..n, blue, white digits, aria-label) and a
// 学習地点 legend under the real map generated from visual_locations.js map_points[].label (same order as the markers);
// legend items pan to and open the marker popup. Single-point resources keep the plain blue marker. GSI tiles untouched.
// Real map study view (TASK-012H): 国土地理院 地理院タイル（淡色地図）loaded at runtime only when the user opens the map
// (no prefetch, no bulk download), blue markers from data/visual_locations.js (sourced points, separate from the
// factual data and never used for quiz grading), attribution 出典：国土地理院 always visible, fallback to the locator
// schematic + text when tiles / Leaflet are unavailable.
// Visual geography layer (TASK-012G): resource type icons (inline SVG, derived from categories[]), a local locator
// schematic (map/locator.js, HOLAVEL_ORIGINAL, no external map / no runtime fetch) highlighting resource.prefectures
// (blue) and designation prefectures (dashed outline) — both derived from the canonical data, never hand-entered —
// and a photo asset hook (data/visual_assets.js; the photo pilot itself landed in TASK-012M, see the header above).
// Data: window.GEO_RESOURCES (data/resources.js, tracked Holavel Original metadata compiled from official sources).
//   RESOURCE SCOPE: prefectures[] / municipalities[] = where the named resource itself is (all prefectures it spans).
//   DESIGNATION SCOPE: designation_relations[] = national park / world heritage / Ramsar areas the resource belongs to
//   (each with its own sourced prefectures[]). Quiz A grades quiz_a.scope: "RESOURCE" or "DESIGNATION:<id>" — never a mix.
//   past_exam_links[].relation: DIRECT (資源そのものが出題) / RELATED_CONTEXT (関連問題).
// State: localStorage "holavel_geography_study_v2" (version 2). v1 ("holavel_geography_study_v1", prototype) is neither
//   read, migrated, cleared nor removed: its quiz-A answers were graded under a different answer contract.
//   Exam Sprint's "examSprintState" is never read or written.
//   { version: 2, view, filters, events: [{resource_id, quiz_type, correct, answered_at, selected}], current, quiz }
// Retry telemetry (attempt_count / wrong_count / last_attempt_at / days_since_previous / interval_known) is derived from events only.
(function(){
'use strict';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let toastT=null;const toast=m=>{const t=$('toast');t.textContent=m;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),1500)};
const D=window.GEO_RESOURCES||{};const R=Array.isArray(D.resources)?D.resources.slice():[];
const REGIONS=D.regions||['北海道','東北','関東','中部','近畿','中国','四国','九州・沖縄'];
const CAT=D.category_labels||{};
const PRI={A:'A 重点',B:'B 要確認',C:'C 補足'};
const prefs=r=>Array.isArray(r.prefectures)?r.prefectures:[];
const munis=r=>Array.isArray(r.municipalities)?r.municipalities:[];
const desig=r=>Array.isArray(r.designation_relations)?r.designation_relations:[];
const prefLabel=r=>prefs(r).join('・');
const DTYPE={NATIONAL_PARK:'国立公園',WORLD_HERITAGE:'世界遺産',RAMSAR:'ラムサール登録湿地',OTHER_DESIGNATION:'指定'};
const DREL={IDENTICAL:'資源そのもの',WITHIN:'区域内',COMPONENT_OF:'構成資産',OVERLAPS:'一部重複',RELATED_TO:'関連'};
// v0.3.3 location hierarchy (USER UAT): 1st = prefectures only (blue location block), 2nd = related designations (name +
// prefectures, same blue block, smaller), supplementary = municipalities behind a gray <details>. Region is a study
// classification label ("学習分類"), never a statement that every prefecture lies in that region.
// ---- resource type visual system: primary type is derived deterministically from categories[] (most specific
// physical / built type first; WORLD_HERITAGE / NATIONAL_PARK are designations and come last). Icon + text always.
const TYPE_ORDER=['CASTLE','TEMPLE_SHRINE','HOT_SPRING','GARDEN','VALLEY_WATERFALL','LAKE_WETLAND','MOUNTAIN_HIGHLAND','HISTORIC_DISTRICT','FESTIVAL_CULTURE','NATIONAL_PARK','QUASI_NATIONAL_PARK','WORLD_HERITAGE','OTHER'];
const TYPE_LABEL={CASTLE:'城',TEMPLE_SHRINE:'寺社',HOT_SPRING:'温泉',GARDEN:'庭園',VALLEY_WATERFALL:'渓谷・滝',LAKE_WETLAND:'湖・湿原',MOUNTAIN_HIGHLAND:'山・高原',HISTORIC_DISTRICT:'史跡・町並み',FESTIVAL_CULTURE:'祭・文化',NATIONAL_PARK:'国立公園',QUASI_NATIONAL_PARK:'国定公園',WORLD_HERITAGE:'世界遺産',OTHER:'その他'};
const TYPE_SVG={
 CASTLE:'<path d="M4 20V9h3V6h2v3h2V6h2v3h2V6h2v3h3v11z" fill="currentColor"/><path d="M10 20v-5h4v5" fill="#fff"/>',
 TEMPLE_SHRINE:'<path d="M3 6h18v2H3zM5 9h14v2H5zM7 11h2v9H7zM15 11h2v9h-2zM4 20h16v1H4z" fill="currentColor"/>',
 HOT_SPRING:'<path d="M4 15c0-3 3-4 8-4s8 1 8 4-3 5-8 5-8-2-8-5z" fill="currentColor"/><path d="M8 3c1 1 1 2 0 3s-1 2 0 3M12 3c1 1 1 2 0 3s-1 2 0 3M16 3c1 1 1 2 0 3s-1 2 0 3" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>',
 GARDEN:'<path d="M12 21c-1-6 2-12 8-15-1 7-4 12-8 15zM12 21C11 15 8 9 3 6c1 7 4 12 9 15z" fill="currentColor"/>',
 VALLEY_WATERFALL:'<path d="M3 21l5-9 3 4 3-7 7 12z" fill="currentColor"/><path d="M11 3v8M14 3v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
 LAKE_WETLAND:'<ellipse cx="12" cy="14" rx="9" ry="5" fill="currentColor"/><path d="M5 8c2-2 4-2 6 0s4 2 6 0" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>',
 MOUNTAIN_HIGHLAND:'<path d="M2 20l7-12 4 6 2-3 7 9z" fill="currentColor"/><path d="M9 8l2 3-2 1-2-1z" fill="#fff"/>',
 HISTORIC_DISTRICT:'<path d="M3 11l9-7 9 7v9H3z" fill="currentColor"/><path d="M10 20v-6h4v6" fill="#fff"/>',
 FESTIVAL_CULTURE:'<path d="M6 3h2v18H6zM8 4h11l-3 4 3 4H8z" fill="currentColor"/>',
 NATIONAL_PARK:'<path d="M12 2l3 6 5 1-4 4 1 6-5-3-5 3 1-6-4-4 5-1z" fill="currentColor"/>',
 QUASI_NATIONAL_PARK:'<path d="M12 2l3 6 5 1-4 4 1 6-5-3-5 3 1-6-4-4 5-1z" fill="currentColor"/>',
 WORLD_HERITAGE:'<path d="M12 2l9 5v10l-9 5-9-5V7z" fill="currentColor"/><circle cx="12" cy="12" r="3.5" fill="#fff"/>',
 OTHER:'<circle cx="12" cy="12" r="8" fill="currentColor"/>'};
function primaryType(r){const cats=r.categories||[];for(const t of TYPE_ORDER){if(cats.includes(t))return t}return 'OTHER'}
const typeIcon=(t,cls='ticon')=>`<svg class="${cls} t-${esc(t)}" viewBox="0 0 24 24" aria-hidden="true">${TYPE_SVG[t]||TYPE_SVG.OTHER}</svg>`;
const typeBadge=r=>{const t=primaryType(r);return `<span class="tbadge t-${esc(t)}">${typeIcon(t)}<span>${esc(TYPE_LABEL[t]||t)}</span></span>`};
// ---- locator schematic (map/locator.js). Highlights derive from resource.prefectures and designation prefectures only.
const LOC=window.GEO_LOCATOR&&Array.isArray(window.GEO_LOCATOR.tiles)?window.GEO_LOCATOR:null;
function locatorSVG(r){if(!LOC)return '';const res=new Set(prefs(r));const des_=new Set();desig(r).forEach(d=>(d.prefectures||[]).forEach(p=>{if(!res.has(p))des_.add(p)}));
 const tiles=LOC.tiles.map(t=>{const s=t.s;const cls=res.has(t.name)?'res':(des_.has(t.name)?'des':'');return `<g class="lt ${cls}"><rect x="${(t.x-s/2).toFixed(1)}" y="${(t.y-s/2).toFixed(1)}" width="${s}" height="${s}" rx="5"/><text x="${t.x}" y="${(t.y+(s>30?5:4)).toFixed(1)}" font-size="${s>30?12:9}">${esc(t.short)}</text></g>`}).join('');
 const legend=`<div class="mlegend"><span><i class="sw res"></i>主な所在地（${esc(prefs(r).join('・'))}）</span>${des_.size?`<span><i class="sw des"></i>関連指定区域のみ（${esc([...des_].join('・'))}）</span>`:''}</div>`;
 const inset=LOC.inset?`<g class="inset"><rect x="${LOC.inset.x}" y="${LOC.inset.y}" width="${LOC.inset.w}" height="${LOC.inset.h}" rx="4"/><text x="${LOC.inset.x}" y="${(LOC.inset.y+LOC.inset.h+11).toFixed(1)}" font-size="8">${esc(LOC.inset.label||'')}</text></g>`:'';
 return `<div class="locator"><svg viewBox="0 0 ${LOC.width} ${LOC.height}" role="img" aria-label="日本の概略位置図（都道府県タイル）">${inset}${tiles}</svg>${legend}<div class="mnote">概略位置図（海岸線なし・タイルは概ねの位置）。強調は資源データの都道府県から自動生成。</div></div>`}
// ---- 歴史地図の外部参考リンク（TASK-019A）。
// TonbiWing は Holavel とは別運営の外部サイト。ここに置くのは「リンク先の URL」と「Holavel が書いた短い紹介文」だけで、
// 画像・DZI タイル・境界データ・藩の一覧など、先方のコンテンツは一切コピーも埋め込みもしない（iframe / hotlink / proxy も使わない）。
// 「提携」「公式連携」「Holavel 提供」のような、関係を誤認させる表現は出さない。
const HISTORICAL_REFS=[
 {title:'江戸幕府 六十九国・三百藩全図',provider:'TonbiWing',
  url:'https://tonbiwing.com/map/jpn00-zenkoku/',
  note:'幕末期の旧国・藩・城などを拡大しながら確認できる復元歴史地図。',kind:'external_reference'},
 {title:'江戸幕府 全藩図・拡大地図',provider:'TonbiWing',
  url:'https://tonbiwing.com/ep/dzi/dzi-jpn00-jpn.html',
  note:'拡大縮小しながら藩・国などを確認できるインタラクティブ歴史地図。',kind:'external_reference'},
 {title:'TonbiWing デジタル古地図',provider:'TonbiWing',
  url:'https://tonbiwing.com/map/',
  note:'江戸時代・平安時代などの復元歴史地図をまとめた外部サイト。',kind:'external_reference'}];
// Holavel 独自の歴史MAP は設計だけで、実装は入っていない。押せるのに何も起きないボタンは作らない。
const HISTORICAL_ATLAS={name:'Holavel 歴史MAP',en:'Holavel Historical Atlas',status:'PLANNED',
 note:'旧国・藩・街道・城を、現在の地図と並べて時代ごとに比べられるようにする予定です。',
 modes:['MODERN','MEIJI','EDO_DOMAIN','OLD_PROVINCE','GOKI_SHICHIDO']};
function historicalRefsHTML(){
 const items=HISTORICAL_REFS.map(x=>`<li class="href">
   <a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.title)} <span class="hext" aria-hidden="true">\u2197</span><span class="hsr">（外部サイトを新しいタブで開きます）</span></a>
   <span class="hprov">${esc(x.provider)} ／ 外部サイト</span>
   <span class="hnote">${esc(x.note)}</span></li>`).join('');
 return `<details class="hmref">
  <summary>歴史地図・参考</summary>
  <div class="hmbody">
   <p class="hmlead">Holavel の学習教材ではありません。<b>別の運営者による外部サイト</b>へのリンクです。Holavel とは提携していません。</p>
   <ul class="hlist">${items}</ul>
   <div class="hplan" role="note">
    <span class="hptitle">${esc(HISTORICAL_ATLAS.name)}<span class="hpen">（${esc(HISTORICAL_ATLAS.en)}）</span></span>
    <span class="hpstate">準備中</span>
    <span class="hnote">${esc(HISTORICAL_ATLAS.note)}</span>
   </div>
  </div></details>`}

// ---- real map (GSI tiles + Leaflet). Points come from visual_locations.js only; Quiz A never reads them.
const VL=window.GEO_VISUAL_LOCATIONS&&Array.isArray(window.GEO_VISUAL_LOCATIONS.resources)?window.GEO_VISUAL_LOCATIONS:null;
// Attribution follows 地理院タイル一覧 (https://maps.gsi.go.jp/development/ichiran.html): credit 国土地理院 / 地理院タイル
// with a link to that page, and — because this layer can be shown at ZL5-8, where the pale map is the 小縮尺地図
// (500万分1日本とその周辺) — also show the additional source it requires for that data. minZoom/maxZoom unchanged.
const GSI={url:'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',list:'https://maps.gsi.go.jp/development/ichiran.html',
 attr:'出典：国土地理院（地理院タイル 淡色地図）',
 zl58note:'ズームレベル5〜8（小縮尺地図）利用時の追加出所:',
 zl58src:'Shoreline data is derived from: United States. National Imagery and Mapping Agency. "Vector Map Level 0 (VMAP0)." Bethesda, MD: Denver, CO: The Agency; USGS Information Services, 1997.',
 minZoom:5,maxZoom:16};
window.GEO_TILE_URL_OVERRIDE=window.GEO_TILE_URL_OVERRIDE||null; // QA hook: harness can point tiles at an invalid host
const mapPoints=r=>{const e=VL&&VL.resources.find(x=>x.resource_id===r.resource_id);return e&&Array.isArray(e.map_points)?{points:e.map_points.filter(p=>typeof p.lat==='number'&&typeof p.lon==='number'),view:e.preferred_view||{}}:{points:[],view:{}}};
let mapSeq=0;const liveMaps={};
// Dispose every Leaflet instance we created. Called at the start of each render: the DOM those maps live in is about to
// be replaced, so presence in the DOM must not decide what to keep (that left one generation alive). Failures here are
// swallowed so a broken map can never take the app down.
// 画面を切り替えるときに地図を片付ける。ズームアニメーションの最中に remove() すると、
// Leaflet が 250ms 後に予約している _onZoomTransitionEnd が、消えた mapPane を触って
// TypeError: Cannot read properties of undefined (reading '_leaflet_pos') を投げる。
// Leaflet 側は _animatingZoom が false なら即 return するので、先にその印を下ろしてから remove する。
// 遅延して呼ぶ invalidateSize は、その間に画面が切り替わって地図が片付けられていることがある。
// そのまま呼ぶと Leaflet が消えた mapPane を触って落ちるので、まだ生きている同じ地図のときだけ呼ぶ。
const softInvalidate=(key,m,ms)=>setTimeout(()=>{try{if(liveMaps[key]===m&&m._container)m.invalidateSize()}catch(e){}},ms);
function disposeLiveMaps(){Object.keys(liveMaps).forEach(k=>{const m=liveMaps[k];try{if(m){if(m._animatingZoom)m._animatingZoom=false;m.off();m.remove()}}catch(e){}delete liveMaps[k]});
 if(typeof nmClearMap==='function')nmClearMap()}
function mapHTML(r,label){const mp=mapPoints(r);const hasPoints=mp.points.length>0;const libOK=!!window.L;const hasReal=hasPoints&&libOK;const id='m'+(++mapSeq);
 const role=hasReal?'実地図＝どんな地形のどこにあるか ／ 全国俯瞰＝日本のどこにあるか'
  :(hasPoints?'実地図を読み込めません（地図ライブラリを読み込めません）。全国俯瞰をご利用ください。':'この資源は実地図ポイント未登録（全国俯瞰のみ）');
 const sel=`<div class="mapsel" role="tablist"><button type="button" class="mtab ${hasReal?'on':''}" data-m="real" data-for="${id}" ${hasReal?'':'disabled'}>実地図</button><button type="button" class="mtab ${hasReal?'':'on'}" data-m="loc" data-for="${id}">全国俯瞰</button><span class="mrole ${hasPoints&&!libOK?'warn':''}">${esc(role)}</span></div>`;
 const legend=hasReal?`<div class="mlegend2"><span class="mlt">学習地点</span>${mp.points.length>1?`<ol class="mpts">${mp.points.map((p,i)=>`<li><button type="button" class="mpt" data-for="${id}" data-i="${i}" aria-label="${i+1} ${esc(p.label)} の位置へ"><span class="mno">${i+1}</span><span>${esc(p.label)}</span></button></li>`).join('')}</ol>`:`<span class="mpt1">${esc(mp.points[0].label)}</span>`}</div>`:'';
 const real=hasReal?`<div class="realwrap" data-for="${id}"><div class="realmap" id="${id}" data-rid="${esc(r.resource_id)}"></div>${legend}<div class="mattr">${esc(GSI.attr)}　<a href="${GSI.list}" target="_blank" rel="noopener">地理院タイル一覧</a><div class="zl58"><b>${esc(GSI.zl58note)}</b> ${esc(GSI.zl58src)}</div><div class="rd">関連指定区域（国立公園等）の正確な境界は未表示。マーカーは学習用の代表地点で、区域全体ではありません。</div></div><div class="mfail" hidden>実地図を読み込めません（ネットワークまたは地図ライブラリ）。全国俯瞰をご利用ください。</div></div>`:'';
 const loc=`<div class="locwrap" data-for="${id}" ${hasReal?'hidden':''}>${locatorSVG(r)}</div>`;
 return `<details class="mapd" data-mid="${id}"><summary>${esc(label)}</summary>${sel}${real}${loc}${gmapHTML(r)}</details>`}
// Google マップは「外部の検索結果へ渡す補助導線」であって、Holavel の地点データではない。
// 公式の Maps URL（api=1 の検索）だけを使う: JavaScript API / Embed / Places / API key / 課金は一切使わない。
// 座標も Place ID も新しく持たない。単一県資源は 資源名＋県名、複数県資源は県を並べると検索が散らかるので資源名のみ。
const gmapQuery=r=>{const P=prefs(r);return P.length===1?`${r.name} ${P[0]}`:r.name};
function gmapHTML(r){const q=gmapQuery(r);
 const url='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
 return `<div class="gmap"><a class="gmlink" href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(r.name)} を Google マップで検索（外部サイトが開きます）">Google Mapsで見る ↗</a><span class="rd">Google マップの検索結果（「${esc(q)}」）を新しいタブで開きます。Holavel の学習地点とは別です</span></div>`}
function initRealMap(el){if(!el||el.dataset.ready||!window.L)return;const r=R.find(x=>x.resource_id===el.dataset.rid);const mp=mapPoints(r);if(!mp.points.length)return;
 try{const m=L.map(el,{scrollWheelZoom:false,attributionControl:false,zoomControl:true,minZoom:GSI.minZoom,maxZoom:GSI.maxZoom});
  const wrap=el.parentElement;const fail=wrap.querySelector('.mfail');let okTiles=0,badTiles=0;
  const tl=L.tileLayer(window.GEO_TILE_URL_OVERRIDE||GSI.url,{minZoom:GSI.minZoom,maxZoom:GSI.maxZoom,crossOrigin:false});
  tl.on('tileload',()=>{okTiles++;if(fail)fail.hidden=true});tl.on('tileerror',()=>{badTiles++;if(!okTiles&&badTiles>=4&&fail){fail.hidden=false}});tl.addTo(m);
  const multi=mp.points.length>1;
  const pts=mp.points.map((p,i)=>{const pop=`<b>${esc(r.name)}</b><br>${multi?`<span class="mno">${i+1}</span> `:''}${esc(p.label)}`;
   const mk=multi?L.marker([p.lat,p.lon],{icon:L.divIcon({className:'nummk',html:`<span class="nummk-b" role="img" aria-label="${i+1} ${esc(p.label)}">${i+1}</span>`,iconSize:[26,26],iconAnchor:[13,13],popupAnchor:[0,-12]}),alt:`${i+1} ${p.label}`,keyboard:true})
    :L.circleMarker([p.lat,p.lon],{radius:9,color:'#fff',weight:2,fillColor:'#1f5f8b',fillOpacity:.95});
   return mk.bindPopup(pop,{closeButton:false}).addTo(m)});
  el._markers=pts;
  if(pts.length===1){m.setView([mp.points[0].lat,mp.points[0].lon],mp.view.zoom||9)}else{m.fitBounds(L.latLngBounds(mp.points.map(p=>[p.lat,p.lon])),{padding:[24,24],maxZoom:mp.view.zoom||11})}
  el.dataset.ready='1';liveMaps[el.id]=m;softInvalidate(el.id,m,50)}catch(e){const fail=el.parentElement&&el.parentElement.querySelector('.mfail');if(fail)fail.hidden=false}}
function wireMaps(){document.querySelectorAll('details.mapd[data-mid]').forEach(dt=>{const id=dt.dataset.mid;
 const show=(which)=>{dt.querySelectorAll('.mtab').forEach(b=>b.classList.toggle('on',b.dataset.m===which));const rw=dt.querySelector('.realwrap'),lw=dt.querySelector('.locwrap');if(rw)rw.hidden=which!=='real';if(lw)lw.hidden=which==='real';if(which==='real'&&rw){initRealMap(rw.querySelector('.realmap'));const m=liveMaps[id];if(m)softInvalidate(id,m,30)}};
 dt.addEventListener('toggle',()=>{if(dt.open){const on=dt.querySelector('.mtab.on');show(on?on.dataset.m:'loc')}});
 dt.querySelectorAll('.mtab').forEach(b=>b.onclick=()=>{if(!b.disabled)show(b.dataset.m)});
 dt.querySelectorAll('.mpt').forEach(b=>b.onclick=()=>{show('real');const el=dt.querySelector('.realmap');const m=liveMaps[id];const mk=el&&el._markers&&el._markers[+b.dataset.i];if(m&&mk){m.panTo(mk.getLatLng(),{animate:false});mk.openPopup()}})})}
const locatorDetails=(r,label)=>LOC?mapHTML(r,label):'';
// ---- photo-ready hook: renders nothing unless data/visual_assets.js lists assets for the resource
const VA=window.GEO_VISUAL_ASSETS&&Array.isArray(window.GEO_VISUAL_ASSETS.assets)?window.GEO_VISUAL_ASSETS.assets:[];
// Photo block: the image itself is the point (景観の記憶), so it is shown inline with a short caption; the rights detail
// sits in a small collapsed 写真出典 disclosure. Renders nothing when the resource has no asset (no empty frame).
function photosFor(r){return VA.filter(x=>x.resource_id===r.resource_id&&x.type==='PHOTO'&&x.local_path&&x.license&&x.attribution)}
function photoHTML(r,cls){const a=photosFor(r);if(!a.length)return '';
 return a.map(x=>`<figure class="photo ${cls||''}">
  <img src="${esc(x.local_path)}" alt="${esc(x.alt||(r.name+'の写真'))}" loading="lazy" decoding="async" width="${esc(x.width||1280)}" height="${esc(x.height||853)}" onerror="this.closest('figure').classList.add('imgfail')"/>
  <figcaption><span class="pcap">${esc(x.caption||r.name)}</span><details class="psrc"><summary>写真出典</summary><div>${esc(x.attribution)}　<a href="${esc(x.source_url)}" target="_blank" rel="noopener">Wikimedia Commons ファイルページ</a>　<a href="${esc(x.license_url)}" target="_blank" rel="noopener">${esc(x.license)}</a>${x.note?`<div class="rd">${esc(x.note)}</div>`:''}</div></details></figcaption>
 </figure>`).join('')}
function photoDetails(r,label){return photosFor(r).length?`<details class="photod"><summary>${esc(label)}</summary>${photoHTML(r,'inq')}</details>`:''}
const prefBadges=r=>prefs(r).map(p=>`<span class="pref">${esc(p)}</span>`).join('');
const locBlock=r=>`<div class="locbox"><div class="lrow"><span class="ll">主な所在地</span><span class="lv">${prefBadges(r)}</span></div>${desig(r).length?`<div class="lrow dsgrow"><span class="ll">関連する指定区域</span><span class="lv">${desig(r).map(d=>`<span class="dsg"><span class="dn">${esc(DTYPE[d.type]||d.type)}「${esc(d.name)}」</span><span class="dp">${esc((d.prefectures||[]).join('・')||'—')}</span></span>`).join('')}</span></div>`:''}</div>`;
const muniSup=r=>munis(r).length?`<details class="sup"><summary>所在地の補足（市町村）</summary><div>${esc(munis(r).join('・'))}</div></details>`:'';
// quiz-A scope: which prefecture set is graded. The ONLY answer source of truth is quiz_a.scope resolved against canonical
// data (resource.prefectures or designation_relations[id].prefectures). No other quiz_a field is read. Fail-closed:
// quiz_a must be an object whose scope is the string "RESOURCE" or "DESIGNATION:<known id>"; a missing / null / non-object
// quiz_a, a missing / null / non-string / empty scope, an unknown designation id or any other text returns null (there is
// NO default and NO silent RESOURCE fallback) and quiz A is not generated for that resource.
function quizScope(r){const qa=r.quiz_a;if(!qa||typeof qa!=='object'||Array.isArray(qa)||typeof qa.scope!=='string')return null;const s=qa.scope;
 if(s==='RESOURCE'){const P=prefs(r);return P.length?{kind:'RESOURCE',prefs:P,label:r.name}:null}
 if(typeof s==='string'&&s.startsWith('DESIGNATION:')){const id=s.slice('DESIGNATION:'.length);const d=desig(r).find(x=>x.id===id);return d&&Array.isArray(d.prefectures)&&d.prefectures.length?{kind:'DESIGNATION',prefs:d.prefectures,label:`${DTYPE[d.type]||d.type}『${d.name}』`,d}:null}
 return null}

// ---- state (own key; Exam Sprint state is never read or written)
const KEY='holavel_geography_study_v2';const STATE_VERSION=2;
const fresh=()=>({version:STATE_VERSION,view:'cards',filters:{},events:[],current:null,quiz:null,nmap:{genres:[],region:'',prefecture:'',points:false},
 // TASK-021B: 暗記カードの状態。既存 state に無ければ既定（全資源・先頭・シャッフルなし）で足すだけ。
 card:{deck:'ALL',index:0,seed:0}});
let state;try{const raw=JSON.parse(localStorage.getItem(KEY)||'{}');state=Object.assign(fresh(),raw&&raw.version===STATE_VERSION?raw:{})}catch(e){state=fresh()}
state.version=STATE_VERSION;
if(!Array.isArray(state.events))state.events=[];if(!state.filters||typeof state.filters!=='object')state.filters={};
// 暗記カードの状態は additive。古い state に無ければ既定を入れ、壊れた値だけを直す（既存キーは変更しない）
if(!state.card||typeof state.card!=='object'||Array.isArray(state.card))state.card={deck:'ALL',index:0,seed:0};
if(!['ALL','DEEP','LIGHT','REVIEW'].includes(state.card.deck))state.card.deck='ALL';
if(!Number.isInteger(state.card.index)||state.card.index<0)state.card.index=0;
if(!Number.isInteger(state.card.seed)||state.card.seed<0)state.card.seed=0;
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}};

// ---- retry telemetry (derived; same semantics as Exam Sprint v0.6d: interval only when both timestamps are valid and ordered)
const localDay=iso=>{if(!iso)return null;const d=new Date(iso);if(isNaN(d))return null;return Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/86400000};
function metrics(rid){const evs=state.events.filter(e=>e.resource_id===rid);if(!evs.length)return {attempt_count:0,wrong_count:0,last_attempt_at:null,days_since_previous:null,interval_known:false};
 const cur=evs[evs.length-1],prev=evs.length>1?evs[evs.length-2]:null;const dc=localDay(cur.answered_at),dp=prev?localDay(prev.answered_at):null;let days=null,known=false;
 if(prev&&dc!=null&&dp!=null){const raw=Math.round(dc-dp);if(Number.isFinite(raw)&&raw>=0){days=raw;known=true}}
 return {attempt_count:evs.length,wrong_count:evs.filter(e=>e.correct===false).length,last_attempt_at:cur.answered_at||null,days_since_previous:days,interval_known:known}}
function retryLine(m){if(!m||!m.attempt_count)return '<div class="retry">未挑戦</div>';const p=[];
 if(m.attempt_count<=1)p.push('初回の挑戦');else{p.push(`${m.attempt_count}回目の挑戦`);const ok=m.interval_known===true&&Number.isInteger(m.days_since_previous)&&m.days_since_previous>=0;p.push(!ok?'前回日時不明':(m.days_since_previous===0?'同日再挑戦':`前回から${m.days_since_previous}日ぶり`))}
 p.push(`これまでの誤答 ${m.wrong_count}回`);return `<div class="retry">${p.map(esc).join(' ｜ ')}</div>`}
const everWrong=rid=>state.events.some(e=>e.resource_id===rid&&e.correct===false);

// ---- filters (prefecture filter: resource.prefectures.includes(selected))
const F=state.filters;
function fillSelect(id,values,cur){const s=$(id);const keep=s.options[0].outerHTML;s.innerHTML=keep+values.map(v=>`<option value="${esc(v)}" ${v===cur?'selected':''}>${esc(CAT[v]||v)}</option>`).join('')}
// 学習分類で候補を削らず常に 47 都道府県を出す（近畿の状態から栃木県へ 1 操作で移動できるようにするため）
function prefOptions(){return BS_ALL_PREFS.slice()}
// 保存済みフィルタの矛盾（学習分類 近畿 × 都道府県 栃木県 など）を読み込み時に解消する。
// 個別都道府県があれば都道府県を正として学習分類を合わせ、「すべて」なら保存済みの学習分類を保持する。
// 有効値はハードコードせず、実際の選択肢の出どころ（カテゴリ = データの category_labels、
// 優先度 = index.html の #fPri option）から取る。ここが select の中身と同じ集合であることが契約。
const has=(o,k)=>typeof k==='string'&&Object.prototype.hasOwnProperty.call(o,k);
const priOptions=()=>Array.from(document.querySelectorAll('#fPri option')).map(o=>o.value).filter(v=>v);
// 選択肢に無い値が保存されていると select は「すべて」に見えるのに filtered() が 0 件になる（silent zero）。
// 判定は「truthy かどうか」ではなく「有効な値そのものか」で行う: 0 / false / null / 欠損 / 配列 / オブジェクトも
// すべて '' へ正規化し、state に中途半端な値を残さない（有効値と '' 以外は保存しない、が契約）。
function sanitizeCommonFilters(){
 F.prefecture=has(BS_PREF_REGION,F.prefecture)?F.prefecture:'';
 F.region=has(BS_REGION_PREFS,F.region)?F.region:'';
 // 個別都道府県があれば都道府県を正として学習分類を合わせる（TASK-013T1 の同期仕様）
 if(F.prefecture)F.region=BS_PREF_REGION[F.prefecture];
 F.category=has(CAT,F.category)?F.category:'';
 F.priority=priOptions().includes(F.priority)?F.priority:'';
 F.wrongOnly=F.wrongOnly===true;
 F.search=typeof F.search==='string'?F.search:''}
function initFilters(){sanitizeCommonFilters();
 fillSelect('fRegion',REGIONS,F.region||'');fillSelect('fPref',prefOptions(),F.prefecture||'');fillSelect('fCat',Object.keys(CAT),F.category||'');$('fPri').value=F.priority||'';$('fWrong').checked=!!F.wrongOnly;$('fSearch').value=F.search||'';
 const apply=()=>{F.category=$('fCat').value;F.priority=$('fPri').value;F.wrongOnly=$('fWrong').checked;F.search=$('fSearch').value.trim();state.current=null;
  // 絞り込みを変えると別のカードが先頭に来る。めくった状態を持ち越すと答えが即見えてしまうので必ず伏せる
  cFlipped=false;state.card.index=0;save();render()};
 // 都道府県を選んだら都道府県を正として学習分類を合わせる（「すべて」なら学習分類は変えない）
 $('fPref').onchange=()=>{const p=$('fPref').value;F.prefecture=p;if(p)F.region=BS_PREF_REGION[p];apply()};
 // 学習分類を変えたら、選択中の県がその分類外のときだけ県を「すべて」に戻す（「全国」なら県を保持）
 $('fRegion').onchange=()=>{const reg=$('fRegion').value;F.region=reg;
  if(reg&&F.prefecture&&BS_PREF_REGION[F.prefecture]!==reg)F.prefecture='';apply()};
 ['fCat','fPri','fWrong'].forEach(id=>$(id).onchange=apply);$('fSearch').oninput=apply}
// 個別都道府県が選ばれているときは「都道府県が正」。学習分類では追加で絞らない（尾瀬＝学習分類 関東 /
// 福島県・群馬県・新潟県 のように、県の学習分類と資源の学習分類が違う資源を取りこぼさないため）。
function filtered(){const q=(F.search||'').toLowerCase();return R.filter(r=>(F.prefecture?prefs(r).includes(F.prefecture):(!F.region||r.region===F.region))&&(!F.category||(r.categories||[]).includes(F.category))&&(!F.priority||r.exam_priority===F.priority)&&(!F.wrongOnly||everWrong(r.resource_id))&&(!q||[r.name,r.reading||'',...prefs(r),...munis(r),...desig(r).map(d=>d.name)].join(' ').toLowerCase().includes(q)))}

// ---- views
document.querySelectorAll('#modes button').forEach(b=>b.onclick=()=>{state.view=b.dataset.view;state.current=null;save();render()});
const tags=r=>`<span class="tag pri-${esc(r.exam_priority)}">${esc(PRI[r.exam_priority]||r.exam_priority)}</span>${(r.categories||[]).map(c=>`<span class="tag">${esc(CAT[c]||c)}</span>`).join('')}${r.hot_2026?`<span class="tag hot">2026注目</span>`:''}`;
const EMPTY='<div class="msg">該当する観光資源がありません。フィルタや検索条件を変えてください。</div>';
function renderList(list){$('view').innerHTML=list.length?`<div class="list">${list.map(r=>`<button class="tile ${everWrong(r.resource_id)?'wrongish':''}" data-id="${esc(r.resource_id)}"><span class="nm">${typeIcon(primaryType(r),'ticon sm')}${esc(r.name)}</span><span class="pf"><span class="pfb">${esc(prefLabel(r))}</span>　<span class="rd">${esc(TYPE_LABEL[primaryType(r)])}　学習分類: ${esc(r.region)}</span></span><span class="tags"><span class="tag pri-${esc(r.exam_priority)}">${esc(PRI[r.exam_priority]||r.exam_priority)}</span>${r.hot_2026?'<span class="tag hot">2026注目</span>':''}</span></button>`).join('')}</div>`:EMPTY;
 document.querySelectorAll('.tile').forEach(b=>b.onclick=()=>{state.current=b.dataset.id;save();render()})}
function sourcesHTML(r){const s=(r.sources||[]);return s.length?`<details><summary>根拠（${s.length}）</summary><ul>${s.map(x=>`<li>${x.url?`<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.title)}</a>`:esc(x.title)}（${esc(x.authority)}${x.date?'・'+esc(x.date):''}・LEVEL ${esc(x.level)}）</li>`).join('')}</ul></details>`:''}
// 過去問演習（Exam Sprint）は PRIVATE / LOCAL ONLY のアプリ。公開ホストでは「問題を解く」リンクを作らない。
// 判定は秘密情報ではなく配信元だけを見る（file:// かローカルホストのときだけリンクにする）。
const LOCAL_APPS=(()=>{try{return location.protocol==='file:'||/^(localhost|127\.0\.0\.1|\[?::1\]?)$/.test(location.hostname)}catch(e){return false}})();
// 過去問との対応は resources.js の past_exam_links が唯一の正本。ここでは表示するだけで対応表を複製しない。
const REL_LABEL={DIRECT:'この資源が直接出題',RELATED_CONTEXT:'関連テーマとして復習'};
const PT_ROLE={REPRESENTATIVE:'代表地点',LANDMARK:'目印となる地物',VIEWPOINT:'展望地点'};  // visual_locations の role の表示名
// 共通ホーム（Travel Study）への戻り導線もローカル環境だけ。公開では壊れたリンクを出さない
(function(){try{const h=document.getElementById('homeLink');if(h&&LOCAL_APPS)h.hidden=false}catch(e){}})();
// 過去問演習の案内文もローカルのときだけ現状に合わせる。公開版は「準備中」のままで、private が使えるように見せない
(function(){try{const p=document.getElementById('pxStatus');
 if(p&&LOCAL_APPS)p.textContent='Holavel Exam Sprint と連携済みです。カードの「この問題を解く」から該当の過去問を開けます。'}catch(e){}})();
function examLinkURL(qid){return '../exam-sprint/index.html?question='+encodeURIComponent(qid)}
function pastExamHTML(r){const L=(r.past_exam_links||[]).filter(l=>l&&typeof l.question_id==='string');
 if(!L.length)return '';
 const row=l=>{const label=esc(l.label||l.question_id);
  const rel=REL_LABEL[l.relation]?`<span class="pxrel ${l.relation==='DIRECT'?'direct':'related'}">${esc(REL_LABEL[l.relation])}</span>`:'';
  const go=LOCAL_APPS?`<a class="pxgo" href="${esc(examLinkURL(l.question_id))}">この問題を解く →</a>`:'';
  return `<li><span class="pxq">${label}</span>${rel}${go}</li>`};
 return `<div class="pastex"><div class="pxh">過去問（${L.length}）</div><ul class="pxlist">${L.map(row).join('')}</ul>`+
  (LOCAL_APPS?'':'<div class="rd">過去問演習はこの端末のローカル環境でのみ開けます。</div>')+'</div>'}
function renderCard(r,list){const i=list.indexOf(r);const att=(r.attention_points||[]).map(a=>`<li><b class="pt">${esc(a.point)}</b>${a.note?'　'+esc(a.note):''}</li>`).join('');
 $('view').innerHTML=`<div class="card"><div class="head"><div><span class="nm">${esc(r.name)}</span> <span class="rd">${esc(r.reading||'')}</span></div><div class="rd">学習分類: ${esc(r.region)}　${i+1} / ${list.length}</div></div>
 <div class="typerow">${typeBadge(r)}<div class="tags">${tags(r)}</div></div>
 ${photoHTML(r,'card')}
 ${locBlock(r)}${locatorDetails(r,'位置を見る')}
 <p class="sum">${esc(r.summary)}</p>
 <h4>覚えるポイント</h4><ul>${(r.key_facts||[]).map(k=>`<li>${esc(k)}</li>`).join('')}</ul>
 ${att?`<div class="attn"><div class="ah">⚠ ここ要注意</div><ul>${att}</ul></div>`:''}
 ${(r.confusion_points||[]).length?`<div class="conf"><div class="ch">⇄ 混同注意</div><ul>${r.confusion_points.map(k=>`<li>${esc(k)}</li>`).join('')}</ul></div>`:''}
 ${r.memory_hook?`<div class="hook"><span class="hl">💡 覚え方</span>　${esc(r.memory_hook)}</div>`:''}
 ${r.current_2026_note?`<div class="note26 ${r.hot_2026?'hot':''}"><b>2026年度メモ</b>　${esc(r.current_2026_note)}</div>`:''}
 <div class="sup-block">${retryLine(metrics(r.resource_id))}
 ${muniSup(r)}
 ${pastExamHTML(r)}
 ${sourcesHTML(r)}</div>
 <div class="bar"><div class="grp"><button class="btn" id="prev" ${i<=0?'disabled':''}>← 前</button><button class="btn" id="back">一覧へ</button></div><div class="grp"><button class="btn primary" id="quizThis">この資源をクイズ</button><button class="btn" id="next" ${i>=list.length-1?'disabled':''}>次 →</button></div></div></div>`;
 $('prev').onclick=()=>{if(i>0){state.current=list[i-1].resource_id;save();render()}};$('next').onclick=()=>{if(i<list.length-1){state.current=list[i+1].resource_id;save();render()}};$('back').onclick=()=>{state.current=null;save();render()};
 $('quizThis').onclick=()=>{state.view='quiz';state.quiz={resource_id:r.resource_id,type:null,seed:Date.now()%100000,answered:null};save();render()}}

// ---- quiz
// A: resource -> prefecture set. The correct option is the full canonical prefecture set (e.g. 山梨県・静岡県). Distractors are
//    prefecture-set strings of other real resources; sets equal to / subset of / superset of the answer and sets touching
//    quiz_a_exclude_prefectures are never offered. Multi-prefecture answers prefer multi-prefecture distractors.
// B: quiz_hint -> resource name. Distractors prefer confusable_ids, then same region / category, then the rest.
function seeded(n){let x=n||1;return ()=>{x=(x*1103515245+12345)&0x7fffffff;return x/0x7fffffff}}
function pick(arr,n,rnd){const a=arr.slice();const out=[];while(a.length&&out.length<n){out.push(a.splice(Math.floor(rnd()*a.length),1)[0])}return out}
// distractor exclusion: the graded set itself, its subsets / supersets, quiz_a_exclude_prefectures, and prefectures of
// designations the resource IS or is a COMPONENT_OF (e.g. 滋賀県 for 清水寺 via 古都京都). Prefectures of a wider WITHIN park
// (e.g. 大分県 for 阿蘇山) stay valid distractors because the prompt states that the resource itself is asked, not the park.
function excludedPrefs(r){const ex=new Set(Array.isArray(r.quiz_a_exclude_prefectures)?r.quiz_a_exclude_prefectures:[]);desig(r).forEach(d=>{if(d.relation==='IDENTICAL'||d.relation==='COMPONENT_OF')(d.prefectures||[]).forEach(p=>ex.add(p))});return ex}
function prefSetOK(cand,r){const sc=quizScope(r);if(!sc)return false;const ans=sc.prefs;if(!cand.length)return false;if(cand.join('・')===ans.join('・'))return false;
 const sub=cand.every(p=>ans.includes(p)),sup=ans.every(p=>cand.includes(p));if(sub||sup)return false;
 const ex=excludedPrefs(r);return !cand.some(p=>ex.has(p)||ans.includes(p))}
function quizAChoices(r,rnd){const others=R.filter(x=>x.resource_id!==r.resource_id);const conf=others.filter(x=>(r.confusable_ids||[]).includes(x.resource_id));const same=others.filter(x=>!conf.includes(x)&&(x.region===r.region||(x.categories||[]).some(c=>(r.categories||[]).includes(c))));const rest=others.filter(x=>!conf.includes(x)&&!same.includes(x));
 const sc=quizScope(r);if(!sc)return [];const multi=sc.prefs.length>1;const tier=list=>list.map(x=>prefs(x)).filter(c=>prefSetOK(c,r)).map(c=>c.join('・'));
 const seq=[];const push=arr=>arr.forEach(k=>{if(!seq.includes(k))seq.push(k)});
 if(multi)push(pick(tier(others.filter(x=>prefs(x).length>1)),3,rnd));
 push(pick(tier(conf),3,rnd));push(pick(tier(same),3,rnd));push(pick(tier(rest),4,rnd));push(tier(others));
 return seq.slice(0,3)}
// The prompt always names what is graded: the resource itself (with the wider designation named as NOT asked when one
// spans more prefectures) or an explicit designation (Ramsar site / park) when quiz_a.scope points to one.
function quizAPrompt(r,sc){const wider=desig(r).filter(d=>(d.prefectures||[]).length&&!(d.relation==='IDENTICAL'&&(d.prefectures||[]).join('・')===sc.prefs.join('・'))&&d!==sc.d&&(d.prefectures||[]).join('・')!==sc.prefs.join('・'));
 if(sc.kind==='DESIGNATION'){const note=wider.length?`（${wider.map(d=>esc(DTYPE[d.type]||d.type)+'「'+d.name+'」').join('・')}の範囲ではなく、この${DTYPE[sc.d.type]||sc.d.type}の範囲）`:'';return `${sc.label}がまたがる都道府県は？（すべて）${note}`}
 const note=wider.length?`（${wider.map(d=>'「'+d.name+'」').join('・')}全体ではなく、「${r.name}」そのものの所在地）`:'';
 return sc.prefs.length>1?`「${r.name}」がまたがる都道府県は？（すべて）${note}`:`「${r.name}」が位置する都道府県は？${note}`}
function buildQuiz(r,type,seed){const rnd=seeded(seed);
 if(type==='A'){const sc=quizScope(r);if(!sc)return null;const answer=sc.prefs.join('・');const ds=quizAChoices(r,rnd);
  return {type:'A',scope:sc.kind,prompt:quizAPrompt(r,sc),answer,choices:pick([answer,...ds],4,rnd),feasible:ds.length>=3}}
 const others=R.filter(x=>x.resource_id!==r.resource_id);const conf=others.filter(x=>(r.confusable_ids||[]).includes(x.resource_id));const same=others.filter(x=>!conf.includes(x)&&(x.region===r.region||(x.categories||[]).some(c=>(r.categories||[]).includes(c))));const rest=others.filter(x=>!conf.includes(x)&&!same.includes(x));
 const cands=[...pick(conf,3,rnd),...pick(same,3,rnd),...pick(rest,3,rnd)];const ds=[];for(const x of cands){if(ds.length<3&&!ds.includes(x.name)&&x.name!==r.name)ds.push(x.name)}
 return {type:'B',prompt:(r.quiz_hint||r.summary)+'\n— この観光資源は？',answer:r.name,choices:pick([r.name,...ds],4,rnd),feasible:ds.length>=3}}
function newQuizFrom(list,exceptId){const pool=list.filter(x=>x.resource_id!==exceptId);const src=pool.length?pool:list;if(!src.length)return null;const n=src[Math.floor(Math.random()*src.length)];return {resource_id:n.resource_id,type:null,seed:Date.now()%100000,answered:null}}
function renderQuiz(list){
 // the quiz always draws from the same filtered pool as the list / cards; a quiz whose resource left the pool is cleared
 let q=state.quiz&&state.quiz.resource_id?state.quiz:null;let r=q?R.find(x=>x.resource_id===q.resource_id):null;
 if(r&&!list.includes(r)){r=null;q=null;state.quiz=null}
 if(!r){if(!list.length){state.quiz=null;save();$('view').innerHTML=EMPTY+'<div class="bar"><div class="grp"><button class="btn primary" id="nextQ" disabled>次の問題 →</button></div></div>';return}
  state.quiz=newQuizFrom(list,null);r=R.find(x=>x.resource_id===state.quiz.resource_id);save()}
 if(!state.quiz.type){state.quiz.type=(Math.random()<0.5&&quizScope(r))?'A':'B';state.quiz.seed=state.quiz.seed||(Date.now()%100000);save()}
 const qz=buildQuiz(r,state.quiz.type,state.quiz.seed||1);
 if(!qz){ // fail-closed: quiz A cannot be generated for this resource (quiz_a.scope unresolvable). Never grade against a guessed set.
  $('view').innerHTML=`<div class="quiz"><div class="qt">クイズ A 資源 → 都道府県</div><div class="msg">「${esc(r.name)}」のクイズ A は採点範囲（quiz_a.scope）が未設定または解決できないため出題できません。データ設定エラーです。</div><div class="bar"><div class="grp"><button class="btn" id="openCard">カードを見る</button><button class="btn" id="switchType">B形式にする</button></div><div class="grp"><button class="btn primary" id="nextQ">次の問題 →</button></div></div></div>`;
  $('openCard').onclick=()=>{state.view='cards';state.current=r.resource_id;save();render()};
  $('switchType').onclick=()=>{state.quiz={resource_id:r.resource_id,type:'B',seed:Date.now()%100000,answered:null};save();render()};
  $('nextQ').onclick=()=>{const nq=newQuizFrom(filtered(),r.resource_id);if(!nq){toast('該当する観光資源がありません');state.quiz=null;save();render();return}state.quiz=nq;save();render()};return}
 const sel=state.quiz.selected||null;const done=!!state.quiz.answered;const m=metrics(r.resource_id);
 $('view').innerHTML=`<div class="quiz"><div class="qt">クイズ ${qz.type==='A'?'A 資源 → 都道府県':'B 特徴 → 資源名'}　${esc(PRI[r.exam_priority]||'')}</div><div class="prompt">${esc(qz.prompt)}</div>
 <div class="choices">${qz.choices.map((c,i)=>{const on=sel===c;const isAns=c===qz.answer;let cls='choice'+(on?' sel':'');let tag='';if(done){if(isAns){cls+=' ok';tag='<span class="tagr ok">正解</span>'}else if(on){cls+=' ng';tag='<span class="tagr ng">あなたの回答</span>'}}return `<label class="${cls}"><input type="radio" name="c" value="${esc(c)}" ${on?'checked':''} ${done?'disabled':''}/><span>${esc(c)}${tag}</span></label>`}).join('')}</div>
 ${done?`<div class="result ${state.quiz.answered.correct?'ok':'ng'}"><div class="verdict"><b>${state.quiz.answered.correct?'○ 正解':'× 不正解'}</b>　正解: ${esc(qz.answer)}</div><div class="rloc"><span class="rname">${esc(r.name)}</span><span class="lv">${prefBadges(r)}</span></div><div class="rsum">${esc(r.summary)}</div>${(r.attention_points||[]).length?`<div class="attn card-attn"><div class="ah">⚠ ここ要注意</div><ul>${r.attention_points.map(a=>`<li><b class="pt">${esc(a.point)}</b>${a.note?'　'+esc(a.note):''}</li>`).join('')}</ul></div>`:''}${r.memory_hook?`<div class="hook"><span class="hl">💡 覚え方</span>　${esc(r.memory_hook)}</div>`:''}${photoDetails(r,'写真で確認')}${locatorDetails(r,'位置を確認')}<div class="sup-block">${retryLine(m)}${munis(r).length?`<div class="rd">所在地の補足（市町村）: ${esc(munis(r).join('・'))}</div>`:''}</div></div>`:''}
 <div class="bar"><div class="grp"><button class="btn" id="openCard">カードを見る</button><button class="btn" id="switchType">${qz.type==='A'?'B形式にする':'A形式にする'}</button></div><div class="grp">${done?'<button class="btn" id="again">もう一度</button><button class="btn primary" id="nextQ">次の問題 →</button>':'<button class="btn primary" id="submit">回答する</button>'}</div></div></div>`;
 document.querySelectorAll('#view input[name=c]').forEach(inp=>inp.onchange=()=>{if(done)return;state.quiz.selected=inp.value;save();render()});
 $('openCard').onclick=()=>{state.view='cards';state.current=r.resource_id;save();render()};
 $('switchType').onclick=()=>{state.quiz={resource_id:r.resource_id,type:qz.type==='A'?'B':'A',seed:Date.now()%100000,answered:null};save();render()};
 if($('submit'))$('submit').onclick=()=>{if(!state.quiz.selected){toast('回答を選んでください');return}const ok=state.quiz.selected===qz.answer;state.events.push({resource_id:r.resource_id,quiz_type:qz.type,correct:ok,selected:state.quiz.selected,answered_at:new Date().toISOString()});state.quiz.answered={correct:ok};save();render()};
 if($('again'))$('again').onclick=()=>{state.quiz={resource_id:r.resource_id,type:qz.type,seed:Date.now()%100000,answered:null};save();render()};
 if($('nextQ'))$('nextQ').onclick=()=>{const pool=filtered();const nq=newQuizFrom(pool,r.resource_id);if(!nq){toast('該当する観光資源がありません');state.quiz=null;save();render();return}state.quiz=nq;save();render()}}

function renderStatus(list){const wrong=R.filter(r=>everWrong(r.resource_id)).length;const tried=new Set(state.events.map(e=>e.resource_id)).size;
 // Rapid 中の 知ってる／要復習 は進捗行に集約する（ヘッダーと二重に出さない）
 if(state.view==='rapid'){$('status').innerHTML=`<span>高速暗記 ${BSR.length}</span>`;$('count').textContent='';return}
 if(state.view==='nmap'){$('status').innerHTML=`<span>全国MAP ${NMALL.length} 資源</span>`;$('count').textContent='';return}
 $('status').innerHTML=`<span>詳細 ${R.length}</span><span>高速暗記 ${BSR.length}</span><span>挑戦済み ${tried}</span><span>誤答履歴あり ${wrong}</span>`;$('count').textContent=`${list.length} 件`}
function render(){disposeLiveMaps();document.querySelectorAll('#modes button').forEach(b=>b.classList.toggle('on',b.dataset.view===state.view));
 // 高速暗記では Rapid 専用フィルタだけで操作が完結するので共通フィルタを隠す（DOM は残す＝値も保つ）
 // 高速暗記・全国MAP はそれぞれ専用フィルタで完結するので共通フィルタを隠す（DOM は残す＝値も保つ）
 const ownFilters=state.view==='rapid'||state.view==='nmap';$('filters').hidden=ownFilters;$('filters').setAttribute('aria-hidden',ownFilters?'true':'false');
 if(state.view==='rapid'){if(!BSR.length){$('view').innerHTML='<div class="msg">高速暗記データ（data/broad_shallow.js）を読み込めません。</div>';renderStatus([]);return}
  renderStatus(filtered());renderRapid();return}
 if(state.view==='nmap'){renderStatus(filtered());renderNationalMap();return}
 if(!R.length){$('view').innerHTML='<div class="msg">観光資源データが読み込めません。</div>';return}
 const list=filtered();renderStatus(list);
 if(state.view==='quiz'){renderQuiz(list);wireMaps();return}
 const cur=state.current?R.find(r=>r.resource_id===state.current):null;
 if(cur&&!list.includes(cur)){state.current=null;save()}
 // 既存の詳細カード（全国MAP やクイズの「カードを見る」から開く導線）はそのまま。
 // 何も開いていないときは暗記カードのデッキを出す（TASK-021B）。
 if(cur&&list.includes(cur)){renderCard(cur,list);wireMaps();return}
 renderCardDeck();wireMaps()}

// ---- Rapid Study Mode v0.1 (TASK-013H)
// LIGHTWEIGHT wave 1 (data/broad_shallow.js) only. The DEEP 30 are NOT mixed into this pool in v0.1: the point is to
// drill the verified LIGHTWEIGHT set at speed. Front side shows the resource name alone — prefecture / category / hook stay
// hidden until 答えを見る, so the card can never leak its own answer. Only the current card is rendered.
const BS=window.GEO_BROAD_SHALLOW&&Array.isArray(window.GEO_BROAD_SHALLOW.resources)?window.GEO_BROAD_SHALLOW:null;
const BSR=BS?BS.resources.slice():[];
const BSCAT=Object.assign({},CAT,(BS&&BS.category_labels)||{});
const BSREG=(BS&&Array.isArray(BS.regions)&&BS.regions.length)?BS.regions:REGIONS;
const bsPrefs=r=>Array.isArray(r.prefectures)?r.prefectures:[];
// 47 都道府県と、その 8 地方分類（学習分類）。都道府県 select は地域で絞らず常に 47 件出す:
// 「中国 → 熊本県」を見たいとき、地域と都道府県を 2 回操作させずに 1 操作で移動できるようにするため。
const BS_REGION_PREFS={'北海道':['北海道'],
 '東北':['青森県','岩手県','宮城県','秋田県','山形県','福島県'],
 '関東':['茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県'],
 '中部':['新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県'],
 '近畿':['三重県','滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県'],
 '中国':['鳥取県','島根県','岡山県','広島県','山口県'],
 '四国':['徳島県','香川県','愛媛県','高知県'],
 '九州・沖縄':['福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県']};
const BS_ALL_PREFS=[].concat(...BSREG.map(x=>BS_REGION_PREFS[x]||[]));
const BS_PREF_REGION={};Object.keys(BS_REGION_PREFS).forEach(reg=>BS_REGION_PREFS[reg].forEach(p=>{BS_PREF_REGION[p]=reg}));
// 解説文の共有語彙（読みの補助）。runtime には VERIFIED の語だけが入っている契約（planning が gate）。
// ここでは値の形だけを確認し、読みを推測したり app 側で補ったりはしない。
const BSTERMS=(BS&&Array.isArray(BS.reading_terms)?BS.reading_terms:[]).filter(t=>t&&typeof t.term==='string'&&t.term.trim()&&typeof t.reading==='string'&&t.reading.trim());
// 表示中の一言特徴に「完全な term 文字列」が含まれる語だけを、本文に出てくる順で 1 語 1 回だけ返す
function termsIn(text){const t=String(text||'');const hit=[];
 BSTERMS.forEach(x=>{const i=t.indexOf(x.term);if(i>=0&&!hit.some(h=>h.term===x.term))hit.push({term:x.term,reading:x.reading,at:i})});
 return hit.sort((a,b)=>a.at-b.at)}
// 確定した読みだけを使う（推測して作らない）。答え表示後だけ ruby で出す。
const bsReading=r=>{const v=r&&(r.reading||r.yomi||r.kana);return typeof v==='string'&&v.trim()?v.trim():''};
const rubyName=r=>{const y=bsReading(r);return y?`<ruby>${esc(r.name)}<rp>（</rp><rt>${esc(y)}</rt><rp>）</rp></ruby>`:esc(r.name)};
const bsCatLabel=r=>(r.categories||[]).map(c=>BSCAT[c]||c).join('・');
// Rapid state: its own key and version. A corrupt / foreign / older payload is discarded, never migrated.
const RKEY='holavel_geography_rapid_v1';const RAPID_VERSION=1;
const rfresh=()=>({version:RAPID_VERSION,filters:{region:'',prefecture:'',priority:'',reviewOnly:false},known:[],review:[],index:0});
let rstate;try{const raw=JSON.parse(localStorage.getItem(RKEY)||'{}');rstate=(raw&&typeof raw==='object'&&raw.version===RAPID_VERSION)?Object.assign(rfresh(),raw):rfresh()}catch(e){rstate=rfresh()}
(function sanitizeRapid(){const ids=new Set(BSR.map(r=>r.id));
 // TASK-021B: 暗記カードは DEEP 30 も同じ 知ってる／要復習 を使う。既存の LIGHTWEIGHT id は落とさず、
 // DEEP の resource_id を許可 id に足すだけ（id の再発行も、保存済みデータの削除もしない）。
 R.forEach(r=>ids.add(r.resource_id));
 const clean=a=>Array.isArray(a)?a.filter(x=>typeof x==='string'&&ids.has(x)).filter((x,i,arr)=>arr.indexOf(x)===i):[];
 rstate.version=RAPID_VERSION;rstate.known=clean(rstate.known);rstate.review=clean(rstate.review);
 if(!rstate.filters||typeof rstate.filters!=='object')rstate.filters=rfresh().filters;
 const f=rstate.filters;f.region=typeof f.region==='string'?f.region:'';f.prefecture=typeof f.prefecture==='string'?f.prefecture:'';
 f.priority=(f.priority==='A'||f.priority==='B')?f.priority:'';f.reviewOnly=!!f.reviewOnly;
 if(!has(BS_PREF_REGION,f.prefecture))f.prefecture='';
 if(!has(BS_REGION_PREFS,f.region))f.region='';
 // 個別都道府県があれば都道府県を正として地域を補正する。都道府県が「すべて」なら保存済みの地域を保持する
 if(f.prefecture)f.region=BS_PREF_REGION[f.prefecture];
 rstate.index=Number.isInteger(rstate.index)&&rstate.index>=0?rstate.index:0})();
const rsave=()=>{try{localStorage.setItem(RKEY,JSON.stringify(rstate))}catch(e){}};
let rRevealed=false;
// 地域で候補を絞らない: 常に 47 都道府県を選べる（1 操作で別地方へ移動できるようにするため）
const rapidPrefOptions=()=>BS_ALL_PREFS.slice();
// 個別都道府県が選ばれているときは「都道府県が正」。地域では追加で絞らない（学習分類が別地方の複数県資源、
// 例: 関門橋（学習分類 中国 / 山口県・福岡県）を、福岡県を選んだときに取りこぼさないため）。
function rapidPool(){const f=rstate.filters;
 return BSR.filter(r=>(f.prefecture?bsPrefs(r).includes(f.prefecture):(!f.region||r.region===f.region))&&(!f.priority||r.priority===f.priority)&&(!f.reviewOnly||rstate.review.includes(r.id)))}
function rapidMark(id,how){const k=rstate.known.indexOf(id),v=rstate.review.indexOf(id);
 if(how==='known'){if(v>=0)rstate.review.splice(v,1);if(k<0)rstate.known.push(id)}
 else{if(k>=0)rstate.known.splice(k,1);if(v<0)rstate.review.push(id)}}
function rapidAdvance(pool){if(!pool.length)return;rRevealed=false;
 if(rstate.index>=pool.length-1){rstate.index=0;toast('1周しました')}else{rstate.index++}}
// 知ってる／要復習を押すと pool 自体が縮むことがある（「要復習のみ」で 知ってる を押した場合）。
// 古い pool のまま index を +1 すると、詰まった分と二重に進んで次の 1 件を飛ばしてしまう。
// action 後の pool に今の資源が残っているかどうかで一般判定する（どのボタンかでは判定しない）:
//   残っている → 新しい pool を基準に通常どおり次へ
//   消えた     → index は据え置き。詰まった結果、同じ位置に次の資源が来る。
//                末尾が消えた場合は renderRapid 冒頭の clamp が先頭へ戻す。
function rapidAfterMark(id){const pool=rapidPool();
 if(pool.some(r=>r.id===id)){rapidAdvance(pool)}else{rRevealed=false}}
// 「前へ」: 現在の filtered pool の中だけを 1 件戻る（フィルタ外へは飛ばない）。1 件目からは末尾へ loop し、
// 「次へ」の 末尾→先頭 と対称にする。履歴スタックは持たず index を計算するだけ。
function rapidBack(pool){if(!pool.length)return;rRevealed=false;
 if(rstate.index<=0){rstate.index=pool.length-1;toast('最後へ戻りました')}else{rstate.index--}}
// 「全国のどこか」= 既存の locator schematic（都道府県タイルの概略位置図）をそのまま再利用する。
// 実地図・実地点・座標ではない: 新しい renderer もデータも作らず、LIGHTWEIGHT の prefectures[] だけで塗る。
// 答え表示後にだけ生成する（front では DOM ごと作らない = reading / 都道府県 / カテゴリ / hook と同じ契約）。
// 既定は閉じた状態にして、TASK-013U で詰めた縦方向を増やさない。
function rapidLocatorHTML(r){const svg=locatorSVG(r);if(!svg)return '';
 return `<details class="rmapd"><summary>全国のどこか（都道府県の俯瞰）</summary>${svg}</details>`}
function rapidSourcesHTML(r){const s=r.sources||[];return s.length?`<details class="rsrc"><summary>出典（${s.length}）</summary><ul>${s.map(x=>`<li>${esc(x.authority)}　${x.url?`<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.url)}</a>`:''}</li>`).join('')}</ul></details>`:''}
function renderRapid(){
 const f=rstate.filters;const pool=rapidPool();
 if(rstate.index>=pool.length)rstate.index=0;
 const kn=pool.filter(r=>rstate.known.includes(r.id)).length,rv=pool.filter(r=>rstate.review.includes(r.id)).length;
 const bar=`<div class="rfilters">
  <label>地域 <select id="rRegion" aria-label="地域で絞り込む"><option value="">全国</option>${BSREG.map(x=>`<option value="${esc(x)}" ${f.region===x?'selected':''}>${esc(x)}</option>`).join('')}</select></label>
  <label>都道府県 <select id="rPref" aria-label="都道府県で絞り込む"><option value="">すべて</option>${rapidPrefOptions().map(x=>`<option value="${esc(x)}" ${f.prefecture===x?'selected':''}>${esc(x)}</option>`).join('')}</select></label>
  <label>優先度 <select id="rPri" aria-label="優先度で絞り込む"><option value="">すべて</option><option value="A" ${f.priority==='A'?'selected':''}>A</option><option value="B" ${f.priority==='B'?'selected':''}>B</option></select></label>
  <label class="chk"><input type="checkbox" id="rReview" ${f.reviewOnly?'checked':''} /> 要復習のみ</label>
  <span class="rprog" id="rProg">${pool.length?`${rstate.index+1} / ${pool.length}`:'0 / 0'}　<span class="rd">知ってる ${kn}　要復習 ${rv}</span></span>
 </div>
 <div class="rbarwrap"><div class="rbarline" id="rBar" role="progressbar" aria-valuemin="0" aria-valuemax="${pool.length}" aria-valuenow="${pool.length?rstate.index+1:0}" aria-label="学習の進捗"><span style="width:${pool.length?Math.round((rstate.index+1)/pool.length*100):0}%"></span></div></div>`;
 let body;
 if(!pool.length){
  body=`<div class="msg">${f.reviewOnly?'「要復習」に入れた資源はまだありません。フィルタを外して学習を始めてください。':'該当する資源がありません。地域・都道府県・優先度を変えてください。'}</div>`;
 }else{
  const r=pool[rstate.index];
  const ans=rRevealed?`<div class="ranswer">
    ${bsReading(r)?`<div class="rrow"><span class="rl">読み</span><span class="rv rruby">${rubyName(r)}</span></div>`:''}
    <div class="rrow"><span class="rl">都道府県</span><span class="lv">${bsPrefs(r).map(p=>`<span class="pref">${esc(p)}</span>`).join('')}${(bsPrefs(r).length===1&&bsPrefs(r)[0]===r.region)?'':`<span class="rreg" title="学習分類">${esc(r.region)}</span>`}</span></div>
    ${rapidLocatorHTML(r)}
    <div class="rrow"><span class="rl">カテゴリ</span><span class="rv">${esc(bsCatLabel(r))}</span></div>
    <div class="rrow"><span class="rl">一言特徴</span><span class="rv">${esc(r.recognition_hook)}</span></div>
    ${(r.aliases&&r.aliases.length)?`<div class="rrow"><span class="rl">別名</span><span class="rv">${r.aliases.map(a=>esc(a)).join('・')}</span></div>`:''}
    ${r.municipalities?`<div class="rrow"><span class="rl">所在</span><span class="rv rd">${esc(r.municipalities)}</span></div>`:''}
    ${(()=>{const th=termsIn(r.recognition_hook);return th.length?`<div class="rrow"><span class="rl">読みの補助</span><span class="rv rterms">${th.map(x=>`<span class="rterm">${esc(x.term)}（${esc(x.reading)}）</span>`).join('')}</span></div>`:''})()}
    ${rapidSourcesHTML(r)}
   </div>`:'<p class="rhide rd">答えを見るまで、都道府県・カテゴリ・特徴は非表示です。</p>';
  const mark=rstate.known.includes(r.id)?'<span class="rmk known">知ってる</span>':(rstate.review.includes(r.id)?'<span class="rmk review">要復習</span>':'');
  body=`<div class="rcard">
   <div class="rhead"><span class="rlabel">高速暗記　資源名 → 都道府県</span>${mark}</div>
   <div class="rname">${esc(r.name)}</div>
   ${ans}
   <div class="bar rbar">${rRevealed
     ? `<div class="grp"><button class="btn nav" id="rPrev" aria-label="前の資源へ">← 前へ</button><button class="btn ok" id="rKnown">知ってる</button><button class="btn warn" id="rReviewBtn">要復習</button></div><div class="grp"><button class="btn nav" id="rNext" aria-label="次の資源へ">次へ →</button></div>`
     : `<div class="grp"><button class="btn nav" id="rPrev" aria-label="前の資源へ">← 前へ</button><button class="btn primary" id="rShow">答えを見る</button></div><div class="grp"><button class="btn nav" id="rNext" aria-label="次の資源へ">次へ →</button></div>`}</div>
  </div>`;
 }
 $('view').innerHTML=`<div class="rapid">${bar}${body}</div>`;
 // 同期規則: 都道府県を選んだら都道府県を正として地域を合わせる（「すべて」なら地域は変えない）。
 // 地域を変えたら、選択中の県がその地域外のときだけ県を「すべて」に戻す（地域「全国」なら県を保持）。
 const applyFilters=()=>{f.priority=$('rPri').value;f.reviewOnly=$('rReview').checked;rstate.index=0;rRevealed=false;rsave();render()};
 if($('rPref'))$('rPref').onchange=()=>{const p=$('rPref').value;f.prefecture=p;if(p)f.region=BS_PREF_REGION[p];applyFilters()};
 if($('rRegion'))$('rRegion').onchange=()=>{const reg=$('rRegion').value;f.region=reg;
  if(reg&&f.prefecture&&BS_PREF_REGION[f.prefecture]!==reg)f.prefecture='';applyFilters()};
 ['rPri','rReview'].forEach(id=>{if($(id))$(id).onchange=applyFilters});
 if($('rShow'))$('rShow').onclick=()=>{rRevealed=true;render()};
 if($('rNext'))$('rNext').onclick=()=>{rapidAdvance(pool);rsave();render()};
 if($('rPrev'))$('rPrev').onclick=()=>{rapidBack(pool);rsave();render()};
 if($('rKnown'))$('rKnown').onclick=()=>{const id=pool[rstate.index].id;rapidMark(id,'known');rapidAfterMark(id);rsave();render()};
 if($('rReviewBtn'))$('rReviewBtn').onclick=()=>{const id=pool[rstate.index].id;rapidMark(id,'review');rapidAfterMark(id);rsave();render()};
}

// ---- 全国MAP（第 4 モード, TASK-014H）
// ジャンルは **既存の categories[] そのもの**。新しい分類データも AI による分類判断も作らない
// （resource_id → categories の値 → ジャンル、で必ず追跡できる）。
// 情報の層を 2 つに分け、精度差をラベルで明示する:
//   LAYER 1 全国分布      … 全資源の prefectures[] を県単位で数える。県庁所在地・県の中心点は作らない
//   LAYER 2 確認済み実地点 … visual_locations.js の 30 資源 58 点だけ。LIGHTWEIGHT に架空の点を作らない
// ---- 暗記カード（TASK-021B）
// 539 資源を「めくって覚える」ための view layer。新しい resource も新しい解説文も作らない:
//   DEEP 30        = data/resources.js（詳細カードはこれまでどおり別に開ける）
//   LIGHTWEIGHT509 = data/broad_shallow.js
// この 2 つを runtime で結合するだけで、card 用のデータファイルへコピーはしない。
// 件数はすべて実データから数える（固定値を持たない）。
const cardModel=[].concat(
 R.map(r=>({id:r.resource_id,tier:'DEEP',name:r.name,reading:r.reading||'',prefs:prefs(r),region:r.region,
  cats:r.categories||[],hook:r.summary||'',aliases:[],muni:munis(r).join('・'),priority:r.exam_priority||'',
  sources:r.sources||[],deep:r,hasDeepDetail:true})),
 BSR.map(r=>({id:r.id,tier:'LIGHT',name:r.name,reading:bsReading(r),prefs:bsPrefs(r),region:r.region,
  cats:r.categories||[],hook:r.recognition_hook||'',aliases:Array.isArray(r.aliases)?r.aliases:[],
  muni:typeof r.municipalities==='string'?r.municipalities:'',priority:r.priority||'',
  sources:r.sources||[],light:r,hasDeepDetail:false})));
const CARD_ALL=(()=>{const seen=new Set();return cardModel.filter(c=>{if(seen.has(c.id))return false;seen.add(c.id);return true})})();
const CARD_DEEP=CARD_ALL.filter(c=>c.tier==='DEEP');
const CARD_LIGHT=CARD_ALL.filter(c=>c.tier==='LIGHT');
const cardCat=c=>c.cats.map(x=>BSCAT[x]||x).join('・');
// 知ってる／要復習 は高速暗記と同じ保存領域を使う（同じ資源を 2 か所で別々に覚え直さない）。
// LIGHTWEIGHT の id はそのまま、DEEP は resource_id をそのまま使うので、id の再発行は無い。
const cardKnown=id=>rstate.known.includes(id);
const cardReview=id=>rstate.review.includes(id);
function cardMatch(c){const q=(F.search||'').toLowerCase();
 return (F.prefecture?c.prefs.includes(F.prefecture):(!F.region||c.region===F.region))
  &&(!F.category||c.cats.includes(F.category))
  &&(!F.priority||c.priority===F.priority)
  &&(!F.wrongOnly||everWrong(c.id))
  &&(!q||[c.name,c.reading,c.muni,...c.prefs].join(' ').toLowerCase().includes(q))}
const CARD_DECKS=[{key:'ALL',label:'全資源'},{key:'DEEP',label:'詳細'},{key:'LIGHT',label:'速習'},{key:'REVIEW',label:'復習'}];
function cardBase(deck){
 if(deck==='DEEP')return CARD_DEEP;
 if(deck==='LIGHT')return CARD_LIGHT;
 if(deck==='REVIEW')return CARD_ALL.filter(c=>cardReview(c.id));
 return CARD_ALL}
const cardDeckCount=deck=>cardBase(deck).filter(cardMatch).length;
// シャッフルは並び順だけを変える（カードの中身も id も変えない）。seed を保存して同じ並びを再現する
function cardPool(){const pool=cardBase(state.card.deck).filter(cardMatch);const s=state.card.seed;
 if(!s)return pool;const rnd=seeded(s);const a=pool.slice();
 for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));const t=a[i];a[i]=a[j];a[j]=t}return a}
let cFlipped=false;
function cardBackHTML(c){
 const loc=locatorSVG(c.tier==='DEEP'?c.deep:c.light);
 const src=(c.sources||[]).length?`<details class="rsrc"><summary>出典（${c.sources.length}）</summary><ul>${c.sources.map(x=>`<li>${esc(x.authority||'')}　${x.url?`<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.title||x.url)}</a>`:esc(x.title||'')}</li>`).join('')}</ul></details>`:'';
 return `<div class="cback">
  ${c.reading?`<div class="rrow"><span class="rl">読み</span><span class="rv rruby">${esc(c.reading)}</span></div>`:''}
  <div class="rrow"><span class="rl">都道府県</span><span class="lv">${c.prefs.map(p=>`<span class="pref">${esc(p)}</span>`).join('')}${(c.prefs.length===1&&c.prefs[0]===c.region)?'':`<span class="rreg" title="学習分類">${esc(c.region)}</span>`}</span></div>
  ${loc?`<details class="rmapd"><summary>全国のどこか（都道府県の俯瞰）</summary>${loc}</details>`:''}
  <div class="rrow"><span class="rl">カテゴリ</span><span class="rv">${esc(cardCat(c))}</span></div>
  ${c.hook?`<div class="rrow"><span class="rl">${c.tier==='DEEP'?'要点':'一言特徴'}</span><span class="rv">${esc(c.hook)}</span></div>`:''}
  ${c.aliases.length?`<div class="rrow"><span class="rl">別名</span><span class="rv">${c.aliases.map(a=>esc(a)).join('・')}</span></div>`:''}
  ${(c.tier==='DEEP'&&c.deep.memory_hook)?`<div class="rrow"><span class="rl">覚え方</span><span class="rv">${esc(c.deep.memory_hook)}</span></div>`:''}
  ${c.muni?`<div class="rrow"><span class="rl">所在</span><span class="rv rd">${esc(c.muni)}</span></div>`:''}
  ${src}
 </div>`}
function renderCardDeck(){
 const deck=state.card.deck;const pool=cardPool();
 if(state.card.index>=pool.length)state.card.index=0;
 const kn=pool.filter(c=>cardKnown(c.id)).length,rv=pool.filter(c=>cardReview(c.id)).length;
 const tabs=CARD_DECKS.map(d=>`<button type="button" class="cdeck${deck===d.key?' on':''}" data-deck="${esc(d.key)}" aria-pressed="${deck===d.key?'true':'false'}">${esc(d.label)} <span class="cn">${cardDeckCount(d.key)}</span></button>`).join('');
 const bar=`<div class="cbar">
   <div class="cdecks" role="group" aria-label="カードの範囲">${tabs}</div>
   <div class="ctools">
    <button type="button" class="btn sm" id="cShuffle" aria-pressed="${state.card.seed?'true':'false'}">${state.card.seed?'シャッフル中':'シャッフル'}</button>
    ${state.card.seed?'<button type="button" class="btn sm" id="cOrder">元の順</button>':''}
    <span class="rprog" id="cProg">${pool.length?`${state.card.index+1} / ${pool.length}`:'0 / 0'}　<span class="rd">知ってる ${kn}　要復習 ${rv}</span></span>
   </div>
  </div>
  <div class="rbarwrap"><div class="rbarline" role="progressbar" aria-valuemin="0" aria-valuemax="${pool.length}" aria-valuenow="${pool.length?state.card.index+1:0}" aria-label="学習の進捗"><span style="width:${pool.length?Math.round((state.card.index+1)/pool.length*100):0}%"></span></div></div>`;
 let body;
 if(!pool.length){
  body=`<div class="msg">${deck==='REVIEW'?'復習対象はありません。カードで「要復習」を押すとここに入ります。':'該当するカードがありません。地域・都道府県・カテゴリ・検索条件を変えてください。'}</div>`;
 }else{
  const c=pool[state.card.index];
  const mark=cardKnown(c.id)?'<span class="rmk known">知ってる</span>':(cardReview(c.id)?'<span class="rmk review">要復習</span>':'');
  body=`<div class="rcard ccard">
   <div class="rhead"><span class="rlabel">暗記カード　資源名 → 都道府県・分類・特徴</span><span class="ctier t-${esc(c.tier)}">${c.tier==='DEEP'?'詳細':'速習'}</span>${mark}</div>
   <button type="button" class="cflip" id="cFlip" aria-expanded="${cFlipped?'true':'false'}">
    <span class="rname">${esc(c.name)}</span>
    <span class="cstate">${cFlipped?'答えを表示中（もう一度押すと隠す）':'表を表示中（押す・Enter・Space でめくる）'}</span>
   </button>
   ${cFlipped?cardBackHTML(c):'<p class="rhide rd">めくるまで、都道府県・カテゴリ・特徴は非表示です。</p>'}
   <div class="bar rbar">${cFlipped
     ? `<div class="grp"><button class="btn nav" id="cPrev" aria-label="前のカードへ">← 前へ</button><button class="btn ok" id="cKnown">知ってる</button><button class="btn warn" id="cReviewBtn">要復習</button></div><div class="grp">${c.hasDeepDetail?'<button class="btn" id="cDetail">詳細カードを開く</button>':''}<button class="btn nav" id="cNext" aria-label="次のカードへ">次へ →</button></div>`
     : `<div class="grp"><button class="btn nav" id="cPrev" aria-label="前のカードへ">← 前へ</button><button class="btn primary" id="cShow">めくる</button></div><div class="grp"><button class="btn nav" id="cNext" aria-label="次のカードへ">次へ →</button></div>`}</div>
  </div>`;
 }
 $('view').innerHTML=`<div class="rapid carddeck">${bar}${body}</div>`;
 // 件数表示は詳細 30 件ではなく、いま学習しているデッキの件数にそろえる（実データから数える）
 $('count').textContent=`${pool.length} 件`;
 const move=(d)=>{if(!pool.length)return;cFlipped=false;
  if(d>0){if(state.card.index>=pool.length-1){state.card.index=0;toast('1周しました')}else{state.card.index++}}
  else{if(state.card.index<=0){state.card.index=pool.length-1;toast('最後へ戻りました')}else{state.card.index--}}
  save();render()};
 document.querySelectorAll('.cdeck').forEach(b=>b.onclick=()=>{state.card.deck=b.dataset.deck;state.card.index=0;cFlipped=false;save();render()});
 if($('cShuffle'))$('cShuffle').onclick=()=>{state.card.seed=(Date.now()%100000)||1;state.card.index=0;cFlipped=false;save();render();toast('シャッフルしました')};
 if($('cOrder'))$('cOrder').onclick=()=>{state.card.seed=0;state.card.index=0;cFlipped=false;save();render();toast('元の順に戻しました')};
 if($('cFlip'))$('cFlip').onclick=()=>{cFlipped=!cFlipped;render()};
 if($('cShow'))$('cShow').onclick=()=>{cFlipped=true;render()};
 if($('cNext'))$('cNext').onclick=()=>move(1);
 if($('cPrev'))$('cPrev').onclick=()=>move(-1);
 if($('cKnown'))$('cKnown').onclick=()=>{const c=pool[state.card.index];rapidMark(c.id,'known');rsave();move(1)};
 if($('cReviewBtn'))$('cReviewBtn').onclick=()=>{const c=pool[state.card.index];rapidMark(c.id,'review');rsave();
  if(state.card.deck==='REVIEW'){cFlipped=false;save();render()}else{move(1)}};
 if($('cDetail'))$('cDetail').onclick=()=>{const c=pool[state.card.index];state.current=c.id;save();render()};
}

const NMALL=[].concat(
 R.map(r=>({id:r.resource_id,name:r.name,cats:r.categories||[],prefs:prefs(r),region:r.region,layer:'DEEP',pts:mapPoints(r).points.length,exam:(r.past_exam_links||[]).length})),
 BSR.map(r=>({id:r.id,name:r.name,cats:r.categories||[],prefs:bsPrefs(r),region:r.region,layer:'LIGHT',pts:0,exam:0})));
// chip は「実際に 1 件以上ある categories」からだけ作る（0 件のラベルは出さない）
const NMGENRES=(()=>{const c={};NMALL.forEach(r=>r.cats.forEach(g=>{c[g]=(c[g]||0)+1}));
 return Object.keys(c).sort((a,b)=>c[b]-c[a]||(a<b?-1:1)).map(g=>({key:g,label:BSCAT[g]||g,n:c[g]}))})();
const NMKEYS=NMGENRES.map(g=>g.key);
(function sanitizeNmap(){const n=(state.nmap&&typeof state.nmap==='object')?state.nmap:{};
 state.nmap={genres:Array.isArray(n.genres)?n.genres.filter(g=>NMKEYS.includes(g)).filter((g,i,a)=>a.indexOf(g)===i):[],
  region:has(BS_REGION_PREFS,n.region)?n.region:'',
  prefecture:has(BS_PREF_REGION,n.prefecture)?n.prefecture:'',
  points:n.points===true};   // 旧仕様「確認済み実地点を表示」のフラグ。実地図が主役になった v0.23.0 以降は表示の判断に使わないが、
                            // 保存済み state を壊さないよう boolean として残す（false でも地図は出る）
 if(state.nmap.prefecture)state.nmap.region=BS_PREF_REGION[state.nmap.prefecture]})();
// 絞り込みは カード／クイズ／高速暗記 と同じ意味論: ジャンルは OR、個別都道府県を選んでいる間は県が正
function nmapFiltered(){const n=state.nmap;
 return NMALL.filter(r=>(!n.genres.length||r.cats.some(c=>n.genres.includes(c)))
  &&(n.prefecture?r.prefs.includes(n.prefecture):(!n.region||r.region===n.region)))}
// 全国分布: 県ごとの該当資源数。複数県資源は関係する県すべてに数える（資源数は 1 のまま）
function nmapCounts(list){const c={};list.forEach(r=>r.prefs.forEach(p=>{c[p]=(c[p]||0)+1}));return c}
// 既存の locator schematic のタイル配置をそのまま使い、件数の濃淡で塗る。新しい地図アセットは作らない
function nmapDistSVG(cnt){if(!LOC)return '<div class="msg">全国図を読み込めません。</div>';
 const lvl=n=>n===0?'z0':(n<=2?'z1':(n<=4?'z2':'z3'));
 const tiles=LOC.tiles.map(t=>{const s=t.s,n=cnt[t.name]||0;
  return `<g class="nt ${lvl(n)}"><title>${esc(t.name)} ${n} 件</title><rect x="${(t.x-s/2).toFixed(1)}" y="${(t.y-s/2).toFixed(1)}" width="${s}" height="${s}" rx="5"/><text x="${t.x}" y="${(t.y+(s>30?5:4)).toFixed(1)}" font-size="${s>30?12:9}">${esc(t.short)}</text></g>`}).join('');
 const inset=LOC.inset?`<g class="inset"><rect x="${LOC.inset.x}" y="${LOC.inset.y}" width="${LOC.inset.w}" height="${LOC.inset.h}" rx="4"/><text x="${LOC.inset.x}" y="${(LOC.inset.y+LOC.inset.h+11).toFixed(1)}" font-size="8">${esc(LOC.inset.label||'')}</text></g>`:'';
 return `<div class="locator nmapdist"><svg viewBox="0 0 ${LOC.width} ${LOC.height}" role="img" aria-label="選択中のジャンルの都道府県別分布（概略位置図）">${inset}${tiles}</svg>
  <div class="nmleg"><span><i class="sw z0"></i>0</span><span><i class="sw z1"></i>1〜2</span><span><i class="sw z2"></i>3〜4</span><span><i class="sw z3"></i>5 以上</span></div>
  <div class="mnote">概略位置図（海岸線なし・タイルは概ねの位置）。都道府県単位の分布で、実地点ではありません。</div></div>`}
// 確認済み実地点（LAYER 2）: visual_locations の点だけを使う。1 点も作らない
function nmapPoints(list){const out=[];
 list.filter(r=>r.layer==='DEEP').forEach(r=>{const res=R.find(x=>x.resource_id===r.id);if(!res)return;
  // 資源と地点の同定は resource_id ＋ 正本の point id の組で行う（名前や並び順では同定しない）
  mapPoints(res).points.forEach((p,i)=>out.push({lat:p.lat,lon:p.lon,label:p.label,name:res.name,
   rid:res.resource_id,pid:(typeof p.id==='string'&&p.id)?p.id:(res.resource_id+'#'+i),role:p.role||''}))});
 return out}
// 全国MAP はページセッション内だけで カメラ（中心・縮尺）と選択中の資源／地点を覚える。
// localStorage へは保存しない（新しい永続 state を増やさない）。reload でカメラは既定へ戻る。
let nmMap=null,nmMapEl=null,nmMarkers=[],nmCam=null,nmSelRid=null,nmSelPid=null;
const NM_HOME={center:[37.6,137.4],zoom:5};   // カメラの既定位置。表示用の設定であって資源の座標データではない
function nmClearMap(){nmMap=null;nmMapEl=null;nmMarkers=[]}
// 地図は全国MAP に入ったときに 1 度だけ作る。ジャンル・県を変えても instance と背景タイルはそのまま使い、
// marker / ラベル / 一覧 / 選択パネルだけを差し替える（毎回作り直すとタイルを取り直し、カメラも失われる）。
function nmMount(el){if(!el||!window.L)return null;
 if(nmMap&&nmMapEl===el)return nmMap;
 try{const m=L.map(el,{scrollWheelZoom:false,attributionControl:false,zoomControl:true,minZoom:GSI.minZoom,maxZoom:GSI.maxZoom});
  const fail=el.parentElement&&el.parentElement.querySelector('.mfail');let okT=0,badT=0;
  const tl=L.tileLayer(window.GEO_TILE_URL_OVERRIDE||GSI.url,{minZoom:GSI.minZoom,maxZoom:GSI.maxZoom,crossOrigin:false});
  // marker が 0 件であることと、背景タイルが読めないことは別の状態として扱う
  tl.on('tileload',()=>{okT++;if(fail)fail.hidden=true});tl.on('tileerror',()=>{badT++;if(!okT&&badT>=4&&fail){fail.hidden=false}});tl.addTo(m);
  const c=nmCam&&nmCam.center?nmCam:NM_HOME;m.setView(c.center,c.zoom);
  const remember=()=>{try{const ce=m.getCenter();nmCam={center:[ce.lat,ce.lng],zoom:m.getZoom()}}catch(e){}};
  m.on('moveend',remember);m.on('zoomend',()=>{remember();nmLabels()});
  el.dataset.ready='1';nmMap=m;nmMapEl=el;liveMaps[el.id]=m;softInvalidate(el.id,m,50);return m}
 catch(e){const fail=el.parentElement&&el.parentElement.querySelector('.mfail');if(fail)fail.hidden=false;return null}}
// ラベルは既存 Leaflet の tooltip だけで出す。位置は動かさず、混雑するときは出す数を間引く。
// 少数なら広域でも名前を出す。多いときは拡大したときだけ出し、混雑する場所では出す数を間引く
const NM_LABEL_ZOOM=8, NM_LABEL_MAX=26, NM_LABEL_FEW=12;
function nmLabels(){if(!nmMap)return;
 let vis=[];try{const b=nmMap.getBounds();vis=nmMarkers.filter(mk=>b.contains(mk.getLatLng()))}catch(e){vis=nmMarkers.slice()}
 const z=nmMap.getZoom(),show=vis.length<=NM_LABEL_FEW||(z>=NM_LABEL_ZOOM&&vis.length<=NM_LABEL_MAX);
 nmMarkers.forEach(mk=>{const sel=mk._nm&&mk._nm.pid===nmSelPid;
  const want=sel||(show&&vis.indexOf(mk)>=0);
  const t=mk.getTooltip();if(!t)return;
  if(want!==!!t.options.permanent){mk.unbindTooltip();mk.bindTooltip(mk._nm.label,{permanent:want,direction:'top',offset:[0,-6],className:'nmlab'+(sel?' sel':'')})}
  else if(sel&&t.options.className.indexOf('sel')<0){mk.unbindTooltip();mk.bindTooltip(mk._nm.label,{permanent:want,direction:'top',offset:[0,-6],className:'nmlab sel'})}
  else if(!sel&&t.options.className.indexOf('sel')>=0){mk.unbindTooltip();mk.bindTooltip(mk._nm.label,{permanent:want,direction:'top',offset:[0,-6],className:'nmlab'})}})}
// 絞り込みに該当する地点だけを marker として置き直す。地図・背景タイル・カメラには触らない。
function nmDrawMarkers(pts){if(!nmMap)return;
 nmMarkers.forEach(mk=>{try{nmMap.removeLayer(mk)}catch(e){}});nmMarkers=[];
 pts.forEach(p=>{const mk=L.circleMarker([p.lat,p.lon],{radius:6,color:'#fff',weight:2,fillColor:'#1f5f8b',fillOpacity:.95});
  mk._nm=p;mk.bindTooltip(p.label,{permanent:false,direction:'top',offset:[0,-6],className:'nmlab'});
  mk.bindPopup(`<span class="pplb">教材</span><b>${esc(p.name)}</b><br><span class="pplb">学習地点</span>${esc(p.label)}${p.role?`<br><span class="pplb">役割</span>${esc(PT_ROLE[p.role]||p.role)}`:''}`,{closeButton:false});
  // マーカーを押したら「資源＋地点」を選ぶ。マウス操作では keyboard focus を動かさない
  mk.on('click',()=>{nmSelect(p.rid,p.pid,{pan:false,scroll:true})});
  mk.addTo(nmMap);nmMarkers.push(mk)});
 nmLabels()}
// 結果一覧から カードを開く。絞り込みで隠れている場合だけ共通フィルタを解除して必ず開けるようにする
function nmapOpenCard(id){const r=R.find(x=>x.resource_id===id);if(!r)return;
 if(!filtered().includes(r)){F.region='';F.prefecture='';F.category='';F.priority='';F.wrongOnly=false;F.search='';initFilters();toast('カードを開くため絞り込みを解除しました')}
 state.view='cards';state.current=id;save();render()}
// フィルタ操作のたびに #view を作り直すため、操作していた control の focus が body へ落ちる。
// 「操作前に focus があった control」を安定したキーで覚え、再描画後に同じ control へ戻す。
// activeElement が全国MAP の外（mouse / touch で body のまま）なら何もしない＝focus を強制しない。
let nmFocus=null;
const nmSel=v=>(window.CSS&&CSS.escape)?CSS.escape(String(v)):String(v).replace(/["\\]/g,'\\$&');
function nmFocusKey(){const a=document.activeElement;
 if(!a||!a.closest||!a.closest('.nmap'))return null;
 if(a.classList&&a.classList.contains('nchip'))return 'chip:'+(a.dataset.g||'');
 if(a.classList&&a.classList.contains('nitem'))return 'item:'+(a.dataset.rid||'');
 return a.id?'id:'+a.id:null}
function nmRestoreFocus(){const k=nmFocus;nmFocus=null;if(!k)return;
 let el=null;
 if(k.indexOf('chip:')===0)el=document.querySelector('.nchip[data-g="'+nmSel(k.slice(5))+'"]');
 else if(k.indexOf('item:')===0)el=document.querySelector('.nitem[data-rid="'+nmSel(k.slice(5))+'"]');
 else if(k.indexOf('id:')===0)el=document.getElementById(k.slice(3));
 if(el&&typeof el.focus==='function')el.focus()}
// 全国MAP の要約: 教材の数と地点の数を混同しないよう、4 つを別々に数える
function nmapSummary(list){const withPts=list.filter(r=>r.layer==='DEEP'&&r.pts>0);
 return {res:list.length,resWithPts:withPts.length,pts:withPts.reduce((a,r)=>a+r.pts,0),
  prefOnly:list.length-withPts.length,prefN:Object.keys(nmapCounts(list)).length}}
// 選択中の資源が絞り込みから外れたら選択を解除する（別の資源へ勝手に置き換えない。カメラは保持）
function nmPruneSelection(list){if(!nmSelRid)return;
 if(!list.some(r=>r.id===nmSelRid)){nmSelRid=null;nmSelPid=null}}
function nmSelectedInfo(){if(!nmSelRid)return null;
 const r=NMALL.find(x=>x.id===nmSelRid);if(!r)return null;
 const res=R.find(x=>x.resource_id===nmSelRid);
 const pts=res?nmapPoints([r]):[];
 return {r,pts}}
// 資源＋地点を選ぶ。pan=true のときだけカメラを動かす
function nmSelect(rid,pid,opt){opt=opt||{};
 nmSelRid=rid||null;nmSelPid=pid||null;
 if(opt.pan&&nmMap){const mine=nmMarkers.filter(mk=>mk._nm.rid===rid);
  const one=pid?mine.filter(mk=>mk._nm.pid===pid):[];
  const use=one.length?one:mine;
  if(use.length===1)nmMap.setView(use[0].getLatLng(),Math.max(nmMap.getZoom(),11),{animate:false});
  else if(use.length>1)nmMap.fitBounds(L.latLngBounds(use.map(mk=>mk.getLatLng())),{padding:[40,40],maxZoom:11});}
 nmPanel();nmListMark(!!opt.scroll);nmLabels();
 if(nmSelPid&&nmMap){const mk=nmMarkers.find(x=>x._nm.pid===nmSelPid);if(mk)mk.openPopup()}}
// 選択パネル（資源名・県・ジャンル・地点一覧）
function nmPanel(){const el=$('nmSel');if(!el)return;
 const info=nmSelectedInfo();
 if(!info){el.innerHTML='<div class="rd">地図のマーカー、または一覧の「地図で確認」を選ぶと、ここに資源の情報が出ます。</div>';return}
 const {r,pts}=info;
 const g=r.cats.map(c=>BSCAT[c]||c).join('・');
 const rows=pts.length?pts.map(p=>`<li><button type="button" class="nmpt${p.pid===nmSelPid?' on':''}" data-rid="${esc(p.rid)}" data-pid="${esc(p.pid)}"><span class="ptn">${esc(p.label)}</span>${p.role?`<span class="ptr">${esc(PT_ROLE[p.role]||p.role)}</span>`:''}</button></li>`).join('')
  :'<li class="rd">この教材は県単位の情報のみで、地図に出せる学習地点は登録されていません。</li>';
 el.innerHTML=`<div class="nmselhd"><span class="lb">教材</span><b>${esc(r.name)}</b><span class="npf">${r.prefs.map(x=>esc(x)).join('・')}</span></div>
  <div class="ngn"><span class="lb">教材のジャンル</span>${esc(g)}</div>
  <div class="rd">${r.layer==='DEEP'?`詳細 ${R.length} 資源`:`高速暗記 ${BSR.length} 資源（県単位）`}${pts.length?`・この教材の学習地点 ${pts.length} 地点`:''}</div>
  ${pts.length?'<div class="lb ptsh">学習地点（教材に関連する地点）</div>':''}
  <ul class="nmpts">${rows}</ul>
  ${r.layer==='DEEP'?`<button type="button" class="btn nsm nmcard" data-rid="${esc(r.id)}">カードで学ぶ</button>`:''}`;
 el.querySelectorAll('.nmpt').forEach(b=>b.onclick=()=>nmSelect(b.dataset.rid,b.dataset.pid,{pan:true}));
 const cb=el.querySelector('.nmcard');if(cb)cb.onclick=()=>nmapOpenCard(cb.dataset.rid)}
// 一覧側の強調。必要なときだけ該当行までスクロールする
function nmListMark(scroll){document.querySelectorAll('.nrow').forEach(li=>{
  const on=li.dataset.rid===nmSelRid;li.classList.toggle('on',on);
  if(on&&scroll&&li.scrollIntoView){const box=li.closest('.nlistwrap');
   if(box){const a=li.getBoundingClientRect(),b=box.getBoundingClientRect();
    if(a.top<b.top||a.bottom>b.bottom)li.scrollIntoView({block:'nearest'})}}})}
// 一覧と要約と分布を、地図を作り直さずに更新する
function nmSync(){const n=state.nmap,list=nmapFiltered(),cnt=nmapCounts(list),sum=nmapSummary(list);
 nmPruneSelection(list);
 const pts=nmapPoints(list);
 const gl=n.genres.length?n.genres.map(g=>BSCAT[g]||g).join('・'):'すべてのジャンル';
 const sm=$('nmSum');
 if(sm)sm.innerHTML=`<b>${esc(gl)}</b>${n.genres.length>1?`<span class="rd">（${n.genres.length}ジャンル選択中・いずれかに該当）</span>`:''}`
  +`　教材 <b>${sum.res}</b> 資源 / <b>${sum.prefN}</b> 都道府県`
  +`　うち学習地点あり <b>${sum.resWithPts}</b> 資源・地図に <b>${sum.pts}</b> 地点`
  +`　県単位のみ <b>${sum.prefOnly}</b> 資源`;
 const fit=$('nmFit');if(fit){fit.disabled=!pts.length;fit.title=pts.length?'':'この絞り込みに該当する教材には、地図に出せる学習地点がありません'}
 const zero=$('nmZero');if(zero)zero.hidden=!!pts.length;
 const dist=$('nmDist');if(dist)dist.innerHTML=nmapDistSVG(cnt)+(Object.keys(cnt).length
  ?`<div class="nprefs">${Object.entries(cnt).sort((a,b)=>b[1]-a[1]||BS_ALL_PREFS.indexOf(a[0])-BS_ALL_PREFS.indexOf(b[0])).map(([p,c])=>`<span class="npref"><b>${esc(p)}</b> ${c}</span>`).join('')}</div>`
  :'<div class="msg">該当する資源がありません。ジャンル・学習分類・都道府県を変えてください。</div>');
 const lw=$('nmList');
 if(lw)lw.innerHTML=list.length?list.map(r=>{const g=r.cats.map(c=>BSCAT[c]||c).join('・');
   const ex=r.exam?`<span class="nex">過去問 ${r.exam}</span>`:'';
   const acc=r.layer==='DEEP'&&r.pts?`学習地点 ${r.pts}`:'県単位／地点未登録';
   const act=r.layer==='DEEP'
    ?`${r.pts?`<button type="button" class="nbtn map" data-rid="${esc(r.id)}">地図で確認</button>`:''}<button type="button" class="nbtn card" data-rid="${esc(r.id)}">カードで学ぶ</button>`
    :'';
   return `<li class="nrow${r.id===nmSelRid?' on':''}" data-rid="${esc(r.id)}">
    <div class="nmeta"><span class="nnm">${esc(r.name)}${ex}</span><span class="npf">${r.prefs.map(x=>esc(x)).join('・')}</span>
     <span class="ngn">${esc(g)}</span><span class="nac ${r.layer==='DEEP'&&r.pts?'has':''}">${esc(acc)}</span></div>
    <div class="nact">${act}</div></li>`}).join('')
  :'<li class="msg">該当する資源がありません。</li>';
 const hd=$('nmListH');if(hd)hd.textContent=`該当資源（${list.length}）`;
 if(lw){lw.querySelectorAll('.nbtn.map').forEach(b=>b.onclick=()=>nmSelect(b.dataset.rid,null,{pan:true}));
  lw.querySelectorAll('.nbtn.card').forEach(b=>b.onclick=()=>nmapOpenCard(b.dataset.rid))}
 nmDrawMarkers(pts);nmPanel();nmListMark(false)}
// 全国MAP の骨組みは 1 度だけ作る。以後の絞り込み操作は nmSync だけで済ませる
function renderNationalMap(){const n=state.nmap;
 const chips=NMGENRES.map(g=>`<button type="button" class="nchip${n.genres.includes(g.key)?' on':''}" data-g="${esc(g.key)}" aria-pressed="${n.genres.includes(g.key)?'true':'false'}">${esc(g.label)} <span class="nn">${g.n}</span></button>`).join('');
 const mapId='nm'+(++mapSeq);const libOK=!!window.L;
 // 出所表記は Card の実地図と同じものを使う（GSI.attr ＋ ZL5〜8 の追加出所）。折りたたまず常時表示する
 const attr=`<div class="mattr">${esc(GSI.attr)}　<a href="${GSI.list}" target="_blank" rel="noopener">地理院タイル一覧</a>
   <div class="zl58"><b>${esc(GSI.zl58note)}</b> ${esc(GSI.zl58src)}</div>
   <div class="rd">マーカーは学習用の代表地点で、区域全体を示すものではありません。登録教材の分布です。全国の観光資源を網羅した統計ではありません。</div></div>`;
 const mapcol=libOK
  ?`<div class="nmreal"><p class="nmmean">ジャンルは<b>教材単位</b>の分類です。地図に出るのは<b>その教材の学習地点</b>で、山・湖・建物などジャンルとは種類が違うことがあります。</p><div class="realmap" id="${mapId}"></div>
    <div class="msg nmzero" id="nmZero" hidden>この絞り込みに該当する教材には、地図に出せる学習地点が登録されていません（背景地図・県別の教材分布・該当教材一覧は使えます）。</div>
    <div class="mfail" hidden>実地図を読み込めません（ネットワークまたは地図ライブラリ）。下の「県別の教材分布」と該当資源一覧をご利用ください。</div>
    ${attr}</div>`
  :`<div class="nmreal"><p class="nmmean">ジャンルは<b>教材単位</b>の分類です。地図に出るのは<b>その教材の学習地点</b>で、山・湖・建物などジャンルとは種類が違うことがあります。</p><div class="mfail">実地図を読み込めません（地図ライブラリを読み込めません）。下の「県別の教材分布」と該当資源一覧をご利用ください。</div>${attr}</div>`;
 $('view').innerHTML=`<div class="nmap">
  <div class="nmfil">
   <div class="nchips" role="group" aria-label="ジャンルで絞り込む">${chips}</div>
   <div class="nmrow">
    <button type="button" class="btn nsm" id="nmAll">ジャンルをすべて選択</button>
    <button type="button" class="btn nsm" id="nmClear">絞り込みを解除</button>
    <label>学習分類 <select id="nmRegion" aria-label="学習分類で絞り込む"><option value="">全国</option>${BSREG.map(x=>`<option value="${esc(x)}" ${n.region===x?'selected':''}>${esc(x)}</option>`).join('')}</select></label>
    <label>都道府県 <select id="nmPref" aria-label="都道府県で絞り込む"><option value="">すべて</option>${BS_ALL_PREFS.map(x=>`<option value="${esc(x)}" ${n.prefecture===x?'selected':''}>${esc(x)}</option>`).join('')}</select></label>
    <span class="nmcam"><button type="button" class="btn nsm" id="nmFit">該当地点を表示</button><button type="button" class="btn nsm" id="nmHome">全国に戻る</button></span>
   </div>
   <p class="nmsum" id="nmSum"></p>
  </div>
  <div class="nmmain">
   <div class="nmmapcol">${mapcol}</div>
   <aside class="nmside">
    <h3 class="nmh">選択中の資源</h3>
    <div class="nmsel" id="nmSel"></div>
    <h3 class="nmh" id="nmListH">該当資源</h3>
    <div class="nlistwrap"><ul class="nlist" id="nmList"></ul></div>
   </aside>
  </div>
  <details class="nmdist"><summary>県別の教材分布（都道府県単位）</summary><div id="nmDist"></div></details>
  ${historicalRefsHTML()}
 </div>`;
 const apply=()=>{nmFocus=nmFocusKey();save();
  document.querySelectorAll('.nchip').forEach(b=>{const on=n.genres.includes(b.dataset.g);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false')});
  nmSync();nmRestoreFocus()};
 $('nmAll').onclick=()=>{n.genres=NMKEYS.slice();apply()};
 $('nmClear').onclick=()=>{n.genres=[];n.region='';n.prefecture='';$('nmRegion').value='';$('nmPref').value='';apply()};
 document.querySelectorAll('.nchip').forEach(b=>b.onclick=()=>{const g=b.dataset.g;
  const i=n.genres.indexOf(g);if(i>=0)n.genres.splice(i,1);else n.genres.push(g);apply()});
 $('nmPref').onchange=()=>{const p=$('nmPref').value;n.prefecture=p;if(p){n.region=BS_PREF_REGION[p];$('nmRegion').value=n.region}apply()};
 $('nmRegion').onchange=()=>{const reg=$('nmRegion').value;n.region=reg;
  if(reg&&n.prefecture&&BS_PREF_REGION[n.prefecture]!==reg){n.prefecture='';$('nmPref').value=''}apply()};
 // カメラ操作だけを行うボタン。絞り込みは変えない（「絞り込みを解除」とは別物）
 $('nmFit').onclick=()=>{const pts=nmapPoints(nmapFiltered());
  if(!pts.length||!nmMap)return;nmMap.fitBounds(L.latLngBounds(pts.map(p=>[p.lat,p.lon])),{padding:[30,30],maxZoom:10})};
 $('nmHome').onclick=()=>{if(nmMap)nmMap.setView(NM_HOME.center,NM_HOME.zoom,{animate:false})};
 const el=libOK?$(mapId):null;if(el)nmMount(el);
 nmSync();
 nmRestoreFocus();
}
// deep link 受け口: ?resource=<resource_id>。既知の DEEP resource_id と一致したときだけ開く。
// 不明な値・壊れた query は無視して通常画面へ（文字列を DOM へ出さない）。history は触らない。
(function openFromQuery(){try{
 const q=new URLSearchParams(location.search||'');
 // 同じ param が複数あっても、既知の resource_id に一致する最初の値だけを使う
 const vals=(typeof q.getAll==='function'?q.getAll('resource'):[q.get('resource')]).filter(Boolean);
 let r=null;for(const v of vals){const hit=R.find(x=>x.resource_id===v);if(hit){r=hit;break}}
 if(!r)return;                       // 未知 ID・空・壊れた query は fail-safe（何も変えない）
 if(!filtered().includes(r)){F.region='';F.prefecture='';F.category='';F.priority='';F.wrongOnly=false;F.search=''}
 state.view='cards';state.current=r.resource_id;save();
}catch(e){}})();
// 見出しの件数は data から数える。教材総数を定数で持たず、「試験範囲を網羅」とも書かない。
(function(){const el=$('sub');if(!el)return;
 el.textContent=`国内観光地理 詳細${R.length} + 高速暗記${BSR.length} = 教材${R.length+BSR.length}件（2026-09-24 国内試験対策）`;
 el.title='収録している教材の件数です。試験に出る観光資源を網羅したものではありません';})();
initFilters();window.geographyStudy={state,R,metrics,retryLine,buildQuiz,render,filtered,quizScope,STATE_KEY:KEY,primaryType,locatorSVG,TYPE_ORDER,TYPE_LABEL,mapPoints,liveMaps,GSI,disposeLiveMaps,photosFor,BSR,rstate,rapidPool,RAPID_STATE_KEY:RKEY,BSCAT,rapidBack,rapidAdvance,BS_PREF_REGION,BS_ALL_PREFS,bsReading,BSTERMS,termsIn,CARD_ALL,CARD_DEEP,CARD_LIGHT,cardPool,cardBase,cardDeckCount,CARD_DECKS,get cardFlipped(){return cFlipped},NMALL,NMGENRES,nmapFiltered,nmapCounts,nmapPoints,nmapSummary,nmSelect,nmSync,NM_HOME,get nmMap(){return nmMap},get nmMarkers(){return nmMarkers},get nmCam(){return nmCam},get nmSelRid(){return nmSelRid},get nmSelPid(){return nmSelPid},LOCAL_APPS,examLinkURL,pastExamHTML,HISTORICAL_REFS,HISTORICAL_ATLAS};render();
})();
