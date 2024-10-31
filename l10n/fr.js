OC.L10N.register(
    "files_emailviewer",
    {
    "Email Viewer" : "Visionneuse d'e-mail",
    "Enable the php function proc_open to run the email-to-pdf converter." : "Activer la fonction PHP proc_open pour exécuter le convertisseur d’e-mail en PDF.",
    "Java is required to run the email-to-pdf converter." : "Java est requis pour exécuter le convertisseur e-mail-PDF.",
    "Please install https://github.com/nickrussler/email-to-pdf-converter and set the path via `%s`" : "Veuillez installer https://github.com/nickrussler/email-to-pdf-converter et définir le chemin via `%s`",
    "View .msg and .eml files" : "Visualiser les fichiers .msg et .eml",
    "<h4>Email Viewer integrates the excellent Email to PDF Converter into Nextcloud, enabling you to view .msg and .eml files.</h4>\n\n<h5>Requirements</h5>\n<ul>\n\t<li>Nextcloud 28 or newer</li>\n\t<li>PDF Viewer for Nextcloud</li>\n\t<li>PHP proc_open</li>\n\t<li>OpenJDK</li>\n\t<li>wkhtmltopdf (https://wkhtmltopdf.org/)</li>\n\t<li>Email to PDF Converter (https://github.com/nickrussler/email-to-pdf-converter)</li>\n</ul>\n\n<h5>Installation</h5>\n<ul>\n\t<li>Download and enable files_emailviewer</li>\n\t<li>Store a copy of the Email to PDF Converter on the server, ensuring that Nextcloud has access to it</li>\n\t<li>Set the path to Email to PDF Converter via `occ config:app:set --value /opt/emailconverter-3.0.0-all.jar files_emailviewer binary_path`</li>\n\t<li>Upload a .msg or .eml file and view it directly in Nextcloud 🙌</li>\n</ul>\n\n<h5>Outgoing connections</h5>\n<ul>\n\t<li>If the email contains images from external sources, the Email to PDF converter will download the images, requiring external connections</li>\n\t<li>The current version does not consider Nextcloud's proxy configuration but should follow the system default</li>\n</ul>" : "<h4>Email Viewer intègre l'excellent convertisseur Email to PDF dans Nextcloud, vous permettant d'afficher les fichiers .msg et .eml.</h4>\n\n<h5>Configuration requise</h5>\n<ul>\n\t<li>Nextcloud 28 ou plus récent</li>\n\t<li>PDF Viewer pour Nextcloud</li>\n\t<li>PHP proc_open</li>\n\t<li>OpenJDK</li>\n\t<li>wkhtmltopdf (https://wkhtmltopdf.org/)</li>\n\t<li>Email to PDF Converter (https://github.com/nickrussler/email-to-pdf-converter)</li>\n</ul>\n\n<h5>Installation</h5>\n<ul>\n\t<li>Téléchargez et activez files_emailviewer</li>\n\t<li>Stockez une copie de Email to PDF Converter sur le serveur, en vous assurant que Nextcloud y a accès</li>\n\t<li>Définissez le chemin d'accès à Email to PDF Converter via `occ config:app:set --value /opt/emailconverter-3.0.0-all.jar files_emailviewer binary_path`</li>\n\t<li>Téléchargez un fichier .msg ou .eml et affichez-le directement dans Nextcloud 🙌</li>\n</ul>\n\n<h5>Connexions sortantes</h5>\n<ul>\n\t<li>Si l'e-mail contient des images provenant de sources externes, le convertisseur Email to PDF téléchargera les images, ce qui nécessite des connexions externes</li>\n\t<li>La version actuelle ne prend pas en compte la configuration proxy de Nextcloud mais doit suivre la valeur par défaut du système</li>\n</ul>"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
