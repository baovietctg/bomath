// ============================================
// BoMath - Nội dung Lớp 4 (Full chương trình)
// 10 chủ đề × 3 bài giảng + 20 câu hỏi (4 dạng)
// ============================================

const CHU_DE_LOP4 = [
  { id:'so_trieu',    ten:'Số đến 1.000.000',          icon:'🔢', mauSac:'#ff6b35' },
  { id:'cong_tru',    ten:'Cộng & Trừ số lớn',          icon:'➕', mauSac:'#06d6a0' },
  { id:'nhan_2chu',   ten:'Nhân với số có 2-3 chữ số',  icon:'✖️', mauSac:'#ffd166' },
  { id:'chia_2chu',   ten:'Chia cho số có 2 chữ số',    icon:'➗', mauSac:'#ef476f' },
  { id:'chia_het',    ten:'Dấu hiệu chia hết',          icon:'🔍', mauSac:'#7c4dff' },
  { id:'phan_so',     ten:'Phân Số — Khái niệm & rút gọn', icon:'🍕', mauSac:'#118ab2' },
  { id:'cong_tru_ps', ten:'Cộng & Trừ Phân Số',         icon:'½',  mauSac:'#ff9f1c' },
  { id:'hinh_hoc',    ten:'Hình Học',                   icon:'📐', mauSac:'#06d6a0' },
  { id:'do_luong',    ten:'Đo Lường',                   icon:'📏', mauSac:'#ef476f' },
  { id:'loi_van',     ten:'Toán Có Lời Văn',            icon:'📖', mauSac:'#ff6b35' },
];

// ============================================================
// CHỦ ĐỀ 1: SỐ ĐẾN 1.000.000
// ============================================================
const BAI_GIANG_L4_SO_TRIEU = {
  tieuDe:'Số đến 1.000.000', icon:'🔢', chuDe:'so_trieu',
  cacPhan:[
    {
      tieuDe:'🏗️ Lớp triệu, lớp nghìn, lớp đơn vị',
      noiDung:`Số đến 1.000.000 đọc theo <strong>3 lớp</strong> từ trái sang phải:<br><br>
        🟣 <strong>Lớp triệu</strong>: triệu, chục triệu, trăm triệu<br>
        🟧 <strong>Lớp nghìn</strong>: nghìn, chục nghìn, trăm nghìn<br>
        🟩 <strong>Lớp đơn vị</strong>: đơn vị, chục, trăm<br><br>
        Ví dụ: <strong>735.248</strong><br>
        → "Bảy trăm ba mươi lăm nghìn hai trăm bốn mươi tám"`,
      svg:`<svg viewBox="0 0 300 95" width="285" height="95" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="15" width="88" height="68" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="49" y="40" text-anchor="middle" font-size="20" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">735</text>
        <text x="49" y="58" text-anchor="middle" font-size="9" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">lớp nghìn</text>
        <text x="49" y="75" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">× 1.000</text>
        <text x="100" y="52" text-anchor="middle" font-size="16" fill="#aaa" font-family="Nunito,sans-serif">.</text>
        <rect x="107" y="15" width="88" height="68" rx="10" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="151" y="40" text-anchor="middle" font-size="20" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">248</text>
        <text x="151" y="58" text-anchor="middle" font-size="9" fill="#008060" font-family="Nunito,sans-serif" font-weight="700">lớp đơn vị</text>
        <text x="151" y="75" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">× 1</text>
        <text x="230" y="52" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">= 735.248</text>
      </svg>`,
      ketLuan:'735.248: đọc lớp nghìn trước rồi lớp đơn vị. Viết dấu chấm sau mỗi 3 chữ số.'
    },
    {
      tieuDe:'📊 So sánh số đến 1.000.000',
      noiDung:`So sánh từ <strong>hàng cao nhất</strong> đến thấp nhất:<br><br>
        <strong>432.765</strong> và <strong>432.756</strong><br>
        • Trăm nghìn: 4=4 · Chục nghìn: 3=3 · Nghìn: 2=2<br>
        • Trăm: 7=7 · Chục: 6=6 · Đơn vị: <strong>5 &gt; 6? Không! 5 &lt; 6</strong><br>
        → <strong>432.765 &gt; 432.756</strong>`,
      svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="120" height="52" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/>
        <text x="68" y="48" text-anchor="middle" font-size="18" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">432.765</text>
        <text x="155" y="46" text-anchor="middle" font-size="22" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">&gt;</text>
        <rect x="172" y="16" width="120" height="52" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2.5"/>
        <text x="232" y="48" text-anchor="middle" font-size="18" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">432.756</text>
        <text x="150" y="82" text-anchor="middle" font-size="10" fill="#6b6b6b" font-family="Nunito,sans-serif">Đơn vị: 5 &lt; 6 → … không! 65 &gt; 56 → 432.765 &gt; 432.756</text>
      </svg>`,
      ketLuan:'Số chữ số nhiều hơn → lớn hơn. Cùng số chữ số: so từng hàng trái sang phải.'
    },
    {
      tieuDe:'🔢 Làm tròn số',
      noiDung:`<strong>Làm tròn đến hàng nghìn</strong>:<br>
        Nhìn chữ số hàng trăm:<br>
        • &lt; 5 → giữ nguyên hàng nghìn, thay phần còn bằng 0<br>
        • ≥ 5 → tăng hàng nghìn lên 1, thay phần còn bằng 0<br><br>
        Ví dụ: <strong>47.382</strong> → hàng trăm là 3 &lt; 5 → <strong>47.000</strong><br>
        <strong>47.682</strong> → hàng trăm là 6 ≥ 5 → <strong>48.000</strong>`,
      svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="72" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="76" y="30" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">47.382 → trăm=3&lt;5</text>
        <text x="76" y="52" text-anchor="middle" font-size="14" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">≈ 47.000</text>
        <text x="76" y="70" text-anchor="middle" font-size="10" fill="#008060" font-family="Nunito,sans-serif">(giữ nguyên nghìn)</text>
        <rect x="156" y="8" width="136" height="72" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="224" y="30" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">47.682 → trăm=6≥5</text>
        <text x="224" y="52" text-anchor="middle" font-size="14" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">≈ 48.000</text>
        <text x="224" y="70" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif">(tăng nghìn lên 1)</text>
      </svg>`,
      ketLuan:'Làm tròn: nhìn chữ số liền sau hàng cần làm tròn. ≥5 thì tăng, <5 giữ nguyên.'
    }
  ]
};
const BAI_TAP_L4_SO_TRIEU = [
  {id:'l4st_01',loai:'trac_nghiem',cau:'Số 735.248 có bao nhiêu chữ số?',dapAn:'6',luaChon:['5','6','7','8']},
  {id:'l4st_02',loai:'trac_nghiem',cau:'Số nào đọc là "bốn trăm linh năm nghìn không trăm linh ba"?',dapAn:'405.003',luaChon:['45.003','405.003','450.003','405.300']},
  {id:'l4st_03',loai:'trac_nghiem',cau:'So sánh: 432.765 ___ 432.756',dapAn:'>',luaChon:['<','=','>','≥']},
  {id:'l4st_04',loai:'trac_nghiem',cau:'Làm tròn 47.682 đến hàng nghìn?',dapAn:'48.000',luaChon:['47.000','47.700','48.000','50.000']},
  {id:'l4st_05',loai:'trac_nghiem',cau:'Số liền sau 999.999 là?',dapAn:'1.000.000',luaChon:['999.998','1.000.000','999.900','1.000.001']},
  {id:'l4st_06',loai:'dien_so',cau:'300.000 + 40.000 + 5.000 + 200 + 60 + 7 = ___',dapAn:345267,goiY:'Ghép từng hàng lại: 3-4-5-2-6-7'},
  {id:'l4st_07',loai:'dien_so',cau:'Số 523.416: chữ số hàng chục nghìn là ___',dapAn:2,goiY:'5-2-3-4-1-6: trăm nghìn-chục nghìn-nghìn-trăm-chục-đơn vị'},
  {id:'l4st_08',loai:'dien_so',cau:'Làm tròn 83.450 đến hàng nghìn = ___',dapAn:83000,goiY:'Hàng trăm là 4 < 5 → giữ nguyên 83 nghìn'},
  {id:'l4st_09',loai:'dung_sai',cau:'Số 609.070 đọc là "sáu trăm linh chín nghìn không trăm bảy mươi"',dapAn:true,goiY:'609.070: 609 nghìn + 070 đơn vị'},
  {id:'l4st_10',loai:'dung_sai',cau:'480.000 > 48.000 × 10',dapAn:false,goiY:'48.000 × 10 = 480.000, hai số bằng nhau'},
  {id:'l4st_11',loai:'dung_sai',cau:'Làm tròn 75.500 đến hàng nghìn được 76.000',dapAn:true,goiY:'Hàng trăm là 5 ≥ 5 → tăng nghìn lên 1'},
  {id:'l4st_12',loai:'dung_sai',cau:'Số lớn nhất có 6 chữ số là 900.000',dapAn:false,goiY:'Số lớn nhất có 6 chữ số là 999.999'},
  {id:'l4st_13',loai:'chon_nhieu',cau:'Số nào là số tròn nghìn?',dapAn:['45.000','100.000','7.000'],luaChon:['45.000','45.500','100.000','7.000','7.070']},
  {id:'l4st_14',loai:'chon_nhieu',cau:'Số nào lớn hơn 500.000?',dapAn:['500.001','999.999','750.000'],luaChon:['499.999','500.001','500.000','999.999','750.000']},
  {id:'l4st_15',loai:'chon_nhieu',cau:'Chữ số nào xuất hiện trong số 404.040?',dapAn:['0','4'],luaChon:['0','1','4','5','8']},
  {id:'l4st_16',loai:'trac_nghiem',cau:'100.000 + 200.000 = ?',dapAn:'300.000',luaChon:['3.000','30.000','300.000','3.000.000']},
  {id:'l4st_17',loai:'trac_nghiem',cau:'Số tròn chục nghìn nào nằm giữa 370.000 và 390.000?',dapAn:'380.000',luaChon:['375.000','380.000','385.000','379.000']},
  {id:'l4st_18',loai:'dien_so',cau:'Số liền trước 600.000 là ___',dapAn:599999,goiY:'Số liền trước = số đó trừ 1'},
  {id:'l4st_19',loai:'dung_sai',cau:'250.000 = 25 × 10.000',dapAn:true,goiY:'25 × 10.000 = 250.000 ✓'},
  {id:'l4st_20',loai:'dien_so',cau:'Làm tròn 624.800 đến hàng trăm nghìn = ___',dapAn:600000,goiY:'Hàng chục nghìn là 2 < 5 → giữ nguyên 6 trăm nghìn'},
];

