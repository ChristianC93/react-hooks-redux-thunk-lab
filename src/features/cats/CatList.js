// write your CatList component here
function CatList({ catPics }) {
    const pics = catPics.map((cat) => {
        return <img key={ cat.id } src={ cat.url } alt="cat" />
    })
    return (
        <div>
            {pics}
        </div>
    )
}

export default CatList;