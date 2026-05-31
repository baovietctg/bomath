// ============================================
// BoMath - Nội dung Lớp 5 (Full chương trình)
// 10 chủ đề × 3 bài giảng + 10 câu hỏi
// Theo chương trình GDPT 2018
// ============================================

const CHU_DE_LOP5 = [
  { id: 'so_tn',      ten: 'Số tự nhiên & Thập phân', icon: '🔢', mauSac: '#ff6b35' },
  { id: 'phan_so',    ten: 'Phân Số nâng cao',         icon: '🍕', mauSac: '#06d6a0' },
  { id: 'cong_tru_ps',ten: 'Cộng & Trừ Phân Số',      icon: '➕', mauSac: '#ef476f' },
  { id: 'nhan_chia_ps',ten: 'Nhân & Chia Phân Số',     icon: '✖️', mauSac: '#ffd166' },
  { id: 'so_thap_phan',ten: 'Số Thập Phân',            icon: '🔣', mauSac: '#7c4dff' },
  { id: 'ti_so_phan_tram',ten: 'Tỉ số & Phần Trăm',   icon: '📊', mauSac: '#118ab2' },
  { id: 'hinh_hoc',   ten: 'Hình Học',                 icon: '📐', mauSac: '#ff9f1c' },
  { id: 'chuyen_dong',ten: 'Toán Chuyển Động',         icon: '🚂', mauSac: '#06d6a0' },
  { id: 'do_luong',   ten: 'Đo Lường nâng cao',        icon: '📏', mauSac: '#ef476f' },
  { id: 'loi_van',    ten: 'Toán Có Lời Văn',          icon: '📖', mauSac: '#ff6b35' },
];

