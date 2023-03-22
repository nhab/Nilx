<?php

$path    = './';

function endsWith( $whole, $part ) {
  $length = strlen( $part );
  if( !$length ) {
      return true;
  }
  return substr( $whole, -$length ) === $part;
}

$it = new RecursiveTreeIterator(new RecursiveDirectoryIterator($path, RecursiveDirectoryIterator::SKIP_DOTS));
foreach($it as $subpath) {
    $c1=strpos($subpath, '~') == false;
    $c2=!(substr($subpath,0, 8)=="|-./libs" || substr($subpath,0, 10)=="| |-./libs" || substr($subpath,0, 12)=="| | |-./libs" );
    $c3=endsWith($subpath,".htm");
    if ($c1 && $c2 && $c3 )
    {
     $link=$subpath;
     while($link[0]=="|" || $link[0]==" " || $link[0]=="-"  || $link[0]=="." || $link[0]=="/"  || $link[0]=="\\" ) 
      $link=substr($link,1);
     echo "<a href='". $link ."'>". $subpath."</a><br>";
    }
      
}

?>