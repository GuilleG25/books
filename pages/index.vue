<template>
  <div id="content-page" class="content-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div
            class="iq-card-transparent iq-card-block iq-card-stretch iq-card-height rounded"
          >
            <div class="newrealease-contens">
              <ul
                id="newrealease-slider"
                class="list-inline p-0 m-0 d-flex align-items-center"
              >
                <li class="item">
                  <a href="javascript:void(0);">
                    <img
                      src="images/new_realeases/01.jpg"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:void(0);">
                    <img
                      src="/images/new_realeases/02.jpg"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:void(0);">
                    <img
                      src="images/new_realeases/03.jpg"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:void(0);">
                    <img
                      src="images/new_realeases/04.jpg"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:void(0);">
                    <img
                      src="images/new_realeases/05.jpg"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:void(0);">
                    <img
                      src="images/new_realeases/06.jpg"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:void(0);">
                    <img
                      src="images/new_realeases/07.jpg"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:void(0);">
                    <img
                      src="images/new_realeases/08.jpg"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:void(0);">
                    <img
                      src="images/new_realeases/09.jpg"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div
              class="iq-card-header d-flex justify-content-between align-items-center position-relative"
            >
              <div class="iq-header-title">
                <h4 class="card-title mb-0">Browse Books</h4>
              </div>
              <div class="iq-card-header-toolbar d-flex align-items-center">
                <nuxt-link to="/search" class="btn btn-sm btn-primary view-more"
                  >View More</nuxt-link
                >
              </div>
            </div>
            <div class="iq-card-body">
              <div class="row">
                <div
                  v-for="(item, index) in books.slice(0, 9)"
                  :key="index"
                  class="col-sm-6 col-md-4 col-lg-3"
                >
                  <div
                    class="iq-card iq-card-block iq-card-stretch iq-card-height browse-bookcontent"
                  >
                    <div class="iq-card-body p-0">
                      <div class="d-flex align-items-center">
                        <div
                          class="col-6 p-0 position-relative image-overlap-shadow"
                        >
                          <a href="javascript:void();"
                            ><img
                              class="img-fluid rounded w-100"
                              :src="item.photo"
                              alt=""
                          /></a>
                          <div class="view-book">
                            <a href="#" class="btn btn-sm btn-white"
                              >View Book</a
                            >
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="mb-2">
                            <h6 class="mb-1">{{ item.name }}</h6>
                            <p class="font-size-13 line-height mb-1">
                              {{ item.author.name }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div
              class="iq-card-header d-flex justify-content-between align-items-center position-relative"
            >
              <div class="iq-header-title">
                <h4 class="card-title mb-0">Favorite Reads</h4>
              </div>
              <div class="iq-card-header-toolbar d-flex align-items-center">
                <nuxt-link to="/search" class="btn btn-sm btn-primary view-more"
                  >View More</nuxt-link
                >
              </div>
            </div>
            <div class="iq-card-body favorites-contens">
              <ul id="favorites-slider" class="list-inline p-0 mb-0 row">
                <li
                  v-for="(item, index) in books.slice(0, 9)"
                  :key="index"
                  class="col-md-4"
                >
                  <div class="d-flex align-items-center">
                    <div class="col-5 p-0 position-relative">
                      <a href="javascript:void();">
                        <img
                          :src="item.photo"
                          class="img-fluid rounded w-100"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="col-7">
                      <h5 class="mb-2">
                        {{ item.name }}
                      </h5>
                      <p class="mb-2">Author : {{ item.author.name }}</p>
                      <div
                        class="d-flex justify-content-between align-items-center text-dark font-size-13"
                      ></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
    }
  },
  mounted() {
    jQuery('.slick-slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 9,
      slidesToScroll: 1,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30',
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '15',
            slidesToShow: 1,
          },
        },
      ],
      nextArrow: '<a href="#" class="ri-arrow-left-s-line left"></a>',
      prevArrow: '<a href="#" class="ri-arrow-right-s-line right"></a>',
    })

    $('#newrealease-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      centerMode: true,
      centerPadding: false,
      variableWidth: true,
      infinite: true,
      focusOnSelect: true,
      autoplay: false,
      slidesToShow: 7,
      slidesToScroll: 1,
    })

    $('#newrealease-slider .slick-active.slick-center')
      .prev('.slick-active')
      .addClass('temp')
    $('#newrealease-slider .slick-active.temp').prev().addClass('temp-1')
    $('#newrealease-slider .slick-active.temp-1').prev().addClass('temp-2')

    $('#newrealease-slider .slick-active.slick-center')
      .next('.slick-active')
      .addClass('temp-next')
    $('#newrealease-slider .slick-active.temp-next')
      .next()
      .addClass('temp-next-1')
    $('#newrealease-slider .slick-active.temp-next-1')
      .next()
      .addClass('temp-next-2')

    $('#newrealease-slider').on('afterChange', function () {
      var slick_index = $('.slick-active.slick-center').data('slick-index')

      $(
        '#newrealease-slider .slick-active[data-slick-index="' +
          (slick_index - 1) +
          '"]'
      ).addClass('temp')
      $(
        '#newrealease-slider .slick-active[data-slick-index="' +
          (slick_index - 2) +
          '"]'
      ).addClass('temp-1')
      $(
        '#newrealease-slider .slick-active[data-slick-index="' +
          (slick_index - 3) +
          '"]'
      ).addClass('temp-2')

      $(
        '#newrealease-slider .slick-active[data-slick-index="' +
          parseInt(slick_index + 1) +
          '"]'
      ).addClass('temp-next')
      $(
        '#newrealease-slider .slick-active[data-slick-index="' +
          parseInt(slick_index + 2) +
          '"]'
      ).addClass('temp-next-1')
      $(
        '#newrealease-slider .slick-active[data-slick-index="' +
          parseInt(slick_index + 3) +
          '"]'
      ).addClass('temp-next-2')
    })

    $('#newrealease-slider').on('beforeChange', function () {
      var slick_index = $('.slick-active.slick-center').data('slick-index')

      $(
        '#newrealease-slider .slick-active[data-slick-index="' +
          (slick_index - 1) +
          '"]'
      ).removeClass('temp')
      $(
        '#newrealease-slider .slick-active[data-slick-index="' +
          (slick_index - 2) +
          '"]'
      ).removeClass('temp-1')
      $(
        '#newrealease-slider .slick-active[data-slick-index="' +
          (slick_index - 3) +
          '"]'
      ).removeClass('temp-2')

      $(
        '#newrealease-slider .slick-active[data-slick-index="' +
          parseInt(slick_index + 1) +
          '"]'
      ).removeClass('temp-next')
      $(
        '#newrealease-slider .slick-active[data-slick-index="' +
          parseInt(slick_index + 2) +
          '"]'
      ).removeClass('temp-next-1')
      $(
        '#newrealease-slider .slick-active[data-slick-index="' +
          parseInt(slick_index + 3) +
          '"]'
      ).removeClass('temp-next-2')
    })

    $('#favorites-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })

    this.getAllBooks()
  },
  methods: {
    async getAllBooks() {
      const that = this
      this.$books
        .getAll()
        .then((books) => {
          that.books = books
        })
        .catch((error) => {
          console.error('Error getAll: ', error)
        })
    },
  },
}
</script>
