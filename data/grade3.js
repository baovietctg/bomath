// ============================================
// BoMath - Nội dung Lớp 3 (Full chương trình)
// 10 chủ đề × 3 bài giảng + 10 câu hỏi
// Theo chương trình GDPT 2018
// ============================================

const CHU_DE_LOP3 = [
  { id: 'so_10000',     ten: 'Số đến 10.000',         icon: '🔢', mauSac: '#ff6b35' },
  { id: 'phep_cong',    ten: 'Phép Cộng có nhớ',       icon: '➕', mauSac: '#06d6a0' },
  { id: 'phep_tru',     ten: 'Phép Trừ có nhớ',        icon: '➖', mauSac: '#ef476f' },
  { id: 'nhan_chia',    ten: 'Nhân & Chia trong bảng', icon: '✖️', mauSac: '#ffd166' },
  { id: 'nhan_ngoai',   ten: 'Nhân ngoài bảng',        icon: '🔁', mauSac: '#7c4dff' },
  { id: 'chia_du',      ten: 'Phép Chia có dư',        icon: '➗', mauSac: '#118ab2' },
  { id: 'hinh_hoc',     ten: 'Hình Học',               icon: '📐', mauSac: '#ff9f1c' },
  { id: 'do_luong',     ten: 'Đo Lường',               icon: '📏', mauSac: '#06d6a0' },
  { id: 'phan_so',      ten: 'Phân Số đơn giản',       icon: '🍕', mauSac: '#ef476f' },
  { id: 'loi_van',      ten: 'Toán Có Lời Văn',        icon: '📖', mauSac: '#ff6b35' },
];

// ============================================
// CHỦ ĐỀ 1: SỐ ĐẾN 10.000
// ============================================
const BAI_GIANG_L3_SO_10000 = {
  tieuDe: 'Số đến 10.000', icon: '🔢', chuDe: 'so_10000',
  cacPhan: [
    {
      tieuDe: '🏗️ Hàng nghìn, trăm, chục, đơn vị',
      noiDung: `Số đến 10.000 có <strong>4 hàng</strong>:<br>
        🟫 <strong>Hàng nghìn</strong> — chữ số đầu tiên<br>
        🟧 <strong>Hàng trăm</strong> — chữ số thứ hai<br>
        🟨 <strong>Hàng chục</strong> — chữ số thứ ba<br>
        🟩 <strong>Hàng đơn vị</strong> — chữ số cuối<br><br>
        Ví dụ: <strong>4.352</strong> = 4 nghìn + 3 trăm + 5 chục + 2`,
      svg: `<svg viewBox="0 0 300 110" width="290" height="110" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="18" width="62" height="70" rx="10" fill="#f5f0e8" stroke="#8B6914" stroke-width="2.5"/>
        <text x="36" y="52" text-anchor="middle" font-size="26" fill="#8B6914" font-family="Nunito,sans-serif" font-weight="900">4</text>
        <text x="36" y="76" text-anchor="middle" font-size="10" fill="#8B6914" font-family="Nunito,sans-serif" font-weight="700">nghìn</text>
        <rect x="76" y="18" width="62" height="70" rx="10" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/>
        <text x="107" y="52" text-anchor="middle" font-size="26" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">3</text>
        <text x="107" y="76" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">trăm</text>
        <rect x="147" y="18" width="62" height="70" rx="10" fill="#fffbe6" stroke="#ffd166" stroke-width="2.5"/>
        <text x="178" y="52" text-anchor="middle" font-size="26" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="900">5</text>
        <text x="178" y="76" text-anchor="middle" font-size="10" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">chục</text>
        <rect x="218" y="18" width="62" height="70" rx="10" fill="#e8fff7" stroke="#06d6a0" stroke-width="2.5"/>
        <text x="249" y="52" text-anchor="middle" font-size="26" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">2</text>
        <text x="249" y="76" text-anchor="middle" font-size="10" fill="#008060" font-family="Nunito,sans-serif" font-weight="700">đơn vị</text>
        <text x="150" y="12" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">Số 4.352</text>
      </svg>`,
      ketLuan: '4.352 = 4.000 + 300 + 50 + 2. Đọc: "bốn nghìn ba trăm năm mươi hai".'
    },
    {
      tieuDe: '📈 So sánh và sắp xếp số',
      noiDung: `So sánh từ <strong>hàng cao nhất</strong> sang thấp dần.<br><br>
        So sánh <strong>6.427</strong> và <strong>6.389</strong>:<br>
        • Hàng nghìn: 6 = 6 → bằng, so tiếp<br>
        • Hàng trăm: <strong>4 &gt; 3</strong> → kết luận<br>
        → <strong>6.427 &gt; 6.389</strong><br><br>
        Sắp xếp tăng dần: số <em>nhỏ nhất</em> đứng trước.`,
      svg: `<svg viewBox="0 0 300 90" width="290" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="18" width="110" height="52" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/>
        <text x="65" y="50" text-anchor="middle" font-size="22" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">6.427</text>
        <text x="155" y="48" text-anchor="middle" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">&gt;</text>
        <rect x="180" y="18" width="110" height="52" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2.5"/>
        <text x="235" y="50" text-anchor="middle" font-size="22" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">6.389</text>
        <text x="150" y="82" text-anchor="middle" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">hàng trăm: 4 &gt; 3 → 6.427 &gt; 6.389</text>
      </svg>`,
      ketLuan: 'Số có nhiều chữ số hơn thì lớn hơn. Nếu cùng số chữ số, so từ hàng cao nhất.'
    },
    {
      tieuDe: '🔢 Số tròn nghìn và tròn trăm',
      noiDung: `<strong>Số tròn nghìn</strong>: tận cùng bằng 3 số 0.<br>
        1.000 · 2.000 · 3.000 · ... · 10.000<br><br>
        <strong>Số tròn trăm</strong>: tận cùng bằng 2 số 0.<br>
        1.200 · 3.500 · 7.800 · ...<br><br>
        Ứng dụng: làm tròn để tính nhẩm nhanh hơn!<br>
        3.789 ≈ <strong>3.800</strong> (làm tròn đến trăm)`,
      svg: `<svg viewBox="0 0 300 90" width="290" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="280" height="34" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="150" y="32" text-anchor="middle" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Tròn nghìn: 1.000  2.000  3.000  ...  10.000</text>
        <rect x="8" y="52" width="280" height="34" rx="10" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="74" text-anchor="middle" font-size="13" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">Tròn trăm: 1.200  3.500  6.800  7.900 ...</text>
      </svg>`,
      ketLuan: 'Số tròn nghìn kết thúc bằng 000. Số tròn trăm kết thúc bằng 00.'
    }
  ]
};
const BAI_TAP_L3_SO_10000 = [
  { id: 'l3s_01', loai: 'trac_nghiem', cau: 'Số 5.736 có bao nhiêu nghìn?', dapAn: '5', luaChon: ['3','5','7','57'] },
  { id: 'l3s_02', loai: 'trac_nghiem', cau: 'Số nào đọc là "tám nghìn không trăm linh bốn"?', dapAn: '8.004', luaChon: ['8.040','8.004','8.400','804'] },
  { id: 'l3s_03', loai: 'trac_nghiem', cau: '4.000 + 500 + 30 + 7 = ?', dapAn: '4.537', luaChon: ['4.357','4.537','4.573','5.437'] },
  { id: 'l3s_04', loai: 'trac_nghiem', cau: 'Số nào lớn nhất?', dapAn: '9.801', luaChon: ['9.180','9.801','9.810','8.910'] },
  { id: 'l3s_05', loai: 'trac_nghiem', cau: 'Số liền sau của 6.999 là?', dapAn: '7.000', luaChon: ['6.998','7.000','7.001','6.990'] },
  { id: 'l3s_06', loai: 'trac_nghiem', cau: 'Số tròn nghìn nào nằm giữa 4.000 và 6.000?', dapAn: '5.000', luaChon: ['4.500','5.000','5.500','4.999'] },
  { id: 'l3s_07', loai: 'dien_so', cau: '3.000 + 400 + 60 + 8 = ___', dapAn: 3468, goiY: 'Ghép hàng nghìn + trăm + chục + đơn vị!' },
  { id: 'l3s_08', loai: 'dien_so', cau: 'Số 7.253: chữ số hàng trăm là ___', dapAn: 2, goiY: '7-2-5-3: nghìn-trăm-chục-đơn vị' },
  { id: 'l3s_09', loai: 'dien_so', cau: 'Số lớn nhất có 4 chữ số là ___', dapAn: 9999, goiY: 'Bốn chữ số đều là 9!' },
  { id: 'l3s_10', loai: 'dien_so', cau: '8.000 + ___ = 8.600', dapAn: 600, goiY: '8.600 − 8.000 = ?' },

  {id:'l3s_11',loai:'dung_sai',cau:'Số 6.000 có bốn chữ số',dapAn:'Đúng',goiY:'6-0-0-0: bốn chữ số'},
  {id:'l3s_12',loai:'dung_sai',cau:'7.500 > 7.050',dapAn:'Đúng',goiY:'Hàng trăm: 5>0 → 7.500>7.050'},
  {id:'l3s_13',loai:'dung_sai',cau:'Số lớn nhất có 4 chữ số là 9.999',dapAn:'Đúng',goiY:'9.999+1=10.000 đã có 5 chữ số'},
  {id:'l3s_14',loai:'dung_sai',cau:'4.000 + 500 = 4.500',dapAn:'Đúng',goiY:'4000+500=4500 ✓'},
  {id:'l3s_15',loai:'dung_sai',cau:'Số tròn nghìn tận cùng bằng ba số 0',dapAn:'Đúng',goiY:'2000, 5000... đều tận cùng 000'},
  {id:'l3s_16',loai:'chon_nhieu',cau:'Số nào có hàng nghìn là 5?',dapAn:['5.100','5.678','5.003'],luaChon:['5.100','4.500','5.678','5.003']},
  {id:'l3s_17',loai:'chon_nhieu',cau:'Số nào lớn hơn 8.000?',dapAn:['8.001','9.000','8.500'],luaChon:['7.999','8.001','9.000','8.500']},
  {id:'l3s_18',loai:'chon_nhieu',cau:'Số nào là số tròn nghìn?',dapAn:['3.000','7.000','10.000'],luaChon:['3.000','3.500','7.000','10.000']},
  {id:'l3s_19',loai:'dien_so',cau:'5.000 + 600 + 70 + 3 = ___',dapAn:5673,goiY:'Ghép 4 hàng lại'},
  {id:'l3s_20',loai:'dien_so',cau:'9.000 + ___ = 9.450',dapAn:450,goiY:'9.450 − 9.000 = ?'},
];

