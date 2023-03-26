var library = [ 
		{ author: 'Bill Gates',
		title: 'The Road Ahead',
		readingStatus: true },
		{ author: 'Steve Jobs', 
		title: 'Walter Isaacson',
		readingStatus: true }, 
		{ author: 'Suzanne Collins',
		title: 'Mockingjay: The Final Book of The Hunger Games', 
		readingStatus: false }
		];

library.forEach(function(e){
	if(e.readingStatus===true){
		console.log(`Already read ${e.title}  by  ${e.author}`)
	}
	else{
		console.log(`Not read  ${e.title}  ${e.author}`)
	}
})
