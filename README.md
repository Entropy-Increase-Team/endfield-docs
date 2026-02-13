# Endfield API 文档

终末地协议终端 API 开放文档站，基于 [Mintlify](https://mintlify.com) 构建。

## 本地开发

### 安装 CLI

```bash
npm i -g mint
```

### 启动预览

```bash
mint dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看文档。

## 项目结构

```
endfield-docs/
├── docs.json              # Mintlify 站点配置
├── openapi.json           # OpenAPI 3.1 规范
├── style.css              # 自定义样式（工业科幻风格）
├── embed.js               # 嵌入模式脚本（iframe 集成用）
├── logo/                  # Logo 资源
├── introduction.mdx       # 平台介绍
├── quickstart.mdx         # 快速开始
├── authentication.mdx     # 认证体系
├── concepts/              # 核心概念
│   ├── credentials.mdx    # 凭证体系
│   ├── rate-limiting.mdx  # 速率限制与配额
│   ├── error-codes.mdx    # 错误码参考
│   └── subscription.mdx   # 订阅计划
├── guides/                # 使用指南
│   ├── web-integration.mdx
│   ├── bot-integration.mdx
│   ├── gacha-analysis.mdx
│   └── blueprint-library.mdx
└── changelog.mdx          # 更新日志
```

## 主题配置

- **主题**: `linden`（终端复古风格）
- **主色**: 工业黄 `#FFD000`
- **暗色背景**: `#050505`
- **字体**: Space Grotesk / DM Sans / JetBrains Mono

## 嵌入模式

文档站支持 `?embed=true` 参数，用于在前端控制台中 iframe 嵌入时隐藏导航栏和页脚。

## 部署

推送到 GitHub 后，Mintlify GitHub App 会自动构建和部署。

### 自定义域名

部署后在 [Mintlify Dashboard](https://dashboard.mintlify.com) 配置自定义域名。

## 相关链接

- [协议终端](https://end.shallow.ink)
- [Mintlify 文档](https://mintlify.com/docs)
