<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'js' => [
		'./dist/application.bundle.js',
	],
	'css' => [
		'./dist/application.bundle.css',
	],
	'rel' => [
		'main.polyfill.core',
		'ui.vue3',
		'local.vue-components.control-choice',
		'local.vue-components.doc-component',
		'local.vue-components.modal-yes-no',
		'local.vue-components.button-component',
		'local.vue-components.loader-circle',
		'ui.vue3.pinia',
	],
	'skip_core' => true,
];