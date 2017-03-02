/**
 * Created by Administrator on 2017/2/26.
 */
//var grid_data_contact={};
$(function(){
    //页面加载完成之后执行
    pageInit();
});
function pageInit(){
    //创建jqGrid组件
    jQuery("#list2").jqGrid(
        {
            //url : 'service?getContacts',//组件创建完成之后请求数据的url
            datatype : "json",//请求数据返回的类型。可选json,xml,txt
           // datatype:'local',
           // data:grid_data_contact,
            colNames : [ '名称', '电话', '手机', '地址' ],//jqGrid的列显示名字
            colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
                {name : 'name',index : 'name',width : 55},
                {name : 'tel',index : 'tel',width : 90},
                {name : 'phone',index : 'phone',width : 100,sortable:false},
                {name : 'address',width : 80,align : "left",sortable:true}
            ],
           // rowNum : 30,//一页显示多少条
            //rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
            pager : '#pager2',//表格页脚的占位符(一般是div)的id
            sortname : 'id',//初始化的时候排序的字段
            sortorder : "desc",//排序方式,可选desc,asce
            mtype : "post",//向后台请求数据的ajax的类型。可选post,get
            viewrecords : true,
            caption : "联系人",//表格的标题名字,
            height:"350px",
            loadonce:true,
            scroll:true,
            hidegrid:false,
            rownumbers:true,


        });
    /*创建jqGrid的操作按钮容器*/
    /*可以控制界面上增删改查的按钮是否显示*/
    jQuery("#list2").jqGrid('navGrid', '#pager2', {edit : false,add : false,del : false});
    $(".ui-icon-search").parent().parent().hide( );
    $(".ui-icon-refresh").parent().parent().hide( );
}

function getContactGridDataByAjax(searchText)
{
    $("#list2" ).clearGridData(); //清空数据

    jQuery("#list2").jqGrid('setCaption',"联系人："+searchText);
    jQuery("#list2").jqGrid('setGridParam',
        {url:'service/',postData:{'key':'1','s':searchText},datatype:'json',mtype:'POST'}).trigger("reloadGrid");//切换数据
 /*  $.ajax({
         async:false,
         cache:false,
         type: 'get',
         url: 'service',
         data:{
             "key":"1",
         },
         dataType: 'json',
         success: function (jsonresponse) {
             console.log("ajax success:" + jsonresponse);

         },
         error:function(){
             alert("search error");
         }
     });*/

}