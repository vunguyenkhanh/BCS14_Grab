const GRAB_CAR = 'grabCar';
const GRAB_SUV = 'grabSUV';
const GRAB_BLACK = 'grabBlack';

document.querySelector('.contact100-form-btn').onclick = function () {
  // alert('Clickes');
  let soKm = document.getElementById('txt-km').value * 1;
  // console.log(soKm);
  let thoiGianCho = document.getElementById('txt-thoiGianCho').value * 1;
  // console.log(thoiGianCho);
  let loaiXe = document.querySelector('input[name="selector"]:checked').value;
  // console.log(loaiXe);
  let tienKmDauTien = kiemTraTienKmDauTien(loaiXe);
  // console.log(tienKmDauTien);
  let tienKmTu1Den19 = kiemTraTienKmTu1Den19(loaiXe);
  // console.log(tienKmTu1Den19);
  let tienKmTu19TroLen = kiemTraTienKmTu19TroLen(loaiXe);
  // console.log(tienKmTu19TroLen);
  let tienPhatChoLau = tienPhatThoGianCho(loaiXe);
  // console.log(tienPhatChoLau);

  let tongTien = 0;
  if (soKm <= 19) {
    tongTien = tienKmDauTien + (soKm - 1) * tienKmTu1Den19;
  } else if (soKm > 19) {
    tongTien =
      tienKmDauTien + 18 * tienKmTu1Den19 + (soKm - 19) * tienKmTu19TroLen;
  }

  let soLanPhat = Math.floor((thoiGianCho - 3) / 3);
  tongTien += soLanPhat * tienPhatChoLau;
  console.log(tongTien);
  document.getElementById('divThanhTien').style.display = 'block';
  document.getElementById('xuatTien').innerHTML = tongTien.toLocaleString(
    'it-IT',
    {
      style: 'currency',
      currency: 'VND',
    },
  );
};

function kiemTraTienKmDauTien(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 8000;
    }
    case GRAB_SUV: {
      return 9000;
    }
    case GRAB_BLACK: {
      return 10000;
    }
  }
}
function kiemTraTienKmTu1Den19(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 7500;
    }
    case GRAB_SUV: {
      return 8500;
    }
    case GRAB_BLACK: {
      return 9500;
    }
  }
}

function kiemTraTienKmTu19TroLen(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 7000;
    }
    case GRAB_SUV: {
      return 8000;
    }
    case GRAB_BLACK: {
      return 9000;
    }
  }
}
function tienPhatThoGianCho(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 2000;
    }
    case GRAB_SUV: {
      return 3000;
    }
    case GRAB_BLACK: {
      return 3500;
    }
  }
}

document.getElementById('inHoaDon').onclick = function () {
    if (
      !document.querySelector('input[name="selector"]:checked') ||
      document.getElementById('txt-km').value == ''
    ) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return false;
    }
  $('#myModal').modal('show');
  let soKm = document.getElementById('txt-km').value * 1;
  let thoiGianCho = document.getElementById('txt-thoiGianCho').value * 1;
  let loaiXe = document.querySelector('input[name="selector"]:checked').value;
  let tienKmDauTien = kiemTraTienKmDauTien(loaiXe);
  let tienKmTu1Den19 = kiemTraTienKmTu1Den19(loaiXe);
  let tienKmTu19TroLen = kiemTraTienKmTu19TroLen(loaiXe);
  let tienPhatChoLau = tienPhatThoGianCho(loaiXe);

  let tongTien = 0;
  if (soKm <= 19) {
    tongTien = tienKmDauTien + (soKm - 1) * tienKmTu1Den19;
  } else if (soKm > 19) {
    tongTien =
      tienKmDauTien + 18 * tienKmTu1Den19 + (soKm - 19) * tienKmTu19TroLen;
  }

  let soLanPhat = Math.floor((thoiGianCho - 3) / 3);
  let soTienPhat = soLanPhat * tienPhatChoLau;
  tongTien += soTienPhat;
  tongTien = tongTien.toLocaleString('it-IT', {
    style: 'currency',
    currency: 'VND',
  });

  let contentLoaiXe = '';
  if (loaiXe == GRAB_CAR) {
    contentLoaiXe = 'Grab Car';
  } else if (loaiXe == GRAB_SUV) {
    contentLoaiXe = 'Grab SUV';
  } else {
    contentLoaiXe = 'Grab Black';
  }
  document.querySelector('.modal-body').innerHTML = `
  <table class="table">
  <thead>
    <tr>
      <td colspan="2"><b>Loại xe:</b> ${contentLoaiXe}</td>
      <td colspan="2"><b>Số Km:</b> ${soKm}</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chi tiết</th>
      <th>Sử dụng</th>
      <th>Đơn giá</th>
      <th>Thành tiền</th>
    </tr>
    <tr>
      <td>Km đầu tiên</td>
      <td>1 km</td>
      <td>${tienKmDauTien}</td>
      <td>${tienKmDauTien}</td>
    </tr>
    <tr>
      <td>Từ 1 km đến 19 km</td>
      <td>18 km</td>
      <td>${tienKmTu1Den19}</td>
      <td>${tienKmTu1Den19 * 18}</td>
    </tr>
    <tr>
      <td>Từ 19km trở lên</td>
      <td>${soKm - 19}</td>
      <td>${tienKmTu19TroLen}</td>
      <td>${tienKmTu19TroLen * (soKm - 19)}</td>
    </tr>
      <tr>
      <td>Thời gian chờ</td>
      <td>${thoiGianCho}</td>
      <td>${tienPhatChoLau}</td>
      <td>${soTienPhat}</td>
    </tr>
    <tr>
      <td colspan="4" align="right">
        Tổng tiền: <span>${tongTien}</span>
      </td>
    </tr>
  </tbody>
</table>
  `;
};
