function hideTab(ele) {
	var g = document.getElementById('gallery');
	var g2= document.getElementById('gallery2');
	var g3= document.getElementById('gallery3');
	var g4= document.getElementById('gallery4');
	var e = document.getElementById(ele);
	if (e == g) {
		g.style.display = 'block';
		g2.style.display = 'none';
		g3.style.display = 'none';
		g4.style.display = 'none';
		}
	else if (e == g2) {
		g2.style.display = 'block';
		g.style.display = 'none';
		g3.style.display = 'none';
		g4.style.display = 'none';
		}
	else if (e == g3) {
		g3.style.display = 'block';
		g.style.display = 'none';
		g2.style.display = 'none';
		g4.style.display = 'none';
		}
	else if (e == g4) {
		g4.style.display = 'block';
		g.style.display = 'none';
		g2.style.display = 'none';
		g3.style.display = 'none';
		}
}
