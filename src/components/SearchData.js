
const SearchData= ({data}) => {

    return(
   <div>
   { data.map((d) => (
    <div>
    <p key={d.id} style={{color: "red"}}>{d.title}</p>
    <p key={d.id}>{d.description}</p>
    </div>
    ))};
    
</div>
    );
}
export default SearchData;