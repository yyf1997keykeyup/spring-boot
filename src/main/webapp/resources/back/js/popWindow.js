$(".zj_button1").click(function(){
    var $this = $(this);
	$(".zj_popWindow1").show();
	$(".zj_shade").show();
});

$(".zj_button2").click(function(){
    var $this = $(this);
    $(".zj_popWindow2").show();
    $(".zj_shade").show();
    //主要语句
    $("input[name='userIdEdit']").val($this.parent().prev().prev().prev().prev().prev().prev().prev().text());
    $("input[name='userNameEdit']").val($this.parent().prev().prev().prev().prev().prev().prev().text());
    $("input[name='userPasswordEdit']").val($this.parent().prev().prev().prev().prev().prev().text());
    $("input[name='userTypeEdit']").val($this.parent().prev().prev().prev().prev().text());
    $("input[name='stuNameEdit']").val($this.parent().prev().prev().prev().text());
    $("input[name='stuClassEdit']").val($this.parent().prev().prev().text());
    $("input[name='stuSchoolEdit']").val($this.parent().prev().text());

});
function doHide1(e){
	$(".zj_popWindow1").hide();
	$(".zj_shade").hide();
    $(".input[name='userNameAdd']").val("");
    $(".input[name='userPasswordAdd']").val("");
    $(".input[name='userTypeAdd']").val("");
    $(".input[name='stuNameAdd']").val("");
    $(".input[name='stuClassAdd']").val("");
    $(".input[name='stuSchoolAdd']").val("");
}
function doHide2(e){
    $(".zj_popWindow2").hide();
    $(".zj_shade").hide();
    $("input[name='userIdEdit']").val("");
    $(".input[name='userNameEdit']").val("");
    $(".input[name='userPasswordEdit']").val("");
    $(".input[name='userTypeEdit']").val("");
    $(".input[name='stuNameEdit']").val("");
    $(".input[name='stuClassEdit']").val("");
    $("input[name='stuSchoolEdit']").val("");
}

$("#zj_check1").click(function () {
    document.getElementById('addForm').submit();
    $("#zj_check1").attr("disabled", "disabled");
});
$("#zj_check2").click(function () {
    document.getElementById('editForm').submit();
    $("#zj_check2").attr("disabled", "disabled");
});

$(document).ready(
	function() {
//         var mx = 0, my = 0; //记录鼠标位置
//         var dx = 0, dy = 0; //记录对话框位置
//         var isDrag = false;
//         $(".zj_popTop").mousedown(function (e) {
//             e = e || window.event;
//             mx = e.pageX;
//             my = e.pageY;
//             dx = $(".zj_popWindow1").offset().left;
//             dy = $(".zj_popWindow1").offset().top;
//             isDrag = true;
//         });
//         $(".zj_popWindow1").mouseup(function () {
//             isDrag = false;
//         });
//         $(document).mousemove(function (e) {
//             var e = e || window.event;
//             var x = e.pageX;      //移动时鼠标X坐标
//             var y = e.pageY;      //移动时鼠标Y坐标
//             if (isDrag) {        //判断对话框能否拖动
//                 var moveX = dx + x - mx;      //移动后对话框新的left值
//                 var moveY = dy + y - my;      //移动后对话框新的top值
//                 //设置拖动范围
//                 var pageW = $(window).width();
//                 var pageH = $(window).height();
//                 var dialogW = $(".zj_popWindow1").width();
//                 var dialogH = $(".zj_popWindow1").height();
//                 var maxX = pageW - dialogW;       //X轴可拖动最大值
//                 var maxY = pageH - dialogH;       //Y轴可拖动最大值
//                 moveX = Math.min(Math.max(0, moveX), maxX);     //X轴可拖动范围
//                 moveY = Math.min(Math.max(0, moveY), maxY);     //Y轴可拖动范围
//                 //重新设置对话框的left、top
//                 $(".zj_popWindow1").css({"left": moveX + 'px', "top": moveY + 'px'});
//             }
//             ;
//         });
//         $dialog = $(".zj_popWindow1");
//
        function autoCenter(el) {
            var bodyW = $(window).width();
            var bodyH = $(window).height();
            var elW = el.width();
            var elH = el.height();
            $(".zj_popWindow1").css({"left": (bodyW - elW) / 2 + 'px', "top": (bodyH - elH) / 2 + 'px'});
            $(".zj_popWindow2").css({"left": (bodyW - elW) / 2 + 'px', "top": (bodyH - elH) / 2 + 'px'});
        };
        window.onresize = function () {
            autoCenter($dialog)
        };
        autoCenter($(".zj_popWindow1"));
        autoCenter($(".zj_popWindow2"));
     }
);



