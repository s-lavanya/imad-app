var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = { 
    `articleOne: {
        title: 'Article one | Lavanya sanagavarapu',
        heading: 'Article one',
        date: 'feb 14, 2018',
        content: ` 
                    <p>
                        This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. 
                    </p>                                                                                                            
                     <p>
                        This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. 
                    </p>
                    
                     <p>
                        This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle.
                    </p>
                     <p>
                        This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. This is the actual content of my first atricle. 
                    </p> `
    },
    `articleTwo: {
        title: 'Article two | Lavanya sanagavarapu',
    heading: 'Article two',
    date: 'feb 14, 2018',
    content: `<p>
                    This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.
                </p>
                 <p>
                    This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.
                </p>
                 <p>
                    This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.
                </p>
                 <p>
                    This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.This is the actual content of my second atricle.
                </p>`
    },
    `articleThree: {
        title: 'Article Three | Lavanya sanagavarapu',
        heading: 'Article Three',
        date: 'feb 14, 2018',
        content: `<p> 
                    This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.
                     </p>
                     <p>
                        This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.
                     </p>
                     <p>
                        This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle. 
                    </p>
                    <p>
                        This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.This is the actual content of my third atricle.
                     </p>`
                  
    },
};

function createTemplate(data) {
       var title = data.title;
       var date = data.date;
       var heading = data.heading;
       var content = data.content;
        var htmlTemplate = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>
                   ${title}
                </title>
                <meta name="viewport" content="width=device-width initial-scale=0"/>
                
                <link href="/ui/style.css" rel="stylesheet"/>
                
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                       ${heading}
                    </h3>
                    <div>
                       ${date}
                    </div>
                    <div>
                        ${content}
                        
                    </div>
                </div>
            </body>
        </html>
        `;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
