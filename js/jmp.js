function jmpPurchase(title) {
    $.ajax({
        type: "POST",
        url: "http://store.penciledin.com/purchase",
        contentType : 'application/json',
        xhrFields: { withCredentials: true },
        data: JSON.stringify({
            "email":$("#email").val(),
            "productID":title,
            "location":window.location.href
        }),
        success: function(response) {
            window.location.href = response["link"];
        },
        error: function(response) {
            $("jmpErrorMessage").text(response["error"]);
            $("#jmpLightBox").show();
            $("#jmpErrorBox").show();
        }
    });
}

$( document ).ready(function() {

    var conversationID = getJMPParameter("JMP_ID")

    $.ajax({type: "GET",
            url: "http://store.penciledin.com/c/" + conversationID,
            xhrFields: { withCredentials: true },
            success: function(response){
                $("body").append("<div id='pouncepurchasebox' class='pouncelightbox' style='display:none'><ul></ul></div>");

                var title = $("<li></li>").text(response["title"]);
                var image = $("<li></li>").append($("<img>").attr("src",response["image"]));
                var description = $("<li></li>").text(response["description"]);
                var total = $("<li></li>").text(response["total"]);

                $("#pouncepurchasebox ul").append(title, description, total);

                if(response["status"] == "pending") {
                    var status = $("<li></li>").text(response["status"]);
                    $("#pouncepurchasebox ul").append(status);
                }
                else if(response["status"] == "success") {
                    var status = $("<li></li>").text(response["status"]);
                    var name = $("<li></li>").text(response["name"]);
                    var address1 = $("<li></li>").text(response["address1"]);
                    var address2 = $("<li></li>").text(response["address2"] || "");
                    var city = $("<li></li>").text(response["city"]);
                    var state = $("<li></li>").text(response["state"]);
                    var zip = $("<li></li>").text(response["zip"]);
                    $("#pouncepurchasebox ul").append(status, name, address1, address2, city, state, zip);
                }
                else {
                    var status = $("<li></li>").text(response["status"]);
                    var message = $("<li></li>").text(response["message"] || "");
                    $("#pouncepurchasebox ul").append(status, message);
                }
                $("#pounceproductbox").show();
            },
            error:function(error){console.log(error)}
           });
});

function getJMPParameter(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);

    if (!results || !results[2]) {
        return null;
    } else {
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
}
