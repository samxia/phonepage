<?php
//"page":"1",	"total":2,			"records":"40",			"rows":
class JqgridJson{
    public $page;
    public $total;
    public $records;
    public $rows;
}
class JqgridJsonRow{
    public $id;
    public $cell;
}
 $jj=new JqgridJson();
$jj->page=1;
$jj->total=10;
$jj->records=30;



    $row=new JqgridJsonRow();
    $row->id=1;
    $row->cell=array ('a','b','c','d','e');

    $arr = array ($row);

if(empty($_REQUEST['key'])) {
    for ($x = 2; $x <= 5; $x++) {
        $row = new JqgridJsonRow();
        $row->id = $x;
        $row->cell = array('a' . $x, 'b' . $x, 'c' . $x, 'd' . $x, 'e' . $x);

        array_push($arr, $row);
    }
}

$jj->rows=$arr;
echo json_encode($jj);
?>