/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {
    $(".third").hide();
    $(".second").hide();
    $(".continue_button").hide();
    $("#end").hide();
    $("#restart").hide();
    setInterval(function () {
        $("#info").fadeOut(1000, function () {
            $(this).html("BY <br><br> Mustafa Çöl <br><br> 21602625");
        }).fadeIn(1000).fadeOut(1000, function () {
            $(this).html("<br><br>Have fun :))");
        }).fadeIn(1000).fadeOut(1000, function () {
            $(this).html("CTIS 255 - Web Technologies<br><br>Project<br><br>Fall 2018");
        }).fadeIn(1000);
    });

    $(".start_btn").click(function () {
        $(".first").fadeOut(0);
        $(".second").fadeIn(1000);
    });

    $(".imgs").each(function () {


        $(this).click(function () {
            $(".imgs").css("box-shadow", "none");
            $(this).css("box-shadow", "1px 6px 3px #999");
            $(".continue_button").fadeIn(1000);
        });

    });

    $(".imgs:eq(0)").click(function () {
        $(".picture div").css("background-image", "url(img/boston.jpg)");
        $(".a0").css("background-image","none");
    });
    $(".imgs:eq(1)").click(function () {
        $(".picture div").css("background-image", "url(img/sas.jpg)");
        $(".a0").css("background-image","none");
    });
    $(".imgs:eq(2)").click(function () {
        $(".picture div").css("background-image", "url(img/toronto.jpg)");
        $(".a0").css("background-image","none");
    });

    $(".continue_button").click(function () {
        $(".second").fadeOut(0);
        $(".third").fadeIn(1000);
        $(".picture").fadeIn(0);

    });
    
    
    function check(){
        
        
        if( ($(".picture").children("div:nth-child(1)").css('left')===0 +'px' && $(".picture").children("div:nth-child(1)").css('top')===0 +'px') &&
             ($(".picture").children("div:nth-child(2)").css('left')===150 +'px' && $(".picture").children("div:nth-child(2)").css('top')===0 +'px') &&
             ($(".picture").children("div:nth-child(4)").css('left')===0 +'px' && $(".picture").children("div:nth-child(4)").css('top')===150 +'px') &&
             ($(".picture").children("div:nth-child(6)").css('left')===300 +'px' && $(".picture").children("div:nth-child(6)").css('top')===150 +'px') &&
             ($(".picture").children("div:nth-child(8)").css('left')===150 +'px' && $(".picture").children("div:nth-child(8)").css('top')===300 +'px') ){
         
         return true;
        }
            
        else
            return false;
         
        
    }
    
    var boxSize=145;
    $(".picture div").click(function(){
        
        tile_x=$(this).css('left');
        tile_y=$(this).css('top');
        empty_x=$(".picture").children("div:nth-child(1)").css('left');
        empty_y=$(".picture").children("div:nth-child(1)").css('top');
        
        
            
        
        if (empty_x === tile_x && tile_y === (parseInt(empty_y) - boxSize - 5) + 'px')
        {
            $(this).animate({left: empty_x, top:empty_y},500,function(){
            $(".picture").children("div:nth-child(1)").css('left',tile_x);
            $(".picture").children("div:nth-child(1)").css('top',tile_y);
            $(".picture").children("div:nth-child(1)").css('background-image','none');
            if(check())
            {
                $(".picture").css("opacity", "0.5");
                $(".shuffle").hide();
                $("#end").fadeIn(1000);
                $("#restart").fadeIn(1000);
                
            }
            
        });
        }
        else if (empty_x === tile_x && tile_y === (parseInt(empty_y) + boxSize + 5) + 'px')
        {
            $(this).animate({left: empty_x, top:empty_y},500,function(){
            $(".picture").children("div:nth-child(1)").css('left',tile_x);
            $(".picture").children("div:nth-child(1)").css('top',tile_y);
            $(".picture").children("div:nth-child(1)").css('background-image','none');
            if(check())
            {
               $(".picture").css("opacity", "0.5");
               $(".shuffle").hide();
                $("#end").fadeIn(1000);
                $("#restart").fadeIn(1000);
            }

            
        });
        }
        else if ((parseInt(empty_x) - boxSize - 5) + 'px' === tile_x && tile_y === empty_y)
        {
            $(this).animate({left: empty_x, top:empty_y},500,function(){
            $(".picture").children("div:nth-child(1)").css('left',tile_x);
            $(".picture").children("div:nth-child(1)").css('top',tile_y);
            $(".picture").children("div:nth-child(1)").css('background-image','none');
            if(check())
            {
                $(".picture").css("opacity", "0.5");
                $(".shuffle").hide();
                $("#end").fadeIn(1000);
                $("#restart").fadeIn(1000);
            }

            
        });
        }
          
        else if ((parseInt(empty_x) + boxSize + 5) + 'px' === tile_x && tile_y === empty_y)
        {
            $(this).animate({left: empty_x, top:empty_y},500,function(){
            $(".picture").children("div:nth-child(1)").css('left',tile_x);
            $(".picture").children("div:nth-child(1)").css('top',tile_y);
            $(".picture").children("div:nth-child(1)").css('background-image','none');
            
                if(check())
            {
                $(".picture").css("opacity", "0.5");
                $(".shuffle").hide();
                $("#end").fadeIn(1000);
                $("#restart").fadeIn(1000);
            }
            
            });
        }
        
            
       
        
    })
    
    $(".shuffle_button").click(function (){
        var amount=$(".amount").children("option:selected").text();
        console.log(amount);
        if(parseInt(amount)===3){
              console.log(amount);
            $(".picture").children("div:nth-child(1)").animate({left:150,top:0},500);
            $(".picture").children("div:nth-child(2)").animate({left:0,top:0},500).delay(200);       
            $(".picture").children("div:nth-child(1)").animate({left:150,top:150},500);
            $(".picture").children("div:nth-child(5)").animate({left:150,top:0},500).delay(400);
            $(".picture").children("div:nth-child(1)").animate({left:300,top:150},500);
            $(".picture").children("div:nth-child(6)").animate({left:150,top:150},500);
            
        }
        if(parseInt(amount)===5){
            $(".picture").children("div:nth-child(1)").animate({left:150,top:0},500);
            $(".picture").children("div:nth-child(2)").animate({left:0,top:0},500).delay(500);       
            $(".picture").children("div:nth-child(1)").animate({left:150,top:150},500);
            $(".picture").children("div:nth-child(5)").animate({left:150,top:0},500).delay(500);
            $(".picture").children("div:nth-child(1)").animate({left:300,top:150},500);
            $(".picture").children("div:nth-child(6)").animate({left:150,top:150},500).delay(500);
            $(".picture").children("div:nth-child(1)").animate({left:300,top:300},500);
            $(".picture").children("div:nth-child(9)").animate({left:300,top:150},500).delay(500);
            $(".picture").children("div:nth-child(1)").animate({left:150,top:300},500);
            $(".picture").children("div:nth-child(8)").animate({left:300,top:300},500).delay(500);
            
        }
        
        if(parseInt(amount)===7){
            $(".picture").children("div:nth-child(1)").animate({left:150,top:0},500);
            $(".picture").children("div:nth-child(2)").animate({left:0,top:0},500).delay(500);       
            $(".picture").children("div:nth-child(1)").animate({left:150,top:150},500);
            $(".picture").children("div:nth-child(5)").animate({left:150,top:0},500).delay(500);
            $(".picture").children("div:nth-child(1)").animate({left:300,top:150},500);
            $(".picture").children("div:nth-child(6)").animate({left:150,top:150},500).delay(500);
            $(".picture").children("div:nth-child(1)").animate({left:300,top:300},500);
            $(".picture").children("div:nth-child(9)").animate({left:300,top:150},500).delay(500);
            $(".picture").children("div:nth-child(1)").animate({left:150,top:300},500);
            $(".picture").children("div:nth-child(8)").animate({left:300,top:300},500).delay(500);
            $(".picture").children("div:nth-child(1)").animate({left:0,top:300},500)
            $(".picture").children("div:nth-child(7)").animate({left:150,top:300},500).delay(500);
            $(".picture").children("div:nth-child(1)").animate({left:0,top:150},500);
            $(".picture").children("div:nth-child(4)").animate({left:0,top:300},500).delay(500);
            
            
        }
        if(parseInt(amount)===9)
        {
            $(".picture").children("div:nth-child(1)").animate({left:150,top:0},500).delay(500);
            $(".picture").children("div:nth-child(2)").animate({left:0,top:0},500);       
            $(".picture").children("div:nth-child(1)").animate({left:150,top:150},500).delay(500);
            $(".picture").children("div:nth-child(5)").animate({left:150,top:0},500);
            $(".picture").children("div:nth-child(1)").animate({left:300,top:150},500).delay(500);
            $(".picture").children("div:nth-child(6)").animate({left:150,top:150},500);
            $(".picture").children("div:nth-child(1)").animate({left:300,top:300},500).delay(500);
            $(".picture").children("div:nth-child(9)").animate({left:300,top:150},500);
            $(".picture").children("div:nth-child(1)").animate({left:150,top:300},500).delay(500);
            $(".picture").children("div:nth-child(8)").animate({left:300,top:300},500);
            $(".picture").children("div:nth-child(1)").animate({left:0,top:300},500).delay(500);
            $(".picture").children("div:nth-child(7)").animate({left:150,top:300},500);
            $(".picture").children("div:nth-child(1)").animate({left:0,top:150},500).delay(500);
            $(".picture").children("div:nth-child(4)").animate({left:0,top:300},500);
            $(".picture").children("div:nth-child(1)").animate({left:0,top:0},500).delay(500);
            $(".picture").children("div:nth-child(2)").animate({left:0,top:150},500);
            $(".picture").children("div:nth-child(1)").animate({left:150,top:0},500).delay(500);
            $(".picture").children("div:nth-child(5)").animate({left:0,top:0},500);
        }
          
            

        
        
    });
    
    
 

    
    
















});