// ============================================
// CHỦ ĐỀ 2: PHÉP CỘNG CÓ NHỚ
// ============================================
const BAI_GIANG_L3_PHEP_CONG = {
  tieuDe: 'Phép Cộng có nhớ', icon: '➕', chuDe: 'phep_cong',
  cacPhan: [
    {
      tieuDe: '➕ Cộng có nhớ một lần',
      noiDung: `Khi tổng một hàng <strong>≥ 10</strong>, viết chữ số hàng đơn vị, <strong>nhớ 1</strong> sang hàng kế tiếp.<br><br>
        Ví dụ: <strong>2.456 + 1.738</strong><br>
        • Đơn vị: 6+8=14 → viết <strong>4</strong>, nhớ 1<br>
        • Chục: 5+3+1=9 → viết <strong>9</strong><br>
        • Trăm: 4+7=11 → viết <strong>1</strong>, nhớ 1<br>
        • Nghìn: 2+1+1=4 → viết <strong>4</strong><br>
        → Kết quả: <strong>4.194</strong>`,
      svg: `<svg viewBox="0 0 240 120" width="230" height="120" xmlns="http://www.w3.org/2000/svg">
        <text x="50" y="18" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">nhớ 1  nhớ 1</text>
        <text x="205" y="42" text-anchor="end" font-size="24" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">2.456</text>
        <text x="16" y="42" font-size="20" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="900">+</text>
        <text x="205" y="70" text-anchor="end" font-size="24" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">1.738</text>
        <line x1="12" y1="78" x2="215" y2="78" stroke="#2d2d2d" stroke-width="2.5"/>
        <text x="205" y="104" text-anchor="end" font-size="24" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">4.194</text>
      </svg>`,
      ketLuan: 'Cộng thẳng cột từ phải sang trái. Mỗi khi tổng ≥ 10: viết số dư, nhớ 1.'
    },
    {
      tieuDe: '🧮 Tính nhẩm cộng số tròn',
      noiDung: `Với số tròn nghìn / tròn trăm, tính nhẩm rất nhanh:<br><br>
        <strong>3.000 + 4.000 = 7.000</strong> (3+4 nghìn)<br>
        <strong>2.500 + 1.500 = 4.000</strong> (25+15 trăm = 40 trăm)<br><br>
        Mẹo: <strong>tách - cộng - ghép</strong><br>
        4.367 + 2.000 = (4.000+2.000) + 367 = <strong>6.367</strong>`,
      svg: `<svg viewBox="0 0 300 90" width="290" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="136" height="70" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="76" y="36" text-anchor="middle" font-size="14" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">3.000 + 4.000</text>
        <text x="76" y="60" text-anchor="middle" font-size="18" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">= 7.000 ✓</text>
        <rect x="156" y="10" width="136" height="70" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="224" y="36" text-anchor="middle" font-size="14" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">2.500 + 1.500</text>
        <text x="224" y="60" text-anchor="middle" font-size="18" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">= 4.000 ✓</text>
      </svg>`,
      ketLuan: 'Số tròn nghìn cộng nhau: chỉ cộng phần nghìn, giữ nguyên 3 số 0 cuối.'
    },
    {
      tieuDe: '✅ Kiểm tra kết quả phép cộng',
      noiDung: `Sau khi cộng xong, <strong>kiểm tra lại</strong> bằng cách đổi chỗ hai số hạng:<br><br>
        Nếu <strong>A + B = C</strong> thì <strong>B + A = C</strong> (tính giao hoán)<br>
        Và: <strong>C − A = B</strong> hoặc <strong>C − B = A</strong><br><br>
        Ví dụ: 2.456 + 1.738 = 4.194<br>
        Kiểm tra: 4.194 − 1.738 = <strong>2.456</strong> ✓`,
      svg: `<svg viewBox="0 0 300 88" width="290" height="88" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="72" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="32" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">2.456 + 1.738 = 4.194</text>
        <text x="150" y="52" text-anchor="middle" font-size="13" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="700">Kiểm tra: 4.194 − 1.738 = 2.456 ✓</text>
        <text x="150" y="70" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">Hoặc: 1.738 + 2.456 = 4.194 ✓</text>
      </svg>`,
      ketLuan: 'Luôn kiểm tra lại kết quả! Dùng phép trừ hoặc đổi thứ tự cộng.'
    }
  ]
};
const BAI_TAP_L3_PHEP_CONG = [
  { id: 'l3c_01', loai: 'trac_nghiem', cau: '2.456 + 1.738 = ?', dapAn: '4.194', luaChon: ['4.094','4.184','4.194','4.294'] },
  { id: 'l3c_02', loai: 'trac_nghiem', cau: '3.547 + 2.368 = ?', dapAn: '5.915', luaChon: ['5.815','5.905','5.915','6.015'] },
  { id: 'l3c_03', loai: 'trac_nghiem', cau: '4.000 + 3.000 = ?', dapAn: '7.000', luaChon: ['7.000','70.000','700','7.100'] },
  { id: 'l3c_04', loai: 'trac_nghiem', cau: '5.286 + 3.714 = ?', dapAn: '9.000', luaChon: ['8.900','8.990','9.000','9.100'] },
  { id: 'l3c_05', loai: 'trac_nghiem', cau: '1.625 + 4.375 = ?', dapAn: '6.000', luaChon: ['5.900','5.990','6.000','6.100'] },
  { id: 'l3c_06', loai: 'trac_nghiem', cau: '6.473 + 1.259 = ?', dapAn: '7.732', luaChon: ['7.622','7.722','7.732','7.832'] },
  { id: 'l3c_07', loai: 'dien_so', cau: '3.648 + 2.175 = ___', dapAn: 5823, goiY: 'Cộng từng cột phải sang trái, nhớ khi ≥ 10.' },
  { id: 'l3c_08', loai: 'dien_so', cau: '___ + 3.000 = 7.500', dapAn: 4500, goiY: '7.500 − 3.000 = ?' },
  { id: 'l3c_09', loai: 'dien_so', cau: '4.587 + ___ = 5.000', dapAn: 413, goiY: '5.000 − 4.587 = ?' },
  { id: 'l3c_10', loai: 'dien_so', cau: '2.500 + 2.500 = ___', dapAn: 5000, goiY: '2.500 + 2.500 = ? (25+25 trăm)' },

  {id:'l3c_11',loai:'dung_sai',cau:'2.500 + 2.500 = 5.000',dapAn:'Đúng',goiY:'2500+2500=5000 ✓'},
  {id:'l3c_12',loai:'dung_sai',cau:'3.999 + 1 = 4.000',dapAn:'Đúng',goiY:'9+1=10→0 nhớ1; 9+0+1=10... cuối cùng 4000'},
  {id:'l3c_13',loai:'dung_sai',cau:'Kết quả cộng 2 số có 4 chữ số luôn có 4 chữ số',dapAn:'Sai',goiY:'5.000+6.000=11.000 có 5 chữ số'},
  {id:'l3c_14',loai:'dung_sai',cau:'1.234 + 4.321 = 5.555',dapAn:'Đúng',goiY:'4+1=5; 3+2=5; 2+3=5; 1+4=5 → 5.555'},
  {id:'l3c_15',loai:'dung_sai',cau:'Cộng có thể kiểm tra bằng cách trừ',dapAn:'Đúng',goiY:'a+b=c → c−b=a là cách kiểm tra'},
  {id:'l3c_16',loai:'chon_nhieu',cau:'Phép tính nào cho kết quả bằng 5.000?',dapAn:['2.500+2.500','3.000+2.000'],luaChon:['2.500+2.500','3.000+2.000','4.000+2.000','1.000+3.000']},
  {id:'l3c_17',loai:'chon_nhieu',cau:'Số nào cộng với 3.000 ra kết quả lớn hơn 7.000?',dapAn:['4.001','5.000'],luaChon:['3.999','4.000','4.001','5.000']},
  {id:'l3c_18',loai:'chon_nhieu',cau:'Phép cộng nào cần nhớ ở hàng đơn vị?',dapAn:['2.456+1.738','3.547+2.368'],luaChon:['2.456+1.738','3.000+2.000','3.547+2.368','4.100+2.300']},
  {id:'l3c_19',loai:'dien_so',cau:'1.357 + 2.468 = ___',dapAn:3825,goiY:'7+8=15→5 nhớ1; 5+6+1=12→2 nhớ1; 3+4+1=8; 1+2=3'},
  {id:'l3c_20',loai:'dien_so',cau:'___ + 1.111 = 5.555',dapAn:4444,goiY:'5.555 − 1.111 = ?'},
];

// ============================================
// CHỦ ĐỀ 3: PHÉP TRỪ CÓ NHỚ
// ============================================
const BAI_GIANG_L3_PHEP_TRU = {
  tieuDe: 'Phép Trừ có nhớ', icon: '➖', chuDe: 'phep_tru',
  cacPhan: [
    {
      tieuDe: '➖ Trừ có mượn',
      noiDung: `Khi hàng trên <strong>nhỏ hơn</strong> hàng dưới, mượn 1 đơn vị từ hàng kế tiếp.<br><br>
        Ví dụ: <strong>5.312 − 2.567</strong><br>
        • Đơn vị: 2 &lt; 7 → mượn: 12−7=<strong>5</strong><br>
        • Chục: 1−1(mượn)=0 &lt; 6 → mượn: 10−6=<strong>4</strong> (hàng chục: 0→9→10)<br>
        • Trăm: 3−1−5 &lt; 0 → mượn: 13−1−5=<strong>7</strong><br>
        • Nghìn: 5−1−2=<strong>2</strong><br>
        → Kết quả: <strong>2.745</strong>`,
      svg: `<svg viewBox="0 0 240 118" width="230" height="118" xmlns="http://www.w3.org/2000/svg">
        <text x="50" y="16" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">mượn   mượn   mượn</text>
        <text x="205" y="42" text-anchor="end" font-size="24" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">5.312</text>
        <text x="16" y="42" font-size="20" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">−</text>
        <text x="205" y="70" text-anchor="end" font-size="24" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">2.567</text>
        <line x1="12" y1="78" x2="215" y2="78" stroke="#2d2d2d" stroke-width="2.5"/>
        <text x="205" y="104" text-anchor="end" font-size="24" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">2.745</text>
      </svg>`,
      ketLuan: 'Mỗi lần mượn: hàng trên +10, hàng bên trái −1. Trừ từ phải sang trái.'
    },
    {
      tieuDe: '🧮 Trừ số tròn — tính nhẩm',
      noiDung: `Trừ số tròn nghìn/trăm rất nhanh trong đầu:<br><br>
        <strong>7.000 − 3.000 = 4.000</strong><br>
        <strong>8.500 − 2.500 = 6.000</strong><br><br>
        Mẹo <strong>tách số</strong>:<br>
        6.843 − 3.000 = (6.000−3.000) + 843 = <strong>3.843</strong><br>
        6.843 − 800  = 6.043 → thêm: = <strong>6.043</strong>`,
      svg: `<svg viewBox="0 0 300 88" width="290" height="88" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="136" height="68" rx="12" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/>
        <text x="76" y="36" text-anchor="middle" font-size="14" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">7.000 − 3.000</text>
        <text x="76" y="60" text-anchor="middle" font-size="18" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">= 4.000 ✓</text>
        <rect x="156" y="10" width="136" height="68" rx="12" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="224" y="36" text-anchor="middle" font-size="14" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">6.843 − 3.000</text>
        <text x="224" y="60" text-anchor="middle" font-size="18" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">= 3.843 ✓</text>
      </svg>`,
      ketLuan: 'Trừ số tròn: chỉ thay đổi hàng nghìn (hoặc trăm), giữ nguyên các hàng còn lại.'
    },
    {
      tieuDe: '🔗 Quan hệ Cộng − Trừ',
      noiDung: `Nếu <strong>A + B = C</strong> thì:<br>
        • C − A = B<br>
        • C − B = A<br><br>
        Dùng để <strong>tìm số hạng chưa biết</strong>:<br>
        ___ + 2.345 = 6.789<br>
        → ___ = 6.789 − 2.345 = <strong>4.444</strong><br><br>
        Cũng dùng để <strong>kiểm tra</strong> kết quả phép trừ!`,
      svg: `<svg viewBox="0 0 300 88" width="290" height="88" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="72" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">4.444 + 2.345 = 6.789</text>
        <text x="150" y="50" text-anchor="middle" font-size="12" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="700">6.789 − 2.345 = 4.444 ✓</text>
        <text x="150" y="70" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">6.789 − 4.444 = 2.345 ✓</text>
      </svg>`,
      ketLuan: 'Biết tổng và một số hạng → lấy tổng trừ đi số hạng đã biết.'
    }
  ]
};
const BAI_TAP_L3_PHEP_TRU = [
  { id: 'l3t_01', loai: 'trac_nghiem', cau: '5.312 − 2.567 = ?', dapAn: '2.745', luaChon: ['2.645','2.735','2.745','2.845'] },
  { id: 'l3t_02', loai: 'trac_nghiem', cau: '7.000 − 3.456 = ?', dapAn: '3.544', luaChon: ['3.444','3.534','3.544','3.644'] },
  { id: 'l3t_03', loai: 'trac_nghiem', cau: '8.000 − 4.000 = ?', dapAn: '4.000', luaChon: ['3.000','4.000','5.000','40.000'] },
  { id: 'l3t_04', loai: 'trac_nghiem', cau: '9.100 − 3.850 = ?', dapAn: '5.250', luaChon: ['5.150','5.240','5.250','5.350'] },
  { id: 'l3t_05', loai: 'trac_nghiem', cau: '6.302 − 1.748 = ?', dapAn: '4.554', luaChon: ['4.454','4.544','4.554','4.654'] },
  { id: 'l3t_06', loai: 'trac_nghiem', cau: '10.000 − 3.750 = ?', dapAn: '6.250', luaChon: ['6.150','6.250','6.350','7.250'] },
  { id: 'l3t_07', loai: 'dien_so', cau: '8.537 − 4.269 = ___', dapAn: 4268, goiY: 'Trừ từng cột, mượn khi không đủ.' },
  { id: 'l3t_08', loai: 'dien_so', cau: '___ − 2.345 = 4.000', dapAn: 6345, goiY: '4.000 + 2.345 = ?' },
  { id: 'l3t_09', loai: 'dien_so', cau: '7.500 − ___ = 3.500', dapAn: 4000, goiY: '7.500 − 3.500 = ?' },
  { id: 'l3t_10', loai: 'dien_so', cau: '10.000 − 1 = ___', dapAn: 9999, goiY: 'Số liền trước 10.000 là?' },

  {id:'l3t_11',loai:'dung_sai',cau:'5.000 − 1.000 = 4.000',dapAn:'Đúng',goiY:'5−1=4 nghìn ✓'},
  {id:'l3t_12',loai:'dung_sai',cau:'8.000 − 3.500 = 4.500',dapAn:'Đúng',goiY:'8000−3500=4500 ✓'},
  {id:'l3t_13',loai:'dung_sai',cau:'Phép trừ có tính chất giao hoán',dapAn:'Sai',goiY:'a−b ≠ b−a (trừ không đổi chỗ được)'},
  {id:'l3t_14',loai:'dung_sai',cau:'9.999 − 9.000 = 999',dapAn:'Đúng',goiY:'9.999−9.000=999 ✓'},
  {id:'l3t_15',loai:'dung_sai',cau:'Kiểm tra trừ: 4.268+2.175=6.443 → 6.443−2.175=4.268 ✓',dapAn:'Đúng',goiY:'Quan hệ cộng trừ ✓'},
  {id:'l3t_16',loai:'chon_nhieu',cau:'Phép trừ nào cần mượn ở hàng đơn vị?',dapAn:['5.312−2.567','6.302−1.748'],luaChon:['5.312−2.567','6.000−4.000','6.302−1.748','8.500−3.200']},
  {id:'l3t_17',loai:'chon_nhieu',cau:'Kết quả nào bằng 3.000?',dapAn:['7.000−4.000','5.500−2.500'],luaChon:['7.000−4.000','6.000−4.000','5.500−2.500','8.000−6.000']},
  {id:'l3t_18',loai:'chon_nhieu',cau:'Số nào trừ 2.500 ra kết quả lớn hơn 3.000?',dapAn:['5.501','6.000','7.000'],luaChon:['5.499','5.501','6.000','7.000']},
  {id:'l3t_19',loai:'dien_so',cau:'7.654 − 3.287 = ___',dapAn:4367,goiY:'4<7→mượn; 4<8→mượn; 5<2 đã mượn→mượn; tính cẩn thận từng bước'},
  {id:'l3t_20',loai:'dien_so',cau:'9.000 − ___ = 6.543',dapAn:2457,goiY:'9.000 − 6.543 = ?'},
];

