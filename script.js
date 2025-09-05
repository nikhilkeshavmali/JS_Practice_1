var rect = document.querySelector("#center");

function mapRange(inMin, inMax, outMin, outMax, value) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

rect.addEventListener("mousemove", function (details) {
  var rectangle = rect.getBoundingClientRect();
  var insiderctval = details.clientX - rectangle.left;

  if (insiderctval < rectangle.width / 2) {
    // left side → red color
    var redcolor = mapRange(0, rectangle.width / 2, 255, 0, insiderctval);
    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: "power4.out",
    });
  } else {
    // right side → blue color
    var bluecolor = mapRange(
      rectangle.width / 2,
      rectangle.width,
      0,
      255,
      insiderctval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${bluecolor})`,
      ease: "power4.out",
    });
  }
});
