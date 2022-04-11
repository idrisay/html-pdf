var fs = require("fs");
var pdf = require("html-pdf");
var html = fs.readFileSync("./files/html/index.html", "utf8");

const config = {
  border: {
    top: "1in", // default is 0, units: mm, cm, in, px
    right: "0.5in",
    bottom: "0.5in",
    left: "0.5in",
  },
  paginationOffset: 1, // Override the initial pagination number
  //   header: {
  //     height: "25mm",
  //     contents: '<div style="text-align: center;">Author: Marc Bachmann</div>',
  //   },
  footer: {
    height: "28mm",
    contents: {
      //   first: "Cover page",
      //   2: "Second page", // Any page number is working. 1-based index
      default:
        '<div style="text-align:right; font-size:0.75rem"><span style="color: #444;">{{page}}</span>/<span>{{pages}}</span></div>', // fallback value
      //   last: "Last Page",
    },
  },
};

pdf.create(html, config).toFile("./files/pdf/result.pdf", function (err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
