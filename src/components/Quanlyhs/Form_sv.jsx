import React from "react";

function Form_sv({
  chucnang,
  setthemmoisinhvien,
  setchucnangsua,
  indexsua,
  listsv,
}) {
  let button = "";
  if (chucnang == "add") {
    button = (
      <>
        <button class="btn btn-primary me-2">Thêm mới</button>
        <button class="btn btn-primary me-2">Thoát</button>
      </>
    );
  } else {
    button = (
      <>
        <button class="btn btn-primary me-2">Cập nhật</button>
        <button class="btn btn-primary me-2">Thoát</button>
      </>
    );
  }
  const thongtinsinhvien = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const msv = e.target.msv.value;
    const tsv = e.target.tsv.value;
    const tuoi = e.target.tuoi.value;
    const gioitinh = e.target.gioitinh.value;
    if (chucnang == "add") {
      setthemmoisinhvien({
        id: id,
        msv: msv,
        tsv: tsv,
        tuoi: tuoi,
        gioitinh: gioitinh,
      });
    } else {
      setchucnangsua({
        id: listsv[indexsua].id,
        msv: msv,
        tsv: tsv,
        tuoi: tuoi,
        gioitinh: gioitinh,
      });
    }
  };

  return (
    <div>
      <div class="col-5 grid-margin">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Thông tin sinh viên</h3>
            <form class="form-sample" onSubmit={thongtinsinhvien}>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Mã sinh viên</label>
                <div class="col-sm-9">
                  <input name="msv" type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Tên sinh viên</label>
                <div class="col-sm-9">
                  <input name="tsv" type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Tuổi</label>
                <div class="col-sm-9">
                  <input name="tuoi" type="text" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Giới tính</label>
                <div class="col-sm-9">
                  <select name="gioitinh" class="form-control">
                    <option>Nam</option>
                    <option>Nữ</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Ngày sinh</label>
                <div class="col-sm-9">
                  <input
                    name="ngaysinh"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Nơi sinh</label>
                <div class="col-sm-9">
                  <select name="noisinh" class="form-control">
                    <option>Hà Nội</option>
                    <option>TP. Hồ Chí Minh</option>
                    <option>Đà Nẵng</option>
                    <option>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Địa chỉ</label>
                <div class="col-sm-9">
                  <textarea class="form-control"></textarea>
                </div>
              </div>

              {button}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form_sv;
