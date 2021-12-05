import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Element, { locale })

Vue.prototype.$log = (...args) => {
  // eslint-disable-next-line no-console
  console.log(
    `%c navigator `,
    'background:#35495e ; padding: 1px; border-radius: 3px 3px 3px 3px;  color: #fff',
    ...args
  )
}

Vue.prototype.$logError = (...args) => {
  // eslint-disable-next-line no-console
  console.error(
    `%c navigator `,
    'background:#ab342e ; padding: 1px; border-radius: 3px 3px 3px 3px;  color: #fff',
    ...args
  )
}
