# 百鮮 樣品開發追蹤系統 操作手冊（網頁版）

純靜態網頁（HTML／CSS／少量 JavaScript），沒有後端、不需要建置，可直接用 GitHub Pages 發布。內容對應系統 **v78**。

| 檔案 | 用途 |
|---|---|
| `index.html` | 首頁（選擇手冊、快速入口） |
| `internal.html` | 內部操作手冊（業務／研發／品管／管理者） |
| `customer.html` | 客戶端操作手冊 |
| `assets/` | 樣式、腳本、圖片 |

## 發布到 GitHub Pages

1. 在 GitHub 建立新的 repository（例如 `sampletrack-manual`）。
2. 把本資料夾**裡面的所有檔案**（含隱藏檔 `.nojekyll`）上傳到 repository 根目錄。
3. 進入 repository → **Settings → Pages**。
4. **Source** 選 `Deploy from a branch`，Branch 選 `main`、資料夾選 `/ (root)`，按 Save。
5. 約 1～2 分鐘後，網址會是 `https://<帳號或組織>.github.io/sampletrack-manual/`。

## 更新內容

直接編輯 `internal.html`／`customer.html` 的內文後 commit，Pages 會自動重新發布。
頁面頂端與頁尾的版本號、日期請一併修改（搜尋 `v78`、`2026-10-20`）。

## 注意事項

- 內部手冊描述的是公司內部流程。Pages 網址知道的人就能看，請依需求決定：
  - 只放客戶端手冊到公開 repo，內部手冊放在私有 repo（私有 repo 使用 Pages 需 GitHub Pro／Team／Enterprise）；或
  - 兩份都放，但不要公開網址。
- 頁面已加上 `noindex`，一般搜尋引擎不會收錄，但這不等於存取控制。
- 手冊內沒有任何金鑰、試算表 ID 或系統網址，可以安全放進版本控制。
- 不需要任何外部連線：字型使用裝置內建中文字型，深色模式跟隨系統。
- 列印或另存 PDF：頁面右上角「列印」，已有專用的列印排版。
