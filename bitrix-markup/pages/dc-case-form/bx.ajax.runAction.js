window.twinpx = window.twinpx || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue.markup = true;
window.twinpx.vue['disciplinary-case-form'] = {};
window.twinpx.vue['disciplinary-case-form'].getForm = {
	status: 'success',
	data: [
			{
				id: 1,
				heading: 'Заявитель',
				controls: [
					{
						id: 'id1',
						property: 'hint',
						name: 'ORNZ1',
						label: 'ОРНЗ заявителя',
						value: '',
						count: 3,
						action: "/markup/pages/dc-case-form/hints.json",
						required: false,
						disabled: false,
						hint_external: 'Введите ОРНЗ если он есть у пользователя и форма сама заполнит данные.'
					},
					{
						id: 'id2',
						property: 'text',
						name: 'NAME1',
						label: 'Заявитель',
						value: '',
						required: false,
						disabled: false,
						hint_external: 'ФИО заявителя, название организации или название отдела.'
					},
					{
						id: 'id3',
						property: 'tel',
						name: 'PHONE1',
						label: 'Телефон заявителя',
						value: '',
						required: false,
						disabled: false,
					},
					{
						id: 'id4',
						property: 'email',
						name: 'EMAIL1',
						label: 'Email заявителя',
						value: '',
						required: false,
						disabled: false,
					}
				]
			},
			{
				id: 2,
				heading: 'Объект / Ответчик',
				controls: [
					{
						id: 'id5',
						property: 'hint',
						name: 'ORNZ2',
						label: 'ОРНЗ объекта / ответчика',
						value: '',
						count: 3,
						action: "/markup/pages/dc-case-form/hints.json",
						required: false,
						disabled: false,
						hint_external: 'Укажите номер обращения или жалобы и данные  будут внесены автоматически.'
					}
				]
			},
			{
				id: 3,
				heading: 'Основание для возбуждения дела',
				controls: [
					{
						id: 'id6',
						property: 'text',
						name: 'NUM',
						label: 'Основание (жалоба или обращение)',
						value: '',
						required: false,
						disabled: false,
						hint_external: 'Укажите номер обращения или жалобы и данные  будут внесены автоматически.'
					},
					{
						id: 'id7',
						property: 'text',
						name: 'NUM2',
						label: 'Входящий номер ОРЧ',
						value: '',
						required: false,
						disabled: false,
						hint_external: 'Если необходимо укажите регистрационный номер ОРЧ.'
					}
				]
			},
			{
				id: 4,
				heading: 'Основные данные',
				controls: [
					{
						id: 'id8',
						property: 'text',
						name: 'NUM3',
						label: 'Номер дисциплинарного дела',
						value: '',
						required: false,
						disabled: false,
						hint_external: 'Номер создан автоматически. Если необходимо, вы можете отредактировать его вручную.'
					}
				]
			}
		],
	errors: [{message: 'Server error'}]
};

