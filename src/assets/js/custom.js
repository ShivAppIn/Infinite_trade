/******OTP Box***************/
$('.sms-no-box').keyup(function () {
  if (this.value.length == 1) {
    $(this).next('.sms-no-box').focus();
  }
});

$('.sms-no-box').keyup(function (event) {
  var $this = $(this);
  var key = event.keyCode || event.charCode;
  if (key == 8 || key == 46 || key == 10) {
    $this.val('');
    $this.prev('.sms-no-box').focus();
  }
});
/******OTP Box close***********/