// ============================================================
// CHỦ ĐỀ 2: CỘNG & TRỪ SỐ LỚN
// ============================================================
const BAI_GIANG_L4_CONG_TRU = {
  tieuDe:'Cộng & Trừ số lớn', icon:'➕', chuDe:'cong_tru',
  cacPhan:[
    {
      tieuDe:'➕ Cộng số có nhiều chữ số',
      noiDung:`Cộng thẳng cột, từ <strong>phải sang trái</strong>. Nhớ khi tổng ≥ 10.<br><br>
        Ví dụ: <strong>234.567 + 148.356</strong><br>
        7+6=13 → viết 3, nhớ 1<br>
        6+5+1=12 → viết 2, nhớ 1<br>
        5+3+1=9 · 4+8=12→viết2,nhớ1 · 3+4+1=8 · 2+1=3<br>
        → <strong>382.923</strong>`,
      svg:`<svg viewBox="0 0 240 115" width="225" height="115" xmlns="http://www.w3.org/2000/svg">
        <text x="12" y="18" font-size="10" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">nhớ 1  nhớ 1  nhớ 1</text>
        <text x="210" y="44" text-anchor="end" font-size="20" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">234.567</text>
        <text x="14" y="44" font-size="18" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="900">+</text>
        <text x="210" y="70" text-anchor="end" font-size="20" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">148.356</text>
        <line x1="10" y1="78" x2="218" y2="78" stroke="#2d2d2d" stroke-width="2.5"/>
        <text x="210" y="104" text-anchor="end" font-size="20" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">382.923</text>
      </svg>`,
      ketLuan:'Cộng từng cột phải sang trái. Tổng ≥ 10: viết số dư, nhớ 1 sang cột kế.'
    },
    {
      tieuDe:'➖ Trừ số có nhiều chữ số',
      noiDung:`Trừ từ phải sang trái. Mượn khi hàng trên < hàng dưới.<br><br>
        Ví dụ: <strong>500.000 − 234.567</strong><br>
        Hàng đơn vị: 0 &lt; 7 → mượn liên tiếp qua các hàng 0<br>
        → Kết quả: <strong>265.433</strong><br><br>
        Mẹo kiểm tra: 265.433 + 234.567 = 500.000 ✓`,
      svg:`<svg viewBox="0 0 240 105" width="225" height="105" xmlns="http://www.w3.org/2000/svg">
        <text x="210" y="36" text-anchor="end" font-size="20" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">500.000</text>
        <text x="14" y="36" font-size="18" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">−</text>
        <text x="210" y="62" text-anchor="end" font-size="20" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">234.567</text>
        <line x1="10" y1="70" x2="218" y2="70" stroke="#2d2d2d" stroke-width="2.5"/>
        <text x="210" y="96" text-anchor="end" font-size="20" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">265.433</text>
      </svg>`,
      ketLuan:'Trừ từng cột, mượn khi cần. Kiểm tra: kết quả + số trừ = số bị trừ.'
    },
    {
      tieuDe:'🧮 Tính nhẩm và ước tính',
      noiDung:`<strong>Tính nhẩm số tròn</strong>:<br>
        350.000 + 250.000 = <strong>600.000</strong><br>
        800.000 − 300.000 = <strong>500.000</strong><br><br>
        <strong>Ước tính</strong> (làm tròn rồi tính):<br>
        234.500 + 148.700 ≈ 235.000 + 149.000 = <strong>384.000</strong><br><br>
        Dùng ước tính để kiểm tra kết quả có hợp lý không!`,
      svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="72" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="76" y="28" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">Tính nhẩm</text>
        <text x="76" y="48" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">350.000+250.000</text>
        <text x="76" y="68" text-anchor="middle" font-size="14" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">= 600.000</text>
        <rect x="156" y="8" width="136" height="72" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="224" y="28" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">Ước tính</text>
        <text x="224" y="48" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">234.500≈235.000</text>
        <text x="224" y="68" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">+149.000≈384.000</text>
      </svg>`,
      ketLuan:'Ước tính: làm tròn trước khi tính → nhanh kiểm tra kết quả có hợp lý không.'
    }
  ]
};
const BAI_TAP_L4_CONG_TRU = [
  {id:'l4ct_01',loai:'trac_nghiem',cau:'234.567 + 148.356 = ?',dapAn:'382.923',luaChon:['382.813','382.923','392.923','383.923']},
  {id:'l4ct_02',loai:'trac_nghiem',cau:'500.000 − 234.567 = ?',dapAn:'265.433',luaChon:['255.433','265.333','265.433','266.433']},
  {id:'l4ct_03',loai:'trac_nghiem',cau:'350.000 + 250.000 = ?',dapAn:'600.000',luaChon:['500.000','600.000','700.000','60.000']},
  {id:'l4ct_04',loai:'trac_nghiem',cau:'800.000 − 300.000 = ?',dapAn:'500.000',luaChon:['400.000','500.000','600.000','50.000']},
  {id:'l4ct_05',loai:'dien_so',cau:'456.789 + 123.456 = ___',dapAn:580245,goiY:'Cộng từng cột phải sang trái, nhớ khi ≥ 10.'},
  {id:'l4ct_06',loai:'dien_so',cau:'700.000 − 456.789 = ___',dapAn:243211,goiY:'Trừ từng cột, mượn khi cần. Kiểm tra: kq + 456.789 = 700.000.'},
  {id:'l4ct_07',loai:'dien_so',cau:'___ + 235.000 = 600.000',dapAn:365000,goiY:'600.000 − 235.000 = ?'},
  {id:'l4ct_08',loai:'dung_sai',cau:'345.678 + 654.322 = 1.000.000',dapAn:true,goiY:'8+2=10→0nhớ1, 7+2+1=10→0nhớ1... tổng = 1.000.000'},
  {id:'l4ct_09',loai:'dung_sai',cau:'600.000 − 1 = 599.999',dapAn:true,goiY:'Số liền trước 600.000 là 599.999'},
  {id:'l4ct_10',loai:'dung_sai',cau:'234.500 + 148.700 ≈ 390.000 (ước tính)',dapAn:false,goiY:'235.000+149.000=384.000, không phải 390.000'},
  {id:'l4ct_11',loai:'chon_nhieu',cau:'Số nào cộng với 400.000 bằng 1.000.000?',dapAn:['600.000'],luaChon:['500.000','600.000','400.000','700.000']},
  {id:'l4ct_12',loai:'chon_nhieu',cau:'Phép tính nào có kết quả bằng 500.000?',dapAn:['300.000 + 200.000','750.000 − 250.000'],luaChon:['300.000 + 200.000','400.000 + 200.000','750.000 − 250.000','600.000 − 200.000']},
  {id:'l4ct_13',loai:'trac_nghiem',cau:'Ước tính: 487.300 + 213.800 ≈ ?',dapAn:'700.000',luaChon:['600.000','700.000','701.100','800.000']},
  {id:'l4ct_14',loai:'trac_nghiem',cau:'___ − 175.000 = 325.000',dapAn:'500.000',luaChon:['150.000','400.000','500.000','600.000']},
  {id:'l4ct_15',loai:'dien_so',cau:'375.248 + 124.752 = ___',dapAn:500000,goiY:'8+2=10, 4+5+1=10... kết quả tròn đẹp!'},
  {id:'l4ct_16',loai:'dung_sai',cau:'Kiểm tra: 265.433 + 234.567 = 500.000 → đúng',dapAn:true,goiY:'Đây là cách kiểm tra phép trừ bằng phép cộng.'},
  {id:'l4ct_17',loai:'trac_nghiem',cau:'Cộng 3 số: 100.000 + 200.000 + 300.000 = ?',dapAn:'600.000',luaChon:['500.000','600.000','700.000','60.000']},
  {id:'l4ct_18',loai:'dien_so',cau:'900.000 − ___ = 450.000',dapAn:450000,goiY:'900.000 − 450.000 = 450.000 (đối xứng)'},
  {id:'l4ct_19',loai:'chon_nhieu',cau:'Số nào lớn hơn 500.000 và nhỏ hơn 600.000?',dapAn:['523.456','599.999'],luaChon:['499.999','523.456','600.000','599.999','700.000']},
  {id:'l4ct_20',loai:'dung_sai',cau:'Tổng của hai số tròn trăm nghìn luôn là số tròn trăm nghìn',dapAn:true,goiY:'200.000 + 300.000 = 500.000 ✓'},
];

// ============================================================
// CHỦ ĐỀ 3: NHÂN VỚI SỐ CÓ 2-3 CHỮ SỐ
// ============================================================
const BAI_GIANG_L4_NHAN_2CHU = {
  tieuDe:'Nhân với số có 2–3 chữ số', icon:'✖️', chuDe:'nhan_2chu',
  cacPhan:[
    {
      tieuDe:'✖️ Nhân với số có 2 chữ số',
      noiDung:`Nhân số bị nhân với từng chữ số của số nhân (từ phải sang trái), rồi cộng tổng.<br><br>
        <strong>267 × 34</strong><br>
        B1: 267 × 4 = 1.068<br>
        B2: 267 × 30 = 8.010 (= 267×3, viết thêm 0)<br>
        B3: 1.068 + 8.010 = <strong>9.078</strong>`,
      svg:`<svg viewBox="0 0 230 128" width="218" height="128" xmlns="http://www.w3.org/2000/svg">
        <text x="200" y="32" text-anchor="end" font-size="20" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">267</text>
        <text x="12" y="32" font-size="18" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">×</text>
        <text x="200" y="56" text-anchor="end" font-size="20" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">34</text>
        <line x1="10" y1="64" x2="208" y2="64" stroke="#ccc" stroke-width="1.5"/>
        <text x="200" y="86" text-anchor="end" font-size="18" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">1.068</text>
        <text x="150" y="86" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif">(×4)</text>
        <text x="200" y="108" text-anchor="end" font-size="18" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="700">8.010</text>
        <text x="150" y="108" font-size="11" fill="#06d6a0" font-family="Nunito,sans-serif">(×30)</text>
        <line x1="10" y1="114" x2="208" y2="114" stroke="#2d2d2d" stroke-width="2"/>
        <text x="200" y="130" text-anchor="end" font-size="20" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">9.078</text>
      </svg>`,
      ketLuan:'Nhân lần lượt với từng hàng, lùi kết quả sang trái tương ứng, rồi cộng lại.'
    },
    {
      tieuDe:'✖️ Nhân với số có 3 chữ số',
      noiDung:`Tương tự nhưng có 3 tích riêng.<br><br>
        <strong>135 × 124</strong><br>
        135 × 4 = 540<br>
        135 × 20 = 2.700<br>
        135 × 100 = 13.500<br>
        540 + 2.700 + 13.500 = <strong>16.740</strong>`,
      svg:`<svg viewBox="0 0 240 140" width="225" height="140" xmlns="http://www.w3.org/2000/svg">
        <text x="210" y="30" text-anchor="end" font-size="19" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">135</text>
        <text x="12" y="30" font-size="17" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">×</text>
        <text x="210" y="52" text-anchor="end" font-size="19" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">124</text>
        <line x1="10" y1="60" x2="218" y2="60" stroke="#ccc" stroke-width="1.5"/>
        <text x="210" y="80" text-anchor="end" font-size="17" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="700">540</text>
        <text x="210" y="100" text-anchor="end" font-size="17" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">2.700</text>
        <text x="210" y="120" text-anchor="end" font-size="17" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="700">13.500</text>
        <line x1="10" y1="126" x2="218" y2="126" stroke="#2d2d2d" stroke-width="2"/>
        <text x="210" y="142" text-anchor="end" font-size="19" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">16.740</text>
      </svg>`,
      ketLuan:'3 chữ số nhân → 3 tích riêng → cộng lại. Lùi mỗi tích sang trái 1 hàng.'
    },
    {
      tieuDe:'💡 Nhân nhẩm và tính nhanh',
      noiDung:`<strong>Nhân với 11</strong>: nhân với 10 rồi cộng thêm một lần số đó<br>
        47 × 11 = 47 × 10 + 47 = 470 + 47 = <strong>517</strong><br><br>
        <strong>Nhân với 99</strong>: nhân với 100 rồi trừ đi một lần số đó<br>
        36 × 99 = 36 × 100 − 36 = 3.600 − 36 = <strong>3.564</strong><br><br>
        <strong>Nhân với 25</strong>: nhân với 100 rồi chia 4<br>
        48 × 25 = 48 × 100 ÷ 4 = 4.800 ÷ 4 = <strong>1.200</strong>`,
      svg:`<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="88" height="76" rx="10" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="52" y="28" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">× 11</text>
        <text x="52" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">×10 rồi +1 lần</text>
        <text x="52" y="72" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">47×11=517</text>
        <rect x="108" y="8" width="88" height="76" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="152" y="28" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">× 99</text>
        <text x="152" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">×100 rồi −1 lần</text>
        <text x="152" y="72" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">36×99=3.564</text>
        <rect x="208" y="8" width="84" height="76" rx="10" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="250" y="28" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">× 25</text>
        <text x="250" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">×100 rồi ÷4</text>
        <text x="250" y="72" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">48×25=1.200</text>
      </svg>`,
      ketLuan:'×11: ×10+1lần. ×99: ×100−1lần. ×25: ×100÷4. Mẹo này tiết kiệm rất nhiều thời gian!'
    }
  ]
};
const BAI_TAP_L4_NHAN_2CHU = [
  {id:'l4n_01',loai:'trac_nghiem',cau:'267 × 34 = ?',dapAn:'9.078',luaChon:['8.878','9.078','9.178','9.278']},
  {id:'l4n_02',loai:'trac_nghiem',cau:'135 × 124 = ?',dapAn:'16.740',luaChon:['16.540','16.640','16.740','16.840']},
  {id:'l4n_03',loai:'trac_nghiem',cau:'47 × 11 = ?',dapAn:'517',luaChon:['507','517','527','477']},
  {id:'l4n_04',loai:'trac_nghiem',cau:'36 × 99 = ?',dapAn:'3.564',luaChon:['3.464','3.564','3.600','3.664']},
  {id:'l4n_05',loai:'trac_nghiem',cau:'48 × 25 = ?',dapAn:'1.200',luaChon:['1.000','1.100','1.200','1.400']},
  {id:'l4n_06',loai:'dien_so',cau:'125 × 8 = ___',dapAn:1000,goiY:'125×8=125×4×2=500×2=1000'},
  {id:'l4n_07',loai:'dien_so',cau:'45 × 22 = ___',dapAn:990,goiY:'45×20=900, 45×2=90, cộng lại'},
  {id:'l4n_08',loai:'dien_so',cau:'76 × 11 = ___',dapAn:836,goiY:'76×10=760, thêm 76 nữa'},
  {id:'l4n_09',loai:'dung_sai',cau:'125 × 8 = 1.000',dapAn:true,goiY:'125×8: 5×8=40→0nhớ4, 2×8+4=20→0nhớ2, 1×8+2=10'},
  {id:'l4n_10',loai:'dung_sai',cau:'99 × 100 = 9.999',dapAn:false,goiY:'99×100=9.900, không phải 9.999'},
  {id:'l4n_11',loai:'dung_sai',cau:'a × b = b × a (tính chất giao hoán phép nhân)',dapAn:true,goiY:'VD: 34×267 = 267×34 = 9.078'},
  {id:'l4n_12',loai:'chon_nhieu',cau:'Số nào là tích của 25 × một số tự nhiên?',dapAn:['1.200','2.500','75'],luaChon:['1.200','2.500','75','130','1.111']},
  {id:'l4n_13',loai:'chon_nhieu',cau:'Phép tính nào bằng 36 × 99?',dapAn:['36 × 100 − 36','3.564'],luaChon:['36 × 100 − 36','36 × 100 + 36','3.564','3.636']},
  {id:'l4n_14',loai:'trac_nghiem',cau:'213 × 32 = ?',dapAn:'6.816',luaChon:['6.616','6.716','6.816','6.916']},
  {id:'l4n_15',loai:'dien_so',cau:'___ × 25 = 2.500',dapAn:100,goiY:'n×25=2.500 → n=2.500÷25=?'},
  {id:'l4n_16',loai:'trac_nghiem',cau:'Ước tính: 48 × 52 ≈ ?',dapAn:'2.500',luaChon:['2.000','2.400','2.500','3.000']},
  {id:'l4n_17',loai:'dien_so',cau:'32 × 125 = ___',dapAn:4000,goiY:'32×125=32×100÷4×5=? Hoặc 8×4×125=8×500'},
  {id:'l4n_18',loai:'dung_sai',cau:'Tích của hai số lẻ luôn là số lẻ',dapAn:true,goiY:'3×5=15, 7×9=63 đều lẻ. Lẻ×lẻ=lẻ.'},
  {id:'l4n_19',loai:'dien_so',cau:'54 × 11 = ___',dapAn:594,goiY:'54×10=540, thêm 54 nữa = 594'},
  {id:'l4n_20',loai:'chon_nhieu',cau:'Phép nhân nào có kết quả lớn hơn 10.000?',dapAn:['250 × 50','135 × 80'],luaChon:['50 × 50','250 × 50','135 × 80','99 × 99']},
];

// ============================================================
// CHỦ ĐỀ 4: CHIA CHO SỐ CÓ 2 CHỮ SỐ
// ============================================================
const BAI_GIANG_L4_CHIA_2CHU = {
  tieuDe:'Chia cho số có 2 chữ số', icon:'➗', chuDe:'chia_2chu',
  cacPhan:[
    {
      tieuDe:'➗ Chia số có 2 chữ số — cách thực hiện',
      noiDung:`Chia từ <strong>trái sang phải</strong>, lấy từng nhóm chữ số chia cho số chia.<br><br>
        <strong>924 ÷ 12</strong><br>
        • 92 ÷ 12 = 7 dư 8 (12×7=84, 92−84=8)<br>
        • Hạ 4: 84 ÷ 12 = 7 dư 0<br>
        → <strong>924 ÷ 12 = 77</strong><br><br>
        Kiểm tra: 77 × 12 = 924 ✓`,
      svg:`<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="76" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="14" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">924 ÷ 12 = ?</text>
        <text x="150" y="50" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">92÷12=7 dư 8 → hạ 4: 84÷12=7</text>
        <text x="150" y="70" text-anchor="middle" font-size="15" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">924 ÷ 12 = 77 ✓</text>
      </svg>`,
      ketLuan:'Chia từ trái: lấy nhóm chữ số ≥ số chia, chia, ghi thương, trừ, hạ chữ số tiếp.'
    },
    {
      tieuDe:'➗ Chia có dư cho số 2 chữ số',
      noiDung:`Khi không chia hết, ta có <strong>số dư</strong> &lt; số chia.<br><br>
        <strong>1.345 ÷ 25</strong><br>
        • 134 ÷ 25 = 5 dư 9 (25×5=125)<br>
        • Hạ 5: 95 ÷ 25 = 3 dư 20 (25×3=75)<br>
        → <strong>1.345 ÷ 25 = 53 dư 20</strong><br><br>
        Kiểm tra: 53 × 25 + 20 = 1.325 + 20 = 1.345 ✓`,
      svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="74" rx="14" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/>
        <text x="150" y="28" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">1.345 ÷ 25 = 53 dư 20</text>
        <text x="150" y="48" text-anchor="middle" font-size="12" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="700">Kiểm tra: 53×25+20 = 1.345 ✓</text>
        <text x="150" y="66" text-anchor="middle" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">Số dư 20 &lt; số chia 25 ✓ (quy tắc dư)</text>
      </svg>`,
      ketLuan:'Số dư luôn < số chia. Kiểm tra: thương × số chia + dư = số bị chia.'
    },
    {
      tieuDe:'🧮 Mẹo ước tính thương',
      noiDung:`Trước khi chia, <strong>ước tính thương</strong> bằng cách làm tròn số chia:<br><br>
        924 ÷ 12: 12 ≈ 10 → thương ≈ 92 → thử 7, 8<br>
        12×7=84, 12×8=96 → 92 nằm giữa → thương = 7<br><br>
        <strong>Làm tròn để đoán thương nhanh</strong>:<br>
        1.680 ÷ 24: 24≈20 → 168÷20≈8 → thử 7<br>
        24×7=168 ✓ → thương đầu tiên là 7`,
      svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="72" rx="14" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="150" y="28" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Ước tính thương 924 ÷ 12</text>
        <text x="150" y="46" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">12≈10 → 92÷10≈9 → thử 7, 8</text>
        <text x="150" y="64" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">12×7=84✓  12×8=96✗ → chọn 7</text>
      </svg>`,
      ketLuan:'Ước tính thương: làm tròn số chia, thử thương gần đúng, điều chỉnh nếu cần.'
    }
  ]
};
const BAI_TAP_L4_CHIA_2CHU = [
  {id:'l4ch_01',loai:'trac_nghiem',cau:'924 ÷ 12 = ?',dapAn:'77',luaChon:['67','77','87','97']},
  {id:'l4ch_02',loai:'trac_nghiem',cau:'1.680 ÷ 24 = ?',dapAn:'70',luaChon:'60,70,80,90'.split(',')},
  {id:'l4ch_03',loai:'trac_nghiem',cau:'1.345 ÷ 25 = ? dư ?',dapAn:'53 dư 20',luaChon:['52 dư 5','53 dư 20','54 dư 5','53 dư 5']},
  {id:'l4ch_04',loai:'trac_nghiem',cau:'2.856 ÷ 34 = ?',dapAn:'84',luaChon:['74','84','94','104']},
  {id:'l4ch_05',loai:'dien_so',cau:'756 ÷ 12 = ___',dapAn:63,goiY:'75÷12=6 dư 3, hạ 6: 36÷12=3'},
  {id:'l4ch_06',loai:'dien_so',cau:'2.400 ÷ 25 = ___',dapAn:96,goiY:'2.400÷25: thử 25×90=2.250, 25×96=2.400'},
  {id:'l4ch_07',loai:'dien_so',cau:'1.200 ÷ 15 = ___',dapAn:80,goiY:'15×80=1.200 (kiểm tra nhanh)'},
  {id:'l4ch_08',loai:'dung_sai',cau:'924 ÷ 12 = 77 (kiểm tra: 77 × 12 = 924)',dapAn:true,goiY:'77×12=77×10+77×2=770+154=924 ✓'},
  {id:'l4ch_09',loai:'dung_sai',cau:'Số dư của phép chia cho 25 có thể là 25',dapAn:false,goiY:'Số dư luôn nhỏ hơn số chia. Dư < 25.'},
  {id:'l4ch_10',loai:'dung_sai',cau:'1.800 ÷ 36 = 50',dapAn:true,goiY:'36×50=1.800 ✓'},
  {id:'l4ch_11',loai:'chon_nhieu',cau:'Phép chia nào có thương là số chẵn?',dapAn:['1.680 ÷ 24','2.856 ÷ 34'],luaChon:['1.680 ÷ 24','924 ÷ 12','2.856 ÷ 34','1.345 ÷ 25']},
  {id:'l4ch_12',loai:'chon_nhieu',cau:'Số dư có thể là bao nhiêu khi chia cho 13?',dapAn:['0','5','12'],luaChon:['0','5','12','13','15']},
  {id:'l4ch_13',loai:'trac_nghiem',cau:'___ ÷ 18 = 45',dapAn:'810',luaChon:['63','800','810','820']},
  {id:'l4ch_14',loai:'dien_so',cau:'3.456 ÷ 48 = ___',dapAn:72,goiY:'48×70=3.360, còn 96. 48×2=96 → thương = 72'},
  {id:'l4ch_15',loai:'dung_sai',cau:'Ước tính 1.690 ÷ 24 ≈ 70',dapAn:true,goiY:'24≈20, 169÷20≈8 → thương ≈ 70. Thực tế: 70 dư 10.'},
  {id:'l4ch_16',loai:'trac_nghiem',cau:'450 ÷ 15 = ?',dapAn:'30',luaChon:['25','30','35','40']},
  {id:'l4ch_17',loai:'dien_so',cau:'___ ÷ 12 = 56 dư 0',dapAn:672,goiY:'12×56=672'},
  {id:'l4ch_18',loai:'dung_sai',cau:'2.100 ÷ 25 = 84',dapAn:true,goiY:'25×84=25×80+25×4=2000+100=2100 ✓'},
  {id:'l4ch_19',loai:'chon_nhieu',cau:'Số nào chia hết cho 15?',dapAn:['900','450','75'],luaChon:['900','450','75','100','160']},
  {id:'l4ch_20',loai:'dien_so',cau:'7.200 ÷ 36 = ___',dapAn:200,goiY:'36×200=7.200 (tính nhẩm: 36×2=72→×100=7.200)'},
];

// ============================================================
// CHỦ ĐỀ 5: DẤU HIỆU CHIA HẾT
// ============================================================
const BAI_GIANG_L4_CHIA_HET = {
  tieuDe:'Dấu hiệu chia hết', icon:'🔍', chuDe:'chia_het',
  cacPhan:[
    {
      tieuDe:'🔍 Chia hết cho 2 và cho 5',
      noiDung:`<strong>Chia hết cho 2</strong>: chữ số tận cùng là số chẵn (0,2,4,6,8)<br>
        248 chia hết cho 2 ✓ (tận cùng 8)<br>
        357 không chia hết cho 2 ✗ (tận cùng 7)<br><br>
        <strong>Chia hết cho 5</strong>: chữ số tận cùng là 0 hoặc 5<br>
        345 chia hết cho 5 ✓ (tận cùng 5)<br>
        342 không chia hết cho 5 ✗ (tận cùng 2)`,
      svg:`<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="76" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="76" y="28" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">Chia hết cho 2</text>
        <text x="76" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">Tận cùng: 0,2,4,6,8</text>
        <text x="76" y="64" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="700">248 ✓  357 ✗</text>
        <rect x="156" y="8" width="136" height="76" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="224" y="28" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">Chia hết cho 5</text>
        <text x="224" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">Tận cùng: 0 hoặc 5</text>
        <text x="224" y="64" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">345 ✓  342 ✗</text>
      </svg>`,
      ketLuan:'Chia hết cho 2: tận cùng chẵn. Chia hết cho 5: tận cùng 0 hoặc 5.'
    },
    {
      tieuDe:'🔍 Chia hết cho 3 và cho 9',
      noiDung:`<strong>Chia hết cho 3</strong>: tổng các chữ số chia hết cho 3<br>
        4+2+3=9, 9÷3=3 → 423 chia hết cho 3 ✓<br>
        1+2+4=7, 7÷3 dư 1 → 124 không chia hết cho 3 ✗<br><br>
        <strong>Chia hết cho 9</strong>: tổng các chữ số chia hết cho 9<br>
        3+4+2=9 → 342 chia hết cho 9 ✓<br>
        1+2+3=6 → 123 không chia hết cho 9 ✗`,
      svg:`<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="76" rx="12" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="76" y="28" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Chia hết cho 3</text>
        <text x="76" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">Tổng chữ số ÷ 3 = 0 dư</text>
        <text x="76" y="64" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">423: 4+2+3=9 ✓</text>
        <rect x="156" y="8" width="136" height="76" rx="12" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/>
        <text x="224" y="28" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">Chia hết cho 9</text>
        <text x="224" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">Tổng chữ số ÷ 9 = 0 dư</text>
        <text x="224" y="64" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">342: 3+4+2=9 ✓</text>
      </svg>`,
      ketLuan:'Chia hết cho 3: tổng chữ số ⁄ 3. Chia hết cho 9: tổng chữ số ⁄ 9.'
    },
    {
      tieuDe:'🔍 Chia hết cho 10 và kết hợp',
      noiDung:`<strong>Chia hết cho 10</strong>: tận cùng là 0<br>
        3.450 ÷ 10 = 345 ✓<br><br>
        <strong>Chia hết cho 2 VÀ 3 → chia hết cho 6</strong><br>
        Ví dụ: 126 → tận cùng 6 (÷2 ✓), 1+2+6=9 (÷3 ✓) → ÷6 ✓<br><br>
        <strong>Chia hết cho cả 2 và 5 → chia hết cho 10</strong><br>
        → tận cùng phải là 0`,
      svg:`<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="76" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="28" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">Kết hợp dấu hiệu</text>
        <text x="150" y="46" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">÷6 = ÷2 VÀ ÷3   ·   ÷10 = ÷2 VÀ ÷5</text>
        <text x="150" y="64" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">126 ÷6✓ (tận 6 & tổng=9)</text>
      </svg>`,
      ketLuan:'÷10: tận cùng 0. ÷6: thỏa cả ÷2 và ÷3. Kết hợp dấu hiệu để kiểm tra nhanh.'
    }
  ]
};
const BAI_TAP_L4_CHIA_HET = [
  {id:'l4dh_01',loai:'trac_nghiem',cau:'Số nào chia hết cho 2?',dapAn:'348',luaChon:['345','347','348','351']},
  {id:'l4dh_02',loai:'trac_nghiem',cau:'Số nào chia hết cho 5?',dapAn:'425',luaChon:['422','423','424','425']},
  {id:'l4dh_03',loai:'trac_nghiem',cau:'Số nào chia hết cho 9?',dapAn:'342',luaChon:['341','342','343','344']},
  {id:'l4dh_04',loai:'trac_nghiem',cau:'Số nào chia hết cho cả 2 và 5?',dapAn:'450',luaChon:['455','460','450','445']},
  {id:'l4dh_05',loai:'dung_sai',cau:'Số 423 chia hết cho 3 vì 4+2+3=9',dapAn:true,goiY:'9÷3=3 không dư → 423÷3=141 ✓'},
  {id:'l4dh_06',loai:'dung_sai',cau:'Mọi số chia hết cho 9 đều chia hết cho 3',dapAn:true,goiY:'Nếu tổng chữ số chia hết cho 9 thì cũng chia hết cho 3'},
  {id:'l4dh_07',loai:'dung_sai',cau:'Số 126 chia hết cho 6',dapAn:true,goiY:'Tận cùng 6(÷2✓), 1+2+6=9(÷3✓) → ÷6✓'},
  {id:'l4dh_08',loai:'dung_sai',cau:'Số lẻ có thể chia hết cho 2',dapAn:false,goiY:'Số lẻ tận cùng là 1,3,5,7,9 → không chia hết cho 2'},
  {id:'l4dh_09',loai:'chon_nhieu',cau:'Số nào chia hết cho 3?',dapAn:['123','456','789'],luaChon:['123','124','456','789','100']},
  {id:'l4dh_10',loai:'chon_nhieu',cau:'Số nào chia hết cho cả 2 và 3?',dapAn:['126','312','48'],luaChon:['126','125','312','48','91']},
  {id:'l4dh_11',loai:'chon_nhieu',cau:'Số nào chia hết cho 10?',dapAn:['1.000','450','3.670'],luaChon:['1.000','450','3.675','3.670','99']},
  {id:'l4dh_12',loai:'dien_so',cau:'Tổng chữ số của 729 là ___, nên 729 chia hết cho 9',dapAn:18,goiY:'7+2+9=18, và 18÷9=2 → chia hết cho 9'},
  {id:'l4dh_13',loai:'trac_nghiem',cau:'Số nào chia hết cho 9 nhưng không chia hết cho 2?',dapAn:'729',luaChon:['720','726','729','738']},
  {id:'l4dh_14',loai:'dien_so',cau:'Chữ số tận cùng của 4.56_ để chia hết cho 5 là ___',dapAn:5,goiY:'Chia hết cho 5: tận cùng 0 hoặc 5. 4.565 hợp lý hơn.'},
  {id:'l4dh_15',loai:'dung_sai',cau:'Số có tổng chữ số bằng 12 thì chia hết cho cả 3 và 9',dapAn:false,goiY:'12÷3=4(✓) nhưng 12÷9 dư 3(✗). Chỉ ÷3 thôi.'},
  {id:'l4dh_16',loai:'trac_nghiem',cau:'Số 4.5_0 chia hết cho 9, chữ số điền vào là?',dapAn:'4',luaChon:['2','4','6','8']},
  {id:'l4dh_17',loai:'dung_sai',cau:'270 chia hết cho 2, 3, 5, 9 và 10',dapAn:true,goiY:'2+7+0=9(÷9✓), tận 0(÷2,÷5,÷10✓) → đúng hết!'},
  {id:'l4dh_18',loai:'dien_so',cau:'Có bao nhiêu số có 2 chữ số chia hết cho 9? (từ 10–99)',dapAn:10,goiY:'18,27,36,45,54,63,72,81,90,99 → 10 số'},
  {id:'l4dh_19',loai:'chon_nhieu',cau:'Số nào chia hết cho 5 nhưng không chia hết cho 2?',dapAn:['345','85','125'],luaChon:['345','350','85','125','100']},
  {id:'l4dh_20',loai:'dung_sai',cau:'Số 1.000 chia hết cho 2, 4, 5, 8, 10 và 25',dapAn:true,goiY:'1000÷4=250✓, ÷8=125✓, ÷25=40✓ → tất cả đúng'},
];

// ============================================================
// CHỦ ĐỀ 6: PHÂN SỐ — KHÁI NIỆM & RÚT GỌN
// ============================================================
const BAI_GIANG_L4_PHAN_SO = {
  tieuDe:'Phân Số — Khái niệm & Rút gọn', icon:'🍕', chuDe:'phan_so',
  cacPhan:[
    {
      tieuDe:'🍕 Phân số và phân số bằng nhau',
      noiDung:`Phân số <strong>a/b</strong> (b≠0):<br>
        • <strong>Tử số</strong> (a): phần được lấy<br>
        • <strong>Mẫu số</strong> (b): tổng phần bằng nhau<br><br>
        Phân số bằng nhau: nhân/chia cả tử và mẫu với cùng số ≠ 0<br>
        <strong>2/3 = 4/6 = 6/9 = 8/12</strong><br>
        (nhân tử và mẫu với 2, 3, 4...)`,
      svg:`<svg viewBox="0 0 300 100" width="285" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="54" r="42" fill="#ffd166" stroke="#ff6b35" stroke-width="2.5"/>
        <path d="M60,54 L60,12 A42,42 0 0,1 96.4,33 Z" fill="#ff6b35" opacity="0.85"/>
        <path d="M60,54 L96.4,33 A42,42 0 0,1 96.4,75 Z" fill="#ff6b35" opacity="0.85"/>
        <line x1="60" y1="12" x2="60" y2="96" stroke="#ff6b35" stroke-width="1.5"/>
        <line x1="18" y1="54" x2="102" y2="54" stroke="#ff6b35" stroke-width="1.5"/>
        <line x1="96" y1="33" x2="24" y2="75" stroke="#ff6b35" stroke-width="1.5"/>
        <text x="60" y="98" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">2/3 của bánh</text>
        <text x="180" y="30" font-size="14" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">2/3</text>
        <text x="180" y="50" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif">= 4/6 = 6/9</text>
        <text x="180" y="70" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif">= 8/12 ...</text>
        <text x="180" y="88" font-size="10" fill="#6b6b6b" font-family="Nunito,sans-serif">nhân tử&mẫu cùng số</text>
      </svg>`,
      ketLuan:'Phân số bằng nhau: nhân/chia tử và mẫu cùng số ≠ 0. Vô số phân số bằng nhau!'
    },
    {
      tieuDe:'✂️ Rút gọn phân số',
      noiDung:`<strong>Rút gọn</strong>: chia tử và mẫu cho ƯCLN của chúng.<br><br>
        Ví dụ: Rút gọn <strong>12/18</strong><br>
        ƯCLN(12,18) = 6<br>
        12÷6=2 và 18÷6=3<br>
        → <strong>12/18 = 2/3</strong> (phân số tối giản)<br><br>
        <strong>Phân số tối giản</strong>: tử và mẫu không còn ước chung nào > 1`,
      svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="74" rx="14" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="14" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">12/18 → ƯCLN=6</text>
        <text x="150" y="50" text-anchor="middle" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">12÷6=2  ,  18÷6=3</text>
        <text x="150" y="72" text-anchor="middle" font-size="16" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">12/18 = 2/3 ✓</text>
      </svg>`,
      ketLuan:'Rút gọn = chia tử và mẫu cho ƯCLN. Kết quả là phân số tối giản.'
    },
    {
      tieuDe:'⚖️ So sánh phân số khác mẫu',
      noiDung:`Bước 1: Tìm BCNN của các mẫu số<br>
        Bước 2: Quy đồng mẫu (đổi về cùng mẫu)<br>
        Bước 3: So sánh tử<br><br>
        Ví dụ: So sánh <strong>3/4</strong> và <strong>5/6</strong><br>
        BCNN(4,6) = 12<br>
        3/4 = 9/12 · 5/6 = 10/12<br>
        9 &lt; 10 → <strong>3/4 &lt; 5/6</strong>`,
      svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="14" width="110" height="56" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/>
        <text x="63" y="40" text-anchor="middle" font-size="20" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">3/4</text>
        <text x="63" y="58" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif">= 9/12</text>
        <text x="155" y="46" text-anchor="middle" font-size="22" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">&lt;</text>
        <rect x="182" y="14" width="110" height="56" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2.5"/>
        <text x="237" y="40" text-anchor="middle" font-size="20" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">5/6</text>
        <text x="237" y="58" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif">= 10/12</text>
        <text x="150" y="84" text-anchor="middle" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">BCNN(4,6)=12 → 9/12 &lt; 10/12 → 3/4 &lt; 5/6</text>
      </svg>`,
      ketLuan:'So sánh khác mẫu: quy đồng về cùng mẫu (BCNN), rồi so tử số.'
    }
  ]
};
const BAI_TAP_L4_PHAN_SO = [
  {id:'l4ps_01',loai:'trac_nghiem',cau:'Rút gọn 12/18 = ?',dapAn:'2/3',luaChon:['3/4','2/3','4/6','6/9']},
  {id:'l4ps_02',loai:'trac_nghiem',cau:'So sánh 3/4 và 5/6?',dapAn:'3/4 < 5/6',luaChon:['3/4 > 5/6','3/4 = 5/6','3/4 < 5/6','Không so được']},
  {id:'l4ps_03',loai:'trac_nghiem',cau:'Phân số nào bằng 2/5?',dapAn:'6/15',luaChon:['3/5','4/5','6/15','2/10']},
  {id:'l4ps_04',loai:'trac_nghiem',cau:'ƯCLN(24,36) = ?',dapAn:'12',luaChon:['4','6','12','24']},
  {id:'l4ps_05',loai:'dien_so',cau:'24/36 rút gọn = ___/3',dapAn:2,goiY:'ƯCLN(24,36)=12. 24÷12=2, 36÷12=3 → 2/3'},
  {id:'l4ps_06',loai:'dien_so',cau:'3/4 quy đồng mẫu 12: tử số là ___',dapAn:9,goiY:'4×3=12, tử: 3×3=9 → 9/12'},
  {id:'l4ps_07',loai:'dung_sai',cau:'4/6 = 2/3 (phân số tối giản)',dapAn:true,goiY:'ƯCLN(4,6)=2. 4÷2=2, 6÷2=3 → 2/3 tối giản ✓'},
  {id:'l4ps_08',loai:'dung_sai',cau:'7/8 > 5/6',dapAn:true,goiY:'BCNN(8,6)=24: 7/8=21/24, 5/6=20/24. 21>20 → 7/8>5/6'},
  {id:'l4ps_09',loai:'dung_sai',cau:'Phân số tối giản là phân số không thể rút gọn thêm',dapAn:true,goiY:'Tối giản: ƯCLN(tử,mẫu)=1, không rút gọn được nữa'},
  {id:'l4ps_10',loai:'chon_nhieu',cau:'Phân số nào bằng 1/2?',dapAn:['2/4','3/6','5/10'],luaChon:['2/4','3/6','2/3','5/10','4/6']},
  {id:'l4ps_11',loai:'chon_nhieu',cau:'Phân số nào là phân số tối giản?',dapAn:['3/7','5/8','11/13'],luaChon:['3/7','4/6','5/8','6/9','11/13']},
  {id:'l4ps_12',loai:'trac_nghiem',cau:'5/8 quy đồng mẫu 24: tử số là?',dapAn:'15',luaChon:['5','10','15','20']},
  {id:'l4ps_13',loai:'dien_so',cau:'BCNN(4,6) = ___',dapAn:12,goiY:'B(4)=4,8,12... B(6)=6,12... → BCNN=12'},
  {id:'l4ps_14',loai:'dung_sai',cau:'Mọi phân số đều rút gọn được',dapAn:false,goiY:'Phân số tối giản (như 3/7) không rút gọn được nữa'},
  {id:'l4ps_15',loai:'trac_nghiem',cau:'Rút gọn 30/45 = ?',dapAn:'2/3',luaChon:['1/3','2/3','3/4','5/9']},
  {id:'l4ps_16',loai:'dien_so',cau:'Phân số 48/64 rút gọn tối giản: mẫu là ___',dapAn:4,goiY:'ƯCLN(48,64)=16. 48÷16=3, 64÷16=4 → 3/4'},
  {id:'l4ps_17',loai:'chon_nhieu',cau:'Phân số nào lớn hơn 1/2?',dapAn:['3/5','5/8','7/10'],luaChon:['3/5','3/8','5/8','1/4','7/10']},
  {id:'l4ps_18',loai:'dung_sai',cau:'2/3 < 3/4 < 4/5 (thứ tự tăng dần)',dapAn:true,goiY:'Quy đồng mẫu 60: 40/60 < 45/60 < 48/60 ✓'},
  {id:'l4ps_19',loai:'dien_so',cau:'7/21 rút gọn tối giản: tử là ___',dapAn:1,goiY:'ƯCLN(7,21)=7. 7÷7=1, 21÷7=3 → 1/3'},
  {id:'l4ps_20',loai:'trac_nghiem',cau:'Phân số nào bé hơn 1?',dapAn:'7/8',luaChon:['8/7','9/8','7/8','10/9']},
];

// ============================================================
// CHỦ ĐỀ 7: CỘNG & TRỪ PHÂN SỐ
// ============================================================
const BAI_GIANG_L4_CONG_TRU_PS = {
  tieuDe:'Cộng & Trừ Phân Số', icon:'½', chuDe:'cong_tru_ps',
  cacPhan:[
    {
      tieuDe:'➕ Cộng phân số cùng mẫu',
      noiDung:`<strong>Cộng tử, giữ mẫu:</strong><br>
        a/m + b/m = (a+b)/m<br><br>
        Ví dụ: <strong>3/8 + 1/8 = 4/8 = 1/2</strong><br>
        (nhớ rút gọn kết quả!)<br><br>
        <strong>5/7 + 4/7 = 9/7</strong><br>
        → Phân số lớn hơn 1 (tử > mẫu), có thể viết thành hỗn số:<br>
        9/7 = 1 + 2/7 = <strong>1 và 2/7</strong>`,
      svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="74" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="76" y="28" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">Cùng mẫu</text>
        <text x="76" y="48" text-anchor="middle" font-size="14" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">3/8 + 1/8</text>
        <text x="76" y="70" text-anchor="middle" font-size="15" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">= 4/8 = 1/2</text>
        <rect x="156" y="8" width="136" height="74" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="224" y="28" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">Kết quả &gt; 1</text>
        <text x="224" y="48" text-anchor="middle" font-size="14" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">5/7 + 4/7</text>
        <text x="224" y="70" text-anchor="middle" font-size="15" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">= 9/7 = 1²⁄₇</text>
      </svg>`,
      ketLuan:'Cùng mẫu: cộng tử, giữ mẫu. Rút gọn nếu được. Đổi sang hỗn số nếu tử > mẫu.'
    },
    {
      tieuDe:'➕ Cộng phân số khác mẫu',
      noiDung:`Bước 1: Quy đồng mẫu (BCNN)<br>
        Bước 2: Cộng tử<br>
        Bước 3: Rút gọn<br><br>
        Ví dụ: <strong>2/3 + 3/4</strong><br>
        BCNN(3,4) = 12<br>
        2/3 = 8/12 · 3/4 = 9/12<br>
        → 8/12 + 9/12 = <strong>17/12 = 1 và 5/12</strong>`,
      svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="74" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="28" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">2/3 + 3/4 = ?</text>
        <text x="150" y="48" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">BCNN=12 → 8/12 + 9/12</text>
        <text x="150" y="70" text-anchor="middle" font-size="15" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">= 17/12 = 1 và 5/12</text>
      </svg>`,
      ketLuan:'Khác mẫu: quy đồng → cộng tử → rút gọn. 2/3+3/4=17/12.'
    },
    {
      tieuDe:'➖ Trừ phân số',
      noiDung:`Trừ phân số: tương tự cộng, thay + bằng −.<br><br>
        Cùng mẫu: <strong>a/m − b/m = (a−b)/m</strong><br>
        Ví dụ: 7/9 − 4/9 = <strong>3/9 = 1/3</strong><br><br>
        Khác mẫu: quy đồng trước rồi trừ<br>
        <strong>5/6 − 3/8</strong><br>
        BCNN(6,8)=24: 20/24 − 9/24 = <strong>11/24</strong>`,
      svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="74" rx="12" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/>
        <text x="76" y="28" text-anchor="middle" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">Cùng mẫu</text>
        <text x="76" y="48" text-anchor="middle" font-size="14" fill="#2d2d2d" font-family="Nunito,sans-serif">7/9 − 4/9</text>
        <text x="76" y="70" text-anchor="middle" font-size="15" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">= 3/9 = 1/3</text>
        <rect x="156" y="8" width="136" height="74" rx="12" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="224" y="28" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Khác mẫu</text>
        <text x="224" y="48" text-anchor="middle" font-size="14" fill="#2d2d2d" font-family="Nunito,sans-serif">5/6 − 3/8</text>
        <text x="224" y="70" text-anchor="middle" font-size="15" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">= 11/24</text>
      </svg>`,
      ketLuan:'Trừ PS: cùng mẫu trừ tử. Khác mẫu quy đồng rồi trừ. Nhớ rút gọn kết quả!'
    }
  ]
};
const BAI_TAP_L4_CONG_TRU_PS = [
  {id:'l4cp_01',loai:'trac_nghiem',cau:'3/8 + 1/8 = ?',dapAn:'1/2',luaChon:['4/8','1/2','4/16','2/4']},
  {id:'l4cp_02',loai:'trac_nghiem',cau:'2/3 + 3/4 = ?',dapAn:'17/12',luaChon:['5/7','17/12','5/12','1/2']},
  {id:'l4cp_03',loai:'trac_nghiem',cau:'7/9 − 4/9 = ?',dapAn:'1/3',luaChon:['3/9','1/3','3/0','4/9']},
  {id:'l4cp_04',loai:'trac_nghiem',cau:'5/6 − 3/8 = ?',dapAn:'11/24',luaChon:['2/24','11/24','8/24','1/2']},
  {id:'l4cp_05',loai:'dien_so',cau:'1/4 + 3/4 = ___',dapAn:1,goiY:'Cùng mẫu: 1+3=4, 4/4=1'},
  {id:'l4cp_06',loai:'dien_so',cau:'5/6 + 1/6 = ___/6',dapAn:6,goiY:'5+1=6, 6/6=1'},
  {id:'l4cp_07',loai:'dien_so',cau:'3/4 − 1/2 = ___/4',dapAn:1,goiY:'1/2=2/4. 3/4−2/4=1/4'},
  {id:'l4cp_08',loai:'dung_sai',cau:'1/3 + 1/4 = 2/7',dapAn:false,goiY:'Khác mẫu phải quy đồng! BCNN(3,4)=12: 4/12+3/12=7/12'},
  {id:'l4cp_09',loai:'dung_sai',cau:'5/8 + 3/8 = 1',dapAn:true,goiY:'8/8=1 ✓'},
  {id:'l4cp_10',loai:'dung_sai',cau:'2/5 + 3/5 = 1 (và đây là 1 nguyên)',dapAn:true,goiY:'2/5+3/5=5/5=1 ✓'},
  {id:'l4cp_11',loai:'chon_nhieu',cau:'Phép tính nào bằng 1/2?',dapAn:['1/4 + 1/4','3/6','5/10'],luaChon:['1/4 + 1/4','1/3 + 1/6','3/6','5/10','2/6']},
  {id:'l4cp_12',loai:'chon_nhieu',cau:'Phép tính nào có kết quả lớn hơn 1?',dapAn:['5/7 + 4/7','3/4 + 1/2'],luaChon:['5/7 + 4/7','1/4 + 1/4','3/4 + 1/2','1/3 + 1/4']},
  {id:'l4cp_13',loai:'trac_nghiem',cau:'1/2 + 1/3 + 1/6 = ?',dapAn:'1',luaChon:['1/6','2/3','5/6','1']},
  {id:'l4cp_14',loai:'dien_so',cau:'7/12 − 1/4 = ___/12',dapAn:4,goiY:'1/4=3/12. 7/12−3/12=4/12=1/3'},
  {id:'l4cp_15',loai:'dung_sai',cau:'1/2 + 1/4 = 3/4',dapAn:true,goiY:'1/2=2/4. 2/4+1/4=3/4 ✓'},
  {id:'l4cp_16',loai:'trac_nghiem',cau:'2/3 − 1/6 = ?',dapAn:'1/2',luaChon:['1/6','1/3','1/2','2/6']},
  {id:'l4cp_17',loai:'dien_so',cau:'___ + 1/3 = 1',dapAn:0.667,goiY:'1−1/3=2/3 ≈ 0.667'},
  {id:'l4cp_18',loai:'chon_nhieu',cau:'Cộng phân số khác mẫu cần bước nào?',dapAn:['Tìm BCNN','Quy đồng mẫu','Cộng tử số'],luaChon:['Tìm BCNN','Quy đồng mẫu','Nhân tử số','Cộng tử số','Cộng mẫu số']},
  {id:'l4cp_19',loai:'dung_sai',cau:'3/4 − 3/4 = 0',dapAn:true,goiY:'Một số trừ chính nó bằng 0. 3/4−3/4=0/4=0'},
  {id:'l4cp_20',loai:'dien_so',cau:'5/8 + 3/8 − 1/4 = ___',dapAn:0.75,goiY:'5/8+3/8=1. 1−1/4=3/4=0.75'},
];