// ============================================
// CHỦ ĐỀ 4: NHÂN CHIA TRONG BẢNG (giữ nguyên từ v1, bổ sung bài giảng)
// ============================================
const BAI_GIANG_L3_NHAN_CHIA = {
  tieuDe: 'Nhân & Chia trong Bảng', icon: '✖️', chuDe: 'nhan_chia',
  cacPhan: [
    {
      tieuDe: '✖️ Phép nhân — nhóm bằng nhau',
      noiDung: `Phép nhân là <strong>cộng nhiều lần</strong> cùng một số.<br><br>
        <strong>3 × 4</strong> = 3 nhóm, mỗi nhóm 4 quả táo = 4+4+4 = <strong>12</strong><br><br>
        Tính chất giao hoán: <strong>3 × 4 = 4 × 3 = 12</strong><br>
        → Không cần học hai chiều, chỉ cần nhớ một!`,
      svg: `<svg viewBox="0 0 300 105" width="285" height="105" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="84" height="82" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/>
        <text x="50" y="34" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">Nhóm 1</text>
        <text x="18" y="65" font-size="22">🍎</text><text x="46" y="65" font-size="22">🍎</text>
        <text x="18" y="90" font-size="22">🍎</text><text x="46" y="90" font-size="22">🍎</text>
        <rect x="108" y="12" width="84" height="82" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/>
        <text x="150" y="34" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">Nhóm 2</text>
        <text x="118" y="65" font-size="22">🍎</text><text x="146" y="65" font-size="22">🍎</text>
        <text x="118" y="90" font-size="22">🍎</text><text x="146" y="90" font-size="22">🍎</text>
        <rect x="208" y="12" width="84" height="82" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/>
        <text x="250" y="34" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">Nhóm 3</text>
        <text x="218" y="65" font-size="22">🍎</text><text x="246" y="65" font-size="22">🍎</text>
        <text x="218" y="90" font-size="22">🍎</text><text x="246" y="90" font-size="22">🍎</text>
      </svg>`,
      ketLuan: '3 × 4 = 12. Thứ tự không quan trọng: 3×4 = 4×3. Học một chiều là đủ!'
    },
    {
      tieuDe: '➗ Phép chia — chia đều',
      noiDung: `Phép chia là <strong>chia đều</strong> vào các nhóm bằng nhau.<br><br>
        <strong>20 ÷ 4 = 5</strong> (20 cái chia 4 nhóm, mỗi nhóm 5)<br><br>
        Nhân và chia là <strong>nghịch nhau</strong>:<br>
        4 × 5 = 20 → 20 ÷ 4 = 5 → 20 ÷ 5 = 4<br><br>
        Biết bảng nhân → tra ngay bảng chia!`,
      svg: `<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="72" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="32" text-anchor="middle" font-size="14" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">4 × 5 = 20</text>
        <text x="150" y="52" text-anchor="middle" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">20 ÷ 4 = 5</text>
        <text x="150" y="70" text-anchor="middle" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">20 ÷ 5 = 4</text>
      </svg>`,
      ketLuan: 'Một phép nhân cho ra hai phép chia. Nhớ bảng nhân = biết bảng chia!'
    },
    {
      tieuDe: '📋 Bảng nhân 6, 7, 8, 9',
      noiDung: `<strong>Bảng nhân 6:</strong> 6·1=6 · 6·2=12 · 6·3=18 · 6·4=24 · 6·5=30<br>
        6·6=36 · 6·7=42 · 6·8=48 · 6·9=54 · 6·10=60<br><br>
        <strong>Bảng nhân 7:</strong> 7·7=49 · 7·8=56 · 7·9=63<br>
        <strong>Bảng nhân 8:</strong> 8·8=64 · 8·9=72<br>
        <strong>Bảng nhân 9:</strong> 9·9=81<br><br>
        💡 Mẹo bảng 9: chữ số hàng chục tăng 1, hàng đơn vị giảm 1!`,
      svg: `<svg viewBox="0 0 300 88" width="285" height="88" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="72" rx="12" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="76" y="30" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">Bảng nhân 9</text>
        <text x="76" y="48" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">09 18 27 36 45</text>
        <text x="76" y="65" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">54 63 72 81 90</text>
        <text x="76" y="78" text-anchor="middle" font-size="9" fill="#7c4dff" font-family="Nunito,sans-serif">(chục+1, đơn vị−1)</text>
        <rect x="156" y="8" width="136" height="72" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="224" y="30" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">Tổng chữ số = 9</text>
        <text x="224" y="50" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">9: 0+9=9 ✓</text>
        <text x="224" y="66" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">18: 1+8=9 ✓</text>
        <text x="224" y="80" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">27: 2+7=9 ✓</text>
      </svg>`,
      ketLuan: 'Mẹo nhớ bảng 9: tổng hai chữ số của kết quả luôn bằng 9!'
    }
  ]
};
const BAI_TAP_L3_NHAN_CHIA = [
  { id: 'l3nc_01', loai: 'trac_nghiem', cau: '6 × 7 = ?', dapAn: '42', luaChon: ['36','40','42','48'] },
  { id: 'l3nc_02', loai: 'trac_nghiem', cau: '8 × 9 = ?', dapAn: '72', luaChon: ['63','72','81','64'] },
  { id: 'l3nc_03', loai: 'trac_nghiem', cau: '54 ÷ 6 = ?', dapAn: '9', luaChon: ['7','8','9','10'] },
  { id: 'l3nc_04', loai: 'trac_nghiem', cau: '63 ÷ 7 = ?', dapAn: '9', luaChon: ['7','8','9','10'] },
  { id: 'l3nc_05', loai: 'trac_nghiem', cau: '9 × 9 = ?', dapAn: '81', luaChon: ['72','81','90','99'] },
  { id: 'l3nc_06', loai: 'trac_nghiem', cau: '72 ÷ 8 = ?', dapAn: '9', luaChon: ['7','8','9','10'] },
  { id: 'l3nc_07', loai: 'dien_so', cau: '7 × ___ = 56', dapAn: 8, goiY: 'Bảng 7: 7×8=56' },
  { id: 'l3nc_08', loai: 'dien_so', cau: '6 × ___ = 48', dapAn: 8, goiY: 'Bảng 6: 6×8=48' },
  { id: 'l3nc_09', loai: 'dien_so', cau: '81 ÷ 9 = ___', dapAn: 9, goiY: 'Bảng 9: 9×9=81' },
  { id: 'l3nc_10', loai: 'dien_so', cau: '___ ÷ 7 = 7', dapAn: 49, goiY: '7 × 7 = ?' },

  {id:'l3nc_11',loai:'dung_sai',cau:'7 × 8 = 56',dapAn:'Đúng',goiY:'Bảng 7: 7×8=56 ✓'},
  {id:'l3nc_12',loai:'dung_sai',cau:'6 × 9 = 54',dapAn:'Đúng',goiY:'Bảng 6: 6×9=54 ✓'},
  {id:'l3nc_13',loai:'dung_sai',cau:'48 ÷ 6 = 8',dapAn:'Đúng',goiY:'6×8=48 ✓'},
  {id:'l3nc_14',loai:'dung_sai',cau:'Bảng 9: tổng 2 chữ số của kết quả luôn bằng 9',dapAn:'Đúng',goiY:'18→1+8=9; 27→2+7=9; 36→3+6=9 ✓'},
  {id:'l3nc_15',loai:'dung_sai',cau:'9 × 8 = 72',dapAn:'Đúng',goiY:'Bảng 9: 9×8=72 ✓'},
  {id:'l3nc_16',loai:'chon_nhieu',cau:'Số nào là kết quả của bảng nhân 7?',dapAn:['42','56','63'],luaChon:['42','45','56','63']},
  {id:'l3nc_17',loai:'chon_nhieu',cau:'Số nào chia hết cho 9?',dapAn:['27','54','81'],luaChon:['27','29','54','81']},
  {id:'l3nc_18',loai:'chon_nhieu',cau:'Phép nhân nào bằng 48?',dapAn:['6×8','8×6'],luaChon:['6×8','7×7','8×6','9×5']},
  {id:'l3nc_19',loai:'dien_so',cau:'8 × ___ = 64',dapAn:8,goiY:'Bảng 8: 8×8=64'},
  {id:'l3nc_20',loai:'dien_so',cau:'___ × 9 = 81',dapAn:9,goiY:'Bảng 9: 9×9=81'},
];

