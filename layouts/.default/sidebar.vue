<template>
  <div class="iq-sidebar">
    <div class="iq-sidebar-logo d-flex justify-content-between">
      <a href="index.html" class="header-logo">
        <img src="/images/logo.png" class="img-fluid rounded-normal" alt="" />
        <div class="logo-title">
          <span class="text-primary text-uppercase">Booksto</span>
        </div>
      </a>
      <div class="iq-menu-bt-sidebar">
        <div class="iq-menu-bt align-self-center">
          <div class="wrapper-menu">
            <div class="main-circle"><i class="las la-bars"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div id="sidebar-scrollbar">
      <nav class="iq-sidebar-menu">
        <ul id="iq-sidebar-toggle" class="iq-menu">
          <li>
            <nuxt-link to="/" exact-active-class="active active-menu"
              ><i class="las la-home iq-arrow-left"></i><span>Home</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/dashboard" exact-active-class="active active-menu"
              ><i class="ri-dashboard-line"></i><span>Dashboard</span>
            </nuxt-link>
          </li>
          <li>
            <a
              href="#authorinfo"
              class="iq-waves-effect"
              data-toggle="collapse"
              :aria-expanded="
                $route.name && $route.name.split('-')[0] === 'authors'
                  ? 'true'
                  : 'false'
              "
              ><span class="ripple rippleEffect"></span
              ><i class="las la-user-tie iq-arrow-left"></i><span>Author</span
              ><i class="ri-arrow-right-s-line iq-arrow-right"></i
            ></a>
            <ul
              id="authorinfo"
              class="iq-submenu collapse"
              :class="{
                show: $route.name && $route.name.split('-')[0] === 'authors',
              }"
              data-parent="#iq-sidebar-toggle"
              style=""
            >
              <li>
                <nuxt-link
                  to="/authors/add"
                  exact-active-class="active active-menu"
                  ><i class="las la-plus-circle"></i><span>Add</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/authors/list"
                  exact-active-class="active active-menu"
                  ><i class="las la-th-list"></i><span>List</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#bookinfo"
              class="iq-waves-effect"
              data-toggle="collapse"
              :aria-expanded="
                $route.name && $route.name.split('-')[0] === 'books'
                  ? 'true'
                  : 'false'
              "
              ><span class="ripple rippleEffect"></span
              ><i class="ri-file-pdf-line"></i><span>Books</span
              ><i class="ri-arrow-right-s-line iq-arrow-right"></i
            ></a>
            <ul
              id="bookinfo"
              class="iq-submenu collapse"
              :class="{
                show: $route.name && $route.name.split('-')[0] === 'books',
              }"
              data-parent="#iq-sidebar-toggle"
              style=""
            >
              <li>
                <nuxt-link
                  to="/books/add"
                  exact-active-class="active active-menu"
                  ><i class="las la-plus-circle"></i><span>Add</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/books/list"
                  exact-active-class="active active-menu"
                  ><i class="las la-th-list"></i><span>List</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/books/categories"
                  exact-active-class="active active-menu"
                  ><i class="las la-th-list"></i><span>Categories</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- <div id="sidebar-bottom" class="p-3 position-relative">
        <div class="iq-card">
          <div class="iq-card-body">
            <div class="sidebarbottom-content">
              <div class="image">
                <img src="images/page-img/side-bkg.png" alt="" />
              </div>
              <button
                type="submit"
                class="btn w-100 btn-primary mt-4 view-more"
              >
                Become Membership
              </button>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
