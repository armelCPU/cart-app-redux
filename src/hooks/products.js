import useSWR from "swr"
import {useDispatch} from "react-redux";
import { setProducts, setLoading, setError } from "../features/products/slice"
import { useEffect } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useFetchProducts() {
    const dispatch = useDispatch();

    const {data, error, isLoading} = useSWR("https://fakestoreapi.com/products", fetcher);

    useEffect( () => {
        if (data) dispatch(setProducts(data));
        if (error) dispatch(setError(error.message));
        dispatch(setLoading(isLoading));

    }, [data, error, isLoading]);

    return {
        products: data || [],
        error,
        isLoading
    }
};