// ============================================
// CHỦ ĐỀ 5: NHÂN NGOÀI BẢNG
// ============================================
const BAI_GIANG_L3_NHAN_NGOAI = {
  tieuDe: 'Nhân ngoài bảng', icon: '🔁', chuDe: 'nhan_ngoai',
  cacPhan: [
    {
      tieuDe: '✖️ Nhân số có 2 chữ số với số có 1 chữ số',
      noiDung: `Nhân lần lượt từng hàng, <strong>từ phải sang trái</strong>.<br><br>
        Ví dụ: <strong>34 × 3</strong><br>
        • Đơn vị: 4 × 3 = 12 → viết <strong>2</strong>, nhớ <strong>1</strong><br>
        • Chục: 3 × 3 = 9, cộng nhớ 1 = <strong>10</strong><br>
        → Kết quả: <strong>102</strong>`,
      svg: `<svg viewBox="0 0 200 110" width="190" height="110" xmlns="http://www.w3.org/2000/svg">
        <text x="30" y="18" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">nhớ 1</text>
        <text x="160" y="42" text-anchor="end" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">34</text>
        <text x="16" y="42" font-size="20" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">×</text>
        <text x="160" y="68" text-anchor="end" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">3</text>
        <line x1="10" y1="76" x2="170" y2="76" stroke="#2d2d2d" stroke-width="2.5"/>
        <text x="160" y="102" text-anchor="end" font-size="26" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">102</text>
      </svg>`,
      ketLuan: 'Nhân từng chữ số từ phải sang trái. Kết quả ≥ 10: viết số dư, nhớ 1.'
    },
    {
      tieuDe: '✖️ Nhân số có 3 chữ số với số có 1 chữ số',
      noiDung: `Tương tự nhưng thêm hàng trăm.<br><br>
        Ví dụ: <strong>213 × 4</strong><br>
        • Đơn vị: 3 × 4 = <strong>12</strong> → viết 2, nhớ 1<br>
        • Chục: 1 × 4 = 4 + 1(nhớ) = <strong>5</strong><br>
        • Trăm: 2 × 4 = <strong>8</strong><br>
        → Kết quả: <strong>852</strong>`,
      svg: `<svg viewBox="0 0 220 110" width="210" height="110" xmlns="http://www.w3.org/2000/svg">
        <text x="30" y="18" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">nhớ 1</text>
        <text x="180" y="42" text-anchor="end" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">213</text>
        <text x="16" y="42" font-size="20" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">×</text>
        <text x="180" y="68" text-anchor="end" font-size="26" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">4</text>
        <line x1="10" y1="76" x2="190" y2="76" stroke="#2d2d2d" stroke-width="2.5"/>
        <text x="180" y="102" text-anchor="end" font-size="26" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">852</text>
      </svg>`,
      ketLuan: 'Nhân 3 chữ số × 1 chữ số: làm từng hàng, nhớ khi cần, kết quả có thể 4 chữ số.'
    },
    {
      tieuDe: '💡 Nhân với 10, 100, 1.000',
      noiDung: `Quy tắc đặc biệt — cực kỳ nhanh:<br><br>
        Nhân với <strong>10</strong>: thêm một chữ số 0 vào cuối<br>
        → 25 × 10 = <strong>250</strong><br><br>
        Nhân với <strong>100</strong>: thêm hai chữ số 0<br>
        → 35 × 100 = <strong>3.500</strong><br><br>
        Nhân với <strong>1.000</strong>: thêm ba chữ số 0<br>
        → 7 × 1.000 = <strong>7.000</strong>`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="88" height="74" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="52" y="34" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">× 10</text>
        <text x="52" y="56" text-anchor="middle" font-size="14" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">+0</text>
        <text x="52" y="74" text-anchor="middle" font-size="10" fill="#008060" font-family="Nunito,sans-serif">25→250</text>
        <rect x="106" y="8" width="88" height="74" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="150" y="34" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">× 100</text>
        <text x="150" y="56" text-anchor="middle" font-size="14" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">+00</text>
        <text x="150" y="74" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif">35→3.500</text>
        <rect x="204" y="8" width="88" height="74" rx="12" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="248" y="34" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">× 1.000</text>
        <text x="248" y="56" text-anchor="middle" font-size="14" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">+000</text>
        <text x="248" y="74" text-anchor="middle" font-size="10" fill="#7c4dff" font-family="Nunito,sans-serif">7→7.000</text>
      </svg>`,
      ketLuan: 'Nhân với 10/100/1.000: chỉ cần thêm 1/2/3 số 0 vào cuối số. Siêu nhanh!'
    }
  ]
};
const BAI_TAP_L3_NHAN_NGOAI = [
  { id: 'l3nn_01', loai: 'trac_nghiem', cau: '34 × 3 = ?', dapAn: '102', luaChon: ['92','102','112','122'] },
  { id: 'l3nn_02', loai: 'trac_nghiem', cau: '213 × 4 = ?', dapAn: '852', luaChon: ['842','852','862','952'] },
  { id: 'l3nn_03', loai: 'trac_nghiem', cau: '25 × 10 = ?', dapAn: '250', luaChon: ['25','125','250','2500'] },
  { id: 'l3nn_04', loai: 'trac_nghiem', cau: '47 × 2 = ?', dapAn: '94', luaChon: ['84','92','94','104'] },
  { id: 'l3nn_05', loai: 'trac_nghiem', cau: '35 × 100 = ?', dapAn: '3.500', luaChon: ['350','3.500','35.000','350.000'] },
  { id: 'l3nn_06', loai: 'trac_nghiem', cau: '124 × 3 = ?', dapAn: '372', luaChon: ['352','362','372','382'] },
  { id: 'l3nn_07', loai: 'dien_so', cau: '53 × 4 = ___', dapAn: 212, goiY: 'Đơn vị: 3×4=12, viết 2 nhớ 1. Chục: 5×4=20+1=21.' },
  { id: 'l3nn_08', loai: 'dien_so', cau: '7 × 1.000 = ___', dapAn: 7000, goiY: 'Nhân với 1.000: thêm 3 số 0 vào sau!' },
  { id: 'l3nn_09', loai: 'dien_so', cau: '231 × 3 = ___', dapAn: 693, goiY: 'Nhân từng hàng: 3×3=9, 3×3=9, 2×3=6.' },
  { id: 'l3nn_10', loai: 'dien_so', cau: '___ × 10 = 480', dapAn: 48, goiY: '480 ÷ 10 = ? (bỏ bớt một số 0)' },

  {id:'l3nn_11',loai:'dung_sai',cau:'53 × 4 = 212',dapAn:'Đúng',goiY:'3×4=12→2 nhớ1; 5×4=20+1=21 → 212'},
  {id:'l3nn_12',loai:'dung_sai',cau:'100 × 10 = 1.000',dapAn:'Đúng',goiY:'Thêm 1 số 0: 100→1000 ✓'},
  {id:'l3nn_13',loai:'dung_sai',cau:'23 × 3 = 66',dapAn:'Sai',goiY:'3×3=9; 2×3=6 → 69, không phải 66'},
  {id:'l3nn_14',loai:'dung_sai',cau:'46 × 2 = 92',dapAn:'Đúng',goiY:'6×2=12→2 nhớ1; 4×2=8+1=9 → 92 ✓'},
  {id:'l3nn_15',loai:'dung_sai',cau:'Nhân với 1.000: thêm 4 số 0 vào cuối số',dapAn:'Sai',goiY:'Nhân 1.000 thêm 3 số 0, không phải 4'},
  {id:'l3nn_16',loai:'chon_nhieu',cau:'Phép nhân nào cho kết quả tròn trăm?',dapAn:['25×4','50×2'],luaChon:['25×4','32×3','50×2','41×2']},
  {id:'l3nn_17',loai:'chon_nhieu',cau:'Kết quả nào của phép nhân số có 2 chữ số với 3?',dapAn:['123','213','306'],luaChon:['123','213','306','99']},
  {id:'l3nn_18',loai:'chon_nhieu',cau:'Số nào bằng 350?',dapAn:['35×10','70×5'],luaChon:['35×10','35×100','70×5','35×2']},
  {id:'l3nn_19',loai:'dien_so',cau:'72 × 4 = ___',dapAn:288,goiY:'2×4=8; 7×4=28 → 288'},
  {id:'l3nn_20',loai:'dien_so',cau:'___ × 100 = 4.500',dapAn:45,goiY:'4500÷100=45 (bỏ 2 số 0)'},
];

// ============================================
// CHỦ ĐỀ 6: PHÉP CHIA CÓ DƯ
// ============================================
const BAI_GIANG_L3_CHIA_DU = {
  tieuDe: 'Phép Chia có dư', icon: '➗', chuDe: 'chia_du',
  cacPhan: [
    {
      tieuDe: '➗ Chia có dư là gì?',
      noiDung: `Không phải lúc nào cũng chia hết. Khi không chia hết, ta có <strong>số dư</strong>.<br><br>
        Ví dụ: <strong>17 ÷ 5</strong><br>
        5 × 3 = 15 (gần 17 nhất, không vượt quá)<br>
        → 17 ÷ 5 = <strong>3 dư 2</strong><br><br>
        Kiểm tra: 5 × 3 + 2 = 15 + 2 = <strong>17</strong> ✓`,
      svg: `<svg viewBox="0 0 300 100" width="285" height="100" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="20" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">17 chiếc kẹo ÷ 5 túi</text>
        <rect x="8" y="28" width="48" height="60" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="32" y="68" text-anchor="middle" font-size="20">🍬🍬🍬</text>
        <rect x="64" y="28" width="48" height="60" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="88" y="68" text-anchor="middle" font-size="20">🍬🍬🍬</text>
        <rect x="120" y="28" width="48" height="60" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="144" y="68" text-anchor="middle" font-size="20">🍬🍬🍬</text>
        <rect x="176" y="28" width="48" height="60" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="200" y="68" text-anchor="middle" font-size="20">🍬🍬🍬</text>
        <rect x="232" y="28" width="48" height="60" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="256" y="68" text-anchor="middle" font-size="20">🍬🍬🍬</text>
        <text x="150" y="98" text-anchor="middle" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="700">còn dư 2 cái → 17÷5 = 3 dư 2</text>
      </svg>`,
      ketLuan: '17 ÷ 5 = 3 dư 2. Số dư luôn nhỏ hơn số chia. Kiểm tra: 5×3+2=17.'
    },
    {
      tieuDe: '📏 Quy tắc số dư',
      noiDung: `<strong>Số dư luôn nhỏ hơn số chia!</strong><br><br>
        Nếu số dư ≥ số chia → thương chưa đủ lớn, cần tăng thêm.<br><br>
        Ví dụ: 23 ÷ 4<br>
        4 × 5 = 20 → dư 3 (3 &lt; 4 ✓)<br>
        → <strong>23 ÷ 4 = 5 dư 3</strong><br><br>
        Nếu thử 4 × 4 = 16 → dư 7 (7 &gt; 4 ✗ → sai!)`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="74" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="76" y="30" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">23 ÷ 4 = 5 dư 3</text>
        <text x="76" y="50" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif">Dư 3 &lt; 4 ✓</text>
        <text x="76" y="72" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif">4×5+3 = 23 ✓</text>
        <rect x="156" y="8" width="136" height="74" rx="12" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/>
        <text x="224" y="30" text-anchor="middle" font-size="12" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">23 ÷ 4 = 4 dư 7</text>
        <text x="224" y="50" text-anchor="middle" font-size="12" fill="#ef476f" font-family="Nunito,sans-serif">Dư 7 &gt; 4 ✗</text>
        <text x="224" y="72" text-anchor="middle" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif">→ thương chưa đủ!</text>
      </svg>`,
      ketLuan: 'Quy tắc vàng: Số dư < Số chia. Nếu không, tăng thương lên 1.'
    },
    {
      tieuDe: '🔢 Chia số có 3 chữ số cho số có 1 chữ số',
      noiDung: `Chia từng hàng từ <strong>trái sang phải</strong>.<br><br>
        Ví dụ: <strong>156 ÷ 4</strong><br>
        • 1 ÷ 4 không được → lấy 15 ÷ 4 = 3 dư 3<br>
        • Hạ 6 xuống: 36 ÷ 4 = 9 dư 0<br>
        → <strong>156 ÷ 4 = 39</strong><br><br>
        Kiểm tra: 4 × 39 = 156 ✓`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="20" text-anchor="middle" font-size="14" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">156 ÷ 4 = 39</text>
        <rect x="8" y="30" width="284" height="52" rx="12" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="52" text-anchor="middle" font-size="13" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">15 ÷ 4 = 3 dư 3  →  36 ÷ 4 = 9</text>
        <text x="150" y="72" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">Kiểm tra: 4 × 39 = 156 ✓</text>
      </svg>`,
      ketLuan: 'Chia từ trái sang phải. Hạ từng chữ số xuống. Kiểm tra bằng phép nhân.'
    }
  ]
};
const BAI_TAP_L3_CHIA_DU = [
  { id: 'l3cd_01', loai: 'trac_nghiem', cau: '17 ÷ 5 = ?', dapAn: '3 dư 2', luaChon: ['2 dư 7','3 dư 2','3 dư 3','4 dư 1'] },
  { id: 'l3cd_02', loai: 'trac_nghiem', cau: '23 ÷ 4 = ?', dapAn: '5 dư 3', luaChon: ['4 dư 7','5 dư 2','5 dư 3','6 dư 1'] },
  { id: 'l3cd_03', loai: 'trac_nghiem', cau: '29 ÷ 6 = ?', dapAn: '4 dư 5', luaChon: ['3 dư 5','4 dư 4','4 dư 5','5 dư 1'] },
  { id: 'l3cd_04', loai: 'trac_nghiem', cau: '156 ÷ 4 = ?', dapAn: '39', luaChon: ['37','38','39','40'] },
  { id: 'l3cd_05', loai: 'trac_nghiem', cau: '37 ÷ 8 = ?', dapAn: '4 dư 5', luaChon: ['4 dư 4','4 dư 5','5 dư 2','5 dư 3'] },
  { id: 'l3cd_06', loai: 'trac_nghiem', cau: 'Phép chia 25 ÷ 4, số dư là?', dapAn: '1', luaChon: ['0','1','2','4'] },
  { id: 'l3cd_07', loai: 'dien_so', cau: '19 ÷ 3 = ___ dư 1', dapAn: 6, goiY: '3×6=18, 19−18=1 dư.' },
  { id: 'l3cd_08', loai: 'dien_so', cau: '245 ÷ 5 = ___', dapAn: 49, goiY: 'Chia từng hàng: 24÷5=4 dư 4, hạ 5: 45÷5=9.' },
  { id: 'l3cd_09', loai: 'dien_so', cau: '31 ÷ 7 = ___ dư ___  (nhập thương)', dapAn: 4, goiY: '7×4=28, 31−28=3. Thương là 4.' },
  { id: 'l3cd_10', loai: 'dien_so', cau: '168 ÷ 4 = ___', dapAn: 42, goiY: '16÷4=4, hạ 8: 8÷4=2 → kết quả 42.' },

  {id:'l3cd_11',loai:'dung_sai',cau:'Số dư luôn nhỏ hơn số chia',dapAn:'Đúng',goiY:'Quy tắc vàng: số dư < số chia'},
  {id:'l3cd_12',loai:'dung_sai',cau:'20 ÷ 3 = 6 dư 2',dapAn:'Đúng',goiY:'3×6=18, 20−18=2. Dư 2<3 ✓'},
  {id:'l3cd_13',loai:'dung_sai',cau:'15 ÷ 4 = 4 dư 1',dapAn:'Sai',goiY:'4×3=12, 15−12=3 → 15÷4=3 dư 3'},
  {id:'l3cd_14',loai:'dung_sai',cau:'Kiểm tra chia: thương × số chia + số dư = số bị chia',dapAn:'Đúng',goiY:'Ví dụ: 17÷5=3 dư 2 → 3×5+2=17 ✓'},
  {id:'l3cd_15',loai:'dung_sai',cau:'37 ÷ 9 = 4 dư 1',dapAn:'Đúng',goiY:'9×4=36, 37−36=1. Dư 1<9 ✓'},
  {id:'l3cd_16',loai:'chon_nhieu',cau:'Phép chia nào có số dư bằng 2?',dapAn:['17÷5','20÷3','11÷3'],luaChon:['17÷5','20÷3','11÷3','15÷5']},
  {id:'l3cd_17',loai:'chon_nhieu',cau:'Số nào chia cho 4 không dư?',dapAn:['12','20','36'],luaChon:['12','14','20','36']},
  {id:'l3cd_18',loai:'chon_nhieu',cau:'Phép chia nào cho thương bằng 7?',dapAn:['49÷7','56÷8'],luaChon:['49÷7','56÷8','45÷7','48÷7']},
  {id:'l3cd_19',loai:'dien_so',cau:'27 ÷ 4 = ___ dư 3 (nhập thương)',dapAn:6,goiY:'4×6=24, 27−24=3 dư'},
  {id:'l3cd_20',loai:'dien_so',cau:'___ ÷ 6 = 8 dư 3',dapAn:51,goiY:'6×8+3=48+3=51'},
];

// ============================================
// CHỦ ĐỀ 7: HÌNH HỌC LỚP 3
// ============================================
const BAI_GIANG_L3_HINH_HOC = {
  tieuDe: 'Hình Học', icon: '📐', chuDe: 'hinh_hoc',
  cacPhan: [
    {
      tieuDe: '📐 Góc vuông và góc không vuông',
      noiDung: `<strong>Góc vuông</strong>: góc bằng đúng 90°, như góc của quyển sách.<br>
        Dùng <strong>ê-ke</strong> để kiểm tra góc vuông.<br><br>
        <strong>Góc nhọn</strong>: nhỏ hơn 90° (nhọn hơn góc vuông)<br>
        <strong>Góc tù</strong>: lớn hơn 90° (tù hơn góc vuông)<br><br>
        Hình chữ nhật và hình vuông có <strong>4 góc vuông</strong>.`,
      svg: `<svg viewBox="0 0 300 105" width="285" height="105" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="90" x2="20" y2="20" stroke="#ff6b35" stroke-width="3"/>
        <line x1="20" y1="90" x2="90" y2="90" stroke="#ff6b35" stroke-width="3"/>
        <rect x="20" y="72" width="18" height="18" fill="none" stroke="#ff6b35" stroke-width="2"/>
        <text x="55" y="108" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">Góc vuông 90°</text>
        <line x1="130" y1="90" x2="130" y2="30" stroke="#06d6a0" stroke-width="3"/>
        <line x1="130" y1="90" x2="190" y2="75" stroke="#06d6a0" stroke-width="3"/>
        <text x="160" y="108" text-anchor="middle" font-size="11" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="700">Góc nhọn &lt;90°</text>
        <line x1="220" y1="90" x2="220" y2="30" stroke="#7c4dff" stroke-width="3"/>
        <line x1="220" y1="90" x2="290" y2="60" stroke="#7c4dff" stroke-width="3"/>
        <text x="255" y="108" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">Góc tù &gt;90°</text>
      </svg>`,
      ketLuan: 'Góc vuông = 90°. Nhỏ hơn = góc nhọn. Lớn hơn = góc tù. Dùng ê-ke kiểm tra!'
    },
    {
      tieuDe: '📏 Chu vi hình chữ nhật và hình vuông',
      noiDung: `<strong>Chu vi hình chữ nhật</strong>:<br>
        CV = (chiều dài + chiều rộng) × 2<br><br>
        <strong>Chu vi hình vuông</strong>:<br>
        CV = cạnh × 4<br><br>
        Ví dụ: HCN dài 8cm, rộng 5cm<br>
        CV = (8 + 5) × 2 = 13 × 2 = <strong>26 cm</strong>`,
      svg: `<svg viewBox="0 0 300 105" width="285" height="105" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="15" width="160" height="72" rx="4" fill="#fff3eb" stroke="#ff6b35" stroke-width="3"/>
        <text x="90" y="56" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">HCN: dài 8, rộng 5</text>
        <text x="90" y="72" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif">(8+5)×2 = 26 cm</text>
        <text x="90" y="105" text-anchor="middle" font-size="10" fill="#6b6b6b" font-family="Nunito,sans-serif">chiều dài</text>
        <rect x="200" y="20" width="80" height="80" rx="4" fill="#f3f0ff" stroke="#7c4dff" stroke-width="3"/>
        <text x="240" y="65" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Hình vuông</text>
        <text x="240" y="80" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif">cạnh × 4</text>
      </svg>`,
      ketLuan: 'HCN: CV=(dài+rộng)×2. Hình vuông: CV=cạnh×4. Đơn vị phải ghi rõ!'
    },
    {
      tieuDe: '📐 Diện tích hình chữ nhật',
      noiDung: `<strong>Diện tích</strong> là phần mặt phẳng bên trong hình.<br>
        Đơn vị: cm², m², ...<br><br>
        <strong>Diện tích HCN</strong> = chiều dài × chiều rộng<br>
        <strong>Diện tích hình vuông</strong> = cạnh × cạnh<br><br>
        Ví dụ: HCN dài 6cm, rộng 4cm<br>
        Diện tích = 6 × 4 = <strong>24 cm²</strong>`,
      svg: `<svg viewBox="0 0 300 100" width="285" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="10" width="120" height="80" rx="4" fill="#fffbe6" stroke="#ffd166" stroke-width="2.5"/>
        <text x="90" y="42" text-anchor="middle" font-size="13" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">6 × 4</text>
        <text x="90" y="62" text-anchor="middle" font-size="16" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="900">= 24 cm²</text>
        <text x="90" y="100" text-anchor="middle" font-size="10" fill="#6b6b6b" font-family="Nunito,sans-serif">6 cm</text>
        <text x="18" y="55" text-anchor="middle" font-size="10" fill="#6b6b6b" font-family="Nunito,sans-serif">4cm</text>
        <text x="220" y="55" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">S = dài × rộng</text>
      </svg>`,
      ketLuan: 'Diện tích = dài × rộng. Đơn vị diện tích: cm² (xăng-ti-mét vuông).'
    }
  ]
};
const BAI_TAP_L3_HINH_HOC = [
  { id: 'l3hh_01', loai: 'trac_nghiem', cau: 'HCN dài 12cm, rộng 7cm. Chu vi là?', dapAn: '38cm', luaChon: ['19cm','36cm','38cm','84cm'] },
  { id: 'l3hh_02', loai: 'trac_nghiem', cau: 'Hình vuông cạnh 8cm. Chu vi là?', dapAn: '32cm', luaChon: ['16cm','24cm','32cm','64cm'] },
  { id: 'l3hh_03', loai: 'trac_nghiem', cau: 'HCN dài 9cm, rộng 5cm. Diện tích là?', dapAn: '45cm²', luaChon: ['28cm²','36cm²','45cm²','54cm²'] },
  { id: 'l3hh_04', loai: 'trac_nghiem', cau: 'Góc nào nhỏ hơn 90°?', dapAn: 'Góc nhọn', luaChon: ['Góc vuông','Góc tù','Góc nhọn','Góc phẳng'] },
  { id: 'l3hh_05', loai: 'trac_nghiem', cau: 'Hình vuông cạnh 6cm. Diện tích là?', dapAn: '36cm²', luaChon: ['24cm²','30cm²','36cm²','48cm²'] },
  { id: 'l3hh_06', loai: 'trac_nghiem', cau: 'HCN có chu vi 28cm, chiều dài 9cm. Chiều rộng là?', dapAn: '5cm', luaChon: ['4cm','5cm','6cm','7cm'] },
  { id: 'l3hh_07', loai: 'dien_so', cau: 'HCN dài 10cm, rộng 6cm. Diện tích = ___ cm²', dapAn: 60, goiY: 'S = 10 × 6 = ?' },
  { id: 'l3hh_08', loai: 'dien_so', cau: 'Hình vuông cạnh 7cm. Chu vi = ___ cm', dapAn: 28, goiY: 'CV = 7 × 4 = ?' },
  { id: 'l3hh_09', loai: 'dien_so', cau: 'HCN dài 15cm, rộng 4cm. Chu vi = ___ cm', dapAn: 38, goiY: 'CV = (15+4) × 2 = ?' },
  { id: 'l3hh_10', loai: 'dien_so', cau: 'Hình vuông cạnh 9cm. Diện tích = ___ cm²', dapAn: 81, goiY: 'S = 9 × 9 = ?' },

  {id:'l3hh_11',loai:'dung_sai',cau:'Diện tích HCN = dài × rộng',dapAn:'Đúng',goiY:'Công thức S=a×b ✓'},
  {id:'l3hh_12',loai:'dung_sai',cau:'Hình vuông cạnh 5cm có diện tích 25cm²',dapAn:'Đúng',goiY:'5×5=25cm² ✓'},
  {id:'l3hh_13',loai:'dung_sai',cau:'Góc tù lớn hơn 90°',dapAn:'Đúng',goiY:'Góc tù: 90°<góc<180°'},
  {id:'l3hh_14',loai:'dung_sai',cau:'HCN dài 8cm rộng 3cm có diện tích 11cm²',dapAn:'Sai',goiY:'S=8×3=24cm², không phải 11'},
  {id:'l3hh_15',loai:'dung_sai',cau:'Hình vuông cũng là hình chữ nhật',dapAn:'Đúng',goiY:'HV là HCN đặc biệt có 4 cạnh bằng nhau'},
  {id:'l3hh_16',loai:'chon_nhieu',cau:'Hình nào có góc vuông?',dapAn:['Hình vuông','Hình chữ nhật'],luaChon:['Hình vuông','Tam giác đều','Hình chữ nhật','Hình tròn']},
  {id:'l3hh_17',loai:'chon_nhieu',cau:'Diện tích nào bằng 36cm²?',dapAn:['HCN 9×4','HV cạnh 6cm'],luaChon:['HCN 9×4','HCN 7×5','HV cạnh 6cm','HCN 6×5']},
  {id:'l3hh_18',loai:'chon_nhieu',cau:'Góc nào nhỏ hơn 90°?',dapAn:['Góc nhọn'],luaChon:['Góc nhọn','Góc vuông','Góc tù','Góc bẹt']},
  {id:'l3hh_19',loai:'dien_so',cau:'HCN dài 11cm rộng 7cm. Diện tích = ___ cm²',dapAn:77,goiY:'S=11×7=?'},
  {id:'l3hh_20',loai:'dien_so',cau:'HCN có diện tích 48cm², rộng 6cm. Dài = ___ cm',dapAn:8,goiY:'Dài = 48÷6 = ?'},
];

// ============================================
// CHỦ ĐỀ 8: ĐO LƯỜNG LỚP 3
// ============================================
const BAI_GIANG_L3_DO_LUONG = {
  tieuDe: 'Đo Lường', icon: '📏', chuDe: 'do_luong',
  cacPhan: [
    {
      tieuDe: '📏 Đơn vị đo độ dài: km, m, dm, cm, mm',
      noiDung: `Bảng đơn vị đo độ dài (từ lớn đến nhỏ):<br>
        <strong>1 km = 1.000 m</strong><br>
        <strong>1 m = 10 dm = 100 cm = 1.000 mm</strong><br>
        <strong>1 dm = 10 cm</strong><br>
        <strong>1 cm = 10 mm</strong><br><br>
        Ví dụ: 3 km 500 m = 3.500 m<br>
        Quãng đường từ nhà đến trường: khoảng <strong>2 km</strong>`,
      svg: `<svg viewBox="0 0 300 95" width="285" height="95" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="30" rx="8" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="150" y="28" text-anchor="middle" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">1 km = 1.000 m = 10.000 dm = 100.000 cm</text>
        <rect x="8" y="46" width="284" height="28" rx="8" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="150" y="65" text-anchor="middle" font-size="13" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">1 m = 10 dm = 100 cm = 1.000 mm</text>
        <text x="150" y="90" text-anchor="middle" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">Mỗi bậc: ×10 khi đi xuống, ÷10 khi đi lên</text>
      </svg>`,
      ketLuan: '1km=1.000m. 1m=100cm. Đổi xuống: ×10. Đổi lên: ÷10.'
    },
    {
      tieuDe: '⚖️ Đo khối lượng: tấn, tạ, yến, kg, g',
      noiDung: `<strong>1 tấn = 10 tạ = 100 yến = 1.000 kg</strong><br>
        <strong>1 tạ = 10 yến = 100 kg</strong><br>
        <strong>1 yến = 10 kg</strong><br>
        <strong>1 kg = 1.000 g</strong><br><br>
        Ví dụ thực tế:<br>
        🐘 Voi: khoảng 5 <strong>tấn</strong><br>
        🐄 Bò: khoảng 3 <strong>tạ</strong> (300 kg)<br>
        🍎 1 quả táo: khoảng 200 <strong>g</strong>`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="32" rx="8" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="150" y="28" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">1 tấn → 10 tạ → 100 yến → 1.000 kg → 1.000.000 g</text>
        <rect x="8" y="48" width="284" height="34" rx="8" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="62" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">🐘 5 tấn  🐄 3 tạ  🧑 25 kg  🍎 200g</text>
        <text x="150" y="78" text-anchor="middle" font-size="11" fill="#c9a200" font-family="Nunito,sans-serif">Mỗi bậc: ×10 khi đi xuống</text>
      </svg>`,
      ketLuan: '1 tấn=10 tạ=100 yến=1.000 kg=1.000.000 g. Mỗi bậc nhân 10.'
    },
    {
      tieuDe: '🕐 Đo thời gian: giờ, phút, giây, ngày, tháng, năm',
      noiDung: `<strong>1 phút = 60 giây</strong><br>
        <strong>1 giờ = 60 phút</strong><br>
        <strong>1 ngày = 24 giờ</strong><br>
        <strong>1 tuần = 7 ngày</strong><br>
        <strong>1 năm = 12 tháng = 365 ngày</strong><br><br>
        Ví dụ: 2 giờ 30 phút = 2 × 60 + 30 = <strong>150 phút</strong>`,
      svg: `<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="50" r="36" fill="white" stroke="#2d2d2d" stroke-width="3"/>
        <text x="60" y="16" text-anchor="middle" font-size="10" fill="#888" font-family="Nunito,sans-serif">12</text>
        <text x="94" y="54" text-anchor="middle" font-size="10" fill="#888" font-family="Nunito,sans-serif">3</text>
        <text x="60" y="90" text-anchor="middle" font-size="10" fill="#888" font-family="Nunito,sans-serif">6</text>
        <text x="26" y="54" text-anchor="middle" font-size="10" fill="#888" font-family="Nunito,sans-serif">9</text>
        <line x1="60" y1="50" x2="60" y2="22" stroke="#2d2d2d" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="60" y1="50" x2="85" y2="50" stroke="#ff6b35" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="60" cy="50" r="3.5" fill="#2d2d2d"/>
        <text x="60" y="92" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">3 giờ đúng</text>
        <text x="200" y="28" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">1 phút = 60 giây</text>
        <text x="200" y="46" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">1 giờ = 60 phút</text>
        <text x="200" y="64" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">1 ngày = 24 giờ</text>
        <text x="200" y="82" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">1 năm = 365 ngày</text>
      </svg>`,
      ketLuan: '1 giờ=60 phút. 1 ngày=24 giờ. 1 năm=12 tháng=365 ngày.'
    }
  ]
};
const BAI_TAP_L3_DO_LUONG = [
  { id: 'l3dl_01', loai: 'trac_nghiem', cau: '1 km = ? m', dapAn: '1.000m', luaChon: ['100m','1.000m','10.000m','500m'] },
  { id: 'l3dl_02', loai: 'trac_nghiem', cau: '1 tạ = ? kg', dapAn: '100kg', luaChon: ['10kg','100kg','1.000kg','50kg'] },
  { id: 'l3dl_03', loai: 'trac_nghiem', cau: '1 giờ = ? phút', dapAn: '60 phút', luaChon: ['24 phút','30 phút','60 phút','100 phút'] },
  { id: 'l3dl_04', loai: 'trac_nghiem', cau: '3 km = ? m', dapAn: '3.000m', luaChon: ['300m','3.000m','30.000m','30m'] },
  { id: 'l3dl_05', loai: 'trac_nghiem', cau: '2 giờ 30 phút = ? phút', dapAn: '150 phút', luaChon: ['120 phút','130 phút','150 phút','230 phút'] },
  { id: 'l3dl_06', loai: 'trac_nghiem', cau: '1 năm có bao nhiêu tháng?', dapAn: '12 tháng', luaChon: ['10 tháng','11 tháng','12 tháng','365 tháng'] },
  { id: 'l3dl_07', loai: 'dien_so', cau: '5 km = ___ m', dapAn: 5000, goiY: '1 km = 1.000 m, vậy 5 km = ?' },
  { id: 'l3dl_08', loai: 'dien_so', cau: '3 tấn = ___ kg', dapAn: 3000, goiY: '1 tấn = 1.000 kg, vậy 3 tấn = ?' },
  { id: 'l3dl_09', loai: 'dien_so', cau: '1 giờ 45 phút = ___ phút', dapAn: 105, goiY: '60 phút + 45 phút = ?' },
  { id: 'l3dl_10', loai: 'dien_so', cau: '2 tuần = ___ ngày', dapAn: 14, goiY: '1 tuần = 7 ngày, vậy 2 tuần = ?' },

  {id:'l3dl_11',loai:'dung_sai',cau:'1 tấn = 10 tạ',dapAn:'Đúng',goiY:'1 tấn = 10 tạ = 100 yến = 1000 kg ✓'},
  {id:'l3dl_12',loai:'dung_sai',cau:'2km 500m = 2.500m',dapAn:'Đúng',goiY:'2km=2000m + 500m=2500m ✓'},
  {id:'l3dl_13',loai:'dung_sai',cau:'1 phút = 100 giây',dapAn:'Sai',goiY:'1 phút = 60 giây, không phải 100'},
  {id:'l3dl_14',loai:'dung_sai',cau:'3 giờ 30 phút = 210 phút',dapAn:'Đúng',goiY:'3×60+30=180+30=210 phút ✓'},
  {id:'l3dl_15',loai:'dung_sai',cau:'1 yến = 10 kg',dapAn:'Đúng',goiY:'Bảng đơn vị: 1 yến = 10 kg ✓'},
  {id:'l3dl_16',loai:'chon_nhieu',cau:'Đơn vị nào đo khối lượng?',dapAn:['kg','tấn','tạ'],luaChon:['kg','km','tấn','tạ']},
  {id:'l3dl_17',loai:'chon_nhieu',cau:'Số đo nào bằng 1km?',dapAn:['1.000m','100.000cm'],luaChon:['100m','1.000m','100.000cm','10dm']},
  {id:'l3dl_18',loai:'chon_nhieu',cau:'Thời gian nào nhiều hơn 2 giờ?',dapAn:['130 phút','2 giờ 15 phút'],luaChon:['100 phút','130 phút','2 giờ 15 phút','115 phút']},
  {id:'l3dl_19',loai:'dien_so',cau:'4km 200m = ___ m',dapAn:4200,goiY:'4km=4000m + 200m=?'},
  {id:'l3dl_20',loai:'dien_so',cau:'2 tấn 5 tạ = ___ kg',dapAn:2500,goiY:'2 tấn=2000kg + 5 tạ=500kg = ?'},
];

