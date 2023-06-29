import { useState,useEffect } from "react";
import axios from "axios";
import { stat } from "fs";

 
 const koneksiKaos_kaki = axios.create({
  
  baseURL: "http://127.0.0.1:5000/api/kaos_kaki" 
});

export default function FormKaos_kaki(){
    const [kaos_kaki, setKaos_kaki] = useState(null);
  
  const handleSubmitAdd = (event) => {
    
    event.preventDefault();
    const formData = new FormData(event.target);
    koneksiKaos_kaki
      .post("/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
     
 }
 
  useEffect(() => {
      async function getKaos_kaki() {
        const response = await koneksiKaos_kaki.get("/").then(function (axiosResponse) {
            setKaos_kaki(axiosResponse.data.data); 
     
         })
         .catch(function (error) {   
          alert('error from kaos_kaki in api kaos_kaki: '+error);
         });;
          }
      getKaos_kaki();
    }, []);
  
   
if(kaos_kaki==null){
return(
  <div>
    waiting...
  </div>
)
}else{

  return (
   <center><div>
    <div className="bg">
    <br></br><h1 style={{color:"blue"}}>DATA KAOS KAKI</h1><br></br>
       <form id="formadd" onSubmit={handleSubmitAdd} >
       <h3>TAMBAH DATA </h3><br/>
        <table border={0}>
            <tbody>
            <tr>
            <td> <label> Kode_barang:</label></td>
            <td><input type="text" id="kode_barang" name="kode_barang"/>
              
              </td>
        </tr>
        <tr>
            <td>  <label> Nama_barang:</label></td>
            <td><input type="text" id="nama_barang"   name="nama_barang" 
               /></td>
        </tr>
        <tr>
            <td>  <label> Foto:</label></td>
            <td>   <input
                    type="file" name="image"/>  </td>
        </tr>
        <tr>
            <td> <label> Size:</label></td>
            <td><input type="text" id="size" name="size"/>
              
              </td>
        </tr>
            </tbody>
          </table>
          <br/>
          <input type="submit" value="Kirim" />
          </form>  

          <br></br>
        <br></br><br></br>
            Tabel Kaos Kaki 
        <table border={5}>
            <thead>
                <tr style={{textAlign:"center"}}>
                <td>kode_barang</td> 
                <td>Nama_barang</td>
                <td>Foto</td>
                <td>Size</td>
                </tr>
            </thead>
            <tbody>
            {kaos_kaki.map((kk) => 
                <tr style={{textAlign:"center"}}>
                    <td>{kk.kode_barang}</td>
                    <td>{kk.nama_barang}</td>
                    <td><img src={kk.foto} width="80"/></td>
                    <td>{kk.size}</td>
                </tr>
           )}     
                   </tbody>
          </table>
          <br></br>
          <br></br><br></br>
          </div>
          </div></center>
        )
}
  
  }