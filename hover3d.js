document.querySelector('.hover3d').addEventListener('mousemove', function(e){
	var item = document.querySelector('.hover3d')

	var x = e.pageX - item.offsetLeft
	var y = e.pageY - item.offsetTop

	var centerX = item.offsetWidth /2
	var centerY = item.offsetHeight /2 

	var deltaX = x - centerX
	var deltaY = y - centerY

	var percentX = deltaX / centerX
	var percentY = deltaY / centerY
	
	var deg = 15
	var c = document.querySelector('.hover3d .hoverContainer')
	c.style.transform = 'rotateX('+ (deg*-percentY) + 'deg)'+ ' rotateY('+ (deg*percentX) +'deg)'
	
})

document.querySelector('.hover3d').addEventListener('mouseleave', function(){
	
	var c = document.querySelector('.hover3d .hoverContainer')
	c.style.transform = ''
})
