import React from "react";
import { useState, useEffect } from "react";
import FormProduct from "@components/FormProduct";
import { useRouter } from "next/router";
import axios from "axios";
import endPoints from "@services/api";
import Alert from '@common/Alert';
import useAlert from '@hooks/useAlert';


export default function Edit() {

    const [product, setProduct] = useState({});
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const { alert, setAlert, toggleAlert } = useAlert();
    
    useEffect(() => {
        const { id } = router.query;

        if(!router.isReady) return;

        async function getProduct() {
            const response = await axios.get(endPoints.products.getProductId(id));
            setProduct(response.data);
        }

        getProduct();
        
    }, [router?.isReady]);

    return (
        <>
            <Alert alert={alert} handleClose={toggleAlert}/>
            <FormProduct setOpen={setOpen} setAlert={setAlert} product={product} />
        </>
    )

};

