<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Log", description:tr("ahc{} object functions (aurora http-client)"), default_selector: "string", disable_int:true

,variants: [
"ahc.setproxy(proxy)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Set proxy with 'proxy:port' record type [nodata]") + "</span>",
"ahc.proxytwo()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Set proxy with 'http,proxy:port' record type [nodata]") + "</span>",
"ahc.proxythree()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Set proxy with 'proxy:port,login,password' record type [nodata]") + "</span>",
"ahc.proxyfour()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Set proxy with 'http,proxy:port,login,password' record type [nodata]") + "</span>",
"ahc.proxy()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Automatic detection record type and configuration of proxy [nodata]") + "</span>",
"ahc.content()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Save contents of GET and POST queries") + "</span>",
"ahc.status()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Save status of GET and POST queries") + "</span>",
"ahc.reset()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Http-client settings reset [nodata]") + "</span>",
"ahc.url()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Get current URL for http-client") + "</span>",
"ahc.header(header_name, header)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Set header (beta) [nodata]") + "</span>",
"ahc.getheader(header_name)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Get one of current headers (beta) [nodata]") + "</span>",
"ahc.cleanheaders()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] All headers reset [nodata]") + "</span>",
"ahc.savecookies()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Save all cookies of http-client") + "</span>",
"ahc.changecookies(changing_cookies)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Change json-array of http-client cookies [nodata]") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal">
      <div class="tr tooltip-paragraph-first-fold">Annotation!</div>
	  <div class="tr tooltip-paragraph-fold">Unfortunately, BAS call stack do not support asynchronous functions calling from third-party code.</div>
	  <div class="tr tooltip-paragraph-fold">That means it's not possible yet to write a function for get and post http-client requests processing.</div>
	  <div class="tr tooltip-paragraph-fold">But you can insert a http-client API into your code. This api not work into blocks if-else, if, for and other cycles.</div>
	  <div class="tr tooltip-paragraph-fold">Use this example for a get request:</div>
	  <div class="tr tooltip-paragraph-fold">var url = 'http://example.com'</div>
	  <div class="tr tooltip-paragraph-fold">_switch_http_client_main()</div>
	  <div class="tr tooltip-paragraph-fold">http_client_get2(url,{method:("GET"),headers:("")})!</div>
	  <div class="tr tooltip-paragraph-fold">For post requests your can use the following construction:</div>
	  <div class="tr tooltip-paragraph-fold">_switch_http_client_main()</div>
      <div class="tooltip-paragraph-last-fold">http_client_post(url, ["data", "Post Data"], {"content-type":"custom/" + ("application/x-www-form-urlencoded"), "encoding":("UTF-8"), "method":("POST"),headers:("Headers")})!</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>