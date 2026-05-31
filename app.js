// ============================================
// BoMath - Logic chính v3 (thêm âm thanh)
// Xử lý: KoKo, tiến độ, âm thanh, điều hướng
// ============================================

// -----------------------------------------------
// PHẦN 1: QUẢN LÝ DỮ LIỆU (localStorage)
// -----------------------------------------------

function layDuLieu() {
  const raw = localStorage.getItem('bomath_data');
  if (!raw) {
    return {
      koko: 0,
      amThanh: true,          // Mặc định: bật âm thanh
      lop2: {},
      lop3: {},
      lop4: {},
      lop5: {}
    };
  }
  const data = JSON.parse(raw);
  if (!data.lop2) data.lop2 = {};
  if (!data.lop4) data.lop4 = {};
  // Đảm bảo key âm thanh tồn tại cho user cũ
  if (data.amThanh === undefined) data.amThanh = true;
  return data;
}

function luuDuLieu(data) {
  localStorage.setItem('bomath_data', JSON.stringify(data));
}

function layKoKo() { return layDuLieu().koko; }

function congKoKo(soKoKo) {
  const data = layDuLieu();
  data.koko += soKoKo;
  luuDuLieu(data);
  capNhatHienThiKoKo();
}

// -----------------------------------------------
// PHẦN 2: HIỂN THỊ KOKO TRÊN NAVBAR
// -----------------------------------------------

function capNhatHienThiKoKo() {
  const el = document.getElementById('koko-diem');
  if (el) el.textContent = layKoKo().toLocaleString('vi-VN');
}

// -----------------------------------------------
// PHẦN 3: ÂM THANH — Web Audio API
// Web Audio API: tạo âm thanh bằng code JS thuần,
// không cần file mp3, không cần internet.
// -----------------------------------------------

// AudioContext là "nhà máy" tạo âm thanh của trình duyệt.
// Khai báo lazy (tạo khi cần) vì trình duyệt yêu cầu
// phải có tương tác người dùng trước khi phát âm thanh.
let _audioCtx = null;

