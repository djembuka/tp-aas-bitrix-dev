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
		'local.vue-components.loader-circle',
		'local.vue-components.message-component',
		'local.vue-components.modal-yes-no',
		'local.vue-components.modal-any-content',
		'local.vue-components.control-choice',
		'local.vue-components.button-component',
		'ui.vue3.pinia',
	],
	'skip_core' => true,
];