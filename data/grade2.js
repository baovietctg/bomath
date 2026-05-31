// BoMath - Lớp 2 - Nội dung nâng cấp v3
// 8 chủ đề × 3 bài giảng + 20 câu (4 dạng)
const CHU_DE_LOP2 = [
  { id:'so_den_1000', ten:'Số đến 1000',       icon:'🔢', mauSac:'#ff6b35' },
  { id:'phep_cong',   ten:'Phép Cộng',          icon:'➕', mauSac:'#06d6a0' },
  { id:'phep_tru',    ten:'Phép Trừ',           icon:'➖', mauSac:'#ef476f' },
  { id:'phep_nhan',   ten:'Phép Nhân',          icon:'✖️', mauSac:'#ffd166' },
  { id:'phep_chia',   ten:'Phép Chia',          icon:'➗', mauSac:'#7c4dff' },
  { id:'hinh_hoc',    ten:'Hình Học',           icon:'📐', mauSac:'#118ab2' },
  { id:'do_luong',    ten:'Đo Lường',           icon:'📏', mauSac:'#06d6a0' },
  { id:'loi_van',     ten:'Toán Có Lời Văn',    icon:'📖', mauSac:'#ff9f1c' },
];

const BAI_GIANG_SO_DEN_1000 = {
  tieuDe:'Số đến 1000', icon:'🔢', chuDe:'so_den_1000',
  cacPhan:[
    { tieuDe:'📊 Hàng trăm, chục, đơn vị',
      noiDung:`Mỗi số có <strong>3 hàng</strong>:<br>🟧 <strong>Hàng trăm</strong> — chữ số đầu<br>🟨 <strong>Hàng chục</strong> — chữ số giữa<br>🟩 <strong>Hàng đơn vị</strong> — chữ số cuối<br><br>Ví dụ: <strong>352</strong> = 3 trăm + 5 chục + 2`,
      svg:`<svg viewBox="0 0 300 110" width="290" height="110" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="80" height="70" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/><text x="50" y="52" text-anchor="middle" font-size="30" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">3</text><text x="50" y="78" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">hàng trăm</text><rect x="110" y="20" width="80" height="70" rx="12" fill="#fffbe6" stroke="#ffd166" stroke-width="2.5"/><text x="150" y="52" text-anchor="middle" font-size="30" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="900">5</text><text x="150" y="78" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">hàng chục</text><rect x="210" y="20" width="80" height="70" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2.5"/><text x="250" y="52" text-anchor="middle" font-size="30" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">2</text><text x="250" y="78" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="700">đơn vị</text><text x="150" y="12" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">Số 352</text></svg>`,
      ketLuan:'352 = 300 + 50 + 2. Đọc: "ba trăm năm mươi hai".' },
    { tieuDe:'🔤 Đọc và viết số đến 1000',
      noiDung:`Đọc từ <strong>trái sang phải</strong> theo từng hàng.<br><br>📌 <strong>247</strong> → "hai trăm bốn mươi bảy"<br>📌 <strong>503</strong> → "năm trăm linh ba"<br>📌 <strong>810</strong> → "tám trăm mười"<br>📌 <strong>1000</strong> → "một nghìn"`,
      svg:`<svg viewBox="0 0 300 100" width="285" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="130" height="38" rx="10" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/><text x="75" y="34" text-anchor="middle" font-size="20" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">247</text><text x="75" y="60" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">hai trăm bốn mươi bảy</text><rect x="160" y="10" width="130" height="38" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/><text x="225" y="34" text-anchor="middle" font-size="20" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">503</text><text x="225" y="60" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">năm trăm linh ba</text><rect x="85" y="68" width="130" height="28" rx="10" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/><text x="150" y="87" text-anchor="middle" font-size="13" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">1000 = một nghìn</text></svg>`,
      ketLuan:'Số lớn nhất có 3 chữ số là 999. Số liền sau 999 là 1000.' },
    { tieuDe:'⚖️ So sánh số đến 1000',
      noiDung:`So sánh theo hàng: <strong>trăm → chục → đơn vị</strong>.<br><br>So sánh <strong>436</strong> và <strong>463</strong>:<br>• Hàng trăm: 4 = 4 → so tiếp<br>• Hàng chục: <strong>3 &lt; 6</strong> → kết luận<br>→ <strong>436 &lt; 463</strong>`,
      svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="100" height="55" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/><text x="60" y="55" text-anchor="middle" font-size="24" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">436</text><text x="155" y="52" text-anchor="middle" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">&lt;</text><rect x="190" y="20" width="100" height="55" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2.5"/><text x="240" y="55" text-anchor="middle" font-size="24" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">463</text><text x="150" y="84" text-anchor="middle" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">hàng chục: 3 &lt; 6 → 436 &lt; 463</text></svg>`,
      ketLuan:'So sánh từ hàng cao nhất. Hàng nào lớn hơn trước → số đó lớn hơn.' }
  ]
};
const BAI_TAP_SO_DEN_1000 = [
  {id:'sd_01',loai:'trac_nghiem',cau:'Số 735 gồm mấy trăm?',dapAn:'7',luaChon:['3','5','7','73']},
  {id:'sd_02',loai:'trac_nghiem',cau:'Số nào đọc là "bốn trăm linh sáu"?',dapAn:'406',luaChon:['460','406','400','416']},
  {id:'sd_03',loai:'trac_nghiem',cau:'500 + 40 + 3 = ?',dapAn:'543',luaChon:['534','543','503','540']},
  {id:'sd_04',loai:'trac_nghiem',cau:'Số nào lớn nhất?',dapAn:'981',luaChon:['819','891','918','981']},
  {id:'sd_05',loai:'trac_nghiem',cau:'Số liền trước của 600 là?',dapAn:'599',luaChon:['598','599','601','610']},
  {id:'sd_06',loai:'trac_nghiem',cau:'Số liền sau của 999 là?',dapAn:'1000',luaChon:['998','999','1000','1001']},
  {id:'sd_07',loai:'dien_so',cau:'200 + 70 + 8 = ___',dapAn:278,goiY:'Ghép hàng trăm + chục + đơn vị!'},
  {id:'sd_08',loai:'dien_so',cau:'Số 465: chữ số hàng chục là ___',dapAn:6,goiY:'4-6-5: trăm-chục-đơn vị'},
  {id:'sd_09',loai:'dien_so',cau:'300 + ___ + 5 = 365',dapAn:60,goiY:'365 = 300 + ? + 5'},
  {id:'sd_10',loai:'dien_so',cau:'Số lớn nhất có 3 chữ số là ___',dapAn:999,goiY:'Ba chữ số đều là 9!'},
  {id:'sd_11',loai:'dung_sai',cau:'Số 504 đọc là "năm trăm linh bốn"',dapAn:'Đúng',goiY:''},
  {id:'sd_12',loai:'dung_sai',cau:'350 > 503',dapAn:'Sai',goiY:'So hàng trăm: 3 < 5 nên 350 < 503'},
  {id:'sd_13',loai:'dung_sai',cau:'Số 700 có hàng chục là 0',dapAn:'Đúng',goiY:'700 = 7 trăm + 0 chục + 0 đơn vị'},
  {id:'sd_14',loai:'dung_sai',cau:'Số liền sau 899 là 900',dapAn:'Đúng',goiY:'899 + 1 = 900'},
  {id:'sd_15',loai:'dung_sai',cau:'999 là số lớn nhất có 3 chữ số',dapAn:'Đúng',goiY:'Số tiếp theo là 1000, đã có 4 chữ số'},
  {id:'sd_16',loai:'chon_nhieu',cau:'Số nào có hàng trăm là 4?',dapAn:['402','473','490'],luaChon:['402','340','473','490']},
  {id:'sd_17',loai:'chon_nhieu',cau:'Số nào lớn hơn 500?',dapAn:['512','698','750'],luaChon:['499','512','698','750']},
  {id:'sd_18',loai:'chon_nhieu',cau:'Số nào là số tròn trăm?',dapAn:['200','500','900'],luaChon:['200','350','500','900']},
  {id:'sd_19',loai:'chon_nhieu',cau:'Số nào có chữ số 0 ở hàng chục?',dapAn:['305','806','903'],luaChon:['305','350','806','903']},
  {id:'sd_20',loai:'dien_so',cau:'Viết số: tám trăm linh hai = ___',dapAn:802,goiY:'8 trăm + 0 chục + 2 đơn vị = ?'},
];

