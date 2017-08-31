/* place this code in your custom js */

/*  ============================================================================================
    ********************************************************************************************
        LIBRARY ALERT
    ********************************************************************************************
*/

var ustlibraryalert = ""; // place your message in this string. if it is empty ("") no message or box will display

if (ustlibraryalert !== "") {
	setTimeout(function() {
		var x = document.getElementsByClassName("topbar-wrapper");

		if ( x.length > 0) {
			var div = document.createElement("DIV");
			div.className += 'ust-library-alert ';
			div.className += 'advisory'; // help/informational(blue) normal/success(green) advisory/warning(yellow) critical/error(red)
			var innerdiv = document.createElement("DIV");
			innerdiv.innerHTML = ustlibraryalert;
			div.appendChild(innerdiv);
			x[0].appendChild(div);
		}
	}, 8000);
}