// ============================================================
// CHỦ ĐỀ 8: HÌNH HỌC LỚP 4
// ============================================================
const BAI_GIANG_L4_HINH_HOC = {
  tieuDe:'Hình Học', icon:'📐', chuDe:'hinh_hoc',
  cacPhan:[
    {
      tieuDe:'📐 Góc nhọn, góc tù, góc bẹt',
      noiDung:`<strong>Phân loại góc theo độ lớn:</strong><br>
        • <strong>Góc nhọn</strong>: 0° &lt; góc &lt; 90°<br>
        • <strong>Góc vuông</strong>: đúng 90°<br>
        • <strong>Góc tù</strong>: 90° &lt; góc &lt; 180°<br>
        • <strong>Góc bẹt</strong>: đúng 180° (đường thẳng)<br><br>
        Dùng <strong>thước đo góc (thước đo độ)</strong> để đo chính xác.`,
      svg:`<svg viewBox="0 0 300 100" width="285" height="100" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="80" x2="60" y2="25" stroke="#ff6b35" stroke-width="3"/>
        <line x1="20" y1="80" x2="75" y2="80" stroke="#ff6b35" stroke-width="3"/>
        <text x="48" y="98" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">Nhọn &lt;90°</text>
        <line x1="100" y1="80" x2="100" y2="25" stroke="#06d6a0" stroke-width="3"/>
        <line x1="100" y1="80" x2="150" y2="80" stroke="#06d6a0" stroke-width="3"/>
        <rect x="100" y="62" width="18" height="18" fill="none" stroke="#06d6a0" stroke-width="2"/>
        <text x="125" y="98" text-anchor="middle" font-size="10" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="700">Vuông=90°</text>
        <line x1="170" y1="80" x2="185" y2="25" stroke="#7c4dff" stroke-width="3"/>
        <line x1="170" y1="80" x2="225" y2="80" stroke="#7c4dff" stroke-width="3"/>
        <text x="198" y="98" text-anchor="middle" font-size="10" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">Tù 90°–180°</text>
        <line x1="240" y1="60" x2="295" y2="60" stroke="#2d2d2d" stroke-width="3"/>
        <text x="267" y="78" text-anchor="middle" font-size="10" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">Bẹt=180°</text>
      </svg>`,
      ketLuan:'4 loại góc: nhọn(<90°), vuông(=90°), tù(90°–180°), bẹt(=180°).'
    },
    {
      tieuDe:'▱ Hình bình hành và hình thoi',
      noiDung:`<strong>Hình bình hành</strong>:<br>
        • 2 cặp cạnh song song và bằng nhau<br>
        • Diện tích = đáy × chiều cao<br><br>
        <strong>Hình thoi</strong>:<br>
        • 4 cạnh bằng nhau, 2 cặp cạnh song song<br>
        • Diện tích = (đường chéo 1 × đường chéo 2) ÷ 2<br><br>
        Hình chữ nhật là hình bình hành đặc biệt!`,
      svg:`<svg viewBox="0 0 300 100" width="285" height="100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="30,80 120,80 140,25 50,25" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/>
        <text x="85" y="56" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">HBH</text>
        <text x="85" y="72" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif">S = đáy × h</text>
        <line x1="50" y1="25" x2="50" y2="80" stroke="#ff6b35" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="38" y="55" font-size="9" fill="#ff6b35" font-family="Nunito,sans-serif">h</text>
        <polygon points="215,20 255,55 215,90 175,55" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2.5"/>
        <text x="215" y="59" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Thoi</text>
        <line x1="175" y1="55" x2="255" y2="55" stroke="#7c4dff" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="215" y1="20" x2="215" y2="90" stroke="#7c4dff" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="215" y="99" text-anchor="middle" font-size="9" fill="#7c4dff" font-family="Nunito,sans-serif">d₁×d₂÷2</text>
      </svg>`,
      ketLuan:'HBH: S=đáy×h. Hình thoi: S=(d₁×d₂)÷2. Chiều cao vuông góc với đáy.'
    },
    {
      tieuDe:'⭕ Hình tròn — chu vi và diện tích',
      noiDung:`<strong>Hình tròn</strong>: mọi điểm cách đều tâm một khoảng = bán kính r.<br><br>
        <strong>Đường kính</strong> d = 2r<br>
        <strong>Chu vi</strong> C = d × π ≈ d × 3,14<br>
        <strong>Diện tích</strong> S = r × r × π ≈ r² × 3,14<br><br>
        Ví dụ: r = 5cm<br>
        C = 10 × 3,14 = <strong>31,4 cm</strong><br>
        S = 5 × 5 × 3,14 = <strong>78,5 cm²</strong>`,
      svg:`<svg viewBox="0 0 300 105" width="285" height="105" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="55" r="44" fill="#fffbe6" stroke="#ffd166" stroke-width="3"/>
        <circle cx="80" cy="55" r="3" fill="#2d2d2d"/>
        <line x1="80" y1="55" x2="124" y2="55" stroke="#ff6b35" stroke-width="2.5"/>
        <text x="102" y="48" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">r=5cm</text>
        <line x1="36" y1="55" x2="124" y2="55" stroke="#7c4dff" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="80" y="100" text-anchor="middle" font-size="10" fill="#7c4dff" font-family="Nunito,sans-serif">d=10cm</text>
        <text x="195" y="30" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">C = d×π</text>
        <text x="195" y="48" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">= 10×3,14 = 31,4cm</text>
        <text x="195" y="68" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">S = r²×π</text>
        <text x="195" y="86" font-size="12" fill="#ffd166" font-family="Nunito,sans-serif" font-weight="700">= 25×3,14=78,5cm²</text>
      </svg>`,
      ketLuan:'Hình tròn: C=d×3,14. S=r×r×3,14. π≈3,14 (số Pi).'
    }
  ]
};
const BAI_TAP_L4_HINH_HOC = [
  {id:'l4hh_01',loai:'trac_nghiem',cau:'Hình bình hành đáy 8cm, chiều cao 5cm. Diện tích?',dapAn:'40cm²',luaChon:['26cm²','40cm²','80cm²','13cm²']},
  {id:'l4hh_02',loai:'trac_nghiem',cau:'Hình thoi hai đường chéo 6cm và 8cm. Diện tích?',dapAn:'24cm²',luaChon:['14cm²','24cm²','48cm²','28cm²']},
  {id:'l4hh_03',loai:'trac_nghiem',cau:'Hình tròn bán kính 7cm. Chu vi ≈ ? (π≈3,14)',dapAn:'43,96cm',luaChon:['21,98cm','43,96cm','153,86cm','78,5cm']},
  {id:'l4hh_04',loai:'trac_nghiem',cau:'Hình tròn đường kính 10cm. Diện tích ≈ ?',dapAn:'78,5cm²',luaChon:['31,4cm²','78,5cm²','314cm²','157cm²']},
  {id:'l4hh_05',loai:'dung_sai',cau:'Hình chữ nhật là hình bình hành đặc biệt',dapAn:true,goiY:'HCN có 2 cặp cạnh song song bằng nhau + 4 góc vuông → là HBH'},
  {id:'l4hh_06',loai:'dung_sai',cau:'Góc tù lớn hơn 180°',dapAn:false,goiY:'Góc tù: 90° < góc < 180°. Góc bẹt mới = 180°.'},
  {id:'l4hh_07',loai:'dung_sai',cau:'Hình thoi có 4 cạnh bằng nhau',dapAn:true,goiY:'Đúng! Đây là đặc điểm đặc trưng của hình thoi.'},
  {id:'l4hh_08',loai:'dien_so',cau:'HBH đáy 12cm, cao 7cm. S = ___ cm²',dapAn:84,goiY:'S = 12 × 7 = 84cm²'},
  {id:'l4hh_09',loai:'dien_so',cau:'Hình thoi d₁=10cm, d₂=6cm. S = ___ cm²',dapAn:30,goiY:'S = 10×6÷2 = 30cm²'},
  {id:'l4hh_10',loai:'dien_so',cau:'Hình tròn r=5cm. C ≈ ___ cm',dapAn:31.4,goiY:'C = 2×5×3,14 = 31,4cm'},
  {id:'l4hh_11',loai:'chon_nhieu',cau:'Hình nào có ít nhất một cặp cạnh song song?',dapAn:['Hình bình hành','Hình thang','Hình thoi'],luaChon:['Hình bình hành','Hình tròn','Hình thang','Hình thoi','Tam giác đều']},
  {id:'l4hh_12',loai:'chon_nhieu',cau:'Góc nào lớn hơn 90°?',dapAn:['Góc tù','Góc bẹt'],luaChon:['Góc nhọn','Góc vuông','Góc tù','Góc bẹt']},
  {id:'l4hh_13',loai:'trac_nghiem',cau:'Hình tròn r=3cm. S ≈ ?',dapAn:'28,26cm²',luaChon:['9,42cm²','18,84cm²','28,26cm²','56,52cm²']},
  {id:'l4hh_14',loai:'dung_sai',cau:'Hình vuông là hình thoi đặc biệt',dapAn:true,goiY:'Hình vuông: 4 cạnh bằng nhau + 4 góc vuông → là hình thoi đặc biệt'},
  {id:'l4hh_15',loai:'dien_so',cau:'HBH có S=72cm², đáy=9cm. Chiều cao = ___ cm',dapAn:8,goiY:'h = S÷đáy = 72÷9 = 8cm'},
  {id:'l4hh_16',loai:'trac_nghiem',cau:'Hình tròn chu vi ≈ 62,8cm. Đường kính ≈ ?',dapAn:'20cm',luaChon:['10cm','15cm','20cm','25cm']},
  {id:'l4hh_17',loai:'dung_sai',cau:'Diện tích hình thoi = (d₁×d₂)÷2',dapAn:true,goiY:'Đây là công thức chính xác của hình thoi.'},
  {id:'l4hh_18',loai:'dien_so',cau:'Hình thoi d₁=14cm, d₂=10cm. S = ___ cm²',dapAn:70,goiY:'S = 14×10÷2 = 70cm²'},
  {id:'l4hh_19',loai:'chon_nhieu',cau:'Công thức nào đúng cho hình tròn?',dapAn:['C = d × π','S = r × r × π'],luaChon:['C = d × π','C = r × π','S = r × r × π','S = d × π']},
  {id:'l4hh_20',loai:'dung_sai',cau:'Hai hình tròn cùng bán kính thì có cùng chu vi và diện tích',dapAn:true,goiY:'C và S đều chỉ phụ thuộc r → cùng r → cùng C và S'},
];

