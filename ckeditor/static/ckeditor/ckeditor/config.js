/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
config.image_previewText = ' ';
// config.removePlugins = 'image';
CKEDITOR.addCss('.cke_editable img { max-width: 100% !important; height: auto !important; }');
config.extraPlugins = 'autogrow';
config.autoGrow_minHeight = 250;
config.autoGrow_maxHeight = 600;
};
