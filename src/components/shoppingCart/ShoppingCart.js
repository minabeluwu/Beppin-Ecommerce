import React from "react"
import {
  Link
} from 'react-router-dom'
import "../../styles/shoppingCart.css"

export default () => {

    const json = {
        "productList": [
             {
               "id": 1,
               "nombre": "Mono de tira",
               "categoria": "mujer",
               "precio": "$352.00",
               "descripcion": "Mono de tira de guingán con bolsillo",
               "articulo": "Mono",
               "img": "https://img.ltwebstatic.com/images3_pi/2019/12/26/1577346793f9ae5bb0525ed32abd1363ce8cbd7328_thumbnail_900x.webp",
               
               "img1": "https://img.ltwebstatic.com/images3_pi/2019/12/26/15773467961df7a64bbe1a6a8347c0682ae03f4040.webp",
               "img2": "https://img.ltwebstatic.com/images3_pi/2019/12/26/1577346787a0d20856934496531505c67232d5a964.webp",
               "img3": "https://img.ltwebstatic.com/images3_pi/2019/12/26/1577346791896107fed1cf209c03f1e1d121867716.webp"
            },
            {
                "id": 2,
                "nombre": "Mono con estampado",
                "categoria": "mujer",
                "precio": "$462.00",
                "descripcion": "Mono capucha con estampado de arte pop con cordón delantero",
                "articulo": "Mono",
                "img": "https://img.ltwebstatic.com/images3_pi/2020/05/09/1589010105943e73317ebbc68064ae5ed8cd2eb09a_thumbnail_900x.webp",
    
                "img1": "https://img.ltwebstatic.com/images3_pi/2020/05/09/1589010101f18f68afc484035c3b986dd699ecf942_thumbnail_900x.webp",
                "img2": "https://img.ltwebstatic.com/images3_pi/2020/05/09/15890100968c22dc62fadd0c9ae9c50aca48c8fbed_thumbnail_900x.webp",
                "img3": "https://img.ltwebstatic.com/images3_pi/2020/05/09/158901011081108e9524b83c57fcc7eede66550dd5_thumbnail_900x.webp"
             },
             {
              "id": 3,
              "nombre": "Chaqueta denim",
              "categoria": "mujer",
              "precio": "$545.00",
              "descripcion": "Chaqueta denim bajo crudo con estampado de camuflaje",
              "articulo": "chaqueta",
              "img": "https://img.ltwebstatic.com/images3_pi/2020/01/16/157916596034d273fbbe04380286af8e968ad91eac_thumbnail_900x.webp",
    
              "img1": "https://img.ltwebstatic.com/images3_pi/2020/01/16/1579165965aaddfa334e51072b8efe5d640e6aa835_thumbnail_900x.webp",
              "img2": "https://img.ltwebstatic.com/images3_pi/2020/01/16/15791659699b1cf3330f2f919abdab6a275382adba_thumbnail_900x.webp",
              "img3": "https://img.ltwebstatic.com/images3_pi/2020/01/16/1579165973bf7ec555831056bbddd5c96c7792ea6e_thumbnail_900x.webp"
           },
           {
            "id": 4,
            "nombre": "Falda denim",
            "categoria": "mujer",
            "precio": "$340.00",
            "descripcion": "Falda denim rota bajo crudo",
            "articulo": "Falda",
            "img": "https://img.ltwebstatic.com/images2_pi/2019/06/25/15614498534145937621_thumbnail_900x1199.webp",
    
            "img1": "https://img.ltwebstatic.com/images2_pi/2019/06/25/15614498533250024442_thumbnail_900x1199.webp",
            "img2": "https://img.ltwebstatic.com/images2_pi/2019/06/25/15614498521208463229_thumbnail_900x1199.webp",
            "img3": "https://img.ltwebstatic.com/images2_pi/2019/06/25/15614498524190891998_thumbnail_900x1199.webp"
         }
    
        ]
    }
  return (
    <>
        <section className="shoppingCart">
            <div className="shoppingCart-shoppingList">
                <div className="cardProduct">
                    <p className="cardProduct-idProduct">{json.productList[0].id}</p>
                    <img src={json.productList[0].img} alt="" className="cardProduct-img"/>

                    <div className="cardProduct-description">
                        <p className="cardProduct-product">
                            <span>{json.productList[0].nombre}</span>
                            <br/> 
                            {json.productList[0].descripcion}
                        </p>
                        <p className="cardProduct-price">{json.productList[0].precio}</p>

                        <a href="#" className="cardProduct-button">button</a>
                    </div>
                </div>

                <div className="cardProduct">
                        <p className="cardProduct-idProduct">{json.productList[1].id}</p>
                        <img src={json.productList[1].img} alt="" className="cardProduct-img"/>

                        <div className="cardProduct-description">
                            <p className="cardProduct-product">
                                <span>{json.productList[1].nombre}</span>
                                <br/> 
                                {json.productList[1].descripcion}
                            </p>
                            <p className="cardProduct-price">{json.productList[1].precio}</p>

                            <a href="#" className="cardProduct-button">button</a>
                        </div>
                    </div>

                    <div className="cardProduct">
                        <p className="cardProduct-idProduct">{json.productList[2].id}</p>
                        <img src={json.productList[2].img} alt="" className="cardProduct-img"/>

                        <div className="cardProduct-description">
                            <p className="cardProduct-product">
                                <span>{json.productList[2].nombre}</span>
                                <br/> 
                                {json.productList[2].descripcion}
                            </p>
                            <p className="cardProduct-price">{json.productList[2].precio}</p>

                            <a href="#" className="cardProduct-button">button</a>
                        </div>
                    </div>
                    <div className="cardProduct">
                        <p className="cardProduct-idProduct">{json.productList[3].id}</p>
                        <img src={json.productList[3].img} alt="" className="cardProduct-img"/>

                        <div className="cardProduct-description">
                            <p className="cardProduct-product">
                                <span>{json.productList[3].nombre}</span>
                                <br/> 
                                {json.productList[3].descripcion}
                            </p>
                            <p className="cardProduct-price">{json.productList[3].precio}</p>

                            <a href="#" className="cardProduct-button">button</a>
                        </div>
                    </div>
            </div>

            <div className="cardCost">
                <div className="cardCost-container">
                    <p className="cardCost-productName">
                        <span>{json.productList[0].id}</span> 
                        {json.productList[0].nombre}</p>
                    <p className="cardCost-price">{json.productList[0].precio}</p>
                </div>

                <div className="cardCost-container">
                    <p className="cardCost-productName">
                        <span>{json.productList[1].id}</span> 
                        {json.productList[1].nombre}</p>
                    <p className="cardCost-price">{json.productList[1].precio}</p>
                </div>

                <div className="cardCost-container">
                    <p className="cardCost-productName">
                        <span>{json.productList[2].id}</span> 
                        {json.productList[2].nombre}</p>
                    <p className="cardCost-price">{json.productList[2].precio}</p>
                </div>

                <div className="cardCost-container">
                    <p className="cardCost-productName">
                        <span>{json.productList[3].id}</span> 
                        {json.productList[3].nombre}</p>
                    <p className="cardCost-price">{json.productList[3].precio}</p>
                </div>
                
                {/* Precio Total */}

                <div className="cardCost-container">
                    <p className="cardCost-total">overall price</p>
                    <p className="cardCost-price">{json.productList[3].precio}</p>
                </div>
            </div>
        </section>
        <div className="buttons-container">
                <div className="buttons">
                    <a href="#" className="button">Cancel</a>
                    <a href="#" className="button">Buy</a>
                </div>
            </div>
    </>
  )
}


