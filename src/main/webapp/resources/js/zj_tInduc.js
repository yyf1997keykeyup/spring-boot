﻿var photo = 1;
var imgSrc = "../../../resources/images/teacher/pro";
var imgsrC = ".png"
$(".zj_leftR").click(function(){
	if(photo != 1){
		photo--;
		$("#zj_t1").attr("src",imgSrc + (photo+0) + imgsrC);
		$("#zj_t2").attr("src",imgSrc + (photo+1) + imgsrC);
		$("#zj_t3").attr("src",imgSrc + (photo+2) + imgsrC);
		$("#zj_tContent1").html(tName[photo-1]);
		$("#zj_tContent2").html(tName[photo]);
		$("#zj_tContent3").html(tName[photo+1]);
	}
});
$(".zj_rightR").click(function(){
	if(photo != 10){
		photo++;
		$("#zj_t1").attr("src",imgSrc + (photo+0) + imgsrC);
		$("#zj_t2").attr("src",imgSrc + (photo+1) + imgsrC);
		$("#zj_t3").attr("src",imgSrc + (photo+2) + imgsrC);
		$("#zj_tContent1").html(tName[photo-1]);
		$("#zj_tContent2").html(tName[photo]);
		$("#zj_tContent3").html(tName[photo+1]);
	}
});
var tName = new Array("武汉理工大学<br/>雷五明","武汉理工大学<br/>李静蓉",
	"中国地质大学<br/>孙灯勇","武汉理工大学<br/>魏超",
	"武汉工程大学<br/>喻瑶","武汉科技大学<br/>叶苗",
	"高考志愿规划认证培训师<br/>文岳","高考志愿规划师<br/>邓松明",
	"高考志愿规划师<br/>钟国富","高考志愿规划师<br/>谌贵桃",
	"高考志愿规划师<br/>姜霞","高考志愿规划师<br/>孙卫红");
var tInduc = new Array(
	"武汉理工大心理健康与职业发展研究所所长、特聘教授、教学名师、硕士生导师，国内知名职业规划与人才测评专家、高考志愿规划认证导师、心理咨询师兼督导师，多年耕耘在生涯规划、心理咨询、就业指导等领域，编著相关图书8本、发表论文31篇，积累心理咨询、职业指导、高考志愿填报案例7100余例。",
	"武汉理工大学教育科学与技术系前主任、副教授，教育学学士、硕士、博士，美国肯塔基大学教育学院访问学者，国内知名高考志愿规划师，对国内外高校、学科及专业有较为全面的了解，尤其擅长对青少年进行学业规划，对亲子关系及亲子教育有深刻研究。",
	"毕业于华中师范大学，先后获心理学学士、硕士、博士学位，现任武汉理工大学学生心理健康与发展教育指导中心教授、兼武汉理工大学心理健康与职业发展研究所硕士生导师、中国地质大学应用心理学研究所硕士生导师，在人格心理学、心理测量学、人才测评等方面有相当造诣。",
	"武汉理工大学学生就业创业指导中心副教授、硕士生导师、高考志愿规划师、武汉理工大学15551人才工程之教学名师，美国北卡罗来纳大学教堂山分校访问学者，美国职业发展协会成员（NCDA），BCC全球生涯教练，湖北省创业师资培训师、首批KAB大学生创业指导讲师、全国首批职业生涯规划骨干教师、国家二级心理咨询师、职业咨询师、人力资源管理师，全国创业指导课程教学大赛三等奖，主持多项国家及省部级基金课题，出版多部国家级规划教材。",
	"武汉工程大学心理学副教授，国家二级心理咨询师、国家生涯规划师、国际生涯教练、高考志愿规划师。主要从事高考志愿规划、大学生心理健康教育、大学生心理咨询与团体辅导、大学生职业指导、大学生职业发展教育与研究工作。累计个案咨询达1200余人次，公开发表各级各类论文20余篇，主持省级以上科研项目10余项，撰写21世纪规划教材2部。",
	"武汉科技大学副教授、湖北省创业研究会副秘书长、华民慈善基金会就业导师、职业生涯规划咨询师。国家二级心理咨询师、全国职业规划师生涯导师认证、高考志愿规划师。拥有500强外企、民企、事业单位工作经验，熟悉不同组织下的招聘特点及文化，关注家庭治疗领域。现聚焦青少年职业生涯规划课程研发、培训与咨询以及高考志愿规划咨询领域。",
	"曾任职中南某省考试院官员，高考志愿规划认证培训导师、作家，高考志愿实战专家，院校解读专家，被誉为“国内高校百科全书”，对高考填报志愿有深入研究和丰富经验。",
	"国家二级心理咨询师，二级婚姻家庭咨询师，武汉悟道心理咨询中心主任，高考志愿规划师，武汉乐邦社会工作服务中心理事长，中国心理卫生协会会员，中国智慧工程情感指导师，中国心理咨询师与催眠师联合会理事，湖北红十字会心理救援队队员，武汉市12355青少年心理热线专家，武汉理工大特聘心理咨询师，武汉市下徐家湾、东亭等社区特聘心理辅导员。",
	"中学高级教师、高考志愿规划师、某市教科院办公室主任。发表过《思想政治、课的法律渗透》、《中学教师的职业素养》等多篇论文。对中学生生涯发展、高考志愿填报和道德教育有较丰富经验和深入研究:对国内各高校召生政策理解透彻，曾指导百余名应届毕业生报考到自己理想的学校。",
	"高考志愿规划师，就职于武汉理工大学网络教育学院，从事学生管理、招生、学籍学历管理工作。先后在华中师范大学、武汉理工大学继续进修思想政治教育专业，从事中等职业学校、高校学生的政治理论、形势及法律课的教学，学生思想教育工作以及青少年生涯规划、就业辅导领域。",
	"高考志愿规划师，曾任职于武汉理工大学创业园和武汉理工大学就业指导中心，有丰富的指导学生就业创业经验，对学生升学规划和职业规划有大量实践案例。多年来专注于人力资源管理领域，曾在具有广泛影响力的人力资源服务供应商前程无忧任职，在高校主力参与多个大型国企人力资源实践项目，熟悉不同组织招聘特征、组织架构、薪酬待遇、发展通道等。现专注于青少年学生学业规划和职业规划咨询，特别是高考志愿规划咨询。",
	"高考志愿规划师、高级政工师、二级心理咨询师、武汉石化工会副主席常年从事心理健康咨询及政治思想工作，对高考志愿填报和青少年生涯规划有丰富经验。");
$(".zj_Teacher").hover(function(){
	var $this = $(this);
	setTimeout(function(){
		$("img",$this).css("margin-top","20px");
		$("p",$this).css("margin-top","-60px");
		$("p",$this).css("font-size","15px");
		$("#zj_tContent1",$this).text(tInduc[photo-1]);
		$("#zj_tContent2",$this).text(tInduc[photo]);
		$("#zj_tContent3",$this).text(tInduc[photo+1]);
	},1000);
},function() {
	var $this = $(this);
	setTimeout(function(){
		$("img",$this).css("margin-top","100px");
		$("p",$this).css("margin-top","0px");
		$("p",$this).css("font-size","20px");
		$("#zj_tContent1",$this).html(tName[photo-1]);
		$("#zj_tContent2",$this).html(tName[photo]);
		$("#zj_tContent3",$this).html(tName[photo+1]);
	},1000);
}
);