// ============================================================
// CHỦ ĐỀ 9: ĐO LƯỜNG LỚP 4
// ============================================================
const BAI_GIANG_L4_DO_LUONG = {
  tieuDe:'Đo Lường', icon:'📏', chuDe:'do_luong',
  cacPhan:[
    {
      tieuDe:'📐 Diện tích — đơn vị và đổi đơn vị',
      noiDung:`Bảng đơn vị diện tích:<br>
        1 km² = 1.000.000 m²<br>
        1 m² = 100 dm²<br>
        1 dm² = 100 cm²<br>
        1 cm² = 100 mm²<br><br>
        Đặc biệt: <strong>1 ha = 10.000 m²</strong><br>
        (héc-ta — đơn vị đo đất nông nghiệp)<br>
        3 ha 500 m² = 30.500 m²`,
      svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="34" rx="8" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">1m²=100dm²=10.000cm²=1.000.000mm²</text>
        <rect x="8" y="50" width="284" height="32" rx="8" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="150" y="65" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">1 ha = 10.000 m²   ·   1 km² = 100 ha</text>
        <text x="150" y="78" text-anchor="middle" font-size="10" fill="#008060" font-family="Nunito,sans-serif">Mỗi bậc diện tích: ×100</text>
      </svg>`,
      ketLuan:'Diện tích: ×100 mỗi bậc. 1ha=10.000m². 1km²=100ha=1.000.000m².'
    },
    {
      tieuDe:'⚖️ Khối lượng — đơn vị nâng cao',
      noiDung:`Bảng đơn vị khối lượng từ lớn đến nhỏ:<br>
        <strong>1 tấn = 10 tạ = 100 yến = 1.000 kg</strong><br>
        <strong>1 kg = 1.000 g</strong><br><br>
        Đổi phức hợp:<br>
        2 tấn 3 tạ 5 yến = 2.350 kg<br>
        (2×1000 + 3×100 + 5×10 = 2.350)<br><br>
        Ứng dụng: hàng hóa, xe tải, nông sản`,
      svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="38" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="150" y="26" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">1 tấn → 10 tạ → 100 yến → 1.000 kg → 1.000.000 g</text>
        <text x="150" y="40" text-anchor="middle" font-size="10" fill="#7c4dff" font-family="Nunito,sans-serif">Mỗi bậc: ×10 (trừ kg→g: ×1.000)</text>
        <rect x="8" y="54" width="284" height="28" rx="8" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="72" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">2 tấn 3 tạ 5 yến = 2×1000+3×100+5×10 = 2.350 kg</text>
      </svg>`,
      ketLuan:'Khối lượng: tấn→tạ→yến→kg (×10 mỗi bậc). kg→g: ×1.000.'
    },
    {
      tieuDe:'🕐 Thời gian — đổi đơn vị và tính',
      noiDung:`Bảng thời gian:<br>
        1 phút = 60 giây · 1 giờ = 60 phút = 3.600 giây<br>
        1 ngày = 24 giờ · 1 tuần = 7 ngày<br>
        1 năm = 365 ngày (366 ngày năm nhuận)<br>
        1 thế kỷ = 100 năm<br><br>
        Tính thời gian:<br>
        Bắt đầu 7g30', kết thúc 9g15' → thời gian = <strong>1g45'</strong>`,
      svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="38" rx="10" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/>
        <text x="150" y="24" text-anchor="middle" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">1phút=60giây · 1giờ=60phút · 1ngày=24giờ</text>
        <text x="150" y="40" text-anchor="middle" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif">1tuần=7ngày · 1năm=365ngày · 1thế kỷ=100năm</text>
        <rect x="8" y="54" width="284" height="28" rx="8" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="150" y="72" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="700">7g30' → 9g15': 9g15'−7g30' = 1g45'</text>
      </svg>`,
      ketLuan:'1giờ=60phút=3600giây. Tính thời gian: giờ kết − giờ đầu = thời gian trôi qua.'
    }
  ]
};
const BAI_TAP_L4_DO_LUONG = [
  {id:'l4dl_01',loai:'trac_nghiem',cau:'1 ha = ? m²',dapAn:'10.000 m²',luaChon:['100 m²','1.000 m²','10.000 m²','100.000 m²']},
  {id:'l4dl_02',loai:'trac_nghiem',cau:'1 tạ = ? kg',dapAn:'100 kg',luaChon:['10 kg','100 kg','1.000 kg','10.000 kg']},
  {id:'l4dl_03',loai:'trac_nghiem',cau:'2 giờ 45 phút = ? phút',dapAn:'165 phút',luaChon:['120 phút','145 phút','165 phút','245 phút']},
  {id:'l4dl_04',loai:'trac_nghiem',cau:'3 ha 500 m² = ? m²',dapAn:'30.500 m²',luaChon:['3.500 m²','30.500 m²','35.000 m²','300.500 m²']},
  {id:'l4dl_05',loai:'dien_so',cau:'5 m² = ___ dm²',dapAn:500,goiY:'1m²=100dm², vậy 5m²=500dm²'},
  {id:'l4dl_06',loai:'dien_so',cau:'2 tấn 3 tạ = ___ kg',dapAn:2300,goiY:'2×1000+3×100=2000+300=2300kg'},
  {id:'l4dl_07',loai:'dien_so',cau:'3 giờ 20 phút = ___ phút',dapAn:200,goiY:'3×60+20=180+20=200 phút'},
  {id:'l4dl_08',loai:'dung_sai',cau:'1 km² = 100 ha',dapAn:true,goiY:'1km²=1.000.000m²=100×10.000m²=100ha ✓'},
  {id:'l4dl_09',loai:'dung_sai',cau:'1 thế kỷ = 10 năm',dapAn:false,goiY:'1 thế kỷ = 100 năm (không phải 10)'},
  {id:'l4dl_10',loai:'dung_sai',cau:'Năm 2024 là năm nhuận (366 ngày)',dapAn:true,goiY:'2024 chia hết cho 4 → năm nhuận ✓'},
  {id:'l4dl_11',loai:'chon_nhieu',cau:'Đơn vị nào dùng đo diện tích đất?',dapAn:['m²','ha','km²'],luaChon:['m²','dm','ha','km²','kg']},
  {id:'l4dl_12',loai:'chon_nhieu',cau:'Phép đổi nào đúng?',dapAn:['2 tấn = 2.000 kg','300 cm² = 3 dm²'],luaChon:['2 tấn = 2.000 kg','1 ha = 1.000 m²','300 cm² = 3 dm²','5 tạ = 50 kg']},
  {id:'l4dl_13',loai:'dien_so',cau:'Bắt đầu lúc 8g15\', kết thúc 10g45\'. Thời gian = ___ phút',dapAn:150,goiY:'10g45\'−8g15\'=2g30\'=2×60+30=150 phút'},
  {id:'l4dl_14',loai:'trac_nghiem',cau:'4 yến = ? kg',dapAn:'40 kg',luaChon:['4 kg','40 kg','400 kg','4.000 kg']},
  {id:'l4dl_15',loai:'dung_sai',cau:'500 dm² = 5 m²',dapAn:true,goiY:'1m²=100dm². 500dm²÷100=5m² ✓'},
  {id:'l4dl_16',loai:'dien_so',cau:'7 ha = ___ m²',dapAn:70000,goiY:'7×10.000=70.000m²'},
  {id:'l4dl_17',loai:'dung_sai',cau:'1 giờ 30 phút = 90 phút',dapAn:true,goiY:'60+30=90 phút ✓'},
  {id:'l4dl_18',loai:'chon_nhieu',cau:'Đổi đúng: 1 ngày = ?',dapAn:['24 giờ','1.440 phút','86.400 giây'],luaChon:['24 giờ','1.440 phút','86.400 giây','100 giờ']},
  {id:'l4dl_19',loai:'dien_so',cau:'2 km² = ___ ha',dapAn:200,goiY:'1km²=100ha, vậy 2km²=200ha'},
  {id:'l4dl_20',loai:'dung_sai',cau:'1 tấn 5 tạ = 1.500 kg',dapAn:true,goiY:'1tấn=1000kg, 5tạ=500kg → 1500kg ✓'},
];

// ============================================================
// CHỦ ĐỀ 10: TOÁN CÓ LỜI VĂN LỚP 4
// ============================================================
const BAI_GIANG_L4_LOI_VAN = {
  tieuDe:'Toán Có Lời Văn', icon:'📖', chuDe:'loi_van',
  cacPhan:[
    {
      tieuDe:'📝 Bài toán nhiều bước — cách giải',
      noiDung:`Bài toán lớp 4 thường có <strong>2–3 bước tính</strong>.<br><br>
        <strong>Quy trình 4 bước:</strong><br>
        1️⃣ Đọc kỹ → xác định: Cho gì? Hỏi gì?<br>
        2️⃣ Lập kế hoạch → cần mấy bước?<br>
        3️⃣ Thực hiện → tính từng bước rõ ràng<br>
        4️⃣ Kiểm tra → kết quả có hợp lý không?`,
      svg:`<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="76" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
        <text x="24" y="28" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">Đề: 48 hộp bánh, mỗi hộp 24 cái. Bán 576 cái. Còn?</text>
        <text x="24" y="46" font-size="11" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="700">B1: Tổng = 48×24 = 1.152 cái</text>
        <text x="24" y="62" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">B2: Còn = 1.152 − 576 = 576 cái</text>
        <text x="24" y="78" font-size="10" fill="#6b6b6b" font-family="Nunito,sans-serif">Kiểm tra: 576+576=1.152=48×24 ✓</text>
      </svg>`,
      ketLuan:'Bài nhiều bước: lên kế hoạch trước, làm từng bước, ghi rõ đơn vị, kiểm tra.'
    },
    {
      tieuDe:'📊 Bài toán tìm số trung bình cộng',
      noiDung:`<strong>Trung bình cộng</strong> = tổng các số ÷ số lượng các số<br><br>
        Ví dụ: Điểm 4 bài kiểm tra: 8, 7, 9, 6<br>
        Tổng = 8+7+9+6 = 30<br>
        TB = 30 ÷ 4 = <strong>7,5 điểm</strong><br><br>
        Ứng dụng: điểm trung bình, chiều cao TB, cân nặng TB...`,
      svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="74" rx="14" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="150" y="28" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Điểm: 8, 7, 9, 6</text>
        <text x="150" y="48" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">Tổng = 8+7+9+6 = 30</text>
        <text x="150" y="68" text-anchor="middle" font-size="15" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">TB = 30÷4 = 7,5 điểm</text>
      </svg>`,
      ketLuan:'TB = tổng ÷ số lượng. Dùng để so sánh, đánh giá khi có nhiều giá trị.'
    },
    {
      tieuDe:'🗺️ Bài toán về bản đồ và tỉ lệ',
      noiDung:`<strong>Tỉ lệ bản đồ</strong>: 1cm trên bản đồ tương ứng với khoảng cách thực tế.<br><br>
        Tỉ lệ 1:1.000.000 nghĩa là:<br>
        1cm trên bản đồ = 1.000.000cm = <strong>10km</strong> ngoài thực tế<br><br>
        Ví dụ: Bản đồ tỉ lệ 1:500.000.<br>
        Đoạn đường đo được 3cm trên bản đồ.<br>
        Thực tế = 3 × 500.000cm = 1.500.000cm = <strong>15km</strong>`,
      svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="74" rx="14" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="150" y="28" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">Tỉ lệ 1:500.000</text>
        <text x="150" y="46" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">3cm trên BĐ → thực tế?</text>
        <text x="150" y="66" text-anchor="middle" font-size="14" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">3×500.000cm = 15km</text>
      </svg>`,
      ketLuan:'Khoảng cách thực = khoảng cách BĐ × mẫu số tỉ lệ. Đổi đơn vị ra km!'
    }
  ]
};
const BAI_TAP_L4_LOI_VAN = [
  {id:'l4lv_01',loai:'trac_nghiem',cau:'48 hộp bánh, mỗi hộp 24 cái, bán 576 cái. Còn lại?',dapAn:'576 cái',luaChon:['576 cái','624 cái','528 cái','1.152 cái']},
  {id:'l4lv_02',loai:'trac_nghiem',cau:'Điểm 4 bài: 8,7,9,6. Điểm TB là?',dapAn:'7,5',luaChon:['7','7,5','8','30']},
  {id:'l4lv_03',loai:'trac_nghiem',cau:'BĐ tỉ lệ 1:1.000.000. Đo 4cm = ? km thực tế',dapAn:'40km',luaChon:['4km','40km','400km','4.000km']},
  {id:'l4lv_04',loai:'trac_nghiem',cau:'Mua 35 quyển sách giá 12.000đ/q và 5 bút 8.000đ/c. Tổng tiền?',dapAn:'460.000đ',luaChon:['420.000đ','460.000đ','464.000đ','500.000đ']},
  {id:'l4lv_05',loai:'trac_nghiem',cau:'Xe đi 45km/h trong 4 giờ. Quãng đường là?',dapAn:'180km',luaChon:['49km','180km','120km','200km']},
  {id:'l4lv_06',loai:'dung_sai',cau:'TB cộng 5 số: 4,6,8,2,10 là 6',dapAn:true,goiY:'Tổng=4+6+8+2+10=30. TB=30÷5=6 ✓'},
  {id:'l4lv_07',loai:'dung_sai',cau:'BĐ 1:500.000. Đo 5cm thực tế = 25km',dapAn:true,goiY:'5×500.000cm=2.500.000cm=25km ✓'},
  {id:'l4lv_08',loai:'dien_so',cau:'Điểm 5 bài: 6,7,8,9,5. TB = ___',dapAn:7,goiY:'Tổng=6+7+8+9+5=35. TB=35÷5=7'},
  {id:'l4lv_09',loai:'dien_so',cau:'Vườn HCN dài 45m rộng 28m. S = ___ m²',dapAn:1260,goiY:'S = 45×28 = 1.260m²'},
  {id:'l4lv_10',loai:'dien_so',cau:'Mua 24 kg gạo giá 15.000đ/kg. Tổng tiền = ___ đ',dapAn:360000,goiY:'24×15.000=360.000đ'},
  {id:'l4lv_11',loai:'chon_nhieu',cau:'Cần bước nào để tính TB cộng?',dapAn:['Tính tổng các số','Chia tổng cho số lượng'],luaChon:['Tính tổng các số','Nhân tổng với số lượng','Chia tổng cho số lượng','Cộng thêm 1']},
  {id:'l4lv_12',loai:'chon_nhieu',cau:'Từ khóa nào gợi ý phép nhân?',dapAn:['mỗi ... có','gấp ... lần','tất cả ... nhóm'],luaChon:['mỗi ... có','còn lại','gấp ... lần','tất cả ... nhóm','bớt đi']},
  {id:'l4lv_13',loai:'trac_nghiem',cau:'Trường có 24 lớp, mỗi lớp 35 học sinh. Tổng số HS?',dapAn:'840',luaChon:['59','840','720','860']},
  {id:'l4lv_14',loai:'dien_so',cau:'BĐ 1:200.000. Đo 6cm → thực tế = ___ km',dapAn:12,goiY:'6×200.000cm=1.200.000cm=12km'},
  {id:'l4lv_15',loai:'dung_sai',cau:'TB cộng của 4 số là 15, tổng của chúng là 60',dapAn:true,goiY:'TB=tổng÷4=15 → tổng=15×4=60 ✓'},
  {id:'l4lv_16',loai:'trac_nghiem',cau:'Vải 120m chia đều 8 shop. Mỗi shop được?',dapAn:'15m',luaChon:['12m','15m','128m','112m']},
  {id:'l4lv_17',loai:'dien_so',cau:'3 anh em chia đều 1.254.000đ. Mỗi người được ___ đ',dapAn:418000,goiY:'1.254.000÷3=418.000đ'},
  {id:'l4lv_18',loai:'chon_nhieu',cau:'Bài toán "chia đều" dùng phép tính nào?',dapAn:['Phép chia','Phép nhân để kiểm tra'],luaChon:['Phép cộng','Phép trừ','Phép chia','Phép nhân để kiểm tra']},
  {id:'l4lv_19',loai:'dung_sai',cau:'Bán 3/8 số hàng trong kho 240 cái → bán 90 cái',dapAn:true,goiY:'240×3÷8=720÷8=90 ✓'},
  {id:'l4lv_20',loai:'dien_so',cau:'5 học sinh cao: 132,135,128,140,130cm. Chiều cao TB = ___ cm',dapAn:133,goiY:'Tổng=132+135+128+140+130=665. TB=665÷5=133cm'},
];

// ============================================================
// MAP TRA CỨU LỚP 4
// ============================================================
const DATA_LOP4 = {
  so_trieu:    { baiGiang: BAI_GIANG_L4_SO_TRIEU,    baiTap: BAI_TAP_L4_SO_TRIEU   },
  cong_tru:    { baiGiang: BAI_GIANG_L4_CONG_TRU,    baiTap: BAI_TAP_L4_CONG_TRU   },
  nhan_2chu:   { baiGiang: BAI_GIANG_L4_NHAN_2CHU,   baiTap: BAI_TAP_L4_NHAN_2CHU  },
  chia_2chu:   { baiGiang: BAI_GIANG_L4_CHIA_2CHU,   baiTap: BAI_TAP_L4_CHIA_2CHU  },
  chia_het:    { baiGiang: BAI_GIANG_L4_CHIA_HET,    baiTap: BAI_TAP_L4_CHIA_HET   },
  phan_so:     { baiGiang: BAI_GIANG_L4_PHAN_SO,     baiTap: BAI_TAP_L4_PHAN_SO    },
  cong_tru_ps: { baiGiang: BAI_GIANG_L4_CONG_TRU_PS, baiTap: BAI_TAP_L4_CONG_TRU_PS},
  hinh_hoc:    { baiGiang: BAI_GIANG_L4_HINH_HOC,    baiTap: BAI_TAP_L4_HINH_HOC   },
  do_luong:    { baiGiang: BAI_GIANG_L4_DO_LUONG,    baiTap: BAI_TAP_L4_DO_LUONG   },
  loi_van:     { baiGiang: BAI_GIANG_L4_LOI_VAN,     baiTap: BAI_TAP_L4_LOI_VAN    },
};
✓ (tận cùng 4), 795 ✓ (tận cùng 5)<br><br>
     <strong>Chia hết cho 5</strong>: chữ số tận cùng là <strong>0 hoặc 5</strong><br>
     Ví dụ: 360 ✓, 475 ✓, 123 ✗`,
   svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="8" width="136" height="74" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
     <text x="76" y="28" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">Chia hết cho 2</text>
     <text x="76" y="46" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">Tận cùng: 0,2,4,6,8</text>
     <text x="76" y="64" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif">384✓ 796✓ 123✗</text>
     <rect x="156" y="8" width="136" height="74" rx="12" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/>
     <text x="224" y="28" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">Chia hết cho 5</text>
     <text x="224" y="46" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">Tận cùng: 0 hoặc 5</text>
     <text x="224" y="64" text-anchor="middle" font-size="11" fill="#c9a200" font-family="Nunito,sans-serif">360✓ 475✓ 123✗</text>
   </svg>`,
   ketLuan:'÷2: tận cùng chẵn (0,2,4,6,8). ÷5: tận cùng 0 hoặc 5.'},
  {tieuDe:'✅ Chia hết cho 3 và 9',
   noiDung:`<strong>Chia hết cho 3</strong>: <strong>tổng chữ số</strong> chia hết cho 3<br>
     Ví dụ: 123 → 1+2+3=6, 6÷3=2 ✓<br>
     384 → 3+8+4=15, 15÷3=5 ✓<br><br>
     <strong>Chia hết cho 9</strong>: tổng chữ số chia hết cho 9<br>
     Ví dụ: 729 → 7+2+9=18, 18÷9=2 ✓<br>
     123 → 1+2+3=6, 6÷9 dư 6 ✗`,
   svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="8" width="136" height="74" rx="12" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
     <text x="76" y="28" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Chia hết cho 3</text>
     <text x="76" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">Tổng chữ số ÷ 3 hết</text>
     <text x="76" y="64" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif">123: 1+2+3=6 ÷3=2 ✓</text>
     <rect x="156" y="8" width="136" height="74" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
     <text x="224" y="28" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">Chia hết cho 9</text>
     <text x="224" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">Tổng chữ số ÷ 9 hết</text>
     <text x="224" y="64" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif">729: 7+2+9=18 ÷9=2 ✓</text>
   </svg>`,
   ketLuan:'÷3: tổng chữ số ÷3 hết. ÷9: tổng chữ số ÷9 hết. ÷9 thì cũng ÷3!'},
  {tieuDe:'✅ Chia hết cho 10 và kết hợp',
   noiDung:`<strong>Chia hết cho 10</strong>: tận cùng bằng <strong>0</strong><br>
     Ví dụ: 350 ✓, 1.000 ✓, 275 ✗<br><br>
     <strong>Kết hợp:</strong><br>
     ÷2 và ÷3 → ÷6: vừa chẵn, vừa tổng ÷3<br>
     Ví dụ: 12 (1+2=3, tận cùng 2) ÷6=2 ✓<br><br>
     ÷2 và ÷5 → ÷10: tận cùng bằng 0`,
   svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="8" width="136" height="72" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
     <text x="76" y="28" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">÷ 10</text>
     <text x="76" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">Tận cùng bằng 0</text>
     <text x="76" y="64" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif">350✓ 1000✓ 275✗</text>
     <rect x="156" y="8" width="136" height="72" rx="12" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
     <text x="224" y="28" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">÷ 6 = ÷2 và ÷3</text>
     <text x="224" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">Chẵn + tổng ÷3</text>
     <text x="224" y="64" text-anchor="middle" font-size="11" fill="#c9a200" font-family="Nunito,sans-serif">12✓ 18✓ 24✓</text>
   </svg>`,
   ketLuan:'÷10: tận cùng 0. ÷6: ÷2 VÀ ÷3. ÷9 thì chắc chắn ÷3.'}
]};
const BAI_TAP_L4_DAU_HIEU = [
  {id:'l4dh_01',loai:'trac_nghiem',cau:'Số nào chia hết cho 2?',dapAn:'384',luaChon:['383','384','385','387']},
  {id:'l4dh_02',loai:'trac_nghiem',cau:'Số nào chia hết cho 5?',dapAn:'475',luaChon:['472','473','474','475']},
  {id:'l4dh_03',loai:'trac_nghiem',cau:'123: tổng chữ số là? (kiểm tra ÷3)',dapAn:'6',luaChon:['5','6','7','8']},
  {id:'l4dh_04',loai:'trac_nghiem',cau:'Số nào chia hết cho 9?',dapAn:'729',luaChon:['726','727','728','729']},
  {id:'l4dh_05',loai:'trac_nghiem',cau:'Số nào chia hết cho cả 2 và 5 (tức ÷10)?',dapAn:'350',luaChon:['352','355','358','350']},
  {id:'l4dh_06',loai:'trac_nghiem',cau:'Số 4.536: tổng chữ số là?',dapAn:'18',luaChon:['16','17','18','19']},
  {id:'l4dh_07',loai:'dien_so',cau:'Số có 3 chữ số chia hết cho 9: 1_8 (điền chữ số giữa)',dapAn:8,goiY:'1+?+8=9 hoặc 18. 1+8+8=17→không. 1+8+8=17→thử: 1+0+8=9✓'},
  {id:'l4dh_08',loai:'dien_so',cau:'Có bao nhiêu số từ 1-20 chia hết cho 3?',dapAn:6,goiY:'3,6,9,12,15,18: đếm xem có bao nhiêu số'},
  {id:'l4dh_09',loai:'dien_so',cau:'Số _32 chia hết cho 2 nếu chữ số cuối là ___',dapAn:2,goiY:'Chia hết 2: tận cùng chẵn. Số cuối đã là 2.'},
  {id:'l4dh_10',loai:'dien_so',cau:'Số 54_: điền chữ số để chia hết cho 9. Tổng cần = 9 hoặc 18, 5+4+?=___',dapAn:9,goiY:'5+4=9, thêm 0→tổng 9÷9✓ hoặc thêm 9→tổng 18÷9✓'},
  {id:'l4dh_11',loai:'dung_sai',cau:'Số chẵn luôn chia hết cho 2',dapAn:'Đúng',goiY:'Định nghĩa: số chẵn = số chia hết cho 2 ✓'},
  {id:'l4dh_12',loai:'dung_sai',cau:'729 chia hết cho 9 (7+2+9=18, 18÷9=2)',dapAn:'Đúng',goiY:'✓'},
  {id:'l4dh_13',loai:'dung_sai',cau:'Số chia hết cho 9 thì cũng chia hết cho 3',dapAn:'Đúng',goiY:'9=3×3, nên ÷9 thì tổng ÷9 hết, cũng ÷3 hết ✓'},
  {id:'l4dh_14',loai:'dung_sai',cau:'375 chia hết cho 5',dapAn:'Đúng',goiY:'Tận cùng 5 ✓'},
  {id:'l4dh_15',loai:'dung_sai',cau:'Số chia hết cho 3 thì cũng chia hết cho 9',dapAn:'Sai',goiY:'6 chia hết cho 3 nhưng 6÷9 dư 6, không chia hết'},
  {id:'l4dh_16',loai:'chon_nhieu',cau:'Số nào chia hết cho 3?',dapAn:['123','384','720'],luaChon:['123','124','384','720']},
  {id:'l4dh_17',loai:'chon_nhieu',cau:'Số nào chia hết cho cả 2 và 5?',dapAn:['350','1000','720'],luaChon:['350','355','1000','720']},
  {id:'l4dh_18',loai:'chon_nhieu',cau:'Số nào chia hết cho 9?',dapAn:['81','729','1.008'],luaChon:['81','84','729','1.008']},
  {id:'l4dh_19',loai:'dien_so',cau:'Số từ 100-110 chia hết cho 5 có ___ số',dapAn:3,goiY:'100,105,110: đều tận cùng 0 hoặc 5'},
  {id:'l4dh_20',loai:'dien_so',cau:'Tổng chữ số của 4.536 là ___, vậy 4.536 chia hết cho ___',dapAn:3,goiY:'4+5+3+6=18. 18÷3=6✓, 18÷9=2✓. Vì chia hết cho 9 nên cũng chia hết cho 3.'},
];

// ============================================
// CHỦ ĐỀ 6: PHÂN SỐ — KHÁI NIỆM & RÚT GỌN
// ============================================
const BAI_GIANG_L4_PHAN_SO = {tieuDe:'Phân Số — Khái niệm & Rút gọn',icon:'🍕',chuDe:'phan_so_kb',cacPhan:[
  {tieuDe:'🍕 Phân số — nhắc lại và nâng cao',
   noiDung:`<strong>Phân số a/b</strong>: a phần trong b phần bằng nhau.<br>
     Tử số a (trên), mẫu số b (dưới, b≠0).<br><br>
     <strong>Phân số bằng nhau:</strong><br>
     1/2 = 2/4 = 3/6 = 4/8 (nhân/chia tử và mẫu cùng số)<br><br>
     <strong>Phân số tối giản:</strong> không rút gọn được thêm<br>
     ƯCLN(tử, mẫu) = 1`,
   svg:`<svg viewBox="0 0 300 108" width="285" height="108" xmlns="http://www.w3.org/2000/svg">
     <circle cx="70" cy="58" r="44" fill="#ffd166" stroke="#ff6b35" stroke-width="2.5"/>
     <line x1="70" y1="14" x2="70" y2="102" stroke="#ff6b35" stroke-width="1.5"/>
     <line x1="26" y1="58" x2="114" y2="58" stroke="#ff6b35" stroke-width="1.5"/>
     <line x1="40" y1="27" x2="100" y2="89" stroke="#ff6b35" stroke-width="1.5"/>
     <line x1="100" y1="27" x2="40" y2="89" stroke="#ff6b35" stroke-width="1.5"/>
     <path d="M70,58 L70,14 A44,44 0 0,1 108,36 Z" fill="#ff6b35" opacity="0.85"/>
     <path d="M70,58 L108,36 A44,44 0 0,1 108,80 Z" fill="#ff6b35" opacity="0.85"/>
     <text x="175" y="40" text-anchor="middle" font-size="30" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">2</text>
     <line x1="150" y1="55" x2="200" y2="55" stroke="#2d2d2d" stroke-width="3"/>
     <text x="175" y="80" text-anchor="middle" font-size="30" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">6</text>
     <text x="230" y="40" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">← tử số</text>
     <text x="230" y="75" font-size="11" fill="#666" font-family="Nunito,sans-serif" font-weight="700">← mẫu số</text>
   </svg>`,
   ketLuan:'2/6 = 2 phần trong 6 phần. Rút gọn: 2/6 ÷ 2 = 1/3.'},
  {tieuDe:'🔄 Rút gọn phân số',
   noiDung:`Rút gọn = chia tử và mẫu cho <strong>ƯCLN</strong> của chúng.<br><br>
     Ví dụ: Rút gọn <strong>12/18</strong><br>
     ƯCLN(12, 18) = 6<br>
     12÷6 = 2; 18÷6 = 3<br>
     → 12/18 = <strong>2/3</strong> (tối giản)<br><br>
     Kiểm tra: ƯCLN(2,3)=1 ✓ → đã tối giản`,
   svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="8" width="136" height="74" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
     <text x="76" y="28" text-anchor="middle" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">12/18</text>
     <text x="76" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">ƯCLN(12,18)=6</text>
     <text x="76" y="64" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">12÷6=2, 18÷6=3</text>
     <text x="76" y="78" text-anchor="middle" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">→ 2/3 ✓</text>
     <rect x="156" y="8" width="136" height="74" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
     <text x="224" y="28" text-anchor="middle" font-size="13" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">Kiểm tra</text>
     <text x="224" y="48" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">ƯCLN(2,3)=1</text>
     <text x="224" y="66" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">→ Tối giản ✓</text>
   </svg>`,
   ketLuan:'Rút gọn: chia tử và mẫu cho ƯCLN. Tối giản khi ƯCLN(tử,mẫu)=1.'},
  {tieuDe:'⚖️ Quy đồng mẫu số',
   noiDung:`Quy đồng = đưa về <strong>cùng mẫu số</strong> để so sánh hoặc tính.<br><br>
     Ví dụ: Quy đồng <strong>1/4</strong> và <strong>1/6</strong><br>
     BCNN(4,6) = 12<br>
     1/4 = 3/12 (×3)<br>
     1/6 = 2/12 (×2)<br>
     → So sánh: 3/12 &gt; 2/12 → <strong>1/4 &gt; 1/6</strong>`,
   svg:`<svg viewBox="0 0 300 105" width="285" height="105" xmlns="http://www.w3.org/2000/svg">
     <text x="10" y="18" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">1/4 → ×3 → 3/12</text>
     <rect x="10" y="24" width="200" height="26" rx="6" fill="#f0f0f0"/>
     <rect x="10" y="24" width="150" height="26" rx="6" fill="#7c4dff" opacity="0.75"/>
     <line x1="60" y1="24" x2="60" y2="50" stroke="white" stroke-width="1.5"/>
     <line x1="110" y1="24" x2="110" y2="50" stroke="white" stroke-width="1.5"/>
     <line x1="160" y1="24" x2="160" y2="50" stroke="white" stroke-width="1.5"/>
     <text x="218" y="40" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">= 3/12</text>
     <text x="10" y="70" font-size="12" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="800">1/6 → ×2 → 2/12</text>
     <rect x="10" y="76" width="200" height="26" rx="6" fill="#f0f0f0"/>
     <rect x="10" y="76" width="133" height="26" rx="6" fill="#06d6a0" opacity="0.75"/>
     <line x1="77" y1="76" x2="77" y2="102" stroke="white" stroke-width="1.5"/>
     <line x1="143" y1="76" x2="143" y2="102" stroke="white" stroke-width="1.5"/>
     <text x="218" y="92" font-size="11" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="700">= 2/12</text>
   </svg>`,
   ketLuan:'Quy đồng: tìm BCNN → nhân tử và mẫu tương ứng. BCNN(4,6)=12.'}
]};
const BAI_TAP_L4_PHAN_SO = [
  {id:'l4ps_01',loai:'trac_nghiem',cau:'Rút gọn 12/18 = ?',dapAn:'2/3',luaChon:['4/6','2/3','6/9','1/2']},
  {id:'l4ps_02',loai:'trac_nghiem',cau:'ƯCLN(12,18) = ?',dapAn:'6',luaChon:['3','4','6','9']},
  {id:'l4ps_03',loai:'trac_nghiem',cau:'Quy đồng 1/4 và 1/6: mẫu chung là?',dapAn:'12',luaChon:['6','8','10','12']},
  {id:'l4ps_04',loai:'trac_nghiem',cau:'So sánh 1/4 và 1/6?',dapAn:'1/4 > 1/6',luaChon:['1/4 < 1/6','1/4 = 1/6','1/4 > 1/6','Không so được']},
  {id:'l4ps_05',loai:'trac_nghiem',cau:'Phân số tối giản là phân số có ƯCLN(tử,mẫu) = ?',dapAn:'1',luaChon:['0','1','2','3']},
  {id:'l4ps_06',loai:'trac_nghiem',cau:'Rút gọn 15/25 = ?',dapAn:'3/5',luaChon:['5/8','3/5','6/10','1/2']},
  {id:'l4ps_07',loai:'dien_so',cau:'Rút gọn 8/12: tử số là ___',dapAn:2,goiY:'ƯCLN(8,12)=4. 8÷4=2, 12÷4=3 → 2/3'},
  {id:'l4ps_08',loai:'dien_so',cau:'1/3 = ___/9',dapAn:3,goiY:'×3: 1×3=3, 3×3=9'},
  {id:'l4ps_09',loai:'dien_so',cau:'BCNN(4,6) = ___',dapAn:12,goiY:'B(4)=4,8,12; B(6)=6,12 → BCNN=12'},
  {id:'l4ps_10',loai:'dien_so',cau:'Rút gọn 24/36: mẫu số là ___',dapAn:3,goiY:'ƯCLN(24,36)=12. 24÷12=2, 36÷12=3 → 2/3'},
  {id:'l4ps_11',loai:'dung_sai',cau:'2/4 = 1/2',dapAn:'Đúng',goiY:'÷2: 2÷2=1, 4÷2=2 → 1/2 ✓'},
  {id:'l4ps_12',loai:'dung_sai',cau:'3/7 là phân số tối giản',dapAn:'Đúng',goiY:'ƯCLN(3,7)=1 ✓'},
  {id:'l4ps_13',loai:'dung_sai',cau:'5/6 > 4/6 vì cùng mẫu, tử lớn hơn',dapAn:'Đúng',goiY:'Cùng mẫu → so tử: 5>4 ✓'},
  {id:'l4ps_14',loai:'dung_sai',cau:'Phân số không thể lớn hơn 1',dapAn:'Sai',goiY:'5/3 > 1 (tử > mẫu)'},
  {id:'l4ps_15',loai:'dung_sai',cau:'ƯCLN(8,12)=4',dapAn:'Đúng',goiY:'Ư(8)=1,2,4,8; Ư(12)=1,2,3,4,6,12 → chung lớn nhất=4 ✓'},
  {id:'l4ps_16',loai:'chon_nhieu',cau:'Phân số nào bằng 2/3?',dapAn:['4/6','6/9','8/12'],luaChon:['4/6','6/9','8/12','4/9']},
  {id:'l4ps_17',loai:'chon_nhieu',cau:'Phân số nào là tối giản?',dapAn:['3/7','5/8','2/9'],luaChon:['3/7','4/8','5/8','2/9']},
  {id:'l4ps_18',loai:'chon_nhieu',cau:'Phân số nào lớn hơn 1/2?',dapAn:['3/5','5/8','2/3'],luaChon:['1/3','3/5','5/8','2/3']},
  {id:'l4ps_19',loai:'dien_so',cau:'Rút gọn 30/45: tử số là ___',dapAn:2,goiY:'ƯCLN(30,45)=15. 30÷15=2, 45÷15=3 → 2/3'},
  {id:'l4ps_20',loai:'dien_so',cau:'3/4 = ___/20',dapAn:15,goiY:'×5: 3×5=15, 4×5=20'},
];

