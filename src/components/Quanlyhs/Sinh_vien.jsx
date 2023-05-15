import React from "react";

function Sinh_vien({ danhsachsv, index, setindexsua, xoasv }) {
  const chucnangsua = (e) => {
    const indexsua = e.target.id;

    setindexsua(indexsua, "sua");
  };
  const chucnangxoa = (e) => {
    const indexxoa = e.target.id;
    xoasv(indexxoa);
  };

  return (
    <tr>
      <td>{danhsachsv[index].id}</td>
      <td>{danhsachsv[index].msv}</td>
      <td>{danhsachsv[index].tsv}</td>
      <td>{danhsachsv[index].tuoi}</td>
      <td>{danhsachsv[index].gioitinh}</td>

      <td>
        <div class="template-demo">
          <button id={index} type="button" class="btn btn-danger btn-icon-text">
            Xem
          </button>
          <button
            onClick={(e) => chucnangsua(e)}
            id={index}
            type="button"
            class="btn btn-warning btn-icon-text"
          >
            Sửa
          </button>
          <button
            onClick={(e) => chucnangxoa(e)}
            id={index}
            type="button"
            class="btn btn-success btn-icon-text"
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Sinh_vien;
