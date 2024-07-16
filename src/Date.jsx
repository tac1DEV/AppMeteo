import Majuscule from "./Majuscule";

export default function Date({day, dateMaj}) {
	const date = new Date();
	date.setDate(date.getDate() + day);
	const options = {
		day: 'numeric',
		weekday: 'long'
	};
	let transformMaj = Majuscule(date.toLocaleDateString('fr-FR', options));
    dateMaj(transformMaj);
}
