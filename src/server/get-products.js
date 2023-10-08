export const getProducts = async () => {
    const response = await fetch("./api/products",{cache:"no-store"});
    const data = await response.json();
    if(data.success){
        const products = data.result;
        return products;
    }
    else{
        return {success:false,fallback:true}
    }
}