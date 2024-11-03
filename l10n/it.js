OC.L10N.register(
    "files_emailviewer",
    {
    "Email Viewer" : "Visualizzatore e-mail",
    "Enable the php function proc_open to run the email-to-pdf converter." : "Abilitare la funzione php proc_open per eseguire il convertitore da email a PDF.",
    "Java is required to run the email-to-pdf converter." : "Per eseguire il convertitore da email a PDF è necessario Java.",
    "Please install https://github.com/nickrussler/email-to-pdf-converter and set the path via `%s`" : "Installare https://github.com/nickrussler/email-to-pdf-converter e imposta il percorso via `%s`",
    "View .msg and .eml files" : "Visualizza i file .msg e .eml",
    "<h4>Email Viewer integrates the excellent Email to PDF Converter into Nextcloud, enabling you to view .msg and .eml files.</h4>\n\n<h5>Requirements</h5>\n<ul>\n\t<li>Nextcloud 28 or newer</li>\n\t<li>PDF Viewer for Nextcloud</li>\n\t<li>PHP proc_open</li>\n\t<li>OpenJDK</li>\n\t<li>wkhtmltopdf (https://wkhtmltopdf.org/)</li>\n\t<li>Email to PDF Converter (https://github.com/nickrussler/email-to-pdf-converter)</li>\n</ul>\n\n<h5>Installation</h5>\n<ul>\n\t<li>Download and enable files_emailviewer</li>\n\t<li>Store a copy of the Email to PDF Converter on the server, ensuring that Nextcloud has access to it</li>\n\t<li>Set the path to Email to PDF Converter via `occ config:app:set --value /opt/emailconverter-3.0.0-all.jar files_emailviewer binary_path`</li>\n\t<li>Upload a .msg or .eml file and view it directly in Nextcloud 🙌</li>\n</ul>\n\n<h5>Outgoing connections</h5>\n<ul>\n\t<li>If the email contains images from external sources, the Email to PDF converter will download the images, requiring external connections</li>\n\t<li>The current version does not consider Nextcloud's proxy configuration but should follow the system default</li>\n</ul>" : "<h4>Email Viewer integra l'eccellente Email to PDF Converter in Nextcloud, consentendoti di visualizzare i file .msg e .eml.</h4>\n\n<h5>Requisiti\n</h5>\n<ul>\n\t<li>Nextcloud 28 o più recente</li>\n\t<li>PDF Viewer per Nextcloud</li>\n\t<li>PHP proc_open</li>\n\t<li>OpenJDK</li>\n\t<li>wkhtmltopdf (https://wkhtmltopdf.org/)</li>\n\t<li>Email to PDF Converter (https://github.com/nickrussler/email-to-pdf-converter)</li>\n</ul>\n\n<h5>Installazione</h5>\n<ul>\n\t<li>Scarica e abilita files_emailviewer</li>\n\t<li>Memorizza una copia del convertitore da e-mail a PDF sul server, assicurandoti che Nextcloud vi abbia accesso</li>\n\t<li>Imposta il percorso su Email to PDF Converter via `occ config:app:set --value /opt/emailconverter-3.0.0-all.jar files_emailviewer binary_path`</li>\n\t<li>Carica un .msg o .eml file e visualizzalo direttamente in Nextcloud 🙌</li>\n</ul>\n\n<h5>Connessioni in uscita</h5>\n<ul>\n\t<li>Se l'e-mail contiene immagini provenienti da fonti esterne, il convertitore da e-mail a PDF scaricherà le immagini, richiedendo connessioni esterne</li>\n\t<li>La versione corrente non considera la configurazione proxy di Nextcloud ma dovrebbe seguire quella predefinita del sistema</li>\n</ul>"
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
