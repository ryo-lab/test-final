$(document).ready(function(){
    
    
    let num = [];
    let index = 0;

    setTable(num);
    
    $("#inputDate").change(function(){
        let inputDate = $(this).val();
        // console.log(inputDate);
        let splitText = inputDate.split("-");
        // console.log(splitText);
        setMonthAndDay(splitText[1], splitText[2]);

        setTable(num);
    });

    

    $("#caseNumber").change(function(){
        if($(this).val() > topicsArray.length && $(this).val() < 1){//handle exception(if input is bigger than size)
            return;
        }
        num[index] = $(this).val() - '0';
        index++;
        if(index > topicsArray.length){
            alert("all shedule canceled!!");
        }
        
        num.sort(function(a, b){
            return a - b
        });

        console.log(num);
        
        setTable(num);
    })

    function setTable(n) {
        
        
        $("#courseTable").empty();

        $("#courseTable").append(
            "<tr><th>項目</th> <th>販賣日期</th> <th>遊戲名稱</th></tr>"
        );
    
        let topicCount = topicsArray.length;
        let oneDayMilliseconds = 24*60*60*1000;
        let canceled = 0;
        
        

        for(let x = 0; x < topicCount; x++){
            let thisDate = new Date(startDate.getTime() + 7*x*oneDayMilliseconds);
            canceled = 0;

            for(let i = 0; i < n.length; i++){
                if(x == n[i] - 1){
                
                    $("#courseTable").append(
                        "<tr>"+
                        "<td>" + (x + 1).toString().fontcolor("red") + "</td>"+
                        "<td>" + thisDate.toLocaleDateString().slice(5).fontcolor("red") + "</td>" +
                        "<td>" + topicsArray[x].fontcolor("red") + "</td>" +
                        "</tr>"
                    );
                    canceled = 1;
                    if(x == 5){
                        return;
                    }
                    x++;
                    thisDate = new Date(startDate.getTime() + 7*x*oneDayMilliseconds);
                }
                
            }

            $("#courseTable").append(
                "<tr>"+
                "<td>" + (x + 1) + "</td>"+
                "<td>" + thisDate.toLocaleDateString().slice(5) + "</td>" +
                "<td>" + topicsArray[x] + "</td>" +
                "</tr>"
            );
        }
    }
        

});