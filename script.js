function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("left").classList.toggle("change");
}

function storedata() {
  let e = document.getElementById("enter_biller_details_cotent_select");
  let billerUser = e.options[e.selectedIndex].value;
  sessionStorage.setItem("BillerName", billerUser);
  sessionStorage.MobileNumber = document.getElementById("mnumber").value;
  sessionStorage.NickName = document.getElementById("nname").value;
  sessionStorage.BillerNameRemarks = document.getElementById("remarks").value;
  sessionStorage.BillerNameAmount = document.getElementById("amount").value;
  let f = document.getElementById("enter_transaction_details_content_select");
  let strUser = f.options[f.selectedIndex].value;
  sessionStorage.setItem("TransferFrom", strUser);
}

function dataReset() {
  let x = document.querySelectorAll("input");
  for (i = 0; i < x.length; i++) {
    x[i].value = "";
  }

  var options = document.querySelectorAll("option");
  for (var i = 0, l = options.length; i < l; i++) {
    options[i].selected = options[i].defaultSelected;
  }
}
