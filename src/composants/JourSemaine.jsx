import useSWR from 'swr';
import Majuscule from '../Majuscule';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const JourSemaine = ({searchTerm, hours, day}) => {

	//date
	const date = new Date();
	date.setDate(date.getDate() + day);
	const options = {
		day: 'numeric',
		weekday: 'long'
	};
	let dateMaj = Majuscule(date.toLocaleDateString('fr-FR', options));
	//date

	const { data, error, isLoading } = useSWR(`http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm || "Paris"}&units=metric&lang=fr&appid=245fcaaec0c578ff00818166cc28347b`, fetcher)

	if (error) return <div className='w-screen'>Erreur lors du chargement.</div>
	if (isLoading) {
	return (
		<div className='w-screen'>
		<div className='absolute text-4xl left-1/2 top-1/2'>Chargement...</div>
		</div>
	)
	}

  return (
    <>
    <div className="relative h-64 overflow-hidden text-center shadow-2xl w-60 bg-gradient-to-br from-teal-100 to-blue-300 rounded-3xl min-w-36" id="jour0">
	<div className="mx-auto text-4xl" id="details0">
	<h1 className="font-semibold">{dateMaj}</h1>
		<img src={`https://openweathermap.org/img/wn/${data.list[hours].weather[0].icon}@2x.png`} className="mx-auto -mt-4"/>
			<h1 className="mb-10 -mt-4 text-4xl font-semibold">{Math.round(data.list[hours].main.temp)+"°C"}</h1>
      <div className="w-full h-full -mt-6 text-xl">
			<div className="flex mx-auto justify-evenly">
				<h3>Ressenti</h3>
				<h3>{Math.round(data.list[hours].main.feels_like)+"°C"}</h3>
			</div>
			<div className="flex mx-auto justify-evenly">
				<h3>Humidité</h3>
				<h3>{Math.round(data.list[hours].main.humidity)+"%"}</h3>
			</div>
			<div className="flex mx-auto justify-evenly">
				<h3>Vent</h3>
				<h3>{Math.round(data.list[hours].wind.speed)+"km/h"}</h3>
			</div>
      </div>
		</div>
	</div>
    </>
  )
}

export default JourSemaine