// ============================================
// CHỦ ĐỀ 9: PHÂN SỐ ĐƠN GIẢN
// ============================================
const BAI_GIANG_L3_PHAN_SO = {
  tieuDe: 'Phân Số đơn giản', icon: '🍕', chuDe: 'phan_so',
  cacPhan: [
    {
      tieuDe: '🍕 Phân số là gì?',
      noiDung: `Phân số <strong>a/b</strong> biểu diễn <em>a phần</em> trong <em>b phần bằng nhau</em>.<br><br>
        <strong>Tử số</strong> (trên gạch): số phần lấy<br>
        <strong>Mẫu số</strong> (dưới gạch): tổng số phần bằng nhau<br><br>
        Ví dụ: Chia bánh thành 6 phần bằng nhau, lấy 2 phần<br>
        → Ta được <strong>2/6</strong> (hai phần sáu) của chiếc bánh`,
      svg: `<svg viewBox="0 0 300 108" width="285" height="108" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="58" r="44" fill="#ffd166" stroke="#ff6b35" stroke-width="2.5"/>
        <line x1="70" y1="14" x2="70" y2="102" stroke="#ff6b35" stroke-width="1.5"/>
        <line x1="26" y1="58" x2="114" y2="58" stroke="#ff6b35" stroke-width="1.5"/>
        <line x1="40" y1="27" x2="100" y2="89" stroke="#ff6b35" stroke-width="1.5"/>
        <line x1="100" y1="27" x2="40" y2="89" stroke="#ff6b35" stroke-width="1.5"/>
        <path d="M70,58 L70,14 A44,44 0 0,1 108,36 Z" fill="#ff6b35" opacity="0.85"/>
        <path d="M70,58 L108,36 A44,44 0 0,1 108,80 Z" fill="#ff6b35" opacity="0.85"/>
        <text x="175" y="40" text-anchor="middle" font-size="32" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">2</text>
        <line x1="148" y1="55" x2="202" y2="55" stroke="#2d2d2d" stroke-width="3"/>
        <text x="175" y="82" text-anchor="middle" font-size="32" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">6</text>
        <text x="230" y="40" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">← tử số</text>
        <text x="230" y="76" font-size="11" fill="#666" font-family="Nunito,sans-serif" font-weight="700">← mẫu số</text>
      </svg>`,
      ketLuan: '2/6 = 2 phần trong 6 phần bằng nhau. Mẫu số ≠ 0.'
    },
    {
      tieuDe: '⚖️ So sánh phân số cùng mẫu',
      noiDung: `Khi <strong>cùng mẫu số</strong>, so sánh tử số:<br>
        Tử số lớn hơn → phân số lớn hơn.<br><br>
        Ví dụ: So sánh <strong>3/7</strong> và <strong>5/7</strong><br>
        Mẫu: 7 = 7 (cùng mẫu)<br>
        Tử: 3 &lt; 5<br>
        → <strong>3/7 &lt; 5/7</strong><br><br>
        Trực giác: chia bánh 7 phần, lấy 3 ít hơn lấy 5.`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="18" width="120" height="54" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/>
        <text x="70" y="52" text-anchor="middle" font-size="26" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">3/7</text>
        <text x="155" y="48" text-anchor="middle" font-size="24" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">&lt;</text>
        <rect x="170" y="18" width="120" height="54" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2.5"/>
        <text x="230" y="52" text-anchor="middle" font-size="26" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">5/7</text>
        <text x="150" y="82" text-anchor="middle" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">Cùng mẫu: so tử — tử lớn hơn thì phân số lớn hơn</text>
      </svg>`,
      ketLuan: 'Cùng mẫu số: tử lớn hơn → phân số lớn hơn. 3/7 < 5/7.'
    },
    {
      tieuDe: '🔢 Phân số bằng nhau',
      noiDung: `Hai phân số <strong>bằng nhau</strong> khi nhân/chia cả tử và mẫu với cùng một số ≠ 0.<br><br>
        <strong>1/2 = 2/4 = 3/6 = 4/8</strong><br>
        (nhân tử và mẫu với 2, 3, 4, ...)<br><br>
        Ứng dụng: <strong>rút gọn phân số</strong><br>
        6/8 ÷ 2 = <strong>3/4</strong> (chia tử và mẫu cùng cho 2)`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="74" rx="14" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="150" y="34" text-anchor="middle" font-size="15" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">1/2 = 2/4 = 3/6 = 4/8</text>
        <text x="150" y="56" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">Rút gọn: 6/8 ÷ 2 = 3/4</text>
        <text x="150" y="74" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif">Nhân hoặc chia tử và mẫu cùng một số ≠ 0</text>
      </svg>`,
      ketLuan: 'Phân số bằng nhau: nhân/chia cùng số. Rút gọn: chia cho ước chung lớn nhất.'
    }
  ]
};
const BAI_TAP_L3_PHAN_SO = [
  { id: 'l3ps_01', loai: 'trac_nghiem', cau: 'Phân số nào lớn hơn: 3/8 hay 5/8?', dapAn: '5/8', luaChon: ['3/8','5/8','Bằng nhau','Không so được'] },
  { id: 'l3ps_02', loai: 'trac_nghiem', cau: 'Rút gọn phân số 4/8', dapAn: '1/2', luaChon: ['2/4','1/2','1/4','3/6'] },
  { id: 'l3ps_03', loai: 'trac_nghiem', cau: '1/3 = ?/9', dapAn: '3/9', luaChon: ['1/9','2/9','3/9','4/9'] },
  { id: 'l3ps_04', loai: 'trac_nghiem', cau: 'Tử số của phân số 7/12 là?', dapAn: '7', luaChon: ['12','7','5','19'] },
  { id: 'l3ps_05', loai: 'trac_nghiem', cau: 'Phân số nào bằng 2/5?', dapAn: '4/10', luaChon: ['3/5','4/10','2/10','5/10'] },
  { id: 'l3ps_06', loai: 'trac_nghiem', cau: 'Phân số 6/9 rút gọn bằng?', dapAn: '2/3', luaChon: ['1/3','2/3','3/4','3/9'] },
  { id: 'l3ps_07', loai: 'dien_so', cau: '2/5 = ___/10', dapAn: 4, goiY: 'Nhân tử và mẫu với 2: 2×2=4, 5×2=10.' },
  { id: 'l3ps_08', loai: 'dien_so', cau: '6/8 rút gọn: tử số là ___', dapAn: 3, goiY: 'Chia tử và mẫu cho 2: 6÷2=3, 8÷2=4.' },
  { id: 'l3ps_09', loai: 'dien_so', cau: '3/7 và 5/7: phân số lớn hơn có tử số là ___', dapAn: 5, goiY: 'Cùng mẫu: tử lớn hơn thì phân số lớn hơn.' },
  { id: 'l3ps_10', loai: 'dien_so', cau: '1/4 = ___/12', dapAn: 3, goiY: 'Nhân tử và mẫu với 3: 1×3=3, 4×3=12.' },

  {id:'l3ps_11',loai:'dung_sai',cau:'1/2 = 2/4',dapAn:'Đúng',goiY:'Nhân tử và mẫu với 2: 1×2/2×2 = 2/4 ✓'},
  {id:'l3ps_12',loai:'dung_sai',cau:'3/5 > 2/5',dapAn:'Đúng',goiY:'Cùng mẫu 5, tử 3>2 → 3/5>2/5 ✓'},
  {id:'l3ps_13',loai:'dung_sai',cau:'6/8 rút gọn bằng 3/4',dapAn:'Đúng',goiY:'6÷2=3, 8÷2=4 → 3/4 ✓'},
  {id:'l3ps_14',loai:'dung_sai',cau:'Mẫu số của phân số có thể bằng 0',dapAn:'Sai',goiY:'Mẫu số luôn khác 0'},
  {id:'l3ps_15',loai:'dung_sai',cau:'1/3 < 1/2',dapAn:'Đúng',goiY:'Quy đồng: 2/6 < 3/6 → 1/3<1/2 ✓'},
  {id:'l3ps_16',loai:'chon_nhieu',cau:'Phân số nào bằng 1/2?',dapAn:['2/4','3/6','5/10'],luaChon:['2/4','2/3','3/6','5/10']},
  {id:'l3ps_17',loai:'chon_nhieu',cau:'Phân số nào lớn hơn 1/2?',dapAn:['3/4','5/8'],luaChon:['1/3','2/5','3/4','5/8']},
  {id:'l3ps_18',loai:'chon_nhieu',cau:'Phân số nào đã tối giản (không rút gọn được)?',dapAn:['1/3','3/7','5/8'],luaChon:['1/3','2/4','3/7','5/8']},
  {id:'l3ps_19',loai:'dien_so',cau:'3/4 = ___/8',dapAn:6,goiY:'Nhân tử và mẫu với 2: 3×2=6, 4×2=8'},
  {id:'l3ps_20',loai:'dien_so',cau:'9/12 rút gọn: mẫu số là ___',dapAn:4,goiY:'ƯCLN(9,12)=3. 9÷3=3, 12÷3=4'},
];

