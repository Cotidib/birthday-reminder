const List = (props) => {

    return (
            <div className='list'>
                {props.people.map(person =>
                    <article key={person.id} className='person-container'>
                        <div className='person-profile'>
                            <img src={person.image} alt={person.name + ' photo'} className={person.happyBDay ? 'highlight': undefined}/>
                            <div className='info'>
                                <h2 className='name'>{person.name}</h2>
                                <div className='bd'>{person.birthday}</div>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => props.onClick(person.id)} className='btn'>remove</button>
                        </div>
                    </article>
                )}
            </div>
       
    )
}

export default List
