jQuery(function(){
	
	var a = []; 							//전체 공지 배열 선언 2차원 글번호, 구분, 제목, 날짜
	var b = []; 							//쇼핑 공지 배열 선언 2차원 글번호, 구분, 제목, 날짜
	var c = []; 							//브랜드공지 배열 선언 2차원 글번호, 구분, 제목, 날짜
	var n = -1; 							//필터링 카운트 변수 쇼핑공지 n
	var m = -1; 							//필터링 카운트 변수 브랜드공지 m
	var txt = ''; 							//출력할 배열 내용 기억 변수
	var cnt = 0;    						//글번호 기억
	var imgName ='';   						//구분 이미지 기억
	
	var noticeBtNum = 0;					//필터링 변수 전체공지=0, 쇼핑공지=1, 브랜드공지=2
	var totRecord = 0;	 					//전체 레코드 개수 전체공지=200, 쇼핑공지=150, 브랜드공지=50
	var list = 5;  							//한 화면에 보여질 목록 개수 (묶음=그룹)
	var startRecord = 0;					//레코드 시작 - 1페이지에 시작 번호
	var endRecord = startRecord+list;  		//레코드 끝  - 1페이지에 끝 번호 미만     현재페이지 
		
  	var	totPage   =  0;						//전체페이지 전체:200/5=20페이지,  쇼핑:150/5=30페이지, 브랜드:50/5=10페이지
	var	group     =  1;						//그룹번호1  1~5:그룹1= /parseInt(1/5+0.9) 6~10:그룹2/ 6~10:그룹3/ 6~10:그룹4
	var	groupPage = 10;						//그룹(10개씩 묶음)단위
	var	frontPage =  0;						//그룹범위의  앞페이지0
	var rearPage  = frontPage+groupPage;	//그룹범위의  뒷페이지10
	var currentPage = 0;					//현재페이지  페이지에 표시할 addClass 사용 버튼 현재페이지 변수

	
	$.ajax({
		url:'data/notice.json',  			//json, xml, text, csv, html, (php, asp, jsp)
		/* type:'POST', */
		dataType:'JSON',
		success:function(data){
			
			$.each(data.공지사항, function(idx, obj){
				a[idx]=[];  				//2차원 배열 선언 idx = 0 ~ 199
				
				if( obj.구분 == '쇼핑' ){  		//구분이 쇼핑 = 쇼핑이미지
					imgName = "<img src='img/icon_notice1.gif' alt=''>";
				}
				else{  						//브랜드 이미지
					imgName = "<img src='img/icon_notice2.gif' alt=''>";
				}

				a[idx][0] = idx+1; 			
				a[idx][1] = imgName;    	
				a[idx][2] = obj.제목; 		
				a[idx][3] = obj.날짜; 		
				
				//필터링 쇼핑공지
				if( obj.구분=='쇼핑' ){
					n++;   				
					b[n]=[];  			
					
					b[n][0]=n+1;		
					b[n][1]=imgName;	
					b[n][2]=obj.제목;		
					b[n][3]=obj.날짜;		
				}
				
				//필터링 브랜드공지
				if( obj.구분=='브랜드' ){
					m++;   	
					c[m]=[];  			
					
					c[m][0]=m+1;	
					c[m][1]=imgName;
					c[m][2]=obj.제목;	
					c[m][3]=obj.날짜;	
				}
				
			});  //each 끝
		
		
			// 1 ///////////////// 필터링 메인 함수(전체공지, 쇼핑, 브랜드)처리하고 페이지버튼 자동추가 연동 //////////////////////////////////////////////////////
			//필터 버튼 클릭 이벤트 전체공지, 쇼핑공지, 브랜드공지
			$('.noticeBt').each(function(index){
				$(this).on({
					click:	function(){
						startRecord = 0;
						endRecord = startRecord+list;
						
						noticeBtNum=index;
						noticeFn();
						$('.noticeBt').removeClass('addNav');
						$(this).addClass('addNav');
					} 
				});
			});
			
			
			noticeFn();
			// 2/////////////////////////////////////////////////////////////////
			//공지사항 메인 함수
			function noticeFn(){	
							
				if(noticeBtNum==0){  //전체공지
				
					totRecord=a.length;   //전체공지 레코드수
					cnt=a.length;
					for(i=0; i<a.length; i++){
						a[i][0]=cnt;
						cnt--;
					}

					for(i=startRecord; i<endRecord; i++){
						txt += "<tr>";
						for(j=0; j<4; j++){  //4칸 : 글번호 200 ~ 1, 구분, 제목, 날짜
							txt += "<td>" + a[i][j] + "</td>";
						}
						txt += "</tr>";
					}
	
				}
				else if(noticeBtNum==1){  //쇼핑공지
				
					totRecord=b.length;  //쇼핑공지 레코드수
					cnt=b.length;
					for(i=0; i<b.length; i++){
						b[i][0]=cnt;
						cnt--;
					}
					
					for(i=startRecord; i<endRecord; i++){
						txt += "<tr>";
						for(j=0; j<4; j++){  //4칸 : 글번호 200 ~ 1, 구분, 제목, 날짜
							txt += "<td>" + b[i][j] + "</td>";
						}
						txt += "</tr>";
					}

				}
				else if(noticeBtNum==2){  //브랜드공지
				
					totRecord=c.length;  //브랜드공지 레코드수 150
					cnt=c.length;
					for(i=0; i<c.length; i++){
						c[i][0]=cnt;
						cnt--;
					}
					
					for(i=startRecord; i<endRecord; i++){
						txt += "<tr>";
						for(j=0; j<4; j++){  //4칸 : 글번호 200 ~ 1, 구분, 제목, 날짜
							txt += "<td>" + c[i][j] + "</td>";
						}
						txt += "</tr>";
					}
				}
				
				$('tbody').html( txt );
				txt='';
				cnt=0;
				
				//페이지 버튼 자동 추가
				//1. 전체페이지 = 전체레코드/5묶음   
				totPage = Math.ceil(totRecord/list); //자리올림 
				
				//2. 현재페이지 블럭번호(group) = Math.ceil(현재페이지(endRecord)/페이지당묶음단위(5)/한하면에표시할페이지수(10))  블럭번호  1~10 : 그룹1,  11~20 그룹2 ...
				group = Math.ceil((endRecord/list)/groupPage);  //1 2 ....
				
				//***************************************************
				//3. 페이지 그룹 범위 :  앞페이지와 뒷페이지 범위 값 설정  - 블럭단위의 그룹  
				frontPage = (group-1)*groupPage;  //블럭1: 0 ,   블럭1: 10, 블럭1: 20    
				rearPage = frontPage+groupPage; 
				
				//4. 나머지 페이지 10페이지가 안되는 페이지 수 정리
				if( rearPage > totPage ){
					rearPage = totPage;
				}
				
				//0. 반복문 i=시작값(앞), i<종료값(뒤)
				$('.notice-page-number>span').remove();
				for(i=frontPage; i<rearPage; i++){
					$('.notice-page-number').append("<span><a href='javascript:' class='pageBt'>" +( i<9?('0'+(i+1)):(i+1) )+ "</a></span>");
				}
				
				//나머지를 구해야 버튼의 인덱스번호를 반복해서 사용
				currentPage = (endRecord/list) % groupPage ; 				
				$('.pageBt').eq( currentPage-1 ).addClass('addPage');
				
			} //noticeFn 메인함수
			//////////////////////////////////////////////////////////////
			
			// 3 ///////////////////////////////////////////////////////////////
			//페이지버튼 클릭 이벤트 : 해당 번호별 페이지 목록 출력
			//추가된 버튼 이벤트 문제점 연속 클릭시 2회이상 클릭이 인식 안됨
			$(document).on('mouseenter','.pageBt', function(){
				
				$('.pageBt').each(function(index){
					$(this).on({
						click:	function(){
							
							startRecord = (Number($(this).text())-1)*list;  //198
							endRecord   = startRecord+list;
							//마지막 페이지에 묶음이 부족할 때 오류 발생 34번 index=33*6 =198
							if( endRecord > totRecord ){
								//endRecord = startRecord+(totRecord%list);
								endRecord = totRecord;
							}
							noticeFn();
							
						}
					});
				});
				
			});	
			/////////////////////////////////////////////////////////////////////
			
		
			// 4 //////////////////////////////////////////////////////////////
			//PageNextBt 다음 페이지 이동
			$('.PageNextBt').on({
				click:	function(){
					startRecord += list; //list 만큼 누적 다음으로 이동
					endRecord = startRecord+list;
						
					if( endRecord>totRecord ){						
						//startRecord = 총레코드수-(총레코드수%묶음그룹6);
						startRecord = totRecord-(totRecord%list);  //마지막 시작번호
						endRecord = totRecord;

						if(startRecord==totRecord){  //시작레코드가 마지막레코드와 같은경우 -list 해준다
							startRecord = totRecord-list; //190 디버깅
							endRecord = totRecord;  //200
							return false;
						}
					}
					noticeFn();
				}
			});

			
			// 5 ////////////////////////////////////////////////////////////////
			//PagePrevBt 이전 페이지 이동
			$('.PagePrevBt').on({
				click:	function(){
					startRecord -= list; //list 만큼 감소 이전으로 이동
					endRecord = startRecord+list;
					if( startRecord<0 ){
						startRecord = 0;
						endRecord = startRecord+list;
					}
					noticeFn();
					
				}
			});
			
		},  //success 끝
		error:function(){
			console.log('AJAX Error Message!!!');
		}
	});
	
	
	
	
});//notice-AJAX.js