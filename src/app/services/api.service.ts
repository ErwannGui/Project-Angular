import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class City {
 	private name: string;
	private options: any;
	public data: any;
	 constructor(name, options) {
    this.name = name;
    this.options = options;
    this.data = [];
 	}

	getName() {
 		return this.name;
 	}

 	getOptionsString() {
   	let options_string = "";
   	for (var i = 0; i <= this.options.length ; i++) {
   		options_string =+ "&facet="+this.options[i];
   	}
   	return options_string;
 	}

 	setOptions(options) {
   	this.options = options;
 	}

 	setData(dataCity) {
 		/* Le tableau contiendra toujours 2 Observables en entrée donc on limite le traitementà 2 */
 		for (var i = 0; i < 2; i++) {
 			this.data.push(dataCity[i]);
 		}
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
	options: any;

	angers: City;
	nantes: City;
	rennes: City;

  constructor(public http: HttpClient) {

  	this.dataset = "";

  	/* Ajouter le type (static ou dynamic sous forme de string, exemple plus bas) dans l'appel des options d'url quand ça sera implémenté sur la fonction associée */

  	this.angers = new City('angers', {});
  	this.angersData = this.getAllParkingData(this.angers);

  	this.nantes = new City('nantes', {});
  	this.nantesData = this.getAllParkingData(this.nantes);

  	this.rennes = new City('rennes', {});
  	this.rennesData = this.getAllParkingData(this.rennes);

  }

  getAllParkingData(city: City) {
  	let type = "static";
  	let parkingData: any = this.getParkingData(city);
  	/* /!\ Reste à faire /!\ 
				- Vérifier si une entité City existe déjà avec ce nom, si oui on change les options en rappellant la fonction associée en lui envoyant le bon type (ci-dessus et en dessous)
  	*/
  	type = "dynamic";
  	let time_parkingData: any = this.getParkingTimeData(city);

  	let data = [];
  	data.push(parkingData, time_parkingData);

		/* Data est un object cumulant les données de parkin simples et les donnés en temps réèl. Il faut le créer avec les données remontées ci-dessus. */
  	city.setData(data);

  	return data;
  }

  getParkingData(city: City) {
  	let type = "static";
  	let city_name = city.getName();
  	if (city_name === "angers") {
  		/* https://data.angers.fr/explore/dataset/pv_equip_parking/information/ */
  		this.dataset = "pv_equip_parking";
  	} else if (city_name === "nantes") {
  		/* https://data.nantesmetropole.fr/explore/dataset/244400404_parkings-publics-nantes/information/?disjunctive.libcategorie&disjunctive.libtype&disjunctive.acces_pmr&disjunctive.service_velo&disjunctive.stationnement_velo&disjunctive.stationnement_velo_securise&disjunctive.moyen_paiement */
  		this.dataset = "244400404_parkings-publics-nantes";
  	} else if (city_name === "rennes") {
  		/* https://data.rennesmetropole.fr/explore/dataset/parkings/information/ */
  		this.dataset = "parkings";
  	}

  	this.url = "https://data.${city.getName()}.fr/api/records/1.0/search/?dataset=${this.dataset}${city.getOptionsString()}";
  	console.log(this.url);
  	city.setOptions(this.setCityOptions(city_name, type));
  	console.log(this.url);

  	/* Requête http à préparer avec le client(cf constructor) et l'url récupérée dans l'objet City city  */
  	/* Requête fonctionelle à titre d'exemple. Réutiliser une méthode similaire pour les autres */

  	return this.http.get(this.url);
  }

  getParkingTimeData(city: City) {
  	let type = "dynamic";
  	let city_name = city.getName();
  	if (city_name === "angers") {
  		/* https://data.angers.fr/explore/dataset/parking-angers/information/ */
  		this.dataset = "parking-angers";
  	} else if (city_name === "nantes") {
  		/* https://data.nantesmetropole.fr/explore/dataset/244400404_parkings-publics-nantes-disponibilites/information/?disjunctive.grp_nom&disjunctive.grp_statut */
  		this.dataset = "244400404_parkings-publics-nantes-disponibilites";
  	} else if (city_name === "rennes") {
  		/* https://data.rennesmetropole.fr/explore/dataset/export-api-parking-citedia/information/ */
  		this.dataset = "export-api-parking-citedia";
  	}

  	this.url = "https://data.${city.getName()}.fr/api/records/1.0/search/?dataset=${this.dataset}${city.getOptionsString()}";
  	console.log(this.url);
  	city.setOptions(this.setCityOptions(city_name, type));
  	console.log(this.url);

  	/* Requête http à préparer avec le client(cf constructor) et l'url récupérée dans l'objet City city  */

  	return this.http.get(this.url);
  }

  setCityOptions(city, type) {
  	/* Implémenter la vérification du type d'appel pour définir les bonnes options (en gros un if else sur type en plus) */
  	let options = [];
  	/* Options définies pour Angers seulement, les autres sont à faire en fonction des appel de fonctions */
  	switch (city) {
  		case 'angers' :
  			if (type == "static") {
  				options.push('id_parking', 'nb_places', 'nb_velo_secur', 'nb_places_pmr');
  			} else if (type == "dynamic") {
  				options.push('nom');
  			}
  		case 'nantes' :
  			if (type == "static") {
  				options.push('libcategorie', 'libtype', 'acces_pmr', 'service_velo', 'stationnement_velo', 'stationnement_velo_securise');
  			} else if (type == "dynamic") {
  				options.push('grp_nom', 'grp_statut');
  			}
  		case 'rennes' :
  			if (type == "static") {
  				options.push('nom_commune');
  			} else if (type == "dynamic") {
  				break;
  			}
  	}

  	console.log(options);

  	return options;
  }
}
