# Library-Alert-Message-for-Primo
Displays a library alert message across Primo

## Installation

1. Add the JavaScript to your custom.js file
2. Add the CSS to your custom1.js file

## To Use/Set Alert:

As needed set line libraryAlertMessage(""); to your message. HTML is okay. The default color is Red (Critical/Error) but you can preceed the message with a different color:

    libraryAlertMessage(""); // no alert to display

    libraryAlertMessage("[blue]Your help/informational message goes here");
    libraryAlertMessage("[green]Your normal/success message goes here");
    libraryAlertMessage("[yellow]Your advisory/warning message goes here <a href='somepage.html'>More info</a>");
    libraryAlertMessage("[red]Your critical/error message goes here");
	
Default is red/critical so pre-pending with \[red\] is not necessary.
