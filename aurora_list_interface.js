<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Log", description:tr("List object functions"), default_selector: "string", disable_int:true

,variants: [
"list.array_mix(array)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Array mixing") + "</span>",
"list.random(array)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Random element from list") + "</span>",
"list.doubles(array)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Removing duplicates from array") + "</span>",
"list.thread(array)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Assigning element from array to a thread") + "</span>",
"list.threads(threads, array)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Distribution of array elements between threads") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal">
      <div class="tr tooltip-paragraph-first-fold">Примечание!</div>
	  <div class="tr tooltip-paragraph-fold">Start with aurora.check function for support the latest version of the library in you project.</div>
	  <div class="tr tooltip-paragraph-fold">Specify your version of the library when you call it like this: aurora.check('2.0.1').</div>
      <div class="tooltip-paragraph-last-fold">If user is using an older version, this function will force to update the library.</div>
</div>
<a onclick="BrowserAutomationStudio_OpenUrl('https://community.bablosoft.com/user/pragmatik')" class="tr" style="margin-left: 20px;cursor: pointer;">Detailed instructions</a>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>