// ============================================
// CHỦ ĐỀ 1: SỐ TỰ NHIÊN & THẬP PHÂN ÔN LẠI
// ============================================
const BAI_GIANG_L5_SO_TN = {
  tieuDe: 'Số tự nhiên & Ôn tập thập phân', icon: '🔢', chuDe: 'so_tn',
  cacPhan: [
    {
      tieuDe: '🔢 Số tự nhiên lớn — đọc và viết',
      noiDung: `Số tự nhiên lớn được đọc theo từng <strong>lớp</strong> (3 chữ số một):<br><br>
        <strong>Lớp đơn vị</strong>: đơn vị, chục, trăm<br>
        <strong>Lớp nghìn</strong>: nghìn, chục nghìn, trăm nghìn<br>
        <strong>Lớp triệu</strong>: triệu, chục triệu, trăm triệu<br><br>
        Ví dụ: <strong>5.730.246</strong><br>
        → "Năm triệu bảy trăm ba mươi nghìn hai trăm bốn mươi sáu"`,
      svg: `<svg viewBox="0 0 300 100" width="285" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="88" height="74" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="52" y="30" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Lớp triệu</text>
        <text x="52" y="52" text-anchor="middle" font-size="20" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">5</text>
        <text x="52" y="72" text-anchor="middle" font-size="10" fill="#7c4dff" font-family="Nunito,sans-serif">triệu</text>
        <rect x="106" y="8" width="88" height="74" rx="10" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">Lớp nghìn</text>
        <text x="150" y="52" text-anchor="middle" font-size="20" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">730</text>
        <text x="150" y="72" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif">nghìn</text>
        <rect x="204" y="8" width="88" height="74" rx="10" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="248" y="30" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">Lớp đơn vị</text>
        <text x="248" y="52" text-anchor="middle" font-size="20" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">246</text>
        <text x="248" y="72" text-anchor="middle" font-size="10" fill="#008060" font-family="Nunito,sans-serif">đơn vị</text>
      </svg>`,
      ketLuan: '5.730.246: đọc từng lớp trái sang phải — lớp triệu, lớp nghìn, lớp đơn vị.'
    },
    {
      tieuDe: '📊 Dãy số và quy luật',
      noiDung: `Tìm <strong>quy luật</strong> của dãy số để điền số tiếp theo.<br><br>
        Ví dụ 1 (cộng đều): 2, 5, 8, 11, <strong>14</strong>, ... (cộng thêm 3)<br>
        Ví dụ 2 (nhân đều): 1, 2, 4, 8, <strong>16</strong>, ... (nhân 2)<br>
        Ví dụ 3 (trừ đều): 100, 90, 80, <strong>70</strong>, ... (trừ 10)<br><br>
        Bước 1: Tìm hiệu/tích giữa các số liên tiếp<br>
        Bước 2: Áp dụng quy luật đó vào số tiếp theo`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="74" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="76" y="30" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">Cộng đều (+3)</text>
        <text x="76" y="52" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">2, 5, 8, 11, 14</text>
        <text x="76" y="72" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif">+3 mỗi bước</text>
        <rect x="156" y="8" width="136" height="74" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="224" y="30" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">Nhân đều (×2)</text>
        <text x="224" y="52" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">1, 2, 4, 8, 16</text>
        <text x="224" y="72" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif">×2 mỗi bước</text>
      </svg>`,
      ketLuan: 'Tìm quy luật = xem hiệu hoặc thương giữa các số liên tiếp có bằng nhau không.'
    },
    {
      tieuDe: '🔄 Ước và bội — ƯCLN và BCNN',
      noiDung: `<strong>Ước</strong> của n: số chia hết n (chia ra không dư)<br>
        Ước của 12: 1, 2, 3, 4, 6, 12<br><br>
        <strong>ƯCLN</strong> (ước chung lớn nhất): dùng để rút gọn phân số<br>
        ƯCLN(12, 8) = 4<br><br>
        <strong>BCNN</strong> (bội chung nhỏ nhất): dùng để quy đồng mẫu<br>
        BCNN(4, 6) = 12`,
      svg: `<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="76" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="76" y="28" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">ƯCLN(12, 8)</text>
        <text x="76" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">Ư(12)=1,2,3,4,6,12</text>
        <text x="76" y="62" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">Ư(8)=1,2,4,8</text>
        <text x="76" y="78" text-anchor="middle" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">ƯCLN = 4</text>
        <rect x="156" y="8" width="136" height="76" rx="12" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="224" y="28" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">BCNN(4, 6)</text>
        <text x="224" y="46" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">B(4)=4,8,12,16...</text>
        <text x="224" y="62" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">B(6)=6,12,18...</text>
        <text x="224" y="78" text-anchor="middle" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">BCNN = 12</text>
      </svg>`,
      ketLuan: 'ƯCLN → rút gọn phân số. BCNN → quy đồng mẫu số.'
    }
  ]
};
const BAI_TAP_L5_SO_TN = [
  { id: 'l5st_01', loai: 'trac_nghiem', cau: 'Số 7.350.248 có bao nhiêu chữ số?', dapAn: '7', luaChon: ['5','6','7','8'] },
  { id: 'l5st_02', loai: 'trac_nghiem', cau: 'Dãy số: 3, 6, 9, 12, ___ ?', dapAn: '15', luaChon: ['13','14','15','16'] },
  { id: 'l5st_03', loai: 'trac_nghiem', cau: 'ƯCLN(18, 12) = ?', dapAn: '6', luaChon: ['3','4','6','12'] },
  { id: 'l5st_04', loai: 'trac_nghiem', cau: 'BCNN(4, 6) = ?', dapAn: '12', luaChon: ['6','8','12','24'] },
  { id: 'l5st_05', loai: 'trac_nghiem', cau: 'Số nào là ước của 24?', dapAn: '8', luaChon: ['5','7','8','9'] },
  { id: 'l5st_06', loai: 'trac_nghiem', cau: 'Dãy: 1, 2, 4, 8, 16, ___ ?', dapAn: '32', luaChon: ['24','28','32','64'] },
  { id: 'l5st_07', loai: 'dien_so', cau: 'ƯCLN(15, 10) = ___', dapAn: 5, goiY: 'Ư(15)=1,3,5,15; Ư(10)=1,2,5,10 → chung lớn nhất?' },
  { id: 'l5st_08', loai: 'dien_so', cau: 'BCNN(3, 5) = ___', dapAn: 15, goiY: 'B(3)=3,6,9,12,15... B(5)=5,10,15... → chung nhỏ nhất?' },
  { id: 'l5st_09', loai: 'dien_so', cau: 'Dãy: 100, 90, 80, 70, ___ ?', dapAn: 60, goiY: 'Trừ đều 10 mỗi bước.' },
  { id: 'l5st_10', loai: 'dien_so', cau: 'Số ước của 12 là ___ ước', dapAn: 6, goiY: 'Ư(12) = 1, 2, 3, 4, 6, 12 → đếm xem có bao nhiêu?' },

  {id:'l5st_11',loai:'dung_sai',cau:'ƯCLN(6,9)=3',dapAn:'Đúng',goiY:'Ư(6)=1,2,3,6; Ư(9)=1,3,9 → ƯCLN=3 ✓'},
  {id:'l5st_12',loai:'dung_sai',cau:'BCNN(4,6)=12',dapAn:'Đúng',goiY:'B(4)=4,8,12; B(6)=6,12 → BCNN=12 ✓'},
  {id:'l5st_13',loai:'dung_sai',cau:'7 là số nguyên tố (chỉ chia hết cho 1 và chính nó)',dapAn:'Đúng',goiY:'7: chỉ chia hết cho 1 và 7 ✓'},
  {id:'l5st_14',loai:'dung_sai',cau:'Dãy 5,10,15,20: tăng đều thêm 5',dapAn:'Đúng',goiY:'Hiệu mỗi bước: 10−5=5 ✓'},
  {id:'l5st_15',loai:'dung_sai',cau:'ƯCLN của 2 số luôn nhỏ hơn hoặc bằng số nhỏ hơn',dapAn:'Đúng',goiY:'ƯCLN(8,12)=4 ≤ 8 ✓'},
  {id:'l5st_16',loai:'chon_nhieu',cau:'Số nào là ước của 30?',dapAn:['5','6','10'],luaChon:['5','6','7','10']},
  {id:'l5st_17',loai:'chon_nhieu',cau:'Dãy nào tăng theo quy luật nhân 2?',dapAn:['1,2,4,8,16','3,6,12,24'],luaChon:['1,2,4,8,16','2,4,6,8,10','3,6,12,24','5,10,20,35']},
  {id:'l5st_18',loai:'chon_nhieu',cau:'Số nguyên tố nào nhỏ hơn 20?',dapAn:['2','7','13'],luaChon:['2','4','7','13']},
  {id:'l5st_19',loai:'dien_so',cau:'BCNN(6,9) = ___',dapAn:18,goiY:'B(6)=6,12,18; B(9)=9,18 → BCNN=18'},
  {id:'l5st_20',loai:'dien_so',cau:'Dãy: 1,4,9,16,___ (bình phương các số tự nhiên)',dapAn:25,goiY:'1²=1, 2²=4, 3²=9, 4²=16, 5²=?'},
];

// ============================================
// CHỦ ĐỀ 2: PHÂN SỐ NÂNG CAO
// ============================================
const BAI_GIANG_L5_PHAN_SO = {
  tieuDe: 'Phân Số nâng cao', icon: '🍕', chuDe: 'phan_so',
  cacPhan: [
    {
      tieuDe: '📊 Quy đồng mẫu số',
      noiDung: `<strong>Quy đồng mẫu số</strong>: đưa các phân số về cùng mẫu.<br>
        Dùng BCNN làm mẫu chung.<br><br>
        Ví dụ: Quy đồng <strong>2/3</strong> và <strong>3/4</strong><br>
        BCNN(3, 4) = 12<br>
        2/3 = 8/12 (nhân cả tử và mẫu với 4)<br>
        3/4 = 9/12 (nhân cả tử và mẫu với 3)<br>
        → So sánh: 8/12 &lt; 9/12 → <strong>2/3 &lt; 3/4</strong>`,
      svg: `<svg viewBox="0 0 300 108" width="285" height="108" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="18" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">2/3 → ×4 → 8/12</text>
        <rect x="10" y="24" width="200" height="28" rx="6" fill="#f0f0f0"/>
        <rect x="10" y="24" width="133" height="28" rx="6" fill="#7c4dff" opacity="0.75"/>
        <line x1="77" y1="24" x2="77" y2="52" stroke="white" stroke-width="1.5"/>
        <line x1="143" y1="24" x2="143" y2="52" stroke="white" stroke-width="1.5"/>
        <text x="228" y="42" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">= 8/12</text>
        <text x="10" y="72" font-size="12" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="800">3/4 → ×3 → 9/12</text>
        <rect x="10" y="78" width="200" height="28" rx="6" fill="#f0f0f0"/>
        <rect x="10" y="78" width="150" height="28" rx="6" fill="#06d6a0" opacity="0.75"/>
        <line x1="60" y1="78" x2="60" y2="106" stroke="white" stroke-width="1.5"/>
        <line x1="110" y1="78" x2="110" y2="106" stroke="white" stroke-width="1.5"/>
        <line x1="160" y1="78" x2="160" y2="106" stroke="white" stroke-width="1.5"/>
        <text x="228" y="96" font-size="12" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="700">= 9/12</text>
      </svg>`,
      ketLuan: 'Quy đồng: tìm BCNN → nhân tử và mẫu mỗi phân số để về cùng mẫu.'
    },
    {
      tieuDe: '⚖️ So sánh phân số khác mẫu',
      noiDung: `Để so sánh phân số <strong>khác mẫu</strong>:<br>
        Bước 1: Quy đồng mẫu số<br>
        Bước 2: So sánh tử số<br><br>
        Ví dụ: So sánh <strong>5/6</strong> và <strong>7/9</strong><br>
        BCNN(6, 9) = 18<br>
        5/6 = 15/18 · 7/9 = 14/18<br>
        15 &gt; 14 → <strong>5/6 &gt; 7/9</strong>`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="16" width="110" height="56" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2.5"/>
        <text x="65" y="40" text-anchor="middle" font-size="20" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">5/6</text>
        <text x="65" y="60" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif">= 15/18</text>
        <text x="155" y="47" text-anchor="middle" font-size="24" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">&gt;</text>
        <rect x="180" y="16" width="110" height="56" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2.5"/>
        <text x="235" y="40" text-anchor="middle" font-size="20" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">7/9</text>
        <text x="235" y="60" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif">= 14/18</text>
        <text x="150" y="84" text-anchor="middle" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">15/18 &gt; 14/18 → 5/6 &gt; 7/9</text>
      </svg>`,
      ketLuan: 'So sánh khác mẫu: quy đồng trước, rồi so tử. Tử lớn hơn → phân số lớn hơn.'
    },
    {
      tieuDe: '🔄 Phân số thập phân & hỗn số',
      noiDung: `<strong>Phân số thập phân</strong>: mẫu là 10, 100, 1000...<br>
        3/10 = 0,3 · 25/100 = 0,25 · 7/1000 = 0,007<br><br>
        <strong>Hỗn số</strong>: gồm phần nguyên và phần phân số<br>
        2½ = 2 + 1/2 = 5/2<br>
        3¾ = 3 + 3/4 = 15/4<br><br>
        Đổi hỗn số sang phân số: (nguyên × mẫu + tử) / mẫu`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="74" rx="12" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/>
        <text x="76" y="28" text-anchor="middle" font-size="11" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">Phân số thập phân</text>
        <text x="76" y="48" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">3/10 = 0,3</text>
        <text x="76" y="66" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">25/100 = 0,25</text>
        <rect x="156" y="8" width="136" height="74" rx="12" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="224" y="28" text-anchor="middle" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Hỗn số → PS</text>
        <text x="224" y="48" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">2½ = 5/2</text>
        <text x="224" y="66" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">3¾ = 15/4</text>
      </svg>`,
      ketLuan: 'Phân số thập phân: mẫu 10/100/1000. Hỗn số → PS: (nguyên×mẫu+tử)/mẫu.'
    }
  ]
};
const BAI_TAP_L5_PHAN_SO = [
  { id: 'l5ps_01', loai: 'trac_nghiem', cau: 'Quy đồng 1/2 và 1/3: mẫu chung là?', dapAn: '6', luaChon: ['3','4','6','12'] },
  { id: 'l5ps_02', loai: 'trac_nghiem', cau: 'So sánh 2/3 và 3/4: kết quả là?', dapAn: '2/3 < 3/4', luaChon: ['2/3 > 3/4','2/3 = 3/4','2/3 < 3/4','Không so được'] },
  { id: 'l5ps_03', loai: 'trac_nghiem', cau: 'Hỗn số 2½ bằng phân số nào?', dapAn: '5/2', luaChon: ['3/2','4/2','5/2','6/2'] },
  { id: 'l5ps_04', loai: 'trac_nghiem', cau: '25/100 bằng số thập phân nào?', dapAn: '0,25', luaChon: ['0,025','0,25','2,5','25'] },
  { id: 'l5ps_05', loai: 'trac_nghiem', cau: 'Rút gọn 18/24 về phân số tối giản?', dapAn: '3/4', luaChon: ['6/8','3/4','9/12','2/3'] },
  { id: 'l5ps_06', loai: 'trac_nghiem', cau: 'So sánh 5/6 và 7/9?', dapAn: '5/6 > 7/9', luaChon: ['5/6 < 7/9','5/6 = 7/9','5/6 > 7/9','Không so được'] },
  { id: 'l5ps_07', loai: 'dien_so', cau: '3/4 quy đồng về mẫu 12: tử số là ___', dapAn: 9, goiY: '3×3=9, 4×3=12 → 3/4 = 9/12' },
  { id: 'l5ps_08', loai: 'dien_so', cau: 'Hỗn số 3¾ = ___/4', dapAn: 15, goiY: '3×4+3=15 → 15/4' },
  { id: 'l5ps_09', loai: 'dien_so', cau: 'ƯCLN(18,24) = ___', dapAn: 6, goiY: 'Ư(18)=1,2,3,6,9,18; Ư(24)=1,2,3,4,6,8,12,24' },
  { id: 'l5ps_10', loai: 'dien_so', cau: '7/10 = ___/100', dapAn: 70, goiY: 'Nhân tử và mẫu với 10: 7×10=70, 10×10=100.' },

  {id:'l5ps_11',loai:'dung_sai',cau:'2/3 < 3/4',dapAn:'Đúng',goiY:'8/12 < 9/12 ✓'},
  {id:'l5ps_12',loai:'dung_sai',cau:'Hỗn số 2½ = 5/2',dapAn:'Đúng',goiY:'2×2+1=5 → 5/2 ✓'},
  {id:'l5ps_13',loai:'dung_sai',cau:'3/4 = 75/100',dapAn:'Đúng',goiY:'×25: 3×25=75, 4×25=100 ✓'},
  {id:'l5ps_14',loai:'dung_sai',cau:'Phân số tối giản là phân số không rút gọn được',dapAn:'Đúng',goiY:'ƯCLN(tử,mẫu)=1 → tối giản'},
  {id:'l5ps_15',loai:'dung_sai',cau:'0,5 = 1/2',dapAn:'Đúng',goiY:'5/10 = 1/2 = 0,5 ✓'},
  {id:'l5ps_16',loai:'chon_nhieu',cau:'Phân số nào bằng 3/4?',dapAn:['6/8','9/12','75/100'],luaChon:['6/8','9/12','9/16','75/100']},
  {id:'l5ps_17',loai:'chon_nhieu',cau:'Phân số nào lớn hơn 1/2?',dapAn:['3/5','7/10','5/8'],luaChon:['1/3','3/5','7/10','5/8']},
  {id:'l5ps_18',loai:'chon_nhieu',cau:'Hỗn số nào bằng phân số có tử lớn hơn 10?',dapAn:['2¾=11/4','1⅘=9/5'],luaChon:['2¾=11/4','1⅘=9/5','1½=3/2','2¼=9/4']},
  {id:'l5ps_19',loai:'dien_so',cau:'5/6 quy đồng mẫu 18: tử số là ___',dapAn:15,goiY:'×3: 5×3=15, 6×3=18'},
  {id:'l5ps_20',loai:'dien_so',cau:'Hỗn số 4⅔ = ___/3',dapAn:14,goiY:'4×3+2=14 → 14/3'},
];

// ============================================
// CHỦ ĐỀ 3: CỘNG & TRỪ PHÂN SỐ
// ============================================
const BAI_GIANG_L5_CONG_TRU = {
  tieuDe: 'Cộng & Trừ Phân Số', icon: '➕', chuDe: 'cong_tru_ps',
  cacPhan: [
    {
      tieuDe: '➕ Cộng phân số cùng mẫu',
      noiDung: `Cộng tử số, <strong>giữ nguyên mẫu số</strong>.<br><br>
        <strong>a/m + b/m = (a+b)/m</strong><br><br>
        Ví dụ: <strong>2/7 + 3/7 = 5/7</strong><br>
        (2+3=5, mẫu giữ nguyên là 7)<br><br>
        Lưu ý: Kiểm tra kết quả có rút gọn được không?<br>
        3/6 + 1/6 = 4/6 = <strong>2/3</strong> (rút gọn ÷ 2)`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="200" height="28" rx="6" fill="#f0f0f0"/>
        <rect x="8" y="16" width="58" height="28" rx="6" fill="#7c4dff" opacity="0.8"/>
        <rect x="66" y="16" width="84" height="28" rx="6" fill="#06d6a0" opacity="0.8"/>
        <text x="37" y="34" text-anchor="middle" font-size="12" fill="white" font-family="Nunito,sans-serif" font-weight="800">2/7</text>
        <text x="108" y="34" text-anchor="middle" font-size="12" fill="white" font-family="Nunito,sans-serif" font-weight="800">3/7</text>
        <text x="215" y="34" font-size="14" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">= 5/7</text>
        <text x="150" y="65" text-anchor="middle" font-size="15" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">2/7 + 3/7 = 5/7</text>
        <text x="150" y="84" text-anchor="middle" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">Cộng tử, giữ mẫu</text>
      </svg>`,
      ketLuan: 'Cùng mẫu: cộng tử, giữ mẫu. Sau đó rút gọn nếu được.'
    },
    {
      tieuDe: '➕ Cộng phân số khác mẫu',
      noiDung: `Bước 1: Quy đồng mẫu số (dùng BCNN)<br>
        Bước 2: Cộng tử số<br>
        Bước 3: Rút gọn (nếu được)<br><br>
        Ví dụ: <strong>1/2 + 1/3</strong><br>
        BCNN(2,3) = 6<br>
        1/2 = 3/6 · 1/3 = 2/6<br>
        → 3/6 + 2/6 = <strong>5/6</strong>`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="74" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">1/2 + 1/3 = ?</text>
        <text x="150" y="50" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">BCNN(2,3)=6 → 3/6 + 2/6</text>
        <text x="150" y="70" text-anchor="middle" font-size="15" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">= 5/6 ✓</text>
      </svg>`,
      ketLuan: 'Khác mẫu: quy đồng → cộng tử → rút gọn. 1/2+1/3 = 3/6+2/6 = 5/6.'
    },
    {
      tieuDe: '➖ Trừ phân số',
      noiDung: `Trừ phân số: tương tự cộng, nhưng thay bằng <strong>phép trừ</strong>.<br><br>
        Cùng mẫu: <strong>a/m − b/m = (a−b)/m</strong><br>
        Ví dụ: 5/8 − 3/8 = <strong>2/8 = 1/4</strong><br><br>
        Khác mẫu: quy đồng trước rồi trừ<br>
        Ví dụ: 3/4 − 1/3<br>
        BCNN(4,3) = 12<br>
        9/12 − 4/12 = <strong>5/12</strong>`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="74" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="76" y="28" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">Cùng mẫu</text>
        <text x="76" y="48" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">5/8 − 3/8</text>
        <text x="76" y="68" text-anchor="middle" font-size="14" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">= 2/8 = 1/4</text>
        <rect x="156" y="8" width="136" height="74" rx="12" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/>
        <text x="224" y="28" text-anchor="middle" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">Khác mẫu</text>
        <text x="224" y="48" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">3/4 − 1/3</text>
        <text x="224" y="68" text-anchor="middle" font-size="14" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">= 9/12−4/12=5/12</text>
      </svg>`,
      ketLuan: 'Trừ PS cùng mẫu: trừ tử, giữ mẫu. Khác mẫu: quy đồng rồi trừ tử.'
    }
  ]
};
const BAI_TAP_L5_CONG_TRU = [
  { id: 'l5ct_01', loai: 'trac_nghiem', cau: '2/7 + 3/7 = ?', dapAn: '5/7', luaChon: ['4/7','5/7','5/14','6/7'] },
  { id: 'l5ct_02', loai: 'trac_nghiem', cau: '1/2 + 1/3 = ?', dapAn: '5/6', luaChon: ['2/5','2/6','5/6','1/6'] },
  { id: 'l5ct_03', loai: 'trac_nghiem', cau: '5/8 − 3/8 = ?', dapAn: '1/4', luaChon: ['2/8','1/4','1/8','3/8'] },
  { id: 'l5ct_04', loai: 'trac_nghiem', cau: '3/4 − 1/3 = ?', dapAn: '5/12', luaChon: ['2/12','4/12','5/12','6/12'] },
  { id: 'l5ct_05', loai: 'trac_nghiem', cau: '1/4 + 1/2 + 1/4 = ?', dapAn: '1', luaChon: ['3/4','3/8','1','3/10'] },
  { id: 'l5ct_06', loai: 'trac_nghiem', cau: '5/6 − 1/2 = ?', dapAn: '1/3', luaChon: ['1/6','1/3','2/6','4/6'] },
  { id: 'l5ct_07', loai: 'dien_so', cau: '3/5 + 1/5 = ___/5', dapAn: 4, goiY: 'Cùng mẫu: cộng tử 3+1=4.' },
  { id: 'l5ct_08', loai: 'dien_so', cau: '1/3 + 1/6 = ___/6', dapAn: 3, goiY: '1/3=2/6, rồi 2/6+1/6=3/6.' },
  { id: 'l5ct_09', loai: 'dien_so', cau: '7/8 − 3/8 = ___/8', dapAn: 4, goiY: 'Cùng mẫu: trừ tử 7−3=4.' },
  { id: 'l5ct_10', loai: 'dien_so', cau: '2/3 − 1/4 = ___/12', dapAn: 5, goiY: '2/3=8/12, 1/4=3/12, 8−3=5.' },

  {id:'l5ct_11',loai:'dung_sai',cau:'1/4 + 3/4 = 1',dapAn:'Đúng',goiY:'(1+3)/4=4/4=1 ✓'},
  {id:'l5ct_12',loai:'dung_sai',cau:'1/2 + 1/4 = 3/4',dapAn:'Đúng',goiY:'2/4+1/4=3/4 ✓'},
  {id:'l5ct_13',loai:'dung_sai',cau:'3/5 − 1/5 = 2/10',dapAn:'Sai',goiY:'(3−1)/5=2/5, không phải 2/10'},
  {id:'l5ct_14',loai:'dung_sai',cau:'2/3 + 1/6 = 5/6',dapAn:'Đúng',goiY:'4/6+1/6=5/6 ✓'},
  {id:'l5ct_15',loai:'dung_sai',cau:'3/4 − 1/4 = 1/2',dapAn:'Đúng',goiY:'(3−1)/4=2/4=1/2 ✓'},
  {id:'l5ct_16',loai:'chon_nhieu',cau:'Phép tính nào có kết quả bằng 1?',dapAn:['3/4+1/4','1/3+2/3','2/5+3/5'],luaChon:['3/4+1/4','1/3+2/3','2/5+3/5','1/2+1/4']},
  {id:'l5ct_17',loai:'chon_nhieu',cau:'Phép tính nào cần quy đồng?',dapAn:['1/2+1/3','3/4−1/6','2/5+1/3'],luaChon:['1/2+1/3','3/4−1/4','3/4−1/6','2/5+1/3']},
  {id:'l5ct_18',loai:'chon_nhieu',cau:'Kết quả nào bằng 1/2?',dapAn:['3/4−1/4','2/6+1/6'],luaChon:['3/4−1/4','2/6+1/6','1/3+1/3','5/8−1/8']},
  {id:'l5ct_19',loai:'dien_so',cau:'5/8 − 1/4 = ___/8',dapAn:3,goiY:'1/4=2/8; 5/8−2/8=3/8'},
  {id:'l5ct_20',loai:'dien_so',cau:'1/2 + 1/3 + 1/6 = ___',dapAn:1,goiY:'3/6+2/6+1/6=6/6=1'},
];

