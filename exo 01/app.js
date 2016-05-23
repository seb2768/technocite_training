let fs =require('fs');
let names = process.argv[2];


let fielPath = 'test1.txt'
//lire les informations du fichier.txt

fs.readFile('test1.txt', 'utf8', function(err, data) {
  if (err) throw err;

//  var lines = data.split("\n"); //crée un tableau grâce au retour a la ligne (\n = retour)
//   console.log(lines); //affiche le tableau
//   console.log(data); //affiche les noms de la liste
//   console.log("-----------------------------------");
//   console.log(` Ce fichier contient ${lines.length} lignes`);
if(!names){
	console.log('erreur vous n\'avez pas mis de valeurs lors de l\'appel de la commande');
	}else{
		let inData = data+names.replace(/,/g, "\n")+"\n";
	fs.writeFile(fielPath, inData, (err) =>{
		if (err) throw err;
		console.log('It\'s saved!');
	});
}
});

// console.log(process.argv[2]);
