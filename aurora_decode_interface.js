<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Column", description:tr("Decode object functions"), default_selector: "string", disable_int:true

,variants: [
"title<br/><span style='color:gray;font-size:small'>" + tr("Page title") + "</span>",
"page_text<br/><span style='color:gray;font-size:small'>" + tr("Page text") + "</span>",
"description<br/><span style='color:gray;font-size:small'>" + tr("Description text of the article/goods") + "</span>",
"additional_description<br/><span style='color:gray;font-size:small'>" + tr("Additional description of the article/goods") + "</span>",
"breadcrumbs<br/><span style='color:gray;font-size:small'>" + tr("Breadcrumbs group - multiple categories separated by a delimiter") + "</span>",
"date<br/><span style='color:gray;font-size:small'>" + tr("Article/goods posting date") + "</span>",
"price<br/><span style='color:gray;font-size:small'>" + tr("Price of goods") + "</span>",
"product_code<br/><span style='color:gray;font-size:small'>" + tr("Product code") + "</span>",
"image<br/><span style='color:gray;font-size:small'>" + tr("Article/product image") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal" id="1">
      <div class="tr tooltip-paragraph-first-fold">Functions description.</div>
	  <div class="tr tooltip-paragraph-fold">Start with this action. Action are create array (list), which will be contain all data for phoenix configuration.</div>
      <div class="tooltip-paragraph-last-fold"><span class="tr">More information about parsing with Phoenix Parser:</span> <a href="#"  onclick="BrowserAutomationStudio_OpenUrl('https://community.bablosoft.com/user/pragmatik'); return false;">youtube video</a></div>
</div>

<a onclick="BrowserAutomationStudio_OpenUrl('https://community.bablosoft.com/user/pragmatik')" class="tr" style="margin-left: 20px;cursor: pointer;">Detailed instructions</a>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>