window.twinpx = window.twinpx || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue = window.twinpx.vue || {};
window.twinpx.vue.markup = true;
window.twinpx.vue['table-with-pagination'] = {};
window.twinpx.vue['table-with-pagination'].setDefaultSort = {
              columnSort: 2,
              sortType: 0,
            };
			
window.twinpx.vue['table-with-pagination'].defaultSort = {
              columnSort: 2,
              sortType: 0,
            };
			
window.twinpx.vue['table-with-pagination'].items = (startIndex) => {
	let result = {
		resultCount: 10,
		startIndex,
		excelLink: false,
	};
	switch(startIndex) {
		case 0:
			result.items = [
				{
          id: 1,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'question',
              value: '1',
            },
            {
              id: 2,
              type: 'time',
              value: '11:00',
            },
            {
              id: 3,
              type: 'case',
              value: '64',
            },
            {
              id: 4,
              type: 'object',
              value: 'Иванов Петр Михайлович<br>12006025503',
            },
            {
              id: 5,
              type: 'person',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 6,
              type: 'invited',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 7,
              type: 'status',
              value:
                '<div class="label-blue"><span>Запланирован</span></div>',
            },
            {
              id: 8,
              type: 'edit',
              value:
                '<div style="white-space: nowrap;"><a class="btn-edit" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M9.263,1.439l-8.21,8.69a3.05,3.05,0,0,0-.67,1.43L.013,14.8a1.527,1.527,0,0,0,1.87,1.77l3.22-.55a2.871,2.871,0,0,0,1.39-.75l8.21-8.69c1.42-1.5,2.06-3.21-.15-5.3C12.353-.791,10.683-.061,9.263,1.439Z" transform="translate(4.002 3.701)"></path><path d="M0,0A6.126,6.126,0,0,0,5.45,5.15" transform="translate(11.895 6.59)"></path><path d="M0,0H24V24H0Z" fill="none" opacity="0"></path></g></svg></a> <div class="b-checkbox" style="display: inline-block;"><label><input class="filled-in" type="checkbox" required="" name="NAME" value="Y" checked="checked"><span style="padding-left: 24px;"></span></label></div></div>',
				
            },
          ],
        },
        {
          id: 2,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'question',
              value: '1',
            },
            {
              id: 2,
              type: 'time',
              value: '11:00',
            },
            {
              id: 3,
              type: 'case',
              value: '64',
            },
            {
              id: 4,
              type: 'object',
              value: 'Иванов Петр Михайлович<br>12006025503',
            },
            {
              id: 5,
              type: 'person',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 6,
              type: 'invited',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 7,
              type: 'status',
              value:
                '<div class="label-blue"><span>Запланирован</span></div>',
            },
            {
              id: 8,
              type: 'edit',
              value:
                '<div style="white-space: nowrap;"><a class="btn-edit" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M9.263,1.439l-8.21,8.69a3.05,3.05,0,0,0-.67,1.43L.013,14.8a1.527,1.527,0,0,0,1.87,1.77l3.22-.55a2.871,2.871,0,0,0,1.39-.75l8.21-8.69c1.42-1.5,2.06-3.21-.15-5.3C12.353-.791,10.683-.061,9.263,1.439Z" transform="translate(4.002 3.701)"></path><path d="M0,0A6.126,6.126,0,0,0,5.45,5.15" transform="translate(11.895 6.59)"></path><path d="M0,0H24V24H0Z" fill="none" opacity="0"></path></g></svg></a> <div class="b-checkbox" style="display: inline-block;"><label><input class="filled-in" type="checkbox" required="" name="NAME" value="Y" checked="checked"><span style="padding-left: 24px;"></span></label></div></div>',
            },
          ],
        },
        {
          id: 3,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'question',
              value: '1',
            },
            {
              id: 2,
              type: 'time',
              value: '11:00',
            },
            {
              id: 3,
              type: 'case',
              value: '64',
            },
            {
              id: 4,
              type: 'object',
              value: 'Иванов Петр Михайлович<br>12006025503',
            },
            {
              id: 5,
              type: 'person',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 6,
              type: 'invited',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 7,
              type: 'status',
              value:
                '<div class="label-blue"><span>Запланирован</span></div>',
            },
            {
              id: 8,
              type: 'edit',
              value:
                '<div style="white-space: nowrap;"><a class="btn-edit" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M9.263,1.439l-8.21,8.69a3.05,3.05,0,0,0-.67,1.43L.013,14.8a1.527,1.527,0,0,0,1.87,1.77l3.22-.55a2.871,2.871,0,0,0,1.39-.75l8.21-8.69c1.42-1.5,2.06-3.21-.15-5.3C12.353-.791,10.683-.061,9.263,1.439Z" transform="translate(4.002 3.701)"></path><path d="M0,0A6.126,6.126,0,0,0,5.45,5.15" transform="translate(11.895 6.59)"></path><path d="M0,0H24V24H0Z" fill="none" opacity="0"></path></g></svg></a> <div class="b-checkbox" style="display: inline-block;"><label><input class="filled-in" type="checkbox" required="" name="NAME" value="Y" checked="checked"><span style="padding-left: 24px;"></span></label></div></div>',
            },
          ],
        }
      ];
			break;
			
		case 3:
			result.items = [
				{
          id: 4,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'question',
              value: '1',
            },
            {
              id: 2,
              type: 'time',
              value: '11:00',
            },
            {
              id: 3,
              type: 'case',
              value: '64',
            },
            {
              id: 4,
              type: 'object',
              value: 'Иванов Петр Михайлович<br>12006025503',
            },
            {
              id: 5,
              type: 'person',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 6,
              type: 'invited',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 7,
              type: 'status',
              value:
                '<div class="label-blue"><span>Запланирован</span></div>',
            },
            {
              id: 8,
              type: 'edit',
              value:
                '<div style="white-space: nowrap;"><a class="btn-edit" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M9.263,1.439l-8.21,8.69a3.05,3.05,0,0,0-.67,1.43L.013,14.8a1.527,1.527,0,0,0,1.87,1.77l3.22-.55a2.871,2.871,0,0,0,1.39-.75l8.21-8.69c1.42-1.5,2.06-3.21-.15-5.3C12.353-.791,10.683-.061,9.263,1.439Z" transform="translate(4.002 3.701)"></path><path d="M0,0A6.126,6.126,0,0,0,5.45,5.15" transform="translate(11.895 6.59)"></path><path d="M0,0H24V24H0Z" fill="none" opacity="0"></path></g></svg></a> <div class="b-checkbox" style="display: inline-block;"><label><input class="filled-in" type="checkbox" required="" name="NAME" value="Y" checked="checked"><span style="padding-left: 24px;"></span></label></div></div>',
            },
          ],
        },
        {
          id: 5,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'question',
              value: '1',
            },
            {
              id: 2,
              type: 'time',
              value: '11:00',
            },
            {
              id: 3,
              type: 'case',
              value: '64',
            },
            {
              id: 4,
              type: 'object',
              value: 'Иванов Петр Михайлович<br>12006025503',
            },
            {
              id: 5,
              type: 'person',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 6,
              type: 'invited',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 7,
              type: 'status',
              value:
                '<div class="label-blue"><span>Запланирован</span></div>',
            },
            {
              id: 8,
              type: 'edit',
              value:
                '<div style="white-space: nowrap;"><a class="btn-edit" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M9.263,1.439l-8.21,8.69a3.05,3.05,0,0,0-.67,1.43L.013,14.8a1.527,1.527,0,0,0,1.87,1.77l3.22-.55a2.871,2.871,0,0,0,1.39-.75l8.21-8.69c1.42-1.5,2.06-3.21-.15-5.3C12.353-.791,10.683-.061,9.263,1.439Z" transform="translate(4.002 3.701)"></path><path d="M0,0A6.126,6.126,0,0,0,5.45,5.15" transform="translate(11.895 6.59)"></path><path d="M0,0H24V24H0Z" fill="none" opacity="0"></path></g></svg></a> <div class="b-checkbox" style="display: inline-block;"><label><input class="filled-in" type="checkbox" required="" name="NAME" value="Y" checked="checked"><span style="padding-left: 24px;"></span></label></div></div>',
            },
          ],
        },
        {
          id: 6,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'question',
              value: '1',
            },
            {
              id: 2,
              type: 'time',
              value: '11:00',
            },
            {
              id: 3,
              type: 'case',
              value: '64',
            },
            {
              id: 4,
              type: 'object',
              value: 'Иванов Петр Михайлович<br>12006025503',
            },
            {
              id: 5,
              type: 'person',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 6,
              type: 'invited',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 7,
              type: 'status',
              value:
                '<div class="label-blue"><span>Запланирован</span></div>',
            },
            {
              id: 8,
              type: 'edit',
              value:
                '<div style="white-space: nowrap;"><a class="btn-edit" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M9.263,1.439l-8.21,8.69a3.05,3.05,0,0,0-.67,1.43L.013,14.8a1.527,1.527,0,0,0,1.87,1.77l3.22-.55a2.871,2.871,0,0,0,1.39-.75l8.21-8.69c1.42-1.5,2.06-3.21-.15-5.3C12.353-.791,10.683-.061,9.263,1.439Z" transform="translate(4.002 3.701)"></path><path d="M0,0A6.126,6.126,0,0,0,5.45,5.15" transform="translate(11.895 6.59)"></path><path d="M0,0H24V24H0Z" fill="none" opacity="0"></path></g></svg></a> <div class="b-checkbox" style="display: inline-block;"><label><input class="filled-in" type="checkbox" required="" name="NAME" value="Y" checked="checked"><span style="padding-left: 24px;"></span></label></div></div>',
            },
          ],
        }
      ];
			break;
			
		case 6:
			result.items = [
				{
          id: 7,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'question',
              value: '1',
            },
            {
              id: 2,
              type: 'time',
              value: '11:00',
            },
            {
              id: 3,
              type: 'case',
              value: '64',
            },
            {
              id: 4,
              type: 'object',
              value: 'Иванов Петр Михайлович<br>12006025503',
            },
            {
              id: 5,
              type: 'person',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 6,
              type: 'invited',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 7,
              type: 'status',
              value:
                '<div class="label-blue"><span>Запланирован</span></div>',
            },
            {
              id: 8,
              type: 'edit',
              value:
                '<div style="white-space: nowrap;"><a class="btn-edit" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M9.263,1.439l-8.21,8.69a3.05,3.05,0,0,0-.67,1.43L.013,14.8a1.527,1.527,0,0,0,1.87,1.77l3.22-.55a2.871,2.871,0,0,0,1.39-.75l8.21-8.69c1.42-1.5,2.06-3.21-.15-5.3C12.353-.791,10.683-.061,9.263,1.439Z" transform="translate(4.002 3.701)"></path><path d="M0,0A6.126,6.126,0,0,0,5.45,5.15" transform="translate(11.895 6.59)"></path><path d="M0,0H24V24H0Z" fill="none" opacity="0"></path></g></svg></a> <div class="b-checkbox" style="display: inline-block;"><label><input class="filled-in" type="checkbox" required="" name="NAME" value="Y" checked="checked"><span style="padding-left: 24px;"></span></label></div></div>',
            },
          ],
        },
        {
          id: 8,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'question',
              value: '1',
            },
            {
              id: 2,
              type: 'time',
              value: '11:00',
            },
            {
              id: 3,
              type: 'case',
              value: '64',
            },
            {
              id: 4,
              type: 'object',
              value: 'Иванов Петр Михайлович<br>12006025503',
            },
            {
              id: 5,
              type: 'person',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 6,
              type: 'invited',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 7,
              type: 'status',
              value:
                '<div class="label-blue"><span>Запланирован</span></div>',
            },
            {
              id: 8,
              type: 'edit',
              value:
                '<div style="white-space: nowrap;"><a class="btn-edit" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M9.263,1.439l-8.21,8.69a3.05,3.05,0,0,0-.67,1.43L.013,14.8a1.527,1.527,0,0,0,1.87,1.77l3.22-.55a2.871,2.871,0,0,0,1.39-.75l8.21-8.69c1.42-1.5,2.06-3.21-.15-5.3C12.353-.791,10.683-.061,9.263,1.439Z" transform="translate(4.002 3.701)"></path><path d="M0,0A6.126,6.126,0,0,0,5.45,5.15" transform="translate(11.895 6.59)"></path><path d="M0,0H24V24H0Z" fill="none" opacity="0"></path></g></svg></a> <div class="b-checkbox" style="display: inline-block;"><label><input class="filled-in" type="checkbox" required="" name="NAME" value="Y" checked="checked"><span style="padding-left: 24px;"></span></label></div></div>',
            },
          ],
        },
        {
          id: 9,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'question',
              value: '1',
            },
            {
              id: 2,
              type: 'time',
              value: '11:00',
            },
            {
              id: 3,
              type: 'case',
              value: '64',
            },
            {
              id: 4,
              type: 'object',
              value: 'Иванов Петр Михайлович<br>12006025503',
            },
            {
              id: 5,
              type: 'person',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 6,
              type: 'invited',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 7,
              type: 'status',
              value:
                '<div class="label-blue"><span>Запланирован</span></div>',
            },
            {
              id: 8,
              type: 'edit',
              value:
                '<div style="white-space: nowrap;"><a class="btn-edit" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M9.263,1.439l-8.21,8.69a3.05,3.05,0,0,0-.67,1.43L.013,14.8a1.527,1.527,0,0,0,1.87,1.77l3.22-.55a2.871,2.871,0,0,0,1.39-.75l8.21-8.69c1.42-1.5,2.06-3.21-.15-5.3C12.353-.791,10.683-.061,9.263,1.439Z" transform="translate(4.002 3.701)"></path><path d="M0,0A6.126,6.126,0,0,0,5.45,5.15" transform="translate(11.895 6.59)"></path><path d="M0,0H24V24H0Z" fill="none" opacity="0"></path></g></svg></a> <div class="b-checkbox" style="display: inline-block;"><label><input class="filled-in" type="checkbox" required="" name="NAME" value="Y" checked="checked"><span style="padding-left: 24px;"></span></label></div></div>',
            },
          ],
        }
      ];
			break;
			
		case 9:
			result.items = [
				{
          id: 10,
          url: '/',
          new: false,
          target: '_blank',
          cell: [
            {
              id: 1,
              type: 'question',
              value: '1',
            },
            {
              id: 2,
              type: 'time',
              value: '11:00',
            },
            {
              id: 3,
              type: 'case',
              value: '64',
            },
            {
              id: 4,
              type: 'object',
              value: 'Иванов Петр Михайлович<br>12006025503',
            },
            {
              id: 5,
              type: 'person',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 6,
              type: 'invited',
              value: 'Сидоров Петр Матвеевич<br>12006025503',
            },
            {
              id: 7,
              type: 'status',
              value:
                '<div class="label-blue"><span>Запланирован</span></div>',
            },
            {
              id: 8,
              type: 'edit',
              value:
                '<div style="white-space: nowrap;"><a class="btn-edit" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M9.263,1.439l-8.21,8.69a3.05,3.05,0,0,0-.67,1.43L.013,14.8a1.527,1.527,0,0,0,1.87,1.77l3.22-.55a2.871,2.871,0,0,0,1.39-.75l8.21-8.69c1.42-1.5,2.06-3.21-.15-5.3C12.353-.791,10.683-.061,9.263,1.439Z" transform="translate(4.002 3.701)"></path><path d="M0,0A6.126,6.126,0,0,0,5.45,5.15" transform="translate(11.895 6.59)"></path><path d="M0,0H24V24H0Z" fill="none" opacity="0"></path></g></svg></a> <div class="b-checkbox" style="display: inline-block;"><label><input class="filled-in" type="checkbox" required="" name="NAME" value="Y" checked="checked"><span style="padding-left: 24px;"></span></label></div></div>',
            },
          ],
        }
      ];
			break;
	};
	
	return result;
};
			
window.twinpx.vue['table-with-pagination'].columnsNames = [
              {
                id: 1,
                name: 'Вопрос',
                type: 'question',
              },
              {
                id: 2,
                name: 'Время',
                type: 'time',
              },
              {
                id: 3,
                name: 'Дело / Жалоба',
                type: 'case',
              },
              {
                id: 4,
                name: 'Объект',
                type: 'object',
              },
              {
                id: 5,
                name: 'Заявитель',
                type: 'person',
              },
              {
                id: 6,
                name: 'Приглашенные',
                type: 'invited',
              },
              {
                id: 7,
                name: 'Статус',
                type: 'status',
              },
              {
                id: 8,
                name: '',
                type: 'edit',
              },
            ];
            
			
			
			