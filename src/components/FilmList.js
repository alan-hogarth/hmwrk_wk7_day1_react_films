import Film from "./Film"

const FilmList = ({names}) => {

    const titleElements = names.map((name) => {
        return (
            <Film title={name.title} url={name.url} key={name.id}/>
        )
    })
    

    return (
        <> 
            {titleElements}
        </>

    );
}

export default FilmList;