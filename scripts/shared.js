let shell = require('shelljs');

shell.cp ('./node_modules/pdfjs-dist/build/pdf.js', './shared/');
shell.cp ('./node_modules/pdfjs-dist/build/pdf.worker.js', './shared/');
shell.cp ('./node_modules/pdfjs-dist/web/pdf_viewer.js ', './shared/');
shell.cp ('./node_modules/pdfjs-dist/web/pdf_viewer.css ', './shared/');
shell.cp('-rf', 'shared/', 'docs/shared');
