import { DocsThemeConfig } from 'nextra-theme-docs';
import { FaTelegramPlane } from "react-icons/fa";
const config: DocsThemeConfig = {
  logo: <span>Emotion</span>,
  project: {
    link: 'https://github.com/Skill-g/Emotion',
  },
  
  chat: {
    icon: <FaTelegramPlane size={24}/>,
    link: 'https://t.me/Skill331',
  },
  editLink: {
    text: '',
    component: ({ children, className, filePath }) => {
      return (
        <a className={className} href={filePath} style={{ display: 'none' }}>
          {children}
        </a>
      );
    }
  },
  feedback: {
    content: ''
  },
  toc: {
    title: 'На этой странице'
  },
  search: {
    placeholder: 'Поиск в документации'
  },
  footer: {
    component: ({}) => {
      return (
        <a style={{ display: 'none' }}>
        </a>
      );
    },
    text: '',
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Светлая',
        dark: 'Темная',
        system: 'Системная'
      }
    }
  },
  head: (
    <>
     <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/favicon.ico"
      />
    </>
  )
}

export default config