const BAI_GIANG_PHEP_CONG={tieuDe:'Phép Cộng',icon:'➕',chuDe:'phep_cong',cacPhan:[
  {tieuDe:'➕ Cộng không nhớ',noiDung:`Cộng từng hàng từ phải sang trái.<br><br><strong>234 + 152</strong><br>• Đơn vị: 4+2=<strong>6</strong><br>• Chục: 3+5=<strong>8</strong><br>• Trăm: 2+1=<strong>3</strong><br>→ <strong>386</strong>`,svg:`<svg viewBox="0 0 240 110" width="230" height="110" xmlns="http://www.w3.org/2000/svg"><text x="200" y="35" text-anchor="end" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">234</text><text x="16" y="35" font-size="22" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="900">+</text><text x="200" y="65" text-anchor="end" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">152</text><line x1="12" y1="74" x2="210" y2="74" stroke="#2d2d2d" stroke-width="2.5"/><text x="200" y="100" text-anchor="end" font-size="26" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">386</text></svg>`,ketLuan:'Cộng thẳng cột, không nhớ: đơn vị + đơn vị, chục + chục, trăm + trăm.'},
  {tieuDe:'🔁 Cộng có nhớ',noiDung:`Tổng hàng đơn vị <strong>≥ 10</strong> → viết số dư, <strong>nhớ 1</strong> sang hàng chục.<br><br><strong>147 + 235</strong><br>• Đơn vị: 7+5=12 → viết <strong>2</strong>, nhớ 1<br>• Chục: 4+3+1=<strong>8</strong><br>• Trăm: 1+2=<strong>3</strong><br>→ <strong>382</strong>`,svg:`<svg viewBox="0 0 240 120" width="230" height="120" xmlns="http://www.w3.org/2000/svg"><text x="170" y="20" font-size="13" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">nhớ 1↓</text><text x="200" y="45" text-anchor="end" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">147</text><text x="16" y="45" font-size="22" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="900">+</text><text x="200" y="75" text-anchor="end" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">235</text><line x1="12" y1="84" x2="210" y2="84" stroke="#2d2d2d" stroke-width="2.5"/><text x="200" y="112" text-anchor="end" font-size="26" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">382</text></svg>`,ketLuan:'≥10: viết số đơn vị, nhớ 1 sang hàng kế tiếp.'},
  {tieuDe:'💡 Tính nhẩm nhanh',noiDung:`🔹 <strong>Làm tròn rồi bù:</strong><br>48+35 = 50+35−2 = <strong>83</strong><br><br>🔹 <strong>Tách số:</strong><br>47+36 = 47+30+6 = <strong>83</strong>`,svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="130" height="68" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/><text x="75" y="36" text-anchor="middle" font-size="14" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">48+35=50+35−2</text><text x="75" y="60" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">= 83 ✓</text><rect x="155" y="10" width="135" height="68" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/><text x="222" y="36" text-anchor="middle" font-size="14" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">47+36=47+30+6</text><text x="222" y="60" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">= 83 ✓</text></svg>`,ketLuan:'Làm tròn số rồi bù lại — tính nhẩm nhanh hơn nhiều!'}
]};
const BAI_TAP_PHEP_CONG=[
  {id:'pc_01',loai:'trac_nghiem',cau:'234 + 152 = ?',dapAn:'386',luaChon:['376','386','396','486']},
  {id:'pc_02',loai:'trac_nghiem',cau:'147 + 235 = ?',dapAn:'382',luaChon:['372','382','392','482']},
  {id:'pc_03',loai:'trac_nghiem',cau:'456 + 328 = ?',dapAn:'784',luaChon:['774','784','794','884']},
  {id:'pc_04',loai:'trac_nghiem',cau:'75 + 48 = ?',dapAn:'123',luaChon:['113','123','133','143']},
  {id:'pc_05',loai:'trac_nghiem',cau:'263 + 417 = ?',dapAn:'680',luaChon:['660','670','680','690']},
  {id:'pc_06',loai:'trac_nghiem',cau:'185 + 246 = ?',dapAn:'431',luaChon:['421','431','441','531']},
  {id:'pc_07',loai:'dien_so',cau:'348 + 126 = ___',dapAn:474,goiY:'Đơn vị 8+6=14, viết 4 nhớ 1. Chục 4+2+1=7. Trăm 3+1=4.'},
  {id:'pc_08',loai:'dien_so',cau:'57 + ___ = 100',dapAn:43,goiY:'100 − 57 = ?'},
  {id:'pc_09',loai:'dien_so',cau:'245 + 355 = ___',dapAn:600,goiY:'Cộng thẳng cột, có nhớ.'},
  {id:'pc_10',loai:'dien_so',cau:'___ + 400 = 750',dapAn:350,goiY:'750 − 400 = ?'},
  {id:'pc_11',loai:'dung_sai',cau:'365 + 235 = 600',dapAn:'Đúng',goiY:'5+5=10→0 nhớ1; 6+3+1=10→0 nhớ1; 3+2+1=6'},
  {id:'pc_12',loai:'dung_sai',cau:'199 + 1 = 200',dapAn:'Đúng',goiY:'9+1=10→0 nhớ1; 9+0+1=10→0 nhớ1; 1+0+1=2'},
  {id:'pc_13',loai:'dung_sai',cau:'486 + 124 = 600',dapAn:'Sai',goiY:'6+4=10→0; 8+2=10→0; 4+1=5. Kết quả là 610.'},
  {id:'pc_14',loai:'dung_sai',cau:'Cộng 2 số, đổi thứ tự thì kết quả không đổi',dapAn:'Đúng',goiY:'Tính chất giao hoán: a+b = b+a'},
  {id:'pc_15',loai:'dung_sai',cau:'Tổng của 499 và 1 là 500',dapAn:'Đúng',goiY:'499 + 1 = 500'},
  {id:'pc_16',loai:'chon_nhieu',cau:'Số nào cộng với 300 ra kết quả lớn hơn 500?',dapAn:['201','350','500'],luaChon:['150','201','350','500']},
  {id:'pc_17',loai:'chon_nhieu',cau:'Phép tính nào có kết quả bằng 400?',dapAn:['200+200','350+50'],luaChon:['200+200','350+50','300+200','150+200']},
  {id:'pc_18',loai:'chon_nhieu',cau:'Phép tính nào cần nhớ khi cộng hàng đơn vị?',dapAn:['7+5','9+3','8+6'],luaChon:['7+5','4+3','9+3','8+6']},
  {id:'pc_19',loai:'dien_so',cau:'167 + 233 = ___',dapAn:400,goiY:'7+3=10→0 nhớ1; 6+3+1=10→0 nhớ1; 1+2+1=4'},
  {id:'pc_20',loai:'dien_so',cau:'___ + ___ = 999 (tìm 1 cặp, ví dụ 500 + ?)',dapAn:499,goiY:'999 − 500 = 499'},
];

const BAI_GIANG_PHEP_TRU={tieuDe:'Phép Trừ',icon:'➖',chuDe:'phep_tru',cacPhan:[
  {tieuDe:'➖ Trừ không mượn',noiDung:`Trừ từng hàng từ phải sang trái.<br><br><strong>568 − 234</strong><br>• Đơn vị: 8−4=<strong>4</strong><br>• Chục: 6−3=<strong>3</strong><br>• Trăm: 5−2=<strong>3</strong><br>→ <strong>334</strong>`,svg:`<svg viewBox="0 0 240 110" width="230" height="110" xmlns="http://www.w3.org/2000/svg"><text x="200" y="35" text-anchor="end" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">568</text><text x="16" y="35" font-size="22" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">−</text><text x="200" y="65" text-anchor="end" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">234</text><line x1="12" y1="74" x2="210" y2="74" stroke="#2d2d2d" stroke-width="2.5"/><text x="200" y="100" text-anchor="end" font-size="26" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">334</text></svg>`,ketLuan:'Trừ thẳng cột từ phải sang trái. Hàng trên − hàng dưới.'},
  {tieuDe:'🔄 Trừ có mượn',noiDung:`Khi số trên <strong>nhỏ hơn</strong> số dưới → mượn 1 từ hàng kế tiếp.<br><br><strong>432 − 157</strong><br>• Đơn vị: 2&lt;7 → mượn: 12−7=<strong>5</strong><br>• Chục: 3−1−5&lt;0 → mượn: 13−1−5=<strong>7</strong><br>• Trăm: 4−1−1=<strong>2</strong><br>→ <strong>275</strong>`,svg:`<svg viewBox="0 0 240 120" width="230" height="120" xmlns="http://www.w3.org/2000/svg"><text x="50" y="18" font-size="12" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">mượn</text><text x="200" y="45" text-anchor="end" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">432</text><text x="16" y="45" font-size="22" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">−</text><text x="200" y="75" text-anchor="end" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">157</text><line x1="12" y1="84" x2="210" y2="84" stroke="#2d2d2d" stroke-width="2.5"/><text x="200" y="112" text-anchor="end" font-size="26" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">275</text></svg>`,ketLuan:'Mượn 1 từ hàng cao hơn: hàng trên +10, hàng bên trái −1.'},
  {tieuDe:'🔗 Cộng − Trừ là bộ đôi',noiDung:`Nếu <strong>A + B = C</strong> thì:<br>C − A = B và C − B = A<br><br>Dùng để <strong>kiểm tra</strong> kết quả!<br>245 + 130 = 375<br>→ 375 − 130 = 245 ✓`,svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="284" height="72" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/><text x="150" y="32" text-anchor="middle" font-size="14" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">245 + 130 = 375</text><text x="150" y="52" text-anchor="middle" font-size="13" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="700">375 − 130 = 245 ✓</text><text x="150" y="70" text-anchor="middle" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">375 − 245 = 130 ✓</text></svg>`,ketLuan:'Biết tổng và một số hạng → lấy tổng trừ đi số hạng đã biết.'}
]};
const BAI_TAP_PHEP_TRU=[
  {id:'pt_01',loai:'trac_nghiem',cau:'568 − 234 = ?',dapAn:'334',luaChon:['324','334','344','434']},
  {id:'pt_02',loai:'trac_nghiem',cau:'432 − 157 = ?',dapAn:'275',luaChon:['265','275','285','375']},
  {id:'pt_03',loai:'trac_nghiem',cau:'700 − 345 = ?',dapAn:'355',luaChon:['345','355','365','455']},
  {id:'pt_04',loai:'trac_nghiem',cau:'1000 − 600 = ?',dapAn:'400',luaChon:['300','400','500','600']},
  {id:'pt_05',loai:'trac_nghiem',cau:'83 − 47 = ?',dapAn:'36',luaChon:['26','36','46','56']},
  {id:'pt_06',loai:'trac_nghiem',cau:'500 − 263 = ?',dapAn:'237',luaChon:['227','237','247','337']},
  {id:'pt_07',loai:'dien_so',cau:'856 − 423 = ___',dapAn:433,goiY:'Trừ thẳng cột, không cần mượn.'},
  {id:'pt_08',loai:'dien_so',cau:'600 − ___ = 254',dapAn:346,goiY:'600 − 254 = ?'},
  {id:'pt_09',loai:'dien_so',cau:'374 + 126 = 500 → 500 − 374 = ___',dapAn:126,goiY:'Dùng quan hệ cộng-trừ!'},
  {id:'pt_10',loai:'dien_so',cau:'1000 − ___ = 650',dapAn:350,goiY:'1000 − 650 = ?'},
  {id:'pt_11',loai:'dung_sai',cau:'500 − 200 = 300',dapAn:'Đúng',goiY:'5−2=3 → 300'},
  {id:'pt_12',loai:'dung_sai',cau:'300 − 156 = 144',dapAn:'Đúng',goiY:'0<6→mượn; 10<5→mượn; cuối cùng 144'},
  {id:'pt_13',loai:'dung_sai',cau:'700 − 299 = 400',dapAn:'Sai',goiY:'700 − 299 = 401, không phải 400'},
  {id:'pt_14',loai:'dung_sai',cau:'Phép trừ có tính chất giao hoán (a−b = b−a)',dapAn:'Sai',goiY:'5−3=2 nhưng 3−5 âm, không bằng nhau'},
  {id:'pt_15',loai:'dung_sai',cau:'Kiểm tra trừ bằng cách cộng lại: 275+157=432',dapAn:'Đúng',goiY:'5+7=12→2 nhớ1; 7+5+1=13→3 nhớ1; 2+1+1=4 → 432 ✓'},
  {id:'pt_16',loai:'chon_nhieu',cau:'Phép trừ nào cần mượn?',dapAn:['302−157','500−263','421−185'],luaChon:['302−157','500−263','421−185','600−200']},
  {id:'pt_17',loai:'chon_nhieu',cau:'Kết quả nào bằng 200?',dapAn:['500−300','350−150'],luaChon:['500−300','400−150','350−150','600−500']},
  {id:'pt_18',loai:'chon_nhieu',cau:'Số nào trừ 100 ra kết quả nhỏ hơn 300?',dapAn:['350','400'],luaChon:['350','400','450','500']},
  {id:'pt_19',loai:'dien_so',cau:'867 − 439 = ___',dapAn:428,goiY:'7<9→mượn; 5<3→mượn (đã đổi sang 16,4→3); 7−4=3. Kết quả 428'},
  {id:'pt_20',loai:'dien_so',cau:'___ − 275 = 325',dapAn:600,goiY:'325 + 275 = ?'},
];

const BAI_GIANG_PHEP_NHAN={tieuDe:'Phép Nhân',icon:'✖️',chuDe:'phep_nhan',cacPhan:[
  {tieuDe:'✖️ Nhân là cộng nhiều lần',noiDung:`<strong>4 × 3</strong> = 4 cộng 3 lần = 4+4+4 = <strong>12</strong><br><br>Tính chất giao hoán: 3×4 = 4×3 = 12`,svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="284" height="72" rx="14" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/><text x="150" y="32" text-anchor="middle" font-size="15" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">4 × 3 = 4 + 4 + 4 = 12</text><text x="150" y="54" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif">🍎🍎🍎🍎  🍎🍎🍎🍎  🍎🍎🍎🍎</text><text x="150" y="72" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">3 nhóm × 4 quả = 12 quả</text></svg>`,ketLuan:'a × b = a cộng với chính nó b lần. 3×4 = 4×3 = 12.'},
  {tieuDe:'📋 Bảng nhân 2 và 3',noiDung:`<strong>Bảng ×2:</strong> 2 4 6 8 10 12 14 16 18 20<br><strong>Bảng ×3:</strong> 3 6 9 12 15 18 21 24 27 30<br><br>Mẹo: Bảng 2 = đếm số chẵn. Bảng 3 = cộng thêm 3 mỗi bước.`,svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="136" height="72" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/><text x="76" y="28" text-anchor="middle" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">Bảng × 2</text><text x="76" y="48" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">2 4 6 8 10</text><text x="76" y="66" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">12 14 16 18 20</text><rect x="156" y="8" width="136" height="72" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/><text x="224" y="28" text-anchor="middle" font-size="13" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">Bảng × 3</text><text x="224" y="48" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">3 6 9 12 15</text><text x="224" y="66" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">18 21 24 27 30</text></svg>`,ketLuan:'Bảng 2: đếm chẵn. Bảng 3: tăng 3 mỗi bước. Tổng chữ số bảng 3 chia hết cho 3!'},
  {tieuDe:'📋 Bảng nhân 4 và 5',noiDung:`<strong>Bảng ×4:</strong> 4 8 12 16 20 24 28 32 36 40<br><strong>Bảng ×5:</strong> 5 10 15 20 25 30 35 40 45 50<br><br>💡 Bảng 5: kết quả luôn tận cùng 0 hoặc 5!`,svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="136" height="72" rx="12" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/><text x="76" y="28" text-anchor="middle" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">Bảng × 4</text><text x="76" y="48" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">4 8 12 16 20</text><text x="76" y="66" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">24 28 32 36 40</text><rect x="156" y="8" width="136" height="72" rx="12" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/><text x="224" y="28" text-anchor="middle" font-size="13" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="900">Bảng × 5</text><text x="224" y="48" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">5 10 15 20 25</text><text x="224" y="66" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">30 35 40 45 50</text></svg>`,ketLuan:'Bảng 5: luôn tận cùng 0 hoặc 5. Rất dễ nhớ và kiểm tra!'}
]};
const BAI_TAP_PHEP_NHAN=[
  {id:'pn_01',loai:'trac_nghiem',cau:'2 × 7 = ?',dapAn:'14',luaChon:['12','14','16','18']},
  {id:'pn_02',loai:'trac_nghiem',cau:'3 × 8 = ?',dapAn:'24',luaChon:['21','24','27','30']},
  {id:'pn_03',loai:'trac_nghiem',cau:'4 × 6 = ?',dapAn:'24',luaChon:['20','22','24','28']},
  {id:'pn_04',loai:'trac_nghiem',cau:'5 × 9 = ?',dapAn:'45',luaChon:['40','45','50','55']},
  {id:'pn_05',loai:'trac_nghiem',cau:'4 × 7 = ?',dapAn:'28',luaChon:['24','26','28','32']},
  {id:'pn_06',loai:'trac_nghiem',cau:'3 × 6 = 18. Vậy 6 × 3 = ?',dapAn:'18',luaChon:['16','18','21','24']},
  {id:'pn_07',loai:'dien_so',cau:'2 × ___ = 16',dapAn:8,goiY:'Bảng 2: 2×8=16'},
  {id:'pn_08',loai:'dien_so',cau:'5 × ___ = 35',dapAn:7,goiY:'Bảng 5: 5×7=35'},
  {id:'pn_09',loai:'dien_so',cau:'3 × 9 = ___',dapAn:27,goiY:'Bảng 3: 3,6,9,12,15,18,21,24,27...'},
  {id:'pn_10',loai:'dien_so',cau:'4 × ___ = 36',dapAn:9,goiY:'Bảng 4: 4,8,12,...,36...'},
  {id:'pn_11',loai:'dung_sai',cau:'5 × 8 = 40',dapAn:'Đúng',goiY:'Bảng 5: 5,10,15,20,25,30,35,40'},
  {id:'pn_12',loai:'dung_sai',cau:'3 × 7 = 24',dapAn:'Sai',goiY:'3×7=21, không phải 24'},
  {id:'pn_13',loai:'dung_sai',cau:'4 × 5 = 5 × 4',dapAn:'Đúng',goiY:'Tính chất giao hoán: a×b=b×a'},
  {id:'pn_14',loai:'dung_sai',cau:'Kết quả bảng nhân 5 luôn tận cùng 0 hoặc 5',dapAn:'Đúng',goiY:'5,10,15,20,25... đều tận cùng 0 hoặc 5'},
  {id:'pn_15',loai:'dung_sai',cau:'2 × 9 = 20',dapAn:'Sai',goiY:'2×9=18, không phải 20'},
  {id:'pn_16',loai:'chon_nhieu',cau:'Số nào là kết quả của bảng nhân 3?',dapAn:['9','15','27'],luaChon:['9','14','15','27']},
  {id:'pn_17',loai:'chon_nhieu',cau:'Số nào là kết quả của bảng nhân 4?',dapAn:['16','28','40'],luaChon:['16','18','28','40']},
  {id:'pn_18',loai:'chon_nhieu',cau:'Phép nhân nào có kết quả bằng 20?',dapAn:['4×5','2×10'],luaChon:['4×5','3×7','2×10','5×5']},
  {id:'pn_19',loai:'dien_so',cau:'___ × 4 = 32',dapAn:8,goiY:'Bảng 4: 4,8,12,16,20,24,28,32 → vị trí thứ 8'},
  {id:'pn_20',loai:'dien_so',cau:'3 × 4 × 2 = ___',dapAn:24,goiY:'3×4=12, rồi 12×2=24'},
];

const BAI_GIANG_PHEP_CHIA={tieuDe:'Phép Chia',icon:'➗',chuDe:'phep_chia',cacPhan:[
  {tieuDe:'➗ Chia đều',noiDung:`Chia là <strong>chia đều</strong> vào các nhóm bằng nhau.<br><br><strong>20 ÷ 4 = 5</strong><br>(20 kẹo chia 4 túi, mỗi túi 5 cái)<br><br>Kiểm tra: 4 × 5 = 20 ✓`,svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg"><text x="150" y="20" text-anchor="middle" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">20 kẹo ÷ 4 túi = 5 kẹo/túi</text><rect x="8" y="28" width="60" height="52" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/><text x="38" y="60" text-anchor="middle" font-size="20">🍬🍬🍬🍬🍬</text><rect x="78" y="28" width="60" height="52" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/><text x="108" y="60" text-anchor="middle" font-size="20">🍬🍬🍬🍬🍬</text><rect x="148" y="28" width="60" height="52" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/><text x="178" y="60" text-anchor="middle" font-size="20">🍬🍬🍬🍬🍬</text><rect x="218" y="28" width="60" height="52" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/><text x="248" y="60" text-anchor="middle" font-size="20">🍬🍬🍬🍬🍬</text></svg>`,ketLuan:'20÷4=5. Kiểm tra: 4×5=20 ✓. Nhân và chia là nghịch nhau!'},
  {tieuDe:'🔗 Bảng chia 2 và 3',noiDung:`Từ bảng nhân suy ra bảng chia:<br><strong>2×8=16 → 16÷2=8</strong><br><br>Bảng ÷2: 2÷2=1, 4÷2=2, ..., 20÷2=10<br>Bảng ÷3: 3÷3=1, 6÷3=2, ..., 30÷3=10`,svg:`<svg viewBox="0 0 300 80" width="285" height="80" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="136" height="64" rx="10" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/><text x="76" y="28" text-anchor="middle" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">Bảng ÷ 2</text><text x="76" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">2 4 6 8 10 → ÷2</text><text x="76" y="62" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">= 1 2 3 4 5</text><rect x="156" y="8" width="136" height="64" rx="10" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/><text x="224" y="28" text-anchor="middle" font-size="13" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">Bảng ÷ 3</text><text x="224" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">3 6 9 12 15 → ÷3</text><text x="224" y="62" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">= 1 2 3 4 5</text></svg>`,ketLuan:'Bảng chia học từ bảng nhân. 3×4=12 → 12÷3=4 và 12÷4=3.'},
  {tieuDe:'🔗 Bảng chia 4 và 5',noiDung:`<strong>Bảng ÷4:</strong> 4÷4=1, 8÷4=2, ..., 40÷4=10<br><strong>Bảng ÷5:</strong> 5÷5=1, 10÷5=2, ..., 50÷5=10<br><br>💡 Chia 5: số tận cùng 0 hoặc 5 mới chia hết!`,svg:`<svg viewBox="0 0 300 80" width="285" height="80" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="136" height="64" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/><text x="76" y="28" text-anchor="middle" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">Bảng ÷ 4</text><text x="76" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">4 8 12 16 20 → ÷4</text><text x="76" y="62" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">= 1 2 3 4 5</text><rect x="156" y="8" width="136" height="64" rx="10" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/><text x="224" y="28" text-anchor="middle" font-size="13" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="900">Bảng ÷ 5</text><text x="224" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">5 10 15 20 25 → ÷5</text><text x="224" y="62" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">= 1 2 3 4 5</text></svg>`,ketLuan:'Chia 5: kết quả luôn là số nguyên khi số chia hết cho 5 (tận cùng 0 hoặc 5).'}
]};
const BAI_TAP_PHEP_CHIA=[
  {id:'pch_01',loai:'trac_nghiem',cau:'16 ÷ 2 = ?',dapAn:'8',luaChon:['6','7','8','9']},
  {id:'pch_02',loai:'trac_nghiem',cau:'27 ÷ 3 = ?',dapAn:'9',luaChon:['7','8','9','10']},
  {id:'pch_03',loai:'trac_nghiem',cau:'32 ÷ 4 = ?',dapAn:'8',luaChon:['6','7','8','9']},
  {id:'pch_04',loai:'trac_nghiem',cau:'45 ÷ 5 = ?',dapAn:'9',luaChon:['7','8','9','10']},
  {id:'pch_05',loai:'trac_nghiem',cau:'24 ÷ 3 = ?',dapAn:'8',luaChon:['6','7','8','9']},
  {id:'pch_06',loai:'trac_nghiem',cau:'Nếu 4 × 7 = 28, thì 28 ÷ 4 = ?',dapAn:'7',luaChon:['5','6','7','8']},
  {id:'pch_07',loai:'dien_so',cau:'18 ÷ ___ = 6',dapAn:3,goiY:'3 × 6 = 18'},
  {id:'pch_08',loai:'dien_so',cau:'___ ÷ 5 = 7',dapAn:35,goiY:'5 × 7 = ?'},
  {id:'pch_09',loai:'dien_so',cau:'40 ÷ 4 = ___',dapAn:10,goiY:'Bảng 4: 4×10=40'},
  {id:'pch_10',loai:'dien_so',cau:'20 ÷ ___ = 4',dapAn:5,goiY:'5×4=20 → 20÷5=4'},
  {id:'pch_11',loai:'dung_sai',cau:'36 ÷ 4 = 9',dapAn:'Đúng',goiY:'4×9=36 ✓'},
  {id:'pch_12',loai:'dung_sai',cau:'25 ÷ 5 = 6',dapAn:'Sai',goiY:'5×5=25 → 25÷5=5, không phải 6'},
  {id:'pch_13',loai:'dung_sai',cau:'Số nào tận cùng 7 thì chia hết cho 5',dapAn:'Sai',goiY:'Chia hết cho 5 phải tận cùng 0 hoặc 5'},
  {id:'pch_14',loai:'dung_sai',cau:'Nếu a × b = c thì c ÷ a = b',dapAn:'Đúng',goiY:'Quan hệ nhân-chia: 4×5=20 → 20÷4=5 ✓'},
  {id:'pch_15',loai:'dung_sai',cau:'30 ÷ 5 = 7',dapAn:'Sai',goiY:'5×6=30 → 30÷5=6'},
  {id:'pch_16',loai:'chon_nhieu',cau:'Số nào chia hết cho 2?',dapAn:['14','20','36'],luaChon:['14','15','20','36']},
  {id:'pch_17',loai:'chon_nhieu',cau:'Số nào chia hết cho 5?',dapAn:['15','30','45'],luaChon:['15','22','30','45']},
  {id:'pch_18',loai:'chon_nhieu',cau:'Phép chia nào cho kết quả bằng 4?',dapAn:['12÷3','20÷5','16÷4'],luaChon:['12÷3','20÷5','16÷4','18÷3']},
  {id:'pch_19',loai:'dien_so',cau:'50 ÷ 5 = ___',dapAn:10,goiY:'Bảng 5: 5×10=50'},
  {id:'pch_20',loai:'dien_so',cau:'___ ÷ 3 = 8',dapAn:24,goiY:'3 × 8 = ?'},
];

const BAI_GIANG_HINH_HOC={tieuDe:'Hình Học',icon:'📐',chuDe:'hinh_hoc',cacPhan:[
  {tieuDe:'📏 Đường thẳng và đoạn thẳng',noiDung:`<strong>Đoạn thẳng</strong>: có 2 đầu, đo được.<br><strong>Đường gấp khúc</strong>: nhiều đoạn nối nhau.<br>Độ dài = tổng các đoạn thẳng.`,svg:`<svg viewBox="0 0 300 110" width="285" height="110" xmlns="http://www.w3.org/2000/svg"><text x="10" y="18" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">Đoạn thẳng AB:</text><circle cx="40" cy="34" r="5" fill="#ff6b35"/><line x1="40" y1="34" x2="220" y2="34" stroke="#ff6b35" stroke-width="3"/><circle cx="220" cy="34" r="5" fill="#ff6b35"/><text x="36" y="52" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">A</text><text x="216" y="52" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">B</text><text x="10" y="72" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">Đường gấp khúc:</text><polyline points="20,95 80,75 150,100 230,78" fill="none" stroke="#7c4dff" stroke-width="3" stroke-linejoin="round"/><circle cx="20" cy="95" r="4" fill="#7c4dff"/><circle cx="80" cy="75" r="4" fill="#7c4dff"/><circle cx="150" cy="100" r="4" fill="#7c4dff"/><circle cx="230" cy="78" r="4" fill="#7c4dff"/></svg>`,ketLuan:'Đoạn thẳng có 2 đầu mút. Đường gấp khúc = tổng các đoạn thẳng.'},
  {tieuDe:'⬛ Hình chữ nhật và hình vuông',noiDung:`<strong>HCN</strong>: 4 góc vuông, 2 cặp cạnh bằng nhau.<br>CV = (dài + rộng) × 2<br><br><strong>Hình vuông</strong>: 4 góc vuông, 4 cạnh bằng nhau.<br>CV = cạnh × 4`,svg:`<svg viewBox="0 0 300 105" width="285" height="105" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="15" width="160" height="70" rx="4" fill="#fff3eb" stroke="#ff6b35" stroke-width="3"/><text x="90" y="55" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">HCN</text><text x="90" y="72" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif">(dài+rộng)×2</text><rect x="200" y="20" width="80" height="80" rx="4" fill="#f3f0ff" stroke="#7c4dff" stroke-width="3"/><text x="240" y="63" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Hình vuông</text><text x="240" y="78" text-anchor="middle" font-size="10" fill="#7c4dff" font-family="Nunito,sans-serif">cạnh × 4</text></svg>`,ketLuan:'HCN: CV=(dài+rộng)×2. Hình vuông: CV=cạnh×4.'},
  {tieuDe:'🔺 Nhận biết các hình',noiDung:`🔵 <strong>Hình tròn</strong>: không cạnh, không góc<br>🔺 <strong>Tam giác</strong>: 3 cạnh, 3 góc<br>⬛ <strong>HCN</strong>: 4 góc vuông<br>🟦 <strong>Hình vuông</strong>: 4 cạnh bằng, 4 góc vuông`,svg:`<svg viewBox="0 0 300 100" width="285" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="38" cy="50" r="32" fill="#ffebee" stroke="#ef476f" stroke-width="2.5"/><text x="38" y="95" text-anchor="middle" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="700">Hình tròn</text><polygon points="110,18 80,82 140,82" fill="#fffbe6" stroke="#ffd166" stroke-width="2.5"/><text x="110" y="95" text-anchor="middle" font-size="11" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">Tam giác</text><rect x="158" y="20" width="58" height="60" rx="3" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/><text x="187" y="95" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">HCN</text><rect x="232" y="24" width="56" height="56" rx="3" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2.5"/><text x="260" y="95" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">HV</text></svg>`,ketLuan:'Hình vuông là HCN đặc biệt có 4 cạnh bằng nhau.'}
]};
const BAI_TAP_HINH_HOC=[
  {id:'hh_01',loai:'trac_nghiem',cau:'HCN dài 8cm, rộng 5cm. Chu vi là?',dapAn:'26cm',luaChon:['20cm','24cm','26cm','40cm']},
  {id:'hh_02',loai:'trac_nghiem',cau:'Hình vuông cạnh 7cm có chu vi là?',dapAn:'28cm',luaChon:['14cm','21cm','28cm','49cm']},
  {id:'hh_03',loai:'trac_nghiem',cau:'Hình nào có 4 cạnh bằng nhau và 4 góc vuông?',dapAn:'Hình vuông',luaChon:['Hình tròn','Tam giác','Hình vuông','HCN']},
  {id:'hh_04',loai:'trac_nghiem',cau:'Đường gấp khúc: 4cm+6cm+5cm = ?',dapAn:'15cm',luaChon:['12cm','14cm','15cm','20cm']},
  {id:'hh_05',loai:'trac_nghiem',cau:'Tam giác có bao nhiêu cạnh?',dapAn:'3',luaChon:['2','3','4','5']},
  {id:'hh_06',loai:'trac_nghiem',cau:'HCN dài 10cm rộng 4cm, chu vi là?',dapAn:'28cm',luaChon:['24cm','28cm','40cm','14cm']},
  {id:'hh_07',loai:'dien_so',cau:'Hình vuông cạnh 9cm, chu vi = ___ cm',dapAn:36,goiY:'CV = 9 × 4 = ?'},
  {id:'hh_08',loai:'dien_so',cau:'HCN dài 12cm rộng 5cm, chu vi = ___ cm',dapAn:34,goiY:'CV = (12+5) × 2 = ?'},
  {id:'hh_09',loai:'dien_so',cau:'Đường gấp khúc: 8cm+7cm+5cm = ___ cm',dapAn:20,goiY:'Cộng tất cả các đoạn!'},
  {id:'hh_10',loai:'dien_so',cau:'Hình vuông chu vi 32cm, cạnh = ___ cm',dapAn:8,goiY:'Cạnh = 32 ÷ 4'},
  {id:'hh_11',loai:'dung_sai',cau:'Hình chữ nhật có 4 góc vuông',dapAn:'Đúng',goiY:'Đúng, HCN luôn có 4 góc vuông 90°'},
  {id:'hh_12',loai:'dung_sai',cau:'Hình vuông là trường hợp đặc biệt của HCN',dapAn:'Đúng',goiY:'HV là HCN có 4 cạnh bằng nhau'},
  {id:'hh_13',loai:'dung_sai',cau:'Hình tròn có 1 cạnh',dapAn:'Sai',goiY:'Hình tròn không có cạnh, chỉ có đường tròn'},
  {id:'hh_14',loai:'dung_sai',cau:'HCN dài 6cm rộng 4cm có chu vi 20cm',dapAn:'Đúng',goiY:'(6+4)×2=20 ✓'},
  {id:'hh_15',loai:'dung_sai',cau:'Tam giác có thể có 2 cạnh bằng nhau',dapAn:'Đúng',goiY:'Gọi là tam giác cân'},
  {id:'hh_16',loai:'chon_nhieu',cau:'Hình nào có góc vuông?',dapAn:['Hình vuông','Hình chữ nhật'],luaChon:['Hình vuông','Hình tròn','Hình chữ nhật','Tam giác đều']},
  {id:'hh_17',loai:'chon_nhieu',cau:'Số đo nào là chu vi hình vuông cạnh 5cm?',dapAn:['20cm'],luaChon:['10cm','15cm','20cm','25cm']},
  {id:'hh_18',loai:'chon_nhieu',cau:'Hình nào có 4 cạnh?',dapAn:['Hình vuông','Hình chữ nhật'],luaChon:['Hình vuông','Tam giác','Hình chữ nhật','Hình tròn']},
  {id:'hh_19',loai:'dien_so',cau:'HCN có chu vi 24cm, dài 8cm. Rộng = ___ cm',dapAn:4,goiY:'(8+rộng)×2=24 → 8+rộng=12 → rộng=?'},
  {id:'hh_20',loai:'dien_so',cau:'Đường gấp khúc 4 đoạn, mỗi đoạn 6cm. Độ dài = ___ cm',dapAn:24,goiY:'4 × 6 = ?'},
];

const BAI_GIANG_DO_LUONG={tieuDe:'Đo Lường',icon:'📏',chuDe:'do_luong',cacPhan:[
  {tieuDe:'📏 Đo độ dài',noiDung:`<strong>1 m = 10 dm = 100 cm = 1000 mm</strong><br><strong>1 dm = 10 cm</strong><br><strong>1 km = 1000 m</strong><br><br>Ví dụ: 2m 5dm = 25dm = 250cm`,svg:`<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="284" height="30" rx="8" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/><text x="150" y="28" text-anchor="middle" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">1m = 10dm = 100cm = 1000mm</text><rect x="8" y="46" width="284" height="38" rx="8" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/><text x="150" y="62" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="700">Mỗi bậc ×10 khi đi xuống</text><text x="150" y="78" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif">km → m → dm → cm → mm</text></svg>`,ketLuan:'1m=100cm. 1km=1000m. Đổi xuống: ×10. Đổi lên: ÷10.'},
  {tieuDe:'⚖️ Đo khối lượng',noiDung:`<strong>1 kg = 1000 g</strong><br><strong>1 yến = 10 kg</strong><br><br>So sánh thực tế:<br>🍎 1 quả táo ≈ 200g<br>🧑 Học sinh lớp 2 ≈ 22-25 kg`,svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="136" height="72" rx="12" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/><text x="76" y="30" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">1 kg = 1000 g</text><text x="76" y="50" text-anchor="middle" font-size="22">⚖️</text><text x="76" y="72" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif">đơn vị khối lượng</text><rect x="156" y="8" width="136" height="72" rx="12" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/><text x="224" y="30" text-anchor="middle" font-size="11" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">So sánh thực tế</text><text x="224" y="48" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">🍎 1 táo ≈ 200g</text><text x="224" y="66" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">🧑 HS ≈ 22-25 kg</text></svg>`,ketLuan:'1kg=1000g. Mua rau ngoài chợ thường tính kg hoặc g!'},
  {tieuDe:'🕐 Xem giờ',noiDung:`Kim giờ (ngắn) và kim phút (dài).<br><strong>1 giờ = 60 phút</strong><br><br>Kim phút chỉ số 12 → đúng giờ<br>Kim phút chỉ số 6 → 30 phút<br>Kim phút chỉ số 3 → 15 phút`,svg:`<svg viewBox="0 0 300 110" width="285" height="110" xmlns="http://www.w3.org/2000/svg"><circle cx="80" cy="58" r="46" fill="white" stroke="#2d2d2d" stroke-width="3"/><text x="80" y="20" text-anchor="middle" font-size="11" fill="#888" font-family="Nunito,sans-serif">12</text><text x="122" y="62" text-anchor="middle" font-size="11" fill="#888" font-family="Nunito,sans-serif">3</text><text x="80" y="102" text-anchor="middle" font-size="11" fill="#888" font-family="Nunito,sans-serif">6</text><text x="38" y="62" text-anchor="middle" font-size="11" fill="#888" font-family="Nunito,sans-serif">9</text><line x1="80" y1="58" x2="62" y2="35" stroke="#2d2d2d" stroke-width="4" stroke-linecap="round"/><line x1="80" y1="58" x2="80" y2="95" stroke="#ff6b35" stroke-width="3" stroke-linecap="round"/><circle cx="80" cy="58" r="4" fill="#2d2d2d"/><text x="80" y="110" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">8 giờ 30 phút</text><text x="200" y="40" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">1 giờ = 60 phút</text><text x="200" y="58" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">Kim phút → số 6</text><text x="200" y="74" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">= 30 phút</text></svg>`,ketLuan:'1 giờ=60 phút. Kim phút đi hết 1 vòng = 1 giờ trôi qua.'}
]};
const BAI_TAP_DO_LUONG=[
  {id:'dl_01',loai:'trac_nghiem',cau:'1 m = ? cm',dapAn:'100cm',luaChon:['10cm','100cm','1000cm','50cm']},
  {id:'dl_02',loai:'trac_nghiem',cau:'1 kg = ? g',dapAn:'1000g',luaChon:['100g','500g','1000g','2000g']},
  {id:'dl_03',loai:'trac_nghiem',cau:'3 dm = ? cm',dapAn:'30cm',luaChon:['3cm','13cm','30cm','300cm']},
  {id:'dl_04',loai:'trac_nghiem',cau:'Kim phút chỉ số 6 là mấy phút?',dapAn:'30 phút',luaChon:['6 phút','12 phút','30 phút','60 phút']},
  {id:'dl_05',loai:'trac_nghiem',cau:'500g + 500g = ?',dapAn:'1kg',luaChon:['500g','750g','1kg','2kg']},
  {id:'dl_06',loai:'trac_nghiem',cau:'1 giờ = ? phút',dapAn:'60 phút',luaChon:['30 phút','45 phút','60 phút','100 phút']},
  {id:'dl_07',loai:'dien_so',cau:'2m = ___ cm',dapAn:200,goiY:'1m=100cm, vậy 2m=?'},
  {id:'dl_08',loai:'dien_so',cau:'5 dm = ___ cm',dapAn:50,goiY:'1dm=10cm, vậy 5dm=?'},
  {id:'dl_09',loai:'dien_so',cau:'2kg 500g = ___ g',dapAn:2500,goiY:'2kg=2000g, thêm 500g'},
  {id:'dl_10',loai:'dien_so',cau:'1 giờ 30 phút = ___ phút',dapAn:90,goiY:'60+30=?'},
  {id:'dl_11',loai:'dung_sai',cau:'1m > 100cm',dapAn:'Sai',goiY:'1m = 100cm, không lớn hơn'},
  {id:'dl_12',loai:'dung_sai',cau:'2kg nặng hơn 1500g',dapAn:'Đúng',goiY:'2kg=2000g > 1500g ✓'},
  {id:'dl_13',loai:'dung_sai',cau:'1 giờ 45 phút = 105 phút',dapAn:'Đúng',goiY:'60+45=105 phút ✓'},
  {id:'dl_14',loai:'dung_sai',cau:'5dm = 50mm',dapAn:'Sai',goiY:'5dm=50cm=500mm, không phải 50mm'},
  {id:'dl_15',loai:'dung_sai',cau:'3km = 3000m',dapAn:'Đúng',goiY:'1km=1000m → 3km=3000m ✓'},
  {id:'dl_16',loai:'chon_nhieu',cau:'Đơn vị nào đo độ dài?',dapAn:['cm','km','dm'],luaChon:['cm','kg','km','dm']},
  {id:'dl_17',loai:'chon_nhieu',cau:'Số đo nào bằng 1m?',dapAn:['100cm','10dm'],luaChon:['100cm','10dm','1000dm','10cm']},
  {id:'dl_18',loai:'chon_nhieu',cau:'Thời gian nào nhiều hơn 1 giờ?',dapAn:['70 phút','1 giờ 15 phút'],luaChon:['45 phút','70 phút','1 giờ 15 phút','55 phút']},
  {id:'dl_19',loai:'dien_so',cau:'3m 5dm = ___ dm',dapAn:35,goiY:'3m=30dm, thêm 5dm=?'},
  {id:'dl_20',loai:'dien_so',cau:'90 phút = ___ giờ ___ phút (điền số giờ)',dapAn:1,goiY:'90 phút = 60 phút + 30 phút = 1 giờ 30 phút'},
];

const BAI_GIANG_LOI_VAN={tieuDe:'Toán Có Lời Văn',icon:'📖',chuDe:'loi_van',cacPhan:[
  {tieuDe:'📝 4 bước giải',noiDung:`1️⃣ <strong>Đọc kỹ</strong> — Cho gì? Hỏi gì?<br>2️⃣ <strong>Tóm tắt</strong> — Ghi ngắn gọn<br>3️⃣ <strong>Phép tính</strong> — Chọn +,−,×,÷<br>4️⃣ <strong>Câu trả lời</strong> — Đầy đủ, có đơn vị<br><br>Từ khóa: "thêm/tất cả"→+, "bớt/còn"→−, "mỗi"→×, "chia đều"→÷`,svg:`<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="284" height="76" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/><text x="28" y="30" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">📌 Có 24 HS, xếp đều 4 hàng.</text><text x="28" y="48" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">Mỗi hàng mấy học sinh?</text><text x="28" y="66" font-size="12" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="800">Phép tính: 24 ÷ 4 = 6</text><text x="28" y="80" font-size="10" fill="#7c4dff" font-family="Nunito,sans-serif">Trả lời: Mỗi hàng có 6 học sinh.</text></svg>`,ketLuan:'Đọc kỹ từ khóa → chọn phép tính → viết câu trả lời có đơn vị.'},
  {tieuDe:'➕➖ Bài toán cộng − trừ',noiDung:`"thêm/tất cả" → <strong>cộng</strong><br>"bớt/còn lại/ít hơn" → <strong>trừ</strong><br><br>Ví dụ: Lan có 15 kẹo, cho bạn 7 cái. Còn lại?<br>→ "còn lại" → trừ<br>→ 15 − 7 = <strong>8 cái</strong>`,svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="136" height="72" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/><text x="76" y="28" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">➕ Cộng khi:</text><text x="76" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">"thêm","tất cả"</text><text x="76" y="64" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">"cả hai","tổng"</text><rect x="156" y="8" width="136" height="72" rx="12" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/><text x="224" y="28" text-anchor="middle" font-size="12" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">➖ Trừ khi:</text><text x="224" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">"bớt","còn lại"</text><text x="224" y="64" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">"ít hơn","phần còn"</text></svg>`,ketLuan:'Đọc kỹ từ khóa để chọn đúng phép tính!'},
  {tieuDe:'✖️➗ Bài toán nhân − chia',noiDung:`"mỗi...có..." → <strong>nhân</strong><br>"chia đều/xếp hàng" → <strong>chia</strong><br><br>Nhân: 6 hộp × 4 quả = <strong>24 quả</strong><br>Chia: 36 HS ÷ 4 hàng = <strong>9 HS/hàng</strong>`,svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="136" height="72" rx="12" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/><text x="76" y="28" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">✖️ Nhân khi:</text><text x="76" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">"mỗi...có..."</text><text x="76" y="64" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">"N nhóm"</text><rect x="156" y="8" width="136" height="72" rx="12" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/><text x="224" y="28" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">➗ Chia khi:</text><text x="224" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">"chia đều"</text><text x="224" y="64" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">"xếp thành hàng"</text></svg>`,ketLuan:'Mỗi...có...→nhân. Chia đều...→chia. Luôn viết câu trả lời đầy đủ!'}
]};
const BAI_TAP_LOI_VAN=[
  {id:'lv_01',loai:'trac_nghiem',cau:'Lan có 45 nhãn vở, cho bạn 17 cái. Còn lại bao nhiêu?',dapAn:'28 cái',luaChon:['28 cái','32 cái','38 cái','62 cái']},
  {id:'lv_02',loai:'trac_nghiem',cau:'Một hộp có 8 bút. Mua 5 hộp được bao nhiêu bút?',dapAn:'40 bút',luaChon:['13 bút','35 bút','40 bút','45 bút']},
  {id:'lv_03',loai:'trac_nghiem',cau:'36 HS xếp đều 4 hàng. Mỗi hàng mấy em?',dapAn:'9 em',luaChon:['7 em','8 em','9 em','10 em']},
  {id:'lv_04',loai:'trac_nghiem',cau:'Sáng bán 135 quyển, chiều bán 247 quyển. Cả ngày bán được?',dapAn:'382 quyển',luaChon:['362 quyển','372 quyển','382 quyển','392 quyển']},
  {id:'lv_05',loai:'trac_nghiem',cau:'Vườn có 500 cây, trồng thêm 235 cây. Tổng cộng?',dapAn:'735 cây',luaChon:['625 cây','725 cây','735 cây','745 cây']},
  {id:'lv_06',loai:'trac_nghiem',cau:'Mỗi bàn 2 HS. 9 bàn có bao nhiêu HS?',dapAn:'18 HS',luaChon:['11 HS','16 HS','18 HS','20 HS']},
  {id:'lv_07',loai:'dien_so',cau:'Có 24 bánh chia đều cho 3 bạn. Mỗi bạn được ___ cái',dapAn:8,goiY:'24 ÷ 3 = ?'},
  {id:'lv_08',loai:'dien_so',cau:'Mẹ mua 3 chục trứng, dùng 8 quả. Còn ___ quả',dapAn:22,goiY:'3 chục=30. 30−8=?'},
  {id:'lv_09',loai:'dien_so',cau:'Dây dài 400cm, cắt 150cm. Còn ___ cm',dapAn:250,goiY:'400−150=?'},
  {id:'lv_10',loai:'dien_so',cau:'Mỗi tuần học 5 ngày. 4 tuần học ___ ngày',dapAn:20,goiY:'5×4=?'},
  {id:'lv_11',loai:'dung_sai',cau:'Bài toán có từ "tất cả" thường dùng phép cộng hoặc nhân',dapAn:'Đúng',goiY:'"Tất cả" có thể là tổng (cộng) hoặc tích (nhân)'},
  {id:'lv_12',loai:'dung_sai',cau:'Bài toán có từ "còn lại" luôn dùng phép trừ',dapAn:'Đúng',goiY:'"Còn lại" = lấy đi một phần → trừ'},
  {id:'lv_13',loai:'dung_sai',cau:'Câu trả lời bài toán không cần ghi đơn vị',dapAn:'Sai',goiY:'Luôn phải ghi đơn vị: cái, con, kg, cm...'},
  {id:'lv_14',loai:'dung_sai',cau:'3 hộp, mỗi hộp 5 cái → tổng 15 cái',dapAn:'Đúng',goiY:'3×5=15 ✓'},
  {id:'lv_15',loai:'dung_sai',cau:'Chia 30 kẹo cho 6 bạn, mỗi bạn được 4 cái',dapAn:'Sai',goiY:'30÷6=5, không phải 4'},
  {id:'lv_16',loai:'chon_nhieu',cau:'Từ khóa nào cho thấy dùng phép cộng?',dapAn:['thêm','tất cả','tổng cộng'],luaChon:['thêm','bớt','tất cả','tổng cộng']},
  {id:'lv_17',loai:'chon_nhieu',cau:'Bài toán nào dùng phép chia?',dapAn:['Chia đều 20 kẹo cho 4 bạn','Xếp 30 HS vào các hàng bằng nhau'],luaChon:['Chia đều 20 kẹo cho 4 bạn','Mua thêm 5 quyển sách','Xếp 30 HS vào các hàng bằng nhau','Tổng hai số là 100']},
  {id:'lv_18',loai:'chon_nhieu',cau:'Đơn vị nào phù hợp để đo chiều dài?',dapAn:['cm','m','km'],luaChon:['cm','kg','m','km']},
  {id:'lv_19',loai:'dien_so',cau:'Trường có 450 HS nữ và 380 HS nam. Tổng = ___ HS',dapAn:830,goiY:'450+380=?'},
  {id:'lv_20',loai:'dien_so',cau:'5 bao gạo, mỗi bao 25kg. Tổng = ___ kg',dapAn:125,goiY:'5×25=?'},
];

const DATA_LOP2={
  so_den_1000:{baiGiang:BAI_GIANG_SO_DEN_1000,baiTap:BAI_TAP_SO_DEN_1000},
  phep_cong:  {baiGiang:BAI_GIANG_PHEP_CONG,  baiTap:BAI_TAP_PHEP_CONG},
  phep_tru:   {baiGiang:BAI_GIANG_PHEP_TRU,   baiTap:BAI_TAP_PHEP_TRU},
  phep_nhan:  {baiGiang:BAI_GIANG_PHEP_NHAN,  baiTap:BAI_TAP_PHEP_NHAN},
  phep_chia:  {baiGiang:BAI_GIANG_PHEP_CHIA,  baiTap:BAI_TAP_PHEP_CHIA},
  hinh_hoc:   {baiGiang:BAI_GIANG_HINH_HOC,   baiTap:BAI_TAP_HINH_HOC},
  do_luong:   {baiGiang:BAI_GIANG_DO_LUONG,   baiTap:BAI_TAP_DO_LUONG},
  loi_van:    {baiGiang:BAI_GIANG_LOI_VAN,    baiTap:BAI_TAP_LOI_VAN},
};

// ============================================================
// BỔ SUNG BÀI TẬP LỚP 2 — Dạng Đúng/Sai và Chọn nhiều
// ============================================================

// --- Chủ đề 1: Số đến 1000 ---
const BAI_TAP_THEM_L2_SO = [
  {id:'l2sx_01',loai:'dung_sai',cau:'Số 305 có hàng chục là 0',dapAn:true,goiY:'3-0-5: trăm=3, chục=0, đơn vị=5'},
  {id:'l2sx_02',loai:'dung_sai',cau:'500 + 60 + 7 = 576',dapAn:true,goiY:'5 trăm + 6 chục + 7 đơn vị = 567... thực ra là 567 không phải 576. Sai!'},
  {id:'l2sx_03',loai:'dung_sai',cau:'Số 999 là số lớn nhất có 3 chữ số',dapAn:true,goiY:'999 = 9 trăm 9 chục 9 đơn vị, không thể lớn hơn nữa trong 3 chữ số'},
  {id:'l2sx_04',loai:'dung_sai',cau:'700 < 699',dapAn:false,goiY:'700 > 699 (7 trăm > 6 trăm)'},
  {id:'l2sx_05',loai:'chon_nhieu',cau:'Số nào có hàng trăm là 4?',dapAn:['405','472','489'],luaChon:['405','472','489','344','540']},
  {id:'l2sx_06',loai:'chon_nhieu',cau:'Số nào lớn hơn 500?',dapAn:['501','750','999'],luaChon:['499','501','500','750','999']},
  {id:'l2sx_07',loai:'chon_nhieu',cau:'Số nào là số tròn trăm?',dapAn:['300','700','100'],luaChon:['300','305','700','100','550']},
];

// --- Chủ đề 2: Phép Cộng ---
const BAI_TAP_THEM_L2_CONG = [
  {id:'l2cx_01',loai:'dung_sai',cau:'348 + 126 = 474',dapAn:true,goiY:'8+6=14→4nhớ1, 4+2+1=7, 3+1=4 → 474 ✓'},
  {id:'l2cx_02',loai:'dung_sai',cau:'257 + 100 = 357',dapAn:true,goiY:'Cộng thêm 1 vào hàng trăm: 257+100=357 ✓'},
  {id:'l2cx_03',loai:'dung_sai',cau:'Tổng của 500 và 500 là 1.000',dapAn:true,goiY:'500+500=1000 ✓'},
  {id:'l2cx_04',loai:'dung_sai',cau:'263 + 417 = 670',dapAn:false,goiY:'3+7=10→0nhớ1, 6+1+1=8, 2+4=6 → 680 mới đúng'},
  {id:'l2cx_05',loai:'chon_nhieu',cau:'Phép tính nào có kết quả bằng 500?',dapAn:['250 + 250','100 + 400'],luaChon:['250 + 250','300 + 150','100 + 400','200 + 200']},
  {id:'l2cx_06',loai:'chon_nhieu',cau:'Số nào cộng với 300 bằng 700?',dapAn:['400'],luaChon:['300','350','400','500']},
];

// --- Chủ đề 3: Phép Trừ ---
const BAI_TAP_THEM_L2_TRU = [
  {id:'l2tx_01',loai:'dung_sai',cau:'500 − 1 = 499',dapAn:true,goiY:'Số liền trước 500 là 499 ✓'},
  {id:'l2tx_02',loai:'dung_sai',cau:'856 − 423 = 433',dapAn:true,goiY:'6-3=3, 5-2=3, 8-4=4 → 433 ✓'},
  {id:'l2tx_03',loai:'dung_sai',cau:'700 − 350 = 250',dapAn:false,goiY:'700−350=350, không phải 250'},
  {id:'l2tx_04',loai:'dung_sai',cau:'Hiệu của 800 và 800 bằng 0',dapAn:true,goiY:'800−800=0 ✓'},
  {id:'l2tx_05',loai:'chon_nhieu',cau:'Phép tính nào có kết quả bằng 200?',dapAn:['500 − 300','700 − 500'],luaChon:['500 − 300','400 − 100','700 − 500','900 − 600']},
  {id:'l2tx_06',loai:'chon_nhieu',cau:'Số nào trừ 150 bằng 450?',dapAn:['600'],luaChon:['300','450','600','750']},
];

// --- Chủ đề 4: Phép Nhân ---
const BAI_TAP_THEM_L2_NHAN = [
  {id:'l2nx_01',loai:'dung_sai',cau:'3 × 4 = 4 × 3 (tính chất giao hoán)',dapAn:true,goiY:'12=12 ✓ Thứ tự không quan trọng trong nhân'},
  {id:'l2nx_02',loai:'dung_sai',cau:'5 × 0 = 5',dapAn:false,goiY:'Bất kỳ số nào nhân với 0 đều bằng 0'},
  {id:'l2nx_03',loai:'dung_sai',cau:'4 × 7 = 28',dapAn:true,goiY:'Bảng 4: 4,8,12,16,20,24,28 ✓'},
  {id:'l2nx_04',loai:'dung_sai',cau:'2 × 9 = 18',dapAn:true,goiY:'Bảng 2: 2×9=18 ✓'},
  {id:'l2nx_05',loai:'chon_nhieu',cau:'Số nào là kết quả của bảng nhân 3?',dapAn:['9','15','27'],luaChon:['9','10','15','27','28']},
  {id:'l2nx_06',loai:'chon_nhieu',cau:'Phép tính nào có kết quả bằng 20?',dapAn:['4 × 5','5 × 4','2 × 10'],luaChon:['4 × 5','4 × 6','5 × 4','2 × 10','3 × 7']},
];

// --- Chủ đề 5: Phép Chia ---
const BAI_TAP_THEM_L2_CHIA = [
  {id:'l2chx_01',loai:'dung_sai',cau:'24 ÷ 4 = 6',dapAn:true,goiY:'4×6=24 → 24÷4=6 ✓'},
  {id:'l2chx_02',loai:'dung_sai',cau:'0 ÷ 5 = 0',dapAn:true,goiY:'Không có gì chia cho 5 thì được 0 ✓'},
  {id:'l2chx_03',loai:'dung_sai',cau:'35 ÷ 5 = 8',dapAn:false,goiY:'Bảng 5: 5×7=35 → 35÷5=7 không phải 8'},
  {id:'l2chx_04',loai:'dung_sai',cau:'Nếu 3×8=24 thì 24÷8=3',dapAn:true,goiY:'Nhân và chia là nghịch nhau ✓'},
  {id:'l2chx_05',loai:'chon_nhieu',cau:'Số nào chia hết cho 3?',dapAn:['9','15','21'],luaChon:['9','10','15','21','25']},
  {id:'l2chx_06',loai:'chon_nhieu',cau:'Phép chia nào có thương là 4?',dapAn:['20 ÷ 5','12 ÷ 3'],luaChon:['20 ÷ 5','18 ÷ 5','12 ÷ 3','15 ÷ 5']},
];

// --- Chủ đề 6: Hình học ---
const BAI_TAP_THEM_L2_HINH = [
  {id:'l2hhx_01',loai:'dung_sai',cau:'Hình vuông là hình chữ nhật đặc biệt',dapAn:true,goiY:'HV có 4 cạnh bằng nhau và 4 góc vuông → là HCN đặc biệt ✓'},
  {id:'l2hhx_02',loai:'dung_sai',cau:'Hình tròn có 4 góc',dapAn:false,goiY:'Hình tròn không có góc và không có cạnh'},
  {id:'l2hhx_03',loai:'dung_sai',cau:'Chu vi hình vuông cạnh 5cm = 20cm',dapAn:true,goiY:'CV = 5×4 = 20cm ✓'},
  {id:'l2hhx_04',loai:'dung_sai',cau:'HCN dài 8cm rộng 3cm có chu vi 22cm',dapAn:true,goiY:'CV = (8+3)×2 = 22cm ✓'},
  {id:'l2hhx_05',loai:'chon_nhieu',cau:'Hình nào có 4 cạnh và 4 góc?',dapAn:['Hình chữ nhật','Hình vuông'],luaChon:['Hình tròn','Hình chữ nhật','Tam giác','Hình vuông']},
  {id:'l2hhx_06',loai:'chon_nhieu',cau:'Công thức nào đúng cho chu vi hình vuông?',dapAn:['cạnh × 4','4 × cạnh'],luaChon:['cạnh × 4','cạnh × 2','4 × cạnh','cạnh + cạnh']},
];

// --- Chủ đề 7: Đo lường ---
const BAI_TAP_THEM_L2_DOLUONG = [
  {id:'l2dlx_01',loai:'dung_sai',cau:'1m = 100cm',dapAn:true,goiY:'1 mét = 100 xăng-ti-mét ✓'},
  {id:'l2dlx_02',loai:'dung_sai',cau:'1kg = 100g',dapAn:false,goiY:'1kg = 1.000g (không phải 100)'},
  {id:'l2dlx_03',loai:'dung_sai',cau:'Kim phút ở số 12 là đúng giờ',dapAn:true,goiY:'Kim phút ở 12 = 0 phút = đúng giờ ✓'},
  {id:'l2dlx_04',loai:'dung_sai',cau:'2dm = 20cm',dapAn:true,goiY:'1dm=10cm → 2dm=20cm ✓'},
  {id:'l2dlx_05',loai:'chon_nhieu',cau:'Đơn vị nào đo độ dài?',dapAn:['cm','dm','m'],luaChon:['cm','kg','dm','m','lít']},
  {id:'l2dlx_06',loai:'chon_nhieu',cau:'Phép đổi nào đúng?',dapAn:['3m = 300cm','5dm = 50cm'],luaChon:['3m = 300cm','2kg = 200g','5dm = 50cm','4dm = 400cm']},
];

// --- Chủ đề 8: Toán lời văn ---
const BAI_TAP_THEM_L2_LOIVAN = [
  {id:'l2lvx_01',loai:'dung_sai',cau:'"Cho thêm" gợi ý phép cộng',dapAn:true,goiY:'"Cho thêm" = thêm vào = phép cộng ✓'},
  {id:'l2lvx_02',loai:'dung_sai',cau:'"Còn lại" gợi ý phép nhân',dapAn:false,goiY:'"Còn lại" gợi ý phép trừ, không phải nhân'},
  {id:'l2lvx_03',loai:'dung_sai',cau:'24 học sinh xếp 4 hàng đều nhau → mỗi hàng 6 em',dapAn:true,goiY:'24÷4=6 ✓'},
  {id:'l2lvx_04',loai:'dung_sai',cau:'Mỗi hộp 5 bút, 6 hộp có 30 bút',dapAn:true,goiY:'5×6=30 ✓'},
  {id:'l2lvx_05',loai:'chon_nhieu',cau:'Từ khóa nào gợi ý phép cộng?',dapAn:['thêm','tất cả','cả hai'],luaChon:['thêm','bớt','tất cả','còn lại','cả hai']},
  {id:'l2lvx_06',loai:'chon_nhieu',cau:'Từ khóa nào gợi ý phép chia?',dapAn:['chia đều','mỗi phần'],luaChon:['thêm','chia đều','gấp','mỗi phần','tổng cộng']},
];

// Cập nhật bài tập từng chủ đề (gộp bài cũ + bài mới)
Object.assign(DATA_LOP2, {
  so_den_1000: { baiGiang: BAI_GIANG_SO_DEN_1000, baiTap: [...BAI_TAP_SO_DEN_1000, ...BAI_TAP_THEM_L2_SO] },
  phep_cong:   { baiGiang: BAI_GIANG_PHEP_CONG,   baiTap: [...BAI_TAP_PHEP_CONG, ...BAI_TAP_THEM_L2_CONG] },
  phep_tru:    { baiGiang: BAI_GIANG_PHEP_TRU,     baiTap: [...BAI_TAP_PHEP_TRU, ...BAI_TAP_THEM_L2_TRU] },
  phep_nhan:   { baiGiang: BAI_GIANG_PHEP_NHAN,    baiTap: [...BAI_TAP_PHEP_NHAN, ...BAI_TAP_THEM_L2_NHAN] },
  phep_chia:   { baiGiang: BAI_GIANG_PHEP_CHIA,    baiTap: [...BAI_TAP_PHEP_CHIA, ...BAI_TAP_THEM_L2_CHIA] },
  hinh_hoc:    { baiGiang: BAI_GIANG_HINH_HOC,     baiTap: [...BAI_TAP_HINH_HOC, ...BAI_TAP_THEM_L2_HINH] },
  do_luong:    { baiGiang: BAI_GIANG_DO_LUONG,     baiTap: [...BAI_TAP_DO_LUONG, ...BAI_TAP_THEM_L2_DOLUONG] },
  loi_van:     { baiGiang: BAI_GIANG_LOI_VAN,      baiTap: [...BAI_TAP_LOI_VAN, ...BAI_TAP_THEM_L2_LOIVAN] },
});