// ============================================
// CHỦ ĐỀ 4: NHÂN & CHIA PHÂN SỐ
// ============================================
const BAI_GIANG_L5_NHAN_CHIA = {
  tieuDe: 'Nhân & Chia Phân Số', icon: '✖️', chuDe: 'nhan_chia_ps',
  cacPhan: [
    {
      tieuDe: '✖️ Nhân phân số',
      noiDung: `<strong>Nhân tử với tử, mẫu với mẫu</strong>:<br>
        a/b × c/d = (a×c)/(b×d)<br><br>
        Ví dụ: <strong>2/3 × 3/4</strong><br>
        = (2×3)/(3×4) = 6/12 = <strong>1/2</strong><br><br>
        💡 Mẹo: Rút gọn <em>chéo</em> trước khi nhân để số nhỏ hơn!<br>
        2/3 × 3/4 → 2 và 4 chia cho 2 → 1/3 × 3/2 = 3/6 = 1/2`,
      svg: `<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="76" rx="14" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="150" y="32" text-anchor="middle" font-size="15" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">2/3 × 3/4</text>
        <text x="150" y="52" text-anchor="middle" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">= (2×3)/(3×4) = 6/12</text>
        <text x="150" y="72" text-anchor="middle" font-size="15" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">= 1/2 ✓</text>
      </svg>`,
      ketLuan: 'Nhân PS: tử × tử, mẫu × mẫu. Rút gọn chéo trước khi nhân để đơn giản hơn.'
    },
    {
      tieuDe: '➗ Chia phân số',
      noiDung: `Chia cho một phân số = <strong>nhân với phân số đảo ngược</strong>:<br>
        a/b ÷ c/d = a/b × d/c<br><br>
        Ví dụ: <strong>2/3 ÷ 4/5</strong><br>
        = 2/3 × 5/4 = (2×5)/(3×4) = 10/12 = <strong>5/6</strong><br><br>
        Phân số đảo ngược (nghịch đảo):<br>
        Nghịch đảo của 3/4 là <strong>4/3</strong>`,
      svg: `<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="76" rx="14" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="14" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="800">2/3 ÷ 4/5</text>
        <text x="150" y="50" text-anchor="middle" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">= 2/3 × 5/4 (lật 4/5 thành 5/4)</text>
        <text x="150" y="72" text-anchor="middle" font-size="15" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">= 10/12 = 5/6 ✓</text>
      </svg>`,
      ketLuan: 'Chia PS: lật phân số chia (đảo tử mẫu) rồi nhân. a/b ÷ c/d = a/b × d/c.'
    },
    {
      tieuDe: '🔢 Nhân/Chia phân số với số tự nhiên',
      noiDung: `<strong>Nhân PS với số tự nhiên n</strong>:<br>
        a/b × n = (a×n)/b<br>
        Ví dụ: 3/4 × 8 = 24/4 = <strong>6</strong><br><br>
        <strong>Chia PS cho số tự nhiên n</strong>:<br>
        a/b ÷ n = a/(b×n)<br>
        Ví dụ: 3/4 ÷ 3 = 3/12 = <strong>1/4</strong><br><br>
        Hoặc: a/b ÷ n = a/b × 1/n`,
      svg: `<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="76" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="76" y="28" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">PS × số tự nhiên</text>
        <text x="76" y="48" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif">3/4 × 8</text>
        <text x="76" y="68" text-anchor="middle" font-size="14" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">= 24/4 = 6</text>
        <rect x="156" y="8" width="136" height="76" rx="12" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/>
        <text x="224" y="28" text-anchor="middle" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">PS ÷ số tự nhiên</text>
        <text x="224" y="48" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif">3/4 ÷ 3</text>
        <text x="224" y="68" text-anchor="middle" font-size="14" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">= 3/12 = 1/4</text>
      </svg>`,
      ketLuan: 'PS × n: nhân tử với n. PS ÷ n: nhân mẫu với n (hoặc nhân với 1/n).'
    }
  ]
};
const BAI_TAP_L5_NHAN_CHIA = [
  { id: 'l5nc_01', loai: 'trac_nghiem', cau: '2/3 × 3/4 = ?', dapAn: '1/2', luaChon: ['5/7','6/12','1/2','1/3'] },
  { id: 'l5nc_02', loai: 'trac_nghiem', cau: '3/4 × 8 = ?', dapAn: '6', luaChon: ['3','4','6','8'] },
  { id: 'l5nc_03', loai: 'trac_nghiem', cau: '2/3 ÷ 4/5 = ?', dapAn: '5/6', luaChon: ['8/15','5/6','2/3','4/5'] },
  { id: 'l5nc_04', loai: 'trac_nghiem', cau: '1/2 × 2/3 × 3/4 = ?', dapAn: '1/4', luaChon: ['6/24','1/4','1/3','1/8'] },
  { id: 'l5nc_05', loai: 'trac_nghiem', cau: '5/6 ÷ 5 = ?', dapAn: '1/6', luaChon: ['1/5','1/6','5/30','1/30'] },
  { id: 'l5nc_06', loai: 'trac_nghiem', cau: 'Nghịch đảo của 3/7 là?', dapAn: '7/3', luaChon: ['3/7','7/3','1/3','3'] },
  { id: 'l5nc_07', loai: 'dien_so', cau: '3/5 × 10 = ___', dapAn: 6, goiY: '(3×10)/5 = 30/5 = ?' },
  { id: 'l5nc_08', loai: 'dien_so', cau: '4/5 ÷ 2 = ___/10', dapAn: 4, goiY: '4/5 ÷ 2 = 4/10 → tử là 4.' },
  { id: 'l5nc_09', loai: 'dien_so', cau: '1/3 × 1/4 = 1/___', dapAn: 12, goiY: '(1×1)/(3×4) = 1/12.' },
  { id: 'l5nc_10', loai: 'dien_so', cau: '2/3 ÷ 1/3 = ___', dapAn: 2, goiY: '2/3 × 3/1 = 6/3 = 2.' },

  {id:'l5nc_11',loai:'dung_sai',cau:'3/4 × 4/3 = 1',dapAn:'Đúng',goiY:'(3×4)/(4×3)=12/12=1 ✓'},
  {id:'l5nc_12',loai:'dung_sai',cau:'2/5 × 5 = 2',dapAn:'Đúng',goiY:'(2×5)/5=10/5=2 ✓'},
  {id:'l5nc_13',loai:'dung_sai',cau:'3/4 ÷ 3/4 = 1',dapAn:'Đúng',goiY:'3/4×4/3=12/12=1 ✓'},
  {id:'l5nc_14',loai:'dung_sai',cau:'Chia PS cho số tự nhiên n = nhân PS với 1/n',dapAn:'Đúng',goiY:'a/b÷n = a/b×1/n = a/(b×n) ✓'},
  {id:'l5nc_15',loai:'dung_sai',cau:'2/3 × 3/2 = 2/3',dapAn:'Sai',goiY:'2/3×3/2=6/6=1, không phải 2/3'},
  {id:'l5nc_16',loai:'chon_nhieu',cau:'Nghịch đảo của số nào bằng chính nó?',dapAn:['1'],luaChon:['1','2','1/2','3/4']},
  {id:'l5nc_17',loai:'chon_nhieu',cau:'Phép tính nào cho kết quả là số nguyên?',dapAn:['3/4×8','5/6×12','2/3×9'],luaChon:['3/4×8','5/6×12','2/3×9','3/5×4']},
  {id:'l5nc_18',loai:'chon_nhieu',cau:'Kết quả nào bằng 1/2?',dapAn:['1/4×2','3/4÷3/2'],luaChon:['1/4×2','1/3×3','3/4÷3/2','2/3÷4/3']},
  {id:'l5nc_19',loai:'dien_so',cau:'5/6 × 12 = ___',dapAn:10,goiY:'(5×12)/6=60/6=10'},
  {id:'l5nc_20',loai:'dien_so',cau:'3/8 ÷ 3 = ___/8',dapAn:1,goiY:'3/8÷3=3/24=1/8, tử là 1'},
];

