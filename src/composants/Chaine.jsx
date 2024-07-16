import JourSemaine from './JourSemaine'

const Chaine = ({searchTerm}) => {
  return (
    <div className='flex w-screen justify-evenly'>
    <JourSemaine searchTerm={searchTerm} hours={7} day={1}/>
    <JourSemaine searchTerm={searchTerm} hours={15} day={2}/>
    <JourSemaine searchTerm={searchTerm} hours={23} day={3}/>
    <JourSemaine searchTerm={searchTerm} hours={31} day={4}/>
    <JourSemaine searchTerm={searchTerm} hours={39} day={5}/>
    </div>
  )
}

export default Chaine