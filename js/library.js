$().ready(()=>{
	
	getBook();
	getIntroduce();
	getStudentInfo();
	
});
function returnHome(){
	window.location.href='index.html';
}
function getIntroduce(){

	$.get('/all_news',(news)=>{
		var student = sessionStorage.getItem("user");
		var y=JSON.parse(student);
	
		var bookList=[];
		for(var i=0;i<news.length;i++){
			
			console.log(news[i].major);
			if(news[i].major==y.major){
				if(bookList.length<7){
					bookList.push(news[i]);
				}
			
				
			}
		}
		console.log(bookList);
		for(var i=0;i<bookList.length;i++){
				var book=JSON.stringify(bookList[i]); 
				sessionStorage.setItem(`book${i}`, book);
			
				$(`#foot_${i+1}`).html('');
				var  div1=$('<div class="book"></div>');
		
			
				div1.append(`<img src="${bookList[i].url}" style="width:100%;height:100%;">`)
			
			
				$(`#foot_${i+1}`).append(div1);
		}
	});

	
}
function getBOOk0(){
	var y = sessionStorage.getItem("book0");
	sessionStorage.setItem('1', y);
	window.location.href='book1.html';
}
function getBOOk1(){
	var y = sessionStorage.getItem("book1");
	sessionStorage.setItem('1', y);
	window.location.href='book1.html';
}
function getBOOk2(){
	var y = sessionStorage.getItem("book2");
	sessionStorage.setItem('1', y);
	window.location.href='book1.html';
}
function getBOOk3(){
	var y = sessionStorage.getItem("book3");
	sessionStorage.setItem('1', y);
	window.location.href='book1.html';
}
function getBOOk4(){
	var y = sessionStorage.getItem("book4");
	sessionStorage.setItem('1', y);
	window.location.href='book1.html';
	
}
function getBOOk5(){
	var y = sessionStorage.getItem("book5");
	sessionStorage.setItem('1', y);
	window.location.href='book1.html';
}
function getStudentInfo(){
	$('#studentName').html('');
	$('#studentAll').html('');
	$('#studentNow').html('');
	$('#studentReturn').html('');
	$('#studentMajor').html('');
	$('#sign').html('');
	var student = sessionStorage.getItem("user");
	var y=JSON.parse(student);
	$('#studentName').html(`${y.name}`);
	$('#studentAll').html(`${y.book_all}`);
	$('#studentNow').html(`${y.book_now}`);
	$('#studentReturn').html(`${y.book_return}`);
	$('#studentMajor').html(`${y.major}`);
	$('#sign').html(`${y.sign}`);
}
function xxx(){
	layer.alert('确定预借这本图书么', {
    skin: 'layui-layer-molv' //样式类名  自定义样式
    ,closeBtn: 1    // 是否显示关闭按钮 
    ,anim: 1 //动画类型
    ,btn: ['确定','不了'] //按钮
    ,icon: 6    // icon
	,offset: '100px'
    ,yes:function(){
        layer.msg('按钮1')
		console.log(2);
    }
    ,btn2:function(){
        layer.msg('按钮2')
    }});
}   //显示出是否借书的提示

function getBook(){
	$.get('/all_news',(news)=>{   //news是全部数据库中的数据
		
		for(var i=0;i<news.length;i++){
			var max=news[i];
			for(var j=i+1;j<news.length;j++){
				if(news[i].number1<news[j].number1){
					
					max=news[j];
					news[j]=news[i];
					news[i]=max;
				}
			}  
		}          //对数据进行排序操作，按照被借数量的大小，并放到数组news中
		console.log(news);
		$('#book_list').html('');
		for(var i=0;i<8;i++){
			var tr=$('<tr></tr>');
			var td_1=$('<td></td>');
			var td_2=$('<td class="news_li"></td>');
			var td_3=$('<td></td>');
			var td_4=$('<td></td>');
			td_1.html(`${i+1}`);
			td_2.html(`${news[i].name}`);
			td_3.html(`${news[i].number}`);
			td_4.html(`<div class="bianJi_2" id="selecttor_${i+1}" onclick=xxx();>	预订</div>`)
			tr.append(td_1);
			tr.append(td_2);
			tr.append(td_3);
			tr.append(td_4);
			$('#book_list').append(tr);
			
		}
	});   //将news数组中的数据展示在网页上
	

}