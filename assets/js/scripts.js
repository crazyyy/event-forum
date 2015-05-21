//  Подсвечивать столбцы и строки при наведении мыши в перекрестье
//  http://ru.stackoverflow.com/questions/429/%D0%9F%D0%BE%D0%B4%D1%81%D0%B2%D0%B5%D1%82%D0%BA%D0%B0-%D1%81%D1%82%D1%80%D0%BE%D0%BA-%D0%B8-%D1%81%D1%82%D0%BE%D0%BB%D0%B1%D1%86%D0%BE%D0%B2-%D0%B2-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B5
$('table').delegate('td.input', 'mouseover mouseleave', function (e) {
    $(this).parent().toggleClass('hover', e.type == 'mouseover');
    $('colgroup').eq($(this).index()).toggleClass('hover', e.type == 'mouseover');
});
