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
		'local.vue-components.control-choice',
	],
	'skip_core' => true,
];