// ============================================
// CHỦ ĐỀ 10: TOÁN CÓ LỜI VĂN LỚP 3
// ============================================
const BAI_GIANG_L3_LOI_VAN = {
  tieuDe: 'Toán Có Lời Văn', icon: '📖', chuDe: 'loi_van',
  cacPhan: [
    {
      tieuDe: '📝 4 bước giải toán có lời văn',
      noiDung: `<strong>Bước 1 — Đọc kỹ:</strong> Bài cho gì? Hỏi gì?<br>
        <strong>Bước 2 — Tóm tắt:</strong> Ghi ngắn gọn dữ liệu bằng sơ đồ hoặc từ khóa<br>
        <strong>Bước 3 — Phép tính:</strong> Chọn +, −, ×, ÷ phù hợp<br>
        <strong>Bước 4 — Câu trả lời:</strong> Đầy đủ, có đơn vị<br><br>
        💡 Từ khóa quan trọng:<br>
        "thêm/tất cả" → ➕ · "bớt/còn lại" → ➖<br>
        "mỗi ... có" → ✖️ · "chia đều" → ➗`,
      svg: `<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="76" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
        <text x="28" y="30" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">📌 Đề: Có 256 học sinh, xếp đều 8 hàng.</text>
        <text x="28" y="48" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">Mỗi hàng có mấy học sinh?</text>
        <text x="28" y="66" font-size="12" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="800">Phép tính: 256 ÷ 8 = 32</text>
        <text x="28" y="78" font-size="10" fill="#7c4dff" font-family="Nunito,sans-serif">Trả lời: Mỗi hàng có 32 học sinh.</text>
      </svg>`,
      ketLuan: 'Luôn viết: Phép tính → Đáp số → Câu trả lời đầy đủ có đơn vị.'
    },
    {
      tieuDe: '🔢 Bài toán hai bước tính',
      noiDung: `Bài toán hai bước cần <strong>hai phép tính liên tiếp</strong>.<br><br>
        Ví dụ: Mua 3 quyển sách giá 8.000đ/quyển và 1 cái bút giá 5.000đ. Tính tổng tiền.<br><br>
        Bước 1: Tiền 3 quyển sách = 3 × 8.000 = <strong>24.000đ</strong><br>
        Bước 2: Tổng tiền = 24.000 + 5.000 = <strong>29.000đ</strong>`,
      svg: `<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="76" rx="14" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="20" y="30" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">3 quyển × 8.000đ + 1 bút × 5.000đ</text>
        <text x="20" y="50" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="700">B1: 3 × 8.000 = 24.000đ</text>
        <text x="20" y="68" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="700">B2: 24.000 + 5.000 = 29.000đ</text>
        <text x="20" y="82" font-size="10" fill="#6b6b6b" font-family="Nunito,sans-serif">Đáp số: 29.000 đồng</text>
      </svg>`,
      ketLuan: 'Bài 2 bước: làm từng bước rõ ràng, dùng kết quả bước 1 cho bước 2.'
    },
    {
      tieuDe: '📊 Bài toán có sơ đồ đoạn thẳng',
      noiDung: `Sơ đồ đoạn thẳng giúp <strong>hình dung</strong> bài toán dễ hơn.<br><br>
        Ví dụ: Anh có 2.500 tem, nhiều hơn em 800 tem. Hỏi em có mấy tem?<br><br>
        Sơ đồ: Anh [──────────────] 2.500<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Em  [──────────] ? + 800<br><br>
        Em = 2.500 − 800 = <strong>1.700 tem</strong>`,
      svg: `<svg viewBox="0 0 300 100" width="285" height="100" xmlns="http://www.w3.org/2000/svg">
        <text x="20" y="25" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">Anh:</text>
        <rect x="60" y="12" width="200" height="22" rx="5" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="160" y="27" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">2.500 tem</text>
        <text x="20" y="65" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">Em:</text>
        <rect x="60" y="52" width="148" height="22" rx="5" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="134" y="67" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif" font-weight="700">? tem</text>
        <rect x="208" y="52" width="52" height="22" rx="5" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/>
        <text x="234" y="67" text-anchor="middle" font-size="10" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="700">800</text>
        <text x="150" y="92" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Em = 2.500 − 800 = 1.700 tem</text>
      </svg>`,
      ketLuan: 'Sơ đồ đoạn thẳng: vẽ thanh dài = số lớn, thanh ngắn = số nhỏ. Rất hiệu quả!'
    }
  ]
};
const BAI_TAP_L3_LOI_VAN = [
  { id: 'l3lv_01', loai: 'trac_nghiem', cau: 'Kho có 4.560 tấn gạo, xuất đi 1.850 tấn. Còn lại bao nhiêu?', dapAn: '2.710 tấn', luaChon: ['2.610 tấn','2.700 tấn','2.710 tấn','2.810 tấn'] },
  { id: 'l3lv_02', loai: 'trac_nghiem', cau: 'Mỗi hộp có 6 quả trứng. 8 hộp có tất cả bao nhiêu quả?', dapAn: '48 quả', luaChon: ['14 quả','42 quả','48 quả','56 quả'] },
  { id: 'l3lv_03', loai: 'trac_nghiem', cau: '72 học sinh xếp thành 9 hàng đều nhau. Mỗi hàng mấy em?', dapAn: '8 em', luaChon: ['6 em','7 em','8 em','9 em'] },
  { id: 'l3lv_04', loai: 'trac_nghiem', cau: 'Anh có 3.200 tem, nhiều hơn em 750 tem. Em có bao nhiêu tem?', dapAn: '2.450 tem', luaChon: ['2.350 tem','2.450 tem','2.550 tem','3.950 tem'] },
  { id: 'l3lv_05', loai: 'trac_nghiem', cau: 'Mua 4 quyển sách giá 8.000đ/quyển. Tổng tiền là?', dapAn: '32.000đ', luaChon: ['24.000đ','28.000đ','32.000đ','36.000đ'] },
  { id: 'l3lv_06', loai: 'trac_nghiem', cau: 'Mảnh vải dài 5m, cắt đi 135cm. Còn lại bao nhiêu cm?', dapAn: '365cm', luaChon: ['355cm','365cm','375cm','465cm'] },
  { id: 'l3lv_07', loai: 'dien_so', cau: 'Trường có 456 nữ và 378 nam. Tổng số học sinh là ___ em', dapAn: 834, goiY: '456 + 378 = ?' },
  { id: 'l3lv_08', loai: 'dien_so', cau: '5 bao gạo, mỗi bao 25kg. Tổng khối lượng là ___ kg', dapAn: 125, goiY: '5 × 25 = ?' },
  { id: 'l3lv_09', loai: 'dien_so', cau: 'Có 96 cái bánh xếp đều vào 8 hộp. Mỗi hộp có ___ cái', dapAn: 12, goiY: '96 ÷ 8 = ?' },
  { id: 'l3lv_10', loai: 'dien_so', cau: 'Sáng bán 1.245 vé, chiều bán 876 vé. Cả ngày bán ___ vé', dapAn: 2121, goiY: '1.245 + 876 = ?' },

  {id:'l3lv_11',loai:'dung_sai',cau:'"Nhiều hơn" trong bài toán thường dùng phép cộng',dapAn:'Đúng',goiY:'A nhiều hơn B: A = B + phần hơn'},
  {id:'l3lv_12',loai:'dung_sai',cau:'"Ít hơn" trong bài toán thường dùng phép trừ',dapAn:'Đúng',goiY:'A ít hơn B: A = B − phần ít hơn'},
  {id:'l3lv_13',loai:'dung_sai',cau:'Câu trả lời bài toán phải có đơn vị',dapAn:'Đúng',goiY:'Ví dụ: "Có 15 học sinh" chứ không phải "Có 15"'},
  {id:'l3lv_14',loai:'dung_sai',cau:'Bài toán 2 bước cần làm 2 phép tính liên tiếp',dapAn:'Đúng',goiY:'Bước 1 → kết quả trung gian → Bước 2 → đáp số'},
  {id:'l3lv_15',loai:'dung_sai',cau:'Nếu bài hỏi "tất cả bao nhiêu" luôn dùng cộng',dapAn:'Sai',goiY:'Tất cả có thể dùng nhân: 4 hộp × 5 cái = 20 cái'},
  {id:'l3lv_16',loai:'chon_nhieu',cau:'Từ khóa nào cho thấy dùng phép trừ?',dapAn:['còn lại','ít hơn','bớt đi'],luaChon:['còn lại','thêm vào','ít hơn','bớt đi']},
  {id:'l3lv_17',loai:'chon_nhieu',cau:'Bài nào là bài toán 2 bước?',dapAn:['Mua 3 áo 50k, 2 quần 80k. Tổng tiền?','Lớp 40 HS, nghỉ 5. Còn bao nhiêu? Chia 5 tổ.'],luaChon:['Mua 3 áo 50k, 2 quần 80k. Tổng tiền?','Có 45 HS, bao nhiêu HS?','Lớp 40 HS, nghỉ 5. Còn bao nhiêu? Chia 5 tổ.','25+15=?']},
  {id:'l3lv_18',loai:'chon_nhieu',cau:'Bài toán "chia đều" thường dùng phép tính nào?',dapAn:['Phép chia'],luaChon:['Phép cộng','Phép trừ','Phép nhân','Phép chia']},
  {id:'l3lv_19',loai:'dien_so',cau:'Có 8 bao gạo, mỗi bao 12kg. Tổng = ___ kg',dapAn:96,goiY:'8×12=?'},
  {id:'l3lv_20',loai:'dien_so',cau:'Kho 5.000 sách, xuất 1.750. Còn ___ quyển',dapAn:3250,goiY:'5.000−1.750=?'},
];