function layAudioCtx() {
  if (!_audioCtx) {
    // AudioContext: chuẩn Web Audio API, hoạt động trên mọi trình duyệt hiện đại
    _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  // Resume nếu bị trình duyệt tạm dừng (bảo vệ autoplay)
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

/**
 * Kiểm tra âm thanh có đang bật không.
 * @returns {boolean}
 */
function amThanhDangBat() {
  return layDuLieu().amThanh === true;
}

/**
 * Phát một nốt nhạc đơn giản.
 * @param {number} tan     - Tần số Hz (ví dụ: 440 = nốt La)
 * @param {number} thoiGian - Thời gian phát (giây)
 * @param {string} dang    - Dạng sóng: 'sine' | 'square' | 'triangle' | 'sawtooth'
 * @param {number} amLuong - Âm lượng 0.0 → 1.0
 * @param {number} treHon  - Độ trễ trước khi phát (giây)
 */
function phatNot(tan, thoiGian = 0.15, dang = 'sine', amLuong = 0.4, treHon = 0) {
  if (!amThanhDangBat()) return;
  try {
    const ctx = layAudioCtx();
    const now = ctx.currentTime + treHon;

    // OscillatorNode: tạo sóng âm thanh theo tần số
    const osc = ctx.createOscillator();
    // GainNode: điều chỉnh âm lượng
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type      = dang;
    osc.frequency.setValueAtTime(tan, now);

    // Fade in nhanh (tránh "click" đột ngột khi bắt đầu)
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(amLuong, now + 0.01);
    // Fade out (tránh "click" khi kết thúc)
    gain.gain.linearRampToValueAtTime(0, now + thoiGian);

    osc.start(now);
    osc.stop(now + thoiGian + 0.01);
  } catch (e) {
    // Im lặng nếu trình duyệt không hỗ trợ — không làm crash app
    console.warn('BoMath audio:', e);
  }
}

// -----------------------------------------------
// CÁC HÀM PHÁT ÂM THANH THEO TÌNH HUỐNG
// -----------------------------------------------

/**
 * Âm thanh khi bấm nút — click nhẹ, ngắn gọn.
 */
function amBamNut() {
  phatNot(600, 0.08, 'sine', 0.2);
}

/**
 * Âm thanh khi trả lời ĐÚNG — hai nốt lên (vui, tích cực).
 */
function amDung() {
  phatNot(523, 0.12, 'sine', 0.35);        // Nốt Do5
  phatNot(784, 0.18, 'sine', 0.35, 0.12); // Nốt Sol5 (sau 0.12s)
}

/**
 * Âm thanh khi trả lời SAI — nốt trầm xuống (nhẹ nhàng, không đáng sợ).
 */
function amSai() {
  phatNot(330, 0.10, 'sine', 0.3);         // Nốt Mi4
  phatNot(262, 0.18, 'sine', 0.3, 0.10);  // Nốt Do4 (trầm hơn)
}

/**
 * Âm thanh nhận KoKo — tiếng "ting" vui.
 */
function amKoKo() {
  phatNot(880, 0.10, 'sine', 0.3);         // Nốt La5 cao
  phatNot(1047, 0.12, 'sine', 0.25, 0.09); // Nốt Do6
}

/**
 * Âm thanh hoàn thành 3 SAO — giai điệu mừng chiến thắng (5 nốt).
 * Chỉ phát khi đạt điểm tuyệt đối.
 */
function amChienThang() {
  // Giai điệu: Do - Mi - Sol - Do(cao) - Mi(cao)
  const notes = [
    { tan: 523, tre: 0.00 },   // Do5
    { tan: 659, tre: 0.14 },   // Mi5
    { tan: 784, tre: 0.28 },   // Sol5
    { tan: 1047, tre: 0.42 },  // Do6
    { tan: 1319, tre: 0.58 },  // Mi6
  ];
  notes.forEach(n => phatNot(n.tan, 0.18, 'sine', 0.35, n.tre));
}

/**
 * Âm thanh chuyển trang / bấm lựa chọn — nhẹ nhàng.
 */
function amChuyenTrang() {
  phatNot(440, 0.10, 'sine', 0.18);  // Nốt La4
}

// -----------------------------------------------
// PHẦN 4: NÚT BẬT/TẮT ÂM THANH TRÊN NAVBAR
// -----------------------------------------------

/**
 * Cập nhật giao diện nút âm thanh theo trạng thái hiện tại.
 * Gọi mỗi khi trang load hoặc sau khi toggle.
 */
function capNhatNutAmThanh() {
  const nut = document.getElementById('nut-am-thanh');
  if (!nut) return;
  const dangBat = amThanhDangBat();
  // Đổi emoji và tooltip
  nut.textContent = dangBat ? '🔊' : '🔇';
  nut.title       = dangBat ? 'Tắt âm thanh' : 'Bật âm thanh';
  nut.setAttribute('aria-label', nut.title);
  // Đổi style để phân biệt rõ trạng thái
  nut.classList.toggle('am-thanh-tat', !dangBat);
}

/**
 * Bật / tắt âm thanh khi bấm nút.
 * Lưu trạng thái vào localStorage để nhớ qua các trang.
 */
function batTatAmThanh() {
  const data     = layDuLieu();
  data.amThanh   = !data.amThanh;
  luuDuLieu(data);
  capNhatNutAmThanh();

  // Phát âm thử ngay khi bật (để user biết đã bật thành công)
  if (data.amThanh) {
    setTimeout(() => amBamNut(), 50);
  }
}

// -----------------------------------------------
// PHẦN 5: TÍNH TOÁN SAO VÀ KẾT QUẢ
// -----------------------------------------------

function tinhSao(soCauDung, tongSoCau) {
  const tiLe = soCauDung / tongSoCau;
  if (tiLe === 1)  return 3;
  if (tiLe >= 0.6) return 2;
  if (tiLe > 0)    return 1;
  return 0;
}

function hienThiSao(soSao) {
  return '⭐'.repeat(soSao) + '☆'.repeat(3 - soSao);
}

function tinhKoKo(soCauDung, tongSoCau) {
  let diem = soCauDung * 10;
  if (soCauDung > 0)           diem += 20;  // Bonus hoàn thành
  if (soCauDung === tongSoCau) diem += 50;  // Bonus tuyệt đối
  return diem;
}

// -----------------------------------------------
// PHẦN 6: LƯU TIẾN ĐỘ
// -----------------------------------------------

function luuTienDo(lop, chuDe, cauDung, tongCau) {
  const data = layDuLieu();

  if (!data[lop])        data[lop] = {};
  if (!data[lop][chuDe]) data[lop][chuDe] = { lanLam: 0, saoTot: 0, tongDung: 0 };

  const tienDo     = data[lop][chuDe];
  const saoLanNay  = tinhSao(cauDung, tongCau);
  const kokoLanNay = tinhKoKo(cauDung, tongCau);

  tienDo.lanLam   += 1;
  tienDo.tongDung += cauDung;
  if (saoLanNay > tienDo.saoTot) tienDo.saoTot = saoLanNay;

  data.koko += kokoLanNay;
  luuDuLieu(data);

  return { sao: saoLanNay, koko: kokoLanNay };
}

// -----------------------------------------------
// PHẦN 7: CONFETTI (kèm âm thanh chiến thắng)
// -----------------------------------------------

function tungConfetti() {
  // Phát âm thanh chiến thắng
  amChienThang();

  const mauSac = ['#ff6b35','#ffd166','#06d6a0','#ef476f','#7c4dff','#118ab2'];
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const manh = document.createElement('div');
      manh.classList.add('confetti-piece');
      manh.style.left             = Math.random() * 100 + 'vw';
      manh.style.top              = '-20px';
      manh.style.background       = mauSac[Math.floor(Math.random() * mauSac.length)];
      manh.style.animationDelay    = Math.random() * 0.5 + 's';
      manh.style.animationDuration = (0.8 + Math.random() * 0.8) + 's';
      document.body.appendChild(manh);
      setTimeout(() => manh.remove(), 2000);
    }, i * 25);
  }
}

