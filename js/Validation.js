function KiemTraTenDN(){

  // 5-32 chữ, bắt đầu bằng ký tự, không chứa khoảng trắng

  var re = /^[a-zA-Z](\w){5,32}$/;
  if(re.test(document.getElementById('DangNhap').value.trim()) == false){
    check1.innerText = "* 5-32 chữ, bắt đầu bằng ký tự";
    return false;
  } else {
    check1.innerText = ""
    return true;
  }
}



function KiemTraMatKhau(){

  // Phải có chữ, số, ít nhất 6 ký tự

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

    // Mật khẩu nhập lại phải trùng với mật khẩu đã nhập

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
    
    // Họ tên viết hoa đầu từ, không chứa số và ký tự đặc biệt

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

  // Tuổi phải lớn hơn 10

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

function KiemTraSDT(){
    
  // Số điện thoại gồm 10 số, bắt đầu bằng 09, 03, 07, 08, 05

  var SDT = document.getElementById('dienthoai').value;
  var re = /^((09|03|07|08|05)+([0-9]{8}))+$/;
  if(SDT.trim() == ""){
    check6.innerText = "";
    return false;
  }
  else if(re.test(SDT.trim()) == false){
    check6.innerText = "Số điện thoại không hợp lệ!";
    return false;
  } else {
    check6.innerText = "";
    return true;
  }
}

function KiemTraEmail(){
    
  // 

  var Email = document.getElementById('email').value;
  var re = /^\w+([.-]?\w+)\@(\w+([.-]?\w+))+(.\w{2,3})+$/;
  if(Email.trim() == ""){
    check7.innerText = "";
    return false;
  }
  else if(re.test(Email.trim()) == false){
    check7.innerText = "Email không hợp lệ!";
    return false;
  } else {
    check7.innerText = "";
    return true;
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