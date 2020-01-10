    function toggleMenu(){
        document.getElementById("topnav").style.display = "block";
      }

    $(document).ready(function () {
      var $randomNumber = $('.nbr');
      var $timer = 30;
      var $it;
      var $data = 0;
      var index;
      var change;
      var letters = ["L", "E", "T", " ", "U", "S", " ", "T", "R", "A", "V", "E", "L"];

      $randomNumber.each(function () {
        change = Math.round(Math.random() * 100);
        $(this).attr('data-change', change);
      });

      function random() {
        return Math.round(Math.random() * 9);
      };

      function select() {
        return Math.round(Math.random() * $randomNumber.length + 1);
      };

      function value() {
        $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
        $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
        $data++;

        $randomNumber.each(function () {
          if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
            index = $('.ltr').index(this);
            $(this).html(letters[index]);
            $(this).removeClass('nbr');
          }
        });
      };
      $it = setInterval(value, $timer);
    });