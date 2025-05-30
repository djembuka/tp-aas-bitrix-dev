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
		'ui.vue3.router',
		'local.vue-components.control-component',
		'local.vue-components.button-component',
		'local.vue-components.modal-yes-no',
		'ui.vue3.pinia',
		'local.vue-components.message-component',
	],
	'skip_core' => true,
];