// ============================================
// CHỦ ĐỀ 5: SỐ THẬP PHÂN
// ============================================
const BAI_GIANG_L5_THAP_PHAN = {
  tieuDe: 'Số Thập Phân', icon: '🔣', chuDe: 'so_thap_phan',
  cacPhan: [
    {
      tieuDe: '🔣 Đọc và viết số thập phân',
      noiDung: `Số thập phân gồm <strong>phần nguyên</strong> và <strong>phần thập phân</strong> ngăn bởi dấu phẩy.<br><br>
        <strong>3,14</strong>: phần nguyên là 3, phần thập phân là 14 phần trăm<br>
        Đọc: "ba phẩy một bốn"<br><br>
        Hàng giá trị:<br>
        …| chục | đơn vị <strong>,</strong> phần mười | phần trăm | phần nghìn |…<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 &nbsp;&nbsp;&nbsp;<strong>,</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7`,
      svg: `<svg viewBox="0 0 300 100" width="285" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="18" width="58" height="64" rx="10" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="34" y="44" text-anchor="middle" font-size="22" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">5</text>
        <text x="34" y="72" text-anchor="middle" font-size="9" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">chục</text>
        <rect x="72" y="18" width="58" height="64" rx="10" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/>
        <text x="101" y="44" text-anchor="middle" font-size="22" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="900">3</text>
        <text x="101" y="72" text-anchor="middle" font-size="9" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">đơn vị</text>
        <text x="140" y="58" text-anchor="middle" font-size="28" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">,</text>
        <rect x="152" y="18" width="44" height="64" rx="10" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="174" y="44" text-anchor="middle" font-size="22" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">1</text>
        <text x="174" y="62" text-anchor="middle" font-size="8" fill="#008060" font-family="Nunito,sans-serif" font-weight="700">phần</text>
        <text x="174" y="74" text-anchor="middle" font-size="8" fill="#008060" font-family="Nunito,sans-serif" font-weight="700">mười</text>
        <rect x="204" y="18" width="44" height="64" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="226" y="44" text-anchor="middle" font-size="22" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">4</text>
        <text x="226" y="62" text-anchor="middle" font-size="8" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">phần</text>
        <text x="226" y="74" text-anchor="middle" font-size="8" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">trăm</text>
        <rect x="256" y="18" width="40" height="64" rx="10" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/>
        <text x="276" y="44" text-anchor="middle" font-size="22" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="900">7</text>
        <text x="276" y="62" text-anchor="middle" font-size="8" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="700">phần</text>
        <text x="276" y="74" text-anchor="middle" font-size="8" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="700">nghìn</text>
      </svg>`,
      ketLuan: '53,147: phần nguyên là 53, phần thập phân là 0,147. Đọc: "năm mươi ba phẩy một bốn bảy".'
    },
    {
      tieuDe: '➕ Cộng, trừ số thập phân',
      noiDung: `Cộng/trừ số thập phân: <strong>thẳng hàng dấu phẩy</strong>!<br><br>
        Ví dụ: <strong>12,35 + 4,8</strong><br>
        12,35<br>
        + &nbsp;4,80 (thêm 0 để bằng số chữ số thập phân)<br>
        ──────<br>
        17,15<br><br>
        Quy tắc: viết dấu phẩy thẳng cột, cộng/trừ bình thường.`,
      svg: `<svg viewBox="0 0 220 110" width="210" height="110" xmlns="http://www.w3.org/2000/svg">
        <text x="180" y="36" text-anchor="end" font-size="22" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">12,35</text>
        <text x="16" y="36" font-size="18" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="900">+</text>
        <text x="180" y="64" text-anchor="end" font-size="22" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="900">4,80</text>
        <line x1="12" y1="72" x2="195" y2="72" stroke="#2d2d2d" stroke-width="2.5"/>
        <text x="180" y="100" text-anchor="end" font-size="22" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">17,15</text>
        <text x="100" y="110" text-anchor="middle" font-size="10" fill="#6b6b6b" font-family="Nunito,sans-serif">Dấu phẩy thẳng cột!</text>
      </svg>`,
      ketLuan: 'Dấu phẩy thẳng cột. Thêm số 0 nếu cần. Cộng/trừ bình thường từ phải sang trái.'
    },
    {
      tieuDe: '✖️➗ Nhân, chia số thập phân',
      noiDung: `<strong>Nhân với 10, 100, 1000</strong>: dịch dấu phẩy sang phải<br>
        2,35 × 10 = <strong>23,5</strong> (dịch 1 chỗ)<br>
        2,35 × 100 = <strong>235</strong> (dịch 2 chỗ)<br><br>
        <strong>Chia cho 10, 100, 1000</strong>: dịch dấu phẩy sang trái<br>
        235 ÷ 10 = <strong>23,5</strong><br>
        235 ÷ 100 = <strong>2,35</strong>`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="74" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="76" y="28" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">Nhân 10/100 → phải</text>
        <text x="76" y="48" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">2,35 × 10 = 23,5</text>
        <text x="76" y="68" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">2,35 × 100 = 235</text>
        <rect x="156" y="8" width="136" height="74" rx="12" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/>
        <text x="224" y="28" text-anchor="middle" font-size="11" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">Chia 10/100 → trái</text>
        <text x="224" y="48" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">235 ÷ 10 = 23,5</text>
        <text x="224" y="68" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">235 ÷ 100 = 2,35</text>
      </svg>`,
      ketLuan: 'Nhân 10/100: dịch phẩy phải 1/2 chỗ. Chia 10/100: dịch phẩy trái 1/2 chỗ.'
    }
  ]
};
const BAI_TAP_L5_THAP_PHAN = [
  { id: 'l5tp_01', loai: 'trac_nghiem', cau: 'Số 3,14: chữ số hàng phần trăm là?', dapAn: '4', luaChon: ['3','1','4','14'] },
  { id: 'l5tp_02', loai: 'trac_nghiem', cau: '12,35 + 4,8 = ?', dapAn: '17,15', luaChon: ['16,15','17,15','17,25','17,35'] },
  { id: 'l5tp_03', loai: 'trac_nghiem', cau: '8,6 − 3,45 = ?', dapAn: '5,15', luaChon: ['5,05','5,15','5,25','5,35'] },
  { id: 'l5tp_04', loai: 'trac_nghiem', cau: '2,35 × 10 = ?', dapAn: '23,5', luaChon: ['2,350','23,5','235','2350'] },
  { id: 'l5tp_05', loai: 'trac_nghiem', cau: '47,5 ÷ 100 = ?', dapAn: '0,475', luaChon: ['4,75','0,475','47,5','475'] },
  { id: 'l5tp_06', loai: 'trac_nghiem', cau: 'Số nào lớn hơn: 3,07 hay 3,7?', dapAn: '3,7', luaChon: ['3,07','3,7','Bằng nhau','Không so được'] },
  { id: 'l5tp_07', loai: 'dien_so', cau: '5,6 + 3,75 = ___', dapAn: 9.35, goiY: '5,60 + 3,75 = ? (thẳng cột dấu phẩy)' },
  { id: 'l5tp_08', loai: 'dien_so', cau: '12,5 × 100 = ___', dapAn: 1250, goiY: 'Dịch dấu phẩy sang phải 2 chỗ.' },
  { id: 'l5tp_09', loai: 'dien_so', cau: '9,45 − 3,2 = ___', dapAn: 6.25, goiY: '9,45 − 3,20 = ? (thêm số 0)' },
  { id: 'l5tp_10', loai: 'dien_so', cau: '360 ÷ 1000 = ___', dapAn: 0.36, goiY: 'Dịch dấu phẩy sang trái 3 chỗ: 0,360 = 0,36.' },

  {id:'l5tp_11',loai:'dung_sai',cau:'3,07 < 3,7',dapAn:'Đúng',goiY:'Phần mười: 0 < 7 → 3,07 < 3,7 ✓'},
  {id:'l5tp_12',loai:'dung_sai',cau:'2,5 × 10 = 25',dapAn:'Đúng',goiY:'Dịch phẩy phải 1 chỗ: 25,0 ✓'},
  {id:'l5tp_13',loai:'dung_sai',cau:'0,25 = 25%',dapAn:'Đúng',goiY:'0,25 = 25/100 = 25% ✓'},
  {id:'l5tp_14',loai:'dung_sai',cau:'12,5 − 3,75 = 8,75',dapAn:'Đúng',goiY:'12,50−3,75=8,75 ✓'},
  {id:'l5tp_15',loai:'dung_sai',cau:'Nhân số thập phân với 100: thêm 2 chữ số 0',dapAn:'Sai',goiY:'Dịch dấu phẩy phải 2 chỗ, không phải thêm số 0'},
  {id:'l5tp_16',loai:'chon_nhieu',cau:'Số nào bằng 0,5?',dapAn:['1/2','5/10','50/100'],luaChon:['1/2','5/10','5/100','50/100']},
  {id:'l5tp_17',loai:'chon_nhieu',cau:'Số nào lớn hơn 1,5?',dapAn:['1,6','2,0','1,51'],luaChon:['1,49','1,6','2,0','1,51']},
  {id:'l5tp_18',loai:'chon_nhieu',cau:'Phép tính nào cho kết quả là số nguyên?',dapAn:['2,5×4','3,75×8'],luaChon:['2,5×4','3,75×8','1,3×5','2,7×3']},
  {id:'l5tp_19',loai:'dien_so',cau:'4,75 + 2,25 = ___',dapAn:7,goiY:'4,75+2,25=7,00=7'},
  {id:'l5tp_20',loai:'dien_so',cau:'1,2 × 1,5 = ___',dapAn:1.8,goiY:'12×15=180, đặt 2 chữ số thập phân: 1,80=1,8'},
];

// ============================================
// CHỦ ĐỀ 6: TỈ SỐ & PHẦN TRĂM
// ============================================
const BAI_GIANG_L5_TI_SO = {
  tieuDe: 'Tỉ số & Phần Trăm', icon: '📊', chuDe: 'ti_so_phan_tram',
  cacPhan: [
    {
      tieuDe: '📊 Tỉ số là gì?',
      noiDung: `<strong>Tỉ số</strong> của a và b (b≠0) là a/b hoặc a:b<br><br>
        Ví dụ: Lớp có 20 nam và 15 nữ.<br>
        Tỉ số nam:nữ = 20:15 = <strong>4:3</strong> (rút gọn)<br>
        Tỉ số nữ:nam = 15:20 = <strong>3:4</strong><br><br>
        Tỉ số khác phân số: tỉ số so sánh hai đại lượng,<br>
        không cần cùng đơn vị.`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="74" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="76" y="28" text-anchor="middle" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">Nam : Nữ</text>
        <text x="76" y="52" text-anchor="middle" font-size="20" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">20 : 15</text>
        <text x="76" y="72" text-anchor="middle" font-size="14" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">= 4 : 3</text>
        <rect x="156" y="8" width="136" height="74" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="224" y="28" text-anchor="middle" font-size="11" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">Nữ : Nam</text>
        <text x="224" y="52" text-anchor="middle" font-size="20" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">15 : 20</text>
        <text x="224" y="72" text-anchor="middle" font-size="14" fill="#008060" font-family="Nunito,sans-serif" font-weight="700">= 3 : 4</text>
      </svg>`,
      ketLuan: 'Tỉ số a:b = a/b. Rút gọn bằng cách chia cả hai cho ƯCLN. Thứ tự quan trọng!'
    },
    {
      tieuDe: '📈 Phần trăm (%)',
      noiDung: `<strong>Phần trăm</strong>: tỉ số với mẫu là 100.<br>
        a% = a/100<br><br>
        Ví dụ:<br>
        25% = 25/100 = 1/4<br>
        0,3 = 30%<br>
        3/4 = 75%<br><br>
        Chuyển đổi:<br>
        Phân số → %: nhân với 100<br>
        % → phân số: chia cho 100`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="74" rx="14" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">Chuyển đổi qua lại</text>
        <text x="150" y="50" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">1/4 = 0,25 = 25%</text>
        <text x="150" y="68" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">3/5 = 0,6 = 60%</text>
      </svg>`,
      ketLuan: 'a% = a/100. Phân số→%: nhân 100. %→phân số: chia 100, rút gọn.'
    },
    {
      tieuDe: '🧮 Tìm phần trăm của một số',
      noiDung: `Tìm <strong>a%</strong> của số <strong>b</strong>:<br>
        Kết quả = b × a/100 = b × a ÷ 100<br><br>
        Ví dụ: Tìm 20% của 350<br>
        = 350 × 20 ÷ 100 = 7.000 ÷ 100 = <strong>70</strong><br><br>
        Ứng dụng thực tế:<br>
        Giảm giá 30% áo 200.000đ → giảm = 60.000đ<br>
        Giá sau giảm = 200.000 − 60.000 = <strong>140.000đ</strong>`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="74" rx="14" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="13" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">Tìm 20% của 350</text>
        <text x="150" y="50" text-anchor="middle" font-size="13" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">= 350 × 20 ÷ 100</text>
        <text x="150" y="70" text-anchor="middle" font-size="16" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="900">= 70 ✓</text>
      </svg>`,
      ketLuan: 'a% của b = b × a ÷ 100. Học thuộc: 10%=÷10, 25%=÷4, 50%=÷2.'
    }
  ]
};
const BAI_TAP_L5_TI_SO = [
  { id: 'l5ts_01', loai: 'trac_nghiem', cau: 'Tỉ số 18:12 rút gọn bằng?', dapAn: '3:2', luaChon: ['6:4','3:2','9:6','2:3'] },
  { id: 'l5ts_02', loai: 'trac_nghiem', cau: '25% bằng phân số nào?', dapAn: '1/4', luaChon: ['1/2','1/3','1/4','1/5'] },
  { id: 'l5ts_03', loai: 'trac_nghiem', cau: 'Tìm 10% của 350?', dapAn: '35', luaChon: ['3,5','35','3500','350'] },
  { id: 'l5ts_04', loai: 'trac_nghiem', cau: '3/4 bằng bao nhiêu phần trăm?', dapAn: '75%', luaChon: ['25%','50%','70%','75%'] },
  { id: 'l5ts_05', loai: 'trac_nghiem', cau: 'Tìm 30% của 200?', dapAn: '60', luaChon: ['6','60','600','30'] },
  { id: 'l5ts_06', loai: 'trac_nghiem', cau: '0,6 = ?%', dapAn: '60%', luaChon: ['6%','0,6%','60%','600%'] },
  { id: 'l5ts_07', loai: 'dien_so', cau: 'Tỉ số 24:16 rút gọn: số hạng thứ nhất là ___', dapAn: 3, goiY: 'ƯCLN(24,16)=8. 24÷8=3, 16÷8=2 → 3:2.' },
  { id: 'l5ts_08', loai: 'dien_so', cau: '40% của 150 = ___', dapAn: 60, goiY: '150 × 40 ÷ 100 = ?' },
  { id: 'l5ts_09', loai: 'dien_so', cau: '1/5 = ___% ', dapAn: 20, goiY: '1/5 × 100 = 100÷5 = ?' },
  { id: 'l5ts_10', loai: 'dien_so', cau: 'Giảm giá 20% áo 300.000đ → giá sau giảm là ___đ', dapAn: 240000, goiY: 'Giảm = 300.000×20÷100=60.000đ. Còn = 300.000−60.000.' },

  {id:'l5ts_11',loai:'dung_sai',cau:'50% = 1/2',dapAn:'Đúng',goiY:'50/100=1/2 ✓'},
  {id:'l5ts_12',loai:'dung_sai',cau:'Tỉ số 15:25 rút gọn bằng 3:5',dapAn:'Đúng',goiY:'ƯCLN(15,25)=5. 15÷5=3, 25÷5=5 ✓'},
  {id:'l5ts_13',loai:'dung_sai',cau:'25% của 200 = 50',dapAn:'Đúng',goiY:'200×25÷100=50 ✓'},
  {id:'l5ts_14',loai:'dung_sai',cau:'Tỉ số 4:3 khác tỉ số 3:4',dapAn:'Đúng',goiY:'4:3≠3:4 vì thứ tự quan trọng'},
  {id:'l5ts_15',loai:'dung_sai',cau:'0,75 = 75%',dapAn:'Đúng',goiY:'0,75×100=75 → 75% ✓'},
  {id:'l5ts_16',loai:'chon_nhieu',cau:'Phần trăm nào bằng 1/4?',dapAn:['25%'],luaChon:['20%','25%','40%','50%']},
  {id:'l5ts_17',loai:'chon_nhieu',cau:'Số nào bằng 30% của 200?',dapAn:['60'],luaChon:['30','60','600','20']},
  {id:'l5ts_18',loai:'chon_nhieu',cau:'Tỉ số nào tương đương 2:3?',dapAn:['4:6','6:9','10:15'],luaChon:['4:6','6:9','10:15','2:5']},
  {id:'l5ts_19',loai:'dien_so',cau:'60% của 250 = ___',dapAn:150,goiY:'250×60÷100=?'},
  {id:'l5ts_20',loai:'dien_so',cau:'Số học sinh nữ là 18, chiếm 45% lớp. Lớp có ___ HS',dapAn:40,goiY:'Lớp = 18×100÷45 = ?'},
];

