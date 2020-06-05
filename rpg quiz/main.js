$(document).ready(function(){
    let currentQuiz = null;
    let sum = 0;
    $("#startButton").click(function(){
        // console.log("ok");
        if(currentQuiz==null){
            //顯示第一個題目
            currentQuiz=0;
            $("#question").text(questions[0].question);
            //之後要加上清空選項
            $("#options").empty();
            for(let x=0;x<questions[0].answers.length;x++){
                $("#options").append(
                    "<input name='options' type='radio' value="+
                    x+">"+
                    "<label>"+questions[0].answers[x][0]+
                    "</label><br><br>"
                );
            }
            $("#startButton").attr("value","Next");

            // $("#startButton").click(function(){
            //     console.log($("input[name=options]:checked").value == 0);
                
            // });
            
            
                
        }
        else{
            //巡訪選項是否有被選取
            $.each(
                $(":radio"),function(i, val){
                    if(val.checked){
                        //是否下一個就已是最終成果(A~D)
                        if(currentQuiz >= questions.length - 1){
                            //最終成果
                            // let finalResult = questions[currentQuiz].answers[i][1];
                            // $("#question").text(finalAnswers[finalResult][0]);
                            // $("#options").empty();
                            // $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                            sum += questions[currentQuiz].answers[i][1];
                            $("#question").text("Your score is ...");
                            $("#options").empty();
                            $("#options").text((sum) + " / 10");
                            currentQuiz=null;
                            $("#startButton").attr("value","Restart");
                        }
                        else{
                            //還在作答
                            
                            // currentQuiz = questions[currentQuiz].answers[i][1]-1;
                            sum += questions[currentQuiz].answers[i][1];
                            
                            
                            currentQuiz++;
                            
                            if(currentQuiz < questions.length){
                                $("#question").text(questions[currentQuiz].question);
                                $("#options").empty();
                                for(let x=0;x<questions[currentQuiz].answers.length;x++){
                                    $("#options").append(
                                        "<input name='options' type='radio' value="+
                                        x+">"+
                                        "<label>"+questions[currentQuiz].answers[x][0]+
                                        "</label><br><br>"
                                    );
                                }
                            }
                            console.log(currentQuiz, sum);
                            
                        }
                        return false;
                    }
                }
            );
 
        }
    });
 
});
