import { Suspense } from "react";

import { Product } from "../components/product";
import { Reviews } from "../components/reviews";

export default function ProductReviews(){
    return(
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<p>Loading details...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading reveiws...</p>}>
                <Reviews />
            </Suspense>
            
        </div>
    )
}