function postToGoogle() {
                var name = $("input#name").val();
                var address = $("input#address").val();

                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSdw1EYqFGTGlKL3_gl-tdoJxMwG1ZKKfPhK71lAblz03P9WJg/formResponse",
                    data: {"entry.497284830": name, "entry.515450313": address},
                    type: "POST",
                    dataType: "xml",
                    statusCode: {
                        0: function() {
                            console.log('Oh, shit');
                        },
                        200: function() {
                            console.log('Whoa');
                        }
                    }
                });
            };
