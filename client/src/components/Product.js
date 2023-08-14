import React from "react";

function Product({ product }) {
  return (
    <div className="relative flex-none max-w-[150px] mr-5 min-w-24 xl:mx-0 xl:mb-5 group rounded-lg p-3 hover:bg-gray-800">
      {/* Rest of the product rendering code */}
      <div className="overflow-hidden bg-gray-100 rounded-md aspect-h-2 aspect-w-2">
        <img
          src={product.img_url}
          alt={product.name}
          className="object-cover object-center"
        />
        <div
          className="flex items-end p-4 opacity-0 group-hover:opacity-100"
          aria-hidden="true"
        ></div>
      </div>
      <div className="flex flex-col items-start justify-center mt-4 text-[12px] font-medium text-white">
        <p>
          <a href={product.link} className="font-bold">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </p>
        <p className="font-normal">Rp. {product.price}</p>
      </div>
    </div>
  );
}

export default Product;
