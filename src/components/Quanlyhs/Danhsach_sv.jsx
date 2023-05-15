import React from "react";
import Sinh_vien from "./Sinh_vien";

function Danhsach_sv({ danhsach_sv, setindexsua, xoasv }) {
  const danhsachsv = danhsach_sv.map((e, i) => (
    <Sinh_vien
      key={i}
      danhsachsv={danhsach_sv}
      index={i}
      setindexsua={setindexsua}
      xoasv={xoasv}
    />
  ));
  return (
    <div>
      <div class="card-body">
        <h3 class="card-title">Danh sách sinh viên</h3>
        <div class="table-responsive pt-3">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{danhsachsv}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Danhsach_sv;
