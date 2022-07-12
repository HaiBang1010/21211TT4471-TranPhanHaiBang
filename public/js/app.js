const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toggleSearch = $(".header__navbar-search"); //enable/ disable search input display
const searchContainer = $(".search-container"); // show search container
const headerNavbar = $(".header__navbar"); // css background color for header navbar
const serviceContent = $(".main__top__iconcontent"); // map service content
const listReviewData = [
  {
    title:
      "Quisque varius, nibh ac feugiat interdum, libero massa laoreet tellus, nec congue lorem arcu a nunc. Praesent quis felis eget elit semper pharetra sollicitudin id nibh. Praesent venenatis lectus ornare, porta risus quis, commodo nulla. Nunc adipiscing ipsum",
    author: "Robert Taylor, Dusty Ltd.",
  },
  {
    title:
      "Vestibulum et consequat justo. Maecenas ultrices malesuada leo porta venenatis. Sed sit amet diam facilisis, interdum tellus nec, dignissim massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse consequat",
    author: "Lisa Bingo, Safety Co.",
  },
  {
    title:
      "Cras elementum sed mi sit amet ullamcorper. Cras sed felis a enim rutrum lobortis a eu nisi. Curabitur justo libero, hendrerit at consequat ut, sagittis convallis lorem. Morbi interdum mattis justo, sed commodo nibh ultricies nec. Duis ornare lacus quam, sit",
    author: "David Stern, Western Ltd.",
  },
  {
    title:
      "Cras sit amet metus id odio sollicitudin eleifend non id lectus. Vivamus commodo est magna, ut hendrerit elit hendrerit in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed pulvinar quam varius sapien commodo",
    author: "Olivia Grosh, client",
  },
  {
    title:
      "Etiam eget accumsan neque, et sollicitudin lacus. Ut nunc nibh, molestie vel varius in, placerat vel velit. Etiam non euismod ante. Nulla id fermentum augue, eu elementum risus. Donec sit amet turpis tempus, vehicula mi hendrerit, dictum felis. Cras tincidunt",
    author: "Mark Johnson, client",
  },
];

const listSeviceReview = [
  {
    icon: "fa-solid fa-leaf",
    title: "CONSECTETUER ADIPISCING",
    description:
      "Nulla lobortis malesuada laoreet. Donec tortor massa, elementum quis convallis",
  },
  {
    icon: "fa-solid fa-thumbs-up",
    title: "PRAESENT VESTIBULUM",
    description:
      "Nulla lobortis malesuada laoreet. Donec tortor massa, elementum quis convallis convallis",
  },
  {
    icon: "fa-solid fa-droplet",
    title: "MOLESTIE LACUS",
    description:
      "Nulla lobortis malesuada laoreet. Donec tortor massa, elementum quis convallis convallis",
  },
  {
    icon: "fa-solid fa-umbrella",
    title: "AENEAN NONUMMY",
    description:
      "Nulla lobortis malesuada laoreet. Donec tortor massa, elementum quis convallis convallis",
  },
  {
    icon: "fa-solid fa-user-group",
    title: "HENDRERIT MAURIS",
    description:
      " Nulla lobortis malesuada laoreet. Donec tortor massa, elementum quis convallis convallis",
  },
  {
    icon: "fa-solid fa-heart",
    title: "PHASELLUS PORTA",
    description:
      "Nulla lobortis malesuada laoreet. Donec tortor massa, elementum quis convallis convallis",
  },
];

toggleSearch.addEventListener("click", (e) => {
  if ($(".search-container.active")) {
    searchContainer.classList.remove("active");
  } else {
    searchContainer.classList.add("active");
  }
});

var newServiceContent = listSeviceReview.map((data) => {
  return `
  <div class="iconcontent__icon">
    <div class="iconcontent__icon--bg">
        <div class="icon">
            <p>
                <i class="${data.icon}"></i>
            </p>
        </div>
    </div>
    <div class="iconcontent__icon--content">
        <h6>
            <a href="#">${data.title}</a>
        </h6>
        ${data.description}
    </div>
  </div>`;
});
serviceContent.innerHTML = newServiceContent.join("");

// bakctop
const bakctop = document.querySelector("#backtop");
window.onscroll = function () {
  scrollFunction();
  scrollNavbar();
};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    bakctop.style.display = "block";
    bakctop.style.animation = "zoom-in-out 0.3s ease";
  } else {
    bakctop.style.display = "none";
    bakctop.style.animation = "zoom-out-in 0.3s ease";
  }
}
bakctop.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

//navigation fixed background
const navbar = document.querySelector(".header__navbar");

function scrollNavbar() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.style.background = "#fff";
  } else {
    navbar.style.background = "none";
  }
}

//silder-header
let a = 1;
const slide_header_control = $$(".slide");
const header_slide = $(".header-slide");
const header_slide_h2 = $("h2");
const header_slide_inner__oder = $(".inner__oder");
slide_header_control.forEach((element) => {
  element.onclick = function () {
    chuyenSlide(element.id);
    $(".slide.active").classList.remove("active");
    element.classList.add("active");
    a = element.id;
  };
});

function chuyenSlide(id_slide) {
  header_slide.style.backgroundImage = `url(./public/images/slide-${id_slide}.jpg)`;
  if (id_slide == 2) {
    header_slide_h2.textContent =
      "Think of us as your personal design assistant!";
    header_slide_inner__oder.textContent = "Order Number 124";
  } else if (id_slide == 1) {
    header_slide_h2.textContent = "Live in harmony within our environment!";
    header_slide_inner__oder.textContent = "Order Number 109";
  } else if (id_slide == 3) {
    header_slide_h2.textContent =
      "An overflowing portfolio of beautiful furnishings for you!";
    header_slide_inner__oder.textContent = "Order Number 307";
  } else if (id_slide == 4) {
    header_slide_h2.textContent =
      "The largest assortment of unique and affordable items for your home!";
    header_slide_inner__oder.textContent = "Order Number 342";
  }
  id_slide++;
  if (id_slide > 4) {
    id_slide = 1;
  }
}
//tu dong chuyen trang
setInterval(() => {
  slide_header_control.forEach((element) => {
    if (element.id == a) {
      $(".slide.active").classList.remove("active");
      element.classList.add("active");
    }
  });
  chuyenSlide(a);
  a++;
  if (a > slide_header_control.length) {
    a = 1;
  }
}, 4000);

//between last
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// slider footer top
const sliderMani = $(".footer__top--comment");
const sliderItems = $$(".comment__item");
const dotItems = $$(".slider__dot--item");

dotItems.forEach((element) => {
  element.addEventListener("click", function () {
    let dataIndex = element.getAttribute("data-index");
    sliderMani.style.transform = `translateX(${
      -1 * dataIndex * (sliderItems[0].offsetWidth + 45)
    }px)`;
    $(".slider__dot--item.active").classList.remove("active");
    element.classList.add("active");
  });
});
slide_header_control.forEach((element) => {
  if (element.id == a) {
    element.classList.add("active");
  }
});
