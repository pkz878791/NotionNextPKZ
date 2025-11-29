// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3', 
  
  // 【关键修改1】这里填入了你的真实ID，双重保险，防止Vercel环境变量读取失败
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    'a2d1692d3eac48438dd2b85d1a6b4c32',

  // 【关键修改2】主题保持 Heo (手机端好看)
  THEME: process.env.NEXT_PUBLIC_THEME || 'heo', 
  
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', 
  
  // 【关键修改3】建站年份改成 2025，这样就不会显示“建站1531天”了
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2025, 

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, 
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, 
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', 
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], 

  // 【关键修改4】你的名字
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '878791', 
  
  // 【关键修改5】侧边栏简介，去掉了“NotionNext搭建”字样
  BIO: process.env.NEXT_PUBLIC_BIO || '专注收集全网最火AI工具与软件', 
  
  // 【关键修改6】你的网址
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://www.878791.xyz', 
  
  // 【关键修改7】SEO关键词，方便搜索引擎收录
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'AI工具, 软件下载, 免费资源, 878791, 破解软件, 自学教程', 
  
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', 
  
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', 
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', 
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '', 

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, 

  // 【新增配置】强制清空底部版权信息中的额外文字
  FOOTER_INFO: process.env.NEXT_PUBLIC_FOOTER_INFO || '',

  // 其它复杂配置 (保持原样引用)
  ...require('./conf/comment.config'), 
  ...require('./conf/contact.config'), 
  ...require('./conf/post.config'), 
  ...require('./conf/analytics.config'), 
  ...require('./conf/image.config'), 
  ...require('./conf/font.config'), 
  ...require('./conf/right-click-menu'), 
  ...require('./conf/code.config'), 
  ...require('./conf/animation.config'), 
  ...require('./conf/widget.config'), 
  ...require('./conf/ad.config'), 
  ...require('./conf/plugin.config'), 
  ...require('./conf/performance.config'), 
  ...require('./conf/layout-map.config'), 
  ...require('./conf/notion.config'), 
  ...require('./conf/dev.config'), 

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], 
  CUSTOM_EXTERNAL_CSS: [''], 

  // 自定义菜单
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, 

  // 文章列表相关设置
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, 

  // 侧栏布局
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 【关键修改8】修改了首页打字机的欢迎语，更符合资源站调性
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    '欢迎来到878791的宝藏库🎉, 这里有最新AI工具🤖, 这里有免费软件下载💾, 记得按 Ctrl+D 收藏哦⭐',

  // uuid重定向至 slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
