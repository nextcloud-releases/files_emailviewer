OC.L10N.register(
    "files_emailviewer",
    {
    "Email Viewer" : "電郵檢視程式",
    "Enable the php function proc_open to run the email-to-pdf converter." : "啟用 php 函式 proc_open 以執行 email-to-pdf 轉換器。",
    "Java is required to run the email-to-pdf converter." : "執行 email-to-pdf 轉轉換器需要 Java。",
    "Please install https://github.com/nickrussler/email-to-pdf-converter and set the path via `%s`" : "請安裝 https://github.com/nickrussler/email-to-pdf-converter 並透過 `%s` 設定路徑",
    "View .msg and .eml files" : "檢視 .msg 與 .eml 檔案",
    "<h4>Email Viewer integrates the excellent Email to PDF Converter into Nextcloud, enabling you to view .msg and .eml files.</h4>\n\n<h5>Requirements</h5>\n<ul>\n\t<li>Nextcloud 28 or newer</li>\n\t<li>PDF Viewer for Nextcloud</li>\n\t<li>PHP proc_open</li>\n\t<li>OpenJDK</li>\n\t<li>wkhtmltopdf (https://wkhtmltopdf.org/)</li>\n\t<li>Email to PDF Converter (https://github.com/nickrussler/email-to-pdf-converter)</li>\n</ul>\n\n<h5>Installation</h5>\n<ul>\n\t<li>Download and enable files_emailviewer</li>\n\t<li>Store a copy of the Email to PDF Converter on the server, ensuring that Nextcloud has access to it</li>\n\t<li>Set the path to Email to PDF Converter via `occ config:app:set --value /opt/emailconverter-3.0.0-all.jar files_emailviewer binary_path`</li>\n\t<li>Upload a .msg or .eml file and view it directly in Nextcloud 🙌</li>\n</ul>\n\n<h5>Outgoing connections</h5>\n<ul>\n\t<li>If the email contains images from external sources, the Email to PDF converter will download the images, requiring external connections</li>\n\t<li>The current version does not consider Nextcloud's proxy configuration but should follow the system default</li>\n</ul>" : "<h4>電子郵件檢視程式整合了出色的電子郵件轉 PDF 程式至 Nextcloud，讓您可以檢視 .msg 與 .eml 檔案。</h4>\n\n<h5>需求</h5>\n<ul>\n\t<li>Nextcloud 28 或更新版本or newer</li>\n\t<li>適用於 Nextcloud 的 PDF 檢視程式</li>\n\t<li>PHP proc_open</li>\n\t<li>OpenJDK</li>\n\t<li>wkhtmltopdf (https://wkhtmltopdf.org/)</li>\n\t<li>電子郵件轉 PDF 程式 (https://github.com/nickrussler/email-to-pdf-converter)</li>\n</ul>\n\n<h5>安裝</h5>\n<ul>\n\t<li>下載並啟用 files_emailviewer</li>\n\t<li>在伺服器上儲存電子郵件轉 PDF 程式的複本，並確保 Nextcloud 可以存取該複本</li>\n\t<li>透過 `occ config:app:set --value /opt/emailconverter-3.0.0-all.jar files_emailviewer binary_path` 設定電子郵件轉 PDF 程式的路徑</li>\n\t<li>上傳到 .msg 或 .eml 檔案並直接在 Nextcloud 中檢視 🙌</li>\n</ul>\n\n<h5>連出連線</h5>\n<ul>\n\t<li>若電子郵件包含外部來源影像，電子郵件轉 PDF 轉換程式將會下載影像，需要外部連線</li>\n\t<li>目前的版本並未考慮 Nextcloud 的代理伺服器設定，但遵循系統預設值</li>\n</ul>"
},
"nplurals=1; plural=0;");
