<script type="text/javascript">

    function getView() {

        $.ajax({

            url: 'https://app.vacancy-filler.co.uk/VFMVC/CareerPage/GetMapData',
            data: {
                id: "Zhm3zW6i7Ay-ZgFhht0I4jvV8f_YvOp7",
                mask: "11111111111111111111",
            },

            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            success: function (data) {
                {

                    var row = "";
                    $.each(data, function (index, item) {
                        row += "<div><div>" + item.AdvertReference + "</div>" +
                               "<div>" + item.JobTitle + "</div>" +
                               "<div>" + item.Location + "</div>" +
                               "<div>" + item.Industry + "</div>" +
                               "<div>" + item.JobType + "</div>" +
                               "<div>" + item.JobTypeTime + "</div>" +
                               "<div>" + item.SalaryFrom + "</div>" +
                               "<div>" + item.SalaryTo + "</div>" +
                               "<div>" + item.SalaryPeriod + "</div>" +
                               "<div>" + item.ExpiryDate + "</div>" +
                               "<div>" + item.PostingType + "</div>" +
                               "<div>" + item.Latitude + "</div>" +
                               "<div>" + item.Longitude + "</div>" +
                               "<div>" + item.Summary + "</div>" +
                               "<div>" + item.Description + "</div>" +
                               "<div>" + item.Benefits + "</div>" +
                               "<div>" + item.Link + "</div>" +
                               "</div>";
                    });
                }

                $("#divResult").html(row);
            }
        });
    }

    $.getJSON("https://app.vacancy-filler.co.uk/VFMVC/CareerPage/GetMapData?id=ALFKI&callback=?", function (data) {
        alert(data);
    })

    $(document).ready(function () {
        getView();
    }
    )

</script>

<div id='divResult'>

</div>
