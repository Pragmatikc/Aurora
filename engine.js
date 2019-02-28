var aurora = {}
aurora.version = [1,0,0]
aurora.versions = ['0.0.1']
aurora.dependency = ['time','log','aid']
aurora.help = function(){
    var version = aurora.version[0] + '.' + aurora.version[1] + '.' + aurora.version[2]
    var name = 'aurora.help***func'
    var str = 'Используется библиотека Аврора версии***success'
    var str2 = version + '***ok'
    log.name_two(name, str, str2)
    var str = 'Для просмотра всех объектов и функций библиотеки используйте***success'
    var str2 = 'справочник библиотеки Аврора***ok'
    log.name_two(name, str, str2)
    var str = 'Актуальную версию библиотеки Аврора можно скачать здесь:***success'
    var str2 = 'https://cloud.mail.ru/public/LbTD/geTTg5Yw9***ok'
    log.name_two(name, str, str2)
}
aurora.check = function(string){
    var arr = string.split('.'); var check = true
    if (arr.length != 3){
        var name = 'aurora.check***func'; var str = 'Требуемая версия библиотеки Aurora (***red'; var str2 = string + '***ok'; var str3 = ') указана неверно.***red'; log.name_three(name, str, str2, str3)
		fail_user("Укажите требуемую версию библиотеки правильно!",false)
    }
    var major_req = arr[0]; var major = aurora.version[0]; if (major_req > major){var check = false}
    var minor_req = arr[1]; var minor = aurora.version[1]; if (minor_req > minor){var check = false}
    var micro_req = arr[2]; var micro = aurora.version[2]; if (micro_req > micro){var check = false}
    var version = aurora.version[0] + '.' + aurora.version[1] + '.' + aurora.version[2]
    if (check){
        var name = 'aurora.check***func'; var str = 'Версия библиотеки ***success'; var str2 = 'aurora_library ***green'; var str3 = String(version) + '***ok'; log.name_three(name, str, str2, str3)
        var name = 'aurora.check***func'; var str = 'Актуальная версия библиотеки Аврора: ***success'; var str2 = 'https://cloud.mail.ru/public/LbTD/geTTg5Yw9***ok'; log.name_two(name, str, str2)
    } else {
        var name = 'aurora.check***func';
        var str = 'Требуется врсия Aurora Library не ниже ***error'; var str2 = string + '***ok'; log.name_two(name, str, str2)
        var str = 'На даный момент установлена версия***error'; var str2 = version + '***ok'; log.name_two(name, str, str2)
        var str = 'Скачайте и установите актуальную версию: ***success'; var str2 = 'https://cloud.mail.ru/public/LbTD/geTTg5Yw9***ok'; log.name_two(name, str, str2)
    }
}
// *****************************БЛОК*ВЫВОДА*ИНФОРМАЦИИ*В*ЛОГ**********************************
var log = {}
log.color_name = function(string){
    var colors = {'black': '#262626', 'white': '#edeeeb', 'gray': '#808080',
    'red': '#fb1c1c', 'blue': '#0084ff', 'darkblue': '#1741de', 'green': '#3bbe01', 'yellow': '#efce4a',
    'name': '#6084f8','func': '#e7861f', 'error': '#e41313','success': '#0bc041', 
    'ok': '#ffa300', 'vk': '#43638a', 'fb': '#385591', 'insta': '#a23ea1', 'avito': '#92c925', 'link': '#0000ff',
    'чёрн': '#262626', 'бел': '#edeeeb', 'сер': '#808080',
    'крас': '#fb1c1c', 'гол': '#0084ff', 'син': '#1741de', 'зел': '#3bbe01', 'жёлт': '#efce4a',
    'имя': '#6084f8', 'функц': '#e7861f', 'функ': '#e7861f', 'ссылка': '#0000ff', 'ош': '#e41313', 'усп': '#0bc041', 
    'ок': '#ffa300', 'вк': '#43638a', 'фб': '#385591', 'инст': '#a23ea1', 'авито': '#92c925'}
    if (string == 'all_colors'){var result = colors} else {
    if (string in colors){var result = colors[string]}else{var result = colors['gray']}}
    return result
}
log.all_colors = function(){
    var colors_array = log.color_name('all_colors')
    var all_keys = Object.keys(colors_array)
    for (i=0;i<all_keys.length;i++){
        var color = all_keys[i]
        var rgb = colors_array[color]
        var name = color + "***" + color
        var str1 = 'Пример текста, написанного данным цветом***' + color
        var str2 = ' ' + 'Код RGB: ' + rgb
        log.name_two(name, str1, str2)
    }
}
log.block_check = function (){
    if (typeof block !== "undefined"){var block_result = true}else{var block_result = false}
	if (block_result == false){
		fail_user("Укажите идентификатор блока перед вызываемыми в блоке функциями!",false)
	}
}
log.one = function (string){
	log.block_check(); var str_array = string.split('***'); 
	if (str_array.length == 2){var str_log = str_array[0]; var str_color = log.color_name(str_array[1])} else if (str_array.length == 1){var str_log = str_array[0]; var str_color = '#808080'} else if (str_array.length == 0){var str_log = ''; var str_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = aid.thread_100(); var comment_time = time.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ str_color +"'>"+ str_log +"</span></span></span>")
}
log.two = function (str_1, str_2){
    log.block_check()
    var str_1_array = str_1.split('***'); if (str_1_array.length == 2) {var str_1_log = str_1_array[0]; var str_1_color = log.color_name(str_1_array[1])} else if (str_1_array.length == 1){var str_1_log = str_1_array[0]; var str_1_color = '#808080'} else if (str_1_array.length == 0){var str_1_log = ''; var str_1_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_2_array = str_2.split('***'); if (str_2_array.length == 2) {var str_2_log = str_2_array[0]; var str_2_color = log.color_name(str_2_array[1])} else if (str_2_array.length == 1){var str_2_log = str_2_array[0]; var str_2_color = '#808080'} else if (str_2_array.length == 0){var str_2_log = ''; var str_2_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = aid.thread_100(); var comment_time = time.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ str_1_color +"'>"+ str_1_log +"</span> <span style='color:"+ str_2_color +"'>"+ str_2_log +"</span></span></span>")
}
log.three = function (str_1, str_2, str_3){
    log.block_check()
	var str_1_array = str_1.split('***'); if (str_1_array.length == 2) {var str_1_log = str_1_array[0]; var str_1_color = log.color_name(str_1_array[1])} else if (str_1_array.length == 1){var str_1_log = str_1_array[0]; var str_1_color = '#808080'} else if (str_1_array.length == 0){var str_1_log = ''; var str_1_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_2_array = str_2.split('***'); if (str_2_array.length == 2) {var str_2_log = str_2_array[0]; var str_2_color = log.color_name(str_2_array[1])} else if (str_2_array.length == 1){var str_2_log = str_2_array[0]; var str_2_color = '#808080'} else if (str_2_array.length == 0){var str_2_log = ''; var str_2_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_3_array = str_3.split('***'); if (str_3_array.length == 2) {var str_3_log = str_3_array[0]; var str_3_color = log.color_name(str_3_array[1])} else if (str_3_array.length == 1){var str_3_log = str_3_array[0]; var str_3_color = '#808080'} else if (str_3_array.length == 0){var str_3_log = ''; var str_3_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = aid.thread_100(); var comment_time = time.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ str_1_color +"'>"+ str_1_log +"</span> <span style='color:"+ str_2_color +"'>"+ str_2_log +"</span> <span style='color:"+ str_3_color +"'>"+ str_3_log +"</span></span></span>")
}
log.name = function (name, string){
	log.block_check(); var str_array = string.split('***'); var name_array = name.split('***');
    if (name_array.length == 2) {var name_var = name_array[0]; var name_color = log.color_name(name_array[1])} else if (name_array.length == 1){var str_log = name_array[0]; var str_color = log.color_name('name')} else if (name_array.length == 0){var name_var = ''; var name_color = '#FFF'} else {var str_log = ''; var str_color = log.color_name('name')}
	if (str_array.length == 2){var str_log = str_array[0]; var str_color = log.color_name(str_array[1])} else if (str_array.length == 1){var str_log = str_array[0]; var str_color = '#808080'} else if (str_array.length == 0){var str_log = ''; var str_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = aid.thread_100(); var comment_time = time.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ name_color +"'> ["+ name_var +"] <span style='color:"+ str_color +"'>"+ str_log +"</span></span></span>")
}
log.name_two = function (name, str_1, str_2){
    log.block_check(); var name_array = name.split('***');
    if (name_array.length == 2) {var name_var = name_array[0]; var name_color = log.color_name(name_array[1])} else if (name_array.length == 1){var str_log = name_array[0]; var str_color = log.color_name('name')} else if (name_array.length == 0){var name_var = ''; var name_color = '#FFF'} else {var str_log = ''; var str_color = log.color_name('name')}
    var str_1_array = str_1.split('***'); if (str_1_array.length == 2) {var str_1_log = str_1_array[0]; var str_1_color = log.color_name(str_1_array[1])} else if (str_1_array.length == 1){var str_1_log = str_1_array[0]; var str_1_color = '#808080'} else if (str_1_array.length == 0){var str_1_log = ''; var str_1_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_2_array = str_2.split('***'); if (str_2_array.length == 2) {var str_2_log = str_2_array[0]; var str_2_color = log.color_name(str_2_array[1])} else if (str_2_array.length == 1){var str_2_log = str_2_array[0]; var str_2_color = '#808080'} else if (str_2_array.length == 0){var str_2_log = ''; var str_2_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = aid.thread_100(); var comment_time = time.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ name_color +"'> ["+ name_var +"] <span style='color:"+ str_1_color +"'>"+ str_1_log +"</span> <span style='color:"+ str_2_color +"'>"+ str_2_log +"</span></span></span>")
}
log.name_three = function (name, str_1, str_2, str_3){
    log.block_check(); var name_array = name.split('***');
    if (name_array.length == 2) {var name_var = name_array[0]; var name_color = log.color_name(name_array[1])} else if (name_array.length == 1){var str_log = name_array[0]; var str_color = log.color_name('name')} else if (name_array.length == 0){var name_var = ''; var name_color = '#FFF'} else {var str_log = ''; var str_color = log.color_name('name')}
	var str_1_array = str_1.split('***'); if (str_1_array.length == 2) {var str_1_log = str_1_array[0]; var str_1_color = log.color_name(str_1_array[1])} else if (str_1_array.length == 1){var str_1_log = str_1_array[0]; var str_1_color = '#808080'} else if (str_1_array.length == 0){var str_1_log = ''; var str_1_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_2_array = str_2.split('***'); if (str_2_array.length == 2) {var str_2_log = str_2_array[0]; var str_2_color = log.color_name(str_2_array[1])} else if (str_2_array.length == 1){var str_2_log = str_2_array[0]; var str_2_color = '#808080'} else if (str_2_array.length == 0){var str_2_log = ''; var str_2_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_3_array = str_3.split('***'); if (str_3_array.length == 2) {var str_3_log = str_3_array[0]; var str_3_color = log.color_name(str_3_array[1])} else if (str_3_array.length == 1){var str_3_log = str_3_array[0]; var str_3_color = '#808080'} else if (str_3_array.length == 0){var str_3_log = ''; var str_3_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = aid.thread_100(); var comment_time = time.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ name_color +"'> ["+ name_var +"] <span style='color:"+ str_1_color +"'>"+ str_1_log +"</span> <span style='color:"+ str_2_color +"'>"+ str_2_log +"</span> <span style='color:"+ str_3_color +"'>"+ str_3_log +"</span></span></span>")
}
log.noblank = function (name, str_1, str_2, str_3){
    log.block_check(); var name_array = name.split('***');
    if (name_array.length == 2) {var name_var = name_array[0]; var name_color = log.color_name(name_array[1])} else if (name_array.length == 1){var str_log = name_array[0]; var str_color = log.color_name('name')} else if (name_array.length == 0){var name_var = ''; var name_color = '#FFF'} else {var str_log = ''; var str_color = log.color_name('name')}
	var str_1_array = str_1.split('***'); if (str_1_array.length == 2) {var str_1_log = str_1_array[0]; var str_1_color = log.color_name(str_1_array[1])} else if (str_1_array.length == 1){var str_1_log = str_1_array[0]; var str_1_color = '#808080'} else if (str_1_array.length == 0){var str_1_log = ''; var str_1_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_2_array = str_2.split('***'); if (str_2_array.length == 2) {var str_2_log = str_2_array[0]; var str_2_color = log.color_name(str_2_array[1])} else if (str_2_array.length == 1){var str_2_log = str_2_array[0]; var str_2_color = '#808080'} else if (str_2_array.length == 0){var str_2_log = ''; var str_2_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var str_3_array = str_3.split('***'); if (str_3_array.length == 2) {var str_3_log = str_3_array[0]; var str_3_color = log.color_name(str_3_array[1])} else if (str_3_array.length == 1){var str_3_log = str_3_array[0]; var str_3_color = '#808080'} else if (str_3_array.length == 0){var str_3_log = ''; var str_3_color = '#808080'} else {var str_log = ''; var str_color = '#808080'}
	var thread_index = aid.thread_100(); var comment_time = time.time()
	log_html("<span style='color:#606060'>["+thread_index+"] ["+ block +"] <span style='color:#808080'>["+ comment_time +"] <span style='color:"+ name_color +"'> ["+ name_var +"] <span style='color:"+ str_1_color +"'>"+ str_1_log +"</span><span style='color:"+ str_2_color +"'>"+ str_2_log +"</span><span style='color:"+ str_3_color +"'>"+ str_3_log +"</span></span></span>")
}
// *****************************БЛОК*ГЕНЕРАЦИИ*ВРЕМЕННЫХ*ЕДИНИЦ*********************************
var time = {}
time.time = function(){
	var time_now = Date.now(); var info = _parse_date(time_now,"auto")
	var hours = info.getHours(); if (hours < 10) { hours = "0" + hours }
	var minutes = info.getMinutes(); if (minutes < 10) { minutes = "0" + minutes }
	var seconds = info.getSeconds(); if (seconds < 10) { seconds = "0" + seconds }
	return hours+':'+minutes+':'+seconds
}
time.unixtime = function (){
	return parseInt(new Date().getTime()/1000)
}
time.unixtime_ms = function (){
	return parseInt(new Date().getTime())
}
time.unixtoutc = function (string){
    var unix_time = Number(string); var a = new Date(unix_time * 1000)
	var months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']
	var year = a.getFullYear();	var month = months[a.getMonth()]; var date = a.getDate()
	var hour = a.getHours(); if (hour < 10){var hour = '0' + hour}
	var min = a.getMinutes(); if (min < 10){var min = '0' + min}
	var sec = a.getSeconds(); if (sec < 10){var sec = '0' + sec}
	return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
}
time.unixmstoutc = function (string){
    var unix_time = Number(string); var a = new Date(unix_time)
	var months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']
	var year = a.getFullYear();	var month = months[a.getMonth()]; var date = a.getDate()
	var hour = a.getHours(); if (hour < 10){var hour = '0' + hour}
	var min = a.getMinutes(); if (min < 10){var min = '0' + min}
	var sec = a.getSeconds(); if (sec < 10){var sec = '0' + sec}
	return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
}
time.delayed_start = function (string){
    var date_now = new Date(); var year = date_now.getFullYear()
	var month_words = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
	var month_elenemt = date_now.getMonth(); var month = month_words[month_elenemt]; var day = date_now.getDate();
	var hours = date_now.getHours(); var minutes = date_now.getMinutes(); var seconds = date_now.getSeconds()
	var hours_now = (hours+':'+minutes+':'+seconds)
	var time_start = Date.parse(month + ' ' + day + ', ' + year + ' ' + string + ' +0300')
	var time_now = Date.parse(month + ' ' + day + ', ' + year + ' ' + hours_now + ' +0300')
	if (time_start > time_now) {
		var str = 'Задан отложенный запуск. Запускаюсь в ***blue'
		var str2 = string + '***ok'
		log.two(str, str2)
		var sleep_time = time_start - time_now
	} else {
		var str = 'Задано прошедшее время отложенного запуска. Запускаюсь сейчас***gray'
		log.one(str)
		var sleep_time = 1313
	}
	return sleep_time
}
// *****************************БЛОК*РАБОТЫ*СО*СПИСКАМИ********************************
var list = {}
list.array_mix = function(array){
	var j, x, i;
	for (i = array.length; i; i--) {
		j = Math.floor(Math.random() * i)
		x = array[i - 1]; array[i - 1] = array[j]
		array[j] = x
	}
	return array
}
list.random = function(array){
	return array[Math.floor(Math.random() * array.length)]
}
list.doubles = function(array){
	var seen = {}
	return (array).filter(function(item) {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true); 
	});
}
list.thread = function(array){
	var thread = thread_number(); var thread = thread - 1; var count = 0; var cycle = 0; var length = array.length// - 1
	while(cycle<thread){var id=count; if(count<length){count++}else{count=0}cycle++}
	return array[id]
}
list.threads = function(threads, array){
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
var reg = {}
reg.check = function(regexp,content){
	var regexp = encode.unicode(regexp)
	eval('var result = Boolean(native("regexp", "ismatch", JSON.stringify({text:content,regexp:"'+regexp+'"})) == "true")')
	return result
}
reg.first = function(regexp,content){
	var regexp = encode.unicode(regexp)
	eval('var regexp_result = native("regexp", "first", JSON.stringify({text: content,regexp:"'+ regexp +'"}))')
	if(regexp_result.length == 0){regexp_result = []}else{regexp_result = JSON.parse(regexp_result)}
	var result = regexp_result.pop()
	if(typeof(VAR_TV_0) == 'undefined' || !VAR_TV_0){VAR_TV_0 = ""}
	var result = regexp_result[0]
	if(typeof(result) == 'undefined' || !result){var result = ""}
	if(regexp_result.length == 0){var result = VAR_TV_0}
	return result
}
reg.all = function(regexp,content){
	var regexp = encode.unicode(regexp)
	eval('var regexp_result = native("regexp", "scan", JSON.stringify({text: content,regexp:"'+ regexp +'"}))')
	if(regexp_result.length == 0){var result = []}else{var result = JSON.parse(regexp_result)}
	return result
}
reg.split = function(regexp,content){
	var regexp = encode.unicode(regexp)
	eval('var regexp_result = native("regexp", "split", JSON.stringify({text: content,regexp:"'+ regexp +'"}))')
	if(regexp_result.length == 0){var result = []}else{var result = JSON.parse(regexp_result)}
	return result
}
reg.change = function(regexp,content,removable,replacement){
	var regexp = encode.unicode(regexp)
	eval('var result = native("'+ regexp +'", "replace", JSON.stringify({text: content,regexp:"'+ removable +'",replace:"'+ replacement +'"}))'); return result
}
// *****************************БЛОК*РАБОТЫ*С*ФАЙЛОВОЙ*СИСТЕМОЙ********************************
var file = {}
file.pathcheck = function(string){
    var path = reg.unicode(string); var check = false
    eval('var json = JSON.parse(native("filesystem", "fileinfo", "' + path + '" ))')
    var exists = json["exists"]; var isdir = json["is_directory"]
    if (exists) {if (isdir){var check = true}}; return check
}
file.filecheck = function(string){
    var path = reg.unicode(string); var check = false
    eval('var json = JSON.parse(native("filesystem", "fileinfo", "' + path + '" ))')
    var exists = json["exists"]; var isdir = json["is_directory"]
    if (exists) {if (isdir == false){var check = true}}; return check
}
file.write = function(string, path){
    native("filesystem", "writefile", JSON.stringify({path:path,value: (string).toString() + "\r\n",base64:false,append:true}))
}
file.listsave = function(string, path){
	native("filesystem", "writefile", JSON.stringify({path: path, value: (string).join("\r\n") + ((false) ? "\r\n" : "" ),base64:false,append:false}))
}
// *****************************БЛОК*СЕРВИСНЫХ*ФУНКЦИЙ********************************
var aid = {}
aid.thread = function(){
    var thread_index = thread_number(); return String(thread_index)
}
aid.thread_100 = function(){
	var thread_index = thread_number()
	if (thread_index < 10) { thread_index = "00" + thread_index }
	if (thread_index >= 10){if (thread_index < 100) { thread_index = "0" + thread_index } }
	return String(thread_index)
}
aid.thread_1000 = function(){
	var thread_index = thread_number()
	if (thread_index < 10) { thread_index = "000" + thread_index }
	if (thread_index >= 10){if (thread_index < 100) { thread_index = "00" + thread_index } }
    if (thread_index >= 100){if (thread_index < 1000) { thread_index = "0" + thread_index } }
	return String(thread_index)
}
aid.is_num = function(string){
	var result = isNaN(string)
	if (result){var answer = false}else{var answer = true}
	return answer
}
aid.var_isset = function(string){
	eval('if (typeof '+string+' !=="undefined"){var result = true}else{var result = false}')
	return result
}
aid.global = function(string){
	var string = string.toUpperCase
	var eval_string = 'var result = JSON.parse(P("basglobal", "'+string+'") || '+"'"+'""'+"'"+')'
	eval(eval_string); return result
}
aid.sound = function(){
	native("usernotification", "playsound", "")
}
// ********************************БЛОК*ОБРАБОТКИ*ТЕКСТА***********************************
var text = {}
text.upper = function(string){
	return string.toUpperCase()
}
text.html_clean(string){
	text = string.replace(/&nbsp;/g, ' ')
	text = text.replace(/[\t]/g, ' ')
	text = text.replace(/[ ]{2,}/g, ' ')
	text = text.replace(/[\s]+([\r\n])/g, '\r\n')
	text = text.replace(/([\r\n])[\s]+/g, '\r\n')
	text = text.replace(/[\r\n]{2,}/g, '\r\n')
	string = text.replace(/<.*?>/g, "")
	return string
}
text.html_to_text(string){
	text=string.replace(/<br>/gi, "\n")
	text=text.replace(/<p.*>/gi, "\n")
	text=text.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 (Link->$1) ")
	string=text.replace(/<(?:.|\s)*?>/g, "")
	return string
}
text.breaks(string){
	return string.replace (/[\n\r]/g, ' ').replace (/\s{2,}/g, ' ')
}
// ********************************БЛОК*ГЕНЕРИРУЮЩИХ*ФУНКЦИЙ***********************************
var gen = {}
gen.tmp_asynch = function(string){
    var template = true
    _if(template, function(){
    _template('"' + string + '"')!
    VAR_TMP = _spintax(_result()).replace("BASASYNC","\)\!")})!
}
gen.tmp = function(string){
    aid.tmp_asynch(string)
    var result = VAR_TMP
    var result = result.slice(1)
    var result = result.substring(0, result.length - 1)
    return result
}
gen.malename = function() {
    return aid.tmp('<RMaleName>')
}
// ********************************БЛОК*КОДИРОВАНИЯ*ДАННЫХ***********************************
var encode = {}
encode.cryptojs_check = function(){
	// Написать функцию проверки наличия библиотеки CryptoJS
}
encode.aes = function(string, key){
	encode.cryptojs_check()
    return CryptoJS.AES.encrypt(string, key).toString()
}
encode.utf8 = function(string){
	encode.cryptojs_check()
    return result = CryptoJS.enc.Utf8.parse(string).toString()
}
encode.md5 = function(string){
	encode.cryptojs_check()
    return CryptoJS.MD5(string).toString()
}
encode.unicode = function(string){
	return string.split("").map(function(s){
		return "\\u"+("0000" + s.charCodeAt(0).toString(16)).slice(-4);
	}).join("");
}
encode.sha256 = function(string, key){
	encode.cryptojs_check()
    return CryptoJS.HASH.sha256(string, key).toString()
}
encode.base64 = function(string, key){
    return base64_encode(string)
}
// ********************************БЛОК*ДЕШИФРОВКИ*ДАННЫХ***********************************
var decode = {}
decode.aes = function(string, key){
	encode.cryptojs_check()
    return CryptoJS.AES.decrypt(string, key).toString(CryptoJS.enc.Utf8)
}
decode.sha256 = function(string, key){
	encode.cryptojs_check()
    return CryptoJS.HmacSHA256.decrypt(string, key).toString()
}
decode.base64 = function(string){
    return base64_decode(string)
}
decode.md5 = function(string/*, key*/){
	encode.cryptojs_check()
    return CryptoJS.dec.MD5/*.decrypt*/(string/*, key*/).toString()
}
decode.utf8 = function(string){
	encode.cryptojs_check()
    return result = CryptoJS.Utf8.decrypt(string).toString()
    // CryptoJS.enc.Base64.parse(result).toString()
}