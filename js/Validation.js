function KiemTraTenDN(){
  var re = /^[a-zA-Z]\w*/;
  if(re.test(document.getElementById('DangNhap').value.trim()) == false){
    check1.innerText = "* Bắt buộc, bắt đầu bằng ký tự";
    return false;
  } else {
    check1.innerText = ""
    return true;
  }
}

function KiemTraMatKhau(){
  var re1 = /((?=.*[A-Za-z].*\d).{6,})/;
  var re2 = /((?=.*\d.*[A-Za-z]).{6,})/;
  var mk = document.getElementById('MatKhau').value;
  var nhaplaiMK = document.getElementById('NhapLaiMK').value;
  if(re1.test(mk.trim()) == false && re2.test(mk.trim()) == false){
    check2.innerText = "* Phải có chữ, số, ít nhất 6 ký tự";
    return false;
  } else {
    check2.innerText = "";
    if(mk != nhaplaiMK)
      check3.innerText = "*";      
    return true;
  }
}

  function NhapLaiMatKhau(){
    var mk = document.getElementById('MatKhau').value;
    var nhaplaiMK = document.getElementById('NhapLaiMK').value;
    if(mk != nhaplaiMK) {
      check3.innerText = "* Mật khẩu chưa trùng khớp";
      return false;
    } else if((mk == nhaplaiMK) && mk.trim() != ""){
      check3.innerText = "";
      return true;
    } 
  }

  function KiemTraHoTen(){
    
    var hoten = document.getElementById('hoten').value;
    var re = /^([A-Z][a-z]*)(\s[A-Z][a-z]*)+$/;
    if(hoten.trim() == ""){
      check4.innerText = "*";
      return false;
    }
    else if(re.test(hoten.trim()) == false){
      check4.innerText = "Họ tên viết hoa đầu từ, không chứa số và ký tự đặc biệt";
      return false;
    } else {
      check4.innerText = "";
      return true;
    }
  }

function KiemTraNgaySinh(idCheck, idNgay){
  var ns = new Date(document.getElementById(idNgay).value);  
  var today = new Date();
  if(ns != "Invalid Date"){    
    if(eval(today.getFullYear() - ns.getFullYear() <= 10)){
      idCheck.innerText = "Tuổi phải lớn hơn 10";
      return false;
    } else {
      idCheck.innerText = "";
      return true;
    }
  }
}

function SubmitForm(){
  if(KiemTraTenDN() == false || KiemTraMatKhau() == false 
    || NhapLaiMatKhau() == false || KiemTraHoTen() == false 
    || KiemTraNgaySinh() == false){
      alert("Bạn chưa nhập đủ thông tin!");
      return false;
    }
}