<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Log", description:tr("als{} object functions (aurora lists)"), default_selector: "string", disable_int:true

,variants: [
"als.array_mix(list)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] List mixing") + "</span>",
"als.random(list)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Random element from list") + "</span>",
"als.doubles(list)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Removing duplicates from list") + "</span>",
"als.carousel(list)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.1] Flipping one element of the list") + "</span>",
"als.compare(list1, list2)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Two lists comparing") + "</span>",
"als.kill(list, element)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Delete list element by value") + "</span>",
"als.del(list, element_number)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Extract element by index with removal from list") + "</span>",
"als.thread(list)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Assigning element from list to a thread") + "</span>",
"als.threads(threads, list)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Distribution of list elements between threads") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal">
      <div class="tr tooltip-paragraph-first-fold">Annotation!</div>
	  <div class="tr tooltip-paragraph-fold">For replacement standart BAS commands from action 'List', use next javascript commands:</div>
	  <div class="tr tooltip-paragraph-fold">VAR_LIST.push(element): Add element to list.</div>
	  <div class="tr tooltip-paragraph-fold">VAR_LIST[3]: Get element by index, where 3 - element index.</div>
	  <div class="tr tooltip-paragraph-fold">VAR_LIST.splice(0, 1, '3'): Insert element, where '3' - element, 1 - position.</div>
	  <div class="tr tooltip-paragraph-fold">VAR_LIST[0]: First list element.</div>
	  <div class="tr tooltip-paragraph-fold">VAR_LIST[VAR_LIST.length - 1]: Last list element.</div>
	  <div class="tr tooltip-paragraph-fold">VAR_LIST.length: List length.</div>
	  <div class="tr tooltip-paragraph-fold">VAR_LIST.slice().splice(0,3): Sublist, where 0-3 - final sublist range.</div>
	  <div class="tr tooltip-paragraph-fold">VAR_LIST.join(','): Join list to string, where ',' - separator.</div>
	  <div class="tr tooltip-paragraph-fold">VAR_STRING.split(','): Parse string to list, where ',' - separator.</div>
	  <div class="tr tooltip-paragraph-fold">VAR_LIST.indexOf('element'): Get element index.</div>
	  <div class="tr tooltip-paragraph-fold">VAR_NEW_LIST = (VAR_LIST).slice(): Copy list.</div>
	  <div class="tr tooltip-paragraph-fold">VAR_LIST.sort(): Sort list.</div>
	  <div class="tr tooltip-paragraph-fold">VAR_NEW_LIST = (VAR_LIST).concat(VAR_LIST_2.slice()): Merge lists.</div>
	  <div class="tr tooltip-paragraph-fold">If you want to distribute the elements of the list evenly between threads, use function als.threads(threadsnum, list), where 'threadsnum' - number of all threads:</div>
      <div class="tooltip-paragraph-last-fold">als.threads(10, VAR_LIST)</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>