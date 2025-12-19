let employees = []; // SIMPAN SEMUA DATA

exports.home = (req, res) => {
  res.render("home", { data: null, employees });
};

exports.analisis = (req, res) => {
  const { nama, departemen, produktif, hadir, disiplin } = req.body;

  const rata =
    (Number(produktif) + Number(hadir) + Number(disiplin)) / 3;

  const status = rata >= 70 ? "Memenuhi Standar" : "Tidak Memenuhi";

  const data = {
    nama,
    departemen,
    produktif,
    hadir,
    disiplin,
    rata: rata.toFixed(2),
    status
  };

  employees.push(data);

  res.render("home", { data, employees });
};
