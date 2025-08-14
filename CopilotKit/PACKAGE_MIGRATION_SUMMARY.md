# CopilotKit 包迁移总结

## 概述
本文档记录了将 CopilotKit monorepo 从 `@bigppwong` scope 迁移到 `@noahlocal` scope 的所有修改。

## 修改的包名

### 原包名 → 新包名
- `@bigppwong/copilotkit-react-core` → `@noahlocal/copilotkit-react-core`
- `@bigppwong/copilotkit-react-ui` → `@noahlocal/copilotkit-react-ui`
- `@bigppwong/copilotkit-react-textarea` → `@noahlocal/copilotkit-react-textarea`
- `@bigppwong/copilotkit-runtime` → `@noahlocal/copilotkit-runtime`
- `@bigppwong/copilotkit-runtime-client-gql` → `@noahlocal/copilotkit-runtime-client-gql`
- `@bigppwong/copilotkit-shared` → `@noahlocal/copilotkit-shared`
- `@bigppwong/copilotkit-sdk-js` → `@noahlocal/copilotkit-sdk-js`

## 修改的文件

### 1. 包配置文件
- `CopilotKit/package.json` - 更新根项目名称为 `noahlocal-copilotkit`
- `CopilotKit/packages/*/package.json` - 更新所有包的名称、homepage 和 repository URL

### 2. 依赖引用
- 更新所有 `package.json` 文件中的依赖引用
- 更新 `examples/*/package.json` 文件中的依赖引用

### 3. 源代码中的 import 语句
使用批量替换命令更新了以下文件中的 import 语句：
- `CopilotKit/packages/**/*.ts`
- `CopilotKit/packages/**/*.tsx`

### 4. 文档注释
更新了代码中的文档注释，包括：
- npm 安装命令示例
- 包名引用
- 错误信息中的包名

## 执行的命令

### 批量替换 import 语句
```bash
find CopilotKit/packages -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/@bigppwong\/copilotkit-shared/@noahlocal\/copilotkit-shared/g'
find CopilotKit/packages -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/@bigppwong\/copilotkit-runtime-client-gql/@noahlocal\/copilotkit-runtime-client-gql/g'
find CopilotKit/packages -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/@bigppwong\/copilotkit-react-core/@noahlocal\/copilotkit-react-core/g'
find CopilotKit/packages -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/@bigppwong\/copilotkit-react-ui/@noahlocal\/copilotkit-react-ui/g'
find CopilotKit/packages -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/@bigppwong\/copilotkit-react-textarea/@noahlocal\/copilotkit-react-textarea/g'
find CopilotKit/packages -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/@bigppwong\/copilotkit-runtime/@noahlocal\/copilotkit-runtime/g'
find CopilotKit/packages -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/@bigppwong\/copilotkit-sdk-js/@noahlocal\/copilotkit-sdk-js/g'
```

### 更新文档注释
```bash
find CopilotKit/packages -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/npmjs\.com\/package\/@bigppwong/copilotkit-npmjs.com\/package\/@noahlocal\/copilotkit-/g'
find CopilotKit/packages -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/npm install @bigppwong/npm install @noahlocal\/copilotkit-/g'
```

### 更新 examples 目录
```bash
find examples -name "package.json" | xargs sed -i 's/@bigppwong\//@noahlocal\//g'
```

## 验证

### 构建验证
```bash
cd CopilotKit
pnpm install
pnpm run build
```

构建成功，所有包都能正常编译。

### 包名验证
所有包的名称都已正确更新为新的 scope：
- ✅ @mylocal/copilotkit-react-core
- ✅ @mylocal/copilotkit-react-ui
- ✅ @mylocal/copilotkit-react-textarea
- ✅ @mylocal/copilotkit-runtime
- ✅ @mylocal/copilotkit-runtime-client-gql
- ✅ @mylocal/copilotkit-shared
- ✅ @mylocal/copilotkit-sdk-js

## 发布准备

现在你可以：
1. 将代码推送到你的 GitHub 仓库 `https://github.com/gmz0015/CopilotKit`
2. 使用 `pnpm publish` 或 `changeset` 发布包到 npm
3. 所有包将发布到 `@noahlocal` scope 下

## 注意事项

1. 确保你在 npm 上有 `@noahlocal` scope 的权限
2. 如果需要发布到私有 registry，请更新 `publishConfig` 配置
3. 建议在发布前先测试一下包的安装和使用 


发布流程 
1. pnpm changeset生成changeset文件
2. pnpm changeset version 自动更新版本
3. pnpm run build 编译所有包，更新 dist 目录
4. pnpm -r publish --no-git-checks --access=public