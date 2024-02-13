var localHost = "localhost" === location.hostname,
  tile = {
    data: {},
    str: {},
    tileConfig: {},
    getNav: function () {
      return document.getElementById("AppNavigator");
    },
    popPanel: function () {
      consolelog("popPanel"), tile.getNav().popPage();
    },
    resetStack: function () {
      tile.getNav().resetPage();
    },
    dollarify: function (t) {
      return t
        ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        }).format(t)
        : null;
    },
    stickyHeaderInit: function (t) {
      var e,
        i = $("#" + t + " .sticky");
      return (
        i.length > 0 &&
        (e = i.each(function () {
          let t;
          (t = $(this).parent().hasClass("followWrap")
            ? $(this)
            : $(this).wrap('<div class="followWrap" />')),
            t
              .data("originalPosition", t.offset().top)
              .data("originalHeight", t.outerHeight())
              .parent()
              .height(t.outerHeight());
        })),
        e
      );
    },
    stickyHeaderScroll: function (t, e, i) {
      var o = $("#" + t + " .cdp_page_container ").scrollTop(),
        a = document.querySelector(".cdp_hero").offsetHeight;
      $("#" + t + " .cdp_page_container .search-icon"),
        0 != o
          ? i.each(function (t) {
            var n = $(this);
            if (n.data("originalPosition") <= e + o) {
              var r = i.eq(t + 1),
                s = r.data("originalPosition") - n.data("originalHeight");
              n.addClass("stickyFixed"),
                r.length > 0 &&
                o + n.offset().top + e >= s &&
                n.addClass("stickyAbsolute").css("top", a);
            } else {
              var l = i.eq(t - 1);
              n.removeClass("stickyFixed"),
                l.length > 0 &&
                o + a <=
                n.data("originalPosition") - n.data("originalHeight") &&
                l.removeClass("stickyAbsolute").removeAttr("style");
            }
          })
          : i.each(function (t) {
            $(this)
              .removeClass("stickyFixed")
              .removeClass("stickyAbsolute")
              .removeAttr("style");
          });
    },
  };
