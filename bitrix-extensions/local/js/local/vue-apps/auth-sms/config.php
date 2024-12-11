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
		'local.vue-components.control-tel',
		'local.vue-components.control-hint',
		'local.vue-components.control-password',
		'local.vue-components.control-checkbox',
		'local.vue-components.message-component',
		'local.vue-components.button-component',
		'ui.vue3.pinia',
	],
	'skip_core' => true,
];