mkdir "d:\clarte club\public\images\products" -Force
$files = Get-ChildItem "d:\clarte club\public\products imgs\*.png"
$i = 1
foreach ($file in $files) {
    $newName = "product-$i.png"
    Move-Item $file.FullName "d:\clarte club\public\images\products\$newName"
    $i++
}
Remove-Item "d:\clarte club\public\products imgs" -Force -Recurse