// ============================================
// CHỦ ĐỀ 7: CỘNG & TRỪ PHÂN SỐ (LỚP 4)
// ============================================
const BAI_GIANG_L4_CONG_TRU_PS = {tieuDe:'Cộng & Trừ Phân Số',icon:'➗',chuDe:'cong_tru_ps',cacPhan:[
  {tieuDe:'➕ Cộng phân số cùng mẫu',
   noiDung:`Cộng tử, giữ nguyên mẫu:<br>
     <strong>a/m + b/m = (a+b)/m</strong><br><br>
     Ví dụ: <strong>2/7 + 3/7 = 5/7</strong><br><br>
     Lưu ý rút gọn kết quả nếu được:<br>
     3/6 + 1/6 = 4/6 = <strong>2/3</strong>`,
   svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="16" width="200" height="28" rx="6" fill="#f0f0f0"/>
     <rect x="8" y="16" width="57" height="28" rx="6" fill="#7c4dff" opacity="0.8"/>
     <rect x="65" y="16" width="86" height="28" rx="6" fill="#06d6a0" opacity="0.8"/>
     <text x="37" y="34" text-anchor="middle" font-size="11" fill="white" font-family="Nunito,sans-serif" font-weight="800">2/7</text>
     <text x="108" y="34" text-anchor="middle" font-size="11" fill="white" font-family="Nunito,sans-serif" font-weight="800">3/7</text>
     <text x="218" y="34" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">= 5/7</text>
     <text x="150" y="64" text-anchor="middle" font-size="15" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">2/7 + 3/7 = 5/7</text>
     <text x="150" y="82" text-anchor="middle" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">Cộng tử, giữ mẫu</text>
   </svg>`,
   ketLuan:'Cùng mẫu: cộng tử, giữ mẫu. Rút gọn kết quả nếu được.'},
  {tieuDe:'➕ Cộng phân số khác mẫu',
   noiDung:`Bước 1: Quy đồng mẫu (BCNN)<br>
     Bước 2: Cộng tử<br>
     Bước 3: Rút gọn<br><br>
     Ví dụ: <strong>1/4 + 1/6</strong><br>
     BCNN(4,6) = 12<br>
     1/4 = 3/12 · 1/6 = 2/12<br>
     → 3/12 + 2/12 = <strong>5/12</strong>`,
   svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="8" width="284" height="72" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
     <text x="150" y="30" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">1/4 + 1/6 = ?</text>
     <text x="150" y="50" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">BCNN(4,6)=12 → 3/12+2/12</text>
     <text x="150" y="70" text-anchor="middle" font-size="15" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">= 5/12 ✓</text>
   </svg>`,
   ketLuan:'Khác mẫu: quy đồng → cộng tử → rút gọn.'},
  {tieuDe:'➖ Trừ phân số',
   noiDung:`Trừ phân số: giống cộng nhưng dùng phép trừ.<br><br>
     Cùng mẫu: <strong>a/m − b/m = (a−b)/m</strong><br>
     5/8 − 3/8 = 2/8 = <strong>1/4</strong><br><br>
     Khác mẫu: quy đồng trước rồi trừ<br>
     3/4 − 1/6<br>
     BCNN(4,6)=12<br>
     9/12 − 2/12 = <strong>7/12</strong>`,
   svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="8" width="136" height="72" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
     <text x="76" y="28" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">Cùng mẫu</text>
     <text x="76" y="46" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">5/8 − 3/8</text>
     <text x="76" y="66" text-anchor="middle" font-size="14" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">= 2/8 = 1/4</text>
     <rect x="156" y="8" width="136" height="72" rx="12" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/>
     <text x="224" y="28" text-anchor="middle" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">Khác mẫu</text>
     <text x="224" y="46" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">3/4 − 1/6</text>
     <text x="224" y="66" text-anchor="middle" font-size="14" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">=9/12−2/12=7/12</text>
   </svg>`,
   ketLuan:'Trừ PS cùng mẫu: trừ tử. Khác mẫu: quy đồng rồi trừ tử.'}
]};
const BAI_TAP_L4_CONG_TRU_PS = [
  {id:'l4cp_01',loai:'trac_nghiem',cau:'2/7 + 3/7 = ?',dapAn:'5/7',luaChon:['4/7','5/7','5/14','6/7']},
  {id:'l4cp_02',loai:'trac_nghiem',cau:'1/4 + 1/6 = ?',dapAn:'5/12',luaChon:['2/10','5/12','2/12','1/5']},
  {id:'l4cp_03',loai:'trac_nghiem',cau:'5/8 − 3/8 = ?',dapAn:'1/4',luaChon:['2/8','1/4','1/8','3/8']},
  {id:'l4cp_04',loai:'trac_nghiem',cau:'3/4 − 1/6 = ?',dapAn:'7/12',luaChon:['2/12','7/12','5/12','9/12']},
  {id:'l4cp_05',loai:'trac_nghiem',cau:'1/3 + 1/4 = ?',dapAn:'7/12',luaChon:['2/7','7/12','2/12','1/6']},
  {id:'l4cp_06',loai:'trac_nghiem',cau:'3/5 − 1/5 = ?',dapAn:'2/5',luaChon:['2/5','2/10','4/5','1/5']},
  {id:'l4cp_07',loai:'dien_so',cau:'3/8 + 1/8 = ___/8',dapAn:4,goiY:'Cùng mẫu: cộng tử 3+1=4'},
  {id:'l4cp_08',loai:'dien_so',cau:'1/2 + 1/4 = ___/4',dapAn:3,goiY:'1/2=2/4; 2/4+1/4=3/4'},
  {id:'l4cp_09',loai:'dien_so',cau:'5/6 − 1/3 = ___/6',dapAn:3,goiY:'1/3=2/6; 5/6−2/6=3/6=1/2'},
  {id:'l4cp_10',loai:'dien_so',cau:'1/4 + 3/8 = ___/8',dapAn:5,goiY:'1/4=2/8; 2/8+3/8=5/8'},
  {id:'l4cp_11',loai:'dung_sai',cau:'1/4 + 1/4 = 2/8',dapAn:'Sai',goiY:'1/4+1/4=2/4=1/2, không phải 2/8'},
  {id:'l4cp_12',loai:'dung_sai',cau:'3/5 + 2/5 = 1',dapAn:'Đúng',goiY:'(3+2)/5=5/5=1 ✓'},
  {id:'l4cp_13',loai:'dung_sai',cau:'1/2 + 1/3 = 5/6',dapAn:'Đúng',goiY:'3/6+2/6=5/6 ✓'},
  {id:'l4cp_14',loai:'dung_sai',cau:'Cộng PS khác mẫu: cộng tử rồi cộng mẫu',dapAn:'Sai',goiY:'Sai! Phải quy đồng mẫu trước, không cộng mẫu'},
  {id:'l4cp_15',loai:'dung_sai',cau:'7/8 − 3/8 = 4/8 = 1/2',dapAn:'Đúng',goiY:'(7−3)/8=4/8=1/2 ✓'},
  {id:'l4cp_16',loai:'chon_nhieu',cau:'Phép tính nào có kết quả bằng 1?',dapAn:['3/7+4/7','5/8+3/8','2/9+7/9'],luaChon:['3/7+4/7','5/8+3/8','2/9+7/9','3/5+3/5']},
  {id:'l4cp_17',loai:'chon_nhieu',cau:'Phép tính nào cần quy đồng?',dapAn:['1/2+1/3','3/4−1/6','1/4+1/5'],luaChon:['1/2+1/3','3/5+1/5','3/4−1/6','1/4+1/5']},
  {id:'l4cp_18',loai:'chon_nhieu',cau:'Kết quả nào bằng 1/2?',dapAn:['3/4−1/4','1/6+1/3'],luaChon:['3/4−1/4','1/6+1/3','5/8−1/8','2/3−1/6']},
  {id:'l4cp_19',loai:'dien_so',cau:'2/3 + 1/6 = ___/6',dapAn:5,goiY:'2/3=4/6; 4/6+1/6=5/6'},
  {id:'l4cp_20',loai:'dien_so',cau:'3/4 − 1/8 = ___/8',dapAn:5,goiY:'3/4=6/8; 6/8−1/8=5/8'},
];

// ============================================
// CHỦ ĐỀ 8: HÌNH HỌC LỚP 4
// ============================================
const BAI_GIANG_L4_HINH_HOC = {tieuDe:'Hình Học',icon:'📐',chuDe:'hinh_hoc',cacPhan:[
  {tieuDe:'⬟ Hình bình hành',
   noiDung:`<strong>Hình bình hành</strong>: 2 cặp cạnh song song và bằng nhau.<br><br>
     <strong>Diện tích</strong> = đáy × chiều cao<br>
     S = a × h<br><br>
     (Chiều cao vuông góc với đáy)<br><br>
     Ví dụ: Đáy 8cm, cao 5cm<br>
     S = 8 × 5 = <strong>40 cm²</strong>`,
   svg:`<svg viewBox="0 0 300 108" width="285" height="108" xmlns="http://www.w3.org/2000/svg">
     <polygon points="40,90 200,90 250,20 90,20" fill="#fff3eb" stroke="#ff6b35" stroke-width="3"/>
     <line x1="150" y1="20" x2="150" y2="90" stroke="#ff6b35" stroke-width="2" stroke-dasharray="5,4"/>
     <text x="158" y="60" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">h=5</text>
     <rect x="146" y="86" width="8" height="8" fill="none" stroke="#ff6b35" stroke-width="1.5"/>
     <text x="120" y="106" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">a=8cm</text>
     <text x="258" y="55" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">S=a×h</text>
     <text x="258" y="73" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">=8×5</text>
     <text x="258" y="91" font-size="14" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">=40cm²</text>
   </svg>`,
   ketLuan:'S hình bình hành = đáy × chiều cao. Chiều cao ⊥ đáy.'},
  {tieuDe:'🔷 Hình thoi',
   noiDung:`<strong>Hình thoi</strong>: 4 cạnh bằng nhau, 2 đường chéo vuông góc.<br><br>
     <strong>Diện tích</strong> = tích 2 đường chéo ÷ 2<br>
     S = (d₁ × d₂) ÷ 2<br><br>
     Ví dụ: d₁ = 6cm, d₂ = 8cm<br>
     S = (6 × 8) ÷ 2 = 48 ÷ 2 = <strong>24 cm²</strong>`,
   svg:`<svg viewBox="0 0 300 108" width="285" height="108" xmlns="http://www.w3.org/2000/svg">
     <polygon points="150,10 220,58 150,100 80,58" fill="#f3f0ff" stroke="#7c4dff" stroke-width="3"/>
     <line x1="80" y1="58" x2="220" y2="58" stroke="#7c4dff" stroke-width="2" stroke-dasharray="5,4"/>
     <line x1="150" y1="10" x2="150" y2="100" stroke="#7c4dff" stroke-width="2" stroke-dasharray="5,4"/>
     <rect x="146" y="54" width="8" height="8" fill="none" stroke="#7c4dff" stroke-width="1.5"/>
     <text x="150" y="72" text-anchor="middle" font-size="10" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">d₁=8</text>
     <text x="196" y="53" font-size="10" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">d₂=6</text>
     <text x="248" y="48" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">S=d₁×d₂÷2</text>
     <text x="248" y="66" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">=6×8÷2</text>
     <text x="248" y="84" font-size="14" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">=24cm²</text>
   </svg>`,
   ketLuan:'S hình thoi = (d₁ × d₂) ÷ 2. Hai đường chéo vuông góc nhau.'},
  {tieuDe:'📐 Góc nhọn, góc tù, góc bẹt',
   noiDung:`<strong>Góc nhọn</strong>: 0° &lt; góc &lt; 90°<br>
     <strong>Góc vuông</strong>: đúng 90°<br>
     <strong>Góc tù</strong>: 90° &lt; góc &lt; 180°<br>
     <strong>Góc bẹt</strong>: đúng 180° (đường thẳng)<br><br>
     Trong hình bình hành: 2 góc nhọn + 2 góc tù.<br>
     Trong hình thoi: 2 góc nhọn + 2 góc tù.`,
   svg:`<svg viewBox="0 0 300 105" width="285" height="105" xmlns="http://www.w3.org/2000/svg">
     <line x1="20" y1="90" x2="20" y2="30" stroke="#06d6a0" stroke-width="3"/>
     <line x1="20" y1="90" x2="75" y2="72" stroke="#06d6a0" stroke-width="3"/>
     <text x="47" y="105" text-anchor="middle" font-size="10" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="700">Nhọn &lt;90°</text>
     <line x1="110" y1="90" x2="110" y2="20" stroke="#ff6b35" stroke-width="3"/>
     <line x1="110" y1="90" x2="170" y2="90" stroke="#ff6b35" stroke-width="3"/>
     <rect x="110" y="72" width="18" height="18" fill="none" stroke="#ff6b35" stroke-width="2"/>
     <text x="140" y="105" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">Vuông 90°</text>
     <line x1="195" y1="90" x2="195" y2="20" stroke="#7c4dff" stroke-width="3"/>
     <line x1="195" y1="90" x2="260" y2="55" stroke="#7c4dff" stroke-width="3"/>
     <text x="228" y="105" text-anchor="middle" font-size="10" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">Tù &gt;90°</text>
   </svg>`,
   ketLuan:'4 loại góc: nhọn(<90°), vuông(90°), tù(>90°), bẹt(180°).'}
]};
const BAI_TAP_L4_HINH_HOC = [
  {id:'l4hh_01',loai:'trac_nghiem',cau:'HBH đáy 8cm, cao 5cm. Diện tích là?',dapAn:'40cm²',luaChon:['26cm²','32cm²','40cm²','80cm²']},
  {id:'l4hh_02',loai:'trac_nghiem',cau:'Hình thoi d₁=6cm, d₂=8cm. Diện tích là?',dapAn:'24cm²',luaChon:['14cm²','24cm²','28cm²','48cm²']},
  {id:'l4hh_03',loai:'trac_nghiem',cau:'Góc nào lớn hơn 90°?',dapAn:'Góc tù',luaChon:['Góc nhọn','Góc vuông','Góc tù','Góc bẹt chính xác 180°']},
  {id:'l4hh_04',loai:'trac_nghiem',cau:'HBH đáy 12cm, cao 7cm. Diện tích là?',dapAn:'84cm²',luaChon:['38cm²','74cm²','84cm²','94cm²']},
  {id:'l4hh_05',loai:'trac_nghiem',cau:'Hình thoi d₁=10cm, d₂=6cm. Diện tích là?',dapAn:'30cm²',luaChon:'15,30,60,16'.split(',').map(x=>x+'cm²')},
  {id:'l4hh_06',loai:'trac_nghiem',cau:'Hình bình hành có mấy cặp cạnh song song?',dapAn:'2',luaChon:['1','2','3','4']},
  {id:'l4hh_07',loai:'dien_so',cau:'HBH đáy 15cm, cao 6cm. S = ___ cm²',dapAn:90,goiY:'S=15×6=?'},
  {id:'l4hh_08',loai:'dien_so',cau:'Hình thoi d₁=12cm, d₂=9cm. S = ___ cm²',dapAn:54,goiY:'S=(12×9)÷2=?'},
  {id:'l4hh_09',loai:'dien_so',cau:'HBH có S=56cm², đáy=8cm. Cao = ___ cm',dapAn:7,goiY:'Cao=S÷đáy=56÷8=?'},
  {id:'l4hh_10',loai:'dien_so',cau:'Hình thoi S=40cm², d₁=8cm. d₂ = ___ cm',dapAn:10,goiY:'S=d₁×d₂÷2 → d₂=S×2÷d₁=40×2÷8=?'},
  {id:'l4hh_11',loai:'dung_sai',cau:'S hình bình hành = đáy × chiều cao',dapAn:'Đúng',goiY:'✓'},
  {id:'l4hh_12',loai:'dung_sai',cau:'Hình thoi có 4 cạnh bằng nhau',dapAn:'Đúng',goiY:'Đặc điểm hình thoi ✓'},
  {id:'l4hh_13',loai:'dung_sai',cau:'Hình vuông là hình thoi đặc biệt',dapAn:'Đúng',goiY:'HV: 4 cạnh bằng nhau + 4 góc vuông = thoi + chữ nhật ✓'},
  {id:'l4hh_14',loai:'dung_sai',cau:'S hình thoi = d₁ × d₂',dapAn:'Sai',goiY:'S=(d₁×d₂)÷2, phải chia 2'},
  {id:'l4hh_15',loai:'dung_sai',cau:'Góc bẹt = 2 góc vuông ghép lại',dapAn:'Đúng',goiY:'90°×2=180°=góc bẹt ✓'},
  {id:'l4hh_16',loai:'chon_nhieu',cau:'Hình nào có diện tích = đáy × chiều cao?',dapAn:['Hình bình hành','Hình chữ nhật'],luaChon:['Hình bình hành','Hình thoi','Hình chữ nhật','Tam giác']},
  {id:'l4hh_17',loai:'chon_nhieu',cau:'Hình nào có 4 cạnh bằng nhau?',dapAn:['Hình thoi','Hình vuông'],luaChon:['Hình thoi','Hình chữ nhật','Hình vuông','Hình bình hành']},
  {id:'l4hh_18',loai:'chon_nhieu',cau:'Diện tích nào bằng 36cm²?',dapAn:['HBH đáy 9 cao 4','Hình thoi d₁=9 d₂=8'],luaChon:['HBH đáy 9 cao 4','HBH đáy 6 cao 7','Hình thoi d₁=9 d₂=8','Hình thoi d₁=6 d₂=6']},
  {id:'l4hh_19',loai:'dien_so',cau:'HBH đáy 20cm, cao 8cm. S = ___ cm²',dapAn:160,goiY:'S=20×8=?'},
  {id:'l4hh_20',loai:'dien_so',cau:'Hình thoi d₁=14cm, d₂=10cm. S = ___ cm²',dapAn:70,goiY:'S=(14×10)÷2=?'},
];

// ============================================
// CHỦ ĐỀ 9: ĐO LƯỜNG LỚP 4
// ============================================
const BAI_GIANG_L4_DO_LUONG = {tieuDe:'Đo Lường',icon:'📏',chuDe:'do_luong',cacPhan:[
  {tieuDe:'📏 Đơn vị đo diện tích: cm², dm², m²',
   noiDung:`<strong>1 dm² = 100 cm²</strong><br>
     <strong>1 m² = 100 dm² = 10.000 cm²</strong><br>
     <strong>1 km² = 1.000.000 m²</strong><br>
     <strong>1 ha = 10.000 m²</strong><br><br>
     Ví dụ: 3m² 5dm² = 305 dm²<br>
     (3×100 + 5 = 305)`,
   svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="8" width="284" height="30" rx="8" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
     <text x="150" y="28" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">1m²=100dm²=10.000cm²=1.000.000mm²</text>
     <rect x="8" y="46" width="284" height="36" rx="8" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
     <text x="150" y="62" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">1 ha = 10.000 m²  ·  1 km² = 100 ha</text>
     <text x="150" y="78" text-anchor="middle" font-size="10" fill="#008060" font-family="Nunito,sans-serif">Mỗi bậc diện tích: ×100</text>
   </svg>`,
   ketLuan:'Diện tích: mỗi bậc ×100. 1ha=10.000m². 1km²=100ha.'},
  {tieuDe:'⚖️ Đổi đơn vị đo khối lượng',
   noiDung:`<strong>1 tấn = 10 tạ = 100 yến = 1.000 kg</strong><br>
     <strong>1 kg = 1.000 g</strong><br><br>
     Ví dụ đổi phức hợp:<br>
     3 tấn 5 tạ = 35 tạ = 3.500 kg<br>
     2 kg 350 g = 2.350 g<br><br>
     Ứng dụng: cân hàng hóa, tính cước vận chuyển`,
   svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="8" width="284" height="32" rx="8" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
     <text x="150" y="28" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">1 tấn → 10 tạ → 100 yến → 1.000 kg → 1.000.000 g</text>
     <rect x="8" y="48" width="284" height="32" rx="8" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/>
     <text x="150" y="64" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">3 tấn 5 tạ = 35 tạ = 3.500 kg</text>
     <text x="150" y="78" text-anchor="middle" font-size="10" fill="#c9a200" font-family="Nunito,sans-serif">Mỗi bậc: ×10</text>
   </svg>`,
   ketLuan:'1 tấn=10 tạ=1.000 kg. Đổi phức hợp: nhân từng đơn vị rồi cộng.'},
  {tieuDe:'🕐 Đổi đơn vị thời gian nâng cao',
   noiDung:`<strong>1 phút = 60 giây</strong><br>
     <strong>1 giờ = 60 phút = 3.600 giây</strong><br>
     <strong>1 ngày = 24 giờ = 1.440 phút</strong><br>
     <strong>1 tuần = 7 ngày</strong><br>
     <strong>1 năm = 365 ngày (366 năm nhuận)</strong><br><br>
     Ví dụ: 2 giờ 45 phút = 165 phút<br>
     (2×60 + 45 = 120 + 45 = 165)`,
   svg:`<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="8" width="284" height="32" rx="8" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
     <text x="150" y="26" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">1giờ=60phút · 1ngày=24giờ · 1tuần=7ngày</text>
     <text x="150" y="36" text-anchor="middle" font-size="10" fill="#008060" font-family="Nunito,sans-serif">1năm=365ngày (nhuận 366)</text>
     <rect x="8" y="48" width="284" height="34" rx="8" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
     <text x="150" y="64" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">2giờ 45phút = 2×60+45 = 165 phút</text>
     <text x="150" y="78" text-anchor="middle" font-size="10" fill="#c9a200" font-family="Nunito,sans-serif">1giờ=3.600giây · 1ngày=86.400giây</text>
   </svg>`,
   ketLuan:'1giờ=60phút=3.600giây. Đổi: nhân số đơn vị lớn với hệ số rồi cộng phần nhỏ.'}
]};
const BAI_TAP_L4_DO_LUONG = [
  {id:'l4dl_01',loai:'trac_nghiem',cau:'1 m² = ? dm²',dapAn:'100 dm²',luaChon:['10 dm²','100 dm²','1.000 dm²','10.000 dm²']},
  {id:'l4dl_02',loai:'trac_nghiem',cau:'1 tấn = ? kg',dapAn:'1.000 kg',luaChon:['100 kg','500 kg','1.000 kg','10.000 kg']},
  {id:'l4dl_03',loai:'trac_nghiem',cau:'2 giờ 45 phút = ? phút',dapAn:'165 phút',luaChon:['130 phút','145 phút','165 phút','245 phút']},
  {id:'l4dl_04',loai:'trac_nghiem',cau:'1 ha = ? m²',dapAn:'10.000 m²',luaChon:['100 m²','1.000 m²','10.000 m²','100.000 m²']},
  {id:'l4dl_05',loai:'trac_nghiem',cau:'3m² 5dm² = ? dm²',dapAn:'305 dm²',luaChon:['35 dm²','305 dm²','3.500 dm²','350 dm²']},
  {id:'l4dl_06',loai:'trac_nghiem',cau:'1 giờ = ? giây',dapAn:'3.600 giây',luaChon:['600 giây','1.440 giây','3.600 giây','86.400 giây']},
  {id:'l4dl_07',loai:'dien_so',cau:'5m² = ___ cm²',dapAn:50000,goiY:'1m²=10.000cm² → 5m²=?'},
  {id:'l4dl_08',loai:'dien_so',cau:'3 tấn 7 tạ = ___ kg',dapAn:3700,goiY:'3 tấn=3.000kg + 7 tạ=700kg=?'},
  {id:'l4dl_09',loai:'dien_so',cau:'3 giờ 20 phút = ___ phút',dapAn:200,goiY:'3×60+20=180+20=?'},
  {id:'l4dl_10',loai:'dien_so',cau:'5 ha = ___ m²',dapAn:50000,goiY:'1 ha=10.000m² → 5 ha=?'},
  {id:'l4dl_11',loai:'dung_sai',cau:'1m² = 10.000cm²',dapAn:'Đúng',goiY:'1m=100cm → 1m²=100×100=10.000cm² ✓'},
  {id:'l4dl_12',loai:'dung_sai',cau:'2 tấn 5 tạ = 2.500 kg',dapAn:'Đúng',goiY:'2.000+500=2.500kg ✓'},
  {id:'l4dl_13',loai:'dung_sai',cau:'1 ngày = 1.440 phút',dapAn:'Đúng',goiY:'24×60=1.440 phút ✓'},
  {id:'l4dl_14',loai:'dung_sai',cau:'1 km² = 1.000 ha',dapAn:'Sai',goiY:'1km²=100 ha, không phải 1.000'},
  {id:'l4dl_15',loai:'dung_sai',cau:'180 phút = 3 giờ',dapAn:'Đúng',goiY:'180÷60=3 giờ ✓'},
  {id:'l4dl_16',loai:'chon_nhieu',cau:'Đơn vị nào đo diện tích?',dapAn:['cm²','m²','ha'],luaChon:['cm²','m','m²','ha']},
  {id:'l4dl_17',loai:'chon_nhieu',cau:'Số đo nào bằng 1m²?',dapAn:['100dm²','10.000cm²'],luaChon:['10dm²','100dm²','1.000cm²','10.000cm²']},
  {id:'l4dl_18',loai:'chon_nhieu',cau:'Thời gian nào nhiều hơn 3 giờ?',dapAn:['190 phút','3 giờ 30 phút'],luaChon:['170 phút','190 phút','3 giờ 30 phút','160 phút']},
  {id:'l4dl_19',loai:'dien_so',cau:'4m² 75dm² = ___ dm²',dapAn:475,goiY:'4m²=400dm² + 75dm²=?'},
  {id:'l4dl_20',loai:'dien_so',cau:'2 tuần 3 ngày = ___ ngày',dapAn:17,goiY:'2×7+3=14+3=?'},
];

// ============================================
// CHỦ ĐỀ 10: TOÁN CÓ LỜI VĂN LỚP 4
// ============================================
const BAI_GIANG_L4_LOI_VAN = {tieuDe:'Toán Có Lời Văn',icon:'📖',chuDe:'loi_van',cacPhan:[
  {tieuDe:'📝 Bài toán nhiều bước',
   noiDung:`Bài toán nhiều bước: <strong>làm từng bước rõ ràng</strong>.<br><br>
     Ví dụ: Cửa hàng có 1.200 cuốn sách. Buổi sáng bán 1/4, buổi chiều bán 1/3 số còn lại. Hỏi còn bao nhiêu cuốn?<br><br>
     B1: Sáng bán = 1.200 × 1/4 = <strong>300</strong> cuốn<br>
     B2: Còn lại sau sáng = 1.200 − 300 = <strong>900</strong> cuốn<br>
     B3: Chiều bán = 900 × 1/3 = <strong>300</strong> cuốn<br>
     B4: Còn lại = 900 − 300 = <strong>600</strong> cuốn`,
   svg:`<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="8" width="284" height="76" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
     <text x="20" y="28" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">B1: 1.200 × 1/4 = 300 cuốn bán sáng</text>
     <text x="20" y="46" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">B2: 1.200 − 300 = 900 còn lại</text>
     <text x="20" y="62" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">B3: 900 × 1/3 = 300 cuốn bán chiều</text>
     <text x="20" y="78" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">B4: 900 − 300 = 600 cuốn còn lại</text>
   </svg>`,
   ketLuan:'Bài nhiều bước: làm từng bước, dùng kết quả bước trước vào bước sau.'},
  {tieuDe:'🔢 Bài toán về trung bình cộng',
   noiDung:`<strong>Trung bình cộng</strong> = tổng các số ÷ số lượng các số<br><br>
     Ví dụ: Điểm của 4 bài: 8, 7, 9, 6<br>
     Tổng = 8+7+9+6 = 30<br>
     Trung bình = 30 ÷ 4 = <strong>7,5 điểm</strong><br><br>
     Ứng dụng: tính điểm trung bình, tính lượng mưa trung bình...`,
   svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="8" width="284" height="72" rx="14" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
     <text x="150" y="30" text-anchor="middle" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Điểm: 8, 7, 9, 6</text>
     <text x="150" y="50" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">Tổng = 8+7+9+6 = 30</text>
     <text x="150" y="70" text-anchor="middle" font-size="14" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">TB = 30 ÷ 4 = 7,5</text>
   </svg>`,
   ketLuan:'Trung bình cộng = tổng ÷ số lượng. Kết quả có thể là số thập phân.'},
  {tieuDe:'📊 Bài toán tìm số trung bình & ngược',
   noiDung:`Bài ngược: biết trung bình → tìm tổng hoặc một số hạng chưa biết.<br><br>
     Ví dụ: Trung bình 3 số là 15. Hai số đầu là 12 và 18. Số thứ ba là?<br><br>
     Tổng 3 số = 15 × 3 = 45<br>
     Số thứ ba = 45 − 12 − 18 = <strong>15</strong>`,
   svg:`<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
     <rect x="8" y="8" width="284" height="72" rx="14" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/>
     <text x="150" y="28" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">TB 3 số = 15. Hai số: 12 và 18.</text>
     <text x="150" y="46" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">Tổng = 15×3 = 45</text>
     <text x="150" y="66" text-anchor="middle" font-size="14" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="900">Số 3 = 45−12−18 = 15</text>
   </svg>`,
   ketLuan:'Biết TB và số lượng → tổng = TB × số lượng. Rồi trừ các số đã biết.'}
]};
const BAI_TAP_L4_LOI_VAN = [
  {id:'l4lv_01',loai:'trac_nghiem',cau:'Cửa hàng 1.200 sách. Sáng bán 1/4. Sáng bán được?',dapAn:'300 cuốn',luaChon:['200 cuốn','300 cuốn','400 cuốn','600 cuốn']},
  {id:'l4lv_02',loai:'trac_nghiem',cau:'Điểm 4 bài: 8,7,9,6. Trung bình điểm là?',dapAn:'7,5',luaChon:['7','7,5','8','8,5']},
  {id:'l4lv_03',loai:'trac_nghiem',cau:'TB 3 số là 12. Hai số: 10 và 15. Số thứ 3 là?',dapAn:'11',luaChon:['10','11','12','13']},
  {id:'l4lv_04',loai:'trac_nghiem',cau:'Vải 240m, bán 3/8. Bán được bao nhiêu mét?',dapAn:'90m',luaChon:['60m','80m','90m','100m']},
  {id:'l4lv_05',loai:'trac_nghiem',cau:'Kho 720 tấn, xuất 1/4. Còn lại?',dapAn:'540 tấn',luaChon:['180 tấn','360 tấn','540 tấn','600 tấn']},
  {id:'l4lv_06',loai:'trac_nghiem',cau:'Trại 480 con gà và vịt. Gà 3/8 tổng. Có bao nhiêu gà?',dapAn:'180 con',luaChon:['120 con','160 con','180 con','200 con']},
  {id:'l4lv_07',loai:'dien_so',cau:'TB 5 số: 15,18,12,20,10. TB = ___',dapAn:15,goiY:'Tổng=15+18+12+20+10=75. TB=75÷5=?'},
  {id:'l4lv_08',loai:'dien_so',cau:'TB 4 số là 25. Tổng 4 số = ___',dapAn:100,goiY:'Tổng = TB × số lượng = 25×4=?'},
  {id:'l4lv_09',loai:'dien_so',cau:'Có 360 học sinh, 2/3 là nữ. Số HS nữ là ___ em',dapAn:240,goiY:'360×2÷3=?'},
  {id:'l4lv_10',loai:'dien_so',cau:'Kho 1.800kg gạo, xuất 5/9. Còn lại ___ kg',dapAn:800,goiY:'Xuất=1.800×5÷9=1000. Còn=1.800−1.000=?'},
  {id:'l4lv_11',loai:'dung_sai',cau:'Trung bình cộng = tổng ÷ số lượng',dapAn:'Đúng',goiY:'Công thức chuẩn ✓'},
  {id:'l4lv_12',loai:'dung_sai',cau:'TB 3 số là 10 → tổng 3 số là 30',dapAn:'Đúng',goiY:'30÷3=10 ✓'},
  {id:'l4lv_13',loai:'dung_sai',cau:'1/3 của 240 là 80',dapAn:'Đúng',goiY:'240÷3=80 ✓'},
  {id:'l4lv_14',loai:'dung_sai',cau:'Bán 3/4 thì còn lại 1/4',dapAn:'Đúng',goiY:'4/4 − 3/4 = 1/4 ✓'},
  {id:'l4lv_15',loai:'dung_sai',cau:'Điểm 3 bài: 9,7,8 → TB = 8,0',dapAn:'Đúng',goiY:'(9+7+8)÷3=24÷3=8 ✓'},
  {id:'l4lv_16',loai:'chon_nhieu',cau:'Bài toán nào cần tính trung bình cộng?',dapAn:['Điểm 4 bài là 7,8,9,6. TB là?','Lượng mưa 5 ngày là 10,12,8,15,5. TB/ngày?'],luaChon:['Điểm 4 bài là 7,8,9,6. TB là?','Chu vi HCN dài 8 rộng 5','Lượng mưa 5 ngày là 10,12,8,15,5. TB/ngày?','S hình thoi d₁=6 d₂=8']},
  {id:'l4lv_17',loai:'chon_nhieu',cau:'1/4 của số nào bằng 50?',dapAn:['200'],luaChon:['100','150','200','250']},
  {id:'l4lv_18',loai:'chon_nhieu',cau:'Từ khóa nào gợi ý dùng phép chia?',dapAn:['chia đều','mỗi phần được','trung bình'],luaChon:['chia đều','thêm vào','mỗi phần được','trung bình']},
  {id:'l4lv_19',loai:'dien_so',cau:'Điểm 5 bài: 6,7,8,9,10. TB = ___',dapAn:8,goiY:'Tổng=40. TB=40÷5=?'},
  {id:'l4lv_20',loai:'dien_so',cau:'Vườn 560 cây. Hái 3/7 số cây. Còn lại ___ cây',dapAn:320,goiY:'Hái=560×3÷7=240. Còn=560−240=?'},
];

