export default function ({ app, route, redirect }) {
  if (
    route.path !== '/sign-in' &&
    route.path !== '/sign-up' &&
    route.path !== '/verify-email' &&
    route.path !== '/forgot-password'
  ) {
    //we are on a protected route
    if (!app.$fire.auth.currentUser) {
      //take them to sign in page
      return redirect('/sign-in')
    } else if (
      app.$fire.auth.currentUser &&
      !app.$fire.auth.currentUser.emailVerified
    ) {
      return redirect('/verify-email')
    }
  } else if (route.path === '/sign-in' || route.path === '/sign-up') {
    if (!app.$fire.auth.currentUser) {
      //leave them on the sign in page
    } else {
      return redirect('/')
    }
  }
}
