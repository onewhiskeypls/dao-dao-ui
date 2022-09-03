import '@dao-dao/ui/styles/index.css'

import i18n from './i18next'
import { NotificationsDecorator, RecoilDecorator, ThemeDecorator } from '../decorators'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
  },
  nextRouter: {
    isReady: true,
  },
  // No need to enable `darkMode.stylePreview` because we handle theme manually
  // in `ThemeDecorator`.
}

export const decorators = [ThemeDecorator, RecoilDecorator, NotificationsDecorator]
