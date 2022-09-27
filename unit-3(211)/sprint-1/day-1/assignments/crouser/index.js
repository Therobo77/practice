




let img = document.querySelector(".ra_crauser>img");
let buttons = document.querySelectorAll(".ra_crauser>button");
let imgNum = 0;
let imgArray = [
  "https://www.bigbasket.com/media/uploads/banner_images/hp_fom_TB_Staples_nagpur_460_200822.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/fresho-days-fnv-Nagpur-1600x460-23rdAUG22.jpeg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_fmcg_t2_nagpur_460_200822.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_kgp_bbhome-exclusive_460-250722.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_gwf_happychef_460-250722.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_bcd_paneer_460-250722.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_sbf_tasties-origin_460-250722.jpg",
];
buttons[0].addEventListener("click", function () {
  if (imgNum === 0) {
    imgNum = imgArray.length - 1;
  } else {
    imgNum--;
  }
  img.src = imgArray[imgNum];
});

buttons[0].addEventListener("click", autoSlide());
function autoSlide() {
  if (imgNum === 0) {
    imgNum = imgArray.length - 1;
  } else {
    imgNum--;
  }
  img.src = imgArray[imgNum];
}
setInterval(autoSlide, 3000);

buttons[1].addEventListener("click", function () {
  if (imgNum === imgArray.length - 1) {
    imgNum = 0;
  } else {
    imgNum++;
  }
  img.src = imgArray[imgNum];
});