// -----------------------------------------------
// PHẦN 8: ĐIỀU HƯỚNG
// -----------------------------------------------


// -----------------------------------------------
// PHẦN 8B: MODAL CHỌN CHỦ ĐỀ (dùng chung mọi trang)
// -----------------------------------------------

/**
 * Hiện modal chọn chủ đề cho lớp đang chọn.
 * Hàm này phải chạy được từ mọi trang (lesson, exercise, index).
 * Mỗi trang tự định nghĩa MAP_LOP, hàm này chỉ cần modal HTML có sẵn.
 */
function hienModalChuDe() {
  const lop  = layLopHienTai();
  const data = layDuLieu();

  // Lấy danh sách chủ đề theo lớp — các biến này được khai báo trong grade*.js
  let dsChuDe;
  if      (lop === 'lop2') dsChuDe = CHU_DE_LOP2;
  else if (lop === 'lop3') dsChuDe = CHU_DE_LOP3;
  else if (lop === 'lop4') dsChuDe = CHU_DE_LOP4;
  else                     dsChuDe = CHU_DE_LOP5;

  const tenLop = { lop2:'🌟 Lớp 2', lop3:'🔢 Lớp 3', lop4:'📗 Lớp 4', lop5:'🚀 Lớp 5' }[lop];

  const modalTieuDe = document.getElementById('modal-tieu-de');
  const danhSach    = document.getElementById('danh-sach-chu-de');
  if (!modalTieuDe || !danhSach) return; // Trang không có modal → bỏ qua

  modalTieuDe.textContent = tenLop + ' — Chọn chủ đề';
  danhSach.innerHTML = dsChuDe.map(cd => {
    const td  = data[lop]?.[cd.id];
    const sao = td ? hienThiSao(td.saoTot) : '☆☆☆';
    return `<div class="chu-de-card" onclick="choiChuDe('${cd.id}')">
      <div class="chu-de-icon">${cd.icon}</div>
      <div class="chu-de-ten">${cd.ten}</div>
      <div class="chu-de-sao">${sao}</div>
    </div>`;
  }).join('');

  document.getElementById('modal-chu-de').classList.add('hien');
  document.body.style.overflow = 'hidden';
}

function dongModalChuDe() {
  const modal = document.getElementById('modal-chu-de');
  if (modal) modal.classList.remove('hien');
  document.body.style.overflow = '';
}

function choiLop(lop) {
  amBamNut();
  sessionStorage.setItem('lop_hien_tai', lop);
  // Tất cả các lớp đều mở modal chọn chủ đề
  hienModalChuDe();
}

function choiChuDe(idChuDe) {
  amChuyenTrang();
  sessionStorage.setItem('chu_de_hien_tai', idChuDe);
  window.location.href = 'lesson.html';
}

function layLopHienTai()  { return sessionStorage.getItem('lop_hien_tai')  || 'lop3'; }
function layChuDeHienTai() {
  const saved = sessionStorage.getItem('chu_de_hien_tai');
  if (saved) return saved;
  // Default theo từng lớp — tránh dùng key không tồn tại
  const lop = layLopHienTai();
  const defaults = { lop2:'so_den_1000', lop3:'so_10000', lop4:'so_trieu', lop5:'so_tn' };
  return defaults[lop] || 'so_den_1000';
}

// -----------------------------------------------
// PHẦN 9: TIỆN ÍCH
// -----------------------------------------------

function xaoTron(mang) {
  const ket = [...mang];
  for (let i = ket.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ket[i], ket[j]] = [ket[j], ket[i]];
  }
  return ket;
}

function cho(ms) { return new Promise(r => setTimeout(r, ms)); }

function formatSo(so) { return so.toLocaleString('vi-VN'); }

// -----------------------------------------------
// PHẦN 10: KHỞI TẠO KHI TRANG LOAD
// -----------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  capNhatHienThiKoKo();
  capNhatNutAmThanh();
});
