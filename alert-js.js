/* place this code in your custom js */

	/* *******************************************************************
	 *   LIBRARY ALERT MESSAGE FOR PRIMO FUNCTION
	 */
	
	var libraryAlertMessage = function(alertMsg) {

		if (alertMsg !== "") {
			setTimeout(function() {
				var x = document.getElementsByClassName("topbar-wrapper");

				if ( x.length > 0) {

					var level = "red-critical-error";

					if ( typeof alertMsg.includes !== "undefined" ) { // .includes is not supported in older browsers

						if (alertMsg.includes("[blue]") ) { level = "blue-help-informational"; }
						else if (alertMsg.includes("[green]") ) { level = "green-success-normal"; }
						else if (alertMsg.includes("[yellow]") ) { level = "yellow-advisory-warning"; }
						// default is critical or error which is already set
					} else {
						console.log("INIT: Alert is default critical because browser does not support .includes()");
					}

					alertMsg = alertMsg.replace(/\[[a-z]*\]/ig, "");

					var div = document.createElement("DIV");
					div.className += 'library-alert-message ';
					div.className += level;
					var innerdiv = document.createElement("DIV");
					innerdiv.innerHTML = alertMsg;
					div.appendChild(innerdiv);
					x[0].appendChild(div);
				}
			}, 8000);
		} else {
			console.log("INIT: No current alerts");
		}
	};
	

	/* *******************************************************************
	 *  SET LIBRARY ALERT MESSAGE FOR PRIMO
	 *
	 *  INSTRUCTIONS:
	
		pre-pend alert level color in front of text. HTML ok
	
		libraryAlertMessage(""); // no alert to display

		libraryAlertMessage("[blue]Your help/informational message goes here");
		libraryAlertMessage("[green]Your normal/success message goes here");
		libraryAlertMessage("[yellow]Your advisory/warning message goes here <a href='somepage.html'>More info</a>");
		libraryAlertMessage("[red]Your critical/error message goes here");
		 
		Default is red/critical so pre-pending with [red] is not necessary.
	*/
 
	libraryAlertMessage("");
