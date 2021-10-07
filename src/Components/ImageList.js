import dummy from "../db/MembersImg.json";
import '../Assets/IntroducePage.css';

function ImageList(){
    const dev={
        display: "flex",
        justifyContent: "center"
    }
    const devImg={
        width:"10vw"
    }
    
    return <div style={dev}>
        <table className="table">
            <tbody>
            <tr>
                {dummy.imageList1.map(image => (
                    <td key={image.id}>
                        <img src={image.img} style={devImg} alt="" ></img>
                        
                    </td>
                ))}
            </tr>
            <tr>
                {dummy.imageList1.map(image => (
                    <td key={image.id}>
                        
                        <p className="memoji_n">{image.name}</p>
                    </td>
                ))}
            </tr>
            <tr className="listingMemoji">
                {dummy.imageList2.map(image => (
                    <td key={image.id}>
                        <img src={image.img}  style={devImg} alt="" ></img>
                        
                    </td>
                ))}
            </tr>
            <tr className="listingMemoji">
                {dummy.imageList2.map(image => (
                    <td key={image.id}>
                        
                        <p className="memoji_n">{image.name}</p>
                    </td>
                ))}
            </tr>
            <tr className="listingMemoji">
                {dummy.imageList3.map(image => (
                    <td key={image.id}>
                        <img src={image.img}  style={devImg} alt="" ></img>

                    </td>
                ))}
            </tr>
            <tr className="listingMemoji">
                {dummy.imageList3.map(image => (
                    <td key={image.id}>

                        <p className="memoji_n">{image.name}</p>
                    </td>
                ))}
            </tr>
            <tr className="listingMemoji">
                {dummy.imageList4.map(image => (
                    <td key={image.id}>
                        <img src={image.img}  style={devImg} alt="" ></img>
 
                    </td>
                ))}
            </tr>
            <tr className="listingMemoji">
                {dummy.imageList4.map(image => (
                    <td key={image.id}>

                        <p className="memoji_n">{image.name}</p>
                    </td>
                ))}
            </tr>
            <tr className="listingMemoji">
                {dummy.imageList5.map(image => (
                    <td key={image.id}>
                        <img src={image.img}  style={devImg} alt="" ></img>

                    </td>
                ))}
            </tr>
            <tr className="listingMemoji">
                {dummy.imageList5.map(image => (
                    <td key={image.id}>

                        <p className="memoji_n">{image.name}</p>
                    </td>
                ))}
            </tr>
            <tr className="listingMemoji">
                {dummy.imageList6.map(image => (
                    <td key={image.id}>
                        <img src={image.img}  style={devImg} alt="" ></img>

                    </td>
                ))}
            </tr>
            <tr className="listingMemoji">
                {dummy.imageList6.map(image => (
                    <td key={image.id}>
                        <p className="memoji_n">{image.name}</p>
                    </td>
                ))}
            </tr>
            </tbody>
        </table>

    </div>
}


export default ImageList;