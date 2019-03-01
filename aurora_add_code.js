var aurora = {}
aurora.version = [1,1,0]
aurora.versions = ['1.1.0','1.0.1','1.0.0','0.0.1']
aurora.help = function(){
    var version = aurora.version[0] + '.' + aurora.version[1] + '.' + aurora.version[2]
    var name = 'aurora.help***func'
    var str2 = version + '***ok'
    alg.name2(name, 'Используется библиотека Аврора версии***success', str2)
    alg.name2(name, 'Для просмотра всех объектов и функций библиотеки используйте***success', 'справочник библиотеки Аврора***ok')
    alg.name2(name, 'Актуальную версию библиотеки Аврора можно скачать здесь:***success', 'https://github.com/Pragmatikc/Aurora/tree/current***ok')
}
aurora.check = function(string){
    var arr = string.split('.')
    if (arr.length != 3){
		var str2 = string + '***ok'
		alg.name3('aurora.check***func', 'Требуемая версия библиотеки Aurora (***red', str2, ') указана неверно.***red')
		alg.fail("Укажите требуемую версию библиотеки правильно!")
    }
	var version = aurora.version[0] + '.' + aurora.version[1] + '.' + aurora.version[2]
	var check = aurora.versions_compare(version, '>=', string)
    if (check){
		var str3 = String(version) + '***ok';
		var name = 'aurora.check***func';
		alg.name3(name, 'Версия библиотеки ***success', 'aurora_library ***green', str3)
		alg.name2(name, 'Актуальная версия библиотеки Аврора: ***success', 'https://github.com/Pragmatikc/Aurora/tree/current***ok')
    } else {
        var name = 'aurora.check***func';
        var str2 = string + '***ok';
		alg.name2(name, 'Требуется врсия Aurora Library не ниже ***error', str2)
		var str2 = version + '***ok';
		alg.name2(name, 'На даный момент установлена версия***error', str2)
		alg.name(name, 'Если проект создан с более новой версией библиотеки, некоторые функции могут не работать без обновления!***error')
		alg.name2(name, 'Скачайте и установите актуальную версию: ***success', 'https://github.com/Pragmatikc/Aurora/tree/current***ok')
    }
}
aurora.versions_compare = function(v1, comparator, v2) {
    //"use strict";
    var comparator = comparator == '=' ? '==' : comparator;
    if(['==','===','<','<=','>','>=','!=','!=='].indexOf(comparator) == -1) {
		alg.fail("Укажите знак сравнения правильно! Доступные варианты: '==','===','<','<=','>','>=','!=','!=='")
    }
    var v1parts = v1.split('.'), v2parts = v2.split('.')
    var maxLen = Math.max(v1parts.length, v2parts.length)
    var part1, part2
    var cmp = 0
    for(var i = 0; i < maxLen && !cmp; i++) {
        part1 = parseInt(v1parts[i], 10) || 0
        part2 = parseInt(v2parts[i], 10) || 0
        if(part1 < part2){cmp = 1}
        if(part1 > part2){cmp = -1}
    }
    return eval('0' + comparator + cmp);
}
// *****************************БЛОК*ВЫВОДА*ИНФОРМАЦИИ*В*ЛОГ**********************************
var alg = {}
alg.color = function(string){
    var colors = {'black': '#262626', 'white': '#edeeeb', 'gray': '#808080',
    'red': '#fb1c1c', 'blue': '#0084ff', 'darkblue': '#1741de', 'green': '#3bbe01', 'yellow': '#efce4a',
    'name': '#6084f8','func': '#e7861f', 'error': '#e41313','success': '#0bc041', 
    'ok': '#ffa300', 'vk': '#43638a', 'fb': '#385591', 'insta': '#a23ea1', 'avito': '#92c925', 'link': '#0000ff',
    'чёрн': '#262626', 'бел': '#edeeeb', 'сер': '#808080',
    'крас': '#fb1c1c', 'гол': '#0084ff', 'син': '#1741de', 'зел': '#3bbe01', 'жёлт': '#efce4a',
    'имя': '#6084f8', 'функц': '#e7861f', 'функ': '#e7861f', 'ссылка': '#0000ff', 'ош': '#e41313', 'усп': '#0bc041', 
    'ок': '#ffa300', 'вк': '#43638a', 'фб': '#385591', 'инст': '#a23ea1', 'авито': '#92c925'}
    if (string == 'all_colors'){var result = colors}else if(string in colors){var result = colors[string]}else{var result = colors['gray']}
    return result
}
alg.allcolors = function(){
    var colors_array = alg.color('all_colors')
    var all_keys = Object.keys(colors_array)
    for (i=0;i<all_keys.length;i++){
        var color = all_keys[i]
        var rgb = colors_array[color]
        var name = color + "***" + color
        var str1 = 'Пример текста, написанного данным цветом***' + color
        var str2 = ' ' + 'Код RGB: ' + rgb
        alg.name2(name, str1, str2)
    }
}
alg.block = function (){
    if (typeof block !== "undefined"){var block_result = true}else{var block_result = false}
	if (block_result == false){
		alg.fail("Укажите идентификатор блока перед вызываемыми в блоке функциями!")
	}
}
alg.one = function (string){
	alg.block(); var str_array = string.split('***'); 
	if (str_array.length == 2){var str_log = str_array[0]; var str_color = alg.color(str_array[1])} else if (str_array.length == 1){var str_log = str_array[0]; var str_color = '#808080'} else if (str_array.length == 0){var str_log = ''; var str_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = asf.thread100(); var comment_time = atm.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ str_color +"'>"+ str_log +"</span></span></span>")
}
alg.two = function (str_1, str_2){
    alg.block()
    var str_1_array = str_1.split('***'); if (str_1_array.length == 2) {var str_1_log = str_1_array[0]; var str_1_color = alg.color(str_1_array[1])} else if (str_1_array.length == 1){var str_1_log = str_1_array[0]; var str_1_color = '#808080'} else if (str_1_array.length == 0){var str_1_log = ''; var str_1_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_2_array = str_2.split('***'); if (str_2_array.length == 2) {var str_2_log = str_2_array[0]; var str_2_color = alg.color(str_2_array[1])} else if (str_2_array.length == 1){var str_2_log = str_2_array[0]; var str_2_color = '#808080'} else if (str_2_array.length == 0){var str_2_log = ''; var str_2_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = asf.thread100(); var comment_time = atm.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ str_1_color +"'>"+ str_1_log +"</span> <span style='color:"+ str_2_color +"'>"+ str_2_log +"</span></span></span>")
}
alg.three = function (str_1, str_2, str_3){
    alg.block()
	var str_1_array = str_1.split('***'); if (str_1_array.length == 2) {var str_1_log = str_1_array[0]; var str_1_color = alg.color(str_1_array[1])} else if (str_1_array.length == 1){var str_1_log = str_1_array[0]; var str_1_color = '#808080'} else if (str_1_array.length == 0){var str_1_log = ''; var str_1_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_2_array = str_2.split('***'); if (str_2_array.length == 2) {var str_2_log = str_2_array[0]; var str_2_color = alg.color(str_2_array[1])} else if (str_2_array.length == 1){var str_2_log = str_2_array[0]; var str_2_color = '#808080'} else if (str_2_array.length == 0){var str_2_log = ''; var str_2_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_3_array = str_3.split('***'); if (str_3_array.length == 2) {var str_3_log = str_3_array[0]; var str_3_color = alg.color(str_3_array[1])} else if (str_3_array.length == 1){var str_3_log = str_3_array[0]; var str_3_color = '#808080'} else if (str_3_array.length == 0){var str_3_log = ''; var str_3_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = asf.thread100(); var comment_time = atm.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ str_1_color +"'>"+ str_1_log +"</span> <span style='color:"+ str_2_color +"'>"+ str_2_log +"</span> <span style='color:"+ str_3_color +"'>"+ str_3_log +"</span></span></span>")
}
alg.name = function (name, string){
	alg.block(); var str_array = string.split('***'); var name_array = name.split('***');
    if (name_array.length == 2) {var name_var = name_array[0]; var name_color = alg.color(name_array[1])} else if (name_array.length == 1){var name_var = name_array[0]; var name_color = alg.color('name')} else if (name_array.length == 0){var name_var = ''; var name_color = '#FFF'} else {var str_log = ''; var str_color = alg.color('name')}
	if (str_array.length == 2){var str_log = str_array[0]; var str_color = alg.color(str_array[1])} else if (str_array.length == 1){var str_log = str_array[0]; var str_color = '#808080'} else if (str_array.length == 0){var str_log = ''; var str_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = asf.thread100(); var comment_time = atm.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ name_color +"'> ["+ name_var +"] <span style='color:"+ str_color +"'>"+ str_log +"</span></span></span>")
}
alg.name2 = function (name, str_1, str_2){
    alg.block(); var name_array = name.split('***');
    if (name_array.length == 2) {var name_var = name_array[0]; var name_color = alg.color(name_array[1])} else if (name_array.length == 1){var name_var = name_array[0]; var name_color = alg.color('name')} else if (name_array.length == 0){var name_var = ''; var name_color = '#FFF'} else {var str_log = ''; var str_color = alg.color('name')}
    var str_1_array = str_1.split('***'); if (str_1_array.length == 2) {var str_1_log = str_1_array[0]; var str_1_color = alg.color(str_1_array[1])} else if (str_1_array.length == 1){var str_1_log = str_1_array[0]; var str_1_color = '#808080'} else if (str_1_array.length == 0){var str_1_log = ''; var str_1_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_2_array = str_2.split('***'); if (str_2_array.length == 2) {var str_2_log = str_2_array[0]; var str_2_color = alg.color(str_2_array[1])} else if (str_2_array.length == 1){var str_2_log = str_2_array[0]; var str_2_color = '#808080'} else if (str_2_array.length == 0){var str_2_log = ''; var str_2_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = asf.thread100(); var comment_time = atm.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ name_color +"'> ["+ name_var +"] <span style='color:"+ str_1_color +"'>"+ str_1_log +"</span> <span style='color:"+ str_2_color +"'>"+ str_2_log +"</span></span></span>")
}
alg.name3 = function (name, str_1, str_2, str_3){
    alg.block(); var name_array = name.split('***');
    if (name_array.length == 2) {var name_var = name_array[0]; var name_color = alg.color(name_array[1])} else if (name_array.length == 1){var name_var = name_array[0]; var name_color = alg.color('name')} else if (name_array.length == 0){var name_var = ''; var name_color = '#FFF'} else {var str_log = ''; var str_color = alg.color('name')}
	var str_1_array = str_1.split('***'); if (str_1_array.length == 2) {var str_1_log = str_1_array[0]; var str_1_color = alg.color(str_1_array[1])} else if (str_1_array.length == 1){var str_1_log = str_1_array[0]; var str_1_color = '#808080'} else if (str_1_array.length == 0){var str_1_log = ''; var str_1_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_2_array = str_2.split('***'); if (str_2_array.length == 2) {var str_2_log = str_2_array[0]; var str_2_color = alg.color(str_2_array[1])} else if (str_2_array.length == 1){var str_2_log = str_2_array[0]; var str_2_color = '#808080'} else if (str_2_array.length == 0){var str_2_log = ''; var str_2_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_3_array = str_3.split('***'); if (str_3_array.length == 2) {var str_3_log = str_3_array[0]; var str_3_color = alg.color(str_3_array[1])} else if (str_3_array.length == 1){var str_3_log = str_3_array[0]; var str_3_color = '#808080'} else if (str_3_array.length == 0){var str_3_log = ''; var str_3_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = asf.thread100(); var comment_time = atm.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ name_color +"'> ["+ name_var +"] <span style='color:"+ str_1_color +"'>"+ str_1_log +"</span> <span style='color:"+ str_2_color +"'>"+ str_2_log +"</span> <span style='color:"+ str_3_color +"'>"+ str_3_log +"</span></span></span>")
}
alg.noblank = function (name, str_1, str_2, str_3){
    alg.block(); var name_array = name.split('***');
    if (name_array.length == 2) {var name_var = name_array[0]; var name_color = alg.color(name_array[1])} else if (name_array.length == 1){var name_var = name_array[0]; var name_color = alg.color('name')} else if (name_array.length == 0){var name_var = ''; var name_color = '#FFF'} else {var str_log = ''; var str_color = alg.color('name')}
	var str_1_array = str_1.split('***'); if (str_1_array.length == 2) {var str_1_log = str_1_array[0]; var str_1_color = alg.color(str_1_array[1])} else if (str_1_array.length == 1){var str_1_log = str_1_array[0]; var str_1_color = '#808080'} else if (str_1_array.length == 0){var str_1_log = ''; var str_1_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_2_array = str_2.split('***'); if (str_2_array.length == 2) {var str_2_log = str_2_array[0]; var str_2_color = alg.color(str_2_array[1])} else if (str_2_array.length == 1){var str_2_log = str_2_array[0]; var str_2_color = '#808080'} else if (str_2_array.length == 0){var str_2_log = ''; var str_2_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_3_array = str_3.split('***'); if (str_3_array.length == 2) {var str_3_log = str_3_array[0]; var str_3_color = alg.color(str_3_array[1])} else if (str_3_array.length == 1){var str_3_log = str_3_array[0]; var str_3_color = '#808080'} else if (str_3_array.length == 0){var str_3_log = ''; var str_3_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = asf.thread100(); var comment_time = atm.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ name_color +"'> ["+ name_var +"] <span style='color:"+ str_1_color +"'>"+ str_1_log +"</span><span style='color:"+ str_2_color +"'>"+ str_2_log +"</span><span style='color:"+ str_3_color +"'>"+ str_3_log +"</span></span></span>")
}
alg.fail = function (string){
	fail_user(string,false)
}
// *****************************БЛОК*ГЕНЕРАЦИИ*ВРЕМЕННЫХ*ЕДИНИЦ*********************************
var atm = {}
atm.year = function(){return new Date().getFullYear()}
atm.monthnum = function(){return new Date().getMonth()}
atm.month = function(){return new Date().getMonth() + 1}
atm.day = function(){return new Date().getDate()}
atm.hour = function(){return new Date().getHours()}
atm.minute = function(){return new Date().getMinutes()}
atm.second = function(){return new Date().getSeconds()}
atm.time = function(){
	var time_now = Date.now(); var info = _parse_date(time_now,"auto")
	var hours = info.getHours(); if (hours < 10) { hours = "0" + hours }
	var minutes = info.getMinutes(); if (minutes < 10) { minutes = "0" + minutes }
	var seconds = info.getSeconds(); if (seconds < 10) { seconds = "0" + seconds }
	return hours+':'+minutes+':'+seconds
}
atm.unixtime = function (){
	return parseInt(new Date().getTime()/1000)
}
atm.unixtimems = function (){
	return parseInt(new Date().getTime())
}
atm.unixtoutc = function (string){
	var a = new Date(string * 1000)
	var months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']
	var year = a.getFullYear();	var month = months[a.getMonth()]; var date = a.getDate()
	var hour = a.getHours(); if (hour < 10){var hour = '0' + hour}
	var min = a.getMinutes(); if (min < 10){var min = '0' + min}
	var sec = a.getSeconds(); if (sec < 10){var sec = '0' + sec}
	var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
	return time
}
atm.unixtoutcms = function (string){
	var a = new Date(string)
	var months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']
	var year = a.getFullYear();	var month = months[a.getMonth()]; var date = a.getDate()
	var hour = a.getHours(); if (hour < 10){var hour = '0' + hour}
	var min = a.getMinutes(); if (min < 10){var min = '0' + min}
	var sec = a.getSeconds(); if (sec < 10){var sec = '0' + sec}
	var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
	return time
}
atm.delayed_start = function (string){
	var month_words = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
	var year = atm.year(); var month = month_words[atm.monthnum()]; var day = atm.day()
	var hours = atm.hour(); var minutes = atm.minute(); var seconds = atm.second()
	var hours_now = (hours+':'+minutes+':'+seconds)
	var time_start = Date.parse(month + ' ' + day + ', ' + year + ' ' + string + ' +0300')
	var time_now = Date.parse(month + ' ' + day + ', ' + year + ' ' + hours_now + ' +0300')
	if (time_start > time_now) {
		var str_1 = 'Задан отложенный запуск. Запускаюсь в ***blue'
		var str_2 = string + '***ok'
		alg.two(str_1, str_2)
		var sleep_time = time_start - time_now
	} else {
		var str = 'Задано прошедшее время отложенного запуска. Запускаюсь сейчас***gray'
		alg.one(str)
		var sleep_time = 1313
	}
	return sleep_time
}
// *****************************БЛОК*РАБОТЫ*СО*СПИСКАМИ********************************
var als = {}
als.array_mix = function(array){
	if (array.length < 1){alg.name("als.array_mix***func", "Массив пуст***error"); alg.fail("Укажите непустой масив с элементами!")}
	var j, x, i;
	for (i = array.length; i; i--) {
		j = Math.floor(Math.random() * i)
		x = array[i - 1]; array[i - 1] = array[j]
		array[j] = x
	}
	return array
}
als.random = function(array){
	if (array.length < 1){alg.name("als.random***func", "Массив пуст***error"); alg.fail("Укажите непустой масив с элементами!")}
	return array[Math.floor(Math.random() * array.length)]
}
als.doubles = function(array){
	if (array.length < 1){alg.name("als.doubles***func", "Массив пуст***error"); alg.fail("Укажите непустой масив с элементами!")}
	var seen = {}
	return (array).filter(function(item) {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true); 
	});
}
als.carousel = function(array){
	if (array.length < 1){alg.name("als.carousel***func", "Массив пуст***error"); alg.fail("Укажите непустой масив с элементами!")}
	var result = array.shift()
	array.push(result)
	return result
}
als.compare = function(array, array2){
	if (array.length < 1){alg.name("als.kill***func", "Массив пуст***error"); alg.fail("Укажите непустой масив с элементами!")}
	return JSON.stringify((array).slice().sort()) == JSON.stringify((array2).slice().sort())
}
als.kill = function(array, element){
	if (array.length < 1){alg.name("als.kill***func", "Массив пуст***error"); alg.fail("Укажите непустой масив с элементами!")}
	eval('var result = '+ array + '.filter(function(e){return e!== "'+ element +'" })')
    return result
}
als.del = function(array, index){
	return array.splice(index,1)
}
als.thread = function(array){
	if (array.length < 1){alg.name("als.thread***func", "Массив пуст***error"); alg.fail("Укажите непустой масив с элементами!")}
	var thread = thread_number(); var thread = thread - 1; var count = 0; var cycle = 0; var length = array.length
	while(cycle<thread){var id=count; if(count<length){count++}else{count=0}cycle++}
	return array[id]
}
als.threads = function(threads, array){
	if (array.length < 1){alg.name2("als.threads***func", "Массив пуст***error", threads + "***ok"); alg.fail("Укажите непустой масив с элементами!")}
	var threads_check = asf.is_num(threads)
	if (threads_check == false){alg.name2("als.threads***func", "Неверно указано общее число потоков***error", threads + "***ok"); alg.fail("Укажите количество потоков правильно!")}
	var thread_index = thread_number(); var thread = thread_index - 1
	if (threads < array.length) {
		var divider = Math.ceil(array.length/threads)
		if (thread == 0){var first_element = 0}else{var first_element = divider * thread}
	} else {
		var first_element = 0; var divider = array.length - 1
	}
	return (array).slice().splice(first_element,divider)
}
// *****************************БЛОК*РЕГУЛЯРНЫХ*ВЫРАЖЕНИЙ********************************
var are = {}
are.check = function(regexp,content){
	try{
		var regexp = aec.unicode(regexp)
		eval('var result = Boolean(native("regexp", "ismatch", JSON.stringify({text:content,regexp:"'+regexp+'"})) == "true")'); return result
	}
	catch(e){fail(e)}
}
are.first = function(regexp,content){
	try{
		var regexp = aec.unicode(regexp)
		eval('var regexp_result = native("regexp", "first", JSON.stringify({text: content,regexp:"'+ regexp +'"}))')
		if(regexp_result.length == 0){regexp_result = []}else{regexp_result = JSON.parse(regexp_result)}
		var result = regexp_result.pop()
		if(typeof(VAR_TV_0) == 'undefined' || !VAR_TV_0){VAR_TV_0 = ""}
		var result = regexp_result[0]
		if(typeof(result) == 'undefined' || !result){var result = ""}
		if(regexp_result.length == 0){var result = VAR_TV_0}; return result
	}
	catch(e){fail(e)}
}
are.all = function(regexp,content){
	try{
		var regexp = aec.unicode(regexp)
		eval('var regexp_result = native("regexp", "scan", JSON.stringify({text: content,regexp:"'+ regexp +'"}))')
		if(regexp_result.length == 0){var result = []}else{var result = JSON.parse(regexp_result)}; return result
	}
	catch(e){fail(e)}
}
are.split = function(regexp,content){
	try{
		var regexp = aec.unicode(regexp)
		eval('var regexp_result = native("regexp", "split", JSON.stringify({text: content,regexp:"'+ regexp +'"}))')
		if(regexp_result.length == 0){var result = []}else{var result = JSON.parse(regexp_result)}; return result
	}
	catch(e){fail(e)}
}
are.change = function(regexp,content,removable,replacement){
	try{
		var regexp = aec.unicode(regexp)
		eval('var result = native("'+ regexp +'", "replace", JSON.stringify({text: content,regexp:"'+ removable +'",replace:"'+ replacement +'"}))'); return result
	}
	catch(e){fail(e)}
}
// *****************************БЛОК*РАБОТЫ*С*ФАЙЛОВОЙ*СИСТЕМОЙ********************************
var afs = {}
afs.pathcheck = function(string){
    var path = aec.unicode(string); var check = false
    eval('var json = JSON.parse(native("filesystem", "fileinfo", "' + path + '" ))')
    var exists = json["exists"]; var isdir = json["is_directory"]
    if (exists) {if (isdir){var check = true}}; return check
}
afs.filecheck = function(string){
    var path = aec.unicode(string); var check = false
    eval('var json = JSON.parse(native("filesystem", "fileinfo", "' + path + '" ))')
    var exists = json["exists"]; var isdir = json["is_directory"]
    if (exists) {if (isdir == false){var check = true}}; return check
}
afs.write = function(string, path){
	var check = afs.filecheck(path); if (check == fasle){
		alg.name2("afs.write***func", "Неверно указан путь***error", path + "***ok")
		alg.fail("Укажите правильный путь к файлу для записи!")
	}; if (string == ""){string == " "}
    native("filesystem", "writefile", JSON.stringify({path:path,value: (string).toString() + "\r\n",base64:false,append:true}))
}
afs.listsave = function(string, path){
	var check = afs.filecheck(path); if (check == fasle){
		alg.name2("afs.listsave***func", "Неверно указан путь***error", path + "***ok")
		alg.fail("Укажите правильный путь к файлу для записи!")
	}; if (string == ""){string == " "}
	native("filesystem", "writefile", JSON.stringify({path: path, value: (string).join("\r\n") + ((false) ? "\r\n" : "" ),base64:false,append:false}))
}
afs.size = function(string){
	var check = afs.filecheck(string); if (check == fasle){
		alg.name2("afs.size***func", "Неверно указан путь***error", string + "***ok")
		alg.fail("Укажите правильный путь к файлу!")
	}
    eval('var json = JSON.parse(native("filesystem", "fileinfo", "' + string + '" ))')
	return json["size"]
}
afs.directory = function(string){
	var check = afs.filecheck(string); if (check == fasle){
		alg.name2("afs.directory***func", "Неверно указан путь***error", string + "***ok")
		alg.fail("Укажите правильный путь к файлу!")
	}
    eval('var json = JSON.parse(native("filesystem", "fileinfo", "' + string + '" ))')
	return json["directory"]
}
afs.mod = function(string){
	var check = afs.filecheck(string); if (check == fasle){
		alg.name2("afs.mod***func", "Неверно указан путь***error", string + "***ok")
		alg.fail("Укажите правильный путь к файлу!")
	}
    eval('var json = JSON.parse(native("filesystem", "fileinfo", "' + string + '" ))')
	var mod = new Date(json["last_modified"] * 1000); return mod
}
afs.folder = function(string){
	eval('native("filesystem", "createdir", "' + string + '")')
}
afs.del = function(string){
	eval('native("filesystem", "removefile", "' + string + '")')
}
afs.move = function(old_path, new_path){
	eval('native("filesystem", "movefile", JSON.stringify({path: "' + old_path + '",dest: "' + new_path + '"}))')
}
afs.copy = function(path, new_path){
	eval('native("filesystem", "copyfile", JSON.stringify({path: "' + path + '",dest: "' + new_path + '"}))')
}
// *****************************БЛОК*СЕРВИСНЫХ*ФУНКЦИЙ********************************
var asf = {}
asf.thread = function(){
    return thread_number().toString()
}
asf.thread100 = function(){
	var thread_index = thread_number()
	if (thread_index < 10) { thread_index = "00" + thread_index }
	if (thread_index >= 10){if (thread_index < 100) { thread_index = "0" + thread_index } }
	return String(thread_index)
}
asf.thread1000 = function(){
	var thread_index = thread_number()
	if (thread_index < 10) { thread_index = "000" + thread_index }
	if (thread_index >= 10){if (thread_index < 100) { thread_index = "00" + thread_index } }
    if (thread_index >= 100){if (thread_index < 1000) { thread_index = "0" + thread_index } }
	return String(thread_index)
}
asf.res = function(string){
	try{
		return RPick(string)
	}
	catch(e){fail(e)}
}
asf.location = function(string){
	try{
		return RInfo(string,"Location")
	}
	catch(e){fail(e)}
}
asf.is_num = function(string){
	try{
		var result = isNaN(string)
		if (result){var answer = false}else{var answer = true}
		return answer
	}
	catch(e){fail(e)}
}
asf.var_isset = function(string){
	try{
		eval('if (typeof '+string+' !=="undefined"){var result = true}else{var result = false}')
		return result
	}
	catch(e){fail(e)}
}
asf.global = function(string){
	try{
		var string = atx.upper(string)
		var eval_string = 'var result = JSON.parse(P("basglobal", "'+string+'") || '+"'"+'""'+"'"+')'
		eval(eval_string); return result
	}
	catch(e){fail(e)}
}
asf.sound = function(){
	native("usernotification", "playsound", "")
}
// ********************************БЛОК*ОБРАБОТКИ*ТЕКСТА***********************************
var atx = {}
atx.upper = function(string){
	try{
		return string.toUpperCase()
	}
	catch(e){fail(e)}
}
atx.htmlclean = function(string){
	try{
		var text = string.replace(/&nbsp;/g, ' ')
		var text = text.replace(/[\t]/g, ' ')
		var text = text.replace(/[ ]{2,}/g, ' ')
		var text = text.replace(/[\s]+([\r\n])/g, '\r\n')
		var text = text.replace(/([\r\n])[\s]+/g, '\r\n')
		var text = text.replace(/[\r\n]{2,}/g, '\r\n')
		return text.replace(/<.*?>/g, "")
	}
	catch(e){fail(e)}
}
atx.htmltotext = function(string){
	try{
		var text=string.replace(/<br>/gi, "\n")
		var text=text.replace(/<p.*>/gi, "\n")
		var text=text.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 (Link->$1) ")
		}
		catch(e){fail(e)}
		return text.replace(/<(?:.|\s)*?>/g, "")
}
atx.breaks = function(string){
	try{
		return string.replace(/[\n\r]/g, ' ').replace(/\s{2,}/g, ' ')
	}
	catch(e){fail(e)}
}
atx.spaces = function(string){
	try{
		return string.replace(/\s*/g,'')
	}
	catch(e){fail(e)}
}
// ********************************БЛОК*ГЕНЕРИРУЮЩИХ*ФУНКЦИЙ***********************************
var agf = {}
agf.tmp = function(string){
    return _spintax(string)
}
agf.rmalename = function() {
    return agf.tmp("<RMaleName>")
}
agf.tmalename = function() {
    return agf.tmp('<TMaleName>')
}
agf.emalename = function() {
    return agf.tmp('<EMaleName>')
}
agf.rfemname = function() {
    return agf.tmp('<RFemName>')
}
agf.tfemname = function() {
    return agf.tmp('<TFemName>')
}
agf.efemname = function() {
    return agf.tmp('<EFemName>')
}
agf.rmalesurname = function(){
	return agf.tmp('<RSurname>')
}
agf.rfemsurname = function(){
	return agf.tmp('<RSurname>а')
}
agf.esurname = function(){
	return agf.tmp('<ESurname>')
}
agf.randstringen = function(num){
	if (asf.var_isset(num) == false){ num = 13 }
	var data = Number(num)
	if (asf.is_num(data)){
		var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "
		var content = Array(data).join().split(',').map(function() { return (alphabet).charAt(Math.floor(Math.random() * alphabet.length)); }).join('')
	}; return content
}
agf.randstringru = function(num){
	if (asf.var_isset(num) == false){ num = 13 }; var data = Number(num)
	if (asf.is_num(data)){
		var alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя "
		var content = Array(data).join().split(',').map(function() { return (alphabet).charAt(Math.floor(Math.random() * alphabet.length)); }).join('')
	}; return content
}
agf.cryptopass = function(num){
	if (asf.var_isset(num) == false){ num = 16 }; var data = Number(num)
	if (asf.is_num(data)){
		var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_-+=<>?'}{]["
		var content = Array(data).join().split(',').map(function() { return (alphabet).charAt(Math.floor(Math.random() * alphabet.length)); }).join('')
	}; return content
}
agf.pass = function(num){
	if (asf.var_isset(num) == false){ num = 8 }; var data = Number(num)
	if (asf.is_num(data)){
		var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
		var content = Array(data).join().split(',').map(function() { return (alphabet).charAt(Math.floor(Math.random() * alphabet.length)); }).join('')
	}; return content
}
agf.numpass = function(num){
	if (asf.var_isset(num) == false){ num = 8 }; var data = Number(num)
	if (asf.is_num(data)){
		var alphabet = "0123456789"
		var content = Array(data).join().split(',').map(function() { return (alphabet).charAt(Math.floor(Math.random() * alphabet.length)); }).join('')
	}; return content
}
agf.year = function(){
	return agf.tmp('19{7|8|9}<AnyDigit>')
}
agf.month = function(){
	return agf.tmp('{01|02|03|04|05|06|07|08|09|10|11|12}')
}
agf.day = function(){
	return agf.tmp('{01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28}')
}
agf.birthday = function(min, max){
	try{
		var min = Number(min); var max = Number(max)
		if (asf.is_num(min) == false){
			var name = 'agf.birthday***func'; var str = 'Заданное значение возраста***red'; var str2 = min + '***ok'; var str3 = 'указано неверно.***red'; alg.name3(name, str, str2, str3)
			alg.fail('Укажите минимальный возраст правильно!')
		}
		if (asf.is_num(max) == false){
			var name = 'agf.birthday***func'; var str = 'Заданное значение возраста***red'; var str2 = max + '***ok'; var str3 = 'указано неверно.***red'; alg.name3(name, str, str2, str3)
			alg.fail('Укажите максимальный возраст правильно!')
		}
		if (min > max) {var mx = max; var mn = min; var min = mx; var max = mn}
		var minyear = atm.year() - max
		var maxyear = atm.year() - min
		var cycle = maxyear - minyear
		var str = ''; var count = minyear
		for (i=0;i<cycle;i++){var str = str+count; var str = str+'|'; count++}
		var str = str.substring(0, str.length - 1)
		var str = '{' + str + '}'
		var year = agf.tmp(str)
		var month = agf.month()
		var day = agf.day()
		return day + '.' + month  + '.' + year
	}
	catch(e){fail(e)}
}
// *************************************HTTP*КЛИЕНТ****************************************
var ahc = {}
ahc.setproxy = function(string){
	var hash = proxy_parse(string)
	if("auto" != "auto" ){hash["IsHttp"] = "auto" == "http"}; var proxy = true; var login = ""; var password = ""
	if(login.length > 0 && password.length > 0 ){hash["name"] = login; hash["password"] = password}
	_if(proxy, function(){_switch_http_client_main()
		http_client_set_proxy(hash["server"], hash["Port"], hash["IsHttp"], hash["name"], hash["password"])
	})!
}
ahc.proxytwo = function(string){
	var proxy_array = string.split(','); var proxy_type = proxy_array[0]
	var proxy_server = proxy_array[1]; var hash = proxy_parse(proxy_server)
	if(proxy_type != "auto" ){hash["IsHttp"] = proxy_type == proxy_type}; var proxy = true; var login = ""; var password = ""
	if(login.length > 0 && password.length > 0 ){hash["name"] = login; hash["password"] = password}
	_if(proxy, function(){_switch_http_client_main()
		http_client_set_proxy(hash["server"], hash["Port"], hash["IsHttp"], hash["name"], hash["password"])
	})!
}
ahc.proxythree = function(string){
	var proxy_array = string.split(','); var proxy_server = proxy_array[0]
	var proxy_login = proxy_array[1]; var proxy_pass = proxy_array[1]
	var hash = proxy_parse(proxy_server)
	if("auto" != "auto" ){hash["IsHttp"] = "auto" == "http"}; var proxy = true; var login = proxy_login; var password = proxy_pass
	if(login.length > 0 && password.length > 0 ){hash["name"] = login; hash["password"] = password}
	_if(proxy, function(){_switch_http_client_main()
		http_client_set_proxy(hash["server"], hash["Port"], hash["IsHttp"], hash["name"], hash["password"])
	})!
}
ahc.proxyfour = function(string){
	var proxy_array = string.split(','); var proxy_type = proxy_array[0]
	var proxy_server = proxy_array[1]; var proxy_login = proxy_array[2]
	var proxy_pass = proxy_array[3]; var hash = proxy_parse(proxy_server)
	if(proxy_type != "auto" ){hash["IsHttp"] = proxy_type == proxy_type}
	var proxy = true; var login = proxy_login; var password = proxy_pass
	if(login.length > 0 && password.length > 0 ){hash["name"] = login; hash["password"] = password}
	_if(proxy, function(){_switch_http_client_main()
		http_client_set_proxy(hash["server"], hash["Port"], hash["IsHttp"], hash["name"], hash["password"])
	})!
}
ahc.proxy = function(string){
	var proxy_array = string.split(' ').join(',').split('=').join(',').split(',')
	var proxy = proxy_array.join(','); var length = proxy_array.length
	if (length == 1){ahc.setproxy(proxy)}
	if (length == 2){ahc.proxytwo(proxy)}
	if (length == 3){ahc.proxythree(proxy)}
	if (length == 4){ahc.proxyfour(proxy)}
}
ahc.content = function(){
	_switch_http_client_main()
	return http_client_encoded_content("auto")
}
ahc.status = function(){
	_switch_http_client_main()
	return http_client_status()
}
ahc.reset = function(){
	_switch_http_client_main()
	new_http_client()
}
ahc.url = function(){
	_switch_http_client_main()
	return http_client_url()
}
ahc.header = function(header, string){
	_switch_http_client_main()
	http_client_set_header('"'+header+'"', '"'+string+'"')
}
ahc.getheader = function(header){
	_switch_http_client_main()
	http_client_header('"'+header+'"')
}
ahc.cleanheaders = function(){
	_switch_http_client_main()
	http_client_clear_header()
}
ahc.savecookies = function(){
	_switch_http_client_main()
	return http_client_save_cookies()
}
ahc.changecookies = function(string){
	_switch_http_client_main()
	http_client_restore_cookies(string)
}
// ********************************БЛОК*КОДИРОВАНИЯ*ДАННЫХ***********************************
var aec = {}
aec.cryptojs_check = function(){
	var result = asf.var_isset('CryptoJS')
	if (result == false){
		var name = 'aec.cryptojs_check***func'; var str = 'Для работы с функциями шифрования-дешифровки требуется библиотека***red'; var str2 = 'CryptoJS***ok'; var str3 = '!***red'; alg.name3(name, str, str2, str3)
		var name = 'aec.cryptojs_check***func'; var str = 'Установите данную библиотеку и перезапустите проект. Ссылка на скачивание:***red'; var str2 = 'https://cloud.mail.ru/public/HtUq/cC3x1P93Y***ok'; alg.name2(name, str, str2)
		alg.fail("Установите библиотеку CryptoJS и перезапустите проект!")
	}
}
aec.aes = function(string, key){
	aec.cryptojs_check()
	try{
		return CryptoJS.AES.encrypt(string, key).toString()
	}
	catch(e){fail(e)}
}
aec.utf8 = function(string){
	aec.cryptojs_check()
    try{
		return CryptoJS.enc.Utf8.parse(string).toString()
	}
	catch(e){fail(e)}
}
aec.md5 = function(string){
	aec.cryptojs_check()
    try{
		return CryptoJS.MD5(string).toString()
	}
	catch(e){fail(e)}
}
aec.unicode = function(string){
	try{
		return string.split("").map(function(s){
			return "\\u"+("0000" + s.charCodeAt(0).toString(16)).slice(-4);
		}).join("")
	}
	catch(e){fail(e)}
}
aec.sha1 = function(string){
	aec.cryptojs_check()
	try{
		return CryptoJS.SHA1(string).toString()
	}
	catch(e){fail(e)}
}
aec.sha256 = function(string, key){
	aec.cryptojs_check()
    try{
		var hash = CryptoJS.HmacSHA256(string, key)
		return hash.toString(CryptoJS.enc.Hex)
	}
	catch(e){fail(e)}
}
aec.base64 = function(string, key){
    try{
		return base64_encode(string)
	}
	catch(e){fail(e)}
}
aec.des = function(string, key){
	aec.cryptojs_check()
	try{
		return CryptoJS.DES.encrypt(string, key).toString()
	}
	catch(e){fail(e)}
}
aec.tripledes = function(string, key){
	aec.cryptojs_check()
	try{
		return CryptoJS.TripleDES.encrypt(string, key).toString()
	}
	catch(e){fail(e)}
}
// ********************************БЛОК*ДЕШИФРОВКИ*ДАННЫХ***********************************
var adc = {}
adc.aes = function(string, key){
	aec.cryptojs_check()
	try{
		return CryptoJS.AES.decrypt(string, key).toString(CryptoJS.enc.Utf8)
	}
	catch(e){fail(e)}
}
adc.base64 = function(string){
    try{
		return base64_decode(string)
	}
	catch(e){fail(e)}
}
adc.md5 = function(string){
	aec.cryptojs_check()
    try{
		return CryptoJS.decode.MD5(string).toString()
	}
	catch(e){fail(e)}
}
adc.utf8 = function(string){
	aec.cryptojs_check()
    try{
		return CryptoJS.Utf8.decrypt(string).toString()
	}
	catch(e){fail(e)}
}
adc.des = function(string, key){
	aec.cryptojs_check()
	try{
		return CryptoJS.DES.decrypt(string, key).toString(CryptoJS.enc.Utf8)
	}
	catch(e){fail(e)}
}
adc.tripledes = function(string, key){
	aec.cryptojs_check()
	try{
		return CryptoJS.TripleDES.decrypt(string, key).toString(CryptoJS.enc.Utf8)
	}
	catch(e){fail(e)}
}
// **********************************БЛОК*РАБОТЫ*С*JSON*************************************
var ajn = {}
ajn.check = function(string){
	try{JSON.parse(string);var result = true}
	catch(e){var result = false};return result
}
ajn.count = function(string, path){
	try{var json = JSON.parse(string)
		if(path == "") {var result = Object.keys(json).length}
		else {var result = jsonPath(json, path).length}}
	catch(e){fail(e)};return result
}
ajn.key = function(string, path){
	try{var json = JSON.parse(string)
		if(path == "") {var result = Object.keys(json)}
		else {var result = jsonKeys(json, path)}
	}
	catch(e){fail(e)}
	return result
}
ajn.keys = function(string, path, separ){
	try{var new_list = Array()
	if(path.indexOf(separ) > 0){var paths = path.split(separ)}
	if(string.indexOf(separ) > 0){var list = string.split(separ)
	for(var i = 0; i < list.length; i++){
		var json = JSON.parse(list[i])
		if(paths[i] == ""){
			new_list[i] = Object.keys(json)
		}else{
  			new_list[i] = jsonKeys(json, paths[i])
  		}
	}
}
	   }catch(e){fail(e)}
	return new_list
}
ajn.multyparse = function(string, path, separ){
try{var new_list = Array()
	var paths = path.split(separ)
	var list = string.split(separ)
	for(var i = 0; i < list.length; i++){
		var json = JSON.parse(list[i])
		if(paths[i] == ""){
			new_list[i] = json
	}else{
		new_list[i] = jsonPath(json, paths[i])}
	}
}
catch(e)
{fail(e)}
	return new_list
}
ajn.parse = function(string, path){
try{var json = JSON.parse(string)
	if(path == "") {
		var result = json
	}else {var result = jsonPath(json, path)}
}
catch(e)
{fail(e)}
	return result
}
// ********************************БЛОК*РАБОТЫ*С*ФОРМАТОМ*CSV***********************************
var asv = {}
asv.check = function(resource, string){
	var type = typeof string
	if (type == "object"){
		for (i=0; i<string.length; i++){
			var eltype = typeof string[i]
			if (eltype == "string"){var element = string[i].replace("'", '"')}
		}
		var string = string.join(',')
	}
    var first = asf.res(resource); var first = first[0]
    var header = String(string); var path = asf.location(resource)
    var name = 'asv.check***func'
    if (header == first) {
        alg.name3(name, 'Файл***success', path + '***ok', 'соответствует текущему типу записи***success')
        var result = true
    } else {
        alg.name3(name, 'В файл***error', path + '***ok', 'записаны данные другого формата***error')
        var result = false
    }
    return result
}
asv.add = function(resource, string){
	var type = typeof string
	if (type == "object"){
		for (i=0; i<string.length; i++){
			var element = string[i]
            var check = true
			var eltype = typeof element
			if (eltype == "string"){
				if(element.indexOf(",") > 0){
                    var element = element.replace("'",'"')
                    var first_symbol = element.substring(0,1)
                    var last_symbol = element.slice(-1)
                    if (first_symbol == '"') {var element = element.slice(1)}
                    if (last_symbol == '"') {var element = element.substring(0, element.length - 1)}
                    var element = "'" + element + "'"
                }
			}
            string[i] = element
		}
		var string = string.join(',')
	}
	RInsert(resource,string,false)
	if(true)
	RSync(resource)
}
