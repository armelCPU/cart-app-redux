import useSWR from "swr"
import {useDispatch} from "react-redux";
import { setProducts, setLoading, setError } from "../features/products/slice"

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useFetchProducts() {
    const dispatch = useDispatch();

    const {data, error, isLoading} = useSWR("https://fakestoreapi.com/products", fetcher);

    if (data) dispatch(setProducts(data));
    if (error) dispatch(setError(error.message));
    dispatch(setLoading(isLoading));

    return {
        products: data || [],
        error,
        isLoading
    }
};
