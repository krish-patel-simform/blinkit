type ProductAssets = {
    video_info: {
        url: string;
        aspect_ratio: number;
        thumbnail_url: string;
    };
    image_url: string;
    asset_type: string;
}


export type Category = {
    name: string,
    imageUrl: string,
    id: string
}

export type Product = {
    price: number,
    unit: string,
    unit_price: number,
    unit_type: string,
    brand:string,
    name: string,
    assets: ProductAssets[]
}

export type ProductCategory = {
    title : string,
    products : Product[]
}