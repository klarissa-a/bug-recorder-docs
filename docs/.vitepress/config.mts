import { defineConfig } from 'vitepress';

// Версия проверенной реализации; обновлять после сверки документации с новым выпуском.
export const extensionVersion = '0.24.7';

export default defineConfig({
  title: 'Bug Report Recorder Docs',
  description: 'Документация по расширению Bug Report Recorder для записи действий и формирования баг-репортов.',
  lang: 'ru-RU',
  locales: { root: { label: 'Русский', lang: 'ru-RU' } },
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],
  themeConfig: {
    siteTitle: 'Bug Report Recorder',
    nav: [
      { text: 'Документация', link: '/getting-started/what-is' },
      { text: 'Помощь', link: '/help/troubleshooting' },
      { text: 'Telegram', link: 'https://t.me/testingqabug' },
      { text: 'Версия ' + extensionVersion, link: '/getting-started/what-is#версия-документации' }
    ],
    sidebar: [
  {
    "text": "Начало работы",
    "collapsed": false,
    "items": [
      {
        "text": "Что такое Bug Report Recorder",
        "link": "/getting-started/what-is"
      },
      {
        "text": "Установка",
        "link": "/getting-started/installation"
      },
      {
        "text": "Первая запись",
        "link": "/getting-started/first-recording"
      }
    ]
  },
  {
    "text": "Recorder",
    "collapsed": false,
    "items": [
      {
        "text": "Начало записи",
        "link": "/recorder/start"
      },
      {
        "text": "Панель",
        "link": "/recorder/panel"
      },
      {
        "text": "Пауза и продолжение",
        "link": "/recorder/pause"
      },
      {
        "text": "Завершение записи",
        "link": "/recorder/stop"
      },
      {
        "text": "Работа между вкладками",
        "link": "/recorder/tabs"
      },
      {
        "text": "Сохранённый черновик",
        "link": "/recorder/draft"
      }
    ]
  },
  {
    "text": "Шаги",
    "collapsed": false,
    "items": [
      {
        "text": "Как формируются шаги",
        "link": "/steps/how-it-works"
      },
      {
        "text": "Просмотр шагов",
        "link": "/steps/view"
      },
      {
        "text": "Редактирование",
        "link": "/steps/edit"
      },
      {
        "text": "Удаление",
        "link": "/steps/delete"
      },
      {
        "text": "Поля ввода",
        "link": "/steps/inputs"
      }
    ]
  },
  {
    "text": "Баг-репорт",
    "collapsed": false,
    "items": [
      {
        "text": "Структура отчёта",
        "link": "/report/"
      },
      {
        "text": "Заголовок",
        "link": "/report/title"
      },
      {
        "text": "Ожидаемый и фактический результат",
        "link": "/report/expected-actual"
      },
      {
        "text": "Окружение",
        "link": "/report/environment"
      },
      {
        "text": "Копирование отчёта",
        "link": "/report/copy"
      }
    ]
  },
  {
    "text": "Network",
    "collapsed": false,
    "items": [
      {
        "text": "Что записывается",
        "link": "/network/"
      },
      {
        "text": "Работа с запросами",
        "link": "/network/requests"
      }
    ]
  },
  {
    "text": "Настройки",
    "collapsed": false,
    "items": [
      {
        "text": "RU / EN",
        "link": "/settings/language"
      }
    ]
  },
  {
    "text": "Помощь",
    "collapsed": false,
    "items": [
      {
        "text": "Решение проблем",
        "link": "/help/troubleshooting"
      },
      {
        "text": "Recorder не запускается",
        "link": "/help/not-starting"
      },
      {
        "text": "Не записался шаг",
        "link": "/help/missing-step"
      },
      {
        "text": "Не отображается Network",
        "link": "/help/missing-network"
      },
      {
        "text": "Панель ведёт себя неправильно",
        "link": "/help/panel"
      },
      {
        "text": "Сообщить о проблеме",
        "link": "/help/report-a-bug"
      },
      {
        "text": "Предложить улучшение",
        "link": "/help/suggest-feature"
      }
    ]
  }
],
    outline: { label: 'На этой странице', level: [2, 3] },
    docFooter: { prev: 'Предыдущая страница', next: 'Следующая страница' },
    sidebarMenuLabel: 'Разделы',
    returnToTopLabel: 'Наверх',
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Включить светлую тему',
    darkModeSwitchTitle: 'Включить тёмную тему',
    skipToContentLabel: 'Перейти к содержимому',
    externalLinkIcon: true,
    notFound: {
      title: 'Страница не найдена',
      quote: 'Воспользуйтесь поиском или вернитесь к началу документации.',
      linkLabel: 'На главную',
      linkText: 'На главную'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск по документации' },
          modal: {
            displayDetails: 'Показать подробности',
            resetButtonTitle: 'Очистить поиск',
            backButtonTitle: 'Закрыть поиск',
            noResultsText: 'Ничего не найдено',
            footer: { selectText: 'выбрать', selectKeyAriaLabel: 'Enter', navigateText: 'перейти', navigateUpKeyAriaLabel: 'Стрелка вверх', navigateDownKeyAriaLabel: 'Стрелка вниз', closeText: 'закрыть', closeKeyAriaLabel: 'Escape' }
          }
        }
      }
    },
    footer: { message: 'Документация для ручных тестировщиков · <a href="https://t.me/testingqabug">Telegram-канал</a>' }
  }
});

