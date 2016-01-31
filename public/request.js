$(document).ready(function () {
  function update(data) {
    $('#sentence').html(data);
  }

  $('#tryharder').click(function () {
    $.get('http://homletmoo.co.uk/insult?max_len=14', success=update);
  });
});