// ============================================
// CHỦ ĐỀ 7: HÌNH HỌC LỚP 5
// ============================================
const BAI_GIANG_L5_HINH_HOC = {
  tieuDe: 'Hình Học', icon: '📐', chuDe: 'hinh_hoc',
  cacPhan: [
    {
      tieuDe: '🔺 Diện tích tam giác',
      noiDung: `<strong>Diện tích tam giác</strong> = đáy × chiều cao ÷ 2<br>
        S = (a × h) / 2<br><br>
        Trong đó:<br>
        <strong>a</strong> = độ dài đáy (cạnh bất kỳ)<br>
        <strong>h</strong> = chiều cao tương ứng (vuông góc với đáy)<br><br>
        Ví dụ: Đáy 8cm, cao 5cm<br>
        S = (8 × 5) / 2 = 40/2 = <strong>20 cm²</strong>`,
      svg: `<svg viewBox="0 0 300 110" width="285" height="110" xmlns="http://www.w3.org/2000/svg">
        <polygon points="30,100 230,100 130,20" fill="#fff3eb" stroke="#ff6b35" stroke-width="3"/>
        <line x1="130" y1="20" x2="130" y2="100" stroke="#ff6b35" stroke-width="2" stroke-dasharray="5,4"/>
        <text x="138" y="65" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">h=5</text>
        <text x="110" y="112" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">a = 8 cm</text>
        <rect x="126" y="96" width="8" height="8" fill="none" stroke="#ff6b35" stroke-width="1.5"/>
        <text x="240" y="60" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">S = a×h÷2</text>
        <text x="240" y="80" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">= 8×5÷2</text>
        <text x="240" y="100" font-size="14" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">= 20 cm²</text>
      </svg>`,
      ketLuan: 'S tam giác = đáy × chiều cao ÷ 2. Chiều cao vuông góc với đáy tương ứng.'
    },
    {
      tieuDe: '⬡ Diện tích hình thang',
      noiDung: `<strong>Hình thang</strong>: có 2 cạnh song song (đáy lớn và đáy nhỏ).<br><br>
        <strong>Diện tích</strong> = (đáy lớn + đáy nhỏ) × chiều cao ÷ 2<br>
        S = (a + b) × h / 2<br><br>
        Ví dụ: Đáy lớn 10cm, đáy nhỏ 6cm, cao 4cm<br>
        S = (10+6) × 4 ÷ 2 = 16 × 4 ÷ 2 = <strong>32 cm²</strong>`,
      svg: `<svg viewBox="0 0 300 110" width="285" height="110" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,100 250,100 210,20 90,20" fill="#f3f0ff" stroke="#7c4dff" stroke-width="3"/>
        <line x1="150" y1="20" x2="150" y2="100" stroke="#7c4dff" stroke-width="2" stroke-dasharray="5,4"/>
        <text x="158" y="65" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">h=4</text>
        <text x="150" y="15" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">đáy nhỏ b=6</text>
        <text x="150" y="112" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif" font-weight="700">đáy lớn a=10</text>
        <rect x="146" y="96" width="8" height="8" fill="none" stroke="#7c4dff" stroke-width="1.5"/>
        <text x="260" y="55" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">(10+6)×4÷2</text>
        <text x="260" y="72" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">= 32 cm²</text>
      </svg>`,
      ketLuan: 'S hình thang = (đáy lớn + đáy nhỏ) × chiều cao ÷ 2.'
    },
    {
      tieuDe: '🧊 Diện tích và thể tích hình hộp chữ nhật',
      noiDung: `<strong>Hình hộp chữ nhật</strong> (cuboid): dài × rộng × cao<br><br>
        <strong>Thể tích</strong> = dài × rộng × cao<br>
        V = a × b × c (đơn vị: cm³, m³)<br><br>
        Ví dụ: Hộp dài 5cm, rộng 4cm, cao 3cm<br>
        V = 5 × 4 × 3 = <strong>60 cm³</strong><br><br>
        <strong>Diện tích xung quanh</strong> = chu vi đáy × chiều cao`,
      svg: `<svg viewBox="0 0 300 105" width="285" height="105" xmlns="http://www.w3.org/2000/svg">
        <polygon points="40,80 160,80 160,30 40,30" fill="#fffbe6" stroke="#ffd166" stroke-width="2.5"/>
        <polygon points="160,30 200,10 200,60 160,80" fill="#ffeeba" stroke="#ffd166" stroke-width="2.5"/>
        <polygon points="40,30 80,10 200,10 160,30" fill="#fff3d6" stroke="#ffd166" stroke-width="2.5"/>
        <line x1="40" y1="80" x2="80" y2="60" stroke="#ffd166" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="80" y1="60" x2="200" y2="60" stroke="#ffd166" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="80" y1="10" x2="80" y2="60" stroke="#ffd166" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="100" y="60" text-anchor="middle" font-size="11" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">a=5</text>
        <text x="175" y="50" font-size="11" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">b=4</text>
        <text x="32" y="58" font-size="11" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="700">c=3</text>
        <text x="240" y="40" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">V = 5×4×3</text>
        <text x="240" y="60" font-size="14" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="900">= 60 cm³</text>
      </svg>`,
      ketLuan: 'Thể tích hình hộp chữ nhật = dài × rộng × cao. Đơn vị: cm³ hoặc m³.'
    }
  ]
};
const BAI_TAP_L5_HINH_HOC = [
  { id: 'l5hh_01', loai: 'trac_nghiem', cau: 'Tam giác đáy 10cm, cao 6cm. Diện tích là?', dapAn: '30cm²', luaChon: ['60cm²','30cm²','15cm²','120cm²'] },
  { id: 'l5hh_02', loai: 'trac_nghiem', cau: 'Hình thang: đáy lớn 12, đáy nhỏ 8, cao 5. S = ?', dapAn: '50cm²', luaChon: ['40cm²','50cm²','60cm²','100cm²'] },
  { id: 'l5hh_03', loai: 'trac_nghiem', cau: 'Hình hộp chữ nhật 5×4×3. Thể tích là?', dapAn: '60cm³', luaChon: ['47cm³','60cm³','120cm³','240cm³'] },
  { id: 'l5hh_04', loai: 'trac_nghiem', cau: 'Hình tròn bán kính 7cm. Diện tích ≈ ? (π≈3,14)', dapAn: '153,86cm²', luaChon: ['43,96cm²','153,86cm²','44cm²','314cm²'] },
  { id: 'l5hh_05', loai: 'trac_nghiem', cau: 'Tam giác vuông cạnh góc vuông 6cm và 8cm. Diện tích là?', dapAn: '24cm²', luaChon: ['14cm²','24cm²','48cm²','96cm²'] },
  { id: 'l5hh_06', loai: 'trac_nghiem', cau: 'Hình hộp 10×5×4. Thể tích là?', dapAn: '200cm³', luaChon: ['190cm³','200cm³','220cm³','400cm³'] },
  { id: 'l5hh_07', loai: 'dien_so', cau: 'Tam giác đáy 14cm, cao 8cm. S = ___ cm²', dapAn: 56, goiY: 'S = 14×8÷2 = ?' },
  { id: 'l5hh_08', loai: 'dien_so', cau: 'Hình thang: đáy lớn 15, đáy nhỏ 9, cao 6. S = ___ cm²', dapAn: 72, goiY: 'S = (15+9)×6÷2 = ?' },
  { id: 'l5hh_09', loai: 'dien_so', cau: 'Hình hộp 6×5×4. V = ___ cm³', dapAn: 120, goiY: 'V = 6×5×4 = ?' },
  { id: 'l5hh_10', loai: 'dien_so', cau: 'Tam giác đáy 20cm cao 9cm. S = ___ cm²', dapAn: 90, goiY: 'S = 20×9÷2 = ?' },

  {id:'l5hh_11',loai:'dung_sai',cau:'S tam giác = (đáy × chiều cao) ÷ 2',dapAn:'Đúng',goiY:'Công thức S=(a×h)÷2 ✓'},
  {id:'l5hh_12',loai:'dung_sai',cau:'Hình thang có 2 cạnh song song',dapAn:'Đúng',goiY:'Đáy lớn và đáy nhỏ song song ✓'},
  {id:'l5hh_13',loai:'dung_sai',cau:'Thể tích hình hộp CN = dài × rộng × cao',dapAn:'Đúng',goiY:'V=a×b×c ✓'},
  {id:'l5hh_14',loai:'dung_sai',cau:'Tam giác đáy 6cm cao 4cm có S=12cm²',dapAn:'Đúng',goiY:'S=6×4÷2=12cm² ✓'},
  {id:'l5hh_15',loai:'dung_sai',cau:'Hình vuông cạnh 5cm có thể tích 125cm³',dapAn:'Sai',goiY:'Hình vuông là 2D, không có thể tích. Đó là hình lập phương.'},
  {id:'l5hh_16',loai:'chon_nhieu',cau:'Hình nào có diện tích = đáy × chiều cao ÷ 2?',dapAn:['Tam giác','Hình thang'],luaChon:['Tam giác','Hình vuông','Hình thang','Hình tròn']},
  {id:'l5hh_17',loai:'chon_nhieu',cau:'Diện tích nào bằng 40cm²?',dapAn:['Tam giác đáy 10 cao 8','HCN 8×5'],luaChon:['Tam giác đáy 10 cao 8','HCN 8×5','HV cạnh 6','Tam giác đáy 8 cao 8']},
  {id:'l5hh_18',loai:'chon_nhieu',cau:'Thể tích nào bằng 60cm³?',dapAn:['HH 5×4×3','HH 6×2×5'],luaChon:['HH 5×4×3','HH 6×2×5','HH 4×4×4','HH 3×3×3']},
  {id:'l5hh_19',loai:'dien_so',cau:'Hình thang: đáy lớn 18, đáy nhỏ 12, cao 8. S = ___ cm²',dapAn:120,goiY:'S=(18+12)×8÷2=?'},
  {id:'l5hh_20',loai:'dien_so',cau:'Hình hộp CN: V=120cm³, dài=6, rộng=4. Cao = ___ cm',dapAn:5,goiY:'Cao=V÷(dài×rộng)=120÷24=?'},
];

