
const Film = ({title, url}) => {
    
    
    return (
    <>
        <ul>
            <li><a href={url}><br></br>{title}</a></li>
        </ul>
    </>
    );
}

export default Film;