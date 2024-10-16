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
		'local.vue-components.control-component',
		'local.vue-components.control-multi',
		'local.vue-components.control-subcontrol',
		'ui.vue3.pinia',
	],
	'skip_core' => true,
];