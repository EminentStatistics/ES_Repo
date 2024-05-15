import { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
// import { myContext } from "./fakestorecategories/fakestoriescategories.component";
// import { contextProduct } from "./fakestorecategories/fakestoriescategories.component";

export default function CartItems(props){

    // const data= useContext(myContext);

    // const [productItems, setProductItems] = useState([])
   
    const [dataArray, setDataArray] = useState([]);

    const itemsDetails = props.dataArray;
        // console.log(itemsDetails);
    // console.log(itemsDetails);

    useEffect(()=>{
        
        getDatArrayDetails();
        
    },[itemsDetails])

    // async function getDatArrayDetails(){
    //     await Promise.all( itemsDetails.map(item => {
    //         axios({
    //             method:'get',
    //             url:`https://fakestoreapi.com/products/${item}`
    //         })
    //         .then(res=>{
    //         // console.log(res.data);
    //         // const newArray = []
    //          setDataArray( res.data)
    //          })
    //     }))
    // }


    // chatGpt code

    async function getDatArrayDetails() {
        try {
          const responses = await Promise.all(
            itemsDetails.map((item) =>
              axios({
                method: "get",
                url: `https://fakestoreapi.com/products/${item}`,
              })
            )
          );
    
          const newDataArray = responses.map((res) => res.data);
          setDataArray(newDataArray);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

    // async function getDataDetails(){
    //   try{
    //     const result = await Promise.all(
    //       itemsDetails.mpa(item =>
    //         axios({
    //           method: 'get',
    //           url : `https://fakestoreapi.com/products/${item}`
    //         })
    //         )
    //     );

    //     const newOne  = result.map(res => res.data);
    //     setDataArray(newOne)

    //   } catch(error){
    //     console.error("Error fetching", error);
    //   }
    // } 

console.log(dataArray);
    
if(dataArray.length <= 0 ){
  return(
    <div className="container-fluid">
        <h3>You don't have any Cart Items  </h3>
    </div>
);

}
else{
  return(
    <div className="container-fluid ">
      <div className="d-flex flex-wrap m-3">
      {
          dataArray.map(product=>
              <div className="card p-2 m-2 " style={{width : '350px'}}>
                <img src={product.image} width="100%" height='300px'></img>
                  <div className="card-header">
                      <dl>
                        <dt>{product.title}</dt>
                        <dd>{product.description}</dd>
                      </dl>
                  </div>
              </div>
            )
        }
      </div>
        
    </div>
  );
}
    

}