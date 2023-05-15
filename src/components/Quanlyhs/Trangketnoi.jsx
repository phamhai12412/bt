import React, { useState } from "react";
import Button_Add_sv from "./Button_Add_sv";
import Danhsach_sv from "./Danhsach_sv";
import Form_sv from "./Form_sv";

function Trangketnoi() {
  const [anhienform, setanhienform] = useState(false);
  const [chucnang, setgoichucnang] = useState("");
  const [listsinhvien, setlistsinhvien] = useState([
    { id: 1, msv: "MS001", tsv: "Anh bec cop", tuoi: 21, gioitinh: "nam" },
  ]);
  const [indexsuasv, setindexsuasv] = useState(null);

  const suaindex = (setindex, setchucnang) => {
    setgoichucnang(setchucnang);
    setanhienform(true);
    setindexsuasv(setindex);
  };

  const goichucnang = (chucnang) => {
    setanhienform(true);
    setgoichucnang(chucnang);
  };
  const themmoisinhvien = (themmoi) => {
    setlistsinhvien([...listsinhvien, themmoi]);
    setgoichucnang("");
    setanhienform(false);
  };
  const suasinhvien = (noidung) => {
    setgoichucnang("");

    const suasv = [...listsinhvien];
    suasv[indexsuasv] = noidung;
    setlistsinhvien(suasv);

    setanhienform(false);
    setindexsuasv(null);
  };
  const xoaindex = (indexxoa) => {
    const listsauxoa = [...listsinhvien];
    listsauxoa.splice(indexxoa, 1);
    setlistsinhvien(listsauxoa);
  };

  const setcachsapxep = (cachsap) => {
    if (cachsap == 1) {
      const saplist = [...listsinhvien];
      saplist.sort((a, b) => a.tsv.length - b.tsv.length);
      setlistsinhvien(saplist);
    }
    if (cachsap == 2) {
      const saplist = [...listsinhvien];
      saplist.sort((a, b) => a.id - b.id);
      setlistsinhvien(saplist);
    }
    if (cachsap == 3) {
      const saplist = [...listsinhvien];
      saplist.sort((a, b) => b.id - a.id);
      setlistsinhvien(saplist);
    }
  };
  const settimkiem = (text) => {
    const listsinhvientk = listsinhvien.filter(
      (e) => e.tsv.toLowerCase().indexOf(text.toLowerCase()) !== -1
    );
    setlistsinhvien(listsinhvientk);
  };

  let form = "";
  if (anhienform) {
    form = (
      <Form_sv
        chucnang={chucnang}
        setthemmoisinhvien={themmoisinhvien}
        setchucnangsua={suasinhvien}
        indexsua={indexsuasv}
        listsv={listsinhvien}
      />
    );
  }
  return (
    <div>
      <Button_Add_sv
        setgoichucnang={goichucnang}
        setcachsapxep={setcachsapxep}
        settimkiem={settimkiem}
      />
      <Danhsach_sv
        danhsach_sv={listsinhvien}
        setindexsua={suaindex}
        xoasv={xoaindex}
      />
      {form}
    </div>
  );
}

export default Trangketnoi;
