import Film from "./Film"

const FilmList = ({names}) => {

    const titleElements = names.map((name) => {
        return (
            <Film title={name.title} 
                  url={name.url} 
                  key={name.id}/>
        )
    })
    

    return (
        <> 
            <h2>Titles</h2>
            {titleElements}
            <p><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases > > </a></p>
        </>

    );
}

export default FilmList;