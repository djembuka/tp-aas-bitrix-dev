<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'js' => [
		'./dist/component.bundle.js',
	],
	'rel' => [
		'main.polyfill.core',
		'local.vue-components.control-text',
		'local.vue-components.control-select-dropdown',
	],
	'skip_core' => true,
];