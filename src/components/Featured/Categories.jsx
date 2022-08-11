import clothing from "../../assets/martClothing.png";
import accessory from "../../assets/martAccess.png";
import shoe from "../../assets/martShoes.png";
import furniture from "../../assets/martFurniture.png";
import artGallery from "../../assets/martGallery.png";
import bags from "../../assets/martBags.png";
import interior from "../../assets/martInterior.png";
import tools from "../../assets/martTools.png";
import textiles from "../../assets/martTextures.png";

function Categories() {
  return (
    <section className="categories">
      <div className="mart-container pt-8 md:pt-[3.75rem]">
        <h2 className="mb-9 font-playFair text-3xl text-martBlack">
          Categories
        </h2>

        <div className="grid-cont grid grid-cols-2 grid-rows-[repeat(5,_120px)]  md:grid-rows-[11.25rem_auto] md:grid-cols-7 max-h-[26.0625rem]">
          <figure className="relative md:row-span-2">
            <img src={clothing} alt="clothing mart" />
            <figcaption className="absolute top-1/4 left-1/2 -translate-x-1/2 text-black font-playFair">
              Clothing
            </figcaption>
          </figure>
          <figure className="relative">
            <img src={accessory} alt="accessory mart" />
            <figcaption className="absolute bottom-3 left-1/2 -translate-x-1/2 text-black font-playFair">
              Accessories
            </figcaption>
          </figure>
          <figure className="relative col-span-2">
            <img src={shoe} alt="shoe mart" />
            <figcaption className="absolute top-14 right-9 text-black font-playFair">
              Shoes
            </figcaption>
          </figure>
          <figure className="relative md:row-span-2">
            <img src={furniture} alt="furniture mart" />
            <figcaption className="absolute top-20 left-1/2 -translate-x-1/2 text-black font-playFair">
              Furniture
            </figcaption>
          </figure>
          <figure className="relative md:col-span-2">
            <img src={artGallery} alt="artGallery mart" />
            <figcaption className="absolute bottom-0 right-3 text-black font-playFair">
              Art gallery
            </figcaption>
          </figure>
          <figure className="relative md:col-span-2">
            <img src={bags} alt="bags mart" />
            <figcaption className="absolute bottom-7 right-12 text-black font-playFair">
              Bags
            </figcaption>
          </figure>
          <figure className="relative">
            <img src={interior} alt="interior mart" />
            <figcaption className="absolute top-3  left-1/2 -translate-x-1/2 text-black font-playFair">
              Interior decors
            </figcaption>
          </figure>
          <figure className="relative">
            <img src={tools} alt="tools mart" />
            <figcaption className="absolute top-4 left-8 text-black font-playFair">
              Art Tools & Supplies
            </figcaption>
          </figure>
          <figure className="relative">
            <img src={textiles} alt="textiles mart" />
            <figcaption className="absolute top-4  left-1/2 -translate-x-1/2 text-white font-playFair">
              Textiles & Fabrics
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Categories;
