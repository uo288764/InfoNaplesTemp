/**
 * 
 */

function loadXMLDoc(filename) {
    let xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();
    return xhttp.responseXML;
}

function displaySites() {
    const xml = loadXMLDoc("xml/sites.xml");
    const xsl = loadXMLDoc("xml/transform.xsl");

    // Code for XSLT transformation
    if (window.XSLTProcessor) {
        const xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        const resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("sitesTable").appendChild(resultDocument);
    }
}

window.onload = displaySites; // Call displaySites when the page loads to add the xml info to the fable

function updateInformation() {

    const site = document.getElementById('site').value; 
    const image = document.getElementById('site-image'); 
    const price = document.getElementById('site-price'); 

    const siteName = document.getElementById('site-name');
    const siteMap = document.getElementById('site-map');
    const siteSchedule = document.getElementById('site-schedule');

    const imageFileName = `multimedia/images/sites${site.charAt(0).toUpperCase() + site.slice(1)}.jpg`;

    if (site === 'duomo') {
        image.src = imageFileName; // 'multimedia/images/sitesDuomo.jpg'
        siteName.innerText = 'Duomo San Gennaro';
		image.alt = 'Image of the Duomo San Gennaro';
        price.innerText = 'Price: Free!';
        siteMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.880520733056!2d14.256745575161442!3d40.85254692900089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b086a71dc7939%3A0x8bad90ad52187adc!2sCatedral%20de%20N%C3%A1poles!5e0!3m2!1ses!2sit!4v1732538513268!5m2!1ses!2sit";
        siteSchedule.innerText = 'Opening Hours: 8:00 AM - 7:00 PM';
    } else if (site === 'plebiscito') {
        image.src = imageFileName; // 'multimedia/images/sitesPlebiscito.jpg'
		image.alt = 'Image of the Piazza del Plebiscito';
        siteName.innerText = 'Piazza del Plebiscito';
        price.innerText = 'Price: Free!';
		siteMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6037.283716219859!2d14.246008175160496!3d40.83582963002697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b085255ec54b9%3A0x8ad9122a45803c14!2sPlaza%20del%20Plebiscito!5e0!3m2!1ses!2sit!4v1732539037929!5m2!1ses!2sit";
        siteSchedule.innerText = 'Opening Hours: 24/7';
    } else if (site === 'castel') {
        image.src = imageFileName; // 'multimedia/images/sitesCastel.jpg'
		image.alt = 'Image of the Castel dell\'Ovo';
        siteName.innerText = 'Castel dell\'Ovo';
        price.innerText = 'Price: Free!';
		siteMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6037.967578949409!2d14.245029475160106!3d40.828319730487785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09ac26357211%3A0x970c840bd5800ad!2sCastillo%20del%20Huevo!5e0!3m2!1ses!2sit!4v1732540023502!5m2!1ses!2sit";
        siteSchedule.innerText = 'Opening Hours: 9:00 AM - 5:00 PM';
    } else if (site === 'vesuvius') {
        image.src = imageFileName; // 'multimedia/images/sitesVesuvius.jpg'
		image.alt = 'Image of the Vesuvius Volcano';
        siteName.innerText = 'Vesuvius Volcano';
        price.innerText = 'Price: 12€ per person';
		siteMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24154.021474741705!2d14.408306166967252!3d40.822413144252046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ba508f1413feb%3A0x9cbfa7aa9376793d!2sMonte%20Vesubio!5e0!3m2!1ses!2sit!4v1732541140506!5m2!1ses!2sit";
		siteSchedule.innerText = 'Opening Hours: 8:00 AM - 4:00 PM';
    } else if (site === 'museum') {
        image.src = imageFileName; // 'multimedia/images/sitesMuseum.jpg'
		image.alt = 'Image of the National Archaeological Museum';
        siteName.innerText = 'National Archaeological Museum';
        price.innerText = 'Price: 15€ per person';
		siteMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6035.664876187237!2d14.24795047516155!3d40.85360252893606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0867e2c94023%3A0xb48ecf1589057c98!2sMuseo%20Arqueol%C3%B3gico%20de%20N%C3%A1poles!5e0!3m2!1ses!2sit!4v1732542167335!5m2!1ses!2sit" ;
		siteSchedule.innerText = 'Opening Hours: 9:00 AM - 8:00 PM';
    } else if (site === 'palazzo') {
        image.src = imageFileName; // 'multimedia/images/sitesPalazzo.jpg'
		image.alt = 'Image of the Palazzo Reale di Napoli';
        siteName.innerText = 'Palazzo Reale di Napoli';
        price.innerText = 'Price: 10€ per person';
		siteMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.6233711485443!2d14.246827775160513!3d40.836235630002164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b08525b44e79f%3A0x3f8bbbcb0c24edc9!2sPalacio%20Real%20de%20N%C3%A1poles!5e0!3m2!1ses!2sit!4v1732542232958!5m2!1ses!2sit" ;
		siteSchedule.innerText = 'Opening Hours: 9:00 AM - 7:00 PM';
    } else if (site === 'spaccanapoli') {
        image.src = imageFileName; // 'multimedia/images/sitesSpaccanapoli.jpg'
		image.alt = 'Image of the Spaccanapoli';
        siteName.innerText = 'Spaccanapoli';
        price.innerText = 'Price: Free!';
		siteMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24148.974340683544!2d14.228803066842085!3d40.83627029733959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09000b5cdf81%3A0x3b6e4b3a071b9a00!2sInizio%20Spaccanapoli!5e0!3m2!1ses!2sit!4v1732542288922!5m2!1ses!2sit";
		siteSchedule.innerText = 'Opening Hours: 24/7';
    } else if (site === 'quartieri') {
        image.src = imageFileName; // 'multimedia/images/sitesQuartieriSpagnoli.jpg'
		image.alt = 'Image of the Quartieri Spagnoli';
        siteName.innerText = 'Quartieri Spagnoli';
        price.innerText = 'Price: Free!';
        siteMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12073.536245408155!2d14.227310726921043!3d40.841490913226096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0851253d233f%3A0x212d88ce8669297!2sQuartieri%20Spagnoli%2C%20N%C3%A1poles!5e0!3m2!1ses!2sit!4v1732542335694!5m2!1ses!2sit";
		siteSchedule.innerText = 'Opening Hours: 24/7';
    } else {
        // Default case
		image.src = imageFileName; // 'multimedia/images/sitesDuomo.jpg'
		siteName.innerText = 'Duomo San Gennaro';
		image.alt = 'Image of the Duomo San Gennaro';
        price.innerText = 'Price: Free!';
        siteMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.880520733056!2d14.256745575161442!3d40.85254692900089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b086a71dc7939%3A0x8bad90ad52187adc!2sCatedral%20de%20N%C3%A1poles!5e0!3m2!1ses!2sit!4v1732538513268!5m2!1ses!2sit";
        siteSchedule.innerText = 'Opening Hours: 8:00 AM - 7:00 PM';
    
    }
}

window.onload = displaySites;