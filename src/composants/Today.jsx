import useSWR from 'swr';
import Majuscule from '../Majuscule';

const date = new Date();
const options = {
    day: 'numeric',
    weekday: 'long',
    month: 'long'
};

let dateMaj = Majuscule(date.toLocaleDateString('fr-FR', options));

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Today = ({searchTerm}) => {
	
	const { data, error, isLoading } = useSWR(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm || "Paris"}&units=metric&lang=fr&appid=245fcaaec0c578ff00818166cc28347b`, fetcher)

  if (error) return <div className='w-screen'>Erreur lors du chargement.</div>
  if (isLoading) {
	return (
		<div className='w-screen'>
		<div className='absolute text-4xl left-1/2 top-1/2'>Chargement...</div>
		</div>
	)
  }

  return (
    <div className='w-screen'>
	<div id="today" className='bg-gradient-to-br from-teal-100 to-blue-300 relative lg:w-2/5 lg:max-w-xl md:w-3/5 sm:w-5/6 xs:w-4/5 mx-auto mt-8 mb-12 text-center flex flex-col items-center py-1.5 px-5 shadow-2xl'>
		<ul id="infosDuJour" className='absolute left-0 text-right lg:-left-36 lg:text-2xl lg:max-w-32 md:max-w-20 md:text-lg sm:left-0 sm:text-base xs:-left-4 xs:text-xs max-w-24 '>
			<li>Météo</li>
			<li>{dateMaj}</li>
			<li>{Majuscule(data.weather[0].description)}</li>
		</ul>
		<h1 className='text-4xl font-semibold md:text-6xl sm:text-5xl xs:text-4xl'>{data.name + " (" + data.sys.country + ")"}</h1>
		<img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={`Image météo ${data.weather[0].description}`} />
		<p className='text-6xl font-semibold'>
			{Math.round(data.main.temp) + "°C"}
		</p>
		<p className='my-5 text-3xl font-bold'>
			{"Ressenti: " + Math.round(data.main.feels_like) + "°C"}
		</p>
		<p className='my-5 text-3xl font-bold'>
			{"Humidité: " + data.main.humidity + "%"}
		</p>
		<p className='my-5 text-3xl font-bold'>
			{"Vent: " + data.wind.speed + "km/h"}
		</p>
	</div>
</div>
  )
}

export default Today