// ============================================
// MAP TRA CỨU LỚP 3
// ============================================
const DATA_LOP3 = {
  so_10000:   { baiGiang: BAI_GIANG_L3_SO_10000,   baiTap: BAI_TAP_L3_SO_10000   },
  phep_cong:  { baiGiang: BAI_GIANG_L3_PHEP_CONG,  baiTap: BAI_TAP_L3_PHEP_CONG  },
  phep_tru:   { baiGiang: BAI_GIANG_L3_PHEP_TRU,   baiTap: BAI_TAP_L3_PHEP_TRU   },
  nhan_chia:  { baiGiang: BAI_GIANG_L3_NHAN_CHIA,  baiTap: BAI_TAP_L3_NHAN_CHIA  },
  nhan_ngoai: { baiGiang: BAI_GIANG_L3_NHAN_NGOAI, baiTap: BAI_TAP_L3_NHAN_NGOAI },
  chia_du:    { baiGiang: BAI_GIANG_L3_CHIA_DU,    baiTap: BAI_TAP_L3_CHIA_DU    },
  hinh_hoc:   { baiGiang: BAI_GIANG_L3_HINH_HOC,   baiTap: BAI_TAP_L3_HINH_HOC   },
  do_luong:   { baiGiang: BAI_GIANG_L3_DO_LUONG,   baiTap: BAI_TAP_L3_DO_LUONG   },
  phan_so:    { baiGiang: BAI_GIANG_L3_PHAN_SO,    baiTap: BAI_TAP_L3_PHAN_SO    },
  loi_van:    { baiGiang: BAI_GIANG_L3_LOI_VAN,    baiTap: BAI_TAP_L3_LOI_VAN    },
};

// Giữ lại tên biến cũ để không bị lỗi nếu file khác dùng
const BAI_GIANG_LOP3 = BAI_GIANG_L3_NHAN_CHIA;
const BAI_TAP_LOP3   = BAI_TAP_L3_NHAN_CHIA;

// ============================================================
// BỔ SUNG BÀI TẬP LỚP 3 — Dạng Đúng/Sai và Chọn nhiều
// ============================================================
const EXTRA_L3 = {
  so_10000: [
    {id:'l3sx_01',loai:'dung_sai',cau:'Số 7.253 có chữ số hàng nghìn là 7',dapAn:true,goiY:'7-2-5-3: nghìn=7 ✓'},
    {id:'l3sx_02',loai:'dung_sai',cau:'9.999 < 10.000',dapAn:true,goiY:'9.999 là số lớn nhất có 4 chữ số, 10.000 lớn hơn ✓'},
    {id:'l3sx_03',loai:'dung_sai',cau:'5.000 + 600 = 5.600',dapAn:true,goiY:'5 nghìn + 6 trăm = 5.600 ✓'},
    {id:'l3sx_04',loai:'chon_nhieu',cau:'Số nào là số tròn nghìn?',dapAn:['5.000','8.000','1.000'],luaChon:['5.000','5.500','8.000','1.000','3.030']},
    {id:'l3sx_05',loai:'chon_nhieu',cau:'Số nào lớn hơn 7.000?',dapAn:['7.001','9.999','8.500'],luaChon:['6.999','7.001','7.000','9.999','8.500']},
  ],
  phep_cong: [
    {id:'l3cx_01',loai:'dung_sai',cau:'3.648 + 2.175 = 5.823',dapAn:true,goiY:'8+5=13→3nhớ1, 4+7+1=12→2nhớ1, 6+1+1=8, 3+2=5 → 5.823 ✓'},
    {id:'l3cx_02',loai:'dung_sai',cau:'5.000 + 5.000 = 10.000',dapAn:true,goiY:'5+5=10 nghìn = 10.000 ✓'},
    {id:'l3cx_03',loai:'chon_nhieu',cau:'Phép tính nào có kết quả là 10.000?',dapAn:['5.000 + 5.000','3.000 + 7.000'],luaChon:['5.000 + 5.000','4.000 + 5.000','3.000 + 7.000','6.000 + 3.000']},
    {id:'l3cx_04',loai:'dung_sai',cau:'Tổng của hai số lẻ là số chẵn',dapAn:true,goiY:'VD: 3+5=8 (chẵn). Lẻ+Lẻ=Chẵn ✓'},
  ],
  phep_tru: [
    {id:'l3tx_01',loai:'dung_sai',cau:'10.000 − 1 = 9.999',dapAn:true,goiY:'Số liền trước 10.000 là 9.999 ✓'},
    {id:'l3tx_02',loai:'dung_sai',cau:'8.537 − 4.269 = 4.268',dapAn:true,goiY:'Kiểm tra: 4.268+4.269=8.537 ✓'},
    {id:'l3tx_03',loai:'chon_nhieu',cau:'Phép tính nào có kết quả bằng 4.000?',dapAn:['6.000 − 2.000','9.000 − 5.000'],luaChon:['6.000 − 2.000','5.000 − 2.000','9.000 − 5.000','7.000 − 4.000']},
    {id:'l3tx_04',loai:'dung_sai',cau:'Nếu A − B = C thì A = B + C',dapAn:true,goiY:'Đây là quan hệ cộng-trừ. VD: 10−3=7 → 10=3+7 ✓'},
  ],
  nhan_chia: [
    {id:'l3ncx_01',loai:'dung_sai',cau:'9 × 9 = 81',dapAn:true,goiY:'Bảng 9: kết quả tận cùng... 9×9=81, 8+1=9 ✓'},
    {id:'l3ncx_02',loai:'dung_sai',cau:'7 × 8 = 8 × 7 = 56',dapAn:true,goiY:'Tính chất giao hoán: 7×8=56=8×7 ✓'},
    {id:'l3ncx_03',loai:'chon_nhieu',cau:'Số nào là bội của 9?',dapAn:['27','63','81'],luaChon:['25','27','63','70','81']},
    {id:'l3ncx_04',loai:'dung_sai',cau:'63 ÷ 9 = 7',dapAn:true,goiY:'9×7=63 → 63÷9=7 ✓'},
  ],
  nhan_ngoai: [
    {id:'l3nnx_01',loai:'dung_sai',cau:'53 × 4 = 212',dapAn:true,goiY:'3×4=12→2nhớ1, 5×4+1=21 → 212 ✓'},
    {id:'l3nnx_02',loai:'dung_sai',cau:'45 × 10 = 450',dapAn:true,goiY:'Nhân 10: thêm 1 số 0 vào cuối → 450 ✓'},
    {id:'l3nnx_03',loai:'chon_nhieu',cau:'Phép tính nào có kết quả bằng 1.000?',dapAn:['4 × 250','8 × 125','10 × 100'],luaChon:['4 × 250','5 × 200','8 × 125','10 × 100','3 × 300']},
    {id:'l3nnx_04',loai:'dung_sai',cau:'214 × 4 = 856',dapAn:true,goiY:'4×4=16→6nhớ1, 1×4+1=5, 2×4=8 → 856 ✓'},
  ],
  chia_du: [
    {id:'l3cdx_01',loai:'dung_sai',cau:'Số dư trong phép chia luôn nhỏ hơn số chia',dapAn:true,goiY:'Quy tắc vàng: Số dư < Số chia ✓'},
    {id:'l3cdx_02',loai:'dung_sai',cau:'17 ÷ 5 = 3 dư 2 (kiểm tra: 5×3+2=17)',dapAn:true,goiY:'15+2=17 ✓'},
    {id:'l3cdx_03',loai:'chon_nhieu',cau:'Phép chia nào có số dư là 1?',dapAn:['10 ÷ 3','7 ÷ 2'],luaChon:['10 ÷ 3','10 ÷ 5','7 ÷ 2','8 ÷ 4']},
    {id:'l3cdx_04',loai:'dung_sai',cau:'156 ÷ 4 = 39 (chia hết, dư 0)',dapAn:true,goiY:'39×4=156 → dư 0 ✓'},
  ],
  hinh_hoc: [
    {id:'l3hhx_01',loai:'dung_sai',cau:'Hình vuông cạnh 8cm có chu vi 32cm',dapAn:true,goiY:'CV = 8×4 = 32cm ✓'},
    {id:'l3hhx_02',loai:'dung_sai',cau:'Diện tích hình chữ nhật = (dài + rộng) × 2',dapAn:false,goiY:'Đó là công thức chu vi. Diện tích = dài × rộng'},
    {id:'l3hhx_03',loai:'chon_nhieu',cau:'Hình nào có 4 góc vuông?',dapAn:['Hình chữ nhật','Hình vuông'],luaChon:['Hình tròn','Hình chữ nhật','Tam giác','Hình vuông']},
    {id:'l3hhx_04',loai:'dung_sai',cau:'Diện tích HCN dài 6cm rộng 4cm = 24cm²',dapAn:true,goiY:'S = 6×4 = 24cm² ✓'},
  ],
  do_luong: [
    {id:'l3dlx_01',loai:'dung_sai',cau:'1 tấn = 1.000 kg',dapAn:true,goiY:'Đúng! 1 tấn = 1.000 kg ✓'},
    {id:'l3dlx_02',loai:'dung_sai',cau:'1 giờ = 100 phút',dapAn:false,goiY:'1 giờ = 60 phút (không phải 100)'},
    {id:'l3dlx_03',loai:'chon_nhieu',cau:'Đổi đúng: 1 km = ?',dapAn:['1.000 m','100.000 cm'],luaChon:['1.000 m','100 m','100.000 cm','10 dm']},
    {id:'l3dlx_04',loai:'dung_sai',cau:'1 năm nhuận có 366 ngày',dapAn:true,goiY:'Năm nhuận thêm 1 ngày vào tháng 2: 28+1=29 ngày ✓'},
  ],
  phan_so: [
    {id:'l3psx_01',loai:'dung_sai',cau:'2/5 < 3/5 vì cùng mẫu, tử 2 < 3',dapAn:true,goiY:'Cùng mẫu: so tử. 2<3 → 2/5<3/5 ✓'},
    {id:'l3psx_02',loai:'dung_sai',cau:'4/8 = 1/2',dapAn:true,goiY:'ƯCLN(4,8)=4. 4÷4=1, 8÷4=2 → 1/2 ✓'},
    {id:'l3psx_03',loai:'chon_nhieu',cau:'Phân số nào bằng 1/3?',dapAn:['2/6','3/9'],luaChon:['2/6','2/4','3/9','3/6','4/8']},
    {id:'l3psx_04',loai:'dung_sai',cau:'Mẫu số không thể bằng 0',dapAn:true,goiY:'Chia cho 0 không xác định. Mẫu số ≠ 0 là quy tắc bắt buộc ✓'},
  ],
  loi_van: [
    {id:'l3lvx_01',loai:'dung_sai',cau:'"Chia đều" gợi ý phép chia',dapAn:true,goiY:'"Chia đều vào các nhóm" → phép chia ✓'},
    {id:'l3lvx_02',loai:'dung_sai',cau:'Kết quả bài toán phải luôn có đơn vị',dapAn:true,goiY:'VD: "12 học sinh", "24.000 đồng" — đơn vị là bắt buộc ✓'},
    {id:'l3lvx_03',loai:'chon_nhieu',cau:'Bài toán nào cần 2 bước tính?',dapAn:['Mua 3 hộp 24 cái/hộp, bán 36 cái, còn bao nhiêu?'],luaChon:['3 × 8 = ?','Mua 3 hộp 24 cái/hộp, bán 36 cái, còn bao nhiêu?','24 ÷ 4 = ?']},
    {id:'l3lvx_04',loai:'dung_sai',cau:'Trường có 456 nữ và 378 nam, tổng = 834 học sinh',dapAn:true,goiY:'456+378=834 ✓'},
  ],
};

// Gộp bài tập cũ + mới
Object.keys(EXTRA_L3).forEach(k => {
  if (DATA_LOP3[k]) DATA_LOP3[k].baiTap = [...DATA_LOP3[k].baiTap, ...EXTRA_L3[k]];
});
