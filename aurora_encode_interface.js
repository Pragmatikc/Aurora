<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Column", description:tr("aec{} object functions (aurora encode)"), default_selector: "string", disable_int:true

,variants: [
"aec.cryptojs_check()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Checking for CryptoJS library existence [nodata]") + "</span>",
"aec.aes(string, key)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] AES encrypting") + "</span>",
"aec.utf8(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] UTF8 encrypting") + "</span>",
"aec.unicode(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] UNICODE encrypting") + "</span>",
"aec.md5(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] MD5 hash encrypting") + "</span>",
"aec.sha1(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] SHA1 hash encrypting") + "</span>",
"aec.sha256(string, key)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] SHA256 secure hash encrypting") + "</span>",
"aec.base64(string, key)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Base64 code encrypting") + "</span>",
"aec.des(string, key)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] DES encrypting") + "</span>",
"aec.tripledes(string, key)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Triple DES encrypting") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal" id="1">
      <div class="tr tooltip-paragraph-first-fold">Annotation!</div>
	  <div class="tr tooltip-paragraph-fold">Most encryption functions require a CryptoJS library. You can download this library here:</div>
      <div class="tooltip-paragraph-last-fold">https://cloud.mail.ru/public/HtUq/cC3x1P93Y</div>
</div>

<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>