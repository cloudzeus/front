//Global Variable Declaration
var base64Img = null;
margins = {
  top: 70,
  bottom: 40,
  left: 30,
  width: 550
};


generate = function()
{
  var pdf = new jsPDF('p', 'pt', 'a4');
  pdf.setFontSize(18);
  pdf.fromHTML(document.querySelector('.html-2-pdfwrapper'),
    margins.left, // x coord
    margins.top,
    {
      // y coord
      width: margins.width// max width of content on PDF
    },function(dispose) {
      headerFooterFormatting(pdf)
    },
    margins);

  var iframe = document.createElement('iframe');
  iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:650px; padding:20px;');
  //document.body.appendChild(iframe);

  //iframe.src = pdf.output('datauristring');
  const filename = "voucher-" + JSON.parse(localStorage.transactionDetails).id + '.pdf';
  pdf.save(filename)
};

//Footer and header formating function
function headerFooterFormatting(doc)
{
    var totalPages  = doc.internal.getNumberOfPages();

    for(var i = totalPages; i >= 1; i--)
    { //make this page, the current page we are currently working on.
        doc.setPage(i);

        header(doc);

        //footer(doc, i, totalPages);

    }
};


//Header function
function header(doc)
{
    doc.setFontSize(30);
    doc.setTextColor(40);
    doc.setFontStyle('normal');

    if (base64Img) {
       doc.addImage(base64Img, 'JPEG', margins.left, 10, 40,40);
    }

    doc.text("Breeze Car rentals", margins.left + 50, 40 );

    doc.line(3, 70, margins.width + 43,70); // horizontal line
};


//Load the image and convert it to base two
imgToBase64('octocat.jpg', function(base64) {
    base64Img = base64;
});



// You could either use a function similar to this or preconvert an image with, for example, http://dopiaza.org/tools/datauri
// http://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript
function imgToBase64(url, callback, imgVariable) {

    if (!window.FileReade) {
        callback(null);
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
      imgVariable = reader.result.replace('text/xml', 'image/jpeg');
            callback(imgVariable);
        };
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.send();
};
