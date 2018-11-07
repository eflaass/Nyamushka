$(function() {
  $(".foiegras").hover(function() {
    $(this).toggleClass("foiegras-hover");
  });
  $(".foiegras, .foiegras_text span").on("click", function() {
    $(".foiegras").toggleClass("foiegras-selected");
    $(".foiegras_text").toggleClass("text_hide");
    $(".foiegras_text_alt").toggleClass("text_visible");
    $(document).on("mouseenter", ".foiegras-selected", function() {
      $(".foiegras").addClass("foiegras-selected-hover");
    });
    $(document).on("mouseleave click", ".foiegras", function() {
      $(".foiegras").removeClass("foiegras-selected-hover");
    });
  });
  $(".ryba").hover(function() {
    $(this).toggleClass("ryba-hover");
  });
  $(".ryba, .ryba_text span").on("click", function() {
    $(".ryba").toggleClass("ryba-selected");
    $(".ryba_text").toggleClass("text_hide");
    $(".ryba_text_alt").toggleClass("text_visible");
    $(document).on("mouseenter", ".ryba-selected", function() {
      $(".ryba").addClass("ryba-selected-hover");
    });
    $(document).on("mouseleave click", ".ryba", function() {
      $(".ryba").removeClass("ryba-selected-hover");
    });
  });
  $(".kura").hover(function() {
    $(this).toggleClass("kura-hover");
  });
  $(".kura, .kura_text span").on("click", function() {
    $(".kura").toggleClass("kura-selected");
    $(".kura_text").toggleClass("text_hide");
    $(".kura_text_alt").toggleClass("text_visible");
    $(document).on("mouseenter", ".kura-selected", function() {
      $(".kura").addClass("kura-selected-hover");
    });
    $(document).on("mouseleave click", ".kura", function() {
      $(".kura").removeClass("kura-selected-hover");
    });
  });
$(".kura-disabled").on("click", function() {
$(".kura_text_disabled").css("visibility", "visible");
$(".kura_text_alt, .kura_text").css("visibility", "hidden");
});
$(".kura-disabled").trigger("click");
});
