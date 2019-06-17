import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class City {
 	private name: string;
	private options: array;
	 constructor(name, options) {
    this.name = name;
    this.options = options;
 	}

	getName() {
 		return this.name;
 	}

 	getOptionsString() {
   	let options_string = "";
   	for (var i = 0; i <= this.options.length ; i++) {
   		options_string =+ "&facet="+options[i];
   	}
   	return this.options_string;
 	}

 	setOptions(options) {
   	this.options = options;
 	}
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	httpOptions: any;

	angersData: any;
	nantesData: any;
	rennesData: any;
	dataset: string;
	url: string;
	options: array;

  constructor(public http: HttpClient) {

  	this.dataset = "";

  	/* Ajouter le type (static ou dynamic sous forme de string, exemple plus bas) dans l'appel des options d'url quand ça sera implémenté sur la fonction associée */

  	let angers = City('angers', {});
  	angers.setOptions(setCityOptions('angers')); // ici par exemple
  	this.url = "https://data.${angers.getName()}.fr/api/records/1.0/search/?dataset=${this.dataset}&${angers.getOptionsString()}";
  	this.angersData = await this.getAllParkingData(angers, this.url);

  	let nantes = City('nantes', {});
  	nantes.setOptions(setCityOptions('nantes'));
  	this.url = "https://data.${nantes.getName()}.fr/api/records/1.0/search/?dataset=${this.dataset}&${nantes.getOptionsString()}";
  	this.nantesData = await this.getAllParkingData(nantes, this.url);

  	let rennes = City('rennes', {});
  	rennes.setOptions(setCityOptions('rennes'));
  	this.url = "https://data.${rennes.getName()}.fr/api/records/1.0/search/?dataset=${this.dataset}&${rennes.getOptionsString()}";
  	this.rennesData = await this.getAllParkingData(rennes, this.url);

  }

  async getAllParkingData(city: City, url) {
  	let type = "static";
  	let parkingData = getParkingData(city, url);
  	/* /!\ Reste à faire /!\ 
				- Vérifier si une entité City existe déjà avec ce nom, si oui on change les options en rappellant la fonction associée en lui envoyant le bon type (ci-dessus et en dessous)
  	*/
  	let type = "dynamic";
  	let time_parkingData = getParkingTimeData(city, url);

  	/* Data est un object cumulant les données de parkin simples et les donnes en temps réèl. Il faut le créer avec les données remontées ci-dessus. */

  	let data: any = "";

  	return data;
  }

  getParkingData(city, url) {
  	let city_name = city.getName();
  	if (city_name === "angers") {
  		this.dataset = "pv_equip_parking";
  	} else if (city_name === "nantes") {
  		/* Ajouter le dataset correspondant à lAPI globale des parkins nantais */
  		this.dataset = "";
  	} else if (city_name === "rennes") {
  		this.dataset = "parkings";
  	}
  	console.log(url);

  	/* Requête http à préparer avec le client(cf constructor) et l'url récupérée dans l'objet City city  */

  	return;
  }

  getParkingTimeData(city, url) {
  	let city_name = city.getName();
  	if (city_name === "angers") {
  		/* https://data.angers.fr/explore/dataset/parking-angers/information/ pour le dataset */
  		this.dataset = "";
  	} else if (city_name === "nantes") {
  		this.dataset = "244400404_parkings-publics-nantes-disponibilites";
  	} else if (city_name === "rennes") {
  		/* https://data.rennesmetropole.fr/explore/dataset/export-api-parking-citedia/information/ pour le dataset */
  		this.dataset = "";
  	}
  	console.log(url);

  	/* Requête http à préparer avec le client(cf constructor) et l'url récupérée dans l'objet City city  */

  	return;
  }

  setCityOptions(city, type: any = undefined) {
  	/* Implémenter la vérification du type d'appel pour définir les bonnes options (en gros un if else sur type en plus) */
  	let options = [];
  	/* Options définies pour Angers seulement, les autres sont à faire en fonction des appel de fonctions */
  	switch (city) {
  		case 'angers' :
  			options.push('id_parking', 'nb_places');
  		case 'nantes' :
  			/* Options à ajouter */
  			options.push();
  		case 'rennes' :
  			/* Options à ajouter */
  			options.push();
  	}

  	return options;
  }
}