// ============================================
// CHỦ ĐỀ 8: TOÁN CHUYỂN ĐỘNG
// ============================================
const BAI_GIANG_L5_CHUYEN_DONG = {
  tieuDe: 'Toán Chuyển Động', icon: '🚂', chuDe: 'chuyen_dong',
  cacPhan: [
    {
      tieuDe: '🚂 Ba đại lượng: S, V, T',
      noiDung: `Trong chuyển động đều có 3 đại lượng:<br><br>
        🚗 <strong>S</strong> = quãng đường (km, m)<br>
        ⚡ <strong>V</strong> = vận tốc (km/h, m/s)<br>
        ⏱️ <strong>T</strong> = thời gian (giờ, phút, giây)<br><br>
        Công thức:<br>
        <strong>S = V × T</strong><br>
        <strong>V = S ÷ T</strong><br>
        <strong>T = S ÷ V</strong>`,
      svg: `<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="76" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="18" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">S = V × T</text>
        <text x="80" y="55" text-anchor="middle" font-size="14" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">V = S ÷ T</text>
        <text x="220" y="55" text-anchor="middle" font-size="14" fill="#06d6a0" font-family="Nunito,sans-serif" font-weight="800">T = S ÷ V</text>
        <text x="150" y="76" text-anchor="middle" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">Biết 2 trong 3 → tìm được đại lượng còn lại</text>
      </svg>`,
      ketLuan: 'S=V×T · V=S÷T · T=S÷V. Nhớ: Quãng = Vận tốc × Thời gian.'
    },
    {
      tieuDe: '🚂🚃 Hai chuyển động ngược chiều',
      noiDung: `Hai vật đi ngược chiều lại gần nhau:<br>
        <strong>Vận tốc gặp nhau</strong> = V₁ + V₂<br>
        <strong>Thời gian gặp nhau</strong> = S ÷ (V₁ + V₂)<br><br>
        Ví dụ: A và B cách nhau 180km.<br>
        A đi 60km/h, B đi 40km/h, cùng lúc, ngược chiều.<br>
        Gặp nhau sau: 180 ÷ (60+40) = 180 ÷ 100 = <strong>1,8 giờ</strong>`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <text x="30" y="30" font-size="18">🏃</text>
        <text x="240" y="30" font-size="18">🏃</text>
        <line x1="55" y1="22" x2="240" y2="22" stroke="#e0e0e0" stroke-width="3"/>
        <text x="150" y="18" text-anchor="middle" font-size="11" fill="#6b6b6b" font-family="Nunito,sans-serif">180 km</text>
        <text x="65" y="44" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">60km/h →</text>
        <text x="175" y="44" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">← 40km/h</text>
        <rect x="8" y="54" width="284" height="30" rx="10" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="150" y="74" text-anchor="middle" font-size="13" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">T = 180÷(60+40) = 1,8 giờ</text>
      </svg>`,
      ketLuan: 'Ngược chiều: cộng vận tốc. T=S÷(V₁+V₂). Cùng chiều: trừ vận tốc.'
    },
    {
      tieuDe: '🔄 Hai chuyển động cùng chiều',
      noiDung: `Hai vật cùng chiều, xuất phát cùng lúc, A nhanh hơn B:<br>
        <strong>Vận tốc đuổi kịp</strong> = V_A − V_B<br>
        <strong>Thời gian đuổi kịp</strong> = S ÷ (V_A − V_B)<br><br>
        Ví dụ: A và B cách nhau 30km, cùng chiều.<br>
        A: 80km/h, B: 50km/h.<br>
        T = 30 ÷ (80−50) = 30 ÷ 30 = <strong>1 giờ</strong>`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <text x="20" y="30" font-size="18">🚗</text>
        <text x="80" y="30" font-size="18">🚙</text>
        <line x1="20" y1="22" x2="280" y2="22" stroke="#e0e0e0" stroke-width="3"/>
        <text x="50" y="14" text-anchor="middle" font-size="10" fill="#6b6b6b" font-family="Nunito,sans-serif">30km</text>
        <text x="30" y="44" font-size="11" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="700">A: 80km/h</text>
        <text x="88" y="44" font-size="11" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="700">B: 50km/h</text>
        <rect x="8" y="54" width="284" height="30" rx="10" fill="#fff0f4" stroke="#ef476f" stroke-width="2"/>
        <text x="150" y="74" text-anchor="middle" font-size="13" fill="#ef476f" font-family="Nunito,sans-serif" font-weight="800">T = 30÷(80−50) = 1 giờ</text>
      </svg>`,
      ketLuan: 'Cùng chiều đuổi kịp: V_đuổi = V_nhanh − V_chậm. T = khoảng cách ÷ V_đuổi.'
    }
  ]
};
const BAI_TAP_L5_CHUYEN_DONG = [
  { id: 'l5cd_01', loai: 'trac_nghiem', cau: 'Xe đi V=60km/h trong T=3giờ. Quãng đường là?', dapAn: '180km', luaChon: ['120km','160km','180km','200km'] },
  { id: 'l5cd_02', loai: 'trac_nghiem', cau: 'S=240km, T=4giờ. Vận tốc là?', dapAn: '60km/h', luaChon: ['40km/h','50km/h','60km/h','80km/h'] },
  { id: 'l5cd_03', loai: 'trac_nghiem', cau: 'S=300km, V=75km/h. Thời gian là?', dapAn: '4 giờ', luaChon: ['3 giờ','4 giờ','5 giờ','6 giờ'] },
  { id: 'l5cd_04', loai: 'trac_nghiem', cau: 'A và B cách nhau 200km, ngược chiều. V_A=70, V_B=30. Gặp nhau sau bao lâu?', dapAn: '2 giờ', luaChon: ['1 giờ','2 giờ','3 giờ','4 giờ'] },
  { id: 'l5cd_05', loai: 'trac_nghiem', cau: 'Người đi bộ V=5km/h, T=2,5giờ. Quãng đường là?', dapAn: '12,5km', luaChon: ['10km','12km','12,5km','15km'] },
  { id: 'l5cd_06', loai: 'trac_nghiem', cau: 'Cùng chiều: A đuổi B, A:90km/h, B:60km/h, cách 60km. Đuổi kịp sau?', dapAn: '2 giờ', luaChon: ['1 giờ','2 giờ','3 giờ','4 giờ'] },
  { id: 'l5cd_07', loai: 'dien_so', cau: 'V=45km/h, T=4giờ. S = ___ km', dapAn: 180, goiY: 'S = V × T = 45 × 4 = ?' },
  { id: 'l5cd_08', loai: 'dien_so', cau: 'S=360km, V=90km/h. T = ___ giờ', dapAn: 4, goiY: 'T = S ÷ V = 360 ÷ 90 = ?' },
  { id: 'l5cd_09', loai: 'dien_so', cau: 'S=150km, T=2,5giờ. V = ___ km/h', dapAn: 60, goiY: 'V = S ÷ T = 150 ÷ 2,5 = ?' },
  { id: 'l5cd_10', loai: 'dien_so', cau: 'Ngược chiều: V₁=55, V₂=45, S=300km. Gặp nhau sau ___ giờ', dapAn: 3, goiY: 'T = 300÷(55+45) = 300÷100 = ?' },

  {id:'l5cd_11',loai:'dung_sai',cau:'S = V × T (quãng đường = vận tốc × thời gian)',dapAn:'Đúng',goiY:'Công thức chuyển động đều cơ bản ✓'},
  {id:'l5cd_12',loai:'dung_sai',cau:'Hai xe ngược chiều: vận tốc gặp nhau = V₁+V₂',dapAn:'Đúng',goiY:'Ngược chiều cộng vận tốc ✓'},
  {id:'l5cd_13',loai:'dung_sai',cau:'V=60km/h, T=2h → S=120km',dapAn:'Đúng',goiY:'S=60×2=120km ✓'},
  {id:'l5cd_14',loai:'dung_sai',cau:'Hai xe cùng chiều: thời gian đuổi kịp = khoảng cách ÷ hiệu vận tốc',dapAn:'Đúng',goiY:'T=S÷(V_nhanh−V_chậm) ✓'},
  {id:'l5cd_15',loai:'dung_sai',cau:'S=300km, V=75km/h → T=3 giờ',dapAn:'Sai',goiY:'T=300÷75=4 giờ, không phải 3'},
  {id:'l5cd_16',loai:'chon_nhieu',cau:'Đơn vị nào dùng cho vận tốc?',dapAn:['km/h','m/s','m/phút'],luaChon:['km/h','km','m/s','m/phút']},
  {id:'l5cd_17',loai:'chon_nhieu',cau:'Bài toán nào cần tính tổng vận tốc?',dapAn:['Hai xe đi ngược chiều gặp nhau','Tàu và thuyền đi ngược chiều'],luaChon:['Hai xe đi ngược chiều gặp nhau','Một xe đi từ A đến B','Tàu và thuyền đi ngược chiều','Xe chạy đều không đổi tốc độ']},
  {id:'l5cd_18',loai:'chon_nhieu',cau:'Công thức nào đúng?',dapAn:['V=S÷T','T=S÷V','S=V×T'],luaChon:['V=S÷T','V=S×T','T=S÷V','S=V×T']},
  {id:'l5cd_19',loai:'dien_so',cau:'V=120km/h, T=2,5giờ. S = ___ km',dapAn:300,goiY:'S=120×2,5=?'},
  {id:'l5cd_20',loai:'dien_so',cau:'Ngược chiều: V₁=80, V₂=70, S=450km. Gặp nhau sau ___ giờ',dapAn:3,goiY:'T=450÷(80+70)=450÷150=?'},
];

