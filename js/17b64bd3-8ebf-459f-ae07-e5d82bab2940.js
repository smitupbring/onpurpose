/**handles:wpml-cookie**/
jQuery(function(){jQuery.each(wpml_cookies,function(e,o){document.cookie=e+"="+o.value+";expires="+o.expires+"; path="+o.path})});