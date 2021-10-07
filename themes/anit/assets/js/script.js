$(document).ready(function () {
  // skill count
  $(".skill__progress").waypoint(
    function () {
      $(".progress-value span").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 3000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
      $(".skill__progress_item").addClass("js-animation");
      this.destroy();
    },
    { offset: "80%" }
  );
});
