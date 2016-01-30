window.onload = function(){
	var snake = [{x:0,y:0},{x:0,y:1},{x:0,y:2}];
	var LEFT =37, RIGHT = 39, UP = 38, DOWN = 40;
	var dd = RIGHT;
	var dict = {};
	var isInSnake = function(x,y){
		for(var i =0;i<snake.length;i++){
			if(snake[i].x == x && snake[i].y ==y){return true;}
		}
		return false;
	};
	var dropFood = function(){
		var x = Math.floor(Math.random()*10),
	    y = Math.floor(Math.random()*10);
	    if(snake.length ==100){
	    	alert('你超神了...');
	    	return;
	    }
	    while(isInSnake(x,y)){
		   	x = Math.floor(Math.random()*10),
	    	y = Math.floor(Math.random()*10);	
		   }
		   document.getElementById( x+'_'+y).style.background = 'url(./images/u=3064783314,3400690960&fm=21&gp=0.jpg)';
		   document.getElementById( x+'_'+y).style.backgroundSize='cover';
		   return {foodx:x,foody:y};
	};
	var food = dropFood();
	var drawSnake = function(){
		for(i=0;i<snake.length;i++){
			document.getElementById(snake[i].x+'_'+snake[i].y).style.background = 'url(./images/2786001_154238093000_2.jpg)';
			document.getElementById(snake[i].x+'_'+snake[i].y).style.backgroundSize = 'cover';
		}

	}
	drawSnake();

	zou = function(){
		var newHead;
		var last = snake.length-1;
		
		if(dd ==RIGHT)
		{
			newHead = {x:snake[last].x,y:snake[last].y+1};
		}
		if(dd ==LEFT)
		{
			newHead = {x:snake[last].x,y:snake[last].y-1};
		}
		if(dd ==UP)
		{
			newHead = {x:snake[last].x-1,y:snake[last].y};
		}
		if(dd ==DOWN)
		{
			newHead = {x:snake[last].x+1,y:snake[last].y};
		}
		if(newHead.x>9 ||newHead.x<0 ||newHead.y>9 ||newHead.y<0){
			alert('game over');
			clearInterval(t);
			// window.location.reload();
			return null;
		}
		if(isInSnake(newHead.x,newHead.y)){
			alert('game over');
			clearInterval(t);
			return null;
		}
		if(newHead.x == food.foodx && newHead.y == food.foody){
			snake.push(newHead);
			var tmp = document.getElementById(food.foodx+'_'+food.foody);
			tmp.style.background= 'url(./images/2786001_154238093000_2.jpg)';
			tmp.style.backgroundSize= 'cover';
			food = dropFood();
			return null;
		}
		var weiba = snake.shift();
		snake.push(newHead);
		document.getElementById(weiba.x+'_'+weiba.y).style.background='';
		document.getElementById(newHead.x+'_'+newHead.y).style.background='url(./images/2786001_154238093000_2.jpg)';
		document.getElementById(newHead.x+'_'+newHead.y).style.backgroundSize='cover';
		return null;
	}
	
	

	
	document.onkeydown = function(e){
		var d = e.keyCode 
		if(d ==LEFT || d==UP||d==RIGHT||d==DOWN){
			if(Math.abs(d-dd) !== 2){
			dd = d;
			zou();
			

			}
		}
	}
	var t = setInterval(zou,500);



	// var weizhi = {x:'',y:''};
	// var dianming  =function(){
	
	// var x = Math.floor(Math.random()*5);
	// var y = Math.floor(Math.random()*10);
	// if(x!=2||y!=0){
	// 	weizhi.x=x;
	// 	weizhi.y=y;
	// 	return weizhi;
	// }
	// else{
	// 	return dianming();
	// }
	// }
	// console.log(dianming(weizhi));



	// var arr  = [{x:0,y:0},{x:0,y:1},{x:0,y:2}];
	// var fn = function(){
	// 	arr.shift();
	// 	var c = {};
	// 	c.x= arr[arr.length-1].x;
	// 	c.y = arr[arr.length-1].y+1;
	// 	arr.push(c);	
	// };
	// fn();
	// console.log(arr);


	//清除setInterval;
	// var t = setInterval(aa,1000);
	// clearInterval(t);



	// var kaiguan = true;
	// document.onclick =function(){
	// 	if(kaiguan){
	// 		alert(1);kaiguan = false;
	// 	}else{
	// 		alert(2);kaiguan = true;
	// 	}
	// }





}