// ============================================
// MAP TRA CỨU LỚP 4
// ============================================
const DATA_LOP4 = {
  so_1tr:      {baiGiang:BAI_GIANG_L4_SO_1TR,    baiTap:BAI_TAP_L4_SO_1TR},
  cong_tru:    {baiGiang:BAI_GIANG_L4_CONG_TRU,  baiTap:BAI_TAP_L4_CONG_TRU},
  nhan_2chu:   {baiGiang:BAI_GIANG_L4_NHAN,       baiTap:BAI_TAP_L4_NHAN},
  chia_2chu:   {baiGiang:BAI_GIANG_L4_CHIA,       baiTap:BAI_TAP_L4_CHIA},
  dau_hieu:    {baiGiang:BAI_GIANG_L4_DAU_HIEU,   baiTap:BAI_TAP_L4_DAU_HIEU},
  phan_so_kb:  {baiGiang:BAI_GIANG_L4_PHAN_SO,    baiTap:BAI_TAP_L4_PHAN_SO},
  cong_tru_ps: {baiGiang:BAI_GIANG_L4_CONG_TRU_PS,baiTap:BAI_TAP_L4_CONG_TRU_PS},
  hinh_hoc:    {baiGiang:BAI_GIANG_L4_HINH_HOC,   baiTap:BAI_TAP_L4_HINH_HOC},
  do_luong:    {baiGiang:BAI_GIANG_L4_DO_LUONG,   baiTap:BAI_TAP_L4_DO_LUONG},
  loi_van:     {baiGiang:BAI_GIANG_L4_LOI_VAN,    baiTap:BAI_TAP_L4_LOI_VAN},
};