// ============================================
// CHỦ ĐỀ 9: ĐO LƯỜNG NÂNG CAO
// ============================================
const BAI_GIANG_L5_DO_LUONG = {
  tieuDe: 'Đo Lường nâng cao', icon: '📏', chuDe: 'do_luong',
  cacPhan: [
    {
      tieuDe: '📐 Đơn vị diện tích: cm², dm², m², km²',
      noiDung: `<strong>Bảng đơn vị diện tích</strong>:<br>
        1 km² = 1.000.000 m²<br>
        1 m² = 100 dm²<br>
        1 dm² = 100 cm²<br>
        1 cm² = 100 mm²<br><br>
        Đơn vị đặc biệt:<br>
        <strong>1 ha (héc-ta)</strong> = 10.000 m²<br>
        <strong>1 km² = 100 ha</strong><br>
        Ứng dụng: đo diện tích đất, ruộng lúa, rừng.`,
      svg: `<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="36" rx="10" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">1m²=100dm²=10.000cm²=1.000.000mm²</text>
        <rect x="8" y="52" width="284" height="32" rx="10" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="150" y="68" text-anchor="middle" font-size="12" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">1 ha = 10.000 m²  ·  1 km² = 100 ha</text>
        <text x="150" y="82" text-anchor="middle" font-size="10" fill="#008060" font-family="Nunito,sans-serif">Mỗi bậc diện tích: ×100 khi đi xuống</text>
      </svg>`,
      ketLuan: 'Đơn vị diện tích: mỗi bậc ×100. 1ha=10.000m². 1km²=100ha=1.000.000m².'
    },
    {
      tieuDe: '🧊 Đơn vị thể tích: cm³, dm³, m³',
      noiDung: `<strong>Bảng đơn vị thể tích</strong>:<br>
        1 m³ = 1.000 dm³<br>
        1 dm³ = 1.000 cm³<br>
        1 cm³ = 1.000 mm³<br><br>
        Liên hệ với đơn vị đo lường:<br>
        <strong>1 dm³ = 1 lít (l)</strong><br>
        <strong>1 cm³ = 1 ml</strong><br>
        Ứng dụng: tính lượng nước, thể tích hộp.`,
      svg: `<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="36" rx="10" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="150" y="28" text-anchor="middle" font-size="12" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">1m³ = 1.000dm³ = 1.000.000cm³</text>
        <text x="150" y="38" text-anchor="middle" font-size="10" fill="#7c4dff" font-family="Nunito,sans-serif">Mỗi bậc thể tích: ×1.000</text>
        <rect x="8" y="52" width="284" height="32" rx="10" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="68" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">1 dm³ = 1 lít  ·  1 cm³ = 1 ml</text>
        <text x="150" y="82" text-anchor="middle" font-size="10" fill="#c9a200" font-family="Nunito,sans-serif">Thể tích ↔ dung tích</text>
      </svg>`,
      ketLuan: 'Thể tích: mỗi bậc ×1.000. 1dm³=1 lít. 1cm³=1ml. Rất thực tế!'
    },
    {
      tieuDe: '⚖️ Đổi đơn vị phức hợp',
      noiDung: `Đổi đơn vị <strong>phức hợp</strong> (kết hợp nhiều đơn vị):<br><br>
        2 tấn 3 tạ = 2.300 kg<br>
        (2×1000 + 3×100 = 2.000+300)<br><br>
        3m² 50dm² = 350 dm²<br>
        (3×100 + 50 = 350)<br><br>
        1 giờ 45 phút 30 giây = 6.330 giây<br>
        (1×3600 + 45×60 + 30)`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="74" rx="14" fill="#fff9f0" stroke="#ffd166" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="12" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">2 tấn 3 tạ → kg</text>
        <text x="150" y="48" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">= 2×1.000 + 3×100</text>
        <text x="150" y="66" text-anchor="middle" font-size="14" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="900">= 2.300 kg ✓</text>
      </svg>`,
      ketLuan: 'Đổi phức hợp: nhân từng đơn vị với hệ số tương ứng rồi cộng lại.'
    }
  ]
};
const BAI_TAP_L5_DO_LUONG = [
  { id: 'l5dl_01', loai: 'trac_nghiem', cau: '1 m² = ? dm²', dapAn: '100 dm²', luaChon: ['10 dm²','100 dm²','1.000 dm²','10.000 dm²'] },
  { id: 'l5dl_02', loai: 'trac_nghiem', cau: '1 dm³ = ? lít', dapAn: '1 lít', luaChon: ['0,1 lít','1 lít','10 lít','100 lít'] },
  { id: 'l5dl_03', loai: 'trac_nghiem', cau: '1 ha = ? m²', dapAn: '10.000 m²', luaChon: ['100 m²','1.000 m²','10.000 m²','100.000 m²'] },
  { id: 'l5dl_04', loai: 'trac_nghiem', cau: '2m² 50dm² = ? dm²', dapAn: '250 dm²', luaChon: ['205 dm²','250 dm²','2050 dm²','2.500 dm²'] },
  { id: 'l5dl_05', loai: 'trac_nghiem', cau: '1 m³ = ? dm³', dapAn: '1.000 dm³', luaChon: ['10 dm³','100 dm³','1.000 dm³','10.000 dm³'] },
  { id: 'l5dl_06', loai: 'trac_nghiem', cau: '5 ha = ? m²', dapAn: '50.000 m²', luaChon: ['500 m²','5.000 m²','50.000 m²','500.000 m²'] },
  { id: 'l5dl_07', loai: 'dien_so', cau: '3m² = ___ cm²', dapAn: 30000, goiY: '1m²=10.000cm², vậy 3m²=3×10.000=?' },
  { id: 'l5dl_08', loai: 'dien_so', cau: '2dm³ 500cm³ = ___ cm³', dapAn: 2500, goiY: '2dm³=2.000cm³, thêm 500cm³ nữa là?' },
  { id: 'l5dl_09', loai: 'dien_so', cau: '4 km² = ___ ha', dapAn: 400, goiY: '1km²=100ha, vậy 4km²=?' },
  { id: 'l5dl_10', loai: 'dien_so', cau: '1 giờ 20 phút = ___ phút', dapAn: 80, goiY: '60 phút + 20 phút = ?' },

  {id:'l5dl_11',loai:'dung_sai',cau:'1m² = 10.000cm²',dapAn:'Đúng',goiY:'1m=100cm → 1m²=100×100=10.000cm² ✓'},
  {id:'l5dl_12',loai:'dung_sai',cau:'1dm³ = 1 lít',dapAn:'Đúng',goiY:'Đây là liên hệ quan trọng trong đo lường ✓'},
  {id:'l5dl_13',loai:'dung_sai',cau:'1ha = 1.000m²',dapAn:'Sai',goiY:'1ha = 10.000m², không phải 1.000'},
  {id:'l5dl_14',loai:'dung_sai',cau:'5dm² = 500cm²',dapAn:'Đúng',goiY:'1dm²=100cm² → 5dm²=500cm² ✓'},
  {id:'l5dl_15',loai:'dung_sai',cau:'Mỗi bậc diện tích gấp 100 lần',dapAn:'Đúng',goiY:'m²→dm²→cm²: mỗi bậc ×100 ✓'},
  {id:'l5dl_16',loai:'chon_nhieu',cau:'Đơn vị nào đo diện tích?',dapAn:['cm²','m²','ha'],luaChon:['cm²','m²','ha','km']},
  {id:'l5dl_17',loai:'chon_nhieu',cau:'Số đo nào bằng 2m²?',dapAn:['200dm²','20.000cm²'],luaChon:['200dm²','20dm²','20.000cm²','2.000cm²']},
  {id:'l5dl_18',loai:'chon_nhieu',cau:'Thể tích nào bằng 5 lít?',dapAn:['5dm³','5.000cm³','5.000ml'],luaChon:['5dm³','5.000cm³','500cm³','5.000ml']},
  {id:'l5dl_19',loai:'dien_so',cau:'6m² = ___ dm²',dapAn:600,goiY:'1m²=100dm² → 6m²=?'},
  {id:'l5dl_20',loai:'dien_so',cau:'3km² = ___ ha',dapAn:300,goiY:'1km²=100ha → 3km²=?'},
];

// ============================================
// CHỦ ĐỀ 10: TOÁN CÓ LỜI VĂN LỚP 5
// ============================================
const BAI_GIANG_L5_LOI_VAN = {
  tieuDe: 'Toán Có Lời Văn', icon: '📖', chuDe: 'loi_van',
  cacPhan: [
    {
      tieuDe: '📝 Bài toán về tỉ số và phần trăm',
      noiDung: `Dạng bài phổ biến nhất lớp 5:<br><br>
        <strong>Tìm giá trị khi biết phần trăm:</strong><br>
        "30% của lớp là 12 em. Lớp có bao nhiêu em?"<br>
        → Lớp = 12 × 100 ÷ 30 = <strong>40 em</strong><br><br>
        <strong>Tìm phần trăm khi biết hai giá trị:</strong><br>
        "40 em nữ trong 160 em. Nữ chiếm bao nhiêu %?"<br>
        → 40/160 × 100 = <strong>25%</strong>`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="136" height="74" rx="12" fill="#fff3eb" stroke="#ff6b35" stroke-width="2"/>
        <text x="76" y="26" text-anchor="middle" font-size="10" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">Tìm tổng từ %</text>
        <text x="76" y="44" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">30% = 12 em</text>
        <text x="76" y="62" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">100% = 12×100÷30</text>
        <text x="76" y="76" text-anchor="middle" font-size="13" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="900">= 40 em</text>
        <rect x="156" y="8" width="136" height="74" rx="12" fill="#e8fff7" stroke="#06d6a0" stroke-width="2"/>
        <text x="224" y="26" text-anchor="middle" font-size="10" fill="#008060" font-family="Nunito,sans-serif" font-weight="800">Tìm % từ giá trị</text>
        <text x="224" y="44" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">40 nữ / 160 tổng</text>
        <text x="224" y="62" text-anchor="middle" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">= 40÷160×100</text>
        <text x="224" y="76" text-anchor="middle" font-size="13" fill="#008060" font-family="Nunito,sans-serif" font-weight="900">= 25%</text>
      </svg>`,
      ketLuan: 'Tìm tổng từ %: giá trị × 100 ÷ %. Tìm %: phần ÷ tổng × 100.'
    },
    {
      tieuDe: '🔢 Bài toán về phân số của một số',
      noiDung: `<strong>Tìm phân số của một số</strong>:<br>
        a/b của n = n × a/b = n × a ÷ b<br><br>
        Ví dụ: Lớp có 35 em. 2/5 số em thích toán. Bao nhiêu em thích toán?<br>
        → 35 × 2/5 = 35 × 2 ÷ 5 = 70 ÷ 5 = <strong>14 em</strong><br><br>
        <strong>Tìm số khi biết phân số của nó</strong>:<br>
        "2/5 của một số bằng 14. Tìm số đó."<br>
        → Số đó = 14 × 5 ÷ 2 = <strong>35</strong>`,
      svg: `<svg viewBox="0 0 300 90" width="285" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="74" rx="14" fill="#f3f0ff" stroke="#7c4dff" stroke-width="2"/>
        <text x="150" y="30" text-anchor="middle" font-size="13" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="800">35 em × 2/5 = ?</text>
        <text x="150" y="50" text-anchor="middle" font-size="12" fill="#2d2d2d" font-family="Nunito,sans-serif">= 35 × 2 ÷ 5 = 70 ÷ 5</text>
        <text x="150" y="70" text-anchor="middle" font-size="16" fill="#7c4dff" font-family="Nunito,sans-serif" font-weight="900">= 14 em ✓</text>
      </svg>`,
      ketLuan: 'a/b của n = n×a÷b. Tìm n khi biết a/b×n=k → n = k×b÷a.'
    },
    {
      tieuDe: '📊 Bài toán tổng hợp nhiều bước',
      noiDung: `Bài toán nâng cao có <strong>3-4 bước tính</strong>.<br><br>
        Ví dụ: Cửa hàng có 500 áo. Ngày 1 bán 20%, ngày 2 bán 30% số còn lại. Hỏi còn mấy áo?<br><br>
        Bước 1: Ngày 1 bán = 500×20% = <strong>100 áo</strong><br>
        Bước 2: Còn lại sau ngày 1 = 500−100 = <strong>400 áo</strong><br>
        Bước 3: Ngày 2 bán = 400×30% = <strong>120 áo</strong><br>
        Bước 4: Còn lại = 400−120 = <strong>280 áo</strong>`,
      svg: `<svg viewBox="0 0 300 92" width="285" height="92" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="284" height="76" rx="14" fill="#fffbe6" stroke="#ffd166" stroke-width="2"/>
        <text x="20" y="28" font-size="11" fill="#c9a200" font-family="Nunito,sans-serif" font-weight="800">B1: 500×20%=100 áo bán ngày 1</text>
        <text x="20" y="44" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">B2: Còn = 500−100 = 400 áo</text>
        <text x="20" y="60" font-size="11" fill="#2d2d2d" font-family="Nunito,sans-serif">B3: 400×30% = 120 áo bán ngày 2</text>
        <text x="20" y="76" font-size="12" fill="#ff6b35" font-family="Nunito,sans-serif" font-weight="800">B4: Còn lại = 400−120 = 280 áo ✓</text>
      </svg>`,
      ketLuan: 'Bài nhiều bước: làm từng bước rõ ràng, dùng kết quả bước trước cho bước sau.'
    }
  ]
};
const BAI_TAP_L5_LOI_VAN = [
  { id: 'l5lv_01', loai: 'trac_nghiem', cau: '25% của lớp là 10 em. Lớp có bao nhiêu em?', dapAn: '40 em', luaChon: ['30 em','35 em','40 em','50 em'] },
  { id: 'l5lv_02', loai: 'trac_nghiem', cau: 'Lớp 45 em, 3/5 thích văn. Bao nhiêu em thích văn?', dapAn: '27 em', luaChon: ['15 em','20 em','27 em','30 em'] },
  { id: 'l5lv_03', loai: 'trac_nghiem', cau: 'Bể nước 2.000 lít. Bơm được 3/4. Số lít bơm được là?', dapAn: '1.500 lít', luaChon: ['500 lít','1.000 lít','1.500 lít','2.000 lít'] },
  { id: 'l5lv_04', loai: 'trac_nghiem', cau: 'Vải dài 60m, cắt 2/3. Còn lại bao nhiêu mét?', dapAn: '20m', luaChon: ['15m','20m','30m','40m'] },
  { id: 'l5lv_05', loai: 'trac_nghiem', cau: 'Cửa hàng 400 bóng. Bán 35%. Bán được bao nhiêu bóng?', dapAn: '140 bóng', luaChon: ['120 bóng','130 bóng','140 bóng','160 bóng'] },
  { id: 'l5lv_06', loai: 'trac_nghiem', cau: 'Ô tô đi 240km trong 4 giờ. Vận tốc là?', dapAn: '60km/h', luaChon: ['50km/h','55km/h','60km/h','70km/h'] },
  { id: 'l5lv_07', loai: 'dien_so', cau: '20% của một số bằng 30. Số đó là ___', dapAn: 150, goiY: 'Số = 30 × 100 ÷ 20 = ?' },
  { id: 'l5lv_08', loai: 'dien_so', cau: '2/7 của một số bằng 16. Số đó là ___', dapAn: 56, goiY: 'Số = 16 × 7 ÷ 2 = ?' },
  { id: 'l5lv_09', loai: 'dien_so', cau: 'Có 600 sách, bán 40%. Còn lại ___ quyển', dapAn: 360, goiY: 'Bán = 600×40%=240. Còn = 600−240=?' },
  { id: 'l5lv_10', loai: 'dien_so', cau: 'V=80km/h, T=3,5 giờ. S = ___ km', dapAn: 280, goiY: 'S = V × T = 80 × 3,5 = ?' },

  {id:'l5lv_11',loai:'dung_sai',cau:'Tìm tổng từ %: giá trị × 100 ÷ %',dapAn:'Đúng',goiY:'30%=12em → lớp=12×100÷30=40 ✓'},
  {id:'l5lv_12',loai:'dung_sai',cau:'a/b của n = n × a ÷ b',dapAn:'Đúng',goiY:'2/5 của 35 = 35×2÷5 = 14 ✓'},
  {id:'l5lv_13',loai:'dung_sai',cau:'Giảm 20% nghĩa là còn lại 80%',dapAn:'Đúng',goiY:'100%−20%=80% còn lại ✓'},
  {id:'l5lv_14',loai:'dung_sai',cau:'Bài toán chuyển động: luôn cần biết 2 trong 3 đại lượng S,V,T',dapAn:'Đúng',goiY:'Biết 2 → tính được 1 còn lại ✓'},
  {id:'l5lv_15',loai:'dung_sai',cau:'Tăng 25% giá 400k → giá mới là 500k',dapAn:'Đúng',goiY:'Tăng=400×25%=100k. Giá mới=400+100=500k ✓'},
  {id:'l5lv_16',loai:'chon_nhieu',cau:'Bài toán nào cần tính phần trăm?',dapAn:['Giảm giá 30% áo 200k','Lớp 40HS, 60% thích toán'],luaChon:['Giảm giá 30% áo 200k','Chu vi HCN dài 8 rộng 5','Lớp 40HS, 60% thích toán','S=V×T']},
  {id:'l5lv_17',loai:'chon_nhieu',cau:'Dữ kiện nào đủ để tính quãng đường?',dapAn:['V=60km/h và T=3h','T=2h và V=80km/h'],luaChon:['V=60km/h và T=3h','Chỉ biết V=50km/h','T=2h và V=80km/h','Chỉ biết S=200km']},
  {id:'l5lv_18',loai:'chon_nhieu',cau:'Câu nào đúng về tỉ số?',dapAn:['Tỉ số 2:3 khác 3:2','Tỉ số viết được dưới dạng phân số'],luaChon:['Tỉ số 2:3 khác 3:2','Tỉ số luôn < 1','Tỉ số viết được dưới dạng phân số','Tỉ số không có đơn vị']},
  {id:'l5lv_19',loai:'dien_so',cau:'35% của một số bằng 63. Số đó là ___',dapAn:180,goiY:'Số = 63×100÷35=?'},
  {id:'l5lv_20',loai:'dien_so',cau:'Bán 3/7 số gạo, còn lại 80kg. Lúc đầu có ___ kg',dapAn:140,goiY:'Còn 4/7. 1/7=80÷4=20kg. Tổng=20×7=?'},
];

