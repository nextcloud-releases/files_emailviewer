OC.L10N.register(
    "files_emailviewer",
    {
    "Email Viewer" : "电子邮件查看器",
    "Enable the php function proc_open to run the email-to-pdf converter." : "启用 PHP 函数 proc_open 来运行电子邮件到 PDF 的转换器。",
    "Java is required to run the email-to-pdf converter." : "运行电子邮件到 PDF 转换器需要的 Java。",
    "Please install https://github.com/nickrussler/email-to-pdf-converter and set the path via `%s`" : "请安装 https://github.com/nickrussler/email-to-pdf-converter 并通过 `%s` 设置路径",
    "View .msg and .eml files" : "查看 .msg 和 .eml 文件",
    "<h4>Email Viewer integrates the excellent Email to PDF Converter into Nextcloud, enabling you to view .msg and .eml files.</h4>\n\n<h5>Requirements</h5>\n<ul>\n\t<li>Nextcloud 28 or newer</li>\n\t<li>PDF Viewer for Nextcloud</li>\n\t<li>PHP proc_open</li>\n\t<li>OpenJDK</li>\n\t<li>wkhtmltopdf (https://wkhtmltopdf.org/)</li>\n\t<li>Email to PDF Converter (https://github.com/nickrussler/email-to-pdf-converter)</li>\n</ul>\n\n<h5>Installation</h5>\n<ul>\n\t<li>Download and enable files_emailviewer</li>\n\t<li>Store a copy of the Email to PDF Converter on the server, ensuring that Nextcloud has access to it</li>\n\t<li>Set the path to Email to PDF Converter via `occ config:app:set --value /opt/emailconverter-3.0.0-all.jar files_emailviewer binary_path`</li>\n\t<li>Upload a .msg or .eml file and view it directly in Nextcloud 🙌</li>\n</ul>\n\n<h5>Outgoing connections</h5>\n<ul>\n\t<li>If the email contains images from external sources, the Email to PDF converter will download the images, requiring external connections</li>\n\t<li>The current version does not consider Nextcloud's proxy configuration but should follow the system default</li>\n</ul>" : "<h4>电子邮件查看器将强大的电子邮件到 PDF 的转换器集成到 Nextcloud中，使您能够查看 .msg 和 .eml 文件。</h4>\n\n<h5>依赖</h5>\n<ul>\n\t<li>Nextcloud 28 或更新版本</li>\n\t<li>PDF for Nextcloud</li>\n\t<li>PHP proc_open</li>\n\t<li>OpenJDK</li>\n\t<li>wkhtmltopdf (https://wkhtmltopdf.org/)</li>\n\t<li>Email to PDF Converter (https://github.com/nickrussler/email-to-pdf-converter)</li>\n</ul>\n\n<h5>安装</h5>\n<ul>\n\t<li>下载并启用 files_emailviewer</li>\n\t<li>将 Email to PDF Converter 的副本存储在服务器上，确保 Nextcloud 可以访问它</li>\n\t<li>通过执行 `occ config:app:set --value /opt/emailconverter-3.0.0-all.jar files_emailviewer binary_path` 设置 Email to PDF Converter 的路径</li>\n\t<li>上传 .msg 或 .eml 文件，并直接在 Nextcloud 中查看 🙌</li>\n</ul>\n\n<h5>外部连接</h5>\n<ul>\n\t<li>如果电子邮件包含来自外部来源的图像，则 Email to PDF Converter 将下载图像，需要外部连接</li>\n\t<li>当前版本不考虑 Nextcloud 的代理配置，但应遵循系统默认设置</li>\n</ul>"
},
"nplurals=1; plural=0;");
