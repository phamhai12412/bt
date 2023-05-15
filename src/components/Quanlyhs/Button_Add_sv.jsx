import React from "react";

function Button_Add_sv({ setgoichucnang, setcachsapxep, settimkiem }) {
  const chucnangadd = () => {
    setgoichucnang("add");
  };
  const chonsapxep = (e) => {
    setcachsapxep(e.target.value);
  };
  const timkiem = (e) => {
    e.preventDefault();
    settimkiem(e.target.tk.value);
  };
  return (
    <div>
      {/* <!-- START CONTROL --> */}
      <div class="card-header">
        <div class="row">
          <div class="col-3">
            <button
              onClick={chucnangadd}
              type="button"
              class="btn btn-primary btn-icon-text"
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div class="col-6">
            <form class="search-form" action="#" onSubmit={timkiem}>
              <i class="icon-search"></i>
              <input
                type="search"
                class="form-control"
                placeholder="Search Here"
                title="Search here"
                name="tk"
              />
              <button class="btn btn-primary btn-icon-text">Tìm kiếm</button>
            </form>
          </div>
          <div class="col-3 d-flex align-items-center">
            <select class="form-control" onChange={chonsapxep}>
              <option value="">Sắp xếp</option>
              <option value="1">Tên sinh viên</option>
              <option value="2">id sinh vien tăng</option>
              <option value="3">id sinh viên giảm</option>
            </select>
          </div>
        </div>
      </div>
      {/* <!-- END CONTROL --> */}
    </div>
  );
}

export default Button_Add_sv;
