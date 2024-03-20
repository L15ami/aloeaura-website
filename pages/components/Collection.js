import Link from "next/link";

const formatPrice = (price) => {
  if (price !== undefined && price !== null) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return "";
};

export default function Collection({ product }) {
  if (product) {
    return (
      <>
        <section>
          <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:py-12 lg:px-8">
            <header className="text-center">
              <h2 className="text-xl font-bold text-primary sm:text-3xl">
                New Collection
              </h2>
              <p className="max-w-lg mx-auto mt-4 text-gray-500">
                Explore our latest arrivals and elevate your lifestyle with our
                new Natural Products.
              </p>
            </header>
            <div className="">
              <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                  <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                    <div className="max-w-md mx-auto text-center lg:text-left">
                      <header>
                        <h2 className="text-xl font-bold text-primary sm:text-3xl">
                          {product.title}
                        </h2>
                        <p className="mt-4 text-gray-500">
                          {product.description}
                        </p>
                        <p className="mt-4 text-lg mb-10 text-primary">
                          Rs {formatPrice(product.price)}
                        </p>
                      </header>
                      <Link
                        href="/products"
                        className="rounded-lg border border-secondary bg-secondary px-12 py-3 text-center text-md font-medium text-white shadow-sm transition-all hover:bg-primary hover:text-white focus:ring focus:ring-gray-100 hover:border-secondary"
                      >
                        Shop All
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-2 lg:py-8 ">
                    <div className="flex">
                      <div className="w-1/2 mr-4">
                        <div className="block group ">
                          <img
                            src={product.images[0]}
                            alt=""
                            className="object-cover w-full rounded aspect-square relative h-[300px] sm:h-[300px]"
                          />
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="block group">
                          <img
                            src={product.images[1]}
                            alt=""
                            className="object-cover w-full rounded aspect-square relative h-[300px] sm:h-[300px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