// ============================================
// MAP TRA CỨU LỚP 5
// ============================================
const DATA_LOP5 = {
  so_tn:          { baiGiang: BAI_GIANG_L5_SO_TN,      baiTap: BAI_TAP_L5_SO_TN      },
  phan_so:        { baiGiang: BAI_GIANG_L5_PHAN_SO,     baiTap: BAI_TAP_L5_PHAN_SO    },
  cong_tru_ps:    { baiGiang: BAI_GIANG_L5_CONG_TRU,    baiTap: BAI_TAP_L5_CONG_TRU   },
  nhan_chia_ps:   { baiGiang: BAI_GIANG_L5_NHAN_CHIA,   baiTap: BAI_TAP_L5_NHAN_CHIA  },
  so_thap_phan:   { baiGiang: BAI_GIANG_L5_THAP_PHAN,   baiTap: BAI_TAP_L5_THAP_PHAN  },
  ti_so_phan_tram:{ baiGiang: BAI_GIANG_L5_TI_SO,       baiTap: BAI_TAP_L5_TI_SO      },
  hinh_hoc:       { baiGiang: BAI_GIANG_L5_HINH_HOC,    baiTap: BAI_TAP_L5_HINH_HOC   },
  chuyen_dong:    { baiGiang: BAI_GIANG_L5_CHUYEN_DONG, baiTap: BAI_TAP_L5_CHUYEN_DONG},
  do_luong:       { baiGiang: BAI_GIANG_L5_DO_LUONG,    baiTap: BAI_TAP_L5_DO_LUONG   },
  loi_van:        { baiGiang: BAI_GIANG_L5_LOI_VAN,     baiTap: BAI_TAP_L5_LOI_VAN    },
};

// Giữ tên biến cũ để tránh lỗi
const BAI_GIANG_LOP5 = BAI_GIANG_L5_PHAN_SO;
const BAI_TAP_LOP5   = BAI_TAP_L5_PHAN_SO;

// ============================================================
// BỔ SUNG BÀI TẬP LỚP 5 — Dạng Đúng/Sai và Chọn nhiều
// ============================================================
const EXTRA_L5 = {
  so_tn: [
    {id:'l5stx_01',loai:'dung_sai',cau:'ƯCLN(6,4)=2',dapAn:true,goiY:'Ư(6)=1,2,3,6; Ư(4)=1,2,4 → chung lớn nhất=2 ✓'},
    {id:'l5stx_02',loai:'dung_sai',cau:'BCNN(2,3)=6',dapAn:true,goiY:'B(2)=2,4,6...; B(3)=3,6... → chung nhỏ nhất=6 ✓'},
    {id:'l5stx_03',loai:'chon_nhieu',cau:'Ước của 24 là?',dapAn:['1','6','8','12'],luaChon:['1','5','6','8','12']},
    {id:'l5stx_04',loai:'dung_sai',cau:'Mọi số đều là bội của 1',dapAn:true,goiY:'B(1)=1,2,3,4,... → mọi số đều là bội của 1 ✓'},
  ],
  phan_so: [
    {id:'l5psx_01',loai:'dung_sai',cau:'2/3 < 3/4 (quy đồng: 8/12 < 9/12)',dapAn:true,goiY:'BCNN(3,4)=12: 8/12 < 9/12 → 2/3 < 3/4 ✓'},
    {id:'l5psx_02',loai:'dung_sai',cau:'Hỗn số 3¾ = 15/4',dapAn:true,goiY:'3×4+3=15 → 15/4 ✓'},
    {id:'l5psx_03',loai:'chon_nhieu',cau:'Phân số nào bằng 3/4?',dapAn:['6/8','9/12','15/20'],luaChon:['6/8','5/8','9/12','15/20','4/5']},
    {id:'l5psx_04',loai:'dung_sai',cau:'7/10 = 0,7 (số thập phân)',dapAn:true,goiY:'Phân số thập phân với mẫu 10: 7/10=0,7 ✓'},
  ],
  cong_tru_ps: [
    {id:'l5ctx_01',loai:'dung_sai',cau:'1/2 + 1/3 = 5/6',dapAn:true,goiY:'BCNN=6: 3/6+2/6=5/6 ✓'},
    {id:'l5ctx_02',loai:'dung_sai',cau:'Cộng hai PS cùng mẫu: cộng cả tử lẫn mẫu',dapAn:false,goiY:'Sai! Cộng tử, giữ nguyên mẫu. 2/5+1/5=3/5 chứ không phải 3/10'},
    {id:'l5ctx_03',loai:'chon_nhieu',cau:'Phép tính nào bằng 1?',dapAn:['1/2 + 1/2','3/4 + 1/4','2/3 + 1/3'],luaChon:['1/2 + 1/2','1/2 + 1/3','3/4 + 1/4','2/3 + 1/3','1/4 + 1/2']},
    {id:'l5ctx_04',loai:'dung_sai',cau:'3/4 − 1/4 = 2/4 = 1/2',dapAn:true,goiY:'Cùng mẫu: 3−1=2, 2/4=1/2 ✓'},
  ],
  nhan_chia_ps: [
    {id:'l5ncx_01',loai:'dung_sai',cau:'2/3 × 3/4 = 1/2',dapAn:true,goiY:'(2×3)/(3×4)=6/12=1/2 ✓'},
    {id:'l5ncx_02',loai:'dung_sai',cau:'Chia phân số: lật phân số chia rồi nhân',dapAn:true,goiY:'a/b ÷ c/d = a/b × d/c ✓'},
    {id:'l5ncx_03',loai:'chon_nhieu',cau:'Nghịch đảo của 2/5 là?',dapAn:['5/2'],luaChon:['2/5','5/2','1/5','5/1']},
    {id:'l5ncx_04',loai:'dung_sai',cau:'1/2 × 2 = 1',dapAn:true,goiY:'(1×2)/2=2/2=1 ✓'},
  ],
  so_thap_phan: [
    {id:'l5tpx_01',loai:'dung_sai',cau:'3,14 > 3,04',dapAn:true,goiY:'Phần mười: 1 > 0 → 3,14 > 3,04 ✓'},
    {id:'l5tpx_02',loai:'dung_sai',cau:'2,35 × 10 = 23,5',dapAn:true,goiY:'Dịch phẩy sang phải 1 chỗ → 23,5 ✓'},
    {id:'l5tpx_03',loai:'chon_nhieu',cau:'Số nào lớn hơn 5,0?',dapAn:['5,1','5,01','6,0'],luaChon:['4,9','5,1','5,0','5,01','6,0']},
    {id:'l5tpx_04',loai:'dung_sai',cau:'0,5 = 1/2',dapAn:true,goiY:'0,5 = 5/10 = 1/2 ✓'},
  ],
  ti_so_phan_tram: [
    {id:'l5tsx_01',loai:'dung_sai',cau:'50% = 1/2',dapAn:true,goiY:'50/100 = 1/2 ✓'},
    {id:'l5tsx_02',loai:'dung_sai',cau:'25% của 200 = 50',dapAn:true,goiY:'200×25÷100=50 ✓'},
    {id:'l5tsx_03',loai:'chon_nhieu',cau:'Phần trăm nào lớn hơn 1/2?',dapAn:['60%','75%','100%'],luaChon:['40%','50%','60%','75%','100%']},
    {id:'l5tsx_04',loai:'dung_sai',cau:'Tỉ số 3:4 viết dưới dạng phân số là 3/4',dapAn:true,goiY:'Tỉ số a:b = a/b ✓'},
  ],
  hinh_hoc: [
    {id:'l5hhx_01',loai:'dung_sai',cau:'S tam giác = đáy × chiều cao ÷ 2',dapAn:true,goiY:'Đây là công thức chính xác ✓'},
    {id:'l5hhx_02',loai:'dung_sai',cau:'Hình hộp chữ nhật có 6 mặt',dapAn:true,goiY:'Trên+dưới+trước+sau+trái+phải = 6 mặt ✓'},
    {id:'l5hhx_03',loai:'chon_nhieu',cau:'Công thức nào đúng?',dapAn:['S tam giác = đáy×h÷2','S hình thang = (a+b)×h÷2'],luaChon:['S tam giác = đáy×h÷2','S tam giác = đáy×h','S hình thang = (a+b)×h÷2','V hộp = dài+rộng+cao']},
    {id:'l5hhx_04',loai:'dung_sai',cau:'V hình hộp 5×4×3 = 60cm³',dapAn:true,goiY:'V = 5×4×3 = 60cm³ ✓'},
  ],
  chuyen_dong: [
    {id:'l5cdx_01',loai:'dung_sai',cau:'S = V × T (quãng đường = vận tốc × thời gian)',dapAn:true,goiY:'Công thức cơ bản chuyển động đều ✓'},
    {id:'l5cdx_02',loai:'dung_sai',cau:'Hai vật ngược chiều: tổng vận tốc = V₁ + V₂',dapAn:true,goiY:'Ngược chiều lại gần nhau → cộng vận tốc ✓'},
    {id:'l5cdx_03',loai:'chon_nhieu',cau:'Cần dữ liệu nào để tính quãng đường?',dapAn:['Vận tốc','Thời gian'],luaChon:['Vận tốc','Màu xe','Thời gian','Trọng lượng xe']},
    {id:'l5cdx_04',loai:'dung_sai',cau:'V=60km/h, T=2,5h → S=150km',dapAn:true,goiY:'S=60×2,5=150km ✓'},
  ],
  do_luong: [
    {id:'l5dlx_01',loai:'dung_sai',cau:'1 dm³ = 1 lít',dapAn:true,goiY:'Đây là mối liên hệ đặc biệt thể tích-dung tích ✓'},
    {id:'l5dlx_02',loai:'dung_sai',cau:'1 km² = 1.000.000 m²',dapAn:true,goiY:'1km=1000m → 1km²=1000×1000=1.000.000m² ✓'},
    {id:'l5dlx_03',loai:'chon_nhieu',cau:'Phép đổi nào đúng?',dapAn:['1ha=10.000m²','1dm³=1 lít','1cm³=1ml'],luaChon:['1ha=10.000m²','1ha=1.000m²','1dm³=1 lít','1cm³=1ml','1m³=100dm³']},
    {id:'l5dlx_04',loai:'dung_sai',cau:'2dm³ 500cm³ = 2.500cm³',dapAn:true,goiY:'2dm³=2000cm³, thêm 500cm³ = 2500cm³ ✓'},
  ],
  loi_van: [
    {id:'l5lvx_01',loai:'dung_sai',cau:'40% của 250 = 100',dapAn:true,goiY:'250×40÷100=100 ✓'},
    {id:'l5lvx_02',loai:'dung_sai',cau:'2/7 của một số bằng 16 → số đó = 56',dapAn:true,goiY:'56×2÷7=16 ✓'},
    {id:'l5lvx_03',loai:'chon_nhieu',cau:'Để tính "30% của N" ta cần?',dapAn:['N × 30 ÷ 100','N × 0,3'],luaChon:['N × 30 ÷ 100','N + 30','N × 0,3','N ÷ 30']},
    {id:'l5lvx_04',loai:'dung_sai',cau:'V=80km/h, T=3,5h → S=280km',dapAn:true,goiY:'80×3,5=280km ✓'},
  ],
};

Object.keys(EXTRA_L5).forEach(k => {
  if (DATA_LOP5[k]) DATA_LOP5[k].baiTap = [...DATA_LOP5[k].baiTap, ...EXTRA_L5[k]];
});
