
$( document ).ready(function(){
	// localStorage.clear();
	if (localStorage.getItem("input2")!= null) {
	    var mySplitResult = localStorage.getItem("input2").split(":");
    	for (var i = 0; i < mySplitResult.length ; i++) {
    		if (mySplitResult.length<2) {
    			$("#"+mySplitResult[i]).html(mySplitResult[i+1]);
    			break;
    		}
    		else{
    			$("#"+mySplitResult[i]).html(mySplitResult[i+1]);
    		}
		}
	}

	if (localStorage.getItem("lat")!= null) {
	    var mylat = localStorage.getItem("lat").split(":");
    	for (var t = 0; t < mylat.length ; t++) {
    		if (mylat.length<2) {
    			$("#"+mylat[t]).html(mylat[t+1]);
    			break;
    		}
    		else{
    			$("#"+mylat[t]).html(mylat[t+1]);
    		}
		}
	}

	if (localStorage.getItem("name1")!= null){
		$('#name1').val(localStorage.getItem("name1"))
	}

	var model1 = new Array;
		model1[1] = "HOYALUX  MSV　マイルド　16mm";
		model1[2] = "HOYALUX  MSV　マイルド　14mm";
		model1[3] = "HOYALUX  MSV　マイルド　11mm";
		model1[4] = "HOYALUX  MSV　ハーモニー　16mm";
		model1[5] = "HOYALUX  MSV　ハーモニー　14mm";
		model1[6] = "HOYALUX  MSV　ハーモニー　11mm";
		model1[7] = "HOYALUX  MSV　クラリティー　16mm";
		model1[8] = "HOYALUX  MSV　クラリティー　14mm";
		model1[9] = "HOYALUX  MSV　クラリティー　11mm";
		model1[10] = "HOYALUX 　トリニティー　Ｍタイプ　14mm";

	var model2 = new Array;
		model2[1] = "シークラフトプログレッシブ/？？削除しましょう";
		model2[2] = "シープラウド・Ａｉ/14mm";
		model2[3] = "シープラウド・Ａｉ/12mm";
		model2[4] = "シープラウド・Ａｉ/10mm";
		model2[5] = "Ａｉ/14mm";
		model2[6] = "Ａｉ/12mm";
		model2[7] = "Ａｉ/10mm";
		model2[8] = "シープラウド・パワー/14mm";
		model2[9] = "シープラウド・パワー/13mm";
		model2[10] = "シープラウド・パワー/12mm";
		model2[11] = "プレシオ・パワー/14mm";

	var model3 = new Array;
		model3[1] = "グラナス　クリアタイプ／15mm";
		model3[2] = "グラナス　クリアタイプ／14mm";
		model3[3] = "グラナス　クリアタイプ／13mm";
		model3[4] = "グラナス　クリアタイプ／12mm";
		model3[5] = "グラナス　クリアタイプ／11mm";
		model3[6] = "グラナス　マイルドタイプ／15mm";
		model3[7] = "グラナス　マイルドタイプ／14mm";
		model3[8] = "グラナス　マイルドタイプ／13mm";
		model3[9] = "グラナス　マイルドタイプ／12mm";
		model3[10] = "グラナス　マイルドタイプ／11mm";
		model3[11] = "レゾナスＲ　マイチューン／15mm";

	var model4 = new Array;
		model4[1] = "スぺリオールＰＸ／18mm";
		model4[2] = "スぺリオールＰＸ／17mm";
		model4[3] = "スぺリオールＰＸ／16mm";
		model4[4] = "スぺリオールＰＸ／15mm";
		model4[5] = "スぺリオールＰＸ／14mm";
		model4[6] = "スぺリオールＰＸ／13mm";
		model4[7] = "スぺリオールＰＸ／12mm";
		model4[8] = "スぺリオールＰＸ／11mm";
		model4[9] = "スぺリオールＰＸ／10mm";
		model4[10] = "スぺリオールＰ１／18mm";

	var model5 = new Array;
		model5[1] = "パルファスf／16mm";
		model5[2] = "パルファスf／14mm";
		model5[3] = "パルファスf／12mm";
		model5[4] = "パルファスf／10mm";
		model5[5] = "パルファス／14mm";
		model5[6] = "パルファス／12mm";
		model5[7] = "パルファス／10mm";
		model5[8] = "ジョイアス／16mm";

	var model6 = new Array;
		model6[1] = "その他";

	var model = new Array;
		model[1] = "HOYA";
		model[2] = "ＮＩＫＯＮ Essilor";
		model[3] = "ＴＯＫＡＩ";
		model[4] = "ＳＥＩＫＯ";
		model[5] = "PENTAX";
		model[6] = "その他";



	var k=0;
		for(var i = 1; i <= 6; i++) {
    		 $('.label3').html($('.label3').html()+ '<div id="cell' + i + '" class="cell">'+model[i]+'</div><br>' );
    		 if(k==0){
    		 	for(var t = 1; t <= 10; t++) {
    		 	 $('.label4').html($('.label4').html()+ '<div id="cell' + t + '" class="row" name="'+model1[t]+'">'+model1[t]+'</div><br>' );
    		 	}
    		 	$('.row').click(function(){
   						var name=$(this).attr("name");
            		});
    		 }
   		}
   		if (!id) {
   			var id="cell1";
   		}
   		
   		if (document.getElementById(id)!=null)
   		// document.getElementById(id).style.backgroundColor = "red";
  		$('.cell').click(function(){
  			k=1;
            var res=$(this).attr("id");
            if (document.getElementById(res).style.backgroundColor = "white") {
            	if ( res!=id) {
            	document.getElementById(id).style.backgroundColor = "white"
            	document.getElementById(res).style.backgroundColor = "red";
            	localStorage.removeItem(id);
            	localStorage.setItem("cell",res);
            	id=res;
            }
            else{
            	 localStorage.setItem("cell",id);
            	 document.getElementById(res).style.backgroundColor = "red";
            	}
            }
            
            
            switch (res){
            	case "cell1":
            		$('.label1').html(model[1]);
            		$('.label4').html('');
            		for(var j = 1; j <= 10; j++) {
    		 			$('.label4').html($('.label4').html()+ '<div id="row' + j + '" class="row" name="'+model1[j]+'">'+model1[j]+'</div><br>' );
   					}


   					var name1="row1";
   					// document.getElementById(name1).style.backgroundColor = "red";
   					$('.row').click(function(){
   						var name=$(this).attr("name");
   						var name2=$(this).attr("id");
   						document.getElementById(name2).style.backgroundColor = "red";

   						if (document.getElementById(name2).style.backgroundColor = "white") {
	            		if ( name2!=name1) {
			            	document.getElementById(name1).style.backgroundColor = "white"
			            	document.getElementById(name2).style.backgroundColor = "red";
			            	localStorage.removeItem(name1);
            				localStorage.setItem("row",name2);
	            			name1=name2;
	           			}
		            	else{
		            		localStorage.setItem("row",name1);
		            	 	document.getElementById(name2).style.backgroundColor = "red";
		            	}
		            }
		            	localStorage.setItem("rownew",name);
   						$('.label2').html(name);
            		});



            	break;

            	case "cell2":
            		$('.label1').html(model[2]);
            		$('.label4').html('');
            		for(var j = 1; j <= 11; j++) {
    		 			$('.label4').html($('.label4').html()+ '<div id="row' + j + '" class="row" name="'+model2[j]+'">'+model2[j]+'</div><br>' );
   					}
   					var name1="row1";
   					// document.getElementById(name1).style.backgroundColor = "red";
   					$('.row').click(function(){
   						var name=$(this).attr("name");
   						var name2=$(this).attr("id");
   						document.getElementById(name2).style.backgroundColor = "red";

   						if (document.getElementById(name2).style.backgroundColor = "white") {
	            		if ( name2!=name1) {
			            	document.getElementById(name1).style.backgroundColor = "white"
			            	document.getElementById(name2).style.backgroundColor = "red";
			            	localStorage.removeItem(name1);
            				localStorage.setItem("row",name2);
	            			name1=name2;
	           			}
		            	else{
		            		localStorage.setItem("row",name1);
		            	 	document.getElementById(name2).style.backgroundColor = "red";
		            	}
		            }
		            	localStorage.setItem("rownew",name);
   						$('.label2').html(name);
            		});

            	break;

            	case "cell3":
            		$('.label1').html(model[3]);
            		$('.label4').html('');
            		for(var j = 1; j <= 11; j++) {
    		 			$('.label4').html($('.label4').html()+ '<div id="row' + j + '" class="row" name="'+model3[j]+'">'+model3[j]+'</div><br>' );
   					}
   					var name1="row1";
   					// document.getElementById(name1).style.backgroundColor = "red";
   					$('.row').click(function(){
   						var name=$(this).attr("name");
   						var name2=$(this).attr("id");
   						document.getElementById(name2).style.backgroundColor = "red";

   						if (document.getElementById(name2).style.backgroundColor = "white") {
	            		if ( name2!=name1) {
			            	document.getElementById(name1).style.backgroundColor = "white"
			            	document.getElementById(name2).style.backgroundColor = "red";
			            	localStorage.removeItem(name1);
            				localStorage.setItem("row",name2);
	            			name1=name2;
	           			}
		            	else{
		            		localStorage.setItem("row",name1);
		            	 	document.getElementById(name2).style.backgroundColor = "red";
		            	}
		            }
		            	localStorage.setItem("rownew",name);
   						$('.label2').html(name);
            		});

            	break;

            	case "cell4":
            		$('.label1').html(model[4]);
            		$('.label4').html('');
            		for(var j = 1; j <= 10; j++) {
    		 			$('.label4').html($('.label4').html()+ '<div id="row' + j + '" class="row" name="'+model4[j]+'">'+model4[j]+'</div><br>' );
   					}
   					var name1="row1";
   					// document.getElementById(name1).style.backgroundColor = "red";
   					$('.row').click(function(){
   						var name=$(this).attr("name");
   						var name2=$(this).attr("id");
   						document.getElementById(name2).style.backgroundColor = "red";

   						if (document.getElementById(name2).style.backgroundColor = "white") {
	            		if ( name2!=name1) {
			            	document.getElementById(name1).style.backgroundColor = "white"
			            	document.getElementById(name2).style.backgroundColor = "red";
			            	localStorage.removeItem(name1);
            				localStorage.setItem("row",name2);
	            			name1=name2;
	           			}
		            	else{
		            		localStorage.setItem("row",name1);
		            	 	document.getElementById(name2).style.backgroundColor = "red";
		            	}
		            }
		            	localStorage.setItem("rownew",name);
   						$('.label2').html(name);
            		});

            	break;

            	case "cell5":
            		$('.label1').html(model[5]);
            		$('.label4').html('');
            		for(var j = 1; j <= 8; j++) {
    		 			$('.label4').html($('.label4').html()+ '<div id="row' + j + '" class="row" name="'+model5[j]+'">'+model5[j]+'</div><br>' );
   					}
   					var name1="row1";
   					// document.getElementById(name1).style.backgroundColor = "red";
   					$('.row').click(function(){
   						var name=$(this).attr("name");
   						var name2=$(this).attr("id");
   						document.getElementById(name2).style.backgroundColor = "red";

   						if (document.getElementById(name2).style.backgroundColor = "white") {
	            		if ( name2!=name1) {
			            	document.getElementById(name1).style.backgroundColor = "white"
			            	document.getElementById(name2).style.backgroundColor = "red";
			            	localStorage.removeItem(name1);
            				localStorage.setItem("row",name2);
	            			name1=name2;
	           			}
		            	else{
		            		localStorage.setItem("row",name1);
		            	 	document.getElementById(name2).style.backgroundColor = "red";
		            	}
		            }
   						localStorage.setItem("rownew",name);
   						$('.label2').html(name);
            		});

            	break;

            	default:
            		$('.label1').html(model[6]);
            		$('.label4').html('');
            		for(var j = 1; j <= 1; j++) {
    		 			$('.label4').html($('.label4').html()+ '<div id="row' + j + '" class="row" name="'+model6[j]+'">'+model6[j]+'</div><br>' );
   					}
   					var name1="row1";
   					// document.getElementById(name1).style.backgroundColor = "red";
   					$('.row').click(function(){
   						var name=$(this).attr("name");
   						var name2=$(this).attr("id");
   						document.getElementById(name2).style.backgroundColor = "red";

   						if (document.getElementById(name2).style.backgroundColor = "white") {
	            		if ( name2!=name1) {
			            	document.getElementById(name1).style.backgroundColor = "white";
			            	document.getElementById(name2).style.backgroundColor = "red";
			            	localStorage.removeItem(name1);
            				localStorage.setItem("row",name2);
	            			name1=name2;
	           			}
		            	else{
		            		localStorage.setItem("row",name1);
		            	 	document.getElementById(name2).style.backgroundColor = "red";
		            	}
		            }
		            	localStorage.setItem("rownew",name);
   						$('.label2').html(name);
            		});

            	break;
            }

        });

		
		if (localStorage.getItem("cell")!= null) {
	    	var mycell = localStorage.getItem("cell").split("ll")[1];
	    	$('.label1').html(model[mycell]);

	    	$('.inputcuoi3').html('<div class="checkboxcell1" style="color:black; background: white;">'+model[mycell]+'</div><br>' );

	    	if (localStorage.getItem("rownew")!= null) {
	    		localStorage.getItem("rownew",name);
		    	$('.label2').html(localStorage.getItem("rownew"));
		    	$('.inputcuoi3').html($('.inputcuoi3').html()+'<div class="checkboxcell2" style="color:black; background: white;">'+localStorage.getItem("rownew")+'</div>' );
	    	}
		}

		if (localStorage.getItem("check1")!=null) {
			console.log(localStorage.getItem("check1"));

			$('.inputcuoi2').html('<div class="checkbox1" style="color:black; background: white;">'+localStorage.getItem("check1")+'</div>' );
			}
		if (localStorage.getItem("check2")!=null) {
			console.log(localStorage.getItem("check2"));
			$('.inputcuoi3').html($('.inputcuoi3').html()+'<div class="checkbox2" style="color:black; background: white;">'+localStorage.getItem("check2")+'</div>' );
			}

		$('.input1').on('input', function() {
    		 localStorage.setItem("name1",$(this).val()) ;
		});

			var lat1;
			var rel1;
			var u=0;
		$('.lat1').click(function() {
						lat1=$(this).attr("id");
						rel3=$('#'+lat1).html();

						if ($("#"+lat1).html("")){
							$("#"+lat1).html("_");
						}
						if  (rel3.charAt(0)!="_") {
							$("#"+lat1).html(rel3+"_");
							$('#table3_total').html(rel3+"_");
						}
						u=1;
						});		

		$('.input3').click(function() {

			var res=$(this).attr("id");
			var variable=res.split("_")[1];
			var res1=$('#table3_total').html();

		switch(variable){
			case "mul":
				if(res1=='-'){
					$('#table3_total').html("");
				}
				else if(res1=='+'){
					$('#table3_total').html("");
					$('#table3_total').html("-");
				}
				else if(res1==''){
					$('#table3_total').html("-");
				}
				else if (($('#table3_total').html().split("-").length - 1)==1) {
					$('#table3_total').html();

				}
				else if (($('#table3_total').html().split("+").length - 1)) {
					$('#table3_total').html($('#table3_total').html().replace("+","-"));

				}
				else{
					$('#table3_total').html("-" + $('#table3_total').html() );
				}

			break;


			case "add":
				if(res1=='+'){
					$('#table3_total').html("");
				}
				else if(res1=='-'){
					$('#table3_total').html("");
					$('#table3_total').html("+");
				}
				else if(res1==''){
					$('#table3_total').html("+");
				}
				else if (($('#table3_total').html().split("+").length - 1)) {
					$('#table3_total').html();
				}
				else if (($('#table3_total').html().split("-").length - 1)) {
					$('#table3_total').html($('#table3_total').html().replace("-","+"));

				}
				else{
					$('#table3_total').html("+" + $('#table3_total').html() );
				}

			break;

			case "back":
				$('#table3_total').html($('#table3_total').html().substring(0, $('#table3_total').html().length-2)+"_");
			break;

			case "del":
				$('#table3_total').html("_");

			break;

			case "point":
				if (res1=='_') {
					$('#table3_total').html("_");
				}
				else if (($('#table3_total').html().split(".").length - 1)) {
					$('#table3_total').html();
				}
				else if(res1=='+'||res1=='-'){
					$('#table3_total').html();
				}
				else{
					$('#table3_total').html($('#table3_total').html().substring(0, $('#table3_total').html().length-1)+"."+"_");
				}
			
			break;

			case "rel":
				
				$("#"+rel1).html($('#table3_total').html().substring(0, $('#table3_total').html().length-1));

				if (localStorage.getItem("input2")==null) {
					localStorage.setItem("input2",rel1+":"+$('#table3_total').html().substring(0, $('#table3_total').html().length-1));
				}
				else{
				localStorage.setItem("input2", localStorage.getItem("input2")+":"+rel1+":"+$('#table3_total').html().substring(0, $('#table3_total').html().length-1));
				}

				var o;
				o = (+(rel1.split("e")[1]).substring(0,1))+(+1);

				if (o==1 || o==2 || (rel1.split("_")[1])<=7 ) {
					rel1=rel1.substring(0, rel1.length-1)+((+rel1.split("_")[1])+(+1));
					rel3=$("#"+rel1).html();
					if ($("#"+rel1).html("")){
						$("#"+rel1).html("_");
					}
					console.log(rel1.split("_")[1]);
					if (o==2 && (rel1.split("_")[1])==8) {
					rel1=rel1.substring(0,5)+o+"_"+"1";
					rel3=$("#"+rel1).html();
					if ($("#"+rel1).html("")){
						$("#"+rel1).html("_");
						}
					if (rel3.charAt(0)!="_") {
						$("#"+rel1).html(rel3+"_");
						$('#table3_total').html(rel3+"_");
						}
					}

					if (o==3 && (rel1.split("_")[1])==8) {
						$("#keyboard1").hide();
	   					$("#table3").hide();
					}

					if (rel3.charAt(0)!="_") {
						$("#"+rel1).html(rel3+"_");
						$('#table3_total').html(rel3+"_");
					}

					}
					if ((o==4) && (rel1.split("_")[1])==7) {
						$("#keyboard1").hide();
	   					$("#table3").hide();
					}			
				
				$('#table3_total').html("_");
				
			break;

			case "rel2":
				
				$("#"+lat1).html($('#table3_total').html().substring(0, $('#table3_total').html().length-1));
				if (localStorage.getItem("lat")==null) {
					localStorage.setItem("lat",lat1+":"+$('#table3_total').html().substring(0, $('#table3_total').html().length-1));
				}
				else{
				localStorage.setItem("lat", localStorage.getItem("lat")+":"+lat1+":"+$('#table3_total').html().substring(0, $('#table3_total').html().length-1));
				}

				if (o==1 || o==2 || (lat1.split("_")[1])<=7 ) {

					lat1=lat1.substring(0, lat1.length-1)+((+lat1.split("_")[1])+(+1));
					rel3=$("#"+lat1).html();
					if ($("#"+lat1).html("")){
						$("#"+lat1).html("_");
					}

					if ((lat1.split("_")[1])==8) {
						$("#keyboard1").hide();
	   					$("#table3").hide();
					}

					if (rel3.charAt(0)!="_") {
						$("#"+lat1).html(rel3+"_");
						$('#table3_total').html(rel3+"_");
					}

				}

				$('#table3_total').html("_");			
				
			break;

			case "total":
				$('#table3_total').html();
				
			break;

			default:
				if (res1=='0_') {
					$('#table3_total').html(variable+"_");
				}
				else if (res1=='+0_') {
					$('#table3_total').html("+"+variable+"_");
				}
				else if (res1=='-0_') {
					$('#table3_total').html("-"+variable+"_");
				}
				else{
					$('#table3_total').html($('#table3_total').html().substring(0, $('#table3_total').html().length-1)+variable+"_");
				}
			break;
		}
	});	
	var rel3;
	var rel4;
	var run;
	$('.input2').click(function() {
		$("#keyboard1").show();
	   $("#table3").show();
	   $("#exit").show;

		rel1=$(this).attr("id");
		rel3=$("#"+rel1).html();
		if ($("#"+rel1).html("")){
			$("#"+rel1).html("_");
		}

		if  ( rel3.charAt(0)!="_") {
			$("#"+rel1).html(rel3+"_");
			$('#table3_total').html(rel3+"_");
		}

		});

$('#exit').click(function() {

		rel3=$("#"+rel1).html();
		if (u==1) {
			rel3=$("#"+lat1).html();
			u=0;
			if (rel3=="_") {
		    $("#"+lat1).html("");
		   }

		   // if (rel3.charAt(0)!="_") {
			  //  	$("#"+lat1).html(rel3.substring(0,rel3.indexOf("_")));
		   // }
		}
		
	   if (rel3=="_") {
		    $("#"+rel1).html("");
		    // $("#"+lat1).html("");
	   }

	   if (rel3.charAt(0)!="_") {
		   	$("#"+rel1).html(rel3.substring(0,rel3.indexOf("_")));
		   	// $("#"+lat1).html(rel3.substring(0,rel3.indexOf("_")));
	   }

	   $("#keyboard1").hide();
	   $("#table3").hide();
});
});


