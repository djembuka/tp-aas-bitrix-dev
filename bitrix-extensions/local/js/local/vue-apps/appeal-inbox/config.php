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
		'local.vue-components.profile-choice',
		'local.vue-components.predefined-filters',
		'local.vue-components.filter-component',
		'local.vue-components.table-component',
		'local.vue-components.sticky-scroll',
		'local.vue-components.pagination-component',
		'local.vue-components.message-component',
		'ui.vue3.pinia',
	],
	'skip_core' => true,
];