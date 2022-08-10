function CustomFeature({ data, title }) {
  return (
    <section className="border-b border-borderBrown border-solid">
      <div className="mart-container pt-8 pb-9 md:pt-[3.75rem] md:pb-[4.375rem] ">
        <h2 className="mb-9 font-playFair text-3xl text-martBlack">{title}</h2>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 ">
            {data.map((el, i) => {
              return (
                <div key={`feature-${i}`}>
                  <img
                    src={el.image}
                    alt="product"
                    className="mb-6 object-contain aspect-[1/1.2] w-full md:mb-10 md:object-cover"
                  />
                  <p className="title font-playFair text-sm text-martBlack700">
                    {el.name}
                  </p>
                  <p className="price font-playFair text-martBlack">
                    US {el.price}
                  </p>
                  <button className="btn  bg-gray-900 uppercase text-white rounded-[10px] font-playFair mt-4 py-3 px-7 md:mt-8">
                    Add